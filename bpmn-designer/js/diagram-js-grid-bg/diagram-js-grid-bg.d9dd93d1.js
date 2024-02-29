import{c as i,b as t,a as n,g as r}from"../tiny-svg/tiny-svg.9f6d78cc.js";import{q as a}from"../min-dom/min-dom.04e3f566.js";import{g as o,aR as c,aS as g}from"../diagram-js/diagram-js.0b671f1b.js";var s=function(){return s=Object.assign||function(i){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(i[a]=t[a]);return i},s.apply(this,arguments)},e=g,d=10*e,h=1e5,p=1e5,f=function(){function g(i,t,n){var r=this;this._config=s({smallGridSpacing:e,gridSpacing:d,gridLineStroke:.5,gridLineOpacity:.4,gridLineColor:"#ccc"},i||{}),this._canvas=t,this._visible=!1,n.on("diagram.init",(function(){r._init()})),n.on("gridSnapping.toggle",(function(i){var t=i.active;r.toggle(t),r._centerGridAroundViewbox()})),n.on("canvas.viewbox.changed",(function(i){var t=i.viewbox;r._centerGridAroundViewbox(t)}))}return g.prototype._init=function(){var r=a("defs",this._canvas._svg);r||(r=i("defs"),t(this._canvas._svg,r));var o=i("pattern"),c="djs-small-grid-pattern-"+_();n(o,{id:c,width:this._config.smallGridSpacing,height:this._config.smallGridSpacing,patternUnits:"userSpaceOnUse"});var g=i("path");n(g,{d:"M ".concat(this._config.smallGridSpacing,",0 L 0,0 0,").concat(this._config.smallGridSpacing," ").concat(this._config.smallGridSpacing,",").concat(this._config.smallGridSpacing," Z"),fill:"none",stroke:this._config.gridLineColor,strokeWidth:this._config.gridLineStroke,opacity:this._config.gridLineOpacity}),t(o,g);var s=this._pattern=i("pattern"),e="djs-grid-pattern-"+_();n(s,{id:e,width:this._config.gridSpacing,height:this._config.gridSpacing,patternUnits:"userSpaceOnUse"});var d=i("path");n(d,{d:"M ".concat(this._config.gridSpacing,",0 L 0,0 0,").concat(this._config.gridSpacing," ").concat(this._config.gridSpacing,",").concat(this._config.gridSpacing," Z"),fill:"none",stroke:this._config.gridLineColor,strokeWidth:2*this._config.gridLineStroke,opacity:2*this._config.gridLineOpacity}),t(s,d);var f=i("rect");n(f,{width:this._config.gridSpacing,height:this._config.gridSpacing,fill:"url(#".concat(c,")")}),t(s,f),t(r,o),t(r,s);var l=this._gfx=i("rect");n(l,{x:-h/2,y:-p/2,width:h,height:p,fill:"url(#".concat(e,")")})},g.prototype._centerGridAroundViewbox=function(i){i||(i=this._canvas.viewbox());var t=o(i);n(this._gfx,{x:-h/2+c(t.x,this._config.gridSpacing,"round"),y:-p/2+c(t.y,this._config.gridSpacing,"round")})},g.prototype.isVisible=function(){return this._visible},g.prototype.toggle=function(i){if(void 0===i&&(i=!this._visible),i!==this._visible){var n=this._getParent();i?t(n,this._gfx):r(n),this._visible=i}},g.prototype._getParent=function(){return this._canvas.getLayer("djs-grid-line",-2)},g}();function _(){return Math.round(1e6*Math.random())}f.$inject=["config.gridLine","canvas","eventBus"];var l={__init__:["gridLineBg"],gridLineBg:["type",f]};export{l as g};