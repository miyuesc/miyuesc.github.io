var _,n,e,t,o,r,l,u,i,c,f={},s=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,p=Array.isArray;function h(_,n){for(var e in n)_[e]=n[e];return _}function d(_){var n=_.parentNode;n&&n.removeChild(_)}function v(n,e,t){var o,r,l,u={};for(l in e)"key"==l?o=e[l]:"ref"==l?r=e[l]:u[l]=e[l];if(arguments.length>2&&(u.children=arguments.length>3?_.call(arguments,2):t),"function"==typeof n&&null!=n.defaultProps)for(l in n.defaultProps)void 0===u[l]&&(u[l]=n.defaultProps[l]);return y(n,u,o,r,null)}function y(_,t,o,r,l){var u={type:_,props:t,key:o,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==l?++e:l,__i:-1,__u:0};return null==l&&null!=n.vnode&&n.vnode(u),u}function m(_){return _.children}function g(_,n){this.props=_,this.context=n}function k(_,n){if(null==n)return _.__?k(_.__,_.__i+1):null;for(var e;n<_.__k.length;n++)if(null!=(e=_.__k[n])&&null!=e.__e)return e.__e;return"function"==typeof _.type?k(_):null}function b(_){var n,e;if(null!=(_=_.__)&&null!=_.__c){for(_.__e=_.__c.base=null,n=0;n<_.__k.length;n++)if(null!=(e=_.__k[n])&&null!=e.__e){_.__e=_.__c.base=e.__e;break}return b(_)}}function w(_){(!_.__d&&(_.__d=!0)&&t.push(_)&&!H.__r++||o!==n.debounceRendering)&&((o=n.debounceRendering)||r)(H)}function H(){var _,e,o,r,u,i,c,f;for(t.sort(l);_=t.shift();)_.__d&&(e=t.length,r=void 0,i=(u=(o=_).__v).__e,c=[],f=[],o.__P&&((r=h({},u)).__v=u.__v+1,n.vnode&&n.vnode(r),U(o.__P,r,u,o.__n,o.__P.namespaceURI,32&u.__u?[i]:null,c,null==i?k(u):i,!!(32&u.__u),f),r.__v=u.__v,r.__.__k[r.__i]=r,T(c,r,f),r.__e!=i&&b(r)),t.length>e&&t.sort(l));H.__r=0}function x(_,n,e,t,o,r,l,u,i,c,a){var h,d,v,g,b,w=t&&t.__k||s,H=n.length;for(e.__d=i,function(_,n,e){var t,o,r,l,u,i=n.length,c=e.length,f=c,s=0;for(_.__k=[],t=0;t<i;t++)l=t+s,null!=(o=_.__k[t]=null==(o=n[t])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?y(null,o,null,null,null):p(o)?y(m,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?y(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=_,o.__b=_.__b+1,u=P(o,e,l,f),o.__i=u,r=null,-1!==u&&(f--,(r=e[u])&&(r.__u|=131072)),null==r||null===r.__v?(-1==u&&s--,"function"!=typeof o.type&&(o.__u|=65536)):u!==l&&(u==l-1?s=u-l:u==l+1?s++:u>l?f>i-l?s+=u-l:s--:u<l&&s++,u!==t+s&&(o.__u|=65536))):(r=e[l])&&null==r.key&&r.__e&&!(131072&r.__u)&&(r.__e==_.__d&&(_.__d=k(r)),D(r,r,!1),e[l]=null,f--);if(f)for(t=0;t<c;t++)null!=(r=e[t])&&!(131072&r.__u)&&(r.__e==_.__d&&(_.__d=k(r)),D(r,r))}(e,n,w),i=e.__d,h=0;h<H;h++)null!=(v=e.__k[h])&&"boolean"!=typeof v&&"function"!=typeof v&&(d=-1===v.__i?f:w[v.__i]||f,v.__i=h,U(_,v,d,o,r,l,u,i,c,a),g=v.__e,v.ref&&d.ref!=v.ref&&(d.ref&&F(d.ref,null,v),a.push(v.ref,v.__c||g,v)),null==b&&null!=g&&(b=g),65536&v.__u||d.__k===v.__k?i=S(v,i,_):"function"==typeof v.type&&void 0!==v.__d?i=v.__d:g&&(i=g.nextSibling),v.__d=void 0,v.__u&=-196609);e.__d=i,e.__e=b}function S(_,n,e){var t,o;if("function"==typeof _.type){for(t=_.__k,o=0;t&&o<t.length;o++)t[o]&&(t[o].__=_,n=S(t[o],n,e));return n}_.__e!=n&&(n&&_.type&&!e.contains(n)&&(n=k(_)),e.insertBefore(_.__e,n||null),n=_.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function P(_,n,e,t){var o=_.key,r=_.type,l=e-1,u=e+1,i=n[e];if(null===i||i&&o==i.key&&r===i.type&&!(131072&i.__u))return e;if(t>(null==i||131072&i.__u?0:1))for(;l>=0||u<n.length;){if(l>=0){if((i=n[l])&&!(131072&i.__u)&&o==i.key&&r===i.type)return l;l--}if(u<n.length){if((i=n[u])&&!(131072&i.__u)&&o==i.key&&r===i.type)return u;u++}}return-1}function C(_,n,e){"-"===n[0]?_.setProperty(n,null==e?"":e):_[n]=null==e?"":"number"!=typeof e||a.test(n)?e:e+"px"}function E(_,n,e,t,o){var r;_:if("style"===n)if("string"==typeof e)_.style.cssText=e;else{if("string"==typeof t&&(_.style.cssText=t=""),t)for(n in t)e&&n in e||C(_.style,n,"");if(e)for(n in e)t&&e[n]===t[n]||C(_.style,n,e[n])}else if("o"===n[0]&&"n"===n[1])r=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in _||"onFocusOut"===n||"onFocusIn"===n?n.toLowerCase().slice(2):n.slice(2),_.l||(_.l={}),_.l[n+r]=e,e?t?e.u=t.u:(e.u=u,_.addEventListener(n,r?c:i,r)):_.removeEventListener(n,r?c:i,r);else{if("http://www.w3.org/2000/svg"==o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&"popover"!=n&&n in _)try{_[n]=null==e?"":e;break _}catch(l){}"function"==typeof e||(null==e||!1===e&&"-"!==n[4]?_.removeAttribute(n):_.setAttribute(n,"popover"==n&&1==e?"":e))}}function N(_){return function(e){if(this.l){var t=this.l[e.type+_];if(null==e.t)e.t=u++;else if(e.t<t.u)return;return t(n.event?n.event(e):e)}}}function U(e,t,o,r,l,u,i,c,s,a){var v,y,b,w,H,S,P,C,N,U,T,F,D,A,L,W,I=t.type;if(void 0!==t.constructor)return null;128&o.__u&&(s=!!(32&o.__u),u=[c=t.__e=o.__e]),(v=n.__b)&&v(t);_:if("function"==typeof I)try{if(C=t.props,N="prototype"in I&&I.prototype.render,U=(v=I.contextType)&&r[v.__c],T=v?U?U.props.value:v.__:r,o.__c?P=(y=t.__c=o.__c).__=y.__E:(N?t.__c=y=new I(C,T):(t.__c=y=new g(C,T),y.constructor=I,y.render=M),U&&U.sub(y),y.props=C,y.state||(y.state={}),y.context=T,y.__n=r,b=y.__d=!0,y.__h=[],y._sb=[]),N&&null==y.__s&&(y.__s=y.state),N&&null!=I.getDerivedStateFromProps&&(y.__s==y.state&&(y.__s=h({},y.__s)),h(y.__s,I.getDerivedStateFromProps(C,y.__s))),w=y.props,H=y.state,y.__v=t,b)N&&null==I.getDerivedStateFromProps&&null!=y.componentWillMount&&y.componentWillMount(),N&&null!=y.componentDidMount&&y.__h.push(y.componentDidMount);else{if(N&&null==I.getDerivedStateFromProps&&C!==w&&null!=y.componentWillReceiveProps&&y.componentWillReceiveProps(C,T),!y.__e&&(null!=y.shouldComponentUpdate&&!1===y.shouldComponentUpdate(C,y.__s,T)||t.__v===o.__v)){for(t.__v!==o.__v&&(y.props=C,y.state=y.__s,y.__d=!1),t.__e=o.__e,t.__k=o.__k,t.__k.forEach((function(_){_&&(_.__=t)})),F=0;F<y._sb.length;F++)y.__h.push(y._sb[F]);y._sb=[],y.__h.length&&i.push(y);break _}null!=y.componentWillUpdate&&y.componentWillUpdate(C,y.__s,T),N&&null!=y.componentDidUpdate&&y.__h.push((function(){y.componentDidUpdate(w,H,S)}))}if(y.context=T,y.props=C,y.__P=e,y.__e=!1,D=n.__r,A=0,N){for(y.state=y.__s,y.__d=!1,D&&D(t),v=y.render(y.props,y.state,y.context),L=0;L<y._sb.length;L++)y.__h.push(y._sb[L]);y._sb=[]}else do{y.__d=!1,D&&D(t),v=y.render(y.props,y.state,y.context),y.state=y.__s}while(y.__d&&++A<25);y.state=y.__s,null!=y.getChildContext&&(r=h(h({},r),y.getChildContext())),N&&!b&&null!=y.getSnapshotBeforeUpdate&&(S=y.getSnapshotBeforeUpdate(w,H)),x(e,p(W=null!=v&&v.type===m&&null==v.key?v.props.children:v)?W:[W],t,o,r,l,u,i,c,s,a),y.base=t.__e,t.__u&=-161,y.__h.length&&i.push(y),P&&(y.__E=y.__=null)}catch(R){if(t.__v=null,s||null!=u){for(t.__u|=s?160:32;c&&8===c.nodeType&&c.nextSibling;)c=c.nextSibling;u[u.indexOf(c)]=null,t.__e=c}else t.__e=o.__e,t.__k=o.__k;n.__e(R,t,o)}else null==u&&t.__v===o.__v?(t.__k=o.__k,t.__e=o.__e):t.__e=function(n,e,t,o,r,l,u,i,c){var s,a,h,v,y,m,g,b=t.props,w=e.props,H=e.type;if("svg"===H?r="http://www.w3.org/2000/svg":"math"===H?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),null!=l)for(s=0;s<l.length;s++)if((y=l[s])&&"setAttribute"in y==!!H&&(H?y.localName===H:3===y.nodeType)){n=y,l[s]=null;break}if(null==n){if(null===H)return document.createTextNode(w);n=document.createElementNS(r,H,w.is&&w),l=null,i=!1}if(null===H)b===w||i&&n.data===w||(n.data=w);else{if(l=l&&_.call(n.childNodes),b=t.props||f,!i&&null!=l)for(b={},s=0;s<n.attributes.length;s++)b[(y=n.attributes[s]).name]=y.value;for(s in b)if(y=b[s],"children"==s);else if("dangerouslySetInnerHTML"==s)h=y;else if("key"!==s&&!(s in w)){if("value"==s&&"defaultValue"in w||"checked"==s&&"defaultChecked"in w)continue;E(n,s,null,y,r)}for(s in w)y=w[s],"children"==s?v=y:"dangerouslySetInnerHTML"==s?a=y:"value"==s?m=y:"checked"==s?g=y:"key"===s||i&&"function"!=typeof y||b[s]===y||E(n,s,y,b[s],r);if(a)i||h&&(a.__html===h.__html||a.__html===n.innerHTML)||(n.innerHTML=a.__html),e.__k=[];else if(h&&(n.innerHTML=""),x(n,p(v)?v:[v],e,t,o,"foreignObject"===H?"http://www.w3.org/1999/xhtml":r,l,u,l?l[0]:t.__k&&k(t,0),i,c),null!=l)for(s=l.length;s--;)null!=l[s]&&d(l[s]);i||(s="value",void 0!==m&&(m!==n[s]||"progress"===H&&!m||"option"===H&&m!==b[s])&&E(n,s,m,b[s],r),s="checked",void 0!==g&&g!==n[s]&&E(n,s,g,b[s],r))}return n}(o.__e,t,o,r,l,u,i,s,a);(v=n.diffed)&&v(t)}function T(_,e,t){e.__d=void 0;for(var o=0;o<t.length;o++)F(t[o],t[++o],t[++o]);n.__c&&n.__c(e,_),_.some((function(e){try{_=e.__h,e.__h=[],_.some((function(_){_.call(e)}))}catch(t){n.__e(t,e.__v)}}))}function F(_,e,t){try{if("function"==typeof _){var o="function"==typeof _.__u;o&&_.__u(),o&&null==e||(_.__u=_(e))}else _.current=e}catch(r){n.__e(r,t)}}function D(_,e,t){var o,r;if(n.unmount&&n.unmount(_),(o=_.ref)&&(o.current&&o.current!==_.__e||F(o,null,e)),null!=(o=_.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(l){n.__e(l,e)}o.base=o.__P=null}if(o=_.__k)for(r=0;r<o.length;r++)o[r]&&D(o[r],e,t||"function"!=typeof _.type);t||null==_.__e||d(_.__e),_.__c=_.__=_.__e=_.__d=void 0}function M(_,n,e){return this.constructor(_,e)}function A(e,t,o){var r,l,u,i;n.__&&n.__(e,t),l=(r="function"==typeof o)?null:o&&o.__k||t.__k,u=[],i=[],U(t,e=(!r&&o||t).__k=v(m,null,[e]),l||f,f,t.namespaceURI,!r&&o?[o]:l?null:t.firstChild?_.call(t.childNodes):null,u,!r&&o?o:l?l.__e:t.firstChild,r,i),T(u,e,i)}_=s.slice,n={__e:function(_,n,e,t){for(var o,r,l;n=n.__;)if((o=n.__c)&&!o.__)try{if((r=o.constructor)&&null!=r.getDerivedStateFromError&&(o.setState(r.getDerivedStateFromError(_)),l=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(_,t||{}),l=o.__d),l)return o.__E=o}catch(u){_=u}throw _}},e=0,g.prototype.setState=function(_,n){var e;e=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=h({},this.state),"function"==typeof _&&(_=_(h({},e),this.props)),_&&h(e,_),null!=_&&this.__v&&(n&&this._sb.push(n),w(this))},g.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),w(this))},g.prototype.render=m,t=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,l=function(_,n){return _.__v.__b-n.__v.__b},H.__r=0,u=0,i=N(!1),c=N(!0);var L,W,I,R,$=0,q=[],B=n,O=B.__b,j=B.__r,z=B.diffed,V=B.__c,G=B.unmount,J=B.__;function K(_,n){B.__h&&B.__h(W,_,$||n),$=0;var e=W.__H||(W.__H={__:[],__h:[]});return _>=e.__.length&&e.__.push({}),e.__[_]}function Q(_){return $=1,function(_,n,e){var t=K(L++,2);if(t.t=_,!t.__c&&(t.__=[e?e(n):i_(void 0,n),function(_){var n=t.__N?t.__N[0]:t.__[0],e=t.t(n,_);n!==e&&(t.__N=[e,t.__[1]],t.__c.setState({}))}],t.__c=W,!W.u)){var o=function(_,n,e){if(!t.__c.__H)return!0;var o=t.__c.__H.__.filter((function(_){return!!_.__c}));if(o.every((function(_){return!_.__N})))return!r||r.call(this,_,n,e);var l=!1;return o.forEach((function(_){if(_.__N){var n=_.__[0];_.__=_.__N,_.__N=void 0,n!==_.__[0]&&(l=!0)}})),!(!l&&t.__c.props===_)&&(!r||r.call(this,_,n,e))};W.u=!0;var r=W.shouldComponentUpdate,l=W.componentWillUpdate;W.componentWillUpdate=function(_,n,e){if(this.__e){var t=r;r=void 0,o(_,n,e),r=t}l&&l.call(this,_,n,e)},W.shouldComponentUpdate=o}return t.__N||t.__}(i_,_)}function X(_,n){var e=K(L++,3);!B.__s&&u_(e.__H,n)&&(e.__=_,e.i=n,W.__H.__h.push(e))}function Y(_,n){var e=K(L++,4);!B.__s&&u_(e.__H,n)&&(e.__=_,e.i=n,W.__h.push(e))}function Z(_){return $=5,__((function(){return{current:_}}),[])}function __(_,n){var e=K(L++,7);return u_(e.__H,n)&&(e.__=_(),e.__H=n,e.__h=_),e.__}function n_(_,n){return $=8,__((function(){return _}),n)}function e_(){for(var _;_=q.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(r_),_.__H.__h.forEach(l_),_.__H.__h=[]}catch(n){_.__H.__h=[],B.__e(n,_.__v)}}B.__b=function(_){W=null,O&&O(_)},B.__=function(_,n){_&&n.__k&&n.__k.__m&&(_.__m=n.__k.__m),J&&J(_,n)},B.__r=function(_){j&&j(_),L=0;var n=(W=_.__c).__H;n&&(I===W?(n.__h=[],W.__h=[],n.__.forEach((function(_){_.__N&&(_.__=_.__N),_.i=_.__N=void 0}))):(n.__h.forEach(r_),n.__h.forEach(l_),n.__h=[],L=0)),I=W},B.diffed=function(_){z&&z(_);var n=_.__c;n&&n.__H&&(n.__H.__h.length&&(1!==q.push(n)&&R===B.requestAnimationFrame||((R=B.requestAnimationFrame)||o_)(e_)),n.__H.__.forEach((function(_){_.i&&(_.__H=_.i),_.i=void 0}))),I=W=null},B.__c=function(_,n){n.some((function(_){try{_.__h.forEach(r_),_.__h=_.__h.filter((function(_){return!_.__||l_(_)}))}catch(e){n.some((function(_){_.__h&&(_.__h=[])})),n=[],B.__e(e,_.__v)}})),V&&V(_,n)},B.unmount=function(_){G&&G(_);var n,e=_.__c;e&&e.__H&&(e.__H.__.forEach((function(_){try{r_(_)}catch(e){n=e}})),e.__H=void 0,n&&B.__e(n,e.__v))};var t_="function"==typeof requestAnimationFrame;function o_(_){var n,e=function(){clearTimeout(t),t_&&cancelAnimationFrame(n),setTimeout(_)},t=setTimeout(e,100);t_&&(n=requestAnimationFrame(e))}function r_(_){var n=W,e=_.__c;"function"==typeof e&&(_.__c=void 0,e()),W=n}function l_(_){var n=W;_.__c=_.__(),W=n}function u_(_,n){return!_||_.length!==n.length||n.some((function(n,e){return n!==_[e]}))}function i_(_,n){return"function"==typeof n?n(_):n}export{Z as A,A as B,__ as T,Y as _,v as a,Q as h,n_ as q,X as y};