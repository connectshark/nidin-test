(function(e){function t(t){for(var r,a,u=t[0],i=t[1],l=t[2],s=0,f=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},c=[];function a(e){return u.p+"js/"+({}[e]||e)+"-legacy."+{"chunk-44069082":"91185778"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=a(e);var l=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",l.name="ChunkLoadError",l.type=r,l.request=c,n[1](l)}o[e]=void 0}};var s=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/nidin-test/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),c=o.createWebHistory,a=o.createRouter,u=c(),i=a({history:u,routes:[{path:"/",component:function(){return n.e("chunk-44069082").then(n.bind(null,"6511"))}}]}),l=i,s=n("5502"),p=Object(s["a"])({state:{},mutations:{},actions:{}}),f=p;function b(e,t,n,o,c,a){var u=Object(r["x"])("Header"),i=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["e"])(r["a"],null,[Object(r["h"])(u),Object(r["h"])(i)],64)}var d=n("8f1f"),h=n.n(d),j={class:"w-full shadow-md relative"},O={class:"mx-auto max-w-screen-xl p-1 flex items-center flex-nowrap justify-between"},v={class:"hidden xl:block"},m={class:"text-lg text-gray-900 group-hover:text-gray-700 transition font-mono"},g=Object(r["h"])("div",{class:"absolute w-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"},[Object(r["h"])("img",{class:"max-w-full",src:h.a,alt:"logo"})],-1),y={class:"ml-auto md:auto"},x={class:"text-lg text-blue-400 font-mono"};function w(e,t,n,o,c,a){return Object(r["q"])(),Object(r["e"])("header",j,[Object(r["h"])("nav",O,[Object(r["h"])("ul",v,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(o.nav,(function(e){return Object(r["q"])(),Object(r["e"])("li",{class:"inline-block mx-2 p-4 group hover:bg-gray-200 transition cursor-pointer",key:e},[Object(r["h"])("p",m,Object(r["z"])(e),1)])})),128))]),g,Object(r["h"])("ul",y,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(o.account,(function(e){return Object(r["q"])(),Object(r["e"])("li",{class:"inline-block mx-2 p-4 hover:bg-blue-50 transition cursor-pointer",key:e},[Object(r["h"])("p",x,Object(r["z"])(e),1)])})),128))])])])}var k={setup:function(){return{nav:["訂購","購物車","訂單","兌換專區","更多"],account:["通知","登入"]}}},P=n("d959"),q=n.n(P);const _=q()(k,[["render",w]]);var S=_,M={name:"App",components:{Header:S}};const T=q()(M,[["render",b]]);var E=T;n("ba8c");Object(r["d"])(E).use(l).use(f).mount("#app")},"8f1f":function(e,t,n){e.exports=n.p+"img/midin.2ee9d092.png"},ba8c:function(e,t,n){}});
//# sourceMappingURL=app-legacy.04dac7b8.js.map