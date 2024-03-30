import{f as e,c as t,e as n,i as r,g as i,h as o,j as a}from"../min-dash/min-dash.915ecfae.js";import{P as s}from"../saxen/saxen.0183c20f.js";import{c as p,p as u,i as c,M as l}from"../moddle/moddle.fbe6e2f6.js";function f(e){return e.xml&&"lowerCase"===e.xml.tagAlias}var h={xsi:"http://www.w3.org/2001/XMLSchema-instance",xml:"http://www.w3.org/XML/1998/namespace"},d="property";function m(e){return e.xml&&e.xml.serialize}function y(e,t){return f(t)?e.prefix+":"+((n=e.localName).charAt(0).toUpperCase()+n.slice(1)):e.name;var n}function g(e){return new Error(e)}function x(e){return e.$descriptor}function N(e){t(this,e),this.elementsById={},this.references=[],this.warnings=[],this.addReference=function(e){this.references.push(e)},this.addElement=function(e){if(!e)throw g("expected element");var t,n=this.elementsById,r=x(e).idProperty;if(r&&(t=e.get(r.name))){if(!/^([a-z][\w-.]*:)?[a-z_][\w-.]*$/i.test(t))throw new Error("illegal ID <"+t+">");if(n[t])throw g("duplicate ID <"+t+">");n[t]=e}},this.addWarning=function(e){this.warnings.push(e)}}function v(){}function b(){}function w(){}function P(e,t){this.property=e,this.context=t}function T(e,t){this.element=t,this.propertyDesc=e}function A(){}function M(e,t,n){this.model=e,this.type=e.getType(t),this.context=n}function U(e,t,n){M.call(this,e,t,n)}function $(e,t,n){this.model=e,this.context=n}function E(e){e instanceof l&&(e={model:e}),t(this,{lax:!1},e)}v.prototype.handleEnd=function(){},v.prototype.handleText=function(){},v.prototype.handleNode=function(){},b.prototype=Object.create(v.prototype),b.prototype.handleNode=function(){return this},w.prototype=Object.create(v.prototype),w.prototype.handleText=function(e){this.body=(this.body||"")+e},P.prototype=Object.create(w.prototype),P.prototype.handleNode=function(e){if(this.element)throw g("expected no sub nodes");return this.element=this.createReference(e),this},P.prototype.handleEnd=function(){this.element.id=this.body},P.prototype.createReference=function(e){return{property:this.property.ns.name,id:""}},T.prototype=Object.create(w.prototype),T.prototype.handleEnd=function(){var e=this.body||"",t=this.element,n=this.propertyDesc;e=p(n.type,e),n.isMany?t.get(n.name).push(e):t.set(n.name,e)},A.prototype=Object.create(w.prototype),A.prototype.handleNode=function(e){var t=this,n=this.element;return n?t=this.handleChild(e):(n=this.element=this.createElement(e),this.context.addElement(n)),t},M.prototype=Object.create(A.prototype),M.prototype.addReference=function(e){this.context.addReference(e)},M.prototype.handleText=function(e){if(!x(this.element).bodyProperty)throw g("unexpected body text <"+e+">");w.prototype.handleText.call(this,e)},M.prototype.handleEnd=function(){var e=this.body,t=this.element,n=x(t).bodyProperty;n&&void 0!==e&&(e=p(n.type,e),t.set(n.name,e))},M.prototype.createElement=function(t){var n,r=t.attributes,i=this.type,o=x(i),a=this.context,s=new i({}),c=this.model;return e(r,(function(t,r){var i,l=o.propertiesByName[r];l&&l.isReference?l.isMany?(i=t.split(" "),e(i,(function(e){a.addReference({element:s,property:l.ns.name,id:e})}))):a.addReference({element:s,property:l.ns.name,id:t}):(l?t=p(l.type,t):"xmlns"===r?r=":"+r:(n=u(r,o.ns.prefix),c.getPackage(n.prefix)&&a.addWarning({message:"unknown attribute <"+r+">",element:s,property:r,value:t})),s.set(r,t))})),s},M.prototype.getPropertyForNode=function(e){var r=e.name,i=u(r),o=this.type,a=this.model,s=x(o),p=i.name,c=s.propertiesByName[p];if(c&&!c.isAttr){const n=function(e){const t=m(e);return t!==d&&(t||null)}(c);if(n){const r=e.attributes[n];if(r){const n=function(e,t,n){const r=u(e,t.xmlns),i=`${t[r.prefix]||r.prefix}:${r.localName}`,o=u(i);return function(e,t){var n=e.name,r=e.localName,i=t&&t.xml&&t.xml.typePrefix;return i&&0===r.indexOf(i)?e.prefix+":"+r.slice(i.length):n}(o,n.getPackage(o.prefix))}(r,e.ns,a),i=a.getType(n);return t({},c,{effectiveType:x(i).name})}}return c}var l=a.getPackage(i.prefix);if(l){const e=y(i,l),r=a.getType(e);if(c=n(s.properties,(function(e){return!e.isVirtual&&!e.isReference&&!e.isAttribute&&r.hasType(e.type)})))return t({},c,{effectiveType:x(r).name})}else if(c=n(s.properties,(function(e){return!e.isReference&&!e.isAttribute&&"Element"===e.type})))return c;throw g("unrecognized element <"+i.name+">")},M.prototype.toString=function(){return"ElementDescriptor["+x(this.type).name+"]"},M.prototype.valueHandler=function(e,t){return new T(e,t)},M.prototype.referenceHandler=function(e){return new P(e,this.context)},M.prototype.handler=function(e){return"Element"===e?new $(this.model,e,this.context):new M(this.model,e,this.context)},M.prototype.handleChild=function(e){var n,r,i,o;if(n=this.getPropertyForNode(e),i=this.element,r=n.effectiveType||n.type,c(r))return this.valueHandler(n,i);var a=(o=n.isReference?this.referenceHandler(n).handleNode(e):this.handler(r).handleNode(e)).element;return void 0!==a&&(n.isMany?i.get(n.name).push(a):i.set(n.name,a),n.isReference?(t(a,{element:i}),this.context.addReference(a)):a.$parent=i),o},U.prototype=Object.create(M.prototype),U.prototype.createElement=function(e){var t=e.name,n=u(t),r=this.model,i=this.type,o=r.getPackage(n.prefix),a=o&&y(n,o)||t;if(!i.hasType(a))throw g("unexpected element <"+e.originalName+">");return M.prototype.createElement.call(this,e)},$.prototype=Object.create(A.prototype),$.prototype.createElement=function(e){var t=e.name,n=u(t).prefix,r=e.ns[n+"$uri"],i=e.attributes;return this.model.createAny(t,r,i)},$.prototype.handleChild=function(e){var t=new $(this.model,"Element",this.context).handleNode(e),n=this.element,r=t.element;return void 0!==r&&((n.$children=n.$children||[]).push(r),r.$parent=n),t},$.prototype.handleEnd=function(){this.body&&(this.element.$body=this.body)},E.prototype.fromXML=function(e,n,r){var i=n.rootHandler;n instanceof M?(i=n,n={}):"string"==typeof n?(i=this.handler(n),n={}):"string"==typeof i&&(i=this.handler(i));var o=this.model,a=this.lax,p=new N(t({},n,{rootHandler:i})),u=new s({proxy:!0}),c=function(){var e=[];return Object.defineProperty(e,"peek",{value:function(){return this[this.length-1]}}),e}();function l(e,t,n){var r=t(),i=r.line,o=r.column,a=r.data;"<"===a.charAt(0)&&-1!==a.indexOf(" ")&&(a=a.slice(0,a.indexOf(" "))+">");var s="unparsable content "+(a?a+" ":"")+"detected\n\tline: "+i+"\n\tcolumn: "+o+"\n\tnested error: "+e.message;if(n)return p.addWarning({message:s,error:e}),!0;throw g(s)}function f(e,t){return l(e,t,!0)}i.context=p,c.push(i);var d=/^<\?xml /i,m=/ encoding="([^"]+)"/i,y=/^utf-8$/i;function v(e,t){try{c.peek().handleText(e)}catch(n){f(n,t)}}var w=o.getPackages().reduce((function(e,t){return e[t.uri]=t.prefix,e}),Object.entries(h).reduce((function(e,[t,n]){return e[n]=t,e}),o.config&&o.config.nsMap||{}));return u.ns(w).on("openTag",(function(e,t,n,r){var i=e.attrs||{},o=Object.keys(i).reduce((function(e,n){var r=t(i[n]);return e[n]=r,e}),{});!function(e,t){var n=c.peek();try{c.push(n.handleNode(e))}catch(r){l(r,t,a)&&c.push(new b)}}({name:e.name,originalName:e.originalName,attributes:o,ns:e.ns},r)})).on("question",(function(e){if(d.test(e)){var t=m.exec(e),n=t&&t[1];n&&!y.test(n)&&p.addWarning({message:"unsupported document encoding <"+n+">, falling back to UTF-8"})}})).on("closeTag",(function(){c.pop().handleEnd()})).on("cdata",v).on("text",(function(e,t,n){!function(e,t){e.trim()&&v(e,t)}(t(e),n)})).on("error",l).on("warn",f),new Promise((function(t,n){var r;try{u.parse(e),function(){var e,t,n=p.elementsById,r=p.references;for(e=0;t=r[e];e++){var i=t.element,o=n[t.id],a=x(i).propertiesByName[t.property];if(o||p.addWarning({message:"unresolved reference <"+t.id+">",element:t.element,property:t.property,value:t.id}),a.isMany){var s=i.get(a.name),u=s.indexOf(t);-1===u&&(u=s.length),o?s[u]=o:s.splice(u,1)}else i.set(a.name,o)}}()}catch(l){r=l}var o=i.element;r||o||(r=g("failed to parse document as <"+i.type.$descriptor.name+">"));var a=p.warnings,s=p.references,c=p.elementsById;return r?(r.warnings=a,n(r)):t({rootElement:o,elementsById:c,references:s,warnings:a})}))},E.prototype.handler=function(e){return new U(this.model,e)};var j=/<|>|'|"|&|\n\r|\n/g,k=/<|>|&/g;function z(e){this.prefixMap={},this.uriMap={},this.used={},this.wellknown=[],this.custom=[],this.parent=e,this.defaultPrefixMap=e&&e.defaultPrefixMap||{}}function O(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function R(e){return r(e)?e:(e.prefix?e.prefix+":":"")+e.localName}z.prototype.mapDefaultPrefixes=function(e){this.defaultPrefixMap=e},z.prototype.defaultUriByPrefix=function(e){return this.defaultPrefixMap[e]},z.prototype.byUri=function(e){return this.uriMap[e]||this.parent&&this.parent.byUri(e)},z.prototype.add=function(e,t){this.uriMap[e.uri]=e,t?this.wellknown.push(e):this.custom.push(e),this.mapPrefix(e.prefix,e.uri)},z.prototype.uriByPrefix=function(e){return this.prefixMap[e||"xmlns"]||this.parent&&this.parent.uriByPrefix(e)},z.prototype.mapPrefix=function(e,t){this.prefixMap[e||"xmlns"]=t},z.prototype.getNSKey=function(e){return void 0!==e.prefix?e.uri+"|"+e.prefix:e.uri},z.prototype.logUsed=function(e){var t=e.uri,n=this.getNSKey(e);this.used[n]=this.byUri(t),this.parent&&this.parent.logUsed(e)},z.prototype.getUsed=function(e){return[].concat(this.wellknown,this.custom).filter((e=>{var t=this.getNSKey(e);return this.used[t]}))};var B={"\n":"#10","\n\r":"#10",'"':"#34","'":"#39","<":"#60",">":"#62","&":"#38"},L={"<":"lt",">":"gt","&":"amp"};function I(e,t,n){return(e=r(e)?e:""+e).replace(t,(function(e){return"&"+n[e]+";"}))}function C(e){this.tagName=e}function D(){}function G(e){this.tagName=e}function S(e,t){this.body=[],this.attrs=[],this.parent=e,this.propertyDescriptor=t}function W(e,t,n){S.call(this,e,t),this.serialization=n}function H(){this.value="",this.write=function(e){this.value+=e}}function F(e,t){var n=[""];this.append=function(t){return e.write(t),this},this.appendNewLine=function(){return t&&e.write("\n"),this},this.appendIndent=function(){return t&&e.write(n.join("  ")),this},this.indent=function(){return n.push(""),this},this.unindent=function(){return n.pop(),this}}function V(e){return e=t({format:!1,preamble:!0},e||{}),{toXML:function(t,n){var r=n||new H,i=new F(r,e.format);e.preamble&&i.append('<?xml version="1.0" encoding="UTF-8"?>\n');var o=new S,a=t.$model;if(o.getNamespaces().mapDefaultPrefixes(function(e){const t=e.config&&e.config.nsMap||{},n={};for(const r in h)n[r]=h[r];for(const r in t){n[t[r]]=r}for(const r of e.getPackages())n[r.prefix]=r.uri;return n}(a)),o.build(t).serializeTo(i),!n)return r.value}}}C.prototype.build=function(e){return this.element=e,this},C.prototype.serializeTo=function(e){e.appendIndent().append("<"+this.tagName+">"+this.element.id+"</"+this.tagName+">").appendNewLine()},D.prototype.serializeValue=D.prototype.serializeTo=function(e){e.append(this.escape?I(this.value,k,L):this.value)},D.prototype.build=function(e,t){return this.value=t,"String"===e.type&&-1!==t.search(k)&&(this.escape=!0),this},O(G,D),G.prototype.serializeTo=function(e){e.appendIndent().append("<"+this.tagName+">"),this.serializeValue(e),e.append("</"+this.tagName+">").appendNewLine()},S.prototype.build=function(e){this.element=e;var t,n,r=e.$descriptor,i=this.propertyDescriptor,s=r.isGeneric;return t=s?this.parseGenericNsAttributes(e):this.parseNsAttributes(e),this.ns=i?this.nsPropertyTagName(i):this.nsTagName(r),this.tagName=this.addTagName(this.ns),s?this.parseGenericContainments(e):(n=function(e){var t=e.$descriptor;return o(t.properties,(function(t){var n=t.name;if(t.isVirtual)return!1;if(!a(e,n))return!1;var r=e[n];return r!==t.default&&null!==r&&(!t.isMany||r.length)}))}(e),this.parseAttributes(o(n,(function(e){return e.isAttr}))),this.parseContainments(function(e){return o(e,(function(e){return!e.isAttr}))}(n))),this.parseGenericAttributes(e,t),this},S.prototype.nsTagName=function(e){return function(e,n){return n.isGeneric?t({localName:n.ns.localName},e):t({localName:(r=n.ns.localName,i=n.$pkg,f(i)?(o=r).charAt(0).toLowerCase()+o.slice(1):r)},e);var r,i,o}(this.logNamespaceUsed(e.ns),e)},S.prototype.nsPropertyTagName=function(e){return function(e,n){return t({localName:n.ns.localName},e)}(this.logNamespaceUsed(e.ns),e)},S.prototype.isLocalNs=function(e){return e.uri===this.ns.uri},S.prototype.nsAttributeName=function(e){var n;if(n=r(e)?u(e):e.ns,e.inherited)return{localName:n.localName};var i=this.logNamespaceUsed(n);return this.getNamespaces().logUsed(i),this.isLocalNs(i)?{localName:n.localName}:t({localName:n.localName},i)},S.prototype.parseGenericNsAttributes=function(e){return Object.entries(e).filter((([t,n])=>!t.startsWith("$")&&this.parseNsAttribute(e,t,n))).map((([e,t])=>({name:e,value:t})))},S.prototype.parseGenericContainments=function(t){var n=t.$body;n&&this.body.push((new D).build({type:"String"},n));var r=t.$children;r&&e(r,(e=>{this.body.push(new S(this).build(e))}))},S.prototype.parseNsAttribute=function(e,t,n){var r,i=e.$model,o=u(t);if("xmlns"===o.prefix&&(r={prefix:o.localName,uri:n}),o.prefix||"xmlns"!==o.localName||(r={uri:n}),!r)return{name:t,value:n};if(i&&i.getPackage(n))this.logNamespace(r,!0,!0);else{var a=this.logNamespaceUsed(r,!0);this.getNamespaces().logUsed(a)}},S.prototype.parseNsAttributes=function(t){var n=this,r=t.$attrs,i=[];return e(r,(function(e,r){var o=n.parseNsAttribute(t,r,e);o&&i.push(o)})),i},S.prototype.parseGenericAttributes=function(t,n){var r=this;e(n,(function(e){try{r.addAttribute(r.nsAttributeName(e.name),e.value)}catch(t){}}))},S.prototype.parseContainments=function(t){var n=this,r=this.body,i=this.element;e(t,(function(t){var o=i.get(t.name),a=t.isReference;if(t.isMany||(o=[o]),t.isBody)r.push((new D).build(t,o[0]));else if(c(t.type))e(o,(function(e){r.push(new G(n.addTagName(n.nsPropertyTagName(t))).build(t,e))}));else if(a)e(o,(function(e){r.push(new C(n.addTagName(n.nsPropertyTagName(t))).build(e))}));else{var s=m(t);e(o,(function(e){var i;i=s?s===d?new S(n,t):new W(n,t,s):new S(n),r.push(i.build(e))}))}}))},S.prototype.getNamespaces=function(e){var t,n=this.namespaces,r=this.parent;return n||(t=r&&r.getNamespaces(),e||!t?this.namespaces=n=new z(t):n=t),n},S.prototype.logNamespace=function(e,t,n){var r=this.getNamespaces(n),i=e.uri,o=e.prefix;return r.byUri(i)&&!n||r.add(e,t),r.mapPrefix(o,i),e},S.prototype.logNamespaceUsed=function(e,t){var n,r,i,o=this.getNamespaces(t),a=e.prefix,s=e.uri;if(!a&&!s)return{localName:e.localName};if(i=o.defaultUriByPrefix(a),!(s=s||i||o.uriByPrefix(a)))throw new Error("no namespace uri given for prefix <"+a+">");if((e=o.byUri(s))||a||(e=this.logNamespace({uri:s},i===s,!0)),!e){for(n=a,r=1;o.uriByPrefix(n);)n=a+"_"+r++;e=this.logNamespace({prefix:n,uri:s},i===s)}return a&&o.mapPrefix(a,s),e},S.prototype.parseAttributes=function(t){var n=this,r=this.element;e(t,(function(t){var i=r.get(t.name);if(t.isReference)if(t.isMany){var o=[];e(i,(function(e){o.push(e.id)})),i=o.join(" ")}else i=i.id;n.addAttribute(n.nsAttributeName(t),i)}))},S.prototype.addTagName=function(e){var t=this.logNamespaceUsed(e);return this.getNamespaces().logUsed(t),R(e)},S.prototype.addAttribute=function(e,t){var n=this.attrs;r(t)&&(t=I(t,j,B));var o=i(n,(function(t){return t.name.localName===e.localName&&t.name.uri===e.uri&&t.name.prefix===e.prefix})),a={name:e,value:t};-1!==o?n.splice(o,1,a):n.push(a)},S.prototype.serializeAttributes=function(t){var n=this.attrs,r=this.namespaces;r&&(n=function(e){return e.getUsed().filter((function(e){return"xml"!==e.prefix})).map((function(e){return{name:"xmlns"+(e.prefix?":"+e.prefix:""),value:e.uri}}))}(r).concat(n)),e(n,(function(e){t.append(" ").append(R(e.name)).append('="').append(e.value).append('"')}))},S.prototype.serializeTo=function(t){var n=this.body[0],r=n&&n.constructor!==D;t.appendIndent().append("<"+this.tagName),this.serializeAttributes(t),t.append(n?">":" />"),n&&(r&&t.appendNewLine().indent(),e(this.body,(function(e){e.serializeTo(t)})),r&&t.unindent().appendIndent(),t.append("</"+this.tagName+">")),t.appendNewLine()},O(W,S),W.prototype.parseNsAttributes=function(e){var t=S.prototype.parseNsAttributes.call(this,e).filter((e=>e.name!==this.serialization)),n=e.$descriptor;if(n.name===this.propertyDescriptor.type)return t;var r=this.typeNs=this.nsTagName(n);this.getNamespaces().logUsed(this.typeNs);var i=e.$model.getPackage(r.uri),o=i.xml&&i.xml.typePrefix||"";return this.addAttribute(this.nsAttributeName(this.serialization),(r.prefix?r.prefix+":":"")+o+n.ns.localName),t},W.prototype.isLocalNs=function(e){return e.uri===(this.typeNs||this.ns).uri};export{E as R,V as W};
