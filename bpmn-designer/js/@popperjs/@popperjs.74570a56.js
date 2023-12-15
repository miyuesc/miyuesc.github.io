var e="top",t="bottom",n="right",r="left",o="auto",i=[e,t,n,r],a="start",s="end",f="clippingParents",c="viewport",p="popper",u="reference",l=i.reduce((function(e,t){return e.concat([t+"-"+a,t+"-"+s])}),[]),d=[].concat(i,[o]).reduce((function(e,t){return e.concat([t,t+"-"+a,t+"-"+s])}),[]),h=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function m(e){return e?(e.nodeName||"").toLowerCase():null}function v(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function g(e){return e instanceof v(e).Element||e instanceof Element}function y(e){return e instanceof v(e).HTMLElement||e instanceof HTMLElement}function b(e){return"undefined"!=typeof ShadowRoot&&(e instanceof v(e).ShadowRoot||e instanceof ShadowRoot)}const x={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];y(o)&&m(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});y(r)&&m(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]};function w(e){return e.split("-")[0]}var O=Math.max,j=Math.min,E=Math.round;function D(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function A(){return!/^((?!chrome|android).)*safari/i.test(D())}function k(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&y(e)&&(o=e.offsetWidth>0&&E(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&E(r.height)/e.offsetHeight||1);var a=(g(e)?v(e):window).visualViewport,s=!A()&&n,f=(r.left+(s&&a?a.offsetLeft:0))/o,c=(r.top+(s&&a?a.offsetTop:0))/i,p=r.width/o,u=r.height/i;return{width:p,height:u,top:c,right:f+p,bottom:c+u,left:f,x:f,y:c}}function L(e){var t=k(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function W(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&b(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function M(e){return v(e).getComputedStyle(e)}function P(e){return["table","td","th"].indexOf(m(e))>=0}function B(e){return((g(e)?e.ownerDocument:e.document)||window.document).documentElement}function H(e){return"html"===m(e)?e:e.assignedSlot||e.parentNode||(b(e)?e.host:null)||B(e)}function R(e){return y(e)&&"fixed"!==M(e).position?e.offsetParent:null}function T(e){for(var t=v(e),n=R(e);n&&P(n)&&"static"===M(n).position;)n=R(n);return n&&("html"===m(n)||"body"===m(n)&&"static"===M(n).position)?t:n||function(e){var t=/firefox/i.test(D());if(/Trident/i.test(D())&&y(e)&&"fixed"===M(e).position)return null;var n=H(e);for(b(n)&&(n=n.host);y(n)&&["html","body"].indexOf(m(n))<0;){var r=M(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function S(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function V(e,t,n){return O(e,j(t,n))}function q(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function C(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function N(e){return e.split("-")[1]}var I={top:"auto",right:"auto",bottom:"auto",left:"auto"};function F(o){var i,a=o.popper,f=o.popperRect,c=o.placement,p=o.variation,u=o.offsets,l=o.position,d=o.gpuAcceleration,h=o.adaptive,m=o.roundOffsets,g=o.isFixed,y=u.x,b=void 0===y?0:y,x=u.y,w=void 0===x?0:x,O="function"==typeof m?m({x:b,y:w}):{x:b,y:w};b=O.x,w=O.y;var j=u.hasOwnProperty("x"),D=u.hasOwnProperty("y"),A=r,k=e,L=window;if(h){var W=T(a),P="clientHeight",H="clientWidth";if(W===v(a)&&"static"!==M(W=B(a)).position&&"absolute"===l&&(P="scrollHeight",H="scrollWidth"),c===e||(c===r||c===n)&&p===s)k=t,w-=(g&&W===L&&L.visualViewport?L.visualViewport.height:W[P])-f.height,w*=d?1:-1;if(c===r||(c===e||c===t)&&p===s)A=n,b-=(g&&W===L&&L.visualViewport?L.visualViewport.width:W[H])-f.width,b*=d?1:-1}var R,S=Object.assign({position:l},h&&I),V=!0===m?function(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:E(n*o)/o||0,y:E(r*o)/o||0}}({x:b,y:w},v(a)):{x:b,y:w};return b=V.x,w=V.y,d?Object.assign({},S,((R={})[k]=D?"0":"",R[A]=j?"0":"",R.transform=(L.devicePixelRatio||1)<=1?"translate("+b+"px, "+w+"px)":"translate3d("+b+"px, "+w+"px, 0)",R)):Object.assign({},S,((i={})[k]=D?w+"px":"",i[A]=j?b+"px":"",i.transform="",i))}var U={passive:!0};var z={left:"right",right:"left",bottom:"top",top:"bottom"};function _(e){return e.replace(/left|right|bottom|top/g,(function(e){return z[e]}))}var X={start:"end",end:"start"};function Y(e){return e.replace(/start|end/g,(function(e){return X[e]}))}function G(e){var t=v(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function J(e){return k(B(e)).left+G(e).scrollLeft}function K(e){var t=M(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function Q(e){return["html","body","#document"].indexOf(m(e))>=0?e.ownerDocument.body:y(e)&&K(e)?e:Q(H(e))}function Z(e,t){var n;void 0===t&&(t=[]);var r=Q(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=v(r),a=o?[i].concat(i.visualViewport||[],K(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(Z(H(a)))}function $(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ee(e,t,n){return t===c?$(function(e,t){var n=v(e),r=B(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,f=0;if(o){i=o.width,a=o.height;var c=A();(c||!c&&"fixed"===t)&&(s=o.offsetLeft,f=o.offsetTop)}return{width:i,height:a,x:s+J(e),y:f}}(e,n)):g(t)?function(e,t){var n=k(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):$(function(e){var t,n=B(e),r=G(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=O(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=O(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+J(e),f=-r.scrollTop;return"rtl"===M(o||n).direction&&(s+=O(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}(B(e)))}function te(e,t,n,r){var o="clippingParents"===t?function(e){var t=Z(H(e)),n=["absolute","fixed"].indexOf(M(e).position)>=0&&y(e)?T(e):e;return g(n)?t.filter((function(e){return g(e)&&W(e,n)&&"body"!==m(e)})):[]}(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce((function(t,n){var o=ee(e,n,r);return t.top=O(o.top,t.top),t.right=j(o.right,t.right),t.bottom=j(o.bottom,t.bottom),t.left=O(o.left,t.left),t}),ee(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ne(o){var i,f=o.reference,c=o.element,p=o.placement,u=p?w(p):null,l=p?N(p):null,d=f.x+f.width/2-c.width/2,h=f.y+f.height/2-c.height/2;switch(u){case e:i={x:d,y:f.y-c.height};break;case t:i={x:d,y:f.y+f.height};break;case n:i={x:f.x+f.width,y:h};break;case r:i={x:f.x-c.width,y:h};break;default:i={x:f.x,y:f.y}}var m=u?S(u):null;if(null!=m){var v="y"===m?"height":"width";switch(l){case a:i[m]=i[m]-(f[v]/2-c[v]/2);break;case s:i[m]=i[m]+(f[v]/2-c[v]/2)}}return i}function re(r,o){void 0===o&&(o={});var a=o,s=a.placement,l=void 0===s?r.placement:s,d=a.strategy,h=void 0===d?r.strategy:d,m=a.boundary,v=void 0===m?f:m,y=a.rootBoundary,b=void 0===y?c:y,x=a.elementContext,w=void 0===x?p:x,O=a.altBoundary,j=void 0!==O&&O,E=a.padding,D=void 0===E?0:E,A=q("number"!=typeof D?D:C(D,i)),L=w===p?u:p,W=r.rects.popper,M=r.elements[j?L:w],P=te(g(M)?M:M.contextElement||B(r.elements.popper),v,b,h),H=k(r.elements.reference),R=ne({reference:H,element:W,strategy:"absolute",placement:l}),T=$(Object.assign({},W,R)),S=w===p?T:H,V={top:P.top-S.top+A.top,bottom:S.bottom-P.bottom+A.bottom,left:P.left-S.left+A.left,right:S.right-P.right+A.right},N=r.modifiersData.offset;if(w===p&&N){var I=N[l];Object.keys(V).forEach((function(r){var o=[n,t].indexOf(r)>=0?1:-1,i=[e,t].indexOf(r)>=0?"y":"x";V[r]+=I[i]*o}))}return V}function oe(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ie(o){return[e,n,t,r].some((function(e){return o[e]>=0}))}function ae(e,t,n){void 0===n&&(n=!1);var r,o,i=y(t),a=y(t)&&function(e){var t=e.getBoundingClientRect(),n=E(t.width)/e.offsetWidth||1,r=E(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),s=B(t),f=k(e,a,n),c={scrollLeft:0,scrollTop:0},p={x:0,y:0};return(i||!i&&!n)&&(("body"!==m(t)||K(s))&&(c=(r=t)!==v(r)&&y(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:G(r)),y(t)?((p=k(t,!0)).x+=t.clientLeft,p.y+=t.clientTop):s&&(p.x=J(s))),{x:f.left+c.scrollLeft-p.x,y:f.top+c.scrollTop-p.y,width:f.width,height:f.height}}function se(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var fe={placement:"bottom",modifiers:[],strategy:"absolute"};function ce(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function pe(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?fe:o;return function(e,t,n){void 0===n&&(n=i);var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},fe,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],c=!1,p={state:s,setOptions:function(n){var o="function"==typeof n?n(s.options):n;u(),s.options=Object.assign({},i,s.options,o),s.scrollParents={reference:g(e)?Z(e):e.contextElement?Z(e.contextElement):[],popper:Z(t)};var a,c,l=function(e){var t=se(e);return h.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((a=[].concat(r,s.options.modifiers),c=a.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(c).map((function(e){return c[e]}))));return s.orderedModifiers=l.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:s,name:t,instance:p,options:r}),a=function(){};f.push(i||a)}})),p.update()},forceUpdate:function(){if(!c){var e=s.elements,t=e.reference,n=e.popper;if(ce(t,n)){s.rects={reference:ae(t,T(n),"fixed"===s.options.strategy),popper:L(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var o=s.orderedModifiers[r],i=o.fn,a=o.options,f=void 0===a?{}:a,u=o.name;"function"==typeof i&&(s=i({state:s,options:f,name:u,instance:p})||s)}else s.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){p.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){u(),c=!0}};if(!ce(e,t))return p;function u(){f.forEach((function(e){return e()})),f=[]}return p.setOptions(n).then((function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)})),p}}var ue=pe({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,f=v(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,U)})),s&&f.addEventListener("resize",n.update,U),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,U)})),s&&f.removeEventListener("resize",n.update,U)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=ne({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:w(t.placement),variation:N(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,F(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,F(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},x,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var o=t.state,i=t.options,a=t.name,s=i.offset,f=void 0===s?[0,0]:s,c=d.reduce((function(t,i){return t[i]=function(t,o,i){var a=w(t),s=[r,e].indexOf(a)>=0?-1:1,f="function"==typeof i?i(Object.assign({},o,{placement:t})):i,c=f[0],p=f[1];return c=c||0,p=(p||0)*s,[r,n].indexOf(a)>=0?{x:p,y:c}:{x:c,y:p}}(i,o.rects,f),t}),{}),p=c[o.placement],u=p.x,l=p.y;null!=o.modifiersData.popperOffsets&&(o.modifiersData.popperOffsets.x+=u,o.modifiersData.popperOffsets.y+=l),o.modifiersData[a]=c}},{name:"flip",enabled:!0,phase:"main",fn:function(s){var f=s.state,c=s.options,p=s.name;if(!f.modifiersData[p]._skip){for(var u=c.mainAxis,h=void 0===u||u,m=c.altAxis,v=void 0===m||m,g=c.fallbackPlacements,y=c.padding,b=c.boundary,x=c.rootBoundary,O=c.altBoundary,j=c.flipVariations,E=void 0===j||j,D=c.allowedAutoPlacements,A=f.options.placement,k=w(A),L=g||(k===A||!E?[_(A)]:function(e){if(w(e)===o)return[];var t=_(e);return[Y(e),t,Y(t)]}(A)),W=[A].concat(L).reduce((function(e,t){return e.concat(w(t)===o?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,a=n.rootBoundary,s=n.padding,f=n.flipVariations,c=n.allowedAutoPlacements,p=void 0===c?d:c,u=N(r),h=u?f?l:l.filter((function(e){return N(e)===u})):i,m=h.filter((function(e){return p.indexOf(e)>=0}));0===m.length&&(m=h);var v=m.reduce((function(t,n){return t[n]=re(e,{placement:n,boundary:o,rootBoundary:a,padding:s})[w(n)],t}),{});return Object.keys(v).sort((function(e,t){return v[e]-v[t]}))}(f,{placement:t,boundary:b,rootBoundary:x,padding:y,flipVariations:E,allowedAutoPlacements:D}):t)}),[]),M=f.rects.reference,P=f.rects.popper,B=new Map,H=!0,R=W[0],T=0;T<W.length;T++){var S=W[T],V=w(S),q=N(S)===a,C=[e,t].indexOf(V)>=0,I=C?"width":"height",F=re(f,{placement:S,boundary:b,rootBoundary:x,altBoundary:O,padding:y}),U=C?q?n:r:q?t:e;M[I]>P[I]&&(U=_(U));var z=_(U),X=[];if(h&&X.push(F[V]<=0),v&&X.push(F[U]<=0,F[z]<=0),X.every((function(e){return e}))){R=S,H=!1;break}B.set(S,X)}if(H)for(var G=function(e){var t=W.find((function(t){var n=B.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return R=t,"break"},J=E?3:1;J>0;J--){if("break"===G(J))break}f.placement!==R&&(f.modifiersData[p]._skip=!0,f.placement=R,f.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(o){var i=o.state,s=o.options,f=o.name,c=s.mainAxis,p=void 0===c||c,u=s.altAxis,l=void 0!==u&&u,d=s.boundary,h=s.rootBoundary,m=s.altBoundary,v=s.padding,g=s.tether,y=void 0===g||g,b=s.tetherOffset,x=void 0===b?0:b,E=re(i,{boundary:d,rootBoundary:h,padding:v,altBoundary:m}),D=w(i.placement),A=N(i.placement),k=!A,W=S(D),M="x"===W?"y":"x",P=i.modifiersData.popperOffsets,B=i.rects.reference,H=i.rects.popper,R="function"==typeof x?x(Object.assign({},i.rects,{placement:i.placement})):x,q="number"==typeof R?{mainAxis:R,altAxis:R}:Object.assign({mainAxis:0,altAxis:0},R),C=i.modifiersData.offset?i.modifiersData.offset[i.placement]:null,I={x:0,y:0};if(P){if(p){var F,U="y"===W?e:r,z="y"===W?t:n,_="y"===W?"height":"width",X=P[W],Y=X+E[U],G=X-E[z],J=y?-H[_]/2:0,K=A===a?B[_]:H[_],Q=A===a?-H[_]:-B[_],Z=i.elements.arrow,$=y&&Z?L(Z):{width:0,height:0},ee=i.modifiersData["arrow#persistent"]?i.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[U],ne=ee[z],oe=V(0,B[_],$[_]),ie=k?B[_]/2-J-oe-te-q.mainAxis:K-oe-te-q.mainAxis,ae=k?-B[_]/2+J+oe+ne+q.mainAxis:Q+oe+ne+q.mainAxis,se=i.elements.arrow&&T(i.elements.arrow),fe=se?"y"===W?se.clientTop||0:se.clientLeft||0:0,ce=null!=(F=null==C?void 0:C[W])?F:0,pe=X+ae-ce,ue=V(y?j(Y,X+ie-ce-fe):Y,X,y?O(G,pe):G);P[W]=ue,I[W]=ue-X}if(l){var le,de="x"===W?e:r,he="x"===W?t:n,me=P[M],ve="y"===M?"height":"width",ge=me+E[de],ye=me-E[he],be=-1!==[e,r].indexOf(D),xe=null!=(le=null==C?void 0:C[M])?le:0,we=be?ge:me-B[ve]-H[ve]-xe+q.altAxis,Oe=be?me+B[ve]+H[ve]-xe-q.altAxis:ye,je=y&&be?(De=V(we,me,Ee=Oe))>Ee?Ee:De:V(y?we:ge,me,y?Oe:ye);P[M]=je,I[M]=je-me}var Ee,De;i.modifiersData[f]=I}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(o){var a,s=o.state,f=o.name,c=o.options,p=s.elements.arrow,u=s.modifiersData.popperOffsets,l=w(s.placement),d=S(l),h=[r,n].indexOf(l)>=0?"height":"width";if(p&&u){var m=function(e,t){return q("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:C(e,i))}(c.padding,s),v=L(p),g="y"===d?e:r,y="y"===d?t:n,b=s.rects.reference[h]+s.rects.reference[d]-u[d]-s.rects.popper[h],x=u[d]-s.rects.reference[d],O=T(p),j=O?"y"===d?O.clientHeight||0:O.clientWidth||0:0,E=b/2-x/2,D=m[g],A=j-v[h]-m[y],k=j/2-v[h]/2+E,W=V(D,k,A),M=d;s.modifiersData[f]=((a={})[M]=W,a.centerOffset=W-k,a)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&W(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=re(t,{elementContext:"reference"}),s=re(t,{altBoundary:!0}),f=oe(a,r),c=oe(s,o,i),p=ie(f),u=ie(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":u})}}]});export{x as a,ue as c};
