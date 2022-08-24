/*! For license information please see main.bundle.js.LICENSE.txt */
(()=>{var t={402:(t,n,e)=>{"use strict";e.d(n,{Z:()=>c});var r=e(81),o=e.n(r),i=e(645),a=e.n(i)()(o());a.push([t.id,"/* app shell CSS */\n:root {\n\t--primary: #31a9e1;\n\t--gray: #ececec;\n\t--whitesmoke: #f5f5f5;\n\t--dark: #222;\n\t--monoaki: #272822;\n\t--navbar-height: 50px;\n}\n\nbody {\n\tmargin: 0;\n\tbackground-color: var(--monoaki);\n\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n\t\tOxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n\t\tsans-serif;\n}\n\nh1 {\n\tfont-size: 22px;\n}\n\n#navbar {\n\theight: var(--navbar-height);\n\tbackground-color: var(--primary);\n\tbox-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tcolor: white;\n\tfont-size: 22px;\n\tfont-weight: 550;\n\tletter-spacing: 0.9px;\n}\n\n.navbar-brand img {\n\tpadding-top: 10px;\n}\n\n.loading-spinner {\n\tanimation-duration: 0.75s;\n\tanimation-iteration-count: infinite;\n\tanimation-name: rotate-forever;\n\tanimation-timing-function: linear;\n\theight: 30px;\n\twidth: 30px;\n\tborder: 3px solid var(--primary);\n\tborder-right-color: transparent;\n\tborder-radius: 50%;\n}\n\n.loading-container {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\theight: calc(100vh - var(--navbar-height));\n}\n\n@keyframes rotate-forever {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n.app-update {\n\tdisplay: none;\n\tposition: absolute;\n\tright: 10px;\n}\n\n.app-update.show {\n\tdisplay: block;\n}\n\n.nav-btn {\n\tmargin: 25px;\n}\n\n.btn {\n\ttext-align: center;\n\tdisplay: inline-block;\n\tpadding: 0.5rem 1.2rem;\n\tmargin: 0;\n\ttext-decoration: none;\n\tfont-size: 1rem;\n\tborder-radius: 0.3rem;\n\tborder: 1px solid transparent;\n\toutline: none;\n\tcolor: #1a1a1a;\n\tbackground-color: #aeaeae;\n\ttransition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n\n.btn:hover {\n\tbackground-color: #cecece;\n\tcursor: pointer;\n}\n\n.btn.btn-squared {\n\tborder-radius: 0;\n}\n\n.btn.btn-sm {\n\tfont-size: 0.85rem;\n\tpadding: 0.3rem 0.9rem;\n}\n\n.btn.btn-lg {\n\tfont-size: 1.25rem;\n\tpadding: 0.8rem 1.4rem;\n}\n\n.btn.btn-block {\n\twidth: 100%;\n\tdisplay: block;\n\ttext-align: center;\n}\n\n.btn.btn-primary {\n\tbackground-color: #2d3e50;\n\tcolor: #d9e9e8;\n}\n\n.btn.btn-primary:hover {\n\tbackground-color: #57779a;\n}\n\n.btn.btn-danger {\n\tbackground-color: #e64c66;\n\tcolor: #ffffff;\n}\n\n.btn.btn-danger:hover {\n\tbackground-color: #ee8294;\n}\n\n.btn.btn-info {\n\tbackground-color: #1bbc9b;\n\tcolor: #ffffff;\n}\n\n.btn.btn-info:hover {\n\tbackground-color: #31e1bd;\n}\n\n.btn.btn-light {\n\tbackground-color: #d9e9e8;\n\tcolor: #1a1a1a;\n}\n\n.btn.btn-light:hover {\n\tbackground-color: #84b8b4;\n}\n\n.btn.btn-dark {\n\tbackground-color: #1a1a1a;\n\tcolor: #d9e9e8;\n}\n\n.btn.btn-dark:hover {\n\tbackground-color: #5f5f5f;\n}\n\n.btn.btn-white {\n\tbackground-color: #ffffff;\n\tcolor: #1a1a1a;\n}\n\n.btn.btn-white:hover {\n\tbackground-color: #cccccc;\n}\n\n.btn.btn-black {\n\tbackground-color: #000000;\n\tcolor: #ffffff;\n}\n\n.btn.btn-black:hover {\n\tbackground-color: #666666;\n}\n\n.btn.btn-link {\n\tbackground-color: #1b89bc;\n\tcolor: #ffffff;\n}\n\n.btn.btn-link:hover {\n\tbackground-color: #31a9e1;\n}\n\n@media only screen and (max-width: 600px) {\n\t.nav-btn {\n\t\tdisplay: none;\n\t}\n\n\t.navbar-brand {\n\t\tdisplay: none;\n\t}\n\n\t#navbar {\n\t\tjustify-content: center;\n\t}\n\n\th1 {\n\t\tfont-size: 18px;\n\t}\n}\n",""]);const c=a},645:t=>{"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:t=>{"use strict";t.exports=function(t){return t[1]}},379:t=>{"use strict";var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var i={},a=[],c=0;c<t.length;c++){var s=t[c],u=r.base?s[0]+r.base:s[0],l=i[u]||0,f="".concat(u," ").concat(l);i[u]=l+1;var d=e(f),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)n[d].references++,n[d].updater(p);else{var h=o(p,r);r.byIndex=c,n.splice(c,0,{identifier:f,updater:h,references:1})}a.push(f)}return a}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=e(i[a]);n[c].references--}for(var s=r(t,o),u=0;u<i.length;u++){var l=e(i[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},569:t=>{"use strict";var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:t=>{"use strict";t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{"use strict";t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{"use strict";t.exports=function(t){var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{"use strict";t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}},61:(t,n,e)=>{var r=e(698).default;function o(){"use strict";t.exports=o=function(){return n},t.exports.__esModule=!0,t.exports.default=t.exports;var n={},e=Object.prototype,i=e.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{l({},"")}catch(t){l=function(t,n,e){return t[n]=e}}function f(t,n,e,r){var o=n&&n.prototype instanceof h?n:h,i=Object.create(o.prototype),a=new L(r||[]);return i._invoke=function(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=k(a,e);if(c){if(c===p)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var s=d(t,n,e);if("normal"===s.type){if(r=e.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(r="completed",e.method="throw",e.arg=s.arg)}}}(t,e,a),i}function d(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var p={};function h(){}function v(){}function g(){}var m={};l(m,c,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(j([])));b&&b!==e&&i.call(b,c)&&(m=b);var w=g.prototype=h.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(n){l(t,n,(function(t){return this._invoke(n,t)}))}))}function _(t,n){function e(o,a,c,s){var u=d(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==r(f)&&i.call(f,"__await")?n.resolve(f.__await).then((function(t){e("next",t,c,s)}),(function(t){e("throw",t,c,s)})):n.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return e("throw",t,c,s)}))}s(u.arg)}var o;this._invoke=function(t,r){function i(){return new n((function(n,o){e(t,r,n,o)}))}return o=o?o.then(i,i):i()}}function k(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,k(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var r=d(e,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,p;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,p):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function E(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function S(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function j(t){if(t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,r=function n(){for(;++e<t.length;)if(i.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n};return r.next=r}}return{next:I}}function I(){return{value:void 0,done:!0}}return v.prototype=g,l(w,"constructor",g),l(g,"constructor",v),v.displayName=l(g,u,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===v||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},n.awrap=function(t){return{__await:t}},x(_.prototype),l(_.prototype,s,(function(){return this})),n.AsyncIterator=_,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new _(f(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),l(w,u,"Generator"),l(w,c,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=j,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),s=i.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=n,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),p},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),p}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;S(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:j(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},n}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},698:t=>{function n(e){return t.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,n(e)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},687:(t,n,e)=>{var r=e(61)();t.exports=r;try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return t[r](i,i.exports,e),i.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nc=void 0,(()=>{"use strict";try{self["workbox:window:6.5.3"]&&_()}catch(t){}function t(t,n){return new Promise((function(e){var r=new MessageChannel;r.port1.onmessage=function(t){e(t.data)},t.postMessage(n,[r.port2])}))}function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function r(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var o=0;return function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=t[Symbol.iterator]()).next.bind(r)}try{self["workbox:core:6.5.3"]&&_()}catch(t){}var o=function(){var t=this;this.promise=new Promise((function(n,e){t.resolve=n,t.reject=e}))};function i(t,n){var e=location.href;return new URL(t,e).href===new URL(n,e).href}var a=function(t,n){this.type=t,Object.assign(this,n)};function c(t,n,e){return e?n?n(t):t:(t&&t.then||(t=Promise.resolve(t)),n?t.then(n):t)}function s(){}var u={type:"SKIP_WAITING"};function l(t,n){if(!n)return t&&t.then?t.then(s):Promise.resolve()}var f=function(n){var e,r;function s(t,e){var r,s;return void 0===e&&(e={}),(r=n.call(this)||this).nn={},r.tn=0,r.rn=new o,r.en=new o,r.on=new o,r.un=0,r.an=new Set,r.cn=function(){var t=r.fn,n=t.installing;r.tn>0||!i(n.scriptURL,r.sn.toString())||performance.now()>r.un+6e4?(r.vn=n,t.removeEventListener("updatefound",r.cn)):(r.hn=n,r.an.add(n),r.rn.resolve(n)),++r.tn,n.addEventListener("statechange",r.ln)},r.ln=function(t){var n=r.fn,e=t.target,o=e.state,i=e===r.vn,c={sw:e,isExternal:i,originalEvent:t};!i&&r.mn&&(c.isUpdate=!0),r.dispatchEvent(new a(o,c)),"installed"===o?r.wn=self.setTimeout((function(){"installed"===o&&n.waiting===e&&r.dispatchEvent(new a("waiting",c))}),200):"activating"===o&&(clearTimeout(r.wn),i||r.en.resolve(e))},r.dn=function(t){var n=r.hn,e=n!==navigator.serviceWorker.controller;r.dispatchEvent(new a("controlling",{isExternal:e,originalEvent:t,sw:n,isUpdate:r.mn})),e||r.on.resolve(n)},r.gn=(s=function(t){var n=t.data,e=t.ports,o=t.source;return c(r.getSW(),(function(){r.an.has(o)&&r.dispatchEvent(new a("message",{data:n,originalEvent:t,ports:e,sw:o}))}))},function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(s.apply(this,t))}catch(t){return Promise.reject(t)}}),r.sn=t,r.nn=e,navigator.serviceWorker.addEventListener("message",r.gn),r}r=n,(e=s).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var f,d=s.prototype;return d.register=function(t){var n=(void 0===t?{}:t).immediate,e=void 0!==n&&n;try{var r=this;return function(t,n){var e=t();return e&&e.then?e.then(n):n()}((function(){if(!e&&"complete"!==document.readyState)return l(new Promise((function(t){return window.addEventListener("load",t)})))}),(function(){return r.mn=Boolean(navigator.serviceWorker.controller),r.yn=r.pn(),c(r.bn(),(function(t){r.fn=t,r.yn&&(r.hn=r.yn,r.en.resolve(r.yn),r.on.resolve(r.yn),r.yn.addEventListener("statechange",r.ln,{once:!0}));var n=r.fn.waiting;return n&&i(n.scriptURL,r.sn.toString())&&(r.hn=n,Promise.resolve().then((function(){r.dispatchEvent(new a("waiting",{sw:n,wasWaitingBeforeRegister:!0}))})).then((function(){}))),r.hn&&(r.rn.resolve(r.hn),r.an.add(r.hn)),r.fn.addEventListener("updatefound",r.cn),navigator.serviceWorker.addEventListener("controllerchange",r.dn),r.fn}))}))}catch(t){return Promise.reject(t)}},d.update=function(){try{return this.fn?l(this.fn.update()):void 0}catch(t){return Promise.reject(t)}},d.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},d.messageSW=function(n){try{return c(this.getSW(),(function(e){return t(e,n)}))}catch(t){return Promise.reject(t)}},d.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&t(this.fn.waiting,u)},d.pn=function(){var t=navigator.serviceWorker.controller;return t&&i(t.scriptURL,this.sn.toString())?t:void 0},d.bn=function(){try{var t=this;return function(t,n){try{var e=t()}catch(t){return n(t)}return e&&e.then?e.then(void 0,n):e}((function(){return c(navigator.serviceWorker.register(t.sn,t.nn),(function(n){return t.un=performance.now(),n}))}),(function(t){throw t}))}catch(t){return Promise.reject(t)}},(f=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&function(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(s.prototype,f),s}(function(){function t(){this.Pn=new Map}var n=t.prototype;return n.addEventListener=function(t,n){this.Sn(t).add(n)},n.removeEventListener=function(t,n){this.Sn(t).delete(n)},n.dispatchEvent=function(t){t.target=this;for(var n,e=r(this.Sn(t.type));!(n=e()).done;)(0,n.value)(t)},n.Sn=function(t){return this.Pn.has(t)||this.Pn.set(t,new Set),this.Pn.get(t)},t}());function d(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,n,e){return n&&d(t.prototype,n),e&&d(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function h(t,n,e,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void e(t)}c.done?n(s):Promise.resolve(s).then(r,o)}function v(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function a(t){h(i,r,o,a,c,"next",t)}function c(t){h(i,r,o,a,c,"throw",t)}a(void 0)}))}}var g=e(687),m=e.n(g);let y,b;const w=new WeakMap,x=new WeakMap,k=new WeakMap,E=new WeakMap,S=new WeakMap;let L={get(t,n,e){if(t instanceof IDBTransaction){if("done"===n)return x.get(t);if("objectStoreNames"===n)return t.objectStoreNames||k.get(t);if("store"===n)return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return I(t[n])},set:(t,n,e)=>(t[n]=e,!0),has:(t,n)=>t instanceof IDBTransaction&&("done"===n||"store"===n)||n in t};function j(t){return"function"==typeof t?(n=t)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(b||(b=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(n)?function(...t){return n.apply(P(this),t),I(w.get(this))}:function(...t){return I(n.apply(P(this),t))}:function(t,...e){const r=n.call(P(this),t,...e);return k.set(r,t.sort?t.sort():[t]),I(r)}:(t instanceof IDBTransaction&&function(t){if(x.has(t))return;const n=new Promise(((n,e)=>{const r=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{n(),r()},i=()=>{e(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)}));x.set(t,n)}(t),e=t,(y||(y=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,L):t);var n,e}function I(t){if(t instanceof IDBRequest)return function(t){const n=new Promise(((n,e)=>{const r=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{n(I(t.result)),r()},i=()=>{e(t.error),r()};t.addEventListener("success",o),t.addEventListener("error",i)}));return n.then((n=>{n instanceof IDBCursor&&w.set(n,t)})).catch((()=>{})),S.set(n,t),n}(t);if(E.has(t))return E.get(t);const n=j(t);return n!==t&&(E.set(t,n),S.set(n,t)),n}const P=t=>S.get(t);function M(t,n,{blocked:e,upgrade:r,blocking:o,terminated:i}={}){const a=indexedDB.open(t,n),c=I(a);return r&&a.addEventListener("upgradeneeded",(t=>{r(I(a.result),t.oldVersion,t.newVersion,I(a.transaction))})),e&&a.addEventListener("blocked",(()=>e())),c.then((t=>{i&&t.addEventListener("close",(()=>i())),o&&t.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),c}const T=["get","getKey","getAll","getAllKeys","count"],D=["put","add","delete","clear"],O=new Map;function B(t,n){if(!(t instanceof IDBDatabase)||n in t||"string"!=typeof n)return;if(O.get(n))return O.get(n);const e=n.replace(/FromIndex$/,""),r=n!==e,o=D.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!T.includes(e))return;const i=async function(t,...n){const i=this.transaction(t,o?"readwrite":"readonly");let a=i.store;return r&&(a=a.index(n.shift())),(await Promise.all([a[e](...n),o&&i.done]))[0]};return O.set(n,i),i}var C;C=L,L={...C,get:(t,n,e)=>B(t,n)||C.get(t,n,e),has:(t,n)=>!!B(t,n)||C.has(t,n)};var N=function(){var t=v(m().mark((function t(){return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",M("jate",1,{upgrade:function(t){t.objectStoreNames.contains("jate")?console.log("jate database already exists"):(t.createObjectStore("jate",{keyPath:"id",autoIncrement:!0}),console.log("jate database created"))}}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),W=function(){var t=v(m().mark((function t(n){return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",console.error("putDb not implemented"));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),A=function(){var t=v(m().mark((function t(){return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",console.error("getDb not implemented"));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();N();var R=p((function t(){var n=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t);var e=localStorage.getItem("content");if("undefined"==typeof CodeMirror)throw new Error("CodeMirror is not loaded");this.editor=CodeMirror(document.querySelector("#main"),{value:"",mode:"javascript",theme:"monokai",lineNumbers:!0,lineWrapping:!0,autofocus:!0,indentUnit:2,tabSize:2}),A().then((function(t){console.info("Loaded data from IndexedDB, injecting into editor"),n.editor.setValue(t||e||"\n/*\n       _____  ____________\n      / /   |/_  __/ ____/\n __  / / /| | / / / __/   \n/ /_/ / ___ |/ / / /___   \n ____/_/  |_/_/ /_____/   \njust another text editor\n*/                          \n")})),this.editor.on("change",(function(){localStorage.setItem("content",n.editor.getValue())})),this.editor.on("blur",(function(){console.log("The editor has lost focus"),W(localStorage.getItem("content"))}))})),U=e(379),F=e.n(U),G=e(795),z=e.n(G),q=e(569),H=e.n(q),Z=e(565),K=e.n(Z),V=e(216),Y=e.n(V),$=e(589),J=e.n($),Q=e(402),X={};X.styleTagTransform=J(),X.setAttributes=K(),X.insert=H().bind(null,"head"),X.domAPI=z(),X.insertStyleElement=Y(),F()(Q.Z,X),Q.Z&&Q.Z.locals&&Q.Z.locals;var tt,nt=document.querySelector("#main");nt.innerHTML="",void 0===new R&&((tt=document.createElement("div")).classList.add("spinner"),tt.innerHTML='\n  <div class="loading-container">\n  <div class="loading-spinner" />\n  </div>\n  ',nt.appendChild(tt)),"serviceWorker"in navigator?new f("/src-sw.js").register():console.error("Service workers are not supported in this browser.")})()})();