// Copyright 2019-2024 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT

use super::{AppSettings, DevProcess, ExitReason, Options, RustAppSettings, RustupTarget};
use crate::CommandExt;

use anyhow::Context;
use shared_child::SharedChild;
use std::{
  fs,
  io::{BufReader, ErrorKind, Write},
  path::PathBuf,
  process::{Command, ExitStatus, Stdio},
  sync::{
    atomic::{AtomicBool, Ordering},
    Arc, Mutex,
  },
};

pub struct DevChild {
  manually_killed_app: Arc<AtomicBool>,
  dev_child: Arc<SharedChild>,
}

impl DevProcess for DevChild {
  fn kill(&self) -> std::io::Result<()> {
    self.dev_child.kill()?;
    self.manually_killed_app.store(true, Ordering::Relaxed);
    Ok(())
  }

  fn try_wait(&self) -> std::io::Result<Option<ExitStatus>> {
    self.dev_child.try_wait()
  }

  fn wait(&self) -> std::io::Result<ExitStatus> {
    self.dev_child.wait()
  }

  fn manually_killed_process(&self) -> bool {
    self.manually_killed_app.load(Ordering::Relaxed)
  }
}

pub fn run_dev<F: Fn(Option<i32>, ExitReason) + Send + Sync + 'static>(
  options: Options,
  run_args: Vec<String>,
  available_targets: &mut Option<Vec<RustupTarget>>,
  config_features: Vec<String>,
  on_exit: F,
) -> crate::Result<impl DevProcess> {
  let mut dev_cmd = cargo_command(true, options, available_targets, config_features)?;
  let runner = dev_cmd.get_program().to_string_lossy().into_owned();

  dev_cmd
    .env(
      "CARGO_TERM_PROGRESS_WIDTH",
      terminal::stderr_width()
        .map(|width| {
          if cfg!(windows) {
            std::cmp::min(60, width)
          } else {
            width
          }
        })
        .unwrap_or(if cfg!(windows) { 60 } else { 80 })
        .to_string(),
    )
    .env("CARGO_TERM_PROGRESS_WHEN", "always");
  dev_cmd.arg("--color");
  dev_cmd.arg("always");

  // TODO: double check this
  dev_cmd.stdout(os_pipe::dup_stdout()?);
  dev_cmd.stderr(Stdio::piped());

  dev_cmd.arg("--");
  dev_cmd.args(run_args);

  let manually_killed_app = Arc::new(AtomicBool::default());
  let manually_killed_app_ = manually_killed_app.clone();

  let dev_child = match SharedChild::spawn(&mut dev_cmd) {
    Ok(c) => Ok(c),
    Err(e) if e.kind() == ErrorKind::NotFound => Err(anyhow::anyhow!(
      "`{}` command not found.{}",
      runner,
      if runner == "cargo" {
        " Please follow the Tauri setup guide: https://v2.tauri.app/start/prerequisites/"
      } else {
        ""
      }
    )),
    Err(e) => Err(e.into()),
  }?;
  let dev_child = Arc::new(dev_child);
  let dev_child_stderr = dev_child.take_stderr().unwrap();
  let mut stderr = BufReader::new(dev_child_stderr);
  let stderr_lines = Arc::new(Mutex::new(Vec::new()));
  let stderr_lines_ = stderr_lines.clone();
  std::thread::spawn(move || {
    let mut buf = Vec::new();
    let mut lines = stderr_lines_.lock().unwrap();
    let mut io_stderr = std::io::stderr();
    loop {
      buf.clear();
      if let Ok(0) = tauri_utils::io::read_line(&mut stderr, &mut buf) {
        break;
      }
      let _ = io_stderr.write_all(&buf);
      lines.push(String::from_utf8_lossy(&buf).into_owned());
    }
  });
  let dev_child_ = dev_child.clone();
  std::thread::spawn(move || {
    let status = dev_child_.wait().expect("failed to build app");

    if status.success() {
      on_exit(status.code(), ExitReason::NormalExit);
    } else {
      let is_cargo_compile_error = stderr_lines
        .lock()
        .unwrap()
        .last()
        .map(|l| l.contains("could not compile"))
        .unwrap_or_default();
      stderr_lines.lock().unwrap().clear();

      on_exit(
        status.code(),
        if status.code() == Some(101) && is_cargo_compile_error {
          ExitReason::CompilationFailed
        } else if manually_killed_app_.load(Ordering::Relaxed) {
          ExitReason::TriggeredKill
        } else {
          ExitReason::NormalExit
        },
      );
    }
  });

  Ok(DevChild {
    manually_killed_app,
    dev_child,
  })
}

pub fn build(
  options: Options,
  app_settings: &RustAppSettings,
  available_targets: &mut Option<Vec<RustupTarget>>,
  config_features: Vec<String>,
  main_binary_name: Option<&str>,
) -> crate::Result<PathBuf> {
  let out_dir = app_settings.out_dir(&options)?;
  let bin_path = app_settings.app_binary_path(&options)?;

  if !std::env::var("STATIC_VCRUNTIME").is_ok_and(|v| v == "false") {
    std::env::set_var("STATIC_VCRUNTIME", "true");
  }

  if options.target == Some("universal-apple-darwin".into()) {
    std::fs::create_dir_all(&out_dir).with_context(|| "failed to create project out directory")?;

    let bin_name = bin_path.file_stem().unwrap();

    let mut lipo_cmd = Command::new("lipo");
    lipo_cmd
      .arg("-create")
      .arg("-output")
      .arg(out_dir.join(bin_name));
    for triple in ["aarch64-apple-darwin", "x86_64-apple-darwin"] {
      let mut options = options.clone();
      options.target.replace(triple.into());

      let triple_out_dir = app_settings
        .out_dir(&options)
        .with_context(|| format!("failed to get {triple} out dir"))?;

      build_production_app(options, available_targets, config_features.clone())
        .with_context(|| format!("failed to build {triple} binary"))?;

      lipo_cmd.arg(triple_out_dir.join(bin_name));
    }

    let lipo_status = lipo_cmd.output_ok()?.status;
    if !lipo_status.success() {
      return Err(anyhow::anyhow!(format!(
        "Result of `lipo` command was unsuccessful: {lipo_status}. (Is `lipo` installed?)"
      )));
    }
  } else {
    build_production_app(options, available_targets, config_features)
      .with_context(|| "failed to build app")?;
  }

  rename_app(bin_path, main_binary_name)
}

fn build_production_app(
  options: Options,
  available_targets: &mut Option<Vec<RustupTarget>>,
  config_features: Vec<String>,
) -> crate::Result<()> {
  let mut build_cmd = cargo_command(false, options, available_targets, config_features)?;
  let runner = build_cmd.get_program().to_string_lossy().into_owned();
  match build_cmd.piped() {
    Ok(status) if status.success() => Ok(()),
    Ok(_) => Err(anyhow::anyhow!("failed to build app")),
    Err(e) if e.kind() == ErrorKind::NotFound => Err(anyhow::anyhow!(
      "`{}` command not found.{}",
      runner,
      if runner == "cargo" {
        " Please follow the Tauri setup guide: https://v2.tauri.app/start/prerequisites/"
      } else {
        ""
      }
    )),
    Err(e) => Err(e.into()),
  }
}

fn cargo_command(
  dev: bool,
  options: Options,
  available_targets: &mut Option<Vec<RustupTarget>>,
  config_features: Vec<String>,
) -> crate::Result<Command> {
  let runner = options.runner.unwrap_or_else(|| "cargo".into());

  let mut build_cmd = Command::new(runner);
  build_cmd.arg(if dev { "run" } else { "build" });

  if let Some(target) = &options.target {
    if available_targets.is_none() {
      *available_targets = fetch_available_targets();
    }
    validate_target(available_targets, target)?;
  }

  build_cmd.args(&options.args);

  let mut features = config_features;
  if let Some(f) = options.features {
    features.extend(f);
  }
  if !features.is_empty() {
    build_cmd.arg("--features");
    build_cmd.arg(features.join(","));
  }

  if !options.debug && !options.args.contains(&"--profile".to_string()) {
    build_cmd.arg("--release");
  }

  if let Some(target) = options.target {
    build_cmd.arg("--target");
    build_cmd.arg(target);
  }

  Ok(build_cmd)
}

fn fetch_available_targets() -> Option<Vec<RustupTarget>> {
  if let Ok(output) = Command::new("rustup").args(["target", "list"]).output() {
    let stdout = String::from_utf8_lossy(&output.stdout).into_owned();
    Some(
      stdout
        .split('\n')
        .map(|t| {
          let mut s = t.split(' ');
          let name = s.next().unwrap().to_string();
          let installed = s.next().map(|v| v == "(installed)").unwrap_or_default();
          RustupTarget { name, installed }
        })
        .filter(|t| !t.name.is_empty())
        .collect(),
    )
  } else {
    None
  }
}

fn validate_target(
  available_targets: &Option<Vec<RustupTarget>>,
  target: &str,
) -> crate::Result<()> {
  if let Some(available_targets) = available_targets {
    if let Some(target) = available_targets.iter().find(|t| t.name == target) {
      if !target.installed {
        anyhow::bail!(
            "Target {target} is not installed (installed targets: {installed}). Please run `rustup target add {target}`.",
            target = target.name,
            installed = available_targets.iter().filter(|t| t.installed).map(|t| t.name.as_str()).collect::<Vec<&str>>().join(", ")
          );
      }
    }
    if !available_targets.iter().any(|t| t.name == target) {
      anyhow::bail!("Target {target} does not exist. Please run `rustup target list` to see the available targets.", target = target);
    }
  }
  Ok(())
}

fn rename_app(bin_path: PathBuf, main_binary_name: Option<&str>) -> crate::Result<PathBuf> {
  if let Some(main_binary_name) = main_binary_name {
    let new_path = bin_path
      .with_file_name(main_binary_name)
      .with_extension(bin_path.extension().unwrap_or_default());

    fs::rename(&bin_path, &new_path).with_context(|| {
      format!(
        "failed to rename `{}` to `{}`",
        tauri_utils::display_path(bin_path),
        tauri_utils::display_path(&new_path),
      )
    })?;
    Ok(new_path)
  } else {
    Ok(bin_path)
  }
}

// taken from https://github.com/rust-lang/cargo/blob/78b10d4e611ab0721fc3aeaf0edd5dd8f4fdc372/src/cargo/core/shell.rs#L514
#[cfg(unix)]
mod terminal {
  use std::mem;

  pub fn stderr_width() -> Option<usize> {
    unsafe {
      let mut winsize: libc::winsize = mem::zeroed();
      // The .into() here is needed for FreeBSD which defines TIOCGWINSZ
      // as c_uint but ioctl wants c_ulong.
      #[allow(clippy::useless_conversion)]
      if libc::ioctl(libc::STDERR_FILENO, libc::TIOCGWINSZ.into(), &mut winsize) < 0 {
        return None;
      }
      if winsize.ws_col > 0 {
        Some(winsize.ws_col as usize)
      } else {
        None
      }
    }
  }
}

// taken from https://github.com/rust-lang/cargo/blob/78b10d4e611ab0721fc3aeaf0edd5dd8f4fdc372/src/cargo/core/shell.rs#L543
#[cfg(windows)]
mod terminal {
  use std::{cmp, mem, ptr};

  use windows_sys::{
    core::PCSTR,
    Win32::{
      Foundation::{CloseHandle, GENERIC_READ, GENERIC_WRITE, INVALID_HANDLE_VALUE},
      Storage::FileSystem::{CreateFileA, FILE_SHARE_READ, FILE_SHARE_WRITE, OPEN_EXISTING},
      System::Console::{
        GetConsoleScreenBufferInfo, GetStdHandle, CONSOLE_SCREEN_BUFFER_INFO, STD_ERROR_HANDLE,
      },
    },
  };

  pub fn stderr_width() -> Option<usize> {
    unsafe {
      let stdout = GetStdHandle(STD_ERROR_HANDLE);
      let mut csbi: CONSOLE_SCREEN_BUFFER_INFO = mem::zeroed();
      if GetConsoleScreenBufferInfo(stdout, &mut csbi) != 0 {
        return Some((csbi.srWindow.Right - csbi.srWindow.Left) as usize);
      }

      // On mintty/msys/cygwin based terminals, the above fails with
      // INVALID_HANDLE_VALUE. Use an alternate method which works
      // in that case as well.
      let h = CreateFileA(
        c"CONOUT$".as_ptr() as PCSTR,
        GENERIC_READ | GENERIC_WRITE,
        FILE_SHARE_READ | FILE_SHARE_WRITE,
        ptr::null_mut(),
        OPEN_EXISTING,
        0,
        std::ptr::null_mut(),
      );
      if h == INVALID_HANDLE_VALUE {
        return None;
      }

      let mut csbi: CONSOLE_SCREEN_BUFFER_INFO = mem::zeroed();
      let rc = GetConsoleScreenBufferInfo(h, &mut csbi);
      CloseHandle(h);
      if rc != 0 {
        let width = (csbi.srWindow.Right - csbi.srWindow.Left) as usize;
        // Unfortunately cygwin/mintty does not set the size of the
        // backing console to match the actual window size. This
        // always reports a size of 80 or 120 (not sure what
        // determines that). Use a conservative max of 60 which should
        // work in most circumstances. ConEmu does some magic to
        // resize the console correctly, but there's no reasonable way
        // to detect which kind of terminal we are running in, or if
        // GetConsoleScreenBufferInfo returns accurate information.
        return Some(cmp::min(60, width));
      }

      None
    }
  }
}
