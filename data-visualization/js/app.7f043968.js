(function(t){function e(e){for(var o,i,a=e[0],u=e[1],l=e[2],f=0,s=[];f<a.length;f++)i=a[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&s.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);p&&p(e);while(s.length)s.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,i=1;i<n.length;i++){var a=n[i];0!==r[a]&&(o=!1)}o&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},i={app:0},r={app:0},c=[];function a(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"459485b8","chunk-2d21a3d2":"b0f760e4"}[t]+".js"}function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var o="css/"+({about:"about"}[t]||t)+"."+{about:"884cb3db","chunk-2d21a3d2":"31d6cfe0"}[t]+".css",r=u.p+o,c=document.getElementsByTagName("link"),a=0;a<c.length;a++){var l=c[a],f=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(f===o||f===r))return e()}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){l=s[a],f=l.getAttribute("data-href");if(f===o||f===r)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var o=e&&e.target&&e.target.src||r,c=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete i[t],p.parentNode.removeChild(p),n(c)},p.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){i[t]=0})));var o=r[t];if(0!==o)if(o)e.push(o[2]);else{var c=new Promise((function(e,n){o=r[t]=[e,n]}));e.push(o[2]=c);var l,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=a(t);var s=new Error;l=function(e){f.onerror=f.onload=null,clearTimeout(p);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,n[1](s)}r[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:f})}),12e4);f.onerror=f.onload=l,document.head.appendChild(f)}return Promise.all(e)},u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="./",u.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],f=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var p=f;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0491":function(t,e,n){},"088c":function(t,e,n){},"0ee6":function(t,e,n){},"146b":function(t,e,n){"use strict";n("0491")},"4b00":function(t,e,n){"use strict";n("b054")},9404:function(t,e,n){"use strict";n("088c")},b054:function(t,e,n){},c1ff:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("f2bf");function i(t,e,n,i,r,c){var a=Object(o["M"])("router-view");return Object(o["D"])(),Object(o["i"])(a)}var r=Object(o["n"])({name:"APP",mounted:function(){document.documentElement.oncontextmenu=function(t){return t.preventDefault()}}});n("146b");r.render=i;var c=r,a=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),u=[{path:"/home",name:"Home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"/",name:"Editor",component:function(){return n.e("about").then(n.bind(null,"eab3"))}}],l="data-visualization",f=Object(a["a"])({history:Object(a["b"])(l),routes:u}),s=f,p=(n("c740"),n("a434"),n("5502"));function d(t,e){if(t.activity.component=JSON.parse(JSON.stringify(e)),e){t.activity.isLocked=(null===e||void 0===e?void 0:e.isLocked)||!1;var n=t.components.findIndex((function(t){return t.id===e.id}));-1!==n&&t.components.splice(n,1,JSON.parse(JSON.stringify(e)))}}var b=Object(p["a"])({state:function(){return{canvas:{size:{width:1920,height:1080},scale:.8,background:{color:"",opacity:1,image:""}},components:[],componentsTotal:1,activity:{type:"background",isMoving:!1,isLocked:!1,component:null},copiedComponent:null,copiedConfig:null,defaultConfig:{size:{width:360,height:240}}}},mutations:{setActivity:function(t,e){var n=e.type,o=e.component;t.activity.type=n,d(t,o)},updateActivity:function(t,e){d(t,e)},setMoving:function(t,e){t.activity.isMoving=e},setCopied:function(t,e){t.copiedComponent=JSON.parse(JSON.stringify(e))},setCopiedConfig:function(t,e){t.copiedConfig=JSON.parse(JSON.stringify(e))},createComponent:function(t,e){t.components.push(JSON.parse(JSON.stringify(e))),t.activity.component=JSON.parse(JSON.stringify(e)),t.activity.component.visible=!0,t.activity.type="component",t.componentsTotal=t.componentsTotal+1},updateComponent:function(t,e){var n=t.components.findIndex((function(t){return t.id===e.id}));-1!==n&&t.components.splice(n,1,JSON.parse(JSON.stringify(e)))}}}),m=n("3fd4"),g={class:"config-form-item"},v={class:"config-form-item__content"};function h(t,e,n,i,r,c){return Object(o["D"])(),Object(o["i"])("div",g,[Object(o["m"])("div",{class:"config-form-item__label",style:t.labelWidthStyle},Object(o["R"])(t.label),5),Object(o["m"])("div",v,[Object(o["L"])(t.$slots,"default")])])}n("a9e3"),n("99af");var y=Object(o["n"])({name:"ConfigFormItem",props:{label:{type:String},labelWidth:{type:Number,default:80}},setup:function(t){var e=Object(o["g"])((function(){return"width: ".concat(t.labelWidth,"px; min-width: ").concat(t.labelWidth,"px")}));return{labelWidthStyle:e}}});n("4b00");y.render=h;var O=y,C=Object(o["hb"])("data-v-76b71420");Object(o["G"])("data-v-76b71420");var j={class:"chart-title-component"};Object(o["E"])();var S=C((function(t,e,n,i,r,c){return Object(o["eb"])((Object(o["D"])(),Object(o["i"])("div",j,[Object(o["m"])("span",{class:"chart-title",style:t.titleStyle},Object(o["R"])(t.titleContent),5),Object(o["m"])("span",{class:"chart-unit",style:t.unitStyle},Object(o["R"])(t.unitContent),5)],512)),[[o["ab"],t.titleConfig&&t.titleConfig.visible]])})),w=Object(o["n"])({name:"ChartTitle",props:{titleConfig:{type:Object,default:function(){return{}}}},setup:function(t){var e=Object(o["g"])((function(){var e;return null!==(e=t.titleConfig.titleContent)&&void 0!==e?e:"请输入标题"})),n=Object(o["g"])((function(){var e;return null!==(e=t.titleConfig.unitContent)&&void 0!==e?e:"单位"})),i=Object(o["g"])((function(){return{fontWeight:t.titleConfig.titleBold?"bold":"normal",fontSize:t.titleConfig.titleSize?"".concat(t.titleConfig.titleSize,"px"):"12px",fontStyle:t.titleConfig.titleItalic?"italic":"normal",color:t.titleConfig.titleColor||"#333333"}})),r=Object(o["g"])((function(){return{display:t.titleConfig.unitVisible?"inline":"none",fontWeight:t.titleConfig.unitBold?"bold":"normal",fontSize:t.titleConfig.unitSize?"".concat(t.titleConfig.unitSize,"px"):"12px",fontStyle:t.titleConfig.unitItalic?"italic":"normal",color:t.titleConfig.unitColor||"#333333"}}));return{titleContent:e,unitContent:n,titleStyle:i,unitStyle:r}}});n("9404");w.render=S,w.__scopeId="data-v-76b71420";var N=w;n("ab05"),n("0ee6"),n("c1ff");Object(o["h"])(c).use(b).use(s).use(m["a"],{size:"mini"}).component("ConfigFormItem",O).component("ChartTitle",N).mount("#app")}});