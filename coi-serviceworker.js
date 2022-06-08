/*! coi-serviceworker v0.1.6 - Guido Zuidhof, licensed under MIT */
if (typeof window === 'undefined') {
  const EMBEDDED = {
    'jxl_emcc.js': 'var JxlCodecModule=(()=>{var Oe="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0;return"undefined"!=typeof __filename&&(Oe=Oe||__filename),function(e){e=e||{},(o=o||(void 0!==e?e:{})).ready=new Promise(function(e,n){t=e,i=n});var o,t,i,n,s,r,a,u,c,q=Object.assign({},o),f=(e,n)=>{throw n},O="object"==typeof window,d="function"==typeof importScripts,l="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,p=o.ENVIRONMENT_IS_PTHREAD||!1,m="";function U(e){return o.locateFile?o.locateFile(e,m):m+e}if(l){m=d?require("path").dirname(m)+"/":__dirname+"/",c=()=>{u||(a=require("fs"),u=require("path"))},n=function(e,n){return c(),e=u.normalize(e),a.readFileSync(e,n?void 0:"utf8")},r=e=>e=(e=n(e,!0)).buffer?e:new Uint8Array(e),s=(e,t,r)=>{c(),e=u.normalize(e),a.readFile(e,function(e,n){e?r(e):t(n.buffer)})},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(e){if(!(e instanceof B))throw e}),process.on("unhandledRejection",function(e){throw e}),f=(e,n)=>{if(x())throw process.exitCode=e,n;n instanceof B||w("exiting due to exception: "+n),process.exit(e)},o.inspect=function(){return"[Emscripten Module object]"};let e;try{e=require("worker_threads")}catch(e){throw console.error(\'The "worker_threads" module is not supported in this node.js build - perhaps a newer version is needed?\'),e}global.Worker=e.Worker}else(O||d)&&(d?m=self.location.href:"undefined"!=typeof document&&document.currentScript&&(m=document.currentScript.src),m=0!==(m=Oe?Oe:m).indexOf("blob:")?m.substr(0,m.replace(/[?#].*/,"").lastIndexOf("/")+1):"",l||(n=e=>{var n=new XMLHttpRequest;return n.open("GET",e,!1),n.send(null),n.responseText},d&&(r=e=>{var n=new XMLHttpRequest;return n.open("GET",e,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)}),s=(e,n,t)=>{var r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="arraybuffer",r.onload=()=>{200==r.status||0==r.status&&r.response?n(r.response):t()},r.onerror=t,r.send(null)}));l&&"undefined"==typeof performance&&(global.performance=require("perf_hooks").performance);var L,h,_=console.log.bind(console),y=console.warn.bind(console),D=(l&&(c(),_=e=>a.writeSync(1,e+"\n"),y=e=>a.writeSync(2,e+"\n")),o.print||_),w=o.printErr||y,V=(Object.assign(o,q),o.quit&&(f=o.quit),o.wasmBinary&&(h=o.wasmBinary),o.noExitRuntime||!0);"object"!=typeof WebAssembly&&R("no native wasm support detected");var g,H,G=!1;function F(e){var n=new TextDecoder(e);this.decode=e=>(e.buffer instanceof SharedArrayBuffer&&(e=new Uint8Array(e)),n.decode.call(n,e))}var N,v,b,X,z="undefined"!=typeof TextDecoder?new F("utf8"):void 0;function J(e,n,t){var r=n+t;for(t=n;e[t]&&!(r<=t);)++t;if(16<t-n&&e.subarray&&z)return z.decode(e.subarray(n,t));for(r="";n<t;){var a,o,i=e[n++];128&i?(a=63&e[n++],192==(224&i)?r+=String.fromCharCode((31&i)<<6|a):(o=63&e[n++],(i=224==(240&i)?(15&i)<<12|a<<6|o:(7&i)<<18|a<<12|o<<6|63&e[n++])<65536?r+=String.fromCharCode(i):(i-=65536,r+=String.fromCharCode(55296|i>>10,56320|1023&i)))):r+=String.fromCharCode(i)}return r}"undefined"!=typeof TextDecoder&&new F("utf-16le"),p&&(A=o.buffer);_=o.INITIAL_MEMORY||83886080;if(p)g=o.wasmMemory,A=o.buffer;else if(o.wasmMemory)g=o.wasmMemory;else if(!((g=new WebAssembly.Memory({initial:_/65536,maximum:_/65536,shared:!0})).buffer instanceof SharedArrayBuffer))throw w("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),l&&console.log("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and also use a recent version)"),Error("bad memory");var _=(A=g?g.buffer:A).byteLength,y=A,A=y;o.HEAP8=N=new Int8Array(y),o.HEAP16=new Int16Array(y),o.HEAP32=b=new Int32Array(y),o.HEAPU8=v=new Uint8Array(y),o.HEAPU16=new Uint16Array(y),o.HEAPU32=new Uint32Array(y),o.HEAPF32=new Float32Array(y),o.HEAPF64=X=new Float64Array(y);var Y,Z=[],Q=[],$=[],K=0;function x(){return V||0<K}var E,k=0,ee=null,S=null;function R(e){throw p?postMessage({cmd:"onAbort",arg:e}):o.onAbort&&o.onAbort(e),w(e="Aborted("+e+")"),G=!0,e=new WebAssembly.RuntimeError(e+". Build with -s ASSERTIONS=1 for more info."),i(e),e}function ne(){return E.startsWith("data:application/octet-stream;base64,")}function te(){var e=E;try{if(e==E&&h)return new Uint8Array(h);if(r)return r(e);throw"both async and sync fetching of the wasm failed"}catch(e){R(e)}}o.preloadedImages={},o.preloadedAudios={},E="jxl_emcc.wasm",ne()||(E=U(E));var re={};function T(e){for(;0<e.length;){var n,t=e.shift();"function"==typeof t?t(o):"number"==typeof(n=t.Ga)?void 0===t.U?se(n)():se(n)(t.U):n(void 0===t.U?null:t.U)}}function ae(e){var n=We();return e=e(),Pe(n),e}function oe(e){var n=M.P[e];n&&(b[e>>2]=0,M.ja(n.worker))}var M={R:[],W:[],da:[],$:function(){p?M.wa():M.va()},va:function(){for(var e=0;e<4;++e)M.ea()},wa:function(){M.receiveObjectTransfer=M.ya,M.threadInit=M.la,M.setExitStatus=M.Aa,V=!1},P:{},Aa:function(){},ka:function(){for(var e in M.P){var n=M.P[e];n&&n.worker&&M.ja(n.worker)}for(e=0;e<M.R.length;++e)M.R[e].terminate();M.R=[]},ja:function(e){M.za(function(){delete M.P[e.S.ba],M.R.push(e),M.W.splice(M.W.indexOf(e),1),Me(e.S.ba),e.S=void 0})},za:function(e){b[Ce>>2]=0;try{e()}finally{b[Ce>>2]=1}},ya:function(){},la:function(){for(var e in M.da)M.da[e]()},ha:function(r,a){r.onmessage=e=>{var n,t=(e=e.data).cmd;r.S&&(M.ra=r.S.ba),e.targetThread&&e.targetThread!=C()?(n=M.P[e.Ma])?n.worker.postMessage(e,e.transferList):w(\'Internal error! Worker sent a message "\'+t+\'" to target pthread \'+e.targetThread+", but that thread no longer exists!"):"processQueuedMainThreadWork"===t?ke():"spawnThread"===t?ce(e):"cleanupThread"===t?oe(e.thread):"killThread"===t?(e=e.thread,b[e>>2]=0,t=M.P[e],delete M.P[e],t.worker.terminate(),Me(e),M.W.splice(M.W.indexOf(t.worker),1),t.worker.S=void 0):"cancelThread"===t?M.P[e.thread].worker.postMessage({cmd:"cancel"}):"loaded"===t?(r.loaded=!0,a&&a(r),r.V&&(r.V(),delete r.V)):"print"===t?D("Thread "+e.threadId+": "+e.text):"printErr"===t?w("Thread "+e.threadId+": "+e.text):"alert"===t?alert("Thread "+e.threadId+": "+e.text):"setimmediate"===e.target?r.postMessage(e):"onAbort"===t?o.onAbort&&o.onAbort(e.arg):w("worker sent an unknown command "+t),M.ra=void 0},r.onerror=e=>{throw w("worker sent an error! "+e.filename+":"+e.lineno+": "+e.message),e},l&&(r.on("message",function(e){r.onmessage({data:e})}),r.on("error",function(e){r.onerror(e)}),r.on("detachedExit",function(){})),r.postMessage({cmd:"load",urlOrBlob:o.mainScriptUrlOrBlob||Oe,wasmMemory:g,wasmModule:H})},ea:function(){var e=U("jxl_emcc.worker.js");M.R.push(new Worker(e))},ta:function(){return 0==M.R.length&&(M.ea(),M.ha(M.R[0])),M.R.pop()}};function ie(e){if(p)return W(1,0,e);try{qe(e)}catch(e){e instanceof B||"unwind"==e||f(1,e)}}o.establishStackSpace=function(){var e=C(),n=b[e+44>>2];Ie(n,n-b[e+48>>2]),Pe(n)};var I=[];function se(e){var n=I[e];return n||(e>=I.length&&(I.length=e+1),I[e]=n=Y.get(e)),n}function ue(e){this.T=e-16,this.qa=function(e){b[this.T+4>>2]=e},this.na=function(e){b[this.T+8>>2]=e},this.oa=function(){b[this.T>>2]=0},this.ma=function(){N[this.T+12>>0]=0},this.pa=function(){N[this.T+13>>0]=0},this.$=function(e,n){this.qa(e),this.na(n),this.oa(),this.ma(),this.pa()}}o.invokeEntryPoint=function(e,n){return se(e)(n)};q=l?()=>{var e=process.hrtime();return 1e3*e[0]+e[1]/1e6}:p?()=>performance.now()-o.__performance_now_clock_drift:()=>performance.now();function ce(e){var n=M.ta();if(!n)return 6;M.W.push(n);var t=M.P[e.aa]={worker:n,ba:e.aa},r=(n.S=t,{cmd:"run",start_routine:e.Ba,arg:e.U,threadInfoStruct:e.aa});return n.V=()=>{r.time=performance.now(),n.postMessage(r,e.Ca)},n.loaded&&(n.V(),delete n.V),0}function W(r,a){var o=arguments.length-2,i=arguments;return ae(function(){for(var e=je(8*o),n=e>>3,t=0;t<o;t++)X[n+t]=i[2+t];return Re(r,o,e,a)})}var fe=[];var de=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];function le(e){return e=2<e?e?J(v,e,void 0):"":e,de[e]||("undefined"!=typeof document?document.querySelector(e):void 0)}function pe(e,n,t){var i,s,u,c,r=le(e);return r?(r.Z&&(b[r.Z>>2]=n,b[r.Z+4>>2]=t),!r.ia&&r.Ea?r.Z?(r=b[r.Z+8>>2],e=e?J(v,e,void 0):"",i=r,s=e,u=n,c=t,ae(function(){var e=je(12),n=0;if(s){for(var t=n=0;t<s.length;++t){var r=s.charCodeAt(t);(r=55296<=r&&r<=57343?65536+((1023&r)<<10)|1023&s.charCodeAt(++t):r)<=127?++n:n=r<=2047?n+2:r<=65535?n+3:n+4}if(t=n=j(r=n+1),0<r){for(var r=t+r-1,a=0;a<s.length;++a){var o=s.charCodeAt(a);if((o=55296<=o&&o<=57343?65536+((1023&o)<<10)|1023&s.charCodeAt(++a):o)<=127){if(r<=t)break;v[t++]=o}else{if(o<=2047){if(r<=t+1)break;v[t++]=192|o>>6}else{if(o<=65535){if(r<=t+2)break;v[t++]=224|o>>12}else{if(r<=t+3)break;v[t++]=240|o>>18,v[t++]=128|o>>12&63}v[t++]=128|o>>6&63}v[t++]=128|63&o}}v[t]=0}}b[e>>2]=n,b[e+4>>2]=u,b[e+8>>2]=c,Te(i,657457152,0,n,e)}),1):-4:(e=!1,(r=r.ia?r.ia:r).Y&&r.Y.X&&(e=0===(e=r.Y.X.getParameter(2978))[0]&&0===e[1]&&e[2]===r.width&&e[3]===r.height),r.width=n,r.height=t,e&&r.Y.X.viewport(0,0,n,t),0)):-4}function me(e,n,t){return p?W(2,1,e,n,t):pe(e,n,t)}function he(t,e){t.ga||(t.ga=t.getContext,t.getContext=function(e,n){return"webgl"==e==(n=t.ga(e,n))instanceof WebGLRenderingContext?n:null});var n,r,a,o=t.getContext("webgl",e);{if(o){if(o=o,e=e,r=j(8),b[r+4>>2]=C(),a={Ha:r,attributes:e,version:e.xa,X:o},o.canvas&&(o.canvas.Y=a),(void 0===e.fa||e.fa)&&!(o=(o=a)||_e).ua){o.ua=!0;var i=n=o.X,s=i.getExtension("ANGLE_instanced_arrays"),u=(s&&(i.vertexAttribDivisor=function(e,n){s.vertexAttribDivisorANGLE(e,n)},i.drawArraysInstanced=function(e,n,t,r){s.drawArraysInstancedANGLE(e,n,t,r)},i.drawElementsInstanced=function(e,n,t,r,a){s.drawElementsInstancedANGLE(e,n,t,r,a)}),n),c=u.getExtension("OES_vertex_array_object"),f=(c&&(u.createVertexArray=function(){return c.createVertexArrayOES()},u.deleteVertexArray=function(e){c.deleteVertexArrayOES(e)},u.bindVertexArray=function(e){c.bindVertexArrayOES(e)},u.isVertexArray=function(e){return c.isVertexArrayOES(e)}),n),d=f.getExtension("WEBGL_draw_buffers");d&&(f.drawBuffers=function(e,n){d.drawBuffersWEBGL(e,n)}),n.Fa=n.getExtension("EXT_disjoint_timer_query"),n.Ja=n.getExtension("WEBGL_multi_draw"),(n.getSupportedExtensions()||[]).forEach(function(e){e.includes("lose_context")||e.includes("debug")||n.getExtension(e)})}return r}return 0}}var _e,ye=["default","low-power","high-performance"],we=[null,[],[]];function ge(e){return p?W(3,1,e):0}function ve(e,n,t,r,a){if(p)return W(4,1,e,n,t,r,a)}function be(e,n,t,r){if(p)return W(5,1,e,n,t,r);for(var a=0,o=0;o<t;o++){var i=b[n>>2],s=b[n+4>>2];n+=8;for(var u=0;u<s;u++){var c=v[i+u],f=we[e];0===c||10===c?((1===e?D:w)(J(f,0)),f.length=0):f.push(c)}a+=s}return b[r>>2]=a,0}M.$();var P,Ae=[null,ie,me,ge,ve,be],xe={u:function(e){return j(e+16)+16},t:function(e,n,t){throw new ue(e).$(n,t),e},s:function(e){Ee(e,!d,1,!O),M.la()},g:function(e){p?postMessage({cmd:"cleanupThread",thread:e}):oe(e)},d:function(e,n,t,r){if("undefined"==typeof SharedArrayBuffer)return w("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;var a=[];return p&&0===a.length?Se(687865856,e,n,t,r):(e={Ba:t,aa:e,U:r,Ca:a},p?(e.Da="spawnThread",postMessage(e,a),0):ce(e))},r:function(){return 2097152},k:function(e,n){if(e==n)postMessage({cmd:"processQueuedMainThreadWork"});else if(p)postMessage({targetThread:e,cmd:"processThreadQueue"});else{if(!(e=(e=M.P[e])&&e.worker))return;e.postMessage({cmd:"processThreadQueue"})}return 1},b:function(){R("")},e:function(){l||d||((L=L||{})["Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread"]||(L["Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread"]=1,w("Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread")))},c:q,p:function(e,n,t){v.copyWithin(e,n,n+t)},h:function(e,n,t){fe.length=n,t>>=3;for(var r=0;r<n;r++)fe[r]=X[t+r];return(e<0?re[-e-1]:Ae[e]).apply(null,fe)},n:function(){R("OOM")},i:function(e,n,t){return(le(e)?pe:me)(e,n,t)},l:function(){throw"unwind"},j:function(e,n){return n={alpha:!!b[n>>=2],depth:!!b[n+1],stencil:!!b[n+2],antialias:!!b[n+3],premultipliedAlpha:!!b[n+4],preserveDrawingBuffer:!!b[n+5],powerPreference:ye[b[n+6]],failIfMajorPerformanceCaveat:!!b[n+7],xa:b[n+8],Ia:b[n+9],fa:b[n+10],sa:b[n+11],Ka:b[n+12],La:b[n+13]},!(e=le(e))||n.sa?0:he(e,n)},q:function(e){qe(e)},o:ge,m:ve,f:be,a:g||o.wasmMemory},j=(!function(){function n(e,n){var t;o.asm=e.exports,M.da.push(o.asm.A),Y=o.asm.y,Q.unshift(o.asm.v),H=n,p||(t=M.R.length,M.R.forEach(function(e){M.ha(e,function(){var e;!--t&&(k--,o.monitorRunDependencies&&o.monitorRunDependencies(k),0==k&&(null!==ee&&(clearInterval(ee),ee=null),S))&&(e=S,S=null,e())})}))}function t(e){n(e.instance,e.module)}function r(e){return function(){if(!h&&(O||d)){if("function"==typeof fetch&&!E.startsWith("file://"))return fetch(E,{credentials:"same-origin"}).then(function(e){if(e.ok)return e.arrayBuffer();throw"failed to load wasm binary file at \'"+E+"\'"}).catch(te);if(s)return new Promise(function(n,e){s(E,function(e){n(new Uint8Array(e))},e)})}return Promise.resolve().then(te)}().then(function(e){return WebAssembly.instantiate(e,a)}).then(function(e){return e}).then(e,function(e){w("failed to asynchronously prepare wasm: "+e),R(e)})}var a={a:xe};if(p||(k++,o.monitorRunDependencies&&o.monitorRunDependencies(k)),o.instantiateWasm)try{return o.instantiateWasm(a,n)}catch(e){return w("Module.instantiateWasm callback failed with error: "+e)}(h||"function"!=typeof WebAssembly.instantiateStreaming||ne()||E.startsWith("file://")||"function"!=typeof fetch?r(t):fetch(E,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,a).then(t,function(e){return w("wasm streaming compile failed: "+e),w("falling back to ArrayBuffer instantiation"),r(t)})})).catch(i)}(),o.___wasm_call_ctors=function(){return(o.___wasm_call_ctors=o.asm.v).apply(null,arguments)},o._jxlDecompress=function(){return(o._jxlDecompress=o.asm.w).apply(null,arguments)},o._malloc=function(){return(j=o._malloc=o.asm.x).apply(null,arguments)}),Ee=(o._free=function(){return(o._free=o.asm.z).apply(null,arguments)},o._emscripten_tls_init=function(){return(o._emscripten_tls_init=o.asm.A).apply(null,arguments)},o.__emscripten_thread_crashed=function(){return(o.__emscripten_thread_crashed=o.asm.B).apply(null,arguments)},o.__emscripten_thread_init=function(){return(Ee=o.__emscripten_thread_init=o.asm.C).apply(null,arguments)}),C=o._pthread_self=function(){return(C=o._pthread_self=o.asm.D).apply(null,arguments)},ke=o._emscripten_main_thread_process_queued_calls=function(){return(ke=o._emscripten_main_thread_process_queued_calls=o.asm.E).apply(null,arguments)},Se=(o._emscripten_current_thread_process_queued_calls=function(){return(o._emscripten_current_thread_process_queued_calls=o.asm.F).apply(null,arguments)},o._emscripten_sync_run_in_main_thread_4=function(){return(Se=o._emscripten_sync_run_in_main_thread_4=o.asm.G).apply(null,arguments)}),Re=o._emscripten_run_in_main_runtime_thread_js=function(){return(Re=o._emscripten_run_in_main_runtime_thread_js=o.asm.H).apply(null,arguments)},Te=o._emscripten_dispatch_to_thread_=function(){return(Te=o._emscripten_dispatch_to_thread_=o.asm.I).apply(null,arguments)},Me=o.__emscripten_thread_free_data=function(){return(Me=o.__emscripten_thread_free_data=o.asm.J).apply(null,arguments)},Ie=(o.__emscripten_thread_exit=function(){return(o.__emscripten_thread_exit=o.asm.K).apply(null,arguments)},o._emscripten_stack_set_limits=function(){return(Ie=o._emscripten_stack_set_limits=o.asm.L).apply(null,arguments)}),We=o.stackSave=function(){return(We=o.stackSave=o.asm.M).apply(null,arguments)},Pe=o.stackRestore=function(){return(Pe=o.stackRestore=o.asm.N).apply(null,arguments)},je=o.stackAlloc=function(){return(je=o.stackAlloc=o.asm.O).apply(null,arguments)},Ce=o.__emscripten_allow_main_runtime_queued_calls=38192;function B(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function Be(){function e(){if(!P&&(P=!0,o.calledRun=!0,!G)&&(p||T(Q),t(o),o.onRuntimeInitialized&&o.onRuntimeInitialized(),!p)){if(o.postRun)for("function"==typeof o.postRun&&(o.postRun=[o.postRun]);o.postRun.length;){var e=o.postRun.shift();$.unshift(e)}T($)}}if(!(0<k))if(p)t(o),p||T(Q),postMessage({cmd:"loaded"});else{if(o.preRun)for("function"==typeof o.preRun&&(o.preRun=[o.preRun]);o.preRun.length;)n=void 0,n=o.preRun.shift(),Z.unshift(n);T(Z),0<k||(o.setStatus?(o.setStatus("Running..."),setTimeout(function(){setTimeout(function(){o.setStatus("")},1),e()},1)):e())}var n}function qe(e){if(p)throw ie(e),"unwind";x()||p||M.ka(),x()||(M.ka(),o.onExit&&o.onExit(e),G=!0),f(e,new B(e))}if(o.keepRuntimeAlive=x,o.PThread=M,o.PThread=M,o.wasmMemory=g,o.ExitStatus=B,S=function e(){P||Be(),P||(S=e)},o.run=Be,o.preInit)for("function"==typeof o.preInit&&(o.preInit=[o.preInit]);0<o.preInit.length;)o.preInit.pop()();return Be(),e.ready}})();"object"==typeof exports&&"object"==typeof module?module.exports=JxlCodecModule:"function"==typeof define&&define.amd?define([],function(){return JxlCodecModule}):"object"==typeof exports&&(exports.JxlCodecModule=JxlCodecModule); ',
    'jxl_emcc.worker.js': '$jxl_emcc.worker.js$',
  };
  self.addEventListener('install', () => self.skipWaiting());
  self.addEventListener(
      'activate', (event) => event.waitUntil(self.clients.claim()));

  self.addEventListener('message', (ev) => {
    if (ev.data && ev.data.type === 'deregister') {
      self.registration.unregister()
          .then(() => {
            return self.clients.matchAll();
          })
          .then(clients => {
            clients.forEach((client) => client.navigate(client.url));
          });
    }
  });

  self.addEventListener('fetch', function(event) {
    if (event.request.cache === 'only-if-cached' &&
        event.request.mode !== 'same-origin') {
      return;
    }
    const url = event.request.url;
    for (const [key, value] of Object.entries(object)) {
      if (url.endsWith(key)) {
        const workerHeaders = new Headers();
        workerHeaders.set('Content-Type', 'application/javascript');
        // TODO: refactor
        workerHeaders.set('Cross-Origin-Embedder-Policy', 'require-corp');
        workerHeaders.set('Cross-Origin-Opener-Policy', 'same-origin');

        event.respondWith(new Response(workerBody, {
          status: 200,
          statusText: 'OK',
          headers: value,
        }));
        return;
      }
    }
    if (event.request.destination === 'document') {
      return;
    }

    event.respondWith(
        fetch(event.request)
            .then((response) => {
              if (response.status === 0) {
                return response;
              }

              const newHeaders = new Headers(response.headers);
              newHeaders.set('Cross-Origin-Embedder-Policy', 'require-corp');
              newHeaders.set('Cross-Origin-Opener-Policy', 'same-origin');

              return new Response(response.body, {
                status: response.status,
                statusText: response.statusText,
                headers: newHeaders,
              });
            })
            .catch((e) => console.error(e)));
  });

} else {
  (() => {
    // You can customize the behavior of this script through a global `coi`
    // variable.
    const coi = {
      shouldRegister: () => true,
      shouldDeregister: () => false,
      doReload: () => window.location.reload(),
      quiet: false,
      ...window.coi
    }

    const n = navigator;
    if (coi.shouldDeregister() && n.serviceWorker &&
        n.serviceWorker.controller) {
      n.serviceWorker.controller.postMessage({type: 'deregister'});
    }

    // If we're already coi: do nothing. Perhaps it's due to this script doing
    // its job, or COOP/COEP are already set from the origin server. Also if the
    // browser has no notion of crossOriginIsolated, just give up here.
    if (window.crossOriginIsolated !== false || !coi.shouldRegister()) return;

    if (!window.isSecureContext) {
      !coi.quiet &&
          console.log(
              'COOP/COEP Service Worker not registered, a secure context is required.');
      return;
    }

    // In some environments (e.g. Chrome incognito mode) this won't be available
    if (n.serviceWorker) {
      n.serviceWorker.register(window.document.currentScript.src)
          .then(
              (registration) => {
                !coi.quiet &&
                    console.log(
                        'COOP/COEP Service Worker registered',
                        registration.scope);

                registration.addEventListener('updatefound', () => {
                  !coi.quiet &&
                      console.log(
                          'Reloading page to make use of updated COOP/COEP Service Worker.');
                  coi.doReload()
                });

                // If the registration is active, but it's not controlling the
                // page
                if (registration.active && !n.serviceWorker.controller) {
                  !coi.quiet &&
                      console.log(
                          'Reloading page to make use of COOP/COEP Service Worker.');
                  coi.doReload()
                }
              },
              (err) => {
                !coi.quiet &&
                    console.error(
                        'COOP/COEP Service Worker failed to register:', err);
              });
    }
  })();
}
