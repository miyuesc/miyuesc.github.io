function e(e){return Array.isArray(e)?e:[e]}const n={STOP:"STOP"};function t(e,r){const o=r(e);void 0!==e.children&&o!==n.STOP&&e.children.forEach((e=>t(e,r)))}function r(e){return e.children}function o(e){return e.key}function i(){return!1}function l(e){return!0===e.disabled}function a(e){var n;return null==e?[]:Array.isArray(e)?e:null!==(n=e.checkedKeys)&&void 0!==n?n:[]}function s(e){var n;return null==e||Array.isArray(e)?[]:null!==(n=e.indeterminateKeys)&&void 0!==n?n:[]}function c(e,n){const t=new Set(e);return n.forEach((e=>{t.has(e)||t.add(e)})),Array.from(t)}function d(e,n){const t=new Set(e);return n.forEach((e=>{t.has(e)&&t.delete(e)})),Array.from(t)}function u(e){return"group"===(null==e?void 0:e.type)}function f(e){const n=new Map;return e.forEach(((e,t)=>{n.set(e.key,t)})),e=>{var t;return null!==(t=n.get(e))&&void 0!==t?t:null}}class h extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function y(e,n,t,r){const o=p(n,t,r,!1),i=p(e,t,r,!0),l=function(e,n){const t=new Set;return e.forEach((e=>{const r=n.treeNodeMap.get(e);if(void 0!==r){let e=r.parent;for(;null!==e&&!e.disabled&&!t.has(e.key);)t.add(e.key),e=e.parent}})),t}(e,t),a=[];return o.forEach((e=>{(i.has(e)||l.has(e))&&a.push(e)})),a.forEach((e=>o.delete(e))),o}function g(e,n){const{checkedKeys:t,keysToCheck:r,keysToUncheck:o,indeterminateKeys:i,cascade:l,leafOnly:a,checkStrategy:s,allowNotLoaded:u}=e;if(!l)return void 0!==r?{checkedKeys:c(t,r),indeterminateKeys:Array.from(i)}:void 0!==o?{checkedKeys:d(t,o),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:f}=n;let h;h=void 0!==o?y(o,t,n,u):void 0!==r?function(e,n,t,r){return p(n.concat(e),t,r,!1)}(r,t,n,u):p(t,n,u,!1);const g="parent"===s,k="child"===s||a,v=h,N=new Set;for(let c=Math.max.apply(null,Array.from(f.keys()));c>=0;c-=1){const e=0===c,n=f.get(c);for(const t of n){if(t.isLeaf)continue;const{key:n,shallowLoaded:r}=t;if(k&&r&&t.children.forEach((e=>{!e.disabled&&!e.isLeaf&&e.shallowLoaded&&v.has(e.key)&&v.delete(e.key)})),t.disabled||!r)continue;let o=!0,i=!1,l=!0;for(const e of t.children){const n=e.key;if(!e.disabled)if(l&&(l=!1),v.has(n))i=!0;else{if(N.has(n)){i=!0,o=!1;break}if(o=!1,i)break}}o&&!l?(g&&t.children.forEach((e=>{!e.disabled&&v.has(e.key)&&v.delete(e.key)})),v.add(n)):i&&N.add(n),e&&k&&v.has(n)&&v.delete(n)}}return{checkedKeys:Array.from(v),indeterminateKeys:Array.from(N)}}function p(e,r,o,i){const{treeNodeMap:l,getChildren:a}=r,s=new Set,c=new Set(e);return e.forEach((e=>{const r=l.get(e);void 0!==r&&t(r,(e=>{if(e.disabled)return n.STOP;const{key:t}=e;if(!s.has(t)&&(s.add(t),c.add(t),function(e,n){return!1===e.isLeaf&&!Array.isArray(n(e))}(e.rawNode,a))){if(i)return n.STOP;if(!o)throw new h}}))})),c}function k(e,n){const t=e.siblings,r=t.length,{index:o}=e;return n?t[(o+1)%r]:o===t.length-1?null:t[o+1]}function v(e,n,{loop:t=!1,includeDisabled:r=!1}={}){const o="prev"===n?N:k,i={reverse:"prev"===n};let l=!1,a=null;return function n(s){if(null!==s){if(s===e)if(l){if(!e.disabled&&!e.isGroup)return void(a=e)}else l=!0;else if((!s.disabled||r)&&!s.ignored&&!s.isGroup)return void(a=s);if(s.isGroup){const e=w(s,i);null!==e?a=e:n(o(s,t))}else{const e=o(s,!1);if(null!==e)n(e);else{const e=function(e){return e.parent}(s);(null==e?void 0:e.isGroup)?n(o(e,t)):t&&n(o(s,!0))}}}}(e),a}function N(e,n){const t=e.siblings,r=t.length,{index:o}=e;return n?t[(o-1+r)%r]:0===o?null:t[o-1]}function w(e,n={}){const{reverse:t=!1}=n,{children:r}=e;if(r){const{length:e}=r,o=t?-1:e,i=t?-1:1;for(let l=t?e-1:0;l!==o;l+=i){const e=r[l];if(!e.disabled&&!e.ignored){if(!e.isGroup)return e;{const t=w(e,n);if(null!==t)return t}}}}return null}const b={getChild(){return this.ignored?null:w(this)},getParent(){const{parent:e}=this;return(null==e?void 0:e.isGroup)?e.getParent():e},getNext(e={}){return v(this,"next",e)},getPrev(e={}){return v(this,"prev",e)}};function m(e,n,t,r,o,i=null,l=0){const a=[];return e.forEach(((s,c)=>{var d;const u=Object.create(r);if(u.rawNode=s,u.siblings=a,u.level=l,u.index=c,u.isFirstChild=0===c,u.isLastChild=c+1===e.length,u.parent=i,!u.ignored){const e=o(s);Array.isArray(e)&&(u.children=m(e,n,t,r,o,u,l+1))}a.push(u),n.set(u.key,u),t.has(l)||t.set(l,[]),null===(d=t.get(l))||void 0===d||d.push(u)})),a}function A(n,t={}){var c;const d=new Map,f=new Map,{getDisabled:h=l,getIgnored:y=i,getIsGroup:p=u,getKey:k=o}=t,v=null!==(c=t.getChildren)&&void 0!==c?c:r,N=t.ignoreEmptyChildren?e=>{const n=v(e);return Array.isArray(n)?n.length?n:null:n}:v,w=Object.assign({get key(){return k(this.rawNode)},get disabled(){return h(this.rawNode)},get isGroup(){return p(this.rawNode)},get isLeaf(){return function(e,n){const{isLeaf:t}=e;return void 0!==t?t:!n(e)}(this.rawNode,N)},get shallowLoaded(){return function(e,n){const{isLeaf:t}=e;return!(!1===t&&!Array.isArray(n(e)))}(this.rawNode,N)},get ignored(){return y(this.rawNode)},contains(e){return function(e,n){const t=e.key;for(;n;){if(n.key===t)return!0;n=n.parent}return!1}(this,e)}},b),A=m(n,d,f,w,N);function L(e){if(null==e)return null;const n=d.get(e);return n&&!n.ignored?n:null}const K={treeNodes:A,treeNodeMap:d,levelTreeNodeMap:f,maxLevel:Math.max(...f.keys()),getChildren:N,getFlattenedNodes:e=>function(e,n){const t=n?new Set(n):void 0,r=[];return function e(n){n.forEach((n=>{r.push(n),n.isLeaf||!n.children||n.ignored||(n.isGroup||void 0===t||t.has(n.key))&&e(n.children)}))}(e),r}(A,e),getNode:function(e){if(null==e)return null;const n=d.get(e);return!n||n.isGroup||n.ignored?null:n},getPrev:function(e,n){const t=L(e);return t?t.getPrev(n):null},getNext:function(e,n){const t=L(e);return t?t.getNext(n):null},getParent:function(e){const n=L(e);return n?n.getParent():null},getChild:function(e){const n=L(e);return n?n.getChild():null},getFirstAvailableNode:()=>function(e){if(0===e.length)return null;const n=e[0];return n.isGroup||n.ignored||n.disabled?n.getNext():n}(A),getPath:(e,n={})=>function(e,{includeGroup:n=!1,includeSelf:t=!0},r){var o;const i=r.treeNodeMap;let l=null==e?null:null!==(o=i.get(e))&&void 0!==o?o:null;const a={keyPath:[],treeNodePath:[],treeNode:l};if(null==l?void 0:l.ignored)return a.treeNode=null,a;for(;l;)l.ignored||!n&&l.isGroup||a.treeNodePath.push(l),l=l.parent;return a.treeNodePath.reverse(),t||a.treeNodePath.pop(),a.keyPath=a.treeNodePath.map((e=>e.key)),a}(e,n,K),getCheckedKeys(e,n={}){const{cascade:t=!0,leafOnly:r=!1,checkStrategy:o="all",allowNotLoaded:i=!1}=n;return g({checkedKeys:a(e),indeterminateKeys:s(e),cascade:t,leafOnly:r,checkStrategy:o,allowNotLoaded:i},K)},check(n,t,r={}){const{cascade:o=!0,leafOnly:i=!1,checkStrategy:l="all",allowNotLoaded:c=!1}=r;return g({checkedKeys:a(t),indeterminateKeys:s(t),keysToCheck:null==n?[]:e(n),cascade:o,leafOnly:i,checkStrategy:l,allowNotLoaded:c},K)},uncheck(n,t,r={}){const{cascade:o=!0,leafOnly:i=!1,checkStrategy:l="all",allowNotLoaded:c=!1}=r;return g({checkedKeys:a(t),indeterminateKeys:s(t),keysToUncheck:null==n?[]:e(n),cascade:o,leafOnly:i,checkStrategy:l,allowNotLoaded:c},K)},getNonLeafKeys:(e={})=>function(e,n={}){const{preserveGroup:t=!1}=n,r=[],o=t?e=>{e.isLeaf||(r.push(e.key),i(e.children))}:e=>{e.isLeaf||(e.isGroup||r.push(e.key),i(e.children))};function i(e){e.forEach(o)}return i(e),r}(A,e)};return K}export{A as a,f as c};