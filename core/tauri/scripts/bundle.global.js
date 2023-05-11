"use strict";var __TAURI_IIFE__=(()=>{var E=Object.defineProperty;var q=Object.getOwnPropertyDescriptor;var Q=Object.getOwnPropertyNames;var Z=Object.prototype.hasOwnProperty;var g=(n,e)=>{for(var t in e)E(n,t,{get:e[t],enumerable:!0})},J=(n,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Q(e))!Z.call(n,s)&&s!==t&&E(n,s,{get:()=>e[s],enumerable:!(o=q(e,s))||o.enumerable});return n};var K=n=>J(E({},"__esModule",{value:!0}),n);var k=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)};var C=(n,e,t)=>(k(n,e,"read from private field"),t?t.call(n):e.get(n)),F=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)},O=(n,e,t,o)=>(k(n,e,"write to private field"),o?o.call(n,t):e.set(n,t),t);var Ue={};g(Ue,{event:()=>R,invoke:()=>Ne,path:()=>S,tauri:()=>T,window:()=>I});var R={};g(R,{TauriEvent:()=>A,emit:()=>ne,listen:()=>ee,once:()=>te});var T={};g(T,{Channel:()=>D,convertFileSrc:()=>X,invoke:()=>r,transformCallback:()=>m});function Y(){return window.crypto.getRandomValues(new Uint32Array(1))[0]}function m(n,e=!1){let t=Y(),o=`_${t}`;return Object.defineProperty(window,o,{value:s=>(e&&Reflect.deleteProperty(window,o),n?.(s)),writable:!1,configurable:!0}),t}var d,D=class{constructor(){this.__TAURI_CHANNEL_MARKER__=!0;F(this,d,()=>{});this.id=m(e=>{C(this,d).call(this,e)})}set onmessage(e){O(this,d,e)}get onmessage(){return C(this,d)}toJSON(){return`__CHANNEL__:${this.id}`}};d=new WeakMap;async function r(n,e={}){return new Promise((t,o)=>{let s=m(M=>{t(M),Reflect.deleteProperty(window,`_${c}`)},!0),c=m(M=>{o(M),Reflect.deleteProperty(window,`_${s}`)},!0);window.__TAURI_IPC__({cmd:n,callback:s,error:c,...e})})}function X(n,e="asset"){let t=encodeURIComponent(n);return navigator.userAgent.includes("Windows")?`https://${e}.localhost/${t}`:`${e}://localhost/${t}`}async function i(n){return r("tauri",n)}async function N(n,e){return i({__tauriModule:"Event",message:{cmd:"unlisten",event:n,eventId:e}})}async function b(n,e,t){await i({__tauriModule:"Event",message:{cmd:"emit",event:n,windowLabel:e,payload:t}})}async function h(n,e,t){return i({__tauriModule:"Event",message:{cmd:"listen",event:n,windowLabel:e,handler:m(t)}}).then(o=>async()=>N(n,o))}async function _(n,e,t){return h(n,e,o=>{t(o),N(n,o.id).catch(()=>{})})}var A=(l=>(l.WINDOW_RESIZED="tauri://resize",l.WINDOW_MOVED="tauri://move",l.WINDOW_CLOSE_REQUESTED="tauri://close-requested",l.WINDOW_CREATED="tauri://window-created",l.WINDOW_DESTROYED="tauri://destroyed",l.WINDOW_FOCUS="tauri://focus",l.WINDOW_BLUR="tauri://blur",l.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",l.WINDOW_THEME_CHANGED="tauri://theme-changed",l.WINDOW_FILE_DROP="tauri://file-drop",l.WINDOW_FILE_DROP_HOVER="tauri://file-drop-hover",l.WINDOW_FILE_DROP_CANCELLED="tauri://file-drop-cancelled",l.MENU="tauri://menu",l))(A||{});async function ee(n,e){return h(n,null,e)}async function te(n,e){return _(n,null,e)}async function ne(n,e){return b(n,void 0,e)}var S={};g(S,{BaseDirectory:()=>U,appCacheDir:()=>oe,appConfigDir:()=>ie,appDataDir:()=>ae,appLocalDataDir:()=>re,appLogDir:()=>Ee,audioDir:()=>se,basename:()=>xe,cacheDir:()=>le,configDir:()=>ce,dataDir:()=>ue,delimiter:()=>De,desktopDir:()=>de,dirname:()=>ze,documentDir:()=>me,downloadDir:()=>pe,executableDir:()=>ye,extname:()=>Se,fontDir:()=>ge,homeDir:()=>he,isAbsolute:()=>Le,join:()=>Re,localDataDir:()=>be,normalize:()=>Ae,pictureDir:()=>_e,publicDir:()=>we,resolve:()=>Te,resolveResource:()=>ve,resourceDir:()=>Pe,runtimeDir:()=>fe,sep:()=>Ce,templateDir:()=>We,videoDir:()=>Me});function z(){return navigator.appVersion.includes("Win")}var U=(a=>(a[a.Audio=1]="Audio",a[a.Cache=2]="Cache",a[a.Config=3]="Config",a[a.Data=4]="Data",a[a.LocalData=5]="LocalData",a[a.Document=6]="Document",a[a.Download=7]="Download",a[a.Picture=8]="Picture",a[a.Public=9]="Public",a[a.Video=10]="Video",a[a.Resource=11]="Resource",a[a.Temp=12]="Temp",a[a.AppConfig=13]="AppConfig",a[a.AppData=14]="AppData",a[a.AppLocalData=15]="AppLocalData",a[a.AppCache=16]="AppCache",a[a.AppLog=17]="AppLog",a[a.Desktop=18]="Desktop",a[a.Executable=19]="Executable",a[a.Font=20]="Font",a[a.Home=21]="Home",a[a.Runtime=22]="Runtime",a[a.Template=23]="Template",a))(U||{});async function ie(){return r("plugin:path|resolve_directory",{directory:13})}async function ae(){return r("plugin:path|resolve_directory",{directory:14})}async function re(){return r("plugin:path|resolve_directory",{directory:15})}async function oe(){return r("plugin:path|resolve_directory",{directory:16})}async function se(){return r("plugin:path|resolve_directory",{directory:1})}async function le(){return r("plugin:path|resolve_directory",{directory:2})}async function ce(){return r("plugin:path|resolve_directory",{directory:3})}async function ue(){return r("plugin:path|resolve_directory",{directory:4})}async function de(){return r("plugin:path|resolve_directory",{directory:18})}async function me(){return r("plugin:path|resolve_directory",{directory:6})}async function pe(){return r("plugin:path|resolve_directory",{directory:7})}async function ye(){return r("plugin:path|resolve_directory",{directory:19})}async function ge(){return r("plugin:path|resolve_directory",{directory:20})}async function he(){return r("plugin:path|resolve_directory",{directory:21})}async function be(){return r("plugin:path|resolve_directory",{directory:5})}async function _e(){return r("plugin:path|resolve_directory",{directory:8})}async function we(){return r("plugin:path|resolve_directory",{directory:9})}async function Pe(){return r("plugin:path|resolve_directory",{directory:11})}async function ve(n){return r("plugin:path|resolve_directory",{directory:11,path:n})}async function fe(){return r("plugin:path|resolve_directory",{directory:22})}async function We(){return r("plugin:path|resolve_directory",{directory:23})}async function Me(){return r("plugin:path|resolve_directory",{directory:10})}async function Ee(){return r("plugin:path|resolve_directory",{directory:17})}var Ce=z()?"\\":"/",De=z()?";":":";async function Te(...n){return r("plugin:path|resolve",{paths:n})}async function Ae(n){return r("plugin:path|normalize",{path:n})}async function Re(...n){return r("plugin:path|join",{paths:n})}async function ze(n){return r("plugin:path|dirname",{path:n})}async function Se(n){return r("plugin:path|extname",{path:n})}async function xe(n,e){return r("plugin:path|basename",{path:n,ext:e})}async function Le(n){return r("plugin:path|isAbsolute",{path:n})}var I={};g(I,{CloseRequestedEvent:()=>W,LogicalPosition:()=>P,LogicalSize:()=>w,PhysicalPosition:()=>y,PhysicalSize:()=>p,UserAttentionType:()=>V,WebviewWindow:()=>u,WebviewWindowHandle:()=>v,WindowManager:()=>f,appWindow:()=>x,availableMonitors:()=>Oe,currentMonitor:()=>ke,getAll:()=>$,getCurrent:()=>Ie,primaryMonitor:()=>Fe});var w=class{constructor(e,t){this.type="Logical";this.width=e,this.height=t}},p=class{constructor(e,t){this.type="Physical";this.width=e,this.height=t}toLogical(e){return new w(this.width/e,this.height/e)}},P=class{constructor(e,t){this.type="Logical";this.x=e,this.y=t}},y=class{constructor(e,t){this.type="Physical";this.x=e,this.y=t}toLogical(e){return new P(this.x/e,this.y/e)}},V=(t=>(t[t.Critical=1]="Critical",t[t.Informational=2]="Informational",t))(V||{});function Ie(){return new u(window.__TAURI_METADATA__.__currentWindow.label,{skip:!0})}function $(){return window.__TAURI_METADATA__.__windows.map(n=>new u(n.label,{skip:!0}))}var H=["tauri://created","tauri://error"],v=class{constructor(e){this.label=e,this.listeners=Object.create(null)}async listen(e,t){return this._handleTauriEvent(e,t)?Promise.resolve(()=>{let o=this.listeners[e];o.splice(o.indexOf(t),1)}):h(e,this.label,t)}async once(e,t){return this._handleTauriEvent(e,t)?Promise.resolve(()=>{let o=this.listeners[e];o.splice(o.indexOf(t),1)}):_(e,this.label,t)}async emit(e,t){if(H.includes(e)){for(let o of this.listeners[e]||[])o({event:e,id:-1,windowLabel:this.label,payload:t});return Promise.resolve()}return b(e,this.label,t)}_handleTauriEvent(e,t){return H.includes(e)?(e in this.listeners?this.listeners[e].push(t):this.listeners[e]=[t],!0):!1}},f=class extends v{async scaleFactor(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"scaleFactor"}}}})}async innerPosition(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"innerPosition"}}}}).then(({x:e,y:t})=>new y(e,t))}async outerPosition(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"outerPosition"}}}}).then(({x:e,y:t})=>new y(e,t))}async innerSize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"innerSize"}}}}).then(({width:e,height:t})=>new p(e,t))}async outerSize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"outerSize"}}}}).then(({width:e,height:t})=>new p(e,t))}async isFullscreen(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isFullscreen"}}}})}async isMinimized(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isMinimized"}}}})}async isMaximized(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isMaximized"}}}})}async isDecorated(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isDecorated"}}}})}async isResizable(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isResizable"}}}})}async isVisible(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isVisible"}}}})}async title(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"title"}}}})}async theme(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"theme"}}}})}async center(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"center"}}}})}async requestUserAttention(e){let t=null;return e&&(e===1?t={type:"Critical"}:t={type:"Informational"}),i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"requestUserAttention",payload:t}}}})}async setResizable(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setResizable",payload:e}}}})}async setTitle(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setTitle",payload:e}}}})}async maximize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"maximize"}}}})}async unmaximize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"unmaximize"}}}})}async toggleMaximize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"toggleMaximize"}}}})}async minimize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"minimize"}}}})}async unminimize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"unminimize"}}}})}async show(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"show"}}}})}async hide(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"hide"}}}})}async close(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"close"}}}})}async setDecorations(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setDecorations",payload:e}}}})}async setShadow(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setShadow",payload:e}}}})}async setAlwaysOnTop(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setAlwaysOnTop",payload:e}}}})}async setContentProtected(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setContentProtected",payload:e}}}})}async setSize(e){if(!e||e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setSize",payload:{type:e.type,data:{width:e.width,height:e.height}}}}}})}async setMinSize(e){if(e&&e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setMinSize",payload:e?{type:e.type,data:{width:e.width,height:e.height}}:null}}}})}async setMaxSize(e){if(e&&e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setMaxSize",payload:e?{type:e.type,data:{width:e.width,height:e.height}}:null}}}})}async setPosition(e){if(!e||e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setPosition",payload:{type:e.type,data:{x:e.x,y:e.y}}}}}})}async setFullscreen(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setFullscreen",payload:e}}}})}async setFocus(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setFocus"}}}})}async setIcon(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setIcon",payload:{icon:typeof e=="string"?e:Array.from(e)}}}}})}async setSkipTaskbar(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setSkipTaskbar",payload:e}}}})}async setCursorGrab(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorGrab",payload:e}}}})}async setCursorVisible(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorVisible",payload:e}}}})}async setCursorIcon(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorIcon",payload:e}}}})}async setCursorPosition(e){if(!e||e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorPosition",payload:{type:e.type,data:{x:e.x,y:e.y}}}}}})}async setIgnoreCursorEvents(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setIgnoreCursorEvents",payload:e}}}})}async startDragging(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"startDragging"}}}})}async onResized(e){return this.listen("tauri://resize",t=>{t.payload=j(t.payload),e(t)})}async onMoved(e){return this.listen("tauri://move",t=>{t.payload=G(t.payload),e(t)})}async onCloseRequested(e){return this.listen("tauri://close-requested",t=>{let o=new W(t);Promise.resolve(e(o)).then(()=>{if(!o.isPreventDefault())return this.close()})})}async onFocusChanged(e){let t=await this.listen("tauri://focus",s=>{e({...s,payload:!0})}),o=await this.listen("tauri://blur",s=>{e({...s,payload:!1})});return()=>{t(),o()}}async onScaleChanged(e){return this.listen("tauri://scale-change",e)}async onMenuClicked(e){return this.listen("tauri://menu",e)}async onFileDropEvent(e){let t=await this.listen("tauri://file-drop",c=>{e({...c,payload:{type:"drop",paths:c.payload}})}),o=await this.listen("tauri://file-drop-hover",c=>{e({...c,payload:{type:"hover",paths:c.payload}})}),s=await this.listen("tauri://file-drop-cancelled",c=>{e({...c,payload:{type:"cancel"}})});return()=>{t(),o(),s()}}async onThemeChanged(e){return this.listen("tauri://theme-changed",e)}},W=class{constructor(e){this._preventDefault=!1;this.event=e.event,this.windowLabel=e.windowLabel,this.id=e.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}},u=class extends f{constructor(e,t={}){super(e),t?.skip||i({__tauriModule:"Window",message:{cmd:"createWebview",data:{options:{label:e,...t}}}}).then(async()=>this.emit("tauri://created")).catch(async o=>this.emit("tauri://error",o))}static getByLabel(e){return $().some(t=>t.label===e)?new u(e,{skip:!0}):null}},x;"__TAURI_METADATA__"in window?x=new u(window.__TAURI_METADATA__.__currentWindow.label,{skip:!0}):(console.warn(`Could not find "window.__TAURI_METADATA__". The "appWindow" value will reference the "main" window label.
Note that this is not an issue if running this frontend on a browser instead of a Tauri window.`),x=new u("main",{skip:!0}));function L(n){return n===null?null:{name:n.name,scaleFactor:n.scaleFactor,position:G(n.position),size:j(n.size)}}function G(n){return new y(n.x,n.y)}function j(n){return new p(n.width,n.height)}async function ke(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"currentMonitor"}}}}).then(L)}async function Fe(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"primaryMonitor"}}}}).then(L)}async function Oe(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"availableMonitors"}}}}).then(n=>n.map(L))}var Ne=r;return K(Ue);})();
window.__TAURI__ = __TAURI_IIFE__
