!function(){"use strict";var e,t={},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var c=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(c.exports,c,c.exports,r),c.loaded=!0,c.exports}r.m=t,e=[],r.O=function(t,n,o,c){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],o=e[d][1],c=e[d][2];for(var u=!0,i=0;i<n.length;i++)(!1&c||a>=c)&&Object.keys(r.O).every(function(e){return r.O[e](n[i])})?n.splice(i--,1):(u=!1,c<a&&(a=c));if(u){e.splice(d--,1);var f=o();void 0!==f&&(t=f)}}return t}c=c||0;for(var d=e.length;d>0&&e[d-1][2]>c;d--)e[d]=e[d-1];e[d]=[n,o,c]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce(function(t,n){return r.f[n](e,t),t},[]))},r.u=function(e){return(592===e?"common":e)+"-es2017."+{157:"1dadb58aae83c9978ce1",366:"f9e55caac92700808196",378:"61a649ef016284bde0d2",494:"b1677d9594c3ed7786fc",518:"b062d39baf57541508c7",566:"6b301cdd8512e3bfa69d",569:"b7fe6cd34d4333c0fcf7",592:"ea20ad5a475766af21d4",686:"11c031eeae6dff098543",780:"ac72420504221dd2b070",799:"552d19ca95fbe2c5b979",815:"b30018b5e904bff1ecaf",847:"40239cec40157b36ccde",876:"d51b399cd3ee94cacfed",933:"e2dacb98c8c9c3a3f671",967:"a43a5f8c0f0748f71a0d",983:"36b4ab6a2e8e8a559188"}[e]+".js"},r.miniCssF=function(e){return"styles.4f20453989e530472823.css"},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={},t="bdp-client:";r.l=function(n,o,c,a){if(e[n])e[n].push(o);else{var u,i;if(void 0!==c)for(var f=document.getElementsByTagName("script"),d=0;d<f.length;d++){var l=f[d];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==t+c){u=l;break}}u||(i=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.setAttribute("data-webpack",t+c),u.src=r.tu(n)),e[n]=[o];var s=function(t,r){u.onerror=u.onload=null,clearTimeout(b);var o=e[n];if(delete e[n],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach(function(e){return e(r)}),t)return t(r)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=s.bind(null,u.onerror),u.onload=s.bind(null,u.onload),i&&document.head.appendChild(u)}}}(),r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){var e;r.tu=function(t){return void 0===e&&(e={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e.createScriptURL(t)}}(),r.p="",function(){var e={666:0};r.f.j=function(t,n){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else if(666!=t){var c=new Promise(function(n,r){o=e[t]=[n,r]});n.push(o[2]=c);var a=r.p+r.u(t),u=new Error;r.l(a,function(n){if(r.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var c=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;u.message="Loading chunk "+t+" failed.\n("+c+": "+a+")",u.name="ChunkLoadError",u.type=c,u.request=a,o[1](u)}},"chunk-"+t,t)}else e[t]=0},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,c,a=n[0],u=n[1],i=n[2],f=0;for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(i)var d=i(r);for(t&&t(n);f<a.length;f++)r.o(e,c=a[f])&&e[c]&&e[c][0](),e[a[f]]=0;return r.O(d)},n=self.webpackChunkbdp_client=self.webpackChunkbdp_client||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();