import{aN as t,aw as r}from"../diagram-js/diagram-js.fa2f5d5d.js";import{a as e,d as n,e as a,c as i,h as o,q as s}from"../min-dom/min-dom.04e3f566.js";var c=function(t,r){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])})(t,r)};"function"==typeof SuppressedError&&SuppressedError;var l=Object.prototype.toString,u=Object.prototype.hasOwnProperty;function d(t){return"[object Array]"===l.call(t)}function p(t){return t}function f(t){return Number(t)}function h(t,r){return u.call(t,r)}var v=function(t){function l(r,e,n,a){var i=t.call(this,r,e,n,a)||this;return i._beauty=(null==e?void 0:e.beauty)||!1,i}return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function e(){this.constructor=t}c(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}(l,t),l.prototype._updateAndOpen=function(c){if(!this._beauty)return delete this._overlaysConfig.html,t.prototype._updateAndOpen.call(this,c);var l=e('<div class="djs-context-pad wider-pad"></div>'),u=".entry",v=this;n.bind(l,u,"click",(function(t){v.trigger("click",t)})),n.bind(l,u,"dragstart",(function(t){v.trigger("dragstart",t)})),a.bind(l,"mousedown",(function(t){t.stopPropagation()})),this._overlaysConfig.html=l;var g,y=this.getEntries(c),_=this.getPad(c),m=_.html;!function(t,r){var e;if(void 0!==t){var n=d(t)?f:p;for(var a in t)if(h(t,a)&&!1===r(e=t[a],n(a)))return e}}(y,(function(t,n){var a,c,l,u,p=t.group||"default",f=e('<div class="entry__icon"></div>'),h=e(t.html||'<div class="entry" draggable="true"></div>');if(h.appendChild(f),o(h,"data-action",n),(a=s("[data-group=".concat(r(p),"]"),m))||(a=e('<div class="group"><div class="group__label">'.concat(p,"</div></div>")),o(a,"data-group",p),m.appendChild(a)),a.appendChild(h),t.className&&(c=f,l=t.className,u=i(c),(l=d(l)?l:l.split(/\s+/g)).forEach((function(t){u.add(t)}))),t.title){o(h,"title",t.title);var v=e('<div class="entry__title">'.concat(t.title,"</div>"));h.appendChild(v)}t.imageUrl&&(g=e('<img alt="'.concat(t.title,'-image" />')),o(g,"src",t.imageUrl),g.style.width="100%",g.style.height="100%",h.appendChild(g))})),i(m).add("open"),this._current={target:c,entries:y,pad:_},this._eventBus.fire("contextPad.open",{current:this._current})},l.prototype.toggleStyles=function(t){this._beauty=null!=t?t:!this._beauty;var r=this._current.target;return this.close(),this.open(r),this._beauty},l}(t);v.$inject=["canvas","config.contextPad","eventBus","overlays"];var g={contextPad:["type",v]};export{g as c};
