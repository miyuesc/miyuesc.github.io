import{a as t,t as e,k as i}from"../min-dash/min-dash.ed2edcc5.js";import{a as n,c as r,e as a,d as o,q as s,f as c,h as p}from"../min-dom/min-dom.04e3f566.js";var d=function(){return d=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},d.apply(this,arguments)};function l(t){return CSS.escape(t)}var h=".entry",g="djs-accordion-palette-",u="open",f=function(){function f(t,e,i,n){var r=this;this._config=d({},t||{}),this._canvas=e,this._eventBus=i,this._translate=n,i.on("tool-manager.update",(function(t){var e=t.tool;r.updateToolHighlight(e)})),i.on("i18n.changed",(function(){r._update()})),i.on("diagram.init",(function(){r._diagramInitialized=!0,r._rebuild()}))}return f.prototype.registerProvider=function(t,e){e||(e=t,t=1e3),this._eventBus.on("palette.getProviders",t,(function(t){t.providers.push(e)})),this._rebuild()},f.prototype.getEntries=function(){return this._getProviders().reduce(v,{})},f.prototype._rebuild=function(){this._diagramInitialized&&(this._getProviders().length&&(this._container||this._init(),this._update()))},f.prototype._init=function(){var t=this,e=this._eventBus,i=this._getParentContainer(),s=this._container=n(f.HTML_MARKUP);i.appendChild(s),r(i).add(g+"shown"),a.bind(s,"mousedown",(function(t){t.stopPropagation()})),o.bind(s,h,"click",(function(e){t.trigger("click",e)})),o.bind(s,h,"dragstart",(function(e){t.trigger("dragstart",e)})),e.fire("palette.create",{container:s})},f.prototype._getProviders=function(){var t=this._eventBus.createEvent({type:"palette.getProviders",providers:[]});return this._eventBus.fire(t),t.providers},f.prototype.toggleState=function(t){void 0===t&&(t={});var e=this._eventBus;"showName"in t&&(this._config.showName=t.showName),"accordion"in t&&(this._config.accordion=t.accordion),this.isOpen()&&(this.close(),this._update()),e.fire("palette.changed",d({open:this.isOpen()},this._config))},f.prototype._update=function(){var e=this._translate,a=s(".djs-palette-entries",this._container),o=this._entries=this.getEntries(),d=!!this._config.accordion,h=!!this._config.showName;c(a),t(o,(function(t,o){if(!t.separator){var c=l(d?"accordion-group":t.group||"default"),g=l(t.group||"default"),u=s("[data-group-details=".concat(g,"]"),a);if(!u){u=n('<details class="djs-accordion-group" name="'.concat(c,'"></details>')),p(u,"data-group-details",g),a.appendChild(u);var f=n("<summary>".concat(e(t.group||"default"),"</summary>"));u.appendChild(f)}var v=s("[data-group=".concat(g,"]"),u);v||(v=n('<div class="djs-palette-group"></div>'),p(v,"data-group",g),u.appendChild(v));var _,y,m,C,j=t.html||'<div class="entry" draggable="true"></div>',P=n(j);if(h){var b=n('<div class="djs-entry-item djs-entry-with-name"></div>');v.appendChild(b),b.appendChild(P),_=b}else v.appendChild(P),_=P;if(p(P,"data-action",o),t.title&&(p(_,"title",t.title),h)){var B=n('<div class="djs-entry-title">'.concat(t.title,"</div>"));_.appendChild(B)}if(t.className&&(y=P,m=t.className,C=r(y),(i(m)?m:m.split(/\s+/g)).forEach((function(t){return C.add(t)}))),t.imageUrl){var O=n('<img class="djs-entry-img">');p(O,"src",t.imageUrl),_.appendChild(O)}}})),this.open()},f.prototype.trigger=function(t,e,i){var n,r,a=e.delegateTarget||e.target;return a?(n=p(a,"data-action"),r=e.originalEvent||e,this.triggerEntry(n,t,r,i)):e.preventDefault()},f.prototype.triggerEntry=function(t,i,n,r){var a,o;if((a=this._entries[t])&&(o=a.action,!1!==this._eventBus.fire("palette.trigger",{entry:a,event:n}))){if(e(o)){if("click"===i)return o(n,r)}else if(o[i])return o[i](n,r);n.preventDefault()}},f.prototype._needsCollapse=function(t,e){return t<46*Object.keys(e).length+50},f.prototype.close=function(){this._toggleVisible(!1)},f.prototype.open=function(){this._toggleVisible(!0)},f.prototype.toggle=function(){this.isOpen()?this.close():this.open()},f.prototype._toggleVisible=function(t){var e=this._eventBus,i=this._getParentContainer(),n=this._container,a=r(n),o=r(i);a.toggle(u,t),o.toggle(g+u,t),e.fire("palette.changed",{open:this.isOpen()})},f.prototype.isActiveTool=function(t){return t&&this._activeTool===t},f.prototype.updateToolHighlight=function(e){var i,n;this._toolsContainer||(i=s(".djs-palette-entries",this._container),this._toolsContainer=s("[data-group=tools]",i)),n=this._toolsContainer,t(n.children,(function(t){var i=t.getAttribute("data-action");if(i){var n=r(t);i=i.replace("-tool",""),n.contains("entry")&&i===e?n.add("highlighted-entry"):n.remove("highlighted-entry")}}))},f.prototype.isOpen=function(){return r(this._container).has(u)},f.prototype._getParentContainer=function(){return this._canvas.getContainer()},f.HTML_MARKUP='<div class="djs-accordion-palette"><div class="djs-palette-entries"></div></div>',f}();function v(i,n){var r=n.getPaletteEntries();return e(r)?r(i):(t(r,(function(t,e){i[e]=t})),i)}f.$inject=["config.accordionPalette","canvas","eventBus","translate"];var _={__init__:["palette"],palette:["type",f]};export{_ as a};
