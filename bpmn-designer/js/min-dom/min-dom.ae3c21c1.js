function t(t,e){return e.forEach((function(e){e&&"string"!=typeof e&&!Array.isArray(e)&&Object.keys(e).forEach((function(n){if("default"!==n&&!(n in t)){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}}))})),Object.freeze(t)}const e=Object.prototype.toString,n=Object.prototype.hasOwnProperty;function r(t,e){return n.call(t,e)}function o(t,n){let o,a;if(void 0===t)return;const c=function(t){return"[object Array]"===e.call(t)}(t)?l:i;for(let e in t)if(r(t,e)&&(o=t[e],a=n(o,c(e)),!1===a))return o}function i(t){return t}function l(t){return Number(t)}function a(t,...e){const n=t.style;return o(e,(function(t){t&&o(t,(function(t,e){n[e]=t}))})),t}function c(t,e,n){return 2==arguments.length?t.getAttribute(e):null===n?t.removeAttribute(e):(t.setAttribute(e,n),t)}const u=Object.prototype.toString;function s(t){return new d(t)}function d(t){if(!t||!t.nodeType)throw new Error("A DOM element reference is required");this.el=t,this.list=t.classList}function f(t){for(var e;e=t.firstChild;)t.removeChild(e);return t}function p(t,e,n){var r=n?t:t.parentNode;return r&&"function"==typeof r.closest&&r.closest(e)||null}d.prototype.add=function(t){return this.list.add(t),this},d.prototype.remove=function(t){return"[object RegExp]"==u.call(t)?this.removeMatching(t):(this.list.remove(t),this)},d.prototype.removeMatching=function(t){const e=this.array();for(let n=0;n<e.length;n++)t.test(e[n])&&this.remove(e[n]);return this},d.prototype.toggle=function(t,e){return void 0!==e?e!==this.list.toggle(t,e)&&this.list.toggle(t):this.list.toggle(t),this},d.prototype.array=function(){return Array.from(this.list)},d.prototype.has=d.prototype.contains=function(t){return this.list.contains(t)};var h,b,g,v={};function y(){h=window.addEventListener?"addEventListener":"attachEvent",b=window.removeEventListener?"removeEventListener":"detachEvent",g="addEventListener"!==h?"on":""}var m=t({__proto__:null,bind:v.bind=function(t,e,n,r){return h||y(),t[h](g+e,n,r||!1),n},unbind:v.unbind=function(t,e,n,r){return b||y(),t[b](g+e,n,r||!1),n},default:v},[v]),w=["focus","blur"];var E,C={bind:function(t,e,n,r,o){return-1!==w.indexOf(n)&&(o=!0),m.bind(t,n,(function(n){var o=n.target||n.srcElement;n.delegateTarget=p(o,e,!0),n.delegateTarget&&r.call(t,n)}),o)},unbind:function(t,e,n,r){return-1!==w.indexOf(e)&&(r=!0),m.unbind(t,e,n,r)}},O=function(t,e){if("string"!=typeof t)throw new TypeError("String expected");e||(e=document);var n=/<([\w:]+)/.exec(t);if(!n)return e.createTextNode(t);t=t.replace(/^\s+|\s+$/g,"");var r=n[1];if("body"==r){return(o=e.createElement("html")).innerHTML=t,o.removeChild(o.lastChild)}var o,i=Object.prototype.hasOwnProperty.call(x,r)?x[r]:x._default,l=i[0],a=i[1],c=i[2];(o=e.createElement("div")).innerHTML=a+t+c;for(;l--;)o=o.lastChild;if(o.firstChild==o.lastChild)return o.removeChild(o.firstChild);var u=e.createDocumentFragment();for(;o.firstChild;)u.appendChild(o.removeChild(o.firstChild));return u},j=!1;"undefined"!=typeof document&&((E=document.createElement("div")).innerHTML='  <link/><table></table><a href="/a">a</a><input type="checkbox"/>',j=!E.getElementsByTagName("link").length,E=void 0);var x={legend:[1,"<fieldset>","</fieldset>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],_default:j?[1,"X<div>","</div>"]:[0,"",""]};x.td=x.th=[3,"<table><tbody><tr>","</tr></tbody></table>"],x.option=x.optgroup=[1,'<select multiple="multiple">',"</select>"],x.thead=x.tbody=x.colgroup=x.caption=x.tfoot=[1,"<table>","</table>"],x.polyline=x.ellipse=x.polygon=x.circle=x.text=x.line=x.path=x.rect=x.g=[1,'<svg xmlns="http://www.w3.org/2000/svg" version="1.1">',"</svg>"];var A=O;function L(t,e){return t&&"function"==typeof t.matches&&t.matches(e)||!1}function T(t,e){return(e=e||document).querySelector(t)}function M(t,e){return(e=e||document).querySelectorAll(t)}function N(t){t.parentNode&&t.parentNode.removeChild(t)}export{A as a,a as b,s as c,C as d,m as e,f,c as g,M as h,p as i,L as m,T as q,N as r};