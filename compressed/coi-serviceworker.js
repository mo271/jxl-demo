/*! coi-serviceworker v0.1.6 - Guido Zuidhof, licensed under MIT */
if (typeof window === 'undefined') {
  const EMBEDDED = {
    'jxl_emcc.js': ' var JxlCodecModule = (() => {   var _scriptDir = typeof document !== \'undefined\' && document.currentScript ? document.currentScript.src : undefined;   if (typeof __filename !== \'undefined\') _scriptDir = _scriptDir || __filename;   return ( function(JxlCodecModule) {   JxlCodecModule = JxlCodecModule || {};   var c;c||(c=typeof JxlCodecModule !== \'undefined\' ? JxlCodecModule : {});var g,k;c.ready=new Promise(function(a,b){g=a;k=b});var aa=Object.assign({},c),m=(a,b)=>{throw b;},q="object"===typeof window,r="function"===typeof importScripts,t="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node,u=c.ENVIRONMENT_IS_PTHREAD||!1,w="";function ba(a){return c.locateFile?c.locateFile(a,w):w+a}var x,y,z,fs,A,B; if(t){w=r?require("path").dirname(w)+"/":__dirname+"/";B=()=>{A||(fs=require("fs"),A=require("path"))};x=function(b,d){B();b=A.normalize(b);return fs.readFileSync(b,d?void 0:"utf8")};z=b=>{b=x(b,!0);b.buffer||(b=new Uint8Array(b));return b};y=(b,d,e)=>{B();b=A.normalize(b);fs.readFile(b,function(f,h){f?e(f):d(h.buffer)})};1<process.argv.length&&process.argv[1].replace(/\\/g,"/");process.argv.slice(2);process.on("uncaughtException",function(b){if(!(b instanceof C))throw b;});process.on("unhandledRejection", function(b){throw b;});m=(b,d)=>{if(D())throw process.exitCode=b,d;d instanceof C||E("exiting due to exception: "+d);process.exit(b)};c.inspect=function(){return"[Emscripten Module object]"};let a;try{a=require("worker_threads")}catch(b){throw console.error(\'The "worker_threads" module is not supported in this node.js build - perhaps a newer version is needed?\'),b;}global.Worker=a.Worker}else if(q||r)r?w=self.location.href:"undefined"!==typeof document&&document.currentScript&&(w=document.currentScript.src), _scriptDir&&(w=_scriptDir),0!==w.indexOf("blob:")?w=w.substr(0,w.replace(/[?#].*/,"").lastIndexOf("/")+1):w="",t||(x=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},r&&(z=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),y=(a,b,d)=>{var e=new XMLHttpRequest;e.open("GET",a,!0);e.responseType="arraybuffer";e.onload=()=>{200==e.status||0==e.status&&e.response?b(e.response):d()};e.onerror=d; e.send(null)});t&&"undefined"===typeof performance&&(global.performance=require("perf_hooks").performance);var ca=console.log.bind(console),da=console.warn.bind(console);t&&(B(),ca=a=>fs.writeSync(1,a+"\n"),da=a=>fs.writeSync(2,a+"\n"));var ea=c.print||ca,E=c.printErr||da;Object.assign(c,aa);aa=null;c.quit&&(m=c.quit);var F,G;c.wasmBinary&&(G=c.wasmBinary);var noExitRuntime=c.noExitRuntime||!0;"object"!==typeof WebAssembly&&I("no native wasm support detected");var J,fa,K=!1; function ha(a){var b=new TextDecoder(a);this.decode=d=>{d.buffer instanceof SharedArrayBuffer&&(d=new Uint8Array(d));return b.decode.call(b,d)}}var ia="undefined"!==typeof TextDecoder?new ha("utf8"):void 0; function L(a,b,d){var e=b+d;for(d=b;a[d]&&!(d>=e);)++d;if(16<d-b&&a.subarray&&ia)return ia.decode(a.subarray(b,d));for(e="";b<d;){var f=a[b++];if(f&128){var h=a[b++]&63;if(192==(f&224))e+=String.fromCharCode((f&31)<<6|h);else{var l=a[b++]&63;f=224==(f&240)?(f&15)<<12|h<<6|l:(f&7)<<18|h<<12|l<<6|a[b++]&63;65536>f?e+=String.fromCharCode(f):(f-=65536,e+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else e+=String.fromCharCode(f)}return e}"undefined"!==typeof TextDecoder&&new ha("utf-16le"); var M,ja,N,O,ka;u&&(M=c.buffer);var la=c.INITIAL_MEMORY||83886080; if(u)J=c.wasmMemory,M=c.buffer;else if(c.wasmMemory)J=c.wasmMemory;else if(J=new WebAssembly.Memory({initial:la/65536,maximum:la/65536,shared:!0}),!(J.buffer instanceof SharedArrayBuffer))throw E("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),t&&console.log("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and also use a recent version)"),Error("bad memory"); J&&(M=J.buffer);la=M.byteLength;var P=M;M=P;c.HEAP8=ja=new Int8Array(P);c.HEAP16=new Int16Array(P);c.HEAP32=O=new Int32Array(P);c.HEAPU8=N=new Uint8Array(P);c.HEAPU16=new Uint16Array(P);c.HEAPU32=new Uint32Array(P);c.HEAPF32=new Float32Array(P);c.HEAPF64=ka=new Float64Array(P);var ma,na=[],oa=[],pa=[],qa=0;function D(){return noExitRuntime||0<qa}function ra(){var a=c.preRun.shift();na.unshift(a)}var Q=0,sa=null,R=null;c.preloadedImages={};c.preloadedAudios={}; function I(a){if(u)postMessage({cmd:"onAbort",arg:a});else if(c.onAbort)c.onAbort(a);a="Aborted("+a+")";E(a);K=!0;a=new WebAssembly.RuntimeError(a+". Build with -s ASSERTIONS=1 for more info.");k(a);throw a;}function ta(){return S.startsWith("data:application/octet-stream;base64,")}var S;S="jxl_emcc.wasm";ta()||(S=ba(S));function ua(){var a=S;try{if(a==S&&G)return new Uint8Array(G);if(z)return z(a);throw"both async and sync fetching of the wasm failed";}catch(b){I(b)}} function va(){if(!G&&(q||r)){if("function"===typeof fetch&&!S.startsWith("file://"))return fetch(S,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at \'"+S+"\'";return a.arrayBuffer()}).catch(function(){return ua()});if(y)return new Promise(function(a,b){y(S,function(d){a(new Uint8Array(d))},b)})}return Promise.resolve().then(function(){return ua()})}var wa={}; function T(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(c);else{var d=b.Ga;"number"===typeof d?void 0===b.U?xa(d)():xa(d)(b.U):d(void 0===b.U?null:b.U)}}}function ya(a){var b=za();a=a();Aa(b);return a}function Ba(a){var b=U.P[a];b&&(O[a>>2]=0,U.ja(b.worker))} var U={R:[],W:[],da:[],$:function(){u?U.wa():U.va()},va:function(){for(var a=0;4>a;++a)U.ea()},wa:function(){U.receiveObjectTransfer=U.ya;U.threadInit=U.la;U.setExitStatus=U.Aa;noExitRuntime=!1},P:{},Aa:function(){},ka:function(){for(var a in U.P){var b=U.P[a];b&&b.worker&&U.ja(b.worker)}for(a=0;a<U.R.length;++a)U.R[a].terminate();U.R=[]},ja:function(a){U.za(function(){delete U.P[a.S.ba];U.R.push(a);U.W.splice(U.W.indexOf(a),1);Ca(a.S.ba);a.S=void 0})},za:function(a){O[Da>>2]=0;try{a()}finally{O[Da>> 2]=1}},ya:function(){},la:function(){for(var a in U.da)U.da[a]()},ha:function(a,b){a.onmessage=d=>{d=d.data;var e=d.cmd;a.S&&(U.ra=a.S.ba);if(d.targetThread&&d.targetThread!=V()){var f=U.P[d.Ma];f?f.worker.postMessage(d,d.transferList):E(\'Internal error! Worker sent a message "\'+e+\'" to target pthread \'+d.targetThread+", but that thread no longer exists!")}else if("processQueuedMainThreadWork"===e)Ea();else if("spawnThread"===e)Fa(d);else if("cleanupThread"===e)Ba(d.thread);else if("killThread"=== e)d=d.thread,O[d>>2]=0,e=U.P[d],delete U.P[d],e.worker.terminate(),Ca(d),U.W.splice(U.W.indexOf(e.worker),1),e.worker.S=void 0;else if("cancelThread"===e)U.P[d.thread].worker.postMessage({cmd:"cancel"});else if("loaded"===e)a.loaded=!0,b&&b(a),a.V&&(a.V(),delete a.V);else if("print"===e)ea("Thread "+d.threadId+": "+d.text);else if("printErr"===e)E("Thread "+d.threadId+": "+d.text);else if("alert"===e)alert("Thread "+d.threadId+": "+d.text);else if("setimmediate"===d.target)a.postMessage(d);else if("onAbort"=== e){if(c.onAbort)c.onAbort(d.arg)}else E("worker sent an unknown command "+e);U.ra=void 0};a.onerror=d=>{E("worker sent an error! "+d.filename+":"+d.lineno+": "+d.message);throw d;};t&&(a.on("message",function(d){a.onmessage({data:d})}),a.on("error",function(d){a.onerror(d)}),a.on("detachedExit",function(){}));a.postMessage({cmd:"load",urlOrBlob:c.mainScriptUrlOrBlob||_scriptDir,wasmMemory:J,wasmModule:fa})},ea:function(){var a=ba("jxl_emcc.worker.js");U.R.push(new Worker(a))},ta:function(){0==U.R.length&& (U.ea(),U.ha(U.R[0]));return U.R.pop()}};c.establishStackSpace=function(){var a=V(),b=O[a+44>>2];Ga(b,b-O[a+48>>2]);Aa(b)};function Ha(a){if(u)return W(1,0,a);try{Ia(a)}catch(b){b instanceof C||"unwind"==b||m(1,b)}}var X=[];function xa(a){var b=X[a];b||(a>=X.length&&(X.length=a+1),X[a]=b=ma.get(a));return b}c.invokeEntryPoint=function(a,b){return xa(a)(b)};var Ja;Ja=t?()=>{var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:u?()=>performance.now()-c.__performance_now_clock_drift:()=>performance.now(); function Ka(a){this.T=a-16;this.qa=function(b){O[this.T+4>>2]=b};this.na=function(b){O[this.T+8>>2]=b};this.oa=function(){O[this.T>>2]=0};this.ma=function(){ja[this.T+12>>0]=0};this.pa=function(){ja[this.T+13>>0]=0};this.$=function(b,d){this.qa(b);this.na(d);this.oa();this.ma();this.pa()}}var La=0; function Fa(a){var b=U.ta();if(!b)return 6;U.W.push(b);var d=U.P[a.aa]={worker:b,ba:a.aa};b.S=d;var e={cmd:"run",start_routine:a.Ba,arg:a.U,threadInfoStruct:a.aa};b.V=()=>{e.time=performance.now();b.postMessage(e,a.Ca)};b.loaded&&(b.V(),delete b.V);return 0}function W(a,b){var d=arguments.length-2,e=arguments;return ya(function(){for(var f=Ma(8*d),h=f>>3,l=0;l<d;l++)ka[h+l]=e[2+l];return Na(a,d,f,b)})}var Oa=[]; function Pa(a,b,d,e){ya(function(){var f=Ma(12),h=0;if(b){for(var l=h=0;l<b.length;++l){var n=b.charCodeAt(l);55296<=n&&57343>=n&&(n=65536+((n&1023)<<10)|b.charCodeAt(++l)&1023);127>=n?++h:h=2047>=n?h+2:65535>=n?h+3:h+4}n=h+1;l=h=Y(n);if(0<n){n=l+n-1;for(var v=0;v<b.length;++v){var p=b.charCodeAt(v);if(55296<=p&&57343>=p){var H=b.charCodeAt(++v);p=65536+((p&1023)<<10)|H&1023}if(127>=p){if(l>=n)break;N[l++]=p}else{if(2047>=p){if(l+1>=n)break;N[l++]=192|p>>6}else{if(65535>=p){if(l+2>=n)break;N[l++]= 224|p>>12}else{if(l+3>=n)break;N[l++]=240|p>>18;N[l++]=128|p>>12&63}N[l++]=128|p>>6&63}N[l++]=128|p&63}}N[l]=0}}O[f>>2]=h;O[f+4>>2]=d;O[f+8>>2]=e;Qa(a,657457152,0,h,f)})}var Ra=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function Sa(a){a=2<a?a?L(N,a,void 0):"":a;return Ra[a]||("undefined"!==typeof document?document.querySelector(a):void 0)} function Ta(a,b,d){var e=Sa(a);if(!e)return-4;e.Z&&(O[e.Z>>2]=b,O[e.Z+4>>2]=d);if(e.ia||!e.Ea)e.ia&&(e=e.ia),a=!1,e.Y&&e.Y.X&&(a=e.Y.X.getParameter(2978),a=0===a[0]&&0===a[1]&&a[2]===e.width&&a[3]===e.height),e.width=b,e.height=d,a&&e.Y.X.viewport(0,0,b,d);else return e.Z?(e=O[e.Z+8>>2],a=a?a?L(N,a,void 0):"":"",Pa(e,a,b,d),1):-4;return 0}function Ua(a,b,d){return u?W(2,1,a,b,d):Ta(a,b,d)} function Va(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(d,e){b.vertexAttribDivisorANGLE(d,e)},a.drawArraysInstanced=function(d,e,f,h){b.drawArraysInstancedANGLE(d,e,f,h)},a.drawElementsInstanced=function(d,e,f,h,l){b.drawElementsInstancedANGLE(d,e,f,h,l)})} function Wa(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(d){b.deleteVertexArrayOES(d)},a.bindVertexArray=function(d){b.bindVertexArrayOES(d)},a.isVertexArray=function(d){return b.isVertexArrayOES(d)})}function Xa(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(d,e){b.drawBuffersWEBGL(d,e)})} function Ya(a,b){a.ga||(a.ga=a.getContext,a.getContext=function(e,f){f=a.ga(e,f);return"webgl"==e==f instanceof WebGLRenderingContext?f:null});var d=a.getContext("webgl",b);return d?Za(d,b):0}function Za(a,b){var d=Y(8);O[d+4>>2]=V();var e={Ha:d,attributes:b,version:b.xa,X:a};a.canvas&&(a.canvas.Y=e);("undefined"===typeof b.fa||b.fa)&&$a(e);return d} function $a(a){a||(a=ab);if(!a.ua){a.ua=!0;var b=a.X;Va(b);Wa(b);Xa(b);b.Fa=b.getExtension("EXT_disjoint_timer_query");b.Ja=b.getExtension("WEBGL_multi_draw");(b.getSupportedExtensions()||[]).forEach(function(d){d.includes("lose_context")||d.includes("debug")||b.getExtension(d)})}}var ab,bb=["default","low-power","high-performance"],cb=[null,[],[]];function db(a){return u?W(3,1,a):0}function eb(a,b,d,e,f){if(u)return W(4,1,a,b,d,e,f)} function fb(a,b,d,e){if(u)return W(5,1,a,b,d,e);for(var f=0,h=0;h<d;h++){var l=O[b>>2],n=O[b+4>>2];b+=8;for(var v=0;v<n;v++){var p=N[l+v],H=cb[a];0===p||10===p?((1===a?ea:E)(L(H,0)),H.length=0):H.push(p)}f+=n}O[e>>2]=f;return 0}U.$(); var gb=[null,Ha,Ua,db,eb,fb],jb={u:function(a){return Y(a+16)+16},t:function(a,b,d){(new Ka(a)).$(b,d);La++;throw a;},s:function(a){hb(a,!r,1,!q);U.la()},g:function(a){u?postMessage({cmd:"cleanupThread",thread:a}):Ba(a)},d:function(a,b,d,e){if("undefined"===typeof SharedArrayBuffer)return E("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;var f=[];if(u&&0===f.length)return ib(687865856,a,b,d,e);a={Ba:d,aa:a,U:e,Ca:f};return u?(a.Da="spawnThread",postMessage(a, f),0):Fa(a)},r:function(){return 2097152},k:function(a,b){if(a==b)postMessage({cmd:"processQueuedMainThreadWork"});else if(u)postMessage({targetThread:a,cmd:"processThreadQueue"});else{a=(a=U.P[a])&&a.worker;if(!a)return;a.postMessage({cmd:"processThreadQueue"})}return 1},b:function(){I("")},e:function(){t||r||(F||(F={}),F["Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread"]||(F["Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread"]= 1,E("Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread")))},c:Ja,p:function(a,b,d){N.copyWithin(a,b,b+d)},h:function(a,b,d){Oa.length=b;d>>=3;for(var e=0;e<b;e++)Oa[e]=ka[d+e];return(0>a?wa[-a-1]:gb[a]).apply(null,Oa)},n:function(){I("OOM")},i:function(a,b,d){return Sa(a)?Ta(a,b,d):Ua(a,b,d)},l:function(){throw"unwind";},j:function(a,b){b>>=2;b={alpha:!!O[b],depth:!!O[b+1],stencil:!!O[b+2],antialias:!!O[b+3],premultipliedAlpha:!!O[b+ 4],preserveDrawingBuffer:!!O[b+5],powerPreference:bb[O[b+6]],failIfMajorPerformanceCaveat:!!O[b+7],xa:O[b+8],Ia:O[b+9],fa:O[b+10],sa:O[b+11],Ka:O[b+12],La:O[b+13]};a=Sa(a);return!a||b.sa?0:Ya(a,b)},q:function(a){Ia(a)},o:db,m:eb,f:fb,a:J||c.wasmMemory}; (function(){function a(f,h){c.asm=f.exports;U.da.push(c.asm.A);ma=c.asm.y;oa.unshift(c.asm.v);fa=h;if(!u){var l=U.R.length;U.R.forEach(function(n){U.ha(n,function(){if(!--l&&(Q--,c.monitorRunDependencies&&c.monitorRunDependencies(Q),0==Q&&(null!==sa&&(clearInterval(sa),sa=null),R))){var v=R;R=null;v()}})})}}function b(f){a(f.instance,f.module)}function d(f){return va().then(function(h){return WebAssembly.instantiate(h,e)}).then(function(h){return h}).then(f,function(h){E("failed to asynchronously prepare wasm: "+ h);I(h)})}var e={a:jb};u||(Q++,c.monitorRunDependencies&&c.monitorRunDependencies(Q));if(c.instantiateWasm)try{return c.instantiateWasm(e,a)}catch(f){return E("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return G||"function"!==typeof WebAssembly.instantiateStreaming||ta()||S.startsWith("file://")||"function"!==typeof fetch?d(b):fetch(S,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,e).then(b,function(h){E("wasm streaming compile failed: "+ h);E("falling back to ArrayBuffer instantiation");return d(b)})})})().catch(k);return{}})();c.___wasm_call_ctors=function(){return(c.___wasm_call_ctors=c.asm.v).apply(null,arguments)};c._jxlDecompress=function(){return(c._jxlDecompress=c.asm.w).apply(null,arguments)};var Y=c._malloc=function(){return(Y=c._malloc=c.asm.x).apply(null,arguments)};c._free=function(){return(c._free=c.asm.z).apply(null,arguments)};c._emscripten_tls_init=function(){return(c._emscripten_tls_init=c.asm.A).apply(null,arguments)}; c.__emscripten_thread_crashed=function(){return(c.__emscripten_thread_crashed=c.asm.B).apply(null,arguments)};var hb=c.__emscripten_thread_init=function(){return(hb=c.__emscripten_thread_init=c.asm.C).apply(null,arguments)},V=c._pthread_self=function(){return(V=c._pthread_self=c.asm.D).apply(null,arguments)},Ea=c._emscripten_main_thread_process_queued_calls=function(){return(Ea=c._emscripten_main_thread_process_queued_calls=c.asm.E).apply(null,arguments)}; c._emscripten_current_thread_process_queued_calls=function(){return(c._emscripten_current_thread_process_queued_calls=c.asm.F).apply(null,arguments)}; var ib=c._emscripten_sync_run_in_main_thread_4=function(){return(ib=c._emscripten_sync_run_in_main_thread_4=c.asm.G).apply(null,arguments)},Na=c._emscripten_run_in_main_runtime_thread_js=function(){return(Na=c._emscripten_run_in_main_runtime_thread_js=c.asm.H).apply(null,arguments)},Qa=c._emscripten_dispatch_to_thread_=function(){return(Qa=c._emscripten_dispatch_to_thread_=c.asm.I).apply(null,arguments)},Ca=c.__emscripten_thread_free_data=function(){return(Ca=c.__emscripten_thread_free_data=c.asm.J).apply(null, arguments)};c.__emscripten_thread_exit=function(){return(c.__emscripten_thread_exit=c.asm.K).apply(null,arguments)}; var Ga=c._emscripten_stack_set_limits=function(){return(Ga=c._emscripten_stack_set_limits=c.asm.L).apply(null,arguments)},za=c.stackSave=function(){return(za=c.stackSave=c.asm.M).apply(null,arguments)},Aa=c.stackRestore=function(){return(Aa=c.stackRestore=c.asm.N).apply(null,arguments)},Ma=c.stackAlloc=function(){return(Ma=c.stackAlloc=c.asm.O).apply(null,arguments)},Da=c.__emscripten_allow_main_runtime_queued_calls=38192;c.keepRuntimeAlive=D;c.PThread=U;c.PThread=U;c.wasmMemory=J;c.ExitStatus=C; var Z;function C(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}R=function kb(){Z||lb();Z||(R=kb)}; function lb(){function a(){if(!Z&&(Z=!0,c.calledRun=!0,!K)){u||T(oa);g(c);if(c.onRuntimeInitialized)c.onRuntimeInitialized();if(!u){if(c.postRun)for("function"==typeof c.postRun&&(c.postRun=[c.postRun]);c.postRun.length;){var b=c.postRun.shift();pa.unshift(b)}T(pa)}}}if(!(0<Q))if(u)g(c),u||T(oa),postMessage({cmd:"loaded"});else{if(c.preRun)for("function"==typeof c.preRun&&(c.preRun=[c.preRun]);c.preRun.length;)ra();T(na);0<Q||(c.setStatus?(c.setStatus("Running..."),setTimeout(function(){setTimeout(function(){c.setStatus("")}, 1);a()},1)):a())}}c.run=lb;function Ia(a){if(u)throw Ha(a),"unwind";D()||u||U.ka();if(!D()){U.ka();if(c.onExit)c.onExit(a);K=!0}m(a,new C(a))}if(c.preInit)for("function"==typeof c.preInit&&(c.preInit=[c.preInit]);0<c.preInit.length;)c.preInit.pop()();lb();     return JxlCodecModule.ready } ); })(); if (typeof exports === \'object\' && typeof module === \'object\')   module.exports = JxlCodecModule; else if (typeof define === \'function\' && define[\'amd\'])   define([], function() { return JxlCodecModule; }); else if (typeof exports === \'object\')   exports["JxlCodecModule"] = JxlCodecModule; ',
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
