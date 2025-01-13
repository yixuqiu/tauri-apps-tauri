# Changelog

## \[2.3.0]

### New Features

- [`18bd639f6`](https://www.github.com/tauri-apps/tauri/commit/18bd639f6e22c0188aa219739f367b5bf5ab0398) ([#11798](https://www.github.com/tauri-apps/tauri/pull/11798) by [@lars-berger](https://www.github.com/tauri-apps/tauri/../../lars-berger)) Add `WebviewWindowBuilder/WebviewBuilder::data_store_identifier` on macOS.
- [`dc4d79477`](https://www.github.com/tauri-apps/tauri/commit/dc4d79477665bc3bfefb4048772414cf5d78e3df) ([#11628](https://www.github.com/tauri-apps/tauri/pull/11628) by [@SpikeHD](https://www.github.com/tauri-apps/tauri/../../SpikeHD)) Add `WebviewWindowBuilder/WebviewBuilder::extensions_path` on Linux and Windows.
- [`020ea0556`](https://www.github.com/tauri-apps/tauri/commit/020ea05561348dcd6d2a7df358f8a5190f661ba2) ([#11661](https://www.github.com/tauri-apps/tauri/pull/11661) by [@ahqsoftwares](https://www.github.com/tauri-apps/tauri/../../ahqsoftwares)) Add badging APIs:

  - `Window/WebviewWindow::set_badge_count` for Linux, macOS and IOS.
  - `Window/WebviewWindow::set_overlay_icon` for Windows Only.
  - `Window/WebviewWindow::set_badge_label`for macOS Only.

### Dependencies

- Upgraded to `tauri-utils@2.1.1`

## \[2.2.0]

### New Features

- [`4d545ab3c`](https://www.github.com/tauri-apps/tauri/commit/4d545ab3ca228c8a21b966b709f84a0da2864479) ([#11486](https://www.github.com/tauri-apps/tauri/pull/11486) by [@amrbashir](https://www.github.com/tauri-apps/tauri/../../amrbashir)) Added `Window::set_background_color` and `WindowBuilder::background_color`.
- [`f37e97d41`](https://www.github.com/tauri-apps/tauri/commit/f37e97d410c4a219e99f97692da05ca9d8e0ba3a) ([#11477](https://www.github.com/tauri-apps/tauri/pull/11477) by [@amrbashir](https://www.github.com/tauri-apps/tauri/../../amrbashir)) Add `WebviewWindowBuilder/WebviewBuilder::use_https_scheme` to choose whether the custom protocols should use `https://<scheme>.localhost` instead of the default `http://<scheme>.localhost` on Windows and Android
- [`cbc095ec5`](https://www.github.com/tauri-apps/tauri/commit/cbc095ec5fe7de29b5c9265576d4e071ec159c1c) ([#11451](https://www.github.com/tauri-apps/tauri/pull/11451) by [@amrbashir](https://www.github.com/tauri-apps/tauri/../../amrbashir)) Add `WebviewWindowBuilder::devtools` and `WebviewBuilder::devtools` to enable or disable devtools for a specific webview.
- [`2a75c64b5`](https://www.github.com/tauri-apps/tauri/commit/2a75c64b5431284e7340e8743d4ea56a62c75466) ([#11469](https://www.github.com/tauri-apps/tauri/pull/11469) by [@amrbashir](https://www.github.com/tauri-apps/tauri/../../amrbashir)) Added `WindowBuilder/WebviewWindowBuilder::window_classname` method to specify the name of the window class on Windows.

### Bug Fixes

- [`129414faa`](https://www.github.com/tauri-apps/tauri/commit/129414faa4e027c9035d56614682cacc0335a6a0) ([#11569](https://www.github.com/tauri-apps/tauri/pull/11569) by [@amrbashir](https://www.github.com/tauri-apps/tauri/../../amrbashir)) Fix webview not focused by default.

### Dependencies

- Upgraded to `tauri-utils@2.1.0`

## \[2.1.1]

### Dependencies

- Upgraded to `tauri-utils@2.0.2`

## \[2.1.0]

### Bug Fixes

- [`2d087ee4b`](https://www.github.com/tauri-apps/tauri/commit/2d087ee4b7d3e8849933f81284e4f5ed1aaa6455) ([#11268](https://www.github.com/tauri-apps/tauri/pull/11268) by [@amrbashir](https://www.github.com/tauri-apps/tauri/../../amrbashir)) On Linux, fix commands, that use `Webview` or `WebviewWindow` as an argument, receiving an incorrect webview when using multi webviews.
- [`2d087ee4b`](https://www.github.com/tauri-apps/tauri/commit/2d087ee4b7d3e8849933f81284e4f5ed1aaa6455) ([#11268](https://www.github.com/tauri-apps/tauri/pull/11268) by [@amrbashir](https://www.github.com/tauri-apps/tauri/../../amrbashir)) On Linux, fix events only emitted to first webview only when using multi webviews.
- [`2d087ee4b`](https://www.github.com/tauri-apps/tauri/commit/2d087ee4b7d3e8849933f81284e4f5ed1aaa6455) ([#11268](https://www.github.com/tauri-apps/tauri/pull/11268) by [@amrbashir](https://www.github.com/tauri-apps/tauri/../../amrbashir)) On Linux, fix custom protocols receiving an incorrect webview label when using multi webviews

## \[2.0.1]

### What's Changed

- [`0ab2b3306`](https://www.github.com/tauri-apps/tauri/commit/0ab2b330644b6419f6cee1d5377bfb5cdda2ccf9) ([#11205](https://www.github.com/tauri-apps/tauri/pull/11205) by [@lucasfernog](https://www.github.com/tauri-apps/tauri/../../lucasfernog)) Downgrade MSRV to 1.77.2 to support Windows 7.

### Dependencies

- Upgraded to `tauri-utils@2.0.1`

## \[2.0.0]

### What's Changed

- [`382ed482b`](https://www.github.com/tauri-apps/tauri/commit/382ed482bd08157c39e62f9a0aaad8802f1092cb) Bump MSRV to 1.78.
- [`637285790`](https://www.github.com/tauri-apps/tauri/commit/6372857905ae9c0aedb7f482ddf6cf9f9836c9f2) Promote to v2 stable!

### Dependencies

- Upgraded to `tauri-utils@2.0.0`

## \[2.0.0-rc.13]

### New Features

- [`a247170e1`](https://www.github.com/tauri-apps/tauri/commit/a247170e1f620a9b012274b11cfe51e90327d6e9) ([#11056](https://www.github.com/tauri-apps/tauri/pull/11056) by [@SpikeHD](https://www.github.com/tauri-apps/tauri/../../SpikeHD)) Expose the ability to enabled browser extensions in WebView2 on Windows.
- [`9014a3f17`](https://www.github.com/tauri-apps/tauri/commit/9014a3f1765ca406ea5c3e5224267a79c52cd53d) ([#11066](https://www.github.com/tauri-apps/tauri/pull/11066) by [@amrbashir](https://www.github.com/tauri-apps/tauri/../../amrbashir)) Add `WebviewWindow::clear_all_browsing_data` and `Webview::clear_all_browsing_data` to clear the webview browsing data.
- [`95df53a2e`](https://www.github.com/tauri-apps/tauri/commit/95df53a2ed96873cd35a4b14a5e312d07e4e3004) ([#11143](https://www.github.com/tauri-apps/tauri/pull/11143) by [@Legend-Master](https://www.github.com/tauri-apps/tauri/../../Legend-Master)) Add the ability to set theme dynamically using `Window::set_theme`, `App::set_theme`
- [`d9d2502b4`](https://www.github.com/tauri-apps/tauri/commit/d9d2502b41e39efde679e30c8955006e2ba9ea64) ([#11140](https://www.github.com/tauri-apps/tauri/pull/11140) by [@amrbashir](https://www.github.com/tauri-apps/tauri/../../amrbashir)) Add `WebviewDispatch::hide` and `WebviewDispatch::show` methods.
- [`de7414aab`](https://www.github.com/tauri-apps/tauri/commit/de7414aab935e45540594ea930eb60bae4dbc979) ([#11154](https://www.github.com/tauri-apps/tauri/pull/11154) by [@amrbashir](https://www.github.com/tauri-apps/tauri/../../amrbashir)) Add `Window::set_enabled` and `Window::is_enabled` methods

### Dependencies

- Upgraded to `tauri-utils@2.0.0-rc.13`

## \[2.0.0-rc.12]

### Dependencies

- Upgraded to `tauri-utils@2.0.0-rc.12`

## \[2.0.0-rc.11]

### Dependencies

- Upgraded to `tauri-utils@2.0.0-rc.11`

## \[2.0.0-rc.10]

### Dependencies

- Upgraded to `tauri-utils@2.0.0-rc.10`

## \[2.0.0-rc.9]

### Dependencies

- Upgraded to `tauri-utils@2.0.0-rc.9`

## \[2.0.0-rc.8]

### Dependencies

- Upgraded to `tauri-utils@2.0.0-rc.8`

## \[2.0.0-rc.7]

### Dependencies

- Upgraded to `tauri-utils@2.0.0-rc.7`

## \[2.0.0-rc.6]

### What's Changed

- [`f4d5241b3`](https://www.github.com/tauri-apps/tauri/commit/f4d5241b377d0f7a1b58100ee19f7843384634ac) ([#10731](https://www.github.com/tauri-apps/tauri/pull/10731) by [@amrbashir](https://www.github.com/tauri-apps/tauri/../../amrbashir)) Update documentation icon path.

### Dependencies

- Upgraded to `tauri-utils@2.0.0-rc.6`

## \[2.0.0-rc.5]

### Dependencies

- Upgraded to `tauri-utils@2.0.0-rc.5`

## \[2.0.0-rc.4]

### Dependencies

- Upgraded to `tauri-utils@2.0.0-rc.4`

## \[2.0.0-rc.3]

### Dependencies

- Upgraded to `tauri-utils@2.0.0-rc.3`
- [`d39c392b7`](https://www.github.com/tauri-apps/tauri/commit/d39c392b7cec746da423211f9c74632abe4b6af5) ([#10655](https://www.github.com/tauri-apps/tauri/pull/10655) by [@lucasfernog](https://www.github.com/tauri-apps/tauri/../../lucasfernog)) Update `tao` to 0.29 and `wry` to 0.42.

## \[2.0.0-rc.2]

### Dependencies

- Upgraded to `tauri-utils@2.0.0-rc.2`

## \[2.0.0-rc.1]

### Dependencies

- Upgraded to `tauri-utils@2.0.0-rc.1`

## \[2.0.0-rc.0]

### Dependencies

- Upgraded to `tauri-utils@2.0.0-rc.0`

## \[2.0.0-beta.21]

### What's Changed

- [`da25f7353`](https://www.github.com/tauri-apps/tauri/commit/da25f7353070477ba969851e974379d7666d6806) ([#10242](https://www.github.com/tauri-apps/tauri/pull/10242) by [@amrbashir](https://www.github.com/tauri-apps/tauri/../../amrbashir)) Add `inner_size_constraints` method on `WindowBuilder` trait and `set_size_constraints` method on `WindowDispatch` trait.

## \[2.0.0-beta.20]

### Dependencies

- Upgraded to `tauri-utils@2.0.0-beta.19`

## \[2.0.0-beta.19]

### Dependencies

- Upgraded to `tauri-utils@2.0.0-beta.18`
- [`d4c908cfb`](https://www.github.com/tauri-apps/tauri/commit/d4c908cfb8c567abdaf99b85f65f482ea81967e5) ([#10048](https://www.github.com/tauri-apps/tauri/pull/10048)) Update `windows` crate to version `0.57` and `webview2-com` crate to version `0.31`

## \[2.0.0-beta.18]

### Enhancements

- [`276c4b143`](https://www.github.com/tauri-apps/tauri/commit/276c4b14385e17cff15a2e5b57fd2a7cddef9f08)([#9832](https://www.github.com/tauri-apps/tauri/pull/9832)) Added `WindowBuilder::get_theme`.

### What's Changed

- [`9ac930380`](https://www.github.com/tauri-apps/tauri/commit/9ac930380a5df3fe700e68e75df8684d261ca292)([#9850](https://www.github.com/tauri-apps/tauri/pull/9850)) Emit `cargo:rustc-check-cfg` instruction so Cargo validates custom cfg attributes on Rust 1.80 (or nightly-2024-05-05).

### Dependencies

- Upgraded to `tauri-utils@2.0.0-beta.17`

## \[2.0.0-beta.17]

### Dependencies

- Upgraded to `tauri-utils@2.0.0-beta.16`

## \[2.0.0-beta.16]

### New Features

- [`78839b6d2`](https://www.github.com/tauri-apps/tauri/commit/78839b6d2f1005a5e6e1a54b0305136bae0c3a7c)([#4865](https://www.github.com/tauri-apps/tauri/pull/4865)) Add `RunEvent::Reopen` for handle click on dock icon on macOS.

### What's Changed

- [`783ef0f2d`](https://www.github.com/tauri-apps/tauri/commit/783ef0f2d331f520fa827c3112f36c0b519b9292)([#9647](https://www.github.com/tauri-apps/tauri/pull/9647)) Changed `WebviewDispatch::url` getter to return a result.

### Dependencies

- Upgraded to `tauri-utils@2.0.0-beta.15`

## \[2.0.0-beta.15]

### Dependencies

- Upgraded to `tauri-utils@2.0.0-beta.14`

## \[2.0.0-beta.14]

### New Features

- [`477bb8cd4`](https://www.github.com/tauri-apps/tauri/commit/477bb8cd4ea88ade3f6c1f268ad1701a68150161)([#9297](https://www.github.com/tauri-apps/tauri/pull/9297)) Add `App/AppHandle/Window/Webview/WebviewWindow::cursor_position` getter to get the current cursor position.

## \[2.0.0-beta.13]

### Dependencies

- Upgraded to `tauri-utils@2.0.0-beta.13`

## \[2.0.0-beta.12]

### New Features

- [`58a7a552d`](https://www.github.com/tauri-apps/tauri/commit/58a7a552d739b77b71d61af11c53f7f2dc7a6e7e)([#9378](https://www.github.com/tauri-apps/tauri/pull/9378)) Added the `set_zoom` function to the webview API.
- [`58a7a552d`](https://www.github.com/tauri-apps/tauri/commit/58a7a552d739b77b71d61af11c53f7f2dc7a6e7e)([#9378](https://www.github.com/tauri-apps/tauri/pull/9378)) Add `zoom_hotkeys_enabled` to enable browser native zoom controls on creating webviews.
- [`4973d73a2`](https://www.github.com/tauri-apps/tauri/commit/4973d73a237dc5c60618c1011e202278e7a29b5c)([#9386](https://www.github.com/tauri-apps/tauri/pull/9386)) Provide a basic zoom hotkey polyfill for non-Windows platforms

### Dependencies

- Upgraded to `tauri-utils@2.0.0-beta.12`

## \[2.0.0-beta.11]

### What's Changed

- [`06833f4fa`](https://www.github.com/tauri-apps/tauri/commit/06833f4fa8e63ecc55fe3fc874a9e397e77a5709)([#9100](https://www.github.com/tauri-apps/tauri/pull/9100)) Updated `http` crate to `1.1`

### Dependencies

- Upgraded to `tauri-utils@2.0.0-beta.11`

### Breaking Changes

- [`06833f4fa`](https://www.github.com/tauri-apps/tauri/commit/06833f4fa8e63ecc55fe3fc874a9e397e77a5709)([#9100](https://www.github.com/tauri-apps/tauri/pull/9100)) The IPC handler closure now receives a `http::Request` instead of a String representing the request body.
- [`06833f4fa`](https://www.github.com/tauri-apps/tauri/commit/06833f4fa8e63ecc55fe3fc874a9e397e77a5709)([#9100](https://www.github.com/tauri-apps/tauri/pull/9100)) Rename `FileDrop` to `DragDrop` on structs, enums and enum variants. Also renamed `file_drop` to `drag_drop` on fields and function names.
- [`06833f4fa`](https://www.github.com/tauri-apps/tauri/commit/06833f4fa8e63ecc55fe3fc874a9e397e77a5709)([#9100](https://www.github.com/tauri-apps/tauri/pull/9100)) Moved `window::dpi` module to the root of the crate.

## \[2.0.0-beta.10]

### Dependencies

- Upgraded to `tauri-utils@2.0.0-beta.10`

## \[2.0.0-beta.9]

### Dependencies

- Upgraded to `tauri-utils@2.0.0-beta.9`

## \[2.0.0-beta.8]

### Dependencies

- Upgraded to `tauri-utils@2.0.0-beta.8`

## \[2.0.0-beta.7]

### New Features

- [`46de49aaa`](https://www.github.com/tauri-apps/tauri/commit/46de49aaad4a148fafc31d591be0e2ed12256507)([#9059](https://www.github.com/tauri-apps/tauri/pull/9059)) Added `set_auto_resize` method for the webview.

### Dependencies

- Upgraded to `tauri-utils@2.0.0-beta.7`

### Breaking Changes

- [`d1e77acd8`](https://www.github.com/tauri-apps/tauri/commit/d1e77acd8dfdf554b90b542513a58a2de1ef2360)([#9011](https://www.github.com/tauri-apps/tauri/pull/9011)) Add a lifetime parameter for `Icon` type. Also changed `rgba` field to be `Cow<'a, [u8]>`

## \[2.0.0-beta.6]

### Dependencies

- Upgraded to `tauri-utils@2.0.0-beta.6`

## \[2.0.0-beta.5]

### Dependencies

- Upgraded to `tauri-utils@2.0.0-beta.5`

## \[2.0.0-beta.4]

### New Features

- [`fdcaf935`](https://www.github.com/tauri-apps/tauri/commit/fdcaf935fa75ecfa2806939c4faad4fe9e880386)([#8939](https://www.github.com/tauri-apps/tauri/pull/8939)) Added the `reparent` function to the webview API.

### Dependencies

- Upgraded to `tauri-utils@2.0.0-beta.4`

## \[2.0.0-beta.3]

### Dependencies

- Upgraded to `tauri-utils@2.0.0-beta.3`

## \[2.0.0-beta.2]

### What's Changed

- [`16e550ec`](https://www.github.com/tauri-apps/tauri/commit/16e550ec1503765158cdc3bb2a20e70ec710e981)([#8844](https://www.github.com/tauri-apps/tauri/pull/8844)) Add `WebviewEvent`, `RunEvent::WebviewEvent` and `WebviewDispatch::on_webview_event`.

### Dependencies

- Upgraded to `tauri-utils@2.0.0-beta.2`

### Breaking Changes

- [`2f55bfec`](https://www.github.com/tauri-apps/tauri/commit/2f55bfecbf0244f3b5aa1ad7622182fca3fcdcbb)([#8795](https://www.github.com/tauri-apps/tauri/pull/8795)) Update raw-window-handle to 0.6.

## \[2.0.0-beta.1]

### Dependencies

- Upgraded to `tauri-utils@2.0.0-beta.1`

## \[2.0.0-beta.0]

### New Features

- [`af610232`](https://www.github.com/tauri-apps/tauri/commit/af6102327376884364b2075b468bdf08ee0d02aa)([#8710](https://www.github.com/tauri-apps/tauri/pull/8710)) Added `Window::destroy` to force close a window.
- [`c77b4032`](https://www.github.com/tauri-apps/tauri/commit/c77b40324ea9bf580871fc11aed69ba0c9b6b8cf)([#8280](https://www.github.com/tauri-apps/tauri/pull/8280)) Add multiwebview support behind the `unstable` feature flag. See `WindowBuilder` and `WebviewBuilder` for more information.
- [`00e15675`](https://www.github.com/tauri-apps/tauri/commit/00e1567584721644797b587205187f9cbe4e5cd1)([#8708](https://www.github.com/tauri-apps/tauri/pull/8708)) Added `RuntimeHandle::request_exit` function.

### Bug Fixes

- [`95da1a27`](https://www.github.com/tauri-apps/tauri/commit/95da1a27476e01e06f6ce0335df8535b662dd9c4)([#8713](https://www.github.com/tauri-apps/tauri/pull/8713)) Fix calling `set_activation_policy` when the event loop is running.

### What's Changed

- [`9eaeb5a8`](https://www.github.com/tauri-apps/tauri/commit/9eaeb5a8cd95ae24b5e66205bdc2763cb7f965ce)([#8622](https://www.github.com/tauri-apps/tauri/pull/8622)) Added `WindowBuilder::transient_for` and Renamed `WindowBuilder::owner_window` to `WindowBuilder::owner` and `WindowBuilder::parent_window` to `WindowBuilder::parent`.
- [`7f033f6d`](https://www.github.com/tauri-apps/tauri/commit/7f033f6dcd54c69a4193765a5c1584755ba92c61)([#8537](https://www.github.com/tauri-apps/tauri/pull/8537)) Add `Window::start_resize_dragging` and `ResizeDirection` enum.
- [`6639a579`](https://www.github.com/tauri-apps/tauri/commit/6639a579c76d45210f33a72d37e21d4c5a9d334b)([#8441](https://www.github.com/tauri-apps/tauri/pull/8441)) Added the `WindowConfig::proxy_url` `WebviewBuilder::proxy_url() / WebviewWindowBuilder::proxy_url()` options when creating a webview.

### Dependencies

- Upgraded to `tauri-utils@2.0.0-beta.0`

### Breaking Changes

- [`9eaeb5a8`](https://www.github.com/tauri-apps/tauri/commit/9eaeb5a8cd95ae24b5e66205bdc2763cb7f965ce)([#8622](https://www.github.com/tauri-apps/tauri/pull/8622)) Changed `WindowBuilder::with_config` to take a reference to a `WindowConfig` instead of an owned value.

## \[1.0.0-alpha.8]

### New Features

- [`29ced5ce`](https://www.github.com/tauri-apps/tauri/commit/29ced5ceec40b2934094ade2db9a8855f294e1d1)([#8159](https://www.github.com/tauri-apps/tauri/pull/8159)) Added download event closure via `PendingWindow::download_handler`.

### Dependencies

- Upgraded to `tauri-utils@2.0.0-alpha.13`

## \[1.0.0-alpha.7]

### Dependencies

- Upgraded to `tauri-utils@2.0.0-alpha.12`

## \[1.0.0-alpha.6]

### Dependencies

- [\`\`](https://www.github.com/tauri-apps/tauri/commit/undefined) Update dependencies.

## \[1.0.0-alpha.5]

### Dependencies

- Upgraded to `tauri-utils@2.0.0-alpha.11`

## \[1.0.0-alpha.4]

### New Features

- [`74d2464d`](https://www.github.com/tauri-apps/tauri/commit/74d2464d0e490fae341ad73bdf2964cf215fe6c5)([#8116](https://www.github.com/tauri-apps/tauri/pull/8116)) Added `on_page_load` hook for `PendingWindow`.

### Enhancements

- [`c6c59cf2`](https://www.github.com/tauri-apps/tauri/commit/c6c59cf2373258b626b00a26f4de4331765dd487) Pull changes from Tauri 1.5 release.

### Dependencies

- Upgraded to `tauri-utils@2.0.0-alpha.10`
- [`9580df1d`](https://www.github.com/tauri-apps/tauri/commit/9580df1d7b027befb9e5f025ea2cbaf2dcc82c8e)([#8084](https://www.github.com/tauri-apps/tauri/pull/8084)) Upgrade `gtk` to 0.18.
- [`c7c2507d`](https://www.github.com/tauri-apps/tauri/commit/c7c2507da16a9beb71bf06745fe7ac1325ab7c2a)([#8035](https://www.github.com/tauri-apps/tauri/pull/8035)) Update `windows` to version `0.51` and `webview2-com` to version `0.27`

## \[1.0.0-alpha.3]

### New Features

- [`c085adda`](https://www.github.com/tauri-apps/tauri/commit/c085addab58ba851398373c6fd13f9cb026d71e8)([#8009](https://www.github.com/tauri-apps/tauri/pull/8009)) Added `set_progress_bar` to `Window`.
- [`c1ec0f15`](https://www.github.com/tauri-apps/tauri/commit/c1ec0f155118527361dd5645d920becbc8afd569)([#7933](https://www.github.com/tauri-apps/tauri/pull/7933)) Added `Window::set_always_on_bottom` and the `always_on_bottom` option when creating a window.
- [`880266a7`](https://www.github.com/tauri-apps/tauri/commit/880266a7f697e1fe58d685de3bb6836ce5251e92)([#8031](https://www.github.com/tauri-apps/tauri/pull/8031)) Bump the MSRV to 1.70.

### Enhancements

- [`46dcb941`](https://www.github.com/tauri-apps/tauri/commit/46dcb94110ac16d0d4328fa149bb86975b658f59)([#8006](https://www.github.com/tauri-apps/tauri/pull/8006)) Include mobile on docs.rs targets.

### Dependencies

- Upgraded to `tauri-utils@2.0.0-alpha.9`

### Breaking Changes

- [`2558fab8`](https://www.github.com/tauri-apps/tauri/commit/2558fab861006936296e8511e43ccd69a38f61b0)([#7939](https://www.github.com/tauri-apps/tauri/pull/7939)) Added `WindowEventId` type and Changed `Dispatch::on_window_event` return type from `Uuid` to `WindowEventId`

## \[1.0.0-alpha.2]

### Dependencies

- Upgraded to `tauri-utils@2.0.0-alpha.8`

## \[1.0.0-alpha.1]

### Enhancements

- [`0d63732b`](https://www.github.com/tauri-apps/tauri/commit/0d63732b962e71b98430f8d7b34ea5b59a2e8bb4)([#7754](https://www.github.com/tauri-apps/tauri/pull/7754)) Changed custom protocol closure type to enable asynchronous usage.

### What's Changed

- [`6177150b`](https://www.github.com/tauri-apps/tauri/commit/6177150b6f83b52ca359d6e20f7e540f7554e4eb)([#7601](https://www.github.com/tauri-apps/tauri/pull/7601)) Changed `FileDropEvent` to include drop and hover position.

### Breaking Changes

- [`0d63732b`](https://www.github.com/tauri-apps/tauri/commit/0d63732b962e71b98430f8d7b34ea5b59a2e8bb4)([#7754](https://www.github.com/tauri-apps/tauri/pull/7754)) `tauri-runtime` no longer implements its own HTTP types and relies on the `http` crate instead.

## \[1.0.0-alpha.0]

### New Features

- [`4db363a0`](https://www.github.com/tauri-apps/tauri/commit/4db363a03c182349f8491f46ced258d84723b11f)([#6589](https://www.github.com/tauri-apps/tauri/pull/6589)) Added `visible_on_all_workspaces` configuration option to `WindowBuilder`, `Window`, and `WindowConfig`.
- [`84c41597`](https://www.github.com/tauri-apps/tauri/commit/84c4159754b2e59244211ed9e1fc702d851a0562)([#6394](https://www.github.com/tauri-apps/tauri/pull/6394)) Added `primary_monitor` and `available_monitors` to `Runtime` and `RuntimeHandle`.
- [`2a000e15`](https://www.github.com/tauri-apps/tauri/commit/2a000e150d02dff28c8b20ad097b29e209160045)([#7235](https://www.github.com/tauri-apps/tauri/pull/7235)) Added `navigate` function to `Dispatch` trait.
- [`3b98141a`](https://www.github.com/tauri-apps/tauri/commit/3b98141aa26f74c641a4090874247b97079bd58a)([#3736](https://www.github.com/tauri-apps/tauri/pull/3736)) Added the `Opened` variant to `RunEvent`.

### Dependencies

- Upgraded to `tauri-utils@2.0.0-alpha.7`

### Breaking Changes

- [`7fb419c3`](https://www.github.com/tauri-apps/tauri/commit/7fb419c326aaf72ecd556d8404377444ebb200e7)([#7535](https://www.github.com/tauri-apps/tauri/pull/7535)) `Dispatch::create_window`, `Runtime::create_window` and `RuntimeHandle::create_window` has been changed to accept a 3rd parameter which is a closure that takes `RawWindow` and to be executed right after the window is created and before the webview is added to the window.
- [`7fb419c3`](https://www.github.com/tauri-apps/tauri/commit/7fb419c326aaf72ecd556d8404377444ebb200e7)([#7535](https://www.github.com/tauri-apps/tauri/pull/7535)) System tray and menu related APIs and structs have all been removed and are now implemented in tauri outside of the runtime-space.
- [`3a2c3e74`](https://www.github.com/tauri-apps/tauri/commit/3a2c3e74710bef9a14932dce74c351cca6215429)([#7306](https://www.github.com/tauri-apps/tauri/pull/7306)) The `PendingWindow#navigation_handler` closure now receives a `&Url` argument instead of `Url`.
- [`7fb419c3`](https://www.github.com/tauri-apps/tauri/commit/7fb419c326aaf72ecd556d8404377444ebb200e7)([#7535](https://www.github.com/tauri-apps/tauri/pull/7535)) `Runtime::new` and `Runtime::new_any_thread` now accept a `RuntimeInitArgs`.
- [`7fb419c3`](https://www.github.com/tauri-apps/tauri/commit/7fb419c326aaf72ecd556d8404377444ebb200e7)([#7535](https://www.github.com/tauri-apps/tauri/pull/7535)) Removed `system-tray` feature flag

## \[0.13.0-alpha.6]

### New Features

- [`e0f0dce2`](https://www.github.com/tauri-apps/tauri/commit/e0f0dce220730e2822fc202463aedf0166145de7)([#6442](https://www.github.com/tauri-apps/tauri/pull/6442)) Added the `window_effects` option when creating a window and `Window::set_effects` to change it at runtime.

## \[0.13.0-alpha.5]

- [`39f1b04f`](https://www.github.com/tauri-apps/tauri/commit/39f1b04f7be4966488484829cd54c8ce72a04200)([#6943](https://www.github.com/tauri-apps/tauri/pull/6943)) Moved the `event` JS APIs to a plugin.
- [`3188f376`](https://www.github.com/tauri-apps/tauri/commit/3188f3764978c6d1452ee31d5a91469691e95094)([#6883](https://www.github.com/tauri-apps/tauri/pull/6883)) Bump the MSRV to 1.65.
- [`cebd7526`](https://www.github.com/tauri-apps/tauri/commit/cebd75261ac71b98976314a450cb292eeeec1515)([#6728](https://www.github.com/tauri-apps/tauri/pull/6728)) Moved the `clipboard` feature to its own plugin in the plugins-workspace repository.
- [`3f17ee82`](https://www.github.com/tauri-apps/tauri/commit/3f17ee82f6ff21108806edb7b00500b8512b8dc7)([#6737](https://www.github.com/tauri-apps/tauri/pull/6737)) Moved the `global-shortcut` feature to its own plugin in the plugins-workspace repository.

## \[0.13.0-alpha.4]

- Added `android` configuration object under `tauri > bundle`.
  - Bumped due to a bump in tauri-utils.
  - [db4c9dc6](https://www.github.com/tauri-apps/tauri/commit/db4c9dc655e07ee2184fe04571f500f7910890cd) feat(core): add option to configure Android's minimum SDK version ([#6651](https://www.github.com/tauri-apps/tauri/pull/6651)) on 2023-04-07

## \[0.13.0-alpha.3]

- Pull changes from Tauri 1.3 release.
  - [](https://www.github.com/tauri-apps/tauri/commit/undefined)  on undefined

## \[0.13.0-alpha.2]

- Add `find_class`, `run_on_android_context` on `RuntimeHandle`.
  - [05dad087](https://www.github.com/tauri-apps/tauri/commit/05dad0876842e2a7334431247d49365cee835d3e) feat: initial work for iOS plugins ([#6205](https://www.github.com/tauri-apps/tauri/pull/6205)) on 2023-02-11
- Added the `shadow` option when creating a window and `Window::set_shadow`.
  - [a81750d7](https://www.github.com/tauri-apps/tauri/commit/a81750d779bc72f0fdb7de90b7fbddfd8049b328) feat(core): add shadow APIs ([#6206](https://www.github.com/tauri-apps/tauri/pull/6206)) on 2023-02-08
- Implemented `with_webview` on Android and iOS.
  - [05dad087](https://www.github.com/tauri-apps/tauri/commit/05dad0876842e2a7334431247d49365cee835d3e) feat: initial work for iOS plugins ([#6205](https://www.github.com/tauri-apps/tauri/pull/6205)) on 2023-02-11

## \[0.13.0-alpha.1]

- Update gtk to 0.16.
  - [7eb9aa75](https://www.github.com/tauri-apps/tauri/commit/7eb9aa75cfd6a3176d3f566fdda02d88aa529b0f) Update gtk to 0.16 ([#6155](https://www.github.com/tauri-apps/tauri/pull/6155)) on 2023-01-30
- Bump the MSRV to 1.64.
  - [7eb9aa75](https://www.github.com/tauri-apps/tauri/commit/7eb9aa75cfd6a3176d3f566fdda02d88aa529b0f) Update gtk to 0.16 ([#6155](https://www.github.com/tauri-apps/tauri/pull/6155)) on 2023-01-30

## \[0.13.0-alpha.0]

- Parse `android` and `ios` Tauri configuration files.
  - Bumped due to a bump in tauri-utils.
  - [b3a3afc7](https://www.github.com/tauri-apps/tauri/commit/b3a3afc7de8de4021d73559288f5192732a706cf) feat(core): detect android and ios platform configuration files ([#4997](https://www.github.com/tauri-apps/tauri/pull/4997)) on 2022-08-22
- First mobile alpha release!
  - Bumped due to a bump in tauri-utils.
  - [fa3a1098](https://www.github.com/tauri-apps/tauri/commit/fa3a10988a03aed1b66fb17d893b1a9adb90f7cd) feat(ci): prepare 2.0.0-alpha.0 ([#5786](https://www.github.com/tauri-apps/tauri/pull/5786)) on 2022-12-08

## \[0.14.2]

### Dependencies

- Upgraded to `tauri-utils@1.5.2`

## \[0.14.1]

### Enhancements

- [`9aa34ada`](https://www.github.com/tauri-apps/tauri/commit/9aa34ada5769dbefa7dfe5f7a6288b3d20b294e4)([#7645](https://www.github.com/tauri-apps/tauri/pull/7645)) Add setting to switch to `http://<scheme>.localhost/` for custom protocols on Windows.

### Dependencies

- Upgraded to `tauri-utils@1.5.0`

## \[0.14.0]

### New Features

- [`c4d6fb4b`](https://www.github.com/tauri-apps/tauri/commit/c4d6fb4b1ea8acf02707a9fe5dcab47c1c5bae7b)([#2353](https://www.github.com/tauri-apps/tauri/pull/2353)) Added the `maximizable`, `minimizable` and `closable` methods to `WindowBuilder`.
- [`c4d6fb4b`](https://www.github.com/tauri-apps/tauri/commit/c4d6fb4b1ea8acf02707a9fe5dcab47c1c5bae7b)([#2353](https://www.github.com/tauri-apps/tauri/pull/2353)) Added `set_maximizable`, `set_minimizable`, `set_closable`, `is_maximizable`, `is_minimizable` and `is_closable` methods to the `Dispatch` trait.
- [`000104bc`](https://www.github.com/tauri-apps/tauri/commit/000104bc3bc0c9ff3d20558ab9cf2080f126e9e0)([#6472](https://www.github.com/tauri-apps/tauri/pull/6472)) Add `Window::is_focused` getter.

### Enhancements

- [`d2710e9d`](https://www.github.com/tauri-apps/tauri/commit/d2710e9d2e8fd93975ef6494512370faa8cb3b7e)([#6944](https://www.github.com/tauri-apps/tauri/pull/6944)) Unpin `time`, `ignore`, and `winnow` crate versions. Developers now have to pin crates if needed themselves. A list of crates that need pinning to adhere to Tauri's MSRV will be visible in Tauri's GitHub workflow: https://github.com/tauri-apps/tauri/blob/dev/.github/workflows/test-core.yml#L85.

### Bug Fixes

- [`2b487c94`](https://www.github.com/tauri-apps/tauri/commit/2b487c946737352187d7e042dd6142873e62a4ca)([#7012](https://www.github.com/tauri-apps/tauri/pull/7012)) Fixes typo in `CursorIcon` deserialization of the `ZoomIn` variant.

### What's Changed

- [`076e1a81`](https://www.github.com/tauri-apps/tauri/commit/076e1a81a50468e3dfb34ae9ca7e77c5e1758daa)([#7119](https://www.github.com/tauri-apps/tauri/pull/7119)) Use `u32` instead of `u64` for js event listener ids
- [`ff5e4dbb`](https://www.github.com/tauri-apps/tauri/commit/ff5e4dbbb01bf3fc9c5143df732c75eef6fd98cb)([#6794](https://www.github.com/tauri-apps/tauri/pull/6794)) impl `From<&WindowConfig>` for `WebviewAttributes`.

## \[0.13.0]

- Added the `additional_browser_args` option when creating a window.
  - [3dc38b15](https://www.github.com/tauri-apps/tauri/commit/3dc38b150ea8c59c8ba67fd586f921016928f47c) feat(core): expose additional_browser_args to window config (fix: [#5757](https://www.github.com/tauri-apps/tauri/pull/5757)) ([#5799](https://www.github.com/tauri-apps/tauri/pull/5799)) on 2022-12-14
- Added the `content_protected` option when creating a window and `Window::set_content_protected` to change it at runtime.
  - [4ab5545b](https://www.github.com/tauri-apps/tauri/commit/4ab5545b7a831c549f3c65e74de487ede3ab7ce5) feat: add content protection api, closes [#5132](https://www.github.com/tauri-apps/tauri/pull/5132) ([#5513](https://www.github.com/tauri-apps/tauri/pull/5513)) on 2022-12-13
- Added `Builder::device_event_filter` and `App::set_device_event_filter` methods.
  - [73fd60ee](https://www.github.com/tauri-apps/tauri/commit/73fd60eef2b60f5dc84525ef9c315f4d80c4414f) expose set_device_event_filter in tauri ([#5562](https://www.github.com/tauri-apps/tauri/pull/5562)) on 2022-12-13
- Add `is_minimized()` window method.
  - [62144ef3](https://www.github.com/tauri-apps/tauri/commit/62144ef3be63b237869e511826edfb938e2c7174) feat: add is_minimized (fix [#3878](https://www.github.com/tauri-apps/tauri/pull/3878)) ([#5618](https://www.github.com/tauri-apps/tauri/pull/5618)) on 2022-12-13
- Bump minimum supported Rust version to 1.60.
  - [5fdc616d](https://www.github.com/tauri-apps/tauri/commit/5fdc616df9bea633810dcb814ac615911d77222c) feat: Use the zbus-backed of notify-rust ([#6332](https://www.github.com/tauri-apps/tauri/pull/6332)) on 2023-03-31
- Pin raw-window-handle to 0.5.0 to keep MSRV.
  - [c46c09f3](https://www.github.com/tauri-apps/tauri/commit/c46c09f31d9f5169ca8a7e62406a9ea170e3a5c5) fix(deps): pin raw-window-handle to 0.5.0 ([#6480](https://www.github.com/tauri-apps/tauri/pull/6480)) on 2023-03-17
- Added `navigation_handler` field on `PendingWindow`.
  - [3f35b452](https://www.github.com/tauri-apps/tauri/commit/3f35b452637ef1c794a423f1eda62a15d2ddaf42) Expose wry navigation_handler via WindowBuilder closes [#4080](https://www.github.com/tauri-apps/tauri/pull/4080) ([#5686](https://www.github.com/tauri-apps/tauri/pull/5686)) on 2022-12-27
- Add `title` getter on window.
  - [233e43b0](https://www.github.com/tauri-apps/tauri/commit/233e43b0c34fada1ca025378533a0b76931a6540) feat: add `title` getter on window, closes [#5023](https://www.github.com/tauri-apps/tauri/pull/5023) ([#5515](https://www.github.com/tauri-apps/tauri/pull/5515)) on 2022-12-13
- Added `TrayHandle::set_tooltip` and `SystemTray::with_tooltip`.
  - [2265e097](https://www.github.com/tauri-apps/tauri/commit/2265e09718f6ebfeb1d200f11e1e1e069075af6e) feat(windows): implement `with_tooltip` ([#5938](https://www.github.com/tauri-apps/tauri/pull/5938)) on 2023-01-01
- Added window's `url()` getter.
  - [d17027e1](https://www.github.com/tauri-apps/tauri/commit/d17027e1a0db3e8c5ae81fc4f472c5918fbce611) feat: expose url method ([#5914](https://www.github.com/tauri-apps/tauri/pull/5914)) on 2022-12-26
- On Windows, change webview theme based on Window theme for more accurate `prefers-color-scheme` support.
  - [7a8d570d](https://www.github.com/tauri-apps/tauri/commit/7a8d570db72667367eb24b75ddc5dd07a968f7c0) fix: sync webview theme with window theme on Windows, closes [#5802](https://www.github.com/tauri-apps/tauri/pull/5802) ([#5874](https://www.github.com/tauri-apps/tauri/pull/5874)) on 2022-12-27

## \[0.12.2]

- Block remote URLs from accessing the IPC.
  - [9c0593c33](https://www.github.com/tauri-apps/tauri/commit/9c0593c33af52cd9e00ec784d15f63efebdf039c) feat(core): block remote URLs from accessing the IPC on 2023-04-12

## \[0.12.1]

- Fix `allowlist > app > show/hide` always disabled when `allowlist > app > all: false`.
  - Bumped due to a bump in tauri-utils.
  - [bb251087](https://www.github.com/tauri-apps/tauri/commit/bb2510876d0bdff736d36bf3a465cdbe4ad2b90c) fix(core): extend allowlist with `app`'s allowlist, closes [#5650](https://www.github.com/tauri-apps/tauri/pull/5650) ([#5652](https://www.github.com/tauri-apps/tauri/pull/5652)) on 2022-11-18

## \[0.12.0]

- Readd the option to create an unfocused window via the `focused` method. The `focus` function has been deprecated.
  - [4036e15f](https://www.github.com/tauri-apps/tauri/commit/4036e15f5af933bdc0d0913508b5103958afc143) feat(core): reimplement window initial focus flag, closes [#5120](https://www.github.com/tauri-apps/tauri/pull/5120) ([#5338](https://www.github.com/tauri-apps/tauri/pull/5338)) on 2022-10-08
- Added `Runtime::show()`, `RuntimeHandle::show()`, `Runtime::hide()`, `RuntimeHandle::hide()` for hiding/showing the entire application on macOS.
  - [39bf895b](https://www.github.com/tauri-apps/tauri/commit/39bf895b73ec6b53f5758815396ba85dda6b9c67) feat(macOS): Add application `show` and `hide` methods ([#3689](https://www.github.com/tauri-apps/tauri/pull/3689)) on 2022-10-03
- - [7d9aa398](https://www.github.com/tauri-apps/tauri/commit/7d9aa3987efce2d697179ffc33646d086c68030c) feat: bump MSRV to 1.59 ([#5296](https://www.github.com/tauri-apps/tauri/pull/5296)) on 2022-09-28
- Added `tabbing_identifier` to the window builder on macOS.
  - [4137ab44](https://www.github.com/tauri-apps/tauri/commit/4137ab44a81d739556cbc7583485887e78952bf1) feat(macos): add `tabbing_identifier` option, closes [#2804](https://www.github.com/tauri-apps/tauri/pull/2804), [#3912](https://www.github.com/tauri-apps/tauri/pull/3912) ([#5399](https://www.github.com/tauri-apps/tauri/pull/5399)) on 2022-10-19
- Added methods to set the system tray title on macOS.
  - [8f1ace77](https://www.github.com/tauri-apps/tauri/commit/8f1ace77956ac3477826ceb059a191e55b3fff93) feat: expose `set_title` for MacOS tray ([#5182](https://www.github.com/tauri-apps/tauri/pull/5182)) on 2022-09-30
- Added the `user_agent` option when creating a window.
  - [a6c94119](https://www.github.com/tauri-apps/tauri/commit/a6c94119d8545d509723b147c273ca5edfe3729f) feat(core): expose user_agent to window config ([#5317](https://www.github.com/tauri-apps/tauri/pull/5317)) on 2022-10-02

## \[0.11.2]

- Block remote URLs from accessing the IPC.
  - [58ea0b452](https://www.github.com/tauri-apps/tauri/commit/58ea0b45268dbd46cbac0ebb0887353d057ca767) feat(core): block remote URLs from accessing the IPC on 2023-04-12

## \[0.11.1]

- Add missing allowlist config for `set_cursor_grab`, `set_cursor_visible`, `set_cursor_icon` and `set_cursor_position` APIs.
  - Bumped due to a bump in tauri-utils.
  - [c764408d](https://www.github.com/tauri-apps/tauri/commit/c764408da7fae123edd41115bda42fa75a4731d2) fix: Add missing allowlist config for cursor apis, closes [#5207](https://www.github.com/tauri-apps/tauri/pull/5207) ([#5211](https://www.github.com/tauri-apps/tauri/pull/5211)) on 2022-09-16

## \[0.11.0]

- Added APIs to create a system tray at runtime.
  - [4d063ae9](https://www.github.com/tauri-apps/tauri/commit/4d063ae9ee9538cd6fa5e01b80070c6edf8eaeb9) feat(core): create system tray at runtime, closes [#2278](https://www.github.com/tauri-apps/tauri/pull/2278) ([#4862](https://www.github.com/tauri-apps/tauri/pull/4862)) on 2022-08-09
- Update windows to 0.39.0 and webview2-com to 0.19.1.
  - [e6d9b670](https://www.github.com/tauri-apps/tauri/commit/e6d9b670b0b314ed667b0e164f2c8d27048e678f) refactor: remove unneeded focus code ([#5065](https://www.github.com/tauri-apps/tauri/pull/5065)) on 2022-09-03

## \[0.10.3]

- Block remote URLs from accessing the IPC.
  - [fa90214b0](https://www.github.com/tauri-apps/tauri/commit/fa90214b052b1a5d38d54fbf1ca422b4c37cfd1f) feat(core): block remote URLs from accessing the IPC on 2023-04-12

## \[0.10.2]

- Added option to disable tray menu on left click on macOS.
  - [f8a3becb](https://www.github.com/tauri-apps/tauri/commit/f8a3becb287942db7f7b551b5db6aeb5a2e939ee) feat(core): add option to disable tray menu on left click, closes [#4584](https://www.github.com/tauri-apps/tauri/pull/4584) ([#4587](https://www.github.com/tauri-apps/tauri/pull/4587)) on 2022-07-05

## \[0.10.1]

- Expose `platform::windows_version` function.
  - Bumped due to a bump in tauri-utils.
  - [bf764e83](https://www.github.com/tauri-apps/tauri/commit/bf764e83e01e7443e6cc54572001e1c98c357465) feat(utils): expose `windows_version` function ([#4534](https://www.github.com/tauri-apps/tauri/pull/4534)) on 2022-06-30

## \[0.10.0]

- Added `fn new` constructors for `PhysicalSize`, `LogicalSize`, `PhysicalPosition` and `LogicalPosition` and missing conversion methods.
  - [c7d13a1c](https://www.github.com/tauri-apps/tauri/commit/c7d13a1c60cdbe0c42834ea059321d7a3a7f01a0) feat(core): add missing methods to the dpi module ([#4393](https://www.github.com/tauri-apps/tauri/pull/4393)) on 2022-06-19
- Implement `raw_window_handle::HasRawWindowHandle` on Linux.
  - [3efbc67f](https://www.github.com/tauri-apps/tauri/commit/3efbc67f7469ce65a2d9ea4ff2b60b51d2a36aa5) feat: implement `raw_window_handle` on Linux ([#4469](https://www.github.com/tauri-apps/tauri/pull/4469)) on 2022-06-26
- Removed the `hwnd` and `ns_window` functions from `Dispatch` in favor of `raw_window_handle`.
  - [3efbc67f](https://www.github.com/tauri-apps/tauri/commit/3efbc67f7469ce65a2d9ea4ff2b60b51d2a36aa5) feat: implement `raw_window_handle` on Linux ([#4469](https://www.github.com/tauri-apps/tauri/pull/4469)) on 2022-06-26
- The theme API is now implemented on macOS 10.14+.
  - [6d94ce42](https://www.github.com/tauri-apps/tauri/commit/6d94ce42353204a02fe9c82ed397d349439f75ef) feat(core): theme is now implemented on macOS ([#4380](https://www.github.com/tauri-apps/tauri/pull/4380)) on 2022-06-17

## \[0.9.0]

- Upgrade to `stable`!
  - Bumped due to a bump in tauri-utils.
  - [f4bb30cc](https://www.github.com/tauri-apps/tauri/commit/f4bb30cc73d6ba9b9ef19ef004dc5e8e6bb901d3) feat(covector): prepare for v1 ([#4351](https://www.github.com/tauri-apps/tauri/pull/4351)) on 2022-06-15

## \[0.8.1]

- Add `Menu::os_default` which will create a menu filled with default menu items and submenus.
  - [4c4acc30](https://www.github.com/tauri-apps/tauri/commit/4c4acc3094218dd9cee0f1ad61810c979e0b41fa) feat: implement `Default` for `Menu`, closes [#2398](https://www.github.com/tauri-apps/tauri/pull/2398) ([#4291](https://www.github.com/tauri-apps/tauri/pull/4291)) on 2022-06-15

## \[0.8.0]

- Removed `TrayIcon` and renamed `WindowIcon` to `Icon`, a shared type for both icons.
  - [4ce8e228](https://www.github.com/tauri-apps/tauri/commit/4ce8e228134cd3f22973b74ef26ca0d165fbbbd9) refactor(core): use `Icon` for tray icons ([#4342](https://www.github.com/tauri-apps/tauri/pull/4342)) on 2022-06-14

## \[0.7.0]

- Added a config flag to bundle the media framework used by webkit2gtk `tauri.conf.json > tauri > bundle > appimage > bundleMediaFramework`.
  - Bumped due to a bump in tauri-utils.
  - [d335fae9](https://www.github.com/tauri-apps/tauri/commit/d335fae92cdcbb0ee18aad4e54558914afa3e778) feat(bundler): bundle additional gstreamer files, closes [#4092](https://www.github.com/tauri-apps/tauri/pull/4092) ([#4271](https://www.github.com/tauri-apps/tauri/pull/4271)) on 2022-06-10

## \[0.6.0]

- Update `windows-rs` to `0.37.0`, which requires Rust 1.61.0+.
  - [2326be39](https://www.github.com/tauri-apps/tauri/commit/2326be39821890cdd4de76e7029a531424dcb26f) feat(core): update windows-rs to 0.37.0 ([#4199](https://www.github.com/tauri-apps/tauri/pull/4199)) on 2022-05-24

## \[0.5.1]

- Fix `.mjs` not being recognised as a file extension for JavaScript files (`text/javascript`).
  - [45c45253](https://www.github.com/tauri-apps/tauri/commit/45c45253866ce0de317a6a547af3ea0434d4bcac) fix: add mjs mime type (fix: [#4098](https://www.github.com/tauri-apps/tauri/pull/4098)) ([#4108](https://www.github.com/tauri-apps/tauri/pull/4108)) on 2022-05-13

## \[0.5.0]

- Expose methods to access the underlying native handles of the webview.
  - [c82b4761](https://www.github.com/tauri-apps/tauri/commit/c82b4761e1660592472dc55308ad69d9efc5855b) feat(core): expose `with_webview` API to access the platform webview ([#4058](https://www.github.com/tauri-apps/tauri/pull/4058)) on 2022-05-04

## \[0.4.0]

- The `AboutMetadata` string setters now take `impl Into<String>`.
  - [b14aa896](https://www.github.com/tauri-apps/tauri/commit/b14aa89673c3563522e5c04baf9630fa1c4739b0) feat(core): improve `AboutMetadata` setters on 2022-03-29
- \**Breaking change::* Added the `clipboard` Cargo feature.
  - [24e4ff20](https://www.github.com/tauri-apps/tauri/commit/24e4ff208ee0fe1a4cc5b10667ea0922ac63dfb5) refactor(core): add clipboard Cargo feature, enhancing binary size ([#3957](https://www.github.com/tauri-apps/tauri/pull/3957)) on 2022-04-24
- Expose Window cursor APIs `set_cursor_grab`, `set_cursor_visible`, `set_cursor_icon` and `set_cursor_position`.
  - [c54ddfe9](https://www.github.com/tauri-apps/tauri/commit/c54ddfe9338e7eb90b4d5b02dfde687d432d5bc1) feat: expose window cursor APIs, closes [#3888](https://www.github.com/tauri-apps/tauri/pull/3888) [#3890](https://www.github.com/tauri-apps/tauri/pull/3890) ([#3935](https://www.github.com/tauri-apps/tauri/pull/3935)) on 2022-04-21
- \**Breaking change::* Added the `global-shortcut` Cargo feature.
  - [e11878bc](https://www.github.com/tauri-apps/tauri/commit/e11878bcf7174b261a1fa146fc7d564d12e6312a) refactor(core): add global-shortcut Cargo feature, enhancing binary size ([#3956](https://www.github.com/tauri-apps/tauri/pull/3956)) on 2022-04-24
- Added `WindowEvent::ThemeChanged(theme)`.
  - [4cebcf6d](https://www.github.com/tauri-apps/tauri/commit/4cebcf6da7cad1953e0f01b426afac3b5ef1f81e) feat: expose theme APIs, closes [#3903](https://www.github.com/tauri-apps/tauri/pull/3903) ([#3937](https://www.github.com/tauri-apps/tauri/pull/3937)) on 2022-04-21
- Added `theme` getter on `Window`.
  - [4cebcf6d](https://www.github.com/tauri-apps/tauri/commit/4cebcf6da7cad1953e0f01b426afac3b5ef1f81e) feat: expose theme APIs, closes [#3903](https://www.github.com/tauri-apps/tauri/pull/3903) ([#3937](https://www.github.com/tauri-apps/tauri/pull/3937)) on 2022-04-21
- Added `theme` setter to the WindowBuilder.
  - [4cebcf6d](https://www.github.com/tauri-apps/tauri/commit/4cebcf6da7cad1953e0f01b426afac3b5ef1f81e) feat: expose theme APIs, closes [#3903](https://www.github.com/tauri-apps/tauri/pull/3903) ([#3937](https://www.github.com/tauri-apps/tauri/pull/3937)) on 2022-04-21

## \[0.3.4]

- Added `close_devtools` and `is_devtools_open` APIs to the `Dispatch` trait.
  - [e05d718a](https://www.github.com/tauri-apps/tauri/commit/e05d718a7b46476d1fe4817c169008080e84f959) feat(core): add hotkey to toggle devtools, closes [#3776](https://www.github.com/tauri-apps/tauri/pull/3776) ([#3791](https://www.github.com/tauri-apps/tauri/pull/3791)) on 2022-03-28
- **Breaking change:** The `MenuItem::About` variant is now associated with a tuple value `(String, AboutMetadata)`.
  - [5fb74332](https://www.github.com/tauri-apps/tauri/commit/5fb74332ab9210ac062d96b0e9afd1c942ee2911) chore(deps): update wry to 0.14, tao to 0.7 ([#3790](https://www.github.com/tauri-apps/tauri/pull/3790)) on 2022-03-28
- Support window parenting on macOS
  - [4e807a53](https://www.github.com/tauri-apps/tauri/commit/4e807a53e2d6d3f3cd5293d90013d5cdded5454e) Support window parenting on macOS, closes [#3751](https://www.github.com/tauri-apps/tauri/pull/3751) ([#3754](https://www.github.com/tauri-apps/tauri/pull/3754)) on 2022-03-23
- The file drop event is now part of the `WindowEvent` enum instead of a having a dedicated handler.
  - [07d1584c](https://www.github.com/tauri-apps/tauri/commit/07d1584cf06ea326aa45d8044bee1b77ecba5006) feat(core): add `WindowEvent::FileDrop`, closes [#3664](https://www.github.com/tauri-apps/tauri/pull/3664) ([#3686](https://www.github.com/tauri-apps/tauri/pull/3686)) on 2022-03-13
- **Breaking change:** Use the dedicated `WindowEvent` enum on `RunEvent`.
  - [edad9f4f](https://www.github.com/tauri-apps/tauri/commit/edad9f4f55dcc69a06cd9d6d5a5068c94ecb77dd) refactor(core): add `RunEvent::WindowEvent` ([#3793](https://www.github.com/tauri-apps/tauri/pull/3793)) on 2022-03-28
- Added `create_proxy` to the `Runtime` and `RuntimeHandle` traits.
  - [5d538ec2](https://www.github.com/tauri-apps/tauri/commit/5d538ec27c246274df4ff5b8057ff78b6364a43f) refactor(core): use the event loop proxy to send updater events ([#3687](https://www.github.com/tauri-apps/tauri/pull/3687)) on 2022-03-15
- Force `Error` boxed errors to be `Sync`.
  - [da1e8793](https://www.github.com/tauri-apps/tauri/commit/da1e879358895f7b190b1c1b20d23da23666a74b) feat(core): improve and cleanup the `Error` enum ([#3748](https://www.github.com/tauri-apps/tauri/pull/3748)) on 2022-03-22
- **Breaking change:** Move the `FileDropEvent` struct to the `window` module.
  - [07d1584c](https://www.github.com/tauri-apps/tauri/commit/07d1584cf06ea326aa45d8044bee1b77ecba5006) feat(core): add `WindowEvent::FileDrop`, closes [#3664](https://www.github.com/tauri-apps/tauri/pull/3664) ([#3686](https://www.github.com/tauri-apps/tauri/pull/3686)) on 2022-03-13
- Allow specifying a user event type for the event loop message.
  - [5d538ec2](https://www.github.com/tauri-apps/tauri/commit/5d538ec27c246274df4ff5b8057ff78b6364a43f) refactor(core): use the event loop proxy to send updater events ([#3687](https://www.github.com/tauri-apps/tauri/pull/3687)) on 2022-03-15
- Added the `WindowEvent::FileDrop` variant.
  - [07d1584c](https://www.github.com/tauri-apps/tauri/commit/07d1584cf06ea326aa45d8044bee1b77ecba5006) feat(core): add `WindowEvent::FileDrop`, closes [#3664](https://www.github.com/tauri-apps/tauri/pull/3664) ([#3686](https://www.github.com/tauri-apps/tauri/pull/3686)) on 2022-03-13

## \[0.3.3]

- **Breaking change:** Move `ico` and `png` parsing behind `icon-ico` and `icon-png` Cargo features.
  - [8c935872](https://www.github.com/tauri-apps/tauri/commit/8c9358725a17dcc2acaf4d10c3f654afdff586b0) refactor(core): move `png` and `ico` behind Cargo features ([#3588](https://www.github.com/tauri-apps/tauri/pull/3588)) on 2022-03-05
- The `PendingWindow::new` and `PendingWindow::with_config` functions now return `Result<Self>` validating the window label.
  - [64e00542](https://www.github.com/tauri-apps/tauri/commit/64e0054299c95f10ef5a1a9d3f914bbaeff3d73f) refactor(core): do not panic on invalid window labels,[#3544](https://www.github.com/tauri-apps/tauri/pull/3544) ([#3596](https://www.github.com/tauri-apps/tauri/pull/3596)) on 2022-03-03

## \[0.3.2]

- Fix requirements for `RuntimeHandle`, `ClipboardManager`, `GlobalShortcutHandle` and `TrayHandle`.
  - [84895a9c](https://www.github.com/tauri-apps/tauri/commit/84895a9cd270fc743e236d0f4d4cd6210b24a30f) fix(runtime): trait requirements ([#3489](https://www.github.com/tauri-apps/tauri/pull/3489)) on 2022-02-17

## \[0.3.1]

- Change default value for the `freezePrototype` configuration to `false`.
  - Bumped due to a bump in tauri-utils.
  - [3a4c0160](https://www.github.com/tauri-apps/tauri/commit/3a4c01606184be762adee055ddac803de0d28527) fix(core): change default `freezePrototype` to false, closes [#3416](https://www.github.com/tauri-apps/tauri/pull/3416) [#3406](https://www.github.com/tauri-apps/tauri/pull/3406) ([#3423](https://www.github.com/tauri-apps/tauri/pull/3423)) on 2022-02-12

## \[0.3.0]

- Replace `WindowBuilder`'s `has_menu` with `get_menu`.
  - [ac37b56e](https://www.github.com/tauri-apps/tauri/commit/ac37b56ef43c9e97039967a5fd99f0d2dccb5b5a) fix(core): menu id map not reflecting the current window menu ([#2726](https://www.github.com/tauri-apps/tauri/pull/2726)) on 2021-10-08
- The `run_return` API is now available on Linux.
  - [8483fde9](https://www.github.com/tauri-apps/tauri/commit/8483fde975aac8833d2ce426e42fb40aeaeecba9) feat(core): expose `run_return` on Linux ([#3352](https://www.github.com/tauri-apps/tauri/pull/3352)) on 2022-02-07
- Add `Menu::with_items` constructor, taking an iterator of `MenuEntry`.
  - [7cc95e10](https://www.github.com/tauri-apps/tauri/commit/7cc95e10ec66d8b155e9bb7f89cf73df56d1f107) feat(core): add `Menu::with_items`, closes [#2807](https://www.github.com/tauri-apps/tauri/pull/2807) ([#2966](https://www.github.com/tauri-apps/tauri/pull/2966)) on 2021-12-27
- Change event loop callbacks definition to allow callers to move in mutable values.
  - [bdbf905e](https://www.github.com/tauri-apps/tauri/commit/bdbf905e5d802b58693d2bd27582ce4269faf79c) Transformed event-loop callback to FnMut to allow mutable values ([#2667](https://www.github.com/tauri-apps/tauri/pull/2667)) on 2021-09-27
- Added `any_thread` constructor on the `Runtime` trait (only possible on Linux and Windows).
  - [af44bf81](https://www.github.com/tauri-apps/tauri/commit/af44bf8168310cf77fbe102a53e7c433f11641a3) feat(core): allow app run on any thread on Linux & Windows, closes [#3172](https://www.github.com/tauri-apps/tauri/pull/3172) ([#3353](https://www.github.com/tauri-apps/tauri/pull/3353)) on 2022-02-07
- Added `run_on_main_thread` API on `RuntimeHandle`.
  - [53fdfe52](https://www.github.com/tauri-apps/tauri/commit/53fdfe52bb30d52653c72ca9f42506c3863dcf4a) feat(core): expose `run_on_main_thread` API ([#2711](https://www.github.com/tauri-apps/tauri/pull/2711)) on 2021-10-04
- **Breaking change:** Renamed the `RPC` interface to `IPC`.
  - [3420aa50](https://www.github.com/tauri-apps/tauri/commit/3420aa5031b3274a95c6c5fa0f8683ca13213396) refactor: IPC handler \[TRI-019] ([#9](https://www.github.com/tauri-apps/tauri/pull/9)) on 2022-01-09
- Added `open_devtools` to the `Dispatcher` trait.
  - [55aa22de](https://www.github.com/tauri-apps/tauri/commit/55aa22de80c3de873e29bcffcb5b2fe236a637a6) feat(core): add `Window#open_devtools` API, closes [#1213](https://www.github.com/tauri-apps/tauri/pull/1213) ([#3350](https://www.github.com/tauri-apps/tauri/pull/3350)) on 2022-02-07
- The minimum Rust version is now `1.56`.
  - [a9dfc015](https://www.github.com/tauri-apps/tauri/commit/a9dfc015505afe91281c2027954ffcc588b1a59c) feat: update to edition 2021 and set minimum rust to 1.56 ([#2789](https://www.github.com/tauri-apps/tauri/pull/2789)) on 2021-10-22
- The window label is now validated and must be alphanumeric, resulting in a panic if it isn't.
  - [680554de](https://www.github.com/tauri-apps/tauri/commit/680554de3ef6b7fccf87c441ad355cfef7aab6fe) feat: validate window label \[TRI-021] ([#13](https://www.github.com/tauri-apps/tauri/pull/13)) on 2021-10-23
- Added `clipboard` field on the `WebviewAttributes` struct, which must be set to `true` to enable clipboard access on the webview.
  - [d42ccfb3](https://www.github.com/tauri-apps/tauri/commit/d42ccfb34f71851dfeb22fe74c83a8bdbddb5550) feat: add `clipboard` flag to `WebviewAttributes` \[TRI-032] ([#12](https://www.github.com/tauri-apps/tauri/pull/12)) on 2021-10-23
- Replace all of the `winapi` crate references with the `windows` crate, and replace `webview2` and `webview2-sys` with `webview2-com` and `webview2-com-sys` built with the `windows` crate. This goes along with updates to the TAO and WRY `next` branches.
  - [bb00d5bd](https://www.github.com/tauri-apps/tauri/commit/bb00d5bd6c9dfcb6bdd0d308dadb70e6c6aafe5c) Replace winapi with windows crate and use webview2-com instead of webview2 ([#2615](https://www.github.com/tauri-apps/tauri/pull/2615)) on 2021-09-24
- Update the `windows` crate to 0.25.0, which comes with pre-built libraries. WRY and Tao can both reference the same types directly from the `windows` crate instead of sharing bindings in `webview2-com-sys`.
  - [34be6cf3](https://www.github.com/tauri-apps/tauri/commit/34be6cf37a98ee7cbd66623ebddae08e5a6520fd) Update webview2-com and windows crates ([#2875](https://www.github.com/tauri-apps/tauri/pull/2875)) on 2021-11-11

## \[0.2.1]

- **Breaking change:** Removed `register_uri_scheme_protocol` from the `WebviewAttributes` struct and renamed `register_global_uri_scheme_protocol` to `register_uri_scheme_protocol` on the `Builder` struct, which now takes a `Fn(&AppHandle, &http::Request) -> http::Response` closure.
  - [539e4489](https://www.github.com/tauri-apps/tauri/commit/539e4489e0bac7029d86917e9982ea49e02fe489) refactor: custom protocol ([#2503](https://www.github.com/tauri-apps/tauri/pull/2503)) on 2021-08-23
- Migrate to latest custom protocol allowing `Partial content` streaming and Header parsing.
  - [539e4489](https://www.github.com/tauri-apps/tauri/commit/539e4489e0bac7029d86917e9982ea49e02fe489) refactor: custom protocol ([#2503](https://www.github.com/tauri-apps/tauri/pull/2503)) on 2021-08-23

## \[0.2.0]

- Fix blur/focus events being incorrect on Windows.
  - [d832d575](https://www.github.com/tauri-apps/tauri/commit/d832d575d9b03a0ff78accabe4631cc638c08c3b) fix(windows): use webview events on windows ([#2277](https://www.github.com/tauri-apps/tauri/pull/2277)) on 2021-07-23

- Add `ExitRequested` event that allows preventing the app from exiting when all windows are closed, and an `AppHandle.exit()` function to exit the app manually.
  - [892c63a0](https://www.github.com/tauri-apps/tauri/commit/892c63a0538f8d62680dce5848657128ad6b7af3) feat([#2287](https://www.github.com/tauri-apps/tauri/pull/2287)): Add `ExitRequested` event to let users prevent app from exiting ([#2293](https://www.github.com/tauri-apps/tauri/pull/2293)) on 2021-08-09

- Fixes minimum window height being used as maximum height.
  - [e3f99165](https://www.github.com/tauri-apps/tauri/commit/e3f9916526b226866137cb663e5cafab2b6a0e01) fix(core) minHeight being used as maxHeight ([#2247](https://www.github.com/tauri-apps/tauri/pull/2247)) on 2021-07-19

- Update gtk and its related libraries to v0.14. This also remove requirements of `clang` as build dependency.
  - [63ad3039](https://www.github.com/tauri-apps/tauri/commit/63ad303903bbee7c9a7382413b342e2a05d3ea75) chore(linux): bump gtk to v0.14 ([#2361](https://www.github.com/tauri-apps/tauri/pull/2361)) on 2021-08-07

- Implement `Debug` on public API structs and enums.
  - [fa9341ba](https://www.github.com/tauri-apps/tauri/commit/fa9341ba18ba227735341530900714dba0f27291) feat(core): implement `Debug` on public API structs/enums, closes [#2292](https://www.github.com/tauri-apps/tauri/pull/2292) ([#2387](https://www.github.com/tauri-apps/tauri/pull/2387)) on 2021-08-11

- Panic when a dispatcher getter method (`Window`, `GlobalShortcutHandle`, `ClipboardManager` and `MenuHandle` APIs) is called on the main thread.
  - [50ffdc06](https://www.github.com/tauri-apps/tauri/commit/50ffdc06fbde56aba32b4291fd130104935d1408) feat(core): panic when a dispatcher getter is used on the main thread ([#2455](https://www.github.com/tauri-apps/tauri/pull/2455)) on 2021-08-16

- Remove menu feature flag since there's no package dependency need to be installed on any platform anymore.
  - [f81ebddf](https://www.github.com/tauri-apps/tauri/commit/f81ebddfcc1aea0d4989706aef43538e8ea98bea) feat: remove menu feature flag ([#2415](https://www.github.com/tauri-apps/tauri/pull/2415)) on 2021-08-13

- Adds `Resumed` and `MainEventsCleared` variants to the `RunEvent` enum.
  - [6be3f433](https://www.github.com/tauri-apps/tauri/commit/6be3f4339168651fe4e003b09f7d181fd12cd5a8) feat(core): add `Resumed` and `MainEventsCleared` events, closes [#2127](https://www.github.com/tauri-apps/tauri/pull/2127) ([#2439](https://www.github.com/tauri-apps/tauri/pull/2439)) on 2021-08-15

- Adds `set_activation_policy` API to the `Runtime` trait (macOS only).
  - [4a031add](https://www.github.com/tauri-apps/tauri/commit/4a031add69014a1f3823f4ea19b172a2557f6794) feat(core): expose `set_activation_policy`, closes [#2258](https://www.github.com/tauri-apps/tauri/pull/2258) ([#2420](https://www.github.com/tauri-apps/tauri/pull/2420)) on 2021-08-13

- Allow creation of empty Window with `create_tao_window()` and management with `send_tao_window_event()` on the AppHandler.
  - [88080855](https://www.github.com/tauri-apps/tauri/commit/8808085541a629b8e22b612a06cef01cf9b3722e) feat(window): Allow creation of Window without `wry` ([#2321](https://www.github.com/tauri-apps/tauri/pull/2321)) on 2021-07-29
  - [15566cfd](https://www.github.com/tauri-apps/tauri/commit/15566cfd64f5072fa4980a6ce5b33259958e9021) feat(core): add API to send wry window message to the event loop ([#2339](https://www.github.com/tauri-apps/tauri/pull/2339)) on 2021-08-02

- - Support [macOS tray icon template](https://developer.apple.com/documentation/appkit/nsimage/1520017-template?language=objc) to adjust automatically based on taskbar color.

- Images you mark as template images should consist of only black and clear colors. You can use the alpha channel in the image to adjust the opacity of black content, however.

- [426a6b49](https://www.github.com/tauri-apps/tauri/commit/426a6b49962de8faf061db2e820ac10fcbb300d6) feat(macOS): Implement tray icon template ([#2322](https://www.github.com/tauri-apps/tauri/pull/2322)) on 2021-07-29

- Add `Event::Ready` on the `run()` callback. Triggered once when the event loop is ready.
  - [28c6b7ad](https://www.github.com/tauri-apps/tauri/commit/28c6b7adfe98e701b158e936eafb7541ddc700e0) feat: add `Event::Ready` ([#2433](https://www.github.com/tauri-apps/tauri/pull/2433)) on 2021-08-15

## \[0.1.4]

- Allow preventing window close when the user requests it.
  - [8157a68a](https://www.github.com/tauri-apps/tauri/commit/8157a68af1d94de1b90a14aa44139bb123b3436b) feat(core): allow listening to event loop events & prevent window close ([#2131](https://www.github.com/tauri-apps/tauri/pull/2131)) on 2021-07-06
- Expose `gtk_window` getter.
  - [e0a8e09c](https://www.github.com/tauri-apps/tauri/commit/e0a8e09cab6799eeb9ec524b5f7780d1e5a84299) feat(core): expose `gtk_window`, closes [#2083](https://www.github.com/tauri-apps/tauri/pull/2083) ([#2141](https://www.github.com/tauri-apps/tauri/pull/2141)) on 2021-07-02
- `Params` has been removed, along with all the associated types on it. Functions that previously accepted those
  associated types now accept strings instead. Type that used a generic parameter `Params` now use `Runtime` instead. If
  you use the `wry` feature, then types with a `Runtime` generic parameter should default to `Wry`, letting you omit the
  explicit type and let the compiler infer it instead.

`tauri`:

- See `Params` note
- If you were using `Params` inside a function parameter or definition, all references to it have been replaced with a
  simple runtime that defaults to `Wry`. If you are not using a custom runtime, just remove `Params` from the definition
  of functions/items that previously took it. If you are using a custom runtime, you *may* need to pass the runtime type
  to these functions.
- If you were using custom types for `Params` (uncommon and if you don't understand you probably were not using it), all
  methods that were previously taking the custom type now takes an `Into<String>` or a `&str`. The types were already
  required to be string-able, so just make sure to convert it into a string before passing it in if this breaking change
  affects you.

`tauri-macros`:

- (internal) Added private `default_runtime` proc macro to allow us to give item definitions a custom runtime only when
  the specified feature is enabled.

`tauri-runtime`:

- See `Params` note
- Removed `Params`, `MenuId`, `Tag`, `TagRef`.
- Added `menu::{MenuHash, MenuId, MenuIdRef}` as type aliases for the internal type that menu types now use.
  - All previous menu items that had a `MenuId` generic now use the underlying `MenuId` type without a generic.
- `Runtime`, `RuntimeHandle`, and `Dispatch` have no more generic parameter on `create_window(...)` and instead use the
  `Runtime` type directly
- `Runtime::system_tray` has no more `MenuId` generic and uses the string based `SystemTray` type directly.
- (internal) `CustomMenuItem::id_value()` is now hashed on creation and exposed as the `id` field with type `MenuHash`.

`tauri-runtime-wry`:

- See `Params` note
- update menu and runtime related types to the ones changed in `tauri-runtime`.

`tauri-utils`:

- `Assets::get` signature has changed to take a `&AssetKey` instead of `impl Into<AssetKey>` to become trait object
  safe.
- [fd8fab50](https://www.github.com/tauri-apps/tauri/commit/fd8fab507c8fa1b113b841af14c6693eb3955f6b) refactor(core): remove `Params` and replace with strings ([#2191](https://www.github.com/tauri-apps/tauri/pull/2191)) on 2021-07-15

## \[0.1.3]

- `Window` is now `Send + Sync` on Windows.
  - [fe32afcc](https://www.github.com/tauri-apps/tauri/commit/fe32afcc933920d6282ae1d63b041b182278a031) fix(core): `Window` must be `Send + Sync` on Windows, closes [#2078](https://www.github.com/tauri-apps/tauri/pull/2078) ([#2093](https://www.github.com/tauri-apps/tauri/pull/2093)) on 2021-06-27

## \[0.1.2]

- Adds `clipboard` APIs (write and read text).
  - [285bf64b](https://www.github.com/tauri-apps/tauri/commit/285bf64bf9569efb2df904c69c6df405ff0d62e2) feat(core): add clipboard writeText and readText APIs ([#2035](https://www.github.com/tauri-apps/tauri/pull/2035)) on 2021-06-21
  - [dee71ad5](https://www.github.com/tauri-apps/tauri/commit/dee71ad58349f699995cc9077b79032bacc6afcb) fix(workflows): update docs workflow syntax ([#2054](https://www.github.com/tauri-apps/tauri/pull/2054)) on 2021-06-23
- Adds `focus` API to the WindowBuilder.
  - [5f351622](https://www.github.com/tauri-apps/tauri/commit/5f351622c7812ad1bb56ddb37364ccaa4124c24b) feat(core): add focus API to the WindowBuilder and WindowOptions, [#1737](https://www.github.com/tauri-apps/tauri/pull/1737) on 2021-05-30
  - [dee71ad5](https://www.github.com/tauri-apps/tauri/commit/dee71ad58349f699995cc9077b79032bacc6afcb) fix(workflows): update docs workflow syntax ([#2054](https://www.github.com/tauri-apps/tauri/pull/2054)) on 2021-06-23
- Adds `is_decorated` getter on Window.
  - [f58a2114](https://www.github.com/tauri-apps/tauri/commit/f58a2114fbfd5307c349f05c88f2e08fd8baa8aa) feat(core): add `is_decorated` Window getter on 2021-05-30
  - [dee71ad5](https://www.github.com/tauri-apps/tauri/commit/dee71ad58349f699995cc9077b79032bacc6afcb) fix(workflows): update docs workflow syntax ([#2054](https://www.github.com/tauri-apps/tauri/pull/2054)) on 2021-06-23
- Adds `is_resizable` getter on Window.
  - [1e8af280](https://www.github.com/tauri-apps/tauri/commit/1e8af280c27f381828d6209722b10e889082fa00) feat(core): add `is_resizable` Window getter on 2021-05-30
  - [dee71ad5](https://www.github.com/tauri-apps/tauri/commit/dee71ad58349f699995cc9077b79032bacc6afcb) fix(workflows): update docs workflow syntax ([#2054](https://www.github.com/tauri-apps/tauri/pull/2054)) on 2021-06-23
- Adds `is_visible` getter on Window.
  - [36506c96](https://www.github.com/tauri-apps/tauri/commit/36506c967de82bc7ff453d11e6104ecf66d7a588) feat(core): add `is_visible` API on 2021-05-30
  - [dee71ad5](https://www.github.com/tauri-apps/tauri/commit/dee71ad58349f699995cc9077b79032bacc6afcb) fix(workflows): update docs workflow syntax ([#2054](https://www.github.com/tauri-apps/tauri/pull/2054)) on 2021-06-23
- Adds `accelerator` method to the `CustomMenuItem` struct to define a keyboard shortcut for the menu item.
  - [034c2601](https://www.github.com/tauri-apps/tauri/commit/034c26013bce0c7bbe6db067ea7fd24a53a5c998) feat(core): add `accelerator` method to `CustomMenuItem` ([#2043](https://www.github.com/tauri-apps/tauri/pull/2043)) on 2021-06-22
- Adds global shortcut interfaces.
  - [3280c4aa](https://www.github.com/tauri-apps/tauri/commit/3280c4aa91e50a8ccdd561a8b48a12a4a13ea8d5) refactor(core): global shortcut is now provided by `tao` ([#2031](https://www.github.com/tauri-apps/tauri/pull/2031)) on 2021-06-21
  - [dee71ad5](https://www.github.com/tauri-apps/tauri/commit/dee71ad58349f699995cc9077b79032bacc6afcb) fix(workflows): update docs workflow syntax ([#2054](https://www.github.com/tauri-apps/tauri/pull/2054)) on 2021-06-23
- Adds `request_user_attention` API to the `Dispatcher` trait.
  - [7dcca6e9](https://www.github.com/tauri-apps/tauri/commit/7dcca6e9281182b11ad3d4a79871f09b30b9b419) feat(core): add `request_user_attention` API, closes [#2023](https://www.github.com/tauri-apps/tauri/pull/2023) ([#2026](https://www.github.com/tauri-apps/tauri/pull/2026)) on 2021-06-20
  - [dee71ad5](https://www.github.com/tauri-apps/tauri/commit/dee71ad58349f699995cc9077b79032bacc6afcb) fix(workflows): update docs workflow syntax ([#2054](https://www.github.com/tauri-apps/tauri/pull/2054)) on 2021-06-23
- Adds `fn run_iteration` (macOS and Windows only) to the Runtime trait.
  - [8c0d0739](https://www.github.com/tauri-apps/tauri/commit/8c0d0739eebf7286b64a5380e922746411eb52c6) feat(core): add `run_iteration`, `parent_window` and `owner_window` APIs, closes [#1872](https://www.github.com/tauri-apps/tauri/pull/1872) ([#1874](https://www.github.com/tauri-apps/tauri/pull/1874)) on 2021-05-21
- Adds `show_menu`, `hide_menu` and `is_menu_visible` APIs to the `Dispatcher` trait.
  - [954460c5](https://www.github.com/tauri-apps/tauri/commit/954460c5205d57444ef4b1412051fbedf3e38676) feat(core): MenuHandle `show`, `hide`, `is_visible` and `toggle` APIs ([#1958](https://www.github.com/tauri-apps/tauri/pull/1958)) on 2021-06-15
  - [dee71ad5](https://www.github.com/tauri-apps/tauri/commit/dee71ad58349f699995cc9077b79032bacc6afcb) fix(workflows): update docs workflow syntax ([#2054](https://www.github.com/tauri-apps/tauri/pull/2054)) on 2021-06-23
- Adds `set_focus` API on Window.
  - [bb6992f8](https://www.github.com/tauri-apps/tauri/commit/bb6992f888196ca7c87bb2fe74ad2bd8bf393e05) feat(core): add `set_focus` window API, fixes [#1737](https://www.github.com/tauri-apps/tauri/pull/1737) on 2021-05-30
  - [dee71ad5](https://www.github.com/tauri-apps/tauri/commit/dee71ad58349f699995cc9077b79032bacc6afcb) fix(workflows): update docs workflow syntax ([#2054](https://www.github.com/tauri-apps/tauri/pull/2054)) on 2021-06-23
- Adds `set_skip_taskbar` API on Window.
  - [e06aa277](https://www.github.com/tauri-apps/tauri/commit/e06aa277384450cfef617c0e57b0d5d403bb1e7f) feat(core): add `set_skip_taskbar` API on 2021-05-30
  - [dee71ad5](https://www.github.com/tauri-apps/tauri/commit/dee71ad58349f699995cc9077b79032bacc6afcb) fix(workflows): update docs workflow syntax ([#2054](https://www.github.com/tauri-apps/tauri/pull/2054)) on 2021-06-23
- Adds `skip_taskbar` API to the WindowBuilder.
  - [5525b03a](https://www.github.com/tauri-apps/tauri/commit/5525b03a78a2232c650043fbd9894ce1553cad41) feat(core): add `skip_taskbar` API to the WindowBuilder/WindowOptions on 2021-05-30
  - [dee71ad5](https://www.github.com/tauri-apps/tauri/commit/dee71ad58349f699995cc9077b79032bacc6afcb) fix(workflows): update docs workflow syntax ([#2054](https://www.github.com/tauri-apps/tauri/pull/2054)) on 2021-06-23
- Adds `Window#center` and `WindowBuilder#center` APIs.
  - [5cba6eb4](https://www.github.com/tauri-apps/tauri/commit/5cba6eb4d28d53f06855d60d4d0eae6b95233ccf) feat(core): add window `center` API, closes [#1822](https://www.github.com/tauri-apps/tauri/pull/1822) ([#1954](https://www.github.com/tauri-apps/tauri/pull/1954)) on 2021-06-05
- Adds `parent_window` and `owner_window` setters to the `WindowBuilder` (Windows only).
  - [8c0d0739](https://www.github.com/tauri-apps/tauri/commit/8c0d0739eebf7286b64a5380e922746411eb52c6) feat(core): add `run_iteration`, `parent_window` and `owner_window` APIs, closes [#1872](https://www.github.com/tauri-apps/tauri/pull/1872) ([#1874](https://www.github.com/tauri-apps/tauri/pull/1874)) on 2021-05-21
- Adds window native handle getter (HWND on Windows).
  - [abf78c58](https://www.github.com/tauri-apps/tauri/commit/abf78c5860cdc52fbfd2bc5dbca29a864e2da8f9) fix(core): set parent window handle on dialogs, closes [#1876](https://www.github.com/tauri-apps/tauri/pull/1876) ([#1889](https://www.github.com/tauri-apps/tauri/pull/1889)) on 2021-05-21

## \[0.1.1]

- Fixes `system-tray` feature usage.
  - [1ab8dd9](https://www.github.com/tauri-apps/tauri/commit/1ab8dd93e670d2a2d070c7a6ec48308a0ab32f1a) fix(core): `system-tray` cargo feature usage, fixes [#1798](https://www.github.com/tauri-apps/tauri/pull/1798) ([#1801](https://www.github.com/tauri-apps/tauri/pull/1801)) on 2021-05-12

## \[0.1.0]

- **Breaking:** `Context` fields are now private, and is expected to be created through `Context::new(...)`.
  All fields previously available through `Context` are now public methods.
  - [5542359](https://www.github.com/tauri-apps/tauri/commit/55423590ddbf560684dab6a0214acf95aadfa8d2) refactor(core): Context fields now private, Icon used on all platforms ([#1774](https://www.github.com/tauri-apps/tauri/pull/1774)) on 2021-05-11
- `tauri-runtime` crate initial release.
  - [665ec1d](https://www.github.com/tauri-apps/tauri/commit/665ec1d4a199ad06e369221da187dc838da71cbf) refactor: move runtime to `tauri-runtime` crate ([#1751](https://www.github.com/tauri-apps/tauri/pull/1751)) on 2021-05-09
  - [45a7a11](https://www.github.com/tauri-apps/tauri/commit/45a7a111e0cf9d9956d713cc9a99fa7a5313eec7) feat(core): add `tauri-wry` crate ([#1756](https://www.github.com/tauri-apps/tauri/pull/1756)) on 2021-05-09
