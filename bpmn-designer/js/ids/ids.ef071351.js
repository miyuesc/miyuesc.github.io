var t,o,r=(t=function(t){var o=t.exports=function(t,r){if(r||(r=16),void 0===t&&(t=128),t<=0)return"0";for(var e=Math.log(Math.pow(2,t))/Math.log(r),n=2;e===1/0;n*=2)e=Math.log(Math.pow(2,t/n))/Math.log(r)*n;var a=e-Math.floor(e),i="";for(n=0;n<Math.floor(e);n++)i=Math.floor(Math.random()*r).toString(r)+i;if(a){var s=Math.pow(r,a);i=Math.floor(Math.random()*s).toString(r)+i}var h=parseInt(i,r);return h!==1/0&&h>=Math.pow(2,t)?o(t,r):i};o.rack=function(t,r,e){var n=function(n){var i=0;do{if(i++>10){if(!e)throw new Error("too many ID collisions, use more bits");t+=e}var s=o(t,r)}while(Object.hasOwnProperty.call(a,s));return a[s]=n,s},a=n.hats={};return n.get=function(t){return n.hats[t]},n.set=function(t,o){return n.hats[t]=o,n},n.bits=t||128,n.base=r||16,n}},t(o={exports:{}},o.exports),o.exports);function e(t){if(!(this instanceof e))return new e(t);t=t||[128,36,1],this._seed=t.length?r.rack(t[0],t[1],t[2]):t}e.prototype.next=function(t){return this._seed(t||!0)},e.prototype.nextPrefixed=function(t,o){var r;do{r=t+this.next(!0)}while(this.assigned(r));return this.claim(r,o),r},e.prototype.claim=function(t,o){this._seed.set(t,o||!0)},e.prototype.assigned=function(t){return this._seed.get(t)||!1},e.prototype.unclaim=function(t){delete this._seed.hats[t]},e.prototype.clear=function(){var t,o=this._seed.hats;for(t in o)this.unclaim(t)};export{e as I};
