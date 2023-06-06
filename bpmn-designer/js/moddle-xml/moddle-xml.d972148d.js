import{a as e,c as t,b as n,g as r,u as i,f as a,h as o}from"../min-dash/min-dash.1b936205.js";import{P as s}from"../saxen/saxen.f74336e8.js";import{c as p,p as u,i as c,M as l}from"../moddle/moddle.73577d4c.js";function f(e){return e.xml&&"lowerCase"===e.xml.tagAlias}var h={xsi:"http://www.w3.org/2001/XMLSchema-instance",xml:"http://www.w3.org/XML/1998/namespace"},d="xsi:type";function m(e){return e.xml&&e.xml.serialize}function y(e){return m(e)===d}function g(e,t){return f(t)?e.prefix+":"+((n=e.localName).charAt(0).toUpperCase()+n.slice(1)):e.name;var n}function v(e){return new Error(e)}function N(e){return e.$descriptor}function x(e){t(this,e),this.elementsById={},this.references=[],this.warnings=[],this.addReference=function(e){this.references.push(e)},this.addElement=function(e){if(!e)throw v("expected element");var t,n=this.elementsById,r=N(e).idProperty;if(r&&(t=e.get(r.name))){if(!/^([a-z][\w-.]*:)?[a-z_][\w-.]*$/i.test(t))throw new Error("illegal ID <"+t+">");if(n[t])throw v("duplicate ID <"+t+">");n[t]=e}},this.addWarning=function(e){this.warnings.push(e)}}function b(){}function w(){}function T(){}function A(e,t){this.property=e,this.context=t}function P(e,t){this.element=t,this.propertyDesc=e}function U(){}function E(e,t,n){this.model=e,this.type=e.getType(t),this.context=n}function $(e,t,n){E.call(this,e,t,n)}function j(e,t,n){this.model=e,this.context=n}function O(e){e instanceof l&&(e={model:e}),t(this,{lax:!1},e)}b.prototype.handleEnd=function(){},b.prototype.handleText=function(){},b.prototype.handleNode=function(){},w.prototype=Object.create(b.prototype),w.prototype.handleNode=function(){return this},T.prototype=Object.create(b.prototype),T.prototype.handleText=function(e){this.body=(this.body||"")+e},A.prototype=Object.create(T.prototype),A.prototype.handleNode=function(e){if(this.element)throw v("expected no sub nodes");return this.element=this.createReference(e),this},A.prototype.handleEnd=function(){this.element.id=this.body},A.prototype.createReference=function(e){return{property:this.property.ns.name,id:""}},P.prototype=Object.create(T.prototype),P.prototype.handleEnd=function(){var e=this.body||"",t=this.element,n=this.propertyDesc;e=p(n.type,e),n.isMany?t.get(n.name).push(e):t.set(n.name,e)},U.prototype=Object.create(T.prototype),U.prototype.handleNode=function(e){var t=this,n=this.element;return n?t=this.handleChild(e):(n=this.element=this.createElement(e),this.context.addElement(n)),t},E.prototype=Object.create(U.prototype),E.prototype.addReference=function(e){this.context.addReference(e)},E.prototype.handleText=function(e){if(!N(this.element).bodyProperty)throw v("unexpected body text <"+e+">");T.prototype.handleText.call(this,e)},E.prototype.handleEnd=function(){var e=this.body,t=this.element,n=N(t).bodyProperty;n&&void 0!==e&&(e=p(n.type,e),t.set(n.name,e))},E.prototype.createElement=function(t){var n,r=t.attributes,i=this.type,a=N(i),o=this.context,s=new i({}),c=this.model;return e(r,(function(t,r){var i,l=a.propertiesByName[r];l&&l.isReference?l.isMany?(i=t.split(" "),e(i,(function(e){o.addReference({element:s,property:l.ns.name,id:e})}))):o.addReference({element:s,property:l.ns.name,id:t}):(l?t=p(l.type,t):"xmlns"!==r&&(n=u(r,a.ns.prefix),c.getPackage(n.prefix)&&o.addWarning({message:"unknown attribute <"+r+">",element:s,property:r,value:t})),s.set(r,t))})),s},E.prototype.getPropertyForNode=function(e){var r,i,a=e.name,o=u(a),s=this.type,p=this.model,c=N(s),l=o.name,f=c.propertiesByName[l];if(f&&!f.isAttr)return y(f)&&(r=e.attributes[d])?(r=function(e,t){var n=u(e);return function(e,t){var n=e.name,r=e.localName,i=t.xml&&t.xml.typePrefix;return i&&0===r.indexOf(i)?e.prefix+":"+r.slice(i.length):n}(n,t.getPackage(n.prefix))}(r,p),i=p.getType(r),t({},f,{effectiveType:N(i).name})):f;var h=p.getPackage(o.prefix);if(h){if(r=g(o,h),i=p.getType(r),f=n(c.properties,(function(e){return!e.isVirtual&&!e.isReference&&!e.isAttribute&&i.hasType(e.type)})))return t({},f,{effectiveType:N(i).name})}else if(f=n(c.properties,(function(e){return!e.isReference&&!e.isAttribute&&"Element"===e.type})))return f;throw v("unrecognized element <"+o.name+">")},E.prototype.toString=function(){return"ElementDescriptor["+N(this.type).name+"]"},E.prototype.valueHandler=function(e,t){return new P(e,t)},E.prototype.referenceHandler=function(e){return new A(e,this.context)},E.prototype.handler=function(e){return"Element"===e?new j(this.model,e,this.context):new E(this.model,e,this.context)},E.prototype.handleChild=function(e){var n,r,i,a;if(n=this.getPropertyForNode(e),i=this.element,r=n.effectiveType||n.type,c(r))return this.valueHandler(n,i);var o=(a=n.isReference?this.referenceHandler(n).handleNode(e):this.handler(r).handleNode(e)).element;return void 0!==o&&(n.isMany?i.get(n.name).push(o):i.set(n.name,o),n.isReference?(t(o,{element:i}),this.context.addReference(o)):o.$parent=i),a},$.prototype=Object.create(E.prototype),$.prototype.createElement=function(e){var t=e.name,n=u(t),r=this.model,i=this.type,a=r.getPackage(n.prefix),o=a&&g(n,a)||t;if(!i.hasType(o))throw v("unexpected element <"+e.originalName+">");return E.prototype.createElement.call(this,e)},j.prototype=Object.create(U.prototype),j.prototype.createElement=function(e){var t=e.name,n=u(t).prefix,r=e.ns[n+"$uri"],i=e.attributes;return this.model.createAny(t,r,i)},j.prototype.handleChild=function(e){var t=new j(this.model,"Element",this.context).handleNode(e),n=this.element,r=t.element;return void 0!==r&&((n.$children=n.$children||[]).push(r),r.$parent=n),t},j.prototype.handleEnd=function(){this.body&&(this.element.$body=this.body)},O.prototype.fromXML=function(e,n,r){var i=n.rootHandler;n instanceof E?(i=n,n={}):"string"==typeof n?(i=this.handler(n),n={}):"string"==typeof i&&(i=this.handler(i));var a=this.model,o=this.lax,p=new x(t({},n,{rootHandler:i})),u=new s({proxy:!0}),c=function(){var e=[];return Object.defineProperty(e,"peek",{value:function(){return this[this.length-1]}}),e}();function l(e,t,n){var r=t(),i=r.line,a=r.column,o=r.data;"<"===o.charAt(0)&&-1!==o.indexOf(" ")&&(o=o.slice(0,o.indexOf(" "))+">");var s="unparsable content "+(o?o+" ":"")+"detected\n\tline: "+i+"\n\tcolumn: "+a+"\n\tnested error: "+e.message;if(n)return p.addWarning({message:s,error:e}),!0;throw v(s)}function f(e,t){return l(e,t,!0)}i.context=p,c.push(i);var h=/^<\?xml /i,d=/ encoding="([^"]+)"/i,m=/^utf-8$/i;function y(e,t){try{c.peek().handleText(e)}catch(n){f(n,t)}}var g=a.getPackages().reduce((function(e,t){return e[t.uri]=t.prefix,e}),{"http://www.w3.org/XML/1998/namespace":"xml"});return u.ns(g).on("openTag",(function(e,t,n,r){var i=e.attrs||{},a=Object.keys(i).reduce((function(e,n){var r=t(i[n]);return e[n]=r,e}),{});!function(e,t){var n=c.peek();try{c.push(n.handleNode(e))}catch(r){l(r,t,o)&&c.push(new w)}}({name:e.name,originalName:e.originalName,attributes:a,ns:e.ns},r)})).on("question",(function(e){if(h.test(e)){var t=d.exec(e),n=t&&t[1];n&&!m.test(n)&&p.addWarning({message:"unsupported document encoding <"+n+">, falling back to UTF-8"})}})).on("closeTag",(function(){c.pop().handleEnd()})).on("cdata",y).on("text",(function(e,t,n){!function(e,t){e.trim()&&y(e,t)}(t(e),n)})).on("error",l).on("warn",f),new Promise((function(t,n){var r;try{u.parse(e),function(){var e,t,n=p.elementsById,r=p.references;for(e=0;t=r[e];e++){var i=t.element,a=n[t.id],o=N(i).propertiesByName[t.property];if(a||p.addWarning({message:"unresolved reference <"+t.id+">",element:t.element,property:t.property,value:t.id}),o.isMany){var s=i.get(o.name),u=s.indexOf(t);-1===u&&(u=s.length),a?s[u]=a:s.splice(u,1)}else i.set(o.name,a)}}()}catch(l){r=l}var a=i.element;r||a||(r=v("failed to parse document as <"+i.type.$descriptor.name+">"));var o=p.warnings,s=p.references,c=p.elementsById;return r?(r.warnings=o,n(r)):t({rootElement:a,elementsById:c,references:s,warnings:o})}))},O.prototype.handler=function(e){return new $(this.model,e)};var R=/<|>|'|"|&|\n\r|\n/g,k=/<|>|&/g;function z(e){var t={},n={},r={},i=[],a=[];this.byUri=function(t){return n[t]||e&&e.byUri(t)},this.add=function(e,t){n[e.uri]=e,t?i.push(e):a.push(e),this.mapPrefix(e.prefix,e.uri)},this.uriByPrefix=function(e){return t[e||"xmlns"]},this.mapPrefix=function(e,n){t[e||"xmlns"]=n},this.getNSKey=function(e){return void 0!==e.prefix?e.uri+"|"+e.prefix:e.uri},this.logUsed=function(t){var n=t.uri,i=this.getNSKey(t);r[i]=this.byUri(n),e&&e.logUsed(t)},this.getUsed=function(e){var t=this;return[].concat(i,a).filter((function(e){var n=t.getNSKey(e);return r[n]}))}}function L(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function M(e){return r(e)?e:(e.prefix?e.prefix+":":"")+e.localName}var B={"\n":"#10","\n\r":"#10",'"':"#34","'":"#39","<":"#60",">":"#62","&":"#38"},I={"<":"lt",">":"gt","&":"amp"};function D(e,t,n){return(e=r(e)?e:""+e).replace(t,(function(e){return"&"+n[e]+";"}))}function C(e){this.tagName=e}function S(){}function G(e){this.tagName=e}function H(e,t){this.body=[],this.attrs=[],this.parent=e,this.propertyDescriptor=t}function W(e,t){H.call(this,e,t)}function X(){this.value="",this.write=function(e){this.value+=e}}function F(e,t){var n=[""];this.append=function(t){return e.write(t),this},this.appendNewLine=function(){return t&&e.write("\n"),this},this.appendIndent=function(){return t&&e.write(n.join("  ")),this},this.indent=function(){return n.push(""),this},this.unindent=function(){return n.pop(),this}}function V(e){return e=t({format:!1,preamble:!0},e||{}),{toXML:function(t,n){var r=n||new X,i=new F(r,e.format);if(e.preamble&&i.append('<?xml version="1.0" encoding="UTF-8"?>\n'),(new H).build(t).serializeTo(i),!n)return r.value}}}C.prototype.build=function(e){return this.element=e,this},C.prototype.serializeTo=function(e){e.appendIndent().append("<"+this.tagName+">"+this.element.id+"</"+this.tagName+">").appendNewLine()},S.prototype.serializeValue=S.prototype.serializeTo=function(e){e.append(this.escape?D(this.value,k,I):this.value)},S.prototype.build=function(e,t){return this.value=t,"String"===e.type&&-1!==t.search(k)&&(this.escape=!0),this},L(G,S),G.prototype.serializeTo=function(e){e.appendIndent().append("<"+this.tagName+">"),this.serializeValue(e),e.append("</"+this.tagName+">").appendNewLine()},H.prototype.build=function(e){this.element=e;var t,n,r=e.$descriptor,i=this.propertyDescriptor,s=r.isGeneric;return t=s?this.parseGeneric(e):this.parseNsAttributes(e),this.ns=i?this.nsPropertyTagName(i):this.nsTagName(r),this.tagName=this.addTagName(this.ns),s||(n=function(e){var t=e.$descriptor;return a(t.properties,(function(t){var n=t.name;if(t.isVirtual)return!1;if(!o(e,n))return!1;var r=e[n];return r!==t.default&&null!==r&&(!t.isMany||r.length)}))}(e),this.parseAttributes(a(n,(function(e){return e.isAttr}))),this.parseContainments(function(e){return a(e,(function(e){return!e.isAttr}))}(n))),this.parseGenericAttributes(e,t),this},H.prototype.nsTagName=function(e){return function(e,n){return n.isGeneric?t({localName:n.ns.localName},e):t({localName:(r=n.ns.localName,i=n.$pkg,f(i)?(a=r).charAt(0).toLowerCase()+a.slice(1):r)},e);var r,i,a}(this.logNamespaceUsed(e.ns),e)},H.prototype.nsPropertyTagName=function(e){return function(e,n){return t({localName:n.ns.localName},e)}(this.logNamespaceUsed(e.ns),e)},H.prototype.isLocalNs=function(e){return e.uri===this.ns.uri},H.prototype.nsAttributeName=function(e){var n;if(n=r(e)?u(e):e.ns,e.inherited)return{localName:n.localName};var i=this.logNamespaceUsed(n);return this.getNamespaces().logUsed(i),this.isLocalNs(i)?{localName:n.localName}:t({localName:n.localName},i)},H.prototype.parseGeneric=function(t){var n=this,r=this.body,i=[];return e(t,(function(a,o){"$body"===o?r.push((new S).build({type:"String"},a)):"$children"===o?e(a,(function(e){r.push(new H(n).build(e))})):0!==o.indexOf("$")&&n.parseNsAttribute(t,o,a)&&i.push({name:o,value:a})})),i},H.prototype.parseNsAttribute=function(e,t,n){var r,i=e.$model,a=u(t);if("xmlns"===a.prefix&&(r={prefix:a.localName,uri:n}),a.prefix||"xmlns"!==a.localName||(r={uri:n}),!r)return{name:t,value:n};if(i&&i.getPackage(n))this.logNamespace(r,!0,!0);else{var o=this.logNamespaceUsed(r,!0);this.getNamespaces().logUsed(o)}},H.prototype.parseNsAttributes=function(t,n){var r=this,i=t.$attrs,a=[];return e(i,(function(e,n){var i=r.parseNsAttribute(t,n,e);i&&a.push(i)})),a},H.prototype.parseGenericAttributes=function(t,n){var r=this;e(n,(function(e){if(e.name!==d)try{r.addAttribute(r.nsAttributeName(e.name),e.value)}catch(t){}}))},H.prototype.parseContainments=function(t){var n=this,r=this.body,i=this.element;e(t,(function(t){var a=i.get(t.name),o=t.isReference;if(t.isMany||(a=[a]),t.isBody)r.push((new S).build(t,a[0]));else if(c(t.type))e(a,(function(e){r.push(new G(n.addTagName(n.nsPropertyTagName(t))).build(t,e))}));else if(o)e(a,(function(e){r.push(new C(n.addTagName(n.nsPropertyTagName(t))).build(e))}));else{var s=y(t),p=function(e){return"property"===m(e)}(t);e(a,(function(e){var i;i=s?new W(n,t):p?new H(n,t):new H(n),r.push(i.build(e))}))}}))},H.prototype.getNamespaces=function(e){var t,n=this.namespaces,r=this.parent;return n||(t=r&&r.getNamespaces(),e||!t?this.namespaces=n=new z(t):n=t),n},H.prototype.logNamespace=function(e,t,n){var r=this.getNamespaces(n),i=e.uri,a=e.prefix;return r.byUri(i)&&!n||r.add(e,t),r.mapPrefix(a,i),e},H.prototype.logNamespaceUsed=function(e,t){var n,r,i,a=this.element.$model,o=this.getNamespaces(t),s=e.prefix,p=e.uri;if(!s&&!p)return{localName:e.localName};if(i=h[s]||a&&(a.getPackage(s)||{}).uri,!(p=p||i||o.uriByPrefix(s)))throw new Error("no namespace uri given for prefix <"+s+">");if(!(e=o.byUri(p))){for(n=s,r=1;o.uriByPrefix(n);)n=s+"_"+r++;e=this.logNamespace({prefix:n,uri:p},i===p)}return s&&o.mapPrefix(s,p),e},H.prototype.parseAttributes=function(t){var n=this,r=this.element;e(t,(function(t){var i=r.get(t.name);if(t.isReference)if(t.isMany){var a=[];e(i,(function(e){a.push(e.id)})),i=a.join(" ")}else i=i.id;n.addAttribute(n.nsAttributeName(t),i)}))},H.prototype.addTagName=function(e){var t=this.logNamespaceUsed(e);return this.getNamespaces().logUsed(t),M(e)},H.prototype.addAttribute=function(e,t){var n=this.attrs;r(t)&&(t=D(t,R,B));var a=i(n,(function(t){return t.name.localName===e.localName&&t.name.uri===e.uri&&t.name.prefix===e.prefix})),o={name:e,value:t};-1!==a?n.splice(a,1,o):n.push(o)},H.prototype.serializeAttributes=function(t){var n=this.attrs,r=this.namespaces;r&&(n=function(e){return e.getUsed().filter((function(e){return"xml"!==e.prefix})).map((function(e){return{name:"xmlns"+(e.prefix?":"+e.prefix:""),value:e.uri}}))}(r).concat(n)),e(n,(function(e){t.append(" ").append(M(e.name)).append('="').append(e.value).append('"')}))},H.prototype.serializeTo=function(t){var n=this.body[0],r=n&&n.constructor!==S;t.appendIndent().append("<"+this.tagName),this.serializeAttributes(t),t.append(n?">":" />"),n&&(r&&t.appendNewLine().indent(),e(this.body,(function(e){e.serializeTo(t)})),r&&t.unindent().appendIndent(),t.append("</"+this.tagName+">")),t.appendNewLine()},L(W,H),W.prototype.parseNsAttributes=function(e){var t=H.prototype.parseNsAttributes.call(this,e),n=e.$descriptor;if(n.name===this.propertyDescriptor.type)return t;var r=this.typeNs=this.nsTagName(n);this.getNamespaces().logUsed(this.typeNs);var i=e.$model.getPackage(r.uri),a=i.xml&&i.xml.typePrefix||"";return this.addAttribute(this.nsAttributeName(d),(r.prefix?r.prefix+":":"")+a+n.ns.localName),t},W.prototype.isLocalNs=function(e){return e.uri===(this.typeNs||this.ns).uri};export{O as R,V as W};
