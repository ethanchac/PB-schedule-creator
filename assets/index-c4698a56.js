function LT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function VT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Xy={exports:{}},lu={},Zy={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Go=Symbol.for("react.element"),MT=Symbol.for("react.portal"),jT=Symbol.for("react.fragment"),FT=Symbol.for("react.strict_mode"),UT=Symbol.for("react.profiler"),$T=Symbol.for("react.provider"),BT=Symbol.for("react.context"),zT=Symbol.for("react.forward_ref"),WT=Symbol.for("react.suspense"),HT=Symbol.for("react.memo"),qT=Symbol.for("react.lazy"),cm=Symbol.iterator;function KT(t){return t===null||typeof t!="object"?null:(t=cm&&t[cm]||t["@@iterator"],typeof t=="function"?t:null)}var ev={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tv=Object.assign,nv={};function hs(t,e,n){this.props=t,this.context=e,this.refs=nv,this.updater=n||ev}hs.prototype.isReactComponent={};hs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};hs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function rv(){}rv.prototype=hs.prototype;function yd(t,e,n){this.props=t,this.context=e,this.refs=nv,this.updater=n||ev}var vd=yd.prototype=new rv;vd.constructor=yd;tv(vd,hs.prototype);vd.isPureReactComponent=!0;var hm=Array.isArray,iv=Object.prototype.hasOwnProperty,_d={current:null},sv={key:!0,ref:!0,__self:!0,__source:!0};function ov(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)iv.call(e,r)&&!sv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Go,type:t,key:s,ref:o,props:i,_owner:_d.current}}function GT(t,e){return{$$typeof:Go,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function wd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Go}function QT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var dm=/\/+/g;function cc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?QT(""+t.key):e.toString(36)}function Ja(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Go:case MT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+cc(o,0):r,hm(i)?(n="",t!=null&&(n=t.replace(dm,"$&/")+"/"),Ja(i,e,n,"",function(c){return c})):i!=null&&(wd(i)&&(i=GT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(dm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",hm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+cc(s,l);o+=Ja(s,e,n,u,i)}else if(u=KT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+cc(s,l++),o+=Ja(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ra(t,e,n){if(t==null)return t;var r=[],i=0;return Ja(t,r,"","",function(s){return e.call(n,s,i++)}),r}function YT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var St={current:null},Xa={transition:null},JT={ReactCurrentDispatcher:St,ReactCurrentBatchConfig:Xa,ReactCurrentOwner:_d};function av(){throw Error("act(...) is not supported in production builds of React.")}ue.Children={map:Ra,forEach:function(t,e,n){Ra(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ra(t,function(){e++}),e},toArray:function(t){return Ra(t,function(e){return e})||[]},only:function(t){if(!wd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ue.Component=hs;ue.Fragment=jT;ue.Profiler=UT;ue.PureComponent=yd;ue.StrictMode=FT;ue.Suspense=WT;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JT;ue.act=av;ue.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=tv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=_d.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)iv.call(e,u)&&!sv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Go,type:t.type,key:i,ref:s,props:r,_owner:o}};ue.createContext=function(t){return t={$$typeof:BT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$T,_context:t},t.Consumer=t};ue.createElement=ov;ue.createFactory=function(t){var e=ov.bind(null,t);return e.type=t,e};ue.createRef=function(){return{current:null}};ue.forwardRef=function(t){return{$$typeof:zT,render:t}};ue.isValidElement=wd;ue.lazy=function(t){return{$$typeof:qT,_payload:{_status:-1,_result:t},_init:YT}};ue.memo=function(t,e){return{$$typeof:HT,type:t,compare:e===void 0?null:e}};ue.startTransition=function(t){var e=Xa.transition;Xa.transition={};try{t()}finally{Xa.transition=e}};ue.unstable_act=av;ue.useCallback=function(t,e){return St.current.useCallback(t,e)};ue.useContext=function(t){return St.current.useContext(t)};ue.useDebugValue=function(){};ue.useDeferredValue=function(t){return St.current.useDeferredValue(t)};ue.useEffect=function(t,e){return St.current.useEffect(t,e)};ue.useId=function(){return St.current.useId()};ue.useImperativeHandle=function(t,e,n){return St.current.useImperativeHandle(t,e,n)};ue.useInsertionEffect=function(t,e){return St.current.useInsertionEffect(t,e)};ue.useLayoutEffect=function(t,e){return St.current.useLayoutEffect(t,e)};ue.useMemo=function(t,e){return St.current.useMemo(t,e)};ue.useReducer=function(t,e,n){return St.current.useReducer(t,e,n)};ue.useRef=function(t){return St.current.useRef(t)};ue.useState=function(t){return St.current.useState(t)};ue.useSyncExternalStore=function(t,e,n){return St.current.useSyncExternalStore(t,e,n)};ue.useTransition=function(){return St.current.useTransition()};ue.version="18.3.1";Zy.exports=ue;var V=Zy.exports;const XT=VT(V),ZT=LT({__proto__:null,default:XT},[V]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eI=V,tI=Symbol.for("react.element"),nI=Symbol.for("react.fragment"),rI=Object.prototype.hasOwnProperty,iI=eI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sI={key:!0,ref:!0,__self:!0,__source:!0};function lv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)rI.call(e,r)&&!sI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:tI,type:t,key:s,ref:o,props:i,_owner:iI.current}}lu.Fragment=nI;lu.jsx=lv;lu.jsxs=lv;Xy.exports=lu;var v=Xy.exports,uv={exports:{}},Ft={},cv={exports:{}},hv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(K,te){var ne=K.length;K.push(te);e:for(;0<ne;){var ve=ne-1>>>1,fe=K[ve];if(0<i(fe,te))K[ve]=te,K[ne]=fe,ne=ve;else break e}}function n(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var te=K[0],ne=K.pop();if(ne!==te){K[0]=ne;e:for(var ve=0,fe=K.length,De=fe>>>1;ve<De;){var Yt=2*(ve+1)-1,Jt=K[Yt],Xt=Yt+1,$t=K[Xt];if(0>i(Jt,ne))Xt<fe&&0>i($t,Jt)?(K[ve]=$t,K[Xt]=ne,ve=Xt):(K[ve]=Jt,K[Yt]=ne,ve=Yt);else if(Xt<fe&&0>i($t,ne))K[ve]=$t,K[Xt]=ne,ve=Xt;else break e}}return te}function i(K,te){var ne=K.sortIndex-te.sortIndex;return ne!==0?ne:K.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,p=null,g=3,I=!1,R=!1,P=!1,O=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(K){for(var te=n(c);te!==null;){if(te.callback===null)r(c);else if(te.startTime<=K)r(c),te.sortIndex=te.expirationTime,e(u,te);else break;te=n(c)}}function N(K){if(P=!1,A(K),!R)if(n(u)!==null)R=!0,Ie(M);else{var te=n(c);te!==null&&ke(N,te.startTime-K)}}function M(K,te){R=!1,P&&(P=!1,w(y),y=-1),I=!0;var ne=g;try{for(A(te),p=n(u);p!==null&&(!(p.expirationTime>te)||K&&!C());){var ve=p.callback;if(typeof ve=="function"){p.callback=null,g=p.priorityLevel;var fe=ve(p.expirationTime<=te);te=t.unstable_now(),typeof fe=="function"?p.callback=fe:p===n(u)&&r(u),A(te)}else r(u);p=n(u)}if(p!==null)var De=!0;else{var Yt=n(c);Yt!==null&&ke(N,Yt.startTime-te),De=!1}return De}finally{p=null,g=ne,I=!1}}var $=!1,E=null,y=-1,T=5,k=-1;function C(){return!(t.unstable_now()-k<T)}function x(){if(E!==null){var K=t.unstable_now();k=K;var te=!0;try{te=E(!0,K)}finally{te?S():($=!1,E=null)}}else $=!1}var S;if(typeof _=="function")S=function(){_(x)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,ce=Q.port2;Q.port1.onmessage=x,S=function(){ce.postMessage(null)}}else S=function(){O(x,0)};function Ie(K){E=K,$||($=!0,S())}function ke(K,te){y=O(function(){K(t.unstable_now())},te)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(K){K.callback=null},t.unstable_continueExecution=function(){R||I||(R=!0,Ie(M))},t.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<K?Math.floor(1e3/K):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(K){switch(g){case 1:case 2:case 3:var te=3;break;default:te=g}var ne=g;g=te;try{return K()}finally{g=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(K,te){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var ne=g;g=K;try{return te()}finally{g=ne}},t.unstable_scheduleCallback=function(K,te,ne){var ve=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?ve+ne:ve):ne=ve,K){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=ne+fe,K={id:f++,callback:te,priorityLevel:K,startTime:ne,expirationTime:fe,sortIndex:-1},ne>ve?(K.sortIndex=ne,e(c,K),n(u)===null&&K===n(c)&&(P?(w(y),y=-1):P=!0,ke(N,ne-ve))):(K.sortIndex=fe,e(u,K),R||I||(R=!0,Ie(M))),K},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(K){var te=g;return function(){var ne=g;g=te;try{return K.apply(this,arguments)}finally{g=ne}}}})(hv);cv.exports=hv;var oI=cv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aI=V,jt=oI;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dv=new Set,_o={};function di(t,e){Ji(t,e),Ji(t+"Capture",e)}function Ji(t,e){for(_o[t]=e,t=0;t<e.length;t++)dv.add(e[t])}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jc=Object.prototype.hasOwnProperty,lI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fm={},pm={};function uI(t){return Jc.call(pm,t)?!0:Jc.call(fm,t)?!1:lI.test(t)?pm[t]=!0:(fm[t]=!0,!1)}function cI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hI(t,e,n,r){if(e===null||typeof e>"u"||cI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function kt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ot[t]=new kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ot[e]=new kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ot[t]=new kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ot[t]=new kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ot[t]=new kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ot[t]=new kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ot[t]=new kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ot[t]=new kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ot[t]=new kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ed=/[\-:]([a-z])/g;function Td(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ed,Td);ot[e]=new kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ed,Td);ot[e]=new kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ed,Td);ot[e]=new kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ot[t]=new kt(t,1,!1,t.toLowerCase(),null,!1,!1)});ot.xlinkHref=new kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ot[t]=new kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Id(t,e,n,r){var i=ot.hasOwnProperty(e)?ot[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hI(e,n,i,r)&&(n=null),r||i===null?uI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Qn=aI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pa=Symbol.for("react.element"),Ri=Symbol.for("react.portal"),Pi=Symbol.for("react.fragment"),Sd=Symbol.for("react.strict_mode"),Xc=Symbol.for("react.profiler"),fv=Symbol.for("react.provider"),pv=Symbol.for("react.context"),kd=Symbol.for("react.forward_ref"),Zc=Symbol.for("react.suspense"),eh=Symbol.for("react.suspense_list"),Ad=Symbol.for("react.memo"),tr=Symbol.for("react.lazy"),mv=Symbol.for("react.offscreen"),mm=Symbol.iterator;function Vs(t){return t===null||typeof t!="object"?null:(t=mm&&t[mm]||t["@@iterator"],typeof t=="function"?t:null)}var Le=Object.assign,hc;function Hs(t){if(hc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);hc=e&&e[1]||""}return`
`+hc+t}var dc=!1;function fc(t,e){if(!t||dc)return"";dc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{dc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Hs(t):""}function dI(t){switch(t.tag){case 5:return Hs(t.type);case 16:return Hs("Lazy");case 13:return Hs("Suspense");case 19:return Hs("SuspenseList");case 0:case 2:case 15:return t=fc(t.type,!1),t;case 11:return t=fc(t.type.render,!1),t;case 1:return t=fc(t.type,!0),t;default:return""}}function th(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Pi:return"Fragment";case Ri:return"Portal";case Xc:return"Profiler";case Sd:return"StrictMode";case Zc:return"Suspense";case eh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case pv:return(t.displayName||"Context")+".Consumer";case fv:return(t._context.displayName||"Context")+".Provider";case kd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ad:return e=t.displayName||null,e!==null?e:th(t.type)||"Memo";case tr:e=t._payload,t=t._init;try{return th(t(e))}catch{}}return null}function fI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return th(e);case 8:return e===Sd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function kr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function pI(t){var e=gv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Na(t){t._valueTracker||(t._valueTracker=pI(t))}function yv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=gv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function vl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nh(t,e){var n=e.checked;return Le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function gm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=kr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vv(t,e){e=e.checked,e!=null&&Id(t,"checked",e,!1)}function rh(t,e){vv(t,e);var n=kr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ih(t,e.type,n):e.hasOwnProperty("defaultValue")&&ih(t,e.type,kr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ym(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ih(t,e,n){(e!=="number"||vl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var qs=Array.isArray;function $i(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+kr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function sh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function vm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(qs(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:kr(n)}}function _v(t,e){var n=kr(e.value),r=kr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function _m(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function wv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?wv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xa,Ev=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xa=xa||document.createElement("div"),xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function wo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var no={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mI=["Webkit","ms","Moz","O"];Object.keys(no).forEach(function(t){mI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),no[e]=no[t]})});function Tv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||no.hasOwnProperty(t)&&no[t]?(""+e).trim():e+"px"}function Iv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Tv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var gI=Le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ah(t,e){if(e){if(gI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function lh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uh=null;function Cd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ch=null,Bi=null,zi=null;function wm(t){if(t=Jo(t)){if(typeof ch!="function")throw Error(B(280));var e=t.stateNode;e&&(e=fu(e),ch(t.stateNode,t.type,e))}}function Sv(t){Bi?zi?zi.push(t):zi=[t]:Bi=t}function kv(){if(Bi){var t=Bi,e=zi;if(zi=Bi=null,wm(t),e)for(t=0;t<e.length;t++)wm(e[t])}}function Av(t,e){return t(e)}function Cv(){}var pc=!1;function Rv(t,e,n){if(pc)return t(e,n);pc=!0;try{return Av(t,e,n)}finally{pc=!1,(Bi!==null||zi!==null)&&(Cv(),kv())}}function Eo(t,e){var n=t.stateNode;if(n===null)return null;var r=fu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var hh=!1;if(Un)try{var Ms={};Object.defineProperty(Ms,"passive",{get:function(){hh=!0}}),window.addEventListener("test",Ms,Ms),window.removeEventListener("test",Ms,Ms)}catch{hh=!1}function yI(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var ro=!1,_l=null,wl=!1,dh=null,vI={onError:function(t){ro=!0,_l=t}};function _I(t,e,n,r,i,s,o,l,u){ro=!1,_l=null,yI.apply(vI,arguments)}function wI(t,e,n,r,i,s,o,l,u){if(_I.apply(this,arguments),ro){if(ro){var c=_l;ro=!1,_l=null}else throw Error(B(198));wl||(wl=!0,dh=c)}}function fi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Pv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Em(t){if(fi(t)!==t)throw Error(B(188))}function EI(t){var e=t.alternate;if(!e){if(e=fi(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Em(i),t;if(s===r)return Em(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function Nv(t){return t=EI(t),t!==null?xv(t):null}function xv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=xv(t);if(e!==null)return e;t=t.sibling}return null}var Dv=jt.unstable_scheduleCallback,Tm=jt.unstable_cancelCallback,TI=jt.unstable_shouldYield,II=jt.unstable_requestPaint,Be=jt.unstable_now,SI=jt.unstable_getCurrentPriorityLevel,Rd=jt.unstable_ImmediatePriority,Ov=jt.unstable_UserBlockingPriority,El=jt.unstable_NormalPriority,kI=jt.unstable_LowPriority,bv=jt.unstable_IdlePriority,uu=null,yn=null;function AI(t){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(uu,t,void 0,(t.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:PI,CI=Math.log,RI=Math.LN2;function PI(t){return t>>>=0,t===0?32:31-(CI(t)/RI|0)|0}var Da=64,Oa=4194304;function Ks(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Tl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ks(l):(s&=o,s!==0&&(r=Ks(s)))}else o=n&~i,o!==0?r=Ks(o):s!==0&&(r=Ks(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-on(e),i=1<<n,r|=t[n],e&=~i;return r}function NI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-on(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=NI(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function fh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Lv(){var t=Da;return Da<<=1,!(Da&4194240)&&(Da=64),t}function mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-on(e),t[e]=n}function DI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-on(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Pd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-on(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var _e=0;function Vv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Mv,Nd,jv,Fv,Uv,ph=!1,ba=[],fr=null,pr=null,mr=null,To=new Map,Io=new Map,rr=[],OI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Im(t,e){switch(t){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":To.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(e.pointerId)}}function js(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Jo(e),e!==null&&Nd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function bI(t,e,n,r,i){switch(e){case"focusin":return fr=js(fr,t,e,n,r,i),!0;case"dragenter":return pr=js(pr,t,e,n,r,i),!0;case"mouseover":return mr=js(mr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return To.set(s,js(To.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Io.set(s,js(Io.get(s)||null,t,e,n,r,i)),!0}return!1}function $v(t){var e=Hr(t.target);if(e!==null){var n=fi(e);if(n!==null){if(e=n.tag,e===13){if(e=Pv(n),e!==null){t.blockedOn=e,Uv(t.priority,function(){jv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Za(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=mh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);uh=r,n.target.dispatchEvent(r),uh=null}else return e=Jo(n),e!==null&&Nd(e),t.blockedOn=n,!1;e.shift()}return!0}function Sm(t,e,n){Za(t)&&n.delete(e)}function LI(){ph=!1,fr!==null&&Za(fr)&&(fr=null),pr!==null&&Za(pr)&&(pr=null),mr!==null&&Za(mr)&&(mr=null),To.forEach(Sm),Io.forEach(Sm)}function Fs(t,e){t.blockedOn===e&&(t.blockedOn=null,ph||(ph=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,LI)))}function So(t){function e(i){return Fs(i,t)}if(0<ba.length){Fs(ba[0],t);for(var n=1;n<ba.length;n++){var r=ba[n];r.blockedOn===t&&(r.blockedOn=null)}}for(fr!==null&&Fs(fr,t),pr!==null&&Fs(pr,t),mr!==null&&Fs(mr,t),To.forEach(e),Io.forEach(e),n=0;n<rr.length;n++)r=rr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<rr.length&&(n=rr[0],n.blockedOn===null);)$v(n),n.blockedOn===null&&rr.shift()}var Wi=Qn.ReactCurrentBatchConfig,Il=!0;function VI(t,e,n,r){var i=_e,s=Wi.transition;Wi.transition=null;try{_e=1,xd(t,e,n,r)}finally{_e=i,Wi.transition=s}}function MI(t,e,n,r){var i=_e,s=Wi.transition;Wi.transition=null;try{_e=4,xd(t,e,n,r)}finally{_e=i,Wi.transition=s}}function xd(t,e,n,r){if(Il){var i=mh(t,e,n,r);if(i===null)kc(t,e,r,Sl,n),Im(t,r);else if(bI(i,t,e,n,r))r.stopPropagation();else if(Im(t,r),e&4&&-1<OI.indexOf(t)){for(;i!==null;){var s=Jo(i);if(s!==null&&Mv(s),s=mh(t,e,n,r),s===null&&kc(t,e,r,Sl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else kc(t,e,r,null,n)}}var Sl=null;function mh(t,e,n,r){if(Sl=null,t=Cd(r),t=Hr(t),t!==null)if(e=fi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Pv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Sl=t,null}function Bv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(SI()){case Rd:return 1;case Ov:return 4;case El:case kI:return 16;case bv:return 536870912;default:return 16}default:return 16}}var ur=null,Dd=null,el=null;function zv(){if(el)return el;var t,e=Dd,n=e.length,r,i="value"in ur?ur.value:ur.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return el=i.slice(t,1<r?1-r:void 0)}function tl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function La(){return!0}function km(){return!1}function Ut(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?La:km,this.isPropagationStopped=km,this}return Le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=La)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=La)},persist:function(){},isPersistent:La}),e}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Od=Ut(ds),Yo=Le({},ds,{view:0,detail:0}),jI=Ut(Yo),gc,yc,Us,cu=Le({},Yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Us&&(Us&&t.type==="mousemove"?(gc=t.screenX-Us.screenX,yc=t.screenY-Us.screenY):yc=gc=0,Us=t),gc)},movementY:function(t){return"movementY"in t?t.movementY:yc}}),Am=Ut(cu),FI=Le({},cu,{dataTransfer:0}),UI=Ut(FI),$I=Le({},Yo,{relatedTarget:0}),vc=Ut($I),BI=Le({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),zI=Ut(BI),WI=Le({},ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),HI=Ut(WI),qI=Le({},ds,{data:0}),Cm=Ut(qI),KI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},QI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=QI[t])?!!e[t]:!1}function bd(){return YI}var JI=Le({},Yo,{key:function(t){if(t.key){var e=KI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?GI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bd,charCode:function(t){return t.type==="keypress"?tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),XI=Ut(JI),ZI=Le({},cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rm=Ut(ZI),e1=Le({},Yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bd}),t1=Ut(e1),n1=Le({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),r1=Ut(n1),i1=Le({},cu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),s1=Ut(i1),o1=[9,13,27,32],Ld=Un&&"CompositionEvent"in window,io=null;Un&&"documentMode"in document&&(io=document.documentMode);var a1=Un&&"TextEvent"in window&&!io,Wv=Un&&(!Ld||io&&8<io&&11>=io),Pm=String.fromCharCode(32),Nm=!1;function Hv(t,e){switch(t){case"keyup":return o1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ni=!1;function l1(t,e){switch(t){case"compositionend":return qv(e);case"keypress":return e.which!==32?null:(Nm=!0,Pm);case"textInput":return t=e.data,t===Pm&&Nm?null:t;default:return null}}function u1(t,e){if(Ni)return t==="compositionend"||!Ld&&Hv(t,e)?(t=zv(),el=Dd=ur=null,Ni=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Wv&&e.locale!=="ko"?null:e.data;default:return null}}var c1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!c1[t.type]:e==="textarea"}function Kv(t,e,n,r){Sv(r),e=kl(e,"onChange"),0<e.length&&(n=new Od("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var so=null,ko=null;function h1(t){i_(t,0)}function hu(t){var e=Oi(t);if(yv(e))return t}function d1(t,e){if(t==="change")return e}var Gv=!1;if(Un){var _c;if(Un){var wc="oninput"in document;if(!wc){var Dm=document.createElement("div");Dm.setAttribute("oninput","return;"),wc=typeof Dm.oninput=="function"}_c=wc}else _c=!1;Gv=_c&&(!document.documentMode||9<document.documentMode)}function Om(){so&&(so.detachEvent("onpropertychange",Qv),ko=so=null)}function Qv(t){if(t.propertyName==="value"&&hu(ko)){var e=[];Kv(e,ko,t,Cd(t)),Rv(h1,e)}}function f1(t,e,n){t==="focusin"?(Om(),so=e,ko=n,so.attachEvent("onpropertychange",Qv)):t==="focusout"&&Om()}function p1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hu(ko)}function m1(t,e){if(t==="click")return hu(e)}function g1(t,e){if(t==="input"||t==="change")return hu(e)}function y1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var un=typeof Object.is=="function"?Object.is:y1;function Ao(t,e){if(un(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Jc.call(e,i)||!un(t[i],e[i]))return!1}return!0}function bm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lm(t,e){var n=bm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bm(n)}}function Yv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Yv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Jv(){for(var t=window,e=vl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vl(t.document)}return e}function Vd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function v1(t){var e=Jv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Yv(n.ownerDocument.documentElement,n)){if(r!==null&&Vd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Lm(n,s);var o=Lm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _1=Un&&"documentMode"in document&&11>=document.documentMode,xi=null,gh=null,oo=null,yh=!1;function Vm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yh||xi==null||xi!==vl(r)||(r=xi,"selectionStart"in r&&Vd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),oo&&Ao(oo,r)||(oo=r,r=kl(gh,"onSelect"),0<r.length&&(e=new Od("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=xi)))}function Va(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Di={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionend:Va("Transition","TransitionEnd")},Ec={},Xv={};Un&&(Xv=document.createElement("div").style,"AnimationEvent"in window||(delete Di.animationend.animation,delete Di.animationiteration.animation,delete Di.animationstart.animation),"TransitionEvent"in window||delete Di.transitionend.transition);function du(t){if(Ec[t])return Ec[t];if(!Di[t])return t;var e=Di[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Xv)return Ec[t]=e[n];return t}var Zv=du("animationend"),e_=du("animationiteration"),t_=du("animationstart"),n_=du("transitionend"),r_=new Map,Mm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(t,e){r_.set(t,e),di(e,[t])}for(var Tc=0;Tc<Mm.length;Tc++){var Ic=Mm[Tc],w1=Ic.toLowerCase(),E1=Ic[0].toUpperCase()+Ic.slice(1);Nr(w1,"on"+E1)}Nr(Zv,"onAnimationEnd");Nr(e_,"onAnimationIteration");Nr(t_,"onAnimationStart");Nr("dblclick","onDoubleClick");Nr("focusin","onFocus");Nr("focusout","onBlur");Nr(n_,"onTransitionEnd");Ji("onMouseEnter",["mouseout","mouseover"]);Ji("onMouseLeave",["mouseout","mouseover"]);Ji("onPointerEnter",["pointerout","pointerover"]);Ji("onPointerLeave",["pointerout","pointerover"]);di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));di("onBeforeInput",["compositionend","keypress","textInput","paste"]);di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),T1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gs));function jm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,wI(r,e,void 0,t),t.currentTarget=null}function i_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;jm(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;jm(i,l,c),s=u}}}if(wl)throw t=dh,wl=!1,dh=null,t}function Re(t,e){var n=e[Th];n===void 0&&(n=e[Th]=new Set);var r=t+"__bubble";n.has(r)||(s_(e,t,2,!1),n.add(r))}function Sc(t,e,n){var r=0;e&&(r|=4),s_(n,t,r,e)}var Ma="_reactListening"+Math.random().toString(36).slice(2);function Co(t){if(!t[Ma]){t[Ma]=!0,dv.forEach(function(n){n!=="selectionchange"&&(T1.has(n)||Sc(n,!1,t),Sc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ma]||(e[Ma]=!0,Sc("selectionchange",!1,e))}}function s_(t,e,n,r){switch(Bv(e)){case 1:var i=VI;break;case 4:i=MI;break;default:i=xd}n=i.bind(null,e,n,t),i=void 0,!hh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function kc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Hr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Rv(function(){var c=s,f=Cd(n),p=[];e:{var g=r_.get(t);if(g!==void 0){var I=Od,R=t;switch(t){case"keypress":if(tl(n)===0)break e;case"keydown":case"keyup":I=XI;break;case"focusin":R="focus",I=vc;break;case"focusout":R="blur",I=vc;break;case"beforeblur":case"afterblur":I=vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Am;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=UI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=t1;break;case Zv:case e_:case t_:I=zI;break;case n_:I=r1;break;case"scroll":I=jI;break;case"wheel":I=s1;break;case"copy":case"cut":case"paste":I=HI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Rm}var P=(e&4)!==0,O=!P&&t==="scroll",w=P?g!==null?g+"Capture":null:g;P=[];for(var _=c,A;_!==null;){A=_;var N=A.stateNode;if(A.tag===5&&N!==null&&(A=N,w!==null&&(N=Eo(_,w),N!=null&&P.push(Ro(_,N,A)))),O)break;_=_.return}0<P.length&&(g=new I(g,R,null,n,f),p.push({event:g,listeners:P}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",g&&n!==uh&&(R=n.relatedTarget||n.fromElement)&&(Hr(R)||R[$n]))break e;if((I||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,I?(R=n.relatedTarget||n.toElement,I=c,R=R?Hr(R):null,R!==null&&(O=fi(R),R!==O||R.tag!==5&&R.tag!==6)&&(R=null)):(I=null,R=c),I!==R)){if(P=Am,N="onMouseLeave",w="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(P=Rm,N="onPointerLeave",w="onPointerEnter",_="pointer"),O=I==null?g:Oi(I),A=R==null?g:Oi(R),g=new P(N,_+"leave",I,n,f),g.target=O,g.relatedTarget=A,N=null,Hr(f)===c&&(P=new P(w,_+"enter",R,n,f),P.target=A,P.relatedTarget=O,N=P),O=N,I&&R)t:{for(P=I,w=R,_=0,A=P;A;A=Si(A))_++;for(A=0,N=w;N;N=Si(N))A++;for(;0<_-A;)P=Si(P),_--;for(;0<A-_;)w=Si(w),A--;for(;_--;){if(P===w||w!==null&&P===w.alternate)break t;P=Si(P),w=Si(w)}P=null}else P=null;I!==null&&Fm(p,g,I,P,!1),R!==null&&O!==null&&Fm(p,O,R,P,!0)}}e:{if(g=c?Oi(c):window,I=g.nodeName&&g.nodeName.toLowerCase(),I==="select"||I==="input"&&g.type==="file")var M=d1;else if(xm(g))if(Gv)M=g1;else{M=p1;var $=f1}else(I=g.nodeName)&&I.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(M=m1);if(M&&(M=M(t,c))){Kv(p,M,n,f);break e}$&&$(t,g,c),t==="focusout"&&($=g._wrapperState)&&$.controlled&&g.type==="number"&&ih(g,"number",g.value)}switch($=c?Oi(c):window,t){case"focusin":(xm($)||$.contentEditable==="true")&&(xi=$,gh=c,oo=null);break;case"focusout":oo=gh=xi=null;break;case"mousedown":yh=!0;break;case"contextmenu":case"mouseup":case"dragend":yh=!1,Vm(p,n,f);break;case"selectionchange":if(_1)break;case"keydown":case"keyup":Vm(p,n,f)}var E;if(Ld)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ni?Hv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Wv&&n.locale!=="ko"&&(Ni||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ni&&(E=zv()):(ur=f,Dd="value"in ur?ur.value:ur.textContent,Ni=!0)),$=kl(c,y),0<$.length&&(y=new Cm(y,t,null,n,f),p.push({event:y,listeners:$}),E?y.data=E:(E=qv(n),E!==null&&(y.data=E)))),(E=a1?l1(t,n):u1(t,n))&&(c=kl(c,"onBeforeInput"),0<c.length&&(f=new Cm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=E))}i_(p,e)})}function Ro(t,e,n){return{instance:t,listener:e,currentTarget:n}}function kl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Eo(t,n),s!=null&&r.unshift(Ro(t,s,i)),s=Eo(t,e),s!=null&&r.push(Ro(t,s,i))),t=t.return}return r}function Si(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Eo(n,s),u!=null&&o.unshift(Ro(n,u,l))):i||(u=Eo(n,s),u!=null&&o.push(Ro(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var I1=/\r\n?/g,S1=/\u0000|\uFFFD/g;function Um(t){return(typeof t=="string"?t:""+t).replace(I1,`
`).replace(S1,"")}function ja(t,e,n){if(e=Um(e),Um(t)!==e&&n)throw Error(B(425))}function Al(){}var vh=null,_h=null;function wh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Eh=typeof setTimeout=="function"?setTimeout:void 0,k1=typeof clearTimeout=="function"?clearTimeout:void 0,$m=typeof Promise=="function"?Promise:void 0,A1=typeof queueMicrotask=="function"?queueMicrotask:typeof $m<"u"?function(t){return $m.resolve(null).then(t).catch(C1)}:Eh;function C1(t){setTimeout(function(){throw t})}function Ac(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),So(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);So(e)}function gr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Bm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fs=Math.random().toString(36).slice(2),mn="__reactFiber$"+fs,Po="__reactProps$"+fs,$n="__reactContainer$"+fs,Th="__reactEvents$"+fs,R1="__reactListeners$"+fs,P1="__reactHandles$"+fs;function Hr(t){var e=t[mn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$n]||n[mn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Bm(t);t!==null;){if(n=t[mn])return n;t=Bm(t)}return e}t=n,n=t.parentNode}return null}function Jo(t){return t=t[mn]||t[$n],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Oi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function fu(t){return t[Po]||null}var Ih=[],bi=-1;function xr(t){return{current:t}}function Pe(t){0>bi||(t.current=Ih[bi],Ih[bi]=null,bi--)}function Se(t,e){bi++,Ih[bi]=t.current,t.current=e}var Ar={},yt=xr(Ar),Rt=xr(!1),Zr=Ar;function Xi(t,e){var n=t.type.contextTypes;if(!n)return Ar;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Pt(t){return t=t.childContextTypes,t!=null}function Cl(){Pe(Rt),Pe(yt)}function zm(t,e,n){if(yt.current!==Ar)throw Error(B(168));Se(yt,e),Se(Rt,n)}function o_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,fI(t)||"Unknown",i));return Le({},n,r)}function Rl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ar,Zr=yt.current,Se(yt,t),Se(Rt,Rt.current),!0}function Wm(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=o_(t,e,Zr),r.__reactInternalMemoizedMergedChildContext=t,Pe(Rt),Pe(yt),Se(yt,t)):Pe(Rt),Se(Rt,n)}var xn=null,pu=!1,Cc=!1;function a_(t){xn===null?xn=[t]:xn.push(t)}function N1(t){pu=!0,a_(t)}function Dr(){if(!Cc&&xn!==null){Cc=!0;var t=0,e=_e;try{var n=xn;for(_e=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}xn=null,pu=!1}catch(i){throw xn!==null&&(xn=xn.slice(t+1)),Dv(Rd,Dr),i}finally{_e=e,Cc=!1}}return null}var Li=[],Vi=0,Pl=null,Nl=0,Bt=[],zt=0,ei=null,Dn=1,On="";function Br(t,e){Li[Vi++]=Nl,Li[Vi++]=Pl,Pl=t,Nl=e}function l_(t,e,n){Bt[zt++]=Dn,Bt[zt++]=On,Bt[zt++]=ei,ei=t;var r=Dn;t=On;var i=32-on(r)-1;r&=~(1<<i),n+=1;var s=32-on(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Dn=1<<32-on(e)+i|n<<i|r,On=s+t}else Dn=1<<s|n<<i|r,On=t}function Md(t){t.return!==null&&(Br(t,1),l_(t,1,0))}function jd(t){for(;t===Pl;)Pl=Li[--Vi],Li[Vi]=null,Nl=Li[--Vi],Li[Vi]=null;for(;t===ei;)ei=Bt[--zt],Bt[zt]=null,On=Bt[--zt],Bt[zt]=null,Dn=Bt[--zt],Bt[zt]=null}var Lt=null,bt=null,Ne=!1,rn=null;function u_(t,e){var n=Ht(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Hm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Lt=t,bt=gr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Lt=t,bt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ei!==null?{id:Dn,overflow:On}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ht(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Lt=t,bt=null,!0):!1;default:return!1}}function Sh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function kh(t){if(Ne){var e=bt;if(e){var n=e;if(!Hm(t,e)){if(Sh(t))throw Error(B(418));e=gr(n.nextSibling);var r=Lt;e&&Hm(t,e)?u_(r,n):(t.flags=t.flags&-4097|2,Ne=!1,Lt=t)}}else{if(Sh(t))throw Error(B(418));t.flags=t.flags&-4097|2,Ne=!1,Lt=t}}}function qm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Lt=t}function Fa(t){if(t!==Lt)return!1;if(!Ne)return qm(t),Ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!wh(t.type,t.memoizedProps)),e&&(e=bt)){if(Sh(t))throw c_(),Error(B(418));for(;e;)u_(t,e),e=gr(e.nextSibling)}if(qm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){bt=gr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}bt=null}}else bt=Lt?gr(t.stateNode.nextSibling):null;return!0}function c_(){for(var t=bt;t;)t=gr(t.nextSibling)}function Zi(){bt=Lt=null,Ne=!1}function Fd(t){rn===null?rn=[t]:rn.push(t)}var x1=Qn.ReactCurrentBatchConfig;function $s(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function Ua(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Km(t){var e=t._init;return e(t._payload)}function h_(t){function e(w,_){if(t){var A=w.deletions;A===null?(w.deletions=[_],w.flags|=16):A.push(_)}}function n(w,_){if(!t)return null;for(;_!==null;)e(w,_),_=_.sibling;return null}function r(w,_){for(w=new Map;_!==null;)_.key!==null?w.set(_.key,_):w.set(_.index,_),_=_.sibling;return w}function i(w,_){return w=wr(w,_),w.index=0,w.sibling=null,w}function s(w,_,A){return w.index=A,t?(A=w.alternate,A!==null?(A=A.index,A<_?(w.flags|=2,_):A):(w.flags|=2,_)):(w.flags|=1048576,_)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,_,A,N){return _===null||_.tag!==6?(_=bc(A,w.mode,N),_.return=w,_):(_=i(_,A),_.return=w,_)}function u(w,_,A,N){var M=A.type;return M===Pi?f(w,_,A.props.children,N,A.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===tr&&Km(M)===_.type)?(N=i(_,A.props),N.ref=$s(w,_,A),N.return=w,N):(N=ll(A.type,A.key,A.props,null,w.mode,N),N.ref=$s(w,_,A),N.return=w,N)}function c(w,_,A,N){return _===null||_.tag!==4||_.stateNode.containerInfo!==A.containerInfo||_.stateNode.implementation!==A.implementation?(_=Lc(A,w.mode,N),_.return=w,_):(_=i(_,A.children||[]),_.return=w,_)}function f(w,_,A,N,M){return _===null||_.tag!==7?(_=Jr(A,w.mode,N,M),_.return=w,_):(_=i(_,A),_.return=w,_)}function p(w,_,A){if(typeof _=="string"&&_!==""||typeof _=="number")return _=bc(""+_,w.mode,A),_.return=w,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Pa:return A=ll(_.type,_.key,_.props,null,w.mode,A),A.ref=$s(w,null,_),A.return=w,A;case Ri:return _=Lc(_,w.mode,A),_.return=w,_;case tr:var N=_._init;return p(w,N(_._payload),A)}if(qs(_)||Vs(_))return _=Jr(_,w.mode,A,null),_.return=w,_;Ua(w,_)}return null}function g(w,_,A,N){var M=_!==null?_.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return M!==null?null:l(w,_,""+A,N);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Pa:return A.key===M?u(w,_,A,N):null;case Ri:return A.key===M?c(w,_,A,N):null;case tr:return M=A._init,g(w,_,M(A._payload),N)}if(qs(A)||Vs(A))return M!==null?null:f(w,_,A,N,null);Ua(w,A)}return null}function I(w,_,A,N,M){if(typeof N=="string"&&N!==""||typeof N=="number")return w=w.get(A)||null,l(_,w,""+N,M);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Pa:return w=w.get(N.key===null?A:N.key)||null,u(_,w,N,M);case Ri:return w=w.get(N.key===null?A:N.key)||null,c(_,w,N,M);case tr:var $=N._init;return I(w,_,A,$(N._payload),M)}if(qs(N)||Vs(N))return w=w.get(A)||null,f(_,w,N,M,null);Ua(_,N)}return null}function R(w,_,A,N){for(var M=null,$=null,E=_,y=_=0,T=null;E!==null&&y<A.length;y++){E.index>y?(T=E,E=null):T=E.sibling;var k=g(w,E,A[y],N);if(k===null){E===null&&(E=T);break}t&&E&&k.alternate===null&&e(w,E),_=s(k,_,y),$===null?M=k:$.sibling=k,$=k,E=T}if(y===A.length)return n(w,E),Ne&&Br(w,y),M;if(E===null){for(;y<A.length;y++)E=p(w,A[y],N),E!==null&&(_=s(E,_,y),$===null?M=E:$.sibling=E,$=E);return Ne&&Br(w,y),M}for(E=r(w,E);y<A.length;y++)T=I(E,w,y,A[y],N),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?y:T.key),_=s(T,_,y),$===null?M=T:$.sibling=T,$=T);return t&&E.forEach(function(C){return e(w,C)}),Ne&&Br(w,y),M}function P(w,_,A,N){var M=Vs(A);if(typeof M!="function")throw Error(B(150));if(A=M.call(A),A==null)throw Error(B(151));for(var $=M=null,E=_,y=_=0,T=null,k=A.next();E!==null&&!k.done;y++,k=A.next()){E.index>y?(T=E,E=null):T=E.sibling;var C=g(w,E,k.value,N);if(C===null){E===null&&(E=T);break}t&&E&&C.alternate===null&&e(w,E),_=s(C,_,y),$===null?M=C:$.sibling=C,$=C,E=T}if(k.done)return n(w,E),Ne&&Br(w,y),M;if(E===null){for(;!k.done;y++,k=A.next())k=p(w,k.value,N),k!==null&&(_=s(k,_,y),$===null?M=k:$.sibling=k,$=k);return Ne&&Br(w,y),M}for(E=r(w,E);!k.done;y++,k=A.next())k=I(E,w,y,k.value,N),k!==null&&(t&&k.alternate!==null&&E.delete(k.key===null?y:k.key),_=s(k,_,y),$===null?M=k:$.sibling=k,$=k);return t&&E.forEach(function(x){return e(w,x)}),Ne&&Br(w,y),M}function O(w,_,A,N){if(typeof A=="object"&&A!==null&&A.type===Pi&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Pa:e:{for(var M=A.key,$=_;$!==null;){if($.key===M){if(M=A.type,M===Pi){if($.tag===7){n(w,$.sibling),_=i($,A.props.children),_.return=w,w=_;break e}}else if($.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===tr&&Km(M)===$.type){n(w,$.sibling),_=i($,A.props),_.ref=$s(w,$,A),_.return=w,w=_;break e}n(w,$);break}else e(w,$);$=$.sibling}A.type===Pi?(_=Jr(A.props.children,w.mode,N,A.key),_.return=w,w=_):(N=ll(A.type,A.key,A.props,null,w.mode,N),N.ref=$s(w,_,A),N.return=w,w=N)}return o(w);case Ri:e:{for($=A.key;_!==null;){if(_.key===$)if(_.tag===4&&_.stateNode.containerInfo===A.containerInfo&&_.stateNode.implementation===A.implementation){n(w,_.sibling),_=i(_,A.children||[]),_.return=w,w=_;break e}else{n(w,_);break}else e(w,_);_=_.sibling}_=Lc(A,w.mode,N),_.return=w,w=_}return o(w);case tr:return $=A._init,O(w,_,$(A._payload),N)}if(qs(A))return R(w,_,A,N);if(Vs(A))return P(w,_,A,N);Ua(w,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,_!==null&&_.tag===6?(n(w,_.sibling),_=i(_,A),_.return=w,w=_):(n(w,_),_=bc(A,w.mode,N),_.return=w,w=_),o(w)):n(w,_)}return O}var es=h_(!0),d_=h_(!1),xl=xr(null),Dl=null,Mi=null,Ud=null;function $d(){Ud=Mi=Dl=null}function Bd(t){var e=xl.current;Pe(xl),t._currentValue=e}function Ah(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Hi(t,e){Dl=t,Ud=Mi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ct=!0),t.firstContext=null)}function Gt(t){var e=t._currentValue;if(Ud!==t)if(t={context:t,memoizedValue:e,next:null},Mi===null){if(Dl===null)throw Error(B(308));Mi=t,Dl.dependencies={lanes:0,firstContext:t}}else Mi=Mi.next=t;return e}var qr=null;function zd(t){qr===null?qr=[t]:qr.push(t)}function f_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,zd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Bn(t,r)}function Bn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var nr=!1;function Wd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function p_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function yr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,me&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Bn(t,n)}return i=r.interleaved,i===null?(e.next=e,zd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Bn(t,n)}function nl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pd(t,n)}}function Gm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ol(t,e,n,r){var i=t.updateQueue;nr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=c=u=null,l=s;do{var g=l.lane,I=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,P=l;switch(g=e,I=n,P.tag){case 1:if(R=P.payload,typeof R=="function"){p=R.call(I,p,g);break e}p=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=P.payload,g=typeof R=="function"?R.call(I,p,g):R,g==null)break e;p=Le({},p,g);break e;case 2:nr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else I={eventTime:I,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=I,u=p):f=f.next=I,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ni|=o,t.lanes=o,t.memoizedState=p}}function Qm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var Xo={},vn=xr(Xo),No=xr(Xo),xo=xr(Xo);function Kr(t){if(t===Xo)throw Error(B(174));return t}function Hd(t,e){switch(Se(xo,e),Se(No,t),Se(vn,Xo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:oh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=oh(e,t)}Pe(vn),Se(vn,e)}function ts(){Pe(vn),Pe(No),Pe(xo)}function m_(t){Kr(xo.current);var e=Kr(vn.current),n=oh(e,t.type);e!==n&&(Se(No,t),Se(vn,n))}function qd(t){No.current===t&&(Pe(vn),Pe(No))}var Oe=xr(0);function bl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Rc=[];function Kd(){for(var t=0;t<Rc.length;t++)Rc[t]._workInProgressVersionPrimary=null;Rc.length=0}var rl=Qn.ReactCurrentDispatcher,Pc=Qn.ReactCurrentBatchConfig,ti=0,be=null,qe=null,Je=null,Ll=!1,ao=!1,Do=0,D1=0;function ht(){throw Error(B(321))}function Gd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!un(t[n],e[n]))return!1;return!0}function Qd(t,e,n,r,i,s){if(ti=s,be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,rl.current=t===null||t.memoizedState===null?V1:M1,t=n(r,i),ao){s=0;do{if(ao=!1,Do=0,25<=s)throw Error(B(301));s+=1,Je=qe=null,e.updateQueue=null,rl.current=j1,t=n(r,i)}while(ao)}if(rl.current=Vl,e=qe!==null&&qe.next!==null,ti=0,Je=qe=be=null,Ll=!1,e)throw Error(B(300));return t}function Yd(){var t=Do!==0;return Do=0,t}function pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?be.memoizedState=Je=t:Je=Je.next=t,Je}function Qt(){if(qe===null){var t=be.alternate;t=t!==null?t.memoizedState:null}else t=qe.next;var e=Je===null?be.memoizedState:Je.next;if(e!==null)Je=e,qe=t;else{if(t===null)throw Error(B(310));qe=t,t={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},Je===null?be.memoizedState=Je=t:Je=Je.next=t}return Je}function Oo(t,e){return typeof e=="function"?e(t):e}function Nc(t){var e=Qt(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=qe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((ti&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,be.lanes|=f,ni|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,un(r,e.memoizedState)||(Ct=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,be.lanes|=s,ni|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function xc(t){var e=Qt(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);un(s,e.memoizedState)||(Ct=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function g_(){}function y_(t,e){var n=be,r=Qt(),i=e(),s=!un(r.memoizedState,i);if(s&&(r.memoizedState=i,Ct=!0),r=r.queue,Jd(w_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Je!==null&&Je.memoizedState.tag&1){if(n.flags|=2048,bo(9,__.bind(null,n,r,i,e),void 0,null),Xe===null)throw Error(B(349));ti&30||v_(n,e,i)}return i}function v_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function __(t,e,n,r){e.value=n,e.getSnapshot=r,E_(e)&&T_(t)}function w_(t,e,n){return n(function(){E_(e)&&T_(t)})}function E_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!un(t,n)}catch{return!0}}function T_(t){var e=Bn(t,1);e!==null&&an(e,t,1,-1)}function Ym(t){var e=pn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:t},e.queue=t,t=t.dispatch=L1.bind(null,be,t),[e.memoizedState,t]}function bo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function I_(){return Qt().memoizedState}function il(t,e,n,r){var i=pn();be.flags|=t,i.memoizedState=bo(1|e,n,void 0,r===void 0?null:r)}function mu(t,e,n,r){var i=Qt();r=r===void 0?null:r;var s=void 0;if(qe!==null){var o=qe.memoizedState;if(s=o.destroy,r!==null&&Gd(r,o.deps)){i.memoizedState=bo(e,n,s,r);return}}be.flags|=t,i.memoizedState=bo(1|e,n,s,r)}function Jm(t,e){return il(8390656,8,t,e)}function Jd(t,e){return mu(2048,8,t,e)}function S_(t,e){return mu(4,2,t,e)}function k_(t,e){return mu(4,4,t,e)}function A_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function C_(t,e,n){return n=n!=null?n.concat([t]):null,mu(4,4,A_.bind(null,e,t),n)}function Xd(){}function R_(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function P_(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function N_(t,e,n){return ti&21?(un(n,e)||(n=Lv(),be.lanes|=n,ni|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ct=!0),t.memoizedState=n)}function O1(t,e){var n=_e;_e=n!==0&&4>n?n:4,t(!0);var r=Pc.transition;Pc.transition={};try{t(!1),e()}finally{_e=n,Pc.transition=r}}function x_(){return Qt().memoizedState}function b1(t,e,n){var r=_r(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},D_(t))O_(e,n);else if(n=f_(t,e,n,r),n!==null){var i=It();an(n,t,r,i),b_(n,e,r)}}function L1(t,e,n){var r=_r(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(D_(t))O_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,un(l,o)){var u=e.interleaved;u===null?(i.next=i,zd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=f_(t,e,i,r),n!==null&&(i=It(),an(n,t,r,i),b_(n,e,r))}}function D_(t){var e=t.alternate;return t===be||e!==null&&e===be}function O_(t,e){ao=Ll=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function b_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pd(t,n)}}var Vl={readContext:Gt,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useInsertionEffect:ht,useLayoutEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useMutableSource:ht,useSyncExternalStore:ht,useId:ht,unstable_isNewReconciler:!1},V1={readContext:Gt,useCallback:function(t,e){return pn().memoizedState=[t,e===void 0?null:e],t},useContext:Gt,useEffect:Jm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,il(4194308,4,A_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return il(4194308,4,t,e)},useInsertionEffect:function(t,e){return il(4,2,t,e)},useMemo:function(t,e){var n=pn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=pn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=b1.bind(null,be,t),[r.memoizedState,t]},useRef:function(t){var e=pn();return t={current:t},e.memoizedState=t},useState:Ym,useDebugValue:Xd,useDeferredValue:function(t){return pn().memoizedState=t},useTransition:function(){var t=Ym(!1),e=t[0];return t=O1.bind(null,t[1]),pn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=be,i=pn();if(Ne){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),Xe===null)throw Error(B(349));ti&30||v_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Jm(w_.bind(null,r,s,t),[t]),r.flags|=2048,bo(9,__.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=pn(),e=Xe.identifierPrefix;if(Ne){var n=On,r=Dn;n=(r&~(1<<32-on(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Do++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=D1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},M1={readContext:Gt,useCallback:R_,useContext:Gt,useEffect:Jd,useImperativeHandle:C_,useInsertionEffect:S_,useLayoutEffect:k_,useMemo:P_,useReducer:Nc,useRef:I_,useState:function(){return Nc(Oo)},useDebugValue:Xd,useDeferredValue:function(t){var e=Qt();return N_(e,qe.memoizedState,t)},useTransition:function(){var t=Nc(Oo)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:g_,useSyncExternalStore:y_,useId:x_,unstable_isNewReconciler:!1},j1={readContext:Gt,useCallback:R_,useContext:Gt,useEffect:Jd,useImperativeHandle:C_,useInsertionEffect:S_,useLayoutEffect:k_,useMemo:P_,useReducer:xc,useRef:I_,useState:function(){return xc(Oo)},useDebugValue:Xd,useDeferredValue:function(t){var e=Qt();return qe===null?e.memoizedState=t:N_(e,qe.memoizedState,t)},useTransition:function(){var t=xc(Oo)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:g_,useSyncExternalStore:y_,useId:x_,unstable_isNewReconciler:!1};function tn(t,e){if(t&&t.defaultProps){e=Le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ch(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var gu={isMounted:function(t){return(t=t._reactInternals)?fi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=It(),i=_r(t),s=Mn(r,i);s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,i),e!==null&&(an(e,t,i,r),nl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=It(),i=_r(t),s=Mn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,i),e!==null&&(an(e,t,i,r),nl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=It(),r=_r(t),i=Mn(n,r);i.tag=2,e!=null&&(i.callback=e),e=yr(t,i,r),e!==null&&(an(e,t,r,n),nl(e,t,r))}};function Xm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ao(n,r)||!Ao(i,s):!0}function L_(t,e,n){var r=!1,i=Ar,s=e.contextType;return typeof s=="object"&&s!==null?s=Gt(s):(i=Pt(e)?Zr:yt.current,r=e.contextTypes,s=(r=r!=null)?Xi(t,i):Ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Zm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&gu.enqueueReplaceState(e,e.state,null)}function Rh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Wd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Gt(s):(s=Pt(e)?Zr:yt.current,i.context=Xi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ch(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&gu.enqueueReplaceState(i,i.state,null),Ol(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ns(t,e){try{var n="",r=e;do n+=dI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Dc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ph(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var F1=typeof WeakMap=="function"?WeakMap:Map;function V_(t,e,n){n=Mn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){jl||(jl=!0,Fh=r),Ph(t,e)},n}function M_(t,e,n){n=Mn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ph(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ph(t,e),typeof r!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function eg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new F1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Z1.bind(null,t,e,n),e.then(t,t))}function tg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ng(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Mn(-1,1),e.tag=2,yr(n,e,1))),n.lanes|=1),t)}var U1=Qn.ReactCurrentOwner,Ct=!1;function Tt(t,e,n,r){e.child=t===null?d_(e,null,n,r):es(e,t.child,n,r)}function rg(t,e,n,r,i){n=n.render;var s=e.ref;return Hi(e,i),r=Qd(t,e,n,r,s,i),n=Yd(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zn(t,e,i)):(Ne&&n&&Md(e),e.flags|=1,Tt(t,e,r,i),e.child)}function ig(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!af(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,j_(t,e,s,r,i)):(t=ll(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ao,n(o,r)&&t.ref===e.ref)return zn(t,e,i)}return e.flags|=1,t=wr(s,r),t.ref=e.ref,t.return=e,e.child=t}function j_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ao(s,r)&&t.ref===e.ref)if(Ct=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ct=!0);else return e.lanes=t.lanes,zn(t,e,i)}return Nh(t,e,n,r,i)}function F_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(Fi,Ot),Ot|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Se(Fi,Ot),Ot|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Se(Fi,Ot),Ot|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Se(Fi,Ot),Ot|=r;return Tt(t,e,i,n),e.child}function U_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Nh(t,e,n,r,i){var s=Pt(n)?Zr:yt.current;return s=Xi(e,s),Hi(e,i),n=Qd(t,e,n,r,s,i),r=Yd(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zn(t,e,i)):(Ne&&r&&Md(e),e.flags|=1,Tt(t,e,n,i),e.child)}function sg(t,e,n,r,i){if(Pt(n)){var s=!0;Rl(e)}else s=!1;if(Hi(e,i),e.stateNode===null)sl(t,e),L_(e,n,r),Rh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Gt(c):(c=Pt(n)?Zr:yt.current,c=Xi(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Zm(e,o,r,c),nr=!1;var g=e.memoizedState;o.state=g,Ol(e,r,o,i),u=e.memoizedState,l!==r||g!==u||Rt.current||nr?(typeof f=="function"&&(Ch(e,n,f,r),u=e.memoizedState),(l=nr||Xm(e,n,l,r,g,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,p_(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:tn(e.type,l),o.props=c,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Gt(u):(u=Pt(n)?Zr:yt.current,u=Xi(e,u));var I=n.getDerivedStateFromProps;(f=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&Zm(e,o,r,u),nr=!1,g=e.memoizedState,o.state=g,Ol(e,r,o,i);var R=e.memoizedState;l!==p||g!==R||Rt.current||nr?(typeof I=="function"&&(Ch(e,n,I,r),R=e.memoizedState),(c=nr||Xm(e,n,c,r,g,R,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return xh(t,e,n,r,s,i)}function xh(t,e,n,r,i,s){U_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Wm(e,n,!1),zn(t,e,s);r=e.stateNode,U1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=es(e,t.child,null,s),e.child=es(e,null,l,s)):Tt(t,e,l,s),e.memoizedState=r.state,i&&Wm(e,n,!0),e.child}function $_(t){var e=t.stateNode;e.pendingContext?zm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zm(t,e.context,!1),Hd(t,e.containerInfo)}function og(t,e,n,r,i){return Zi(),Fd(i),e.flags|=256,Tt(t,e,n,r),e.child}var Dh={dehydrated:null,treeContext:null,retryLane:0};function Oh(t){return{baseLanes:t,cachePool:null,transitions:null}}function B_(t,e,n){var r=e.pendingProps,i=Oe.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Se(Oe,i&1),t===null)return kh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=_u(o,r,0,null),t=Jr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Oh(n),e.memoizedState=Dh,t):Zd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return $1(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=wr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=wr(l,s):(s=Jr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Oh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Dh,r}return s=t.child,t=s.sibling,r=wr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Zd(t,e){return e=_u({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function $a(t,e,n,r){return r!==null&&Fd(r),es(e,t.child,null,n),t=Zd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Dc(Error(B(422))),$a(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=_u({mode:"visible",children:r.children},i,0,null),s=Jr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&es(e,t.child,null,o),e.child.memoizedState=Oh(o),e.memoizedState=Dh,s);if(!(e.mode&1))return $a(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(B(419)),r=Dc(s,r,void 0),$a(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ct||l){if(r=Xe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Bn(t,i),an(r,t,i,-1))}return of(),r=Dc(Error(B(421))),$a(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=eS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,bt=gr(i.nextSibling),Lt=e,Ne=!0,rn=null,t!==null&&(Bt[zt++]=Dn,Bt[zt++]=On,Bt[zt++]=ei,Dn=t.id,On=t.overflow,ei=e),e=Zd(e,r.children),e.flags|=4096,e)}function ag(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ah(t.return,e,n)}function Oc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function z_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Tt(t,e,r.children,n),r=Oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ag(t,n,e);else if(t.tag===19)ag(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Se(Oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&bl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Oc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&bl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Oc(e,!0,n,null,s);break;case"together":Oc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function sl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function zn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ni|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function B1(t,e,n){switch(e.tag){case 3:$_(e),Zi();break;case 5:m_(e);break;case 1:Pt(e.type)&&Rl(e);break;case 4:Hd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Se(xl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Se(Oe,Oe.current&1),e.flags|=128,null):n&e.child.childLanes?B_(t,e,n):(Se(Oe,Oe.current&1),t=zn(t,e,n),t!==null?t.sibling:null);Se(Oe,Oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return z_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Se(Oe,Oe.current),r)break;return null;case 22:case 23:return e.lanes=0,F_(t,e,n)}return zn(t,e,n)}var W_,bh,H_,q_;W_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bh=function(){};H_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Kr(vn.current);var s=null;switch(n){case"input":i=nh(t,i),r=nh(t,r),s=[];break;case"select":i=Le({},i,{value:void 0}),r=Le({},r,{value:void 0}),s=[];break;case"textarea":i=sh(t,i),r=sh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Al)}ah(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(_o.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(_o.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Re("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};q_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Bs(t,e){if(!Ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function z1(t,e,n){var r=e.pendingProps;switch(jd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(e),null;case 1:return Pt(e.type)&&Cl(),dt(e),null;case 3:return r=e.stateNode,ts(),Pe(Rt),Pe(yt),Kd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Fa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,rn!==null&&(Bh(rn),rn=null))),bh(t,e),dt(e),null;case 5:qd(e);var i=Kr(xo.current);if(n=e.type,t!==null&&e.stateNode!=null)H_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return dt(e),null}if(t=Kr(vn.current),Fa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[mn]=e,r[Po]=s,t=(e.mode&1)!==0,n){case"dialog":Re("cancel",r),Re("close",r);break;case"iframe":case"object":case"embed":Re("load",r);break;case"video":case"audio":for(i=0;i<Gs.length;i++)Re(Gs[i],r);break;case"source":Re("error",r);break;case"img":case"image":case"link":Re("error",r),Re("load",r);break;case"details":Re("toggle",r);break;case"input":gm(r,s),Re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Re("invalid",r);break;case"textarea":vm(r,s),Re("invalid",r)}ah(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ja(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ja(r.textContent,l,t),i=["children",""+l]):_o.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Re("scroll",r)}switch(n){case"input":Na(r),ym(r,s,!0);break;case"textarea":Na(r),_m(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Al)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=wv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[mn]=e,t[Po]=r,W_(t,e,!1,!1),e.stateNode=t;e:{switch(o=lh(n,r),n){case"dialog":Re("cancel",t),Re("close",t),i=r;break;case"iframe":case"object":case"embed":Re("load",t),i=r;break;case"video":case"audio":for(i=0;i<Gs.length;i++)Re(Gs[i],t);i=r;break;case"source":Re("error",t),i=r;break;case"img":case"image":case"link":Re("error",t),Re("load",t),i=r;break;case"details":Re("toggle",t),i=r;break;case"input":gm(t,r),i=nh(t,r),Re("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Le({},r,{value:void 0}),Re("invalid",t);break;case"textarea":vm(t,r),i=sh(t,r),Re("invalid",t);break;default:i=r}ah(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Iv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ev(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&wo(t,u):typeof u=="number"&&wo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_o.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Re("scroll",t):u!=null&&Id(t,s,u,o))}switch(n){case"input":Na(t),ym(t,r,!1);break;case"textarea":Na(t),_m(t);break;case"option":r.value!=null&&t.setAttribute("value",""+kr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?$i(t,!!r.multiple,s,!1):r.defaultValue!=null&&$i(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Al)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return dt(e),null;case 6:if(t&&e.stateNode!=null)q_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=Kr(xo.current),Kr(vn.current),Fa(e)){if(r=e.stateNode,n=e.memoizedProps,r[mn]=e,(s=r.nodeValue!==n)&&(t=Lt,t!==null))switch(t.tag){case 3:ja(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ja(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mn]=e,e.stateNode=r}return dt(e),null;case 13:if(Pe(Oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&bt!==null&&e.mode&1&&!(e.flags&128))c_(),Zi(),e.flags|=98560,s=!1;else if(s=Fa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[mn]=e}else Zi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;dt(e),s=!1}else rn!==null&&(Bh(rn),rn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Oe.current&1?Ge===0&&(Ge=3):of())),e.updateQueue!==null&&(e.flags|=4),dt(e),null);case 4:return ts(),bh(t,e),t===null&&Co(e.stateNode.containerInfo),dt(e),null;case 10:return Bd(e.type._context),dt(e),null;case 17:return Pt(e.type)&&Cl(),dt(e),null;case 19:if(Pe(Oe),s=e.memoizedState,s===null)return dt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Bs(s,!1);else{if(Ge!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=bl(t),o!==null){for(e.flags|=128,Bs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Se(Oe,Oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Be()>rs&&(e.flags|=128,r=!0,Bs(s,!1),e.lanes=4194304)}else{if(!r)if(t=bl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Bs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ne)return dt(e),null}else 2*Be()-s.renderingStartTime>rs&&n!==1073741824&&(e.flags|=128,r=!0,Bs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Be(),e.sibling=null,n=Oe.current,Se(Oe,r?n&1|2:n&1),e):(dt(e),null);case 22:case 23:return sf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ot&1073741824&&(dt(e),e.subtreeFlags&6&&(e.flags|=8192)):dt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function W1(t,e){switch(jd(e),e.tag){case 1:return Pt(e.type)&&Cl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ts(),Pe(Rt),Pe(yt),Kd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return qd(e),null;case 13:if(Pe(Oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Zi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Pe(Oe),null;case 4:return ts(),null;case 10:return Bd(e.type._context),null;case 22:case 23:return sf(),null;case 24:return null;default:return null}}var Ba=!1,mt=!1,H1=typeof WeakSet=="function"?WeakSet:Set,G=null;function ji(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(t,e,r)}else n.current=null}function Lh(t,e,n){try{n()}catch(r){je(t,e,r)}}var lg=!1;function q1(t,e){if(vh=Il,t=Jv(),Vd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,p=t,g=null;t:for(;;){for(var I;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(I=p.firstChild)!==null;)g=p,p=I;for(;;){if(p===t)break t;if(g===n&&++c===i&&(l=o),g===s&&++f===r&&(u=o),(I=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=I}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(_h={focusedElem:t,selectionRange:n},Il=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var P=R.memoizedProps,O=R.memoizedState,w=e.stateNode,_=w.getSnapshotBeforeUpdate(e.elementType===e.type?P:tn(e.type,P),O);w.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(N){je(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return R=lg,lg=!1,R}function lo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Lh(e,n,s)}i=i.next}while(i!==r)}}function yu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Vh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function K_(t){var e=t.alternate;e!==null&&(t.alternate=null,K_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mn],delete e[Po],delete e[Th],delete e[R1],delete e[P1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function G_(t){return t.tag===5||t.tag===3||t.tag===4}function ug(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||G_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Al));else if(r!==4&&(t=t.child,t!==null))for(Mh(t,e,n),t=t.sibling;t!==null;)Mh(t,e,n),t=t.sibling}function jh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(jh(t,e,n),t=t.sibling;t!==null;)jh(t,e,n),t=t.sibling}var tt=null,nn=!1;function Zn(t,e,n){for(n=n.child;n!==null;)Q_(t,e,n),n=n.sibling}function Q_(t,e,n){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(uu,n)}catch{}switch(n.tag){case 5:mt||ji(n,e);case 6:var r=tt,i=nn;tt=null,Zn(t,e,n),tt=r,nn=i,tt!==null&&(nn?(t=tt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):tt.removeChild(n.stateNode));break;case 18:tt!==null&&(nn?(t=tt,n=n.stateNode,t.nodeType===8?Ac(t.parentNode,n):t.nodeType===1&&Ac(t,n),So(t)):Ac(tt,n.stateNode));break;case 4:r=tt,i=nn,tt=n.stateNode.containerInfo,nn=!0,Zn(t,e,n),tt=r,nn=i;break;case 0:case 11:case 14:case 15:if(!mt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Lh(n,e,o),i=i.next}while(i!==r)}Zn(t,e,n);break;case 1:if(!mt&&(ji(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){je(n,e,l)}Zn(t,e,n);break;case 21:Zn(t,e,n);break;case 22:n.mode&1?(mt=(r=mt)||n.memoizedState!==null,Zn(t,e,n),mt=r):Zn(t,e,n);break;default:Zn(t,e,n)}}function cg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new H1),e.forEach(function(r){var i=tS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function en(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:tt=l.stateNode,nn=!1;break e;case 3:tt=l.stateNode.containerInfo,nn=!0;break e;case 4:tt=l.stateNode.containerInfo,nn=!0;break e}l=l.return}if(tt===null)throw Error(B(160));Q_(s,o,i),tt=null,nn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){je(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Y_(e,t),e=e.sibling}function Y_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(en(e,t),fn(t),r&4){try{lo(3,t,t.return),yu(3,t)}catch(P){je(t,t.return,P)}try{lo(5,t,t.return)}catch(P){je(t,t.return,P)}}break;case 1:en(e,t),fn(t),r&512&&n!==null&&ji(n,n.return);break;case 5:if(en(e,t),fn(t),r&512&&n!==null&&ji(n,n.return),t.flags&32){var i=t.stateNode;try{wo(i,"")}catch(P){je(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&vv(i,s),lh(l,o);var c=lh(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?Iv(i,p):f==="dangerouslySetInnerHTML"?Ev(i,p):f==="children"?wo(i,p):Id(i,f,p,c)}switch(l){case"input":rh(i,s);break;case"textarea":_v(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?$i(i,!!s.multiple,I,!1):g!==!!s.multiple&&(s.defaultValue!=null?$i(i,!!s.multiple,s.defaultValue,!0):$i(i,!!s.multiple,s.multiple?[]:"",!1))}i[Po]=s}catch(P){je(t,t.return,P)}}break;case 6:if(en(e,t),fn(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){je(t,t.return,P)}}break;case 3:if(en(e,t),fn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{So(e.containerInfo)}catch(P){je(t,t.return,P)}break;case 4:en(e,t),fn(t);break;case 13:en(e,t),fn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(nf=Be())),r&4&&cg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(mt=(c=mt)||f,en(e,t),mt=c):en(e,t),fn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(G=t,f=t.child;f!==null;){for(p=G=f;G!==null;){switch(g=G,I=g.child,g.tag){case 0:case 11:case 14:case 15:lo(4,g,g.return);break;case 1:ji(g,g.return);var R=g.stateNode;if(typeof R.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(P){je(r,n,P)}}break;case 5:ji(g,g.return);break;case 22:if(g.memoizedState!==null){dg(p);continue}}I!==null?(I.return=g,G=I):dg(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Tv("display",o))}catch(P){je(t,t.return,P)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(P){je(t,t.return,P)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:en(e,t),fn(t),r&4&&cg(t);break;case 21:break;default:en(e,t),fn(t)}}function fn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(G_(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(wo(i,""),r.flags&=-33);var s=ug(t);jh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ug(t);Mh(t,l,o);break;default:throw Error(B(161))}}catch(u){je(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function K1(t,e,n){G=t,J_(t)}function J_(t,e,n){for(var r=(t.mode&1)!==0;G!==null;){var i=G,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ba;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||mt;l=Ba;var c=mt;if(Ba=o,(mt=u)&&!c)for(G=i;G!==null;)o=G,u=o.child,o.tag===22&&o.memoizedState!==null?fg(i):u!==null?(u.return=o,G=u):fg(i);for(;s!==null;)G=s,J_(s),s=s.sibling;G=i,Ba=l,mt=c}hg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,G=s):hg(t)}}function hg(t){for(;G!==null;){var e=G;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:mt||yu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!mt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:tn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Qm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Qm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&So(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}mt||e.flags&512&&Vh(e)}catch(g){je(e,e.return,g)}}if(e===t){G=null;break}if(n=e.sibling,n!==null){n.return=e.return,G=n;break}G=e.return}}function dg(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var n=e.sibling;if(n!==null){n.return=e.return,G=n;break}G=e.return}}function fg(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yu(4,e)}catch(u){je(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){je(e,i,u)}}var s=e.return;try{Vh(e)}catch(u){je(e,s,u)}break;case 5:var o=e.return;try{Vh(e)}catch(u){je(e,o,u)}}}catch(u){je(e,e.return,u)}if(e===t){G=null;break}var l=e.sibling;if(l!==null){l.return=e.return,G=l;break}G=e.return}}var G1=Math.ceil,Ml=Qn.ReactCurrentDispatcher,ef=Qn.ReactCurrentOwner,qt=Qn.ReactCurrentBatchConfig,me=0,Xe=null,He=null,it=0,Ot=0,Fi=xr(0),Ge=0,Lo=null,ni=0,vu=0,tf=0,uo=null,At=null,nf=0,rs=1/0,Nn=null,jl=!1,Fh=null,vr=null,za=!1,cr=null,Fl=0,co=0,Uh=null,ol=-1,al=0;function It(){return me&6?Be():ol!==-1?ol:ol=Be()}function _r(t){return t.mode&1?me&2&&it!==0?it&-it:x1.transition!==null?(al===0&&(al=Lv()),al):(t=_e,t!==0||(t=window.event,t=t===void 0?16:Bv(t.type)),t):1}function an(t,e,n,r){if(50<co)throw co=0,Uh=null,Error(B(185));Qo(t,n,r),(!(me&2)||t!==Xe)&&(t===Xe&&(!(me&2)&&(vu|=n),Ge===4&&ir(t,it)),Nt(t,r),n===1&&me===0&&!(e.mode&1)&&(rs=Be()+500,pu&&Dr()))}function Nt(t,e){var n=t.callbackNode;xI(t,e);var r=Tl(t,t===Xe?it:0);if(r===0)n!==null&&Tm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Tm(n),e===1)t.tag===0?N1(pg.bind(null,t)):a_(pg.bind(null,t)),A1(function(){!(me&6)&&Dr()}),n=null;else{switch(Vv(r)){case 1:n=Rd;break;case 4:n=Ov;break;case 16:n=El;break;case 536870912:n=bv;break;default:n=El}n=s0(n,X_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function X_(t,e){if(ol=-1,al=0,me&6)throw Error(B(327));var n=t.callbackNode;if(qi()&&t.callbackNode!==n)return null;var r=Tl(t,t===Xe?it:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ul(t,r);else{e=r;var i=me;me|=2;var s=e0();(Xe!==t||it!==e)&&(Nn=null,rs=Be()+500,Yr(t,e));do try{J1();break}catch(l){Z_(t,l)}while(1);$d(),Ml.current=s,me=i,He!==null?e=0:(Xe=null,it=0,e=Ge)}if(e!==0){if(e===2&&(i=fh(t),i!==0&&(r=i,e=$h(t,i))),e===1)throw n=Lo,Yr(t,0),ir(t,r),Nt(t,Be()),n;if(e===6)ir(t,r);else{if(i=t.current.alternate,!(r&30)&&!Q1(i)&&(e=Ul(t,r),e===2&&(s=fh(t),s!==0&&(r=s,e=$h(t,s))),e===1))throw n=Lo,Yr(t,0),ir(t,r),Nt(t,Be()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:zr(t,At,Nn);break;case 3:if(ir(t,r),(r&130023424)===r&&(e=nf+500-Be(),10<e)){if(Tl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){It(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Eh(zr.bind(null,t,At,Nn),e);break}zr(t,At,Nn);break;case 4:if(ir(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-on(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*G1(r/1960))-r,10<r){t.timeoutHandle=Eh(zr.bind(null,t,At,Nn),r);break}zr(t,At,Nn);break;case 5:zr(t,At,Nn);break;default:throw Error(B(329))}}}return Nt(t,Be()),t.callbackNode===n?X_.bind(null,t):null}function $h(t,e){var n=uo;return t.current.memoizedState.isDehydrated&&(Yr(t,e).flags|=256),t=Ul(t,e),t!==2&&(e=At,At=n,e!==null&&Bh(e)),t}function Bh(t){At===null?At=t:At.push.apply(At,t)}function Q1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!un(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ir(t,e){for(e&=~tf,e&=~vu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-on(e),r=1<<n;t[n]=-1,e&=~r}}function pg(t){if(me&6)throw Error(B(327));qi();var e=Tl(t,0);if(!(e&1))return Nt(t,Be()),null;var n=Ul(t,e);if(t.tag!==0&&n===2){var r=fh(t);r!==0&&(e=r,n=$h(t,r))}if(n===1)throw n=Lo,Yr(t,0),ir(t,e),Nt(t,Be()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zr(t,At,Nn),Nt(t,Be()),null}function rf(t,e){var n=me;me|=1;try{return t(e)}finally{me=n,me===0&&(rs=Be()+500,pu&&Dr())}}function ri(t){cr!==null&&cr.tag===0&&!(me&6)&&qi();var e=me;me|=1;var n=qt.transition,r=_e;try{if(qt.transition=null,_e=1,t)return t()}finally{_e=r,qt.transition=n,me=e,!(me&6)&&Dr()}}function sf(){Ot=Fi.current,Pe(Fi)}function Yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,k1(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(jd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Cl();break;case 3:ts(),Pe(Rt),Pe(yt),Kd();break;case 5:qd(r);break;case 4:ts();break;case 13:Pe(Oe);break;case 19:Pe(Oe);break;case 10:Bd(r.type._context);break;case 22:case 23:sf()}n=n.return}if(Xe=t,He=t=wr(t.current,null),it=Ot=e,Ge=0,Lo=null,tf=vu=ni=0,At=uo=null,qr!==null){for(e=0;e<qr.length;e++)if(n=qr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}qr=null}return t}function Z_(t,e){do{var n=He;try{if($d(),rl.current=Vl,Ll){for(var r=be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ll=!1}if(ti=0,Je=qe=be=null,ao=!1,Do=0,ef.current=null,n===null||n.return===null){Ge=1,Lo=e,He=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=it,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var I=tg(o);if(I!==null){I.flags&=-257,ng(I,o,l,s,e),I.mode&1&&eg(s,c,e),e=I,u=c;var R=e.updateQueue;if(R===null){var P=new Set;P.add(u),e.updateQueue=P}else R.add(u);break e}else{if(!(e&1)){eg(s,c,e),of();break e}u=Error(B(426))}}else if(Ne&&l.mode&1){var O=tg(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),ng(O,o,l,s,e),Fd(ns(u,l));break e}}s=u=ns(u,l),Ge!==4&&(Ge=2),uo===null?uo=[s]:uo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=V_(s,u,e);Gm(s,w);break e;case 1:l=u;var _=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(vr===null||!vr.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var N=M_(s,l,e);Gm(s,N);break e}}s=s.return}while(s!==null)}n0(n)}catch(M){e=M,He===n&&n!==null&&(He=n=n.return);continue}break}while(1)}function e0(){var t=Ml.current;return Ml.current=Vl,t===null?Vl:t}function of(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),Xe===null||!(ni&268435455)&&!(vu&268435455)||ir(Xe,it)}function Ul(t,e){var n=me;me|=2;var r=e0();(Xe!==t||it!==e)&&(Nn=null,Yr(t,e));do try{Y1();break}catch(i){Z_(t,i)}while(1);if($d(),me=n,Ml.current=r,He!==null)throw Error(B(261));return Xe=null,it=0,Ge}function Y1(){for(;He!==null;)t0(He)}function J1(){for(;He!==null&&!TI();)t0(He)}function t0(t){var e=i0(t.alternate,t,Ot);t.memoizedProps=t.pendingProps,e===null?n0(t):He=e,ef.current=null}function n0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=W1(n,e),n!==null){n.flags&=32767,He=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ge=6,He=null;return}}else if(n=z1(n,e,Ot),n!==null){He=n;return}if(e=e.sibling,e!==null){He=e;return}He=e=t}while(e!==null);Ge===0&&(Ge=5)}function zr(t,e,n){var r=_e,i=qt.transition;try{qt.transition=null,_e=1,X1(t,e,n,r)}finally{qt.transition=i,_e=r}return null}function X1(t,e,n,r){do qi();while(cr!==null);if(me&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(DI(t,s),t===Xe&&(He=Xe=null,it=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||za||(za=!0,s0(El,function(){return qi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qt.transition,qt.transition=null;var o=_e;_e=1;var l=me;me|=4,ef.current=null,q1(t,n),Y_(n,t),v1(_h),Il=!!vh,_h=vh=null,t.current=n,K1(n),II(),me=l,_e=o,qt.transition=s}else t.current=n;if(za&&(za=!1,cr=t,Fl=i),s=t.pendingLanes,s===0&&(vr=null),AI(n.stateNode),Nt(t,Be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(jl)throw jl=!1,t=Fh,Fh=null,t;return Fl&1&&t.tag!==0&&qi(),s=t.pendingLanes,s&1?t===Uh?co++:(co=0,Uh=t):co=0,Dr(),null}function qi(){if(cr!==null){var t=Vv(Fl),e=qt.transition,n=_e;try{if(qt.transition=null,_e=16>t?16:t,cr===null)var r=!1;else{if(t=cr,cr=null,Fl=0,me&6)throw Error(B(331));var i=me;for(me|=4,G=t.current;G!==null;){var s=G,o=s.child;if(G.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(G=c;G!==null;){var f=G;switch(f.tag){case 0:case 11:case 15:lo(8,f,s)}var p=f.child;if(p!==null)p.return=f,G=p;else for(;G!==null;){f=G;var g=f.sibling,I=f.return;if(K_(f),f===c){G=null;break}if(g!==null){g.return=I,G=g;break}G=I}}}var R=s.alternate;if(R!==null){var P=R.child;if(P!==null){R.child=null;do{var O=P.sibling;P.sibling=null,P=O}while(P!==null)}}G=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,G=o;else e:for(;G!==null;){if(s=G,s.flags&2048)switch(s.tag){case 0:case 11:case 15:lo(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,G=w;break e}G=s.return}}var _=t.current;for(G=_;G!==null;){o=G;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,G=A;else e:for(o=_;G!==null;){if(l=G,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:yu(9,l)}}catch(M){je(l,l.return,M)}if(l===o){G=null;break e}var N=l.sibling;if(N!==null){N.return=l.return,G=N;break e}G=l.return}}if(me=i,Dr(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(uu,t)}catch{}r=!0}return r}finally{_e=n,qt.transition=e}}return!1}function mg(t,e,n){e=ns(n,e),e=V_(t,e,1),t=yr(t,e,1),e=It(),t!==null&&(Qo(t,1,e),Nt(t,e))}function je(t,e,n){if(t.tag===3)mg(t,t,n);else for(;e!==null;){if(e.tag===3){mg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vr===null||!vr.has(r))){t=ns(n,t),t=M_(e,t,1),e=yr(e,t,1),t=It(),e!==null&&(Qo(e,1,t),Nt(e,t));break}}e=e.return}}function Z1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=It(),t.pingedLanes|=t.suspendedLanes&n,Xe===t&&(it&n)===n&&(Ge===4||Ge===3&&(it&130023424)===it&&500>Be()-nf?Yr(t,0):tf|=n),Nt(t,e)}function r0(t,e){e===0&&(t.mode&1?(e=Oa,Oa<<=1,!(Oa&130023424)&&(Oa=4194304)):e=1);var n=It();t=Bn(t,e),t!==null&&(Qo(t,e,n),Nt(t,n))}function eS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),r0(t,n)}function tS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),r0(t,n)}var i0;i0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Rt.current)Ct=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ct=!1,B1(t,e,n);Ct=!!(t.flags&131072)}else Ct=!1,Ne&&e.flags&1048576&&l_(e,Nl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;sl(t,e),t=e.pendingProps;var i=Xi(e,yt.current);Hi(e,n),i=Qd(null,e,r,t,i,n);var s=Yd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Pt(r)?(s=!0,Rl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Wd(e),i.updater=gu,e.stateNode=i,i._reactInternals=e,Rh(e,r,t,n),e=xh(null,e,r,!0,s,n)):(e.tag=0,Ne&&s&&Md(e),Tt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(sl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=rS(r),t=tn(r,t),i){case 0:e=Nh(null,e,r,t,n);break e;case 1:e=sg(null,e,r,t,n);break e;case 11:e=rg(null,e,r,t,n);break e;case 14:e=ig(null,e,r,tn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),Nh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),sg(t,e,r,i,n);case 3:e:{if($_(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,p_(t,e),Ol(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ns(Error(B(423)),e),e=og(t,e,r,n,i);break e}else if(r!==i){i=ns(Error(B(424)),e),e=og(t,e,r,n,i);break e}else for(bt=gr(e.stateNode.containerInfo.firstChild),Lt=e,Ne=!0,rn=null,n=d_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zi(),r===i){e=zn(t,e,n);break e}Tt(t,e,r,n)}e=e.child}return e;case 5:return m_(e),t===null&&kh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,wh(r,i)?o=null:s!==null&&wh(r,s)&&(e.flags|=32),U_(t,e),Tt(t,e,o,n),e.child;case 6:return t===null&&kh(e),null;case 13:return B_(t,e,n);case 4:return Hd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=es(e,null,r,n):Tt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),rg(t,e,r,i,n);case 7:return Tt(t,e,e.pendingProps,n),e.child;case 8:return Tt(t,e,e.pendingProps.children,n),e.child;case 12:return Tt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Se(xl,r._currentValue),r._currentValue=o,s!==null)if(un(s.value,o)){if(s.children===i.children&&!Rt.current){e=zn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Mn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Ah(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ah(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Tt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Hi(e,n),i=Gt(i),r=r(i),e.flags|=1,Tt(t,e,r,n),e.child;case 14:return r=e.type,i=tn(r,e.pendingProps),i=tn(r.type,i),ig(t,e,r,i,n);case 15:return j_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),sl(t,e),e.tag=1,Pt(r)?(t=!0,Rl(e)):t=!1,Hi(e,n),L_(e,r,i),Rh(e,r,i,n),xh(null,e,r,!0,t,n);case 19:return z_(t,e,n);case 22:return F_(t,e,n)}throw Error(B(156,e.tag))};function s0(t,e){return Dv(t,e)}function nS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(t,e,n,r){return new nS(t,e,n,r)}function af(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rS(t){if(typeof t=="function")return af(t)?1:0;if(t!=null){if(t=t.$$typeof,t===kd)return 11;if(t===Ad)return 14}return 2}function wr(t,e){var n=t.alternate;return n===null?(n=Ht(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ll(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")af(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Pi:return Jr(n.children,i,s,e);case Sd:o=8,i|=8;break;case Xc:return t=Ht(12,n,e,i|2),t.elementType=Xc,t.lanes=s,t;case Zc:return t=Ht(13,n,e,i),t.elementType=Zc,t.lanes=s,t;case eh:return t=Ht(19,n,e,i),t.elementType=eh,t.lanes=s,t;case mv:return _u(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case fv:o=10;break e;case pv:o=9;break e;case kd:o=11;break e;case Ad:o=14;break e;case tr:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=Ht(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Jr(t,e,n,r){return t=Ht(7,t,r,e),t.lanes=n,t}function _u(t,e,n,r){return t=Ht(22,t,r,e),t.elementType=mv,t.lanes=n,t.stateNode={isHidden:!1},t}function bc(t,e,n){return t=Ht(6,t,null,e),t.lanes=n,t}function Lc(t,e,n){return e=Ht(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function iS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mc(0),this.expirationTimes=mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function lf(t,e,n,r,i,s,o,l,u){return t=new iS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ht(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wd(s),t}function sS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ri,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function o0(t){if(!t)return Ar;t=t._reactInternals;e:{if(fi(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Pt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Pt(n))return o_(t,n,e)}return e}function a0(t,e,n,r,i,s,o,l,u){return t=lf(n,r,!0,t,i,s,o,l,u),t.context=o0(null),n=t.current,r=It(),i=_r(n),s=Mn(r,i),s.callback=e??null,yr(n,s,i),t.current.lanes=i,Qo(t,i,r),Nt(t,r),t}function wu(t,e,n,r){var i=e.current,s=It(),o=_r(i);return n=o0(n),e.context===null?e.context=n:e.pendingContext=n,e=Mn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=yr(i,e,o),t!==null&&(an(t,i,o,s),nl(t,i,o)),o}function $l(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function gg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function uf(t,e){gg(t,e),(t=t.alternate)&&gg(t,e)}function oS(){return null}var l0=typeof reportError=="function"?reportError:function(t){console.error(t)};function cf(t){this._internalRoot=t}Eu.prototype.render=cf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));wu(t,e,null,null)};Eu.prototype.unmount=cf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ri(function(){wu(null,t,null,null)}),e[$n]=null}};function Eu(t){this._internalRoot=t}Eu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Fv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<rr.length&&e!==0&&e<rr[n].priority;n++);rr.splice(n,0,t),n===0&&$v(t)}};function hf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function yg(){}function aS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=$l(o);s.call(c)}}var o=a0(e,r,t,0,null,!1,!1,"",yg);return t._reactRootContainer=o,t[$n]=o.current,Co(t.nodeType===8?t.parentNode:t),ri(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=$l(u);l.call(c)}}var u=lf(t,0,!1,null,null,!1,!1,"",yg);return t._reactRootContainer=u,t[$n]=u.current,Co(t.nodeType===8?t.parentNode:t),ri(function(){wu(e,u,n,r)}),u}function Iu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=$l(o);l.call(u)}}wu(e,o,t,i)}else o=aS(n,e,t,i,r);return $l(o)}Mv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ks(e.pendingLanes);n!==0&&(Pd(e,n|1),Nt(e,Be()),!(me&6)&&(rs=Be()+500,Dr()))}break;case 13:ri(function(){var r=Bn(t,1);if(r!==null){var i=It();an(r,t,1,i)}}),uf(t,1)}};Nd=function(t){if(t.tag===13){var e=Bn(t,134217728);if(e!==null){var n=It();an(e,t,134217728,n)}uf(t,134217728)}};jv=function(t){if(t.tag===13){var e=_r(t),n=Bn(t,e);if(n!==null){var r=It();an(n,t,e,r)}uf(t,e)}};Fv=function(){return _e};Uv=function(t,e){var n=_e;try{return _e=t,e()}finally{_e=n}};ch=function(t,e,n){switch(e){case"input":if(rh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=fu(r);if(!i)throw Error(B(90));yv(r),rh(r,i)}}}break;case"textarea":_v(t,n);break;case"select":e=n.value,e!=null&&$i(t,!!n.multiple,e,!1)}};Av=rf;Cv=ri;var lS={usingClientEntryPoint:!1,Events:[Jo,Oi,fu,Sv,kv,rf]},zs={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uS={bundleType:zs.bundleType,version:zs.version,rendererPackageName:zs.rendererPackageName,rendererConfig:zs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Nv(t),t===null?null:t.stateNode},findFiberByHostInstance:zs.findFiberByHostInstance||oS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wa.isDisabled&&Wa.supportsFiber)try{uu=Wa.inject(uS),yn=Wa}catch{}}Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lS;Ft.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hf(e))throw Error(B(200));return sS(t,e,null,n)};Ft.createRoot=function(t,e){if(!hf(t))throw Error(B(299));var n=!1,r="",i=l0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=lf(t,1,!1,null,null,n,!1,r,i),t[$n]=e.current,Co(t.nodeType===8?t.parentNode:t),new cf(e)};Ft.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=Nv(e),t=t===null?null:t.stateNode,t};Ft.flushSync=function(t){return ri(t)};Ft.hydrate=function(t,e,n){if(!Tu(e))throw Error(B(200));return Iu(null,t,e,!0,n)};Ft.hydrateRoot=function(t,e,n){if(!hf(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=l0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=a0(e,null,t,1,n??null,i,!1,s,o),t[$n]=e.current,Co(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Eu(e)};Ft.render=function(t,e,n){if(!Tu(e))throw Error(B(200));return Iu(null,t,e,!1,n)};Ft.unmountComponentAtNode=function(t){if(!Tu(t))throw Error(B(40));return t._reactRootContainer?(ri(function(){Iu(null,null,t,!1,function(){t._reactRootContainer=null,t[$n]=null})}),!0):!1};Ft.unstable_batchedUpdates=rf;Ft.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Tu(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return Iu(t,e,n,!1,r)};Ft.version="18.3.1-next-f1338f8080-20240426";function u0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u0)}catch(t){console.error(t)}}u0(),uv.exports=Ft;var cS=uv.exports,c0,vg=cS;c0=vg.createRoot,vg.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vo(){return Vo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Vo.apply(this,arguments)}var hr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(hr||(hr={}));const _g="popstate";function hS(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:l="",hash:u=""}=pi(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),zh("",{pathname:o,search:l,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let u=i.location.href,c=u.indexOf("#");l=c===-1?u:u.slice(0,c)}return l+"#"+(typeof s=="string"?s:Bl(s))}function r(i,s){df(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return fS(e,n,r,t)}function ze(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function df(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function dS(){return Math.random().toString(36).substr(2,8)}function wg(t,e){return{usr:t.state,key:t.key,idx:e}}function zh(t,e,n,r){return n===void 0&&(n=null),Vo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?pi(e):e,{state:n,key:e&&e.key||r||dS()})}function Bl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function pi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function fS(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=hr.Pop,u=null,c=f();c==null&&(c=0,o.replaceState(Vo({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function p(){l=hr.Pop;let O=f(),w=O==null?null:O-c;c=O,u&&u({action:l,location:P.location,delta:w})}function g(O,w){l=hr.Push;let _=zh(P.location,O,w);n&&n(_,O),c=f()+1;let A=wg(_,c),N=P.createHref(_);try{o.pushState(A,"",N)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(N)}s&&u&&u({action:l,location:P.location,delta:1})}function I(O,w){l=hr.Replace;let _=zh(P.location,O,w);n&&n(_,O),c=f();let A=wg(_,c),N=P.createHref(_);o.replaceState(A,"",N),s&&u&&u({action:l,location:P.location,delta:0})}function R(O){let w=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof O=="string"?O:Bl(O);return _=_.replace(/ $/,"%20"),ze(w,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,w)}let P={get action(){return l},get location(){return t(i,o)},listen(O){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(_g,p),u=O,()=>{i.removeEventListener(_g,p),u=null}},createHref(O){return e(i,O)},createURL:R,encodeLocation(O){let w=R(O);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:g,replace:I,go(O){return o.go(O)}};return P}var Eg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Eg||(Eg={}));function pS(t,e,n){return n===void 0&&(n="/"),mS(t,e,n,!1)}function mS(t,e,n,r){let i=typeof e=="string"?pi(e):e,s=ff(i.pathname||"/",n);if(s==null)return null;let o=h0(t);gS(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=CS(s);l=kS(o[u],c,r)}return l}function h0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(ze(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Er([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(ze(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),h0(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:IS(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of d0(s.path))i(s,o,u)}),e}function d0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=d0(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function gS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:SS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const yS=/^:[\w-]+$/,vS=3,_S=2,wS=1,ES=10,TS=-2,Tg=t=>t==="*";function IS(t,e){let n=t.split("/"),r=n.length;return n.some(Tg)&&(r+=TS),e&&(r+=_S),n.filter(i=>!Tg(i)).reduce((i,s)=>i+(yS.test(s)?vS:s===""?wS:ES),r)}function SS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function kS(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",p=Ig({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),g=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=Ig({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Er([s,p.pathname]),pathnameBase:xS(Er([s,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(s=Er([s,p.pathnameBase]))}return o}function Ig(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=AS(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,f,p)=>{let{paramName:g,isOptional:I}=f;if(g==="*"){let P=l[p]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const R=l[p];return I&&!R?c[g]=void 0:c[g]=(R||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function AS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),df(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function CS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return df(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ff(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function RS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?pi(t):t;return{pathname:n?n.startsWith("/")?n:PS(n,e):e,search:DS(r),hash:OS(i)}}function PS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Vc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function NS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function pf(t,e){let n=NS(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function mf(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=pi(t):(i=Vo({},t),ze(!i.pathname||!i.pathname.includes("?"),Vc("?","pathname","search",i)),ze(!i.pathname||!i.pathname.includes("#"),Vc("#","pathname","hash",i)),ze(!i.search||!i.search.includes("#"),Vc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}l=p>=0?e[p]:"/"}let u=RS(i,l),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}const Er=t=>t.join("/").replace(/\/\/+/g,"/"),xS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),DS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,OS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function bS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const f0=["post","put","patch","delete"];new Set(f0);const LS=["get",...f0];new Set(LS);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mo(){return Mo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Mo.apply(this,arguments)}const gf=V.createContext(null),VS=V.createContext(null),Or=V.createContext(null),Su=V.createContext(null),br=V.createContext({outlet:null,matches:[],isDataRoute:!1}),p0=V.createContext(null);function MS(t,e){let{relative:n}=e===void 0?{}:e;ps()||ze(!1);let{basename:r,navigator:i}=V.useContext(Or),{hash:s,pathname:o,search:l}=g0(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Er([r,o])),i.createHref({pathname:u,search:l,hash:s})}function ps(){return V.useContext(Su)!=null}function Zo(){return ps()||ze(!1),V.useContext(Su).location}function m0(t){V.useContext(Or).static||V.useLayoutEffect(t)}function ea(){let{isDataRoute:t}=V.useContext(br);return t?YS():jS()}function jS(){ps()||ze(!1);let t=V.useContext(gf),{basename:e,future:n,navigator:r}=V.useContext(Or),{matches:i}=V.useContext(br),{pathname:s}=Zo(),o=JSON.stringify(pf(i,n.v7_relativeSplatPath)),l=V.useRef(!1);return m0(()=>{l.current=!0}),V.useCallback(function(c,f){if(f===void 0&&(f={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=mf(c,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Er([e,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[e,r,o,s,t])}function g0(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=V.useContext(Or),{matches:i}=V.useContext(br),{pathname:s}=Zo(),o=JSON.stringify(pf(i,r.v7_relativeSplatPath));return V.useMemo(()=>mf(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function FS(t,e){return US(t,e)}function US(t,e,n,r){ps()||ze(!1);let{navigator:i,static:s}=V.useContext(Or),{matches:o}=V.useContext(br),l=o[o.length-1],u=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let f=Zo(),p;if(e){var g;let w=typeof e=="string"?pi(e):e;c==="/"||(g=w.pathname)!=null&&g.startsWith(c)||ze(!1),p=w}else p=f;let I=p.pathname||"/",R=I;if(c!=="/"){let w=c.replace(/^\//,"").split("/");R="/"+I.replace(/^\//,"").split("/").slice(w.length).join("/")}let P=!s&&n&&n.matches&&n.matches.length>0?n.matches:pS(t,{pathname:R}),O=HS(P&&P.map(w=>Object.assign({},w,{params:Object.assign({},u,w.params),pathname:Er([c,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?c:Er([c,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),o,n,r);return e&&O?V.createElement(Su.Provider,{value:{location:Mo({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:hr.Pop}},O):O}function $S(){let t=QS(),e=bS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},e),n?V.createElement("pre",{style:i},n):null,s)}const BS=V.createElement($S,null);class zS extends V.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?V.createElement(br.Provider,{value:this.props.routeContext},V.createElement(p0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function WS(t){let{routeContext:e,match:n,children:r}=t,i=V.useContext(gf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),V.createElement(br.Provider,{value:e},r)}function HS(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||ze(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let p=o[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=f),p.route.id){let{loaderData:g,errors:I}=n,R=p.route.loader&&g[p.route.id]===void 0&&(!I||I[p.route.id]===void 0);if(p.route.lazy||R){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,p,g)=>{let I,R=!1,P=null,O=null;n&&(I=l&&p.route.id?l[p.route.id]:void 0,P=p.route.errorElement||BS,u&&(c<0&&g===0?(JS("route-fallback",!1),R=!0,O=null):c===g&&(R=!0,O=p.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,g+1)),_=()=>{let A;return I?A=P:R?A=O:p.route.Component?A=V.createElement(p.route.Component,null):p.route.element?A=p.route.element:A=f,V.createElement(WS,{match:p,routeContext:{outlet:f,matches:w,isDataRoute:n!=null},children:A})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?V.createElement(zS,{location:n.location,revalidation:n.revalidation,component:P,error:I,children:_(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):_()},null)}var y0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(y0||{}),zl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(zl||{});function qS(t){let e=V.useContext(gf);return e||ze(!1),e}function KS(t){let e=V.useContext(VS);return e||ze(!1),e}function GS(t){let e=V.useContext(br);return e||ze(!1),e}function v0(t){let e=GS(),n=e.matches[e.matches.length-1];return n.route.id||ze(!1),n.route.id}function QS(){var t;let e=V.useContext(p0),n=KS(zl.UseRouteError),r=v0(zl.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function YS(){let{router:t}=qS(y0.UseNavigateStable),e=v0(zl.UseNavigateStable),n=V.useRef(!1);return m0(()=>{n.current=!0}),V.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Mo({fromRouteId:e},s)))},[t,e])}const Sg={};function JS(t,e,n){!e&&!Sg[t]&&(Sg[t]=!0)}function XS(t,e){t==null||t.v7_startTransition,(t==null?void 0:t.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function ZS(t){let{to:e,replace:n,state:r,relative:i}=t;ps()||ze(!1);let{future:s,static:o}=V.useContext(Or),{matches:l}=V.useContext(br),{pathname:u}=Zo(),c=ea(),f=mf(e,pf(l,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(f);return V.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function Qs(t){ze(!1)}function ek(t){let{basename:e="/",children:n=null,location:r,navigationType:i=hr.Pop,navigator:s,static:o=!1,future:l}=t;ps()&&ze(!1);let u=e.replace(/^\/*/,"/"),c=V.useMemo(()=>({basename:u,navigator:s,static:o,future:Mo({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=pi(r));let{pathname:f="/",search:p="",hash:g="",state:I=null,key:R="default"}=r,P=V.useMemo(()=>{let O=ff(f,u);return O==null?null:{location:{pathname:O,search:p,hash:g,state:I,key:R},navigationType:i}},[u,f,p,g,I,R,i]);return P==null?null:V.createElement(Or.Provider,{value:c},V.createElement(Su.Provider,{children:n,value:P}))}function tk(t){let{children:e,location:n}=t;return FS(Wh(e),n)}new Promise(()=>{});function Wh(t,e){e===void 0&&(e=[]);let n=[];return V.Children.forEach(t,(r,i)=>{if(!V.isValidElement(r))return;let s=[...e,i];if(r.type===V.Fragment){n.push.apply(n,Wh(r.props.children,s));return}r.type!==Qs&&ze(!1),!r.props.index||!r.props.children||ze(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Wh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hh(){return Hh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Hh.apply(this,arguments)}function nk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function rk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function ik(t,e){return t.button===0&&(!e||e==="_self")&&!rk(t)}const sk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ok="6";try{window.__reactRouterVersion=ok}catch{}const ak="startTransition",kg=ZT[ak];function lk(t){let{basename:e,children:n,future:r,window:i}=t,s=V.useRef();s.current==null&&(s.current=hS({window:i,v5Compat:!0}));let o=s.current,[l,u]=V.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},f=V.useCallback(p=>{c&&kg?kg(()=>u(p)):u(p)},[u,c]);return V.useLayoutEffect(()=>o.listen(f),[o,f]),V.useEffect(()=>XS(r),[r]),V.createElement(ek,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const uk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ck=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ho=V.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:f,viewTransition:p}=e,g=nk(e,sk),{basename:I}=V.useContext(Or),R,P=!1;if(typeof c=="string"&&ck.test(c)&&(R=c,uk))try{let A=new URL(window.location.href),N=c.startsWith("//")?new URL(A.protocol+c):new URL(c),M=ff(N.pathname,I);N.origin===A.origin&&M!=null?c=M+N.search+N.hash:P=!0}catch{}let O=MS(c,{relative:i}),w=hk(c,{replace:o,state:l,target:u,preventScrollReset:f,relative:i,viewTransition:p});function _(A){r&&r(A),A.defaultPrevented||w(A)}return V.createElement("a",Hh({},g,{href:R||O,onClick:P||s?r:_,ref:n,target:u}))});var Ag;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ag||(Ag={}));var Cg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Cg||(Cg={}));function hk(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=ea(),c=Zo(),f=g0(t,{relative:o});return V.useCallback(p=>{if(ik(p,n)){p.preventDefault();let g=r!==void 0?r:Bl(c)===Bl(f);u(t,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,f,r,i,n,t,s,o,l])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},dk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},w0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,I=c&63;u||(I=64,o||(g=64)),r.push(n[f],n[p],n[g],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new fk;const g=s<<2|l>>4;if(r.push(g),c!==64){const I=l<<4&240|c>>2;if(r.push(I),p!==64){const R=c<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pk=function(t){const e=_0(t);return w0.encodeByteArray(e,!0)},Wl=function(t){return pk(t).replace(/\./g,"")},E0=function(t){try{return w0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk=()=>mk().__FIREBASE_DEFAULTS__,yk=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&E0(t[1]);return e&&JSON.parse(e)},ku=()=>{try{return gk()||yk()||vk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},T0=t=>{var e,n;return(n=(e=ku())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_k=t=>{const e=T0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},I0=()=>{var t;return(t=ku())===null||t===void 0?void 0:t.config},S0=t=>{var e;return(e=ku())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Wl(JSON.stringify(n)),Wl(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function Ik(){var t;const e=(t=ku())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Sk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function yf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ak(){const t=vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ck(){return!Ik()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vf(){try{return typeof indexedDB=="object"}catch{return!1}}function _f(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function k0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk="FirebaseError";class dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Rk,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mi.prototype.create)}}class mi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Pk(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new dn(i,l,r)}}function Pk(t,e){return t.replace(Nk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Nk=/\{\$([^}]+)}/g;function xk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function jo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Rg(s)&&Rg(o)){if(!jo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Rg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ys(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Js(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Dk(t,e){const n=new Ok(t,e);return n.subscribe.bind(n)}class Ok{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");bk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Mc),i.error===void 0&&(i.error=Mc),i.complete===void 0&&(i.complete=Mc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Mc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk=1e3,Vk=2,Mk=4*60*60*1e3,jk=.5;function Pg(t,e=Lk,n=Vk){const r=e*Math.pow(n,t),i=Math.round(jk*r*(Math.random()-.5)*2);return Math.min(Mk,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t){return t&&t._delegate?t._delegate:t}class cn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new wk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($k(e))try{this.getOrInitializeService({instanceIdentifier:Wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wr){return this.instances.has(e)}getOptions(e=Wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Uk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wr){return this.component?this.component.multipleInstances?e:Wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Uk(t){return t===Wr?void 0:t}function $k(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Fk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const zk={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},Wk=de.INFO,Hk={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},qk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Hk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Au{constructor(e){this.name=e,this._logLevel=Wk,this._logHandler=qk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const Kk=(t,e)=>e.some(n=>t instanceof n);let Ng,xg;function Gk(){return Ng||(Ng=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qk(){return xg||(xg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const A0=new WeakMap,qh=new WeakMap,C0=new WeakMap,jc=new WeakMap,wf=new WeakMap;function Yk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Tr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&A0.set(n,t)}).catch(()=>{}),wf.set(e,t),e}function Jk(t){if(qh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});qh.set(t,e)}let Kh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||C0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Xk(t){Kh=t(Kh)}function Zk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fc(this),e,...n);return C0.set(r,e.sort?e.sort():[e]),Tr(r)}:Qk().includes(t)?function(...e){return t.apply(Fc(this),e),Tr(A0.get(this))}:function(...e){return Tr(t.apply(Fc(this),e))}}function eA(t){return typeof t=="function"?Zk(t):(t instanceof IDBTransaction&&Jk(t),Kk(t,Gk())?new Proxy(t,Kh):t)}function Tr(t){if(t instanceof IDBRequest)return Yk(t);if(jc.has(t))return jc.get(t);const e=eA(t);return e!==t&&(jc.set(t,e),wf.set(e,t)),e}const Fc=t=>wf.get(t);function R0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Tr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Tr(o.result),u.oldVersion,u.newVersion,Tr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const tA=["get","getKey","getAll","getAllKeys","count"],nA=["put","add","delete","clear"],Uc=new Map;function Dg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Uc.get(e))return Uc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=nA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||tA.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Uc.set(e,s),s}Xk(t=>({...t,get:(e,n,r)=>Dg(e,n)||t.get(e,n,r),has:(e,n)=>!!Dg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(iA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function iA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gh="@firebase/app",Og="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=new Au("@firebase/app"),sA="@firebase/app-compat",oA="@firebase/analytics-compat",aA="@firebase/analytics",lA="@firebase/app-check-compat",uA="@firebase/app-check",cA="@firebase/auth",hA="@firebase/auth-compat",dA="@firebase/database",fA="@firebase/data-connect",pA="@firebase/database-compat",mA="@firebase/functions",gA="@firebase/functions-compat",yA="@firebase/installations",vA="@firebase/installations-compat",_A="@firebase/messaging",wA="@firebase/messaging-compat",EA="@firebase/performance",TA="@firebase/performance-compat",IA="@firebase/remote-config",SA="@firebase/remote-config-compat",kA="@firebase/storage",AA="@firebase/storage-compat",CA="@firebase/firestore",RA="@firebase/vertexai-preview",PA="@firebase/firestore-compat",NA="firebase",xA="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh="[DEFAULT]",DA={[Gh]:"fire-core",[sA]:"fire-core-compat",[aA]:"fire-analytics",[oA]:"fire-analytics-compat",[uA]:"fire-app-check",[lA]:"fire-app-check-compat",[cA]:"fire-auth",[hA]:"fire-auth-compat",[dA]:"fire-rtdb",[fA]:"fire-data-connect",[pA]:"fire-rtdb-compat",[mA]:"fire-fn",[gA]:"fire-fn-compat",[yA]:"fire-iid",[vA]:"fire-iid-compat",[_A]:"fire-fcm",[wA]:"fire-fcm-compat",[EA]:"fire-perf",[TA]:"fire-perf-compat",[IA]:"fire-rc",[SA]:"fire-rc-compat",[kA]:"fire-gcs",[AA]:"fire-gcs-compat",[CA]:"fire-fst",[PA]:"fire-fst-compat",[RA]:"fire-vertex","fire-js":"fire-js",[NA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=new Map,OA=new Map,Yh=new Map;function bg(t,e){try{t.container.addComponent(e)}catch(n){Wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function In(t){const e=t.name;if(Yh.has(e))return Wn.debug(`There were multiple attempts to register component ${e}.`),!1;Yh.set(e,t);for(const n of Hl.values())bg(n,t);for(const n of OA.values())bg(n,t);return!0}function gi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ir=new mi("app","Firebase",bA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ir.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=xA;function P0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ir.create("bad-app-name",{appName:String(i)});if(n||(n=I0()),!n)throw Ir.create("no-options");const s=Hl.get(i);if(s){if(jo(n,s.options)&&jo(r,s.config))return s;throw Ir.create("duplicate-app",{appName:i})}const o=new Bk(i);for(const u of Yh.values())o.addComponent(u);const l=new LA(n,r,o);return Hl.set(i,l),l}function Ef(t=Qh){const e=Hl.get(t);if(!e&&t===Qh&&I0())return P0();if(!e)throw Ir.create("no-app",{appName:t});return e}function Kt(t,e,n){var r;let i=(r=DA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wn.warn(l.join(" "));return}In(new cn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA="firebase-heartbeat-database",MA=1,Fo="firebase-heartbeat-store";let $c=null;function N0(){return $c||($c=R0(VA,MA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Fo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ir.create("idb-open",{originalErrorMessage:t.message})})),$c}async function jA(t){try{const n=(await N0()).transaction(Fo),r=await n.objectStore(Fo).get(x0(t));return await n.done,r}catch(e){if(e instanceof dn)Wn.warn(e.message);else{const n=Ir.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wn.warn(n.message)}}}async function Lg(t,e){try{const r=(await N0()).transaction(Fo,"readwrite");await r.objectStore(Fo).put(e,x0(t)),await r.done}catch(n){if(n instanceof dn)Wn.warn(n.message);else{const r=Ir.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wn.warn(r.message)}}}function x0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA=1024,UA=30*24*60*60*1e3;class $A{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Vg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=UA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Wn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Vg(),{heartbeatsToSend:r,unsentEntries:i}=BA(this._heartbeatsCache.heartbeats),s=Wl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Wn.warn(n),""}}}function Vg(){return new Date().toISOString().substring(0,10)}function BA(t,e=FA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Mg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Mg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vf()?_f().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Lg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Lg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Mg(t){return Wl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WA(t){In(new cn("platform-logger",e=>new rA(e),"PRIVATE")),In(new cn("heartbeat",e=>new $A(e),"PRIVATE")),Kt(Gh,Og,t),Kt(Gh,Og,"esm2017"),Kt("fire-js","")}WA("");function Tf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function D0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HA=D0,O0=new mi("auth","Firebase",D0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=new Au("@firebase/auth");function qA(t,...e){ql.logLevel<=de.WARN&&ql.warn(`Auth (${ms}): ${t}`,...e)}function ul(t,...e){ql.logLevel<=de.ERROR&&ql.error(`Auth (${ms}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(t,...e){throw If(t,...e)}function _n(t,...e){return If(t,...e)}function b0(t,e,n){const r=Object.assign(Object.assign({},HA()),{[e]:n});return new mi("auth","Firebase",r).create(e,{appName:t.name})}function jn(t){return b0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function If(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return O0.create(t,...e)}function re(t,e,...n){if(!t)throw If(e,...n)}function bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ul(e),new Error(e)}function Hn(t,e){t||bn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function KA(){return jg()==="http:"||jg()==="https:"}function jg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(KA()||yf()||"connection"in navigator)?navigator.onLine:!0}function QA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n){this.shortDelay=e,this.longDelay=n,Hn(n>e,"Short delay should be less than long delay!"),this.isMobile=Tk()||kk()}get(){return GA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(t,e){Hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA=new na(3e4,6e4);function Lr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Vr(t,e,n,r,i={}){return V0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ta(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return Sk()||(c.referrerPolicy="no-referrer"),L0.fetch()(M0(t,t.config.apiHost,n,l),c)})}async function V0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},YA),e);try{const i=new ZA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ha(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ha(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ha(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ha(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw b0(t,f,c);hn(t,f)}}catch(i){if(i instanceof dn)throw i;hn(t,"network-request-failed",{message:String(i)})}}async function ra(t,e,n,r,i={}){const s=await Vr(t,e,n,r,i);return"mfaPendingCredential"in s&&hn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function M0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Sf(t.config,i):`${t.config.apiScheme}://${i}`}function XA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ZA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(_n(this.auth,"network-request-failed")),JA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ha(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=_n(t,e,r);return i.customData._tokenResponse=n,i}function Fg(t){return t!==void 0&&t.enterprise!==void 0}class eC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return XA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function tC(t,e){return Vr(t,"GET","/v2/recaptchaConfig",Lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nC(t,e){return Vr(t,"POST","/v1/accounts:delete",e)}async function j0(t,e){return Vr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rC(t,e=!1){const n=_t(t),r=await n.getIdToken(e),i=kf(r);re(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:fo(Bc(i.auth_time)),issuedAtTime:fo(Bc(i.iat)),expirationTime:fo(Bc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Bc(t){return Number(t)*1e3}function kf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ul("JWT malformed, contained fewer than 3 sections"),null;try{const i=E0(n);return i?JSON.parse(i):(ul("Failed to decode base64 JWT payload"),null)}catch(i){return ul("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ug(t){const e=kf(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof dn&&iC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function iC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fo(this.lastLoginAt),this.creationTime=fo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Uo(t,j0(n,{idToken:r}));re(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?F0(s.providerUserInfo):[],l=aC(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Xh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function oC(t){const e=_t(t);await Kl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function aC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function F0(t){return t.map(e=>{var{providerId:n}=e,r=Tf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lC(t,e){const n=await V0(t,{},async()=>{const r=ta({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=M0(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",L0.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function uC(t,e){return Vr(t,"POST","/v2/accounts:revokeToken",Lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ug(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){re(e.length!==0,"internal-error");const n=Ug(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await lC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ki;return r&&(re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(re(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(re(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ki,this.toJSON())}_performRefresh(){return bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ln{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Tf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Xh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Uo(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return rC(this,e)}reload(){return oC(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Kl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gn(this.auth.app))return Promise.reject(jn(this.auth));const e=await this.getIdToken();return await Uo(this,nC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,I=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:A,emailVerified:N,isAnonymous:M,providerData:$,stsTokenManager:E}=n;re(A&&E,e,"internal-error");const y=Ki.fromJSON(this.name,E);re(typeof A=="string",e,"internal-error"),er(p,e.name),er(g,e.name),re(typeof N=="boolean",e,"internal-error"),re(typeof M=="boolean",e,"internal-error"),er(I,e.name),er(R,e.name),er(P,e.name),er(O,e.name),er(w,e.name),er(_,e.name);const T=new Ln({uid:A,auth:e,email:g,emailVerified:N,displayName:p,isAnonymous:M,photoURL:R,phoneNumber:I,tenantId:P,stsTokenManager:y,createdAt:w,lastLoginAt:_});return $&&Array.isArray($)&&(T.providerData=$.map(k=>Object.assign({},k))),O&&(T._redirectEventId=O),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ki;i.updateFromServerResponse(n);const s=new Ln({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Kl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];re(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?F0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ki;l.updateFromIdToken(r);const u=new Ln({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Xh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=new Map;function Vn(t){Hn(t instanceof Function,"Expected a class definition");let e=$g.get(t);return e?(Hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$g.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}U0.type="NONE";const Bg=U0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(t,e,n){return`firebase:${t}:${e}:${n}`}class Gi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=cl(this.userKey,i.apiKey,s),this.fullPersistenceKey=cl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Gi(Vn(Bg),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Vn(Bg);const o=cl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){const p=Ln._fromJSON(e,f);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Gi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Gi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(W0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(q0(e))return"Blackberry";if(K0(e))return"Webos";if(B0(e))return"Safari";if((e.includes("chrome/")||z0(e))&&!e.includes("edge/"))return"Chrome";if(H0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $0(t=vt()){return/firefox\//i.test(t)}function B0(t=vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function z0(t=vt()){return/crios\//i.test(t)}function W0(t=vt()){return/iemobile/i.test(t)}function H0(t=vt()){return/android/i.test(t)}function q0(t=vt()){return/blackberry/i.test(t)}function K0(t=vt()){return/webos/i.test(t)}function Af(t=vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function cC(t=vt()){var e;return Af(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hC(){return Ak()&&document.documentMode===10}function G0(t=vt()){return Af(t)||H0(t)||K0(t)||q0(t)||/windows phone/i.test(t)||W0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(t,e=[]){let n;switch(t){case"Browser":n=zg(vt());break;case"Worker":n=`${zg(vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ms}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fC(t,e={}){return Vr(t,"GET","/v2/passwordPolicy",Lr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC=6;class mC{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:pC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wg(this),this.idTokenSubscription=new Wg(this),this.beforeStateQueue=new dC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=O0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Gi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await j0(this,{idToken:e}),r=await Ln._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(gn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Kl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gn(this.app))return Promise.reject(jn(this));const n=e?_t(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gn(this.app)?Promise.reject(jn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gn(this.app)?Promise.reject(jn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await fC(this),n=new mC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new mi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await uC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vn(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await Gi.create(this,[Vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Q0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function yi(t){return _t(t)}class Wg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dk(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yC(t){Cu=t}function Y0(t){return Cu.loadJS(t)}function vC(){return Cu.recaptchaEnterpriseScript}function _C(){return Cu.gapiScript}function wC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const EC="recaptcha-enterprise",TC="NO_RECAPTCHA";class IC{constructor(e){this.type=EC,this.auth=yi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{tC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new eC(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Fg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(TC)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Fg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=vC();u.length!==0&&(u+=l),Y0(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Hg(t,e,n,r=!1){const i=new IC(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Zh(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Hg(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Hg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(t,e){const n=gi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(jo(s,e??{}))return i;hn(i,"already-initialized")}return n.initialize({options:e})}function kC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function AC(t,e,n){const r=yi(t);re(r._canInitEmulator,r,"emulator-config-failed"),re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=J0(e),{host:o,port:l}=CC(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||RC()}function J0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function CC(t){const e=J0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:qg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:qg(o)}}}function qg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function RC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bn("not implemented")}_getIdTokenResponse(e){return bn("not implemented")}_linkToIdToken(e,n){return bn("not implemented")}_getReauthenticationResolver(e){return bn("not implemented")}}async function PC(t,e){return Vr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NC(t,e){return ra(t,"POST","/v1/accounts:signInWithPassword",Lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xC(t,e){return ra(t,"POST","/v1/accounts:signInWithEmailLink",Lr(t,e))}async function DC(t,e){return ra(t,"POST","/v1/accounts:signInWithEmailLink",Lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o extends Cf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new $o(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new $o(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zh(e,n,"signInWithPassword",NC);case"emailLink":return xC(e,{email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zh(e,r,"signUpPassword",PC);case"emailLink":return DC(e,{idToken:n,email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qi(t,e){return ra(t,"POST","/v1/accounts:signInWithIdp",Lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OC="http://localhost";class ii extends Cf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ii(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Tf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ii(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Qi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qi(e,n)}buildRequest(){const e={requestUri:OC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ta(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function LC(t){const e=Ys(Js(t)).link,n=e?Ys(Js(e)).deep_link_id:null,r=Ys(Js(t)).deep_link_id;return(r?Ys(Js(r)).link:null)||r||n||e||t}class Rf{constructor(e){var n,r,i,s,o,l;const u=Ys(Js(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,p=bC((i=u.mode)!==null&&i!==void 0?i:null);re(c&&f&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=LC(e);try{return new Rf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(){this.providerId=gs.PROVIDER_ID}static credential(e,n){return $o._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Rf.parseLink(n);return re(r,"argument-error"),$o._fromEmailAndCode(e,r.code,r.tenantId)}}gs.PROVIDER_ID="password";gs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";gs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia extends X0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends ia{constructor(){super("facebook.com")}static credential(e){return ii._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends ia{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ii._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return or.credential(n,r)}catch{return null}}}or.GOOGLE_SIGN_IN_METHOD="google.com";or.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends ia{constructor(){super("github.com")}static credential(e){return ii._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.GITHUB_SIGN_IN_METHOD="github.com";ar.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends ia{constructor(){super("twitter.com")}static credential(e,n){return ii._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.TWITTER_SIGN_IN_METHOD="twitter.com";lr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VC(t,e){return ra(t,"POST","/v1/accounts:signUp",Lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ln._fromIdTokenResponse(e,r,i),o=Kg(r);return new si({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Kg(r);return new si({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Kg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl extends dn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Gl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Gl(e,n,r,i)}}function Z0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Gl._fromErrorAndOperation(t,s,e,r):s})}async function MC(t,e,n=!1){const r=await Uo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return si._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jC(t,e,n=!1){const{auth:r}=t;if(gn(r.app))return Promise.reject(jn(r));const i="reauthenticate";try{const s=await Uo(t,Z0(r,i,e,t),n);re(s.idToken,r,"internal-error");const o=kf(s.idToken);re(o,r,"internal-error");const{sub:l}=o;return re(t.uid===l,r,"user-mismatch"),si._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&hn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ew(t,e,n=!1){if(gn(t.app))return Promise.reject(jn(t));const r="signIn",i=await Z0(t,r,e),s=await si._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function FC(t,e){return ew(yi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tw(t){const e=yi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function UC(t,e,n){if(gn(t.app))return Promise.reject(jn(t));const r=yi(t),o=await Zh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",VC).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&tw(t),u}),l=await si._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function $C(t,e,n){return gn(t.app)?Promise.reject(jn(t)):FC(_t(t),gs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&tw(t),r})}function BC(t,e,n,r){return _t(t).onIdTokenChanged(e,n,r)}function zC(t,e,n){return _t(t).beforeAuthStateChanged(e,n)}function WC(t,e,n,r){return _t(t).onAuthStateChanged(e,n,r)}function HC(t){return _t(t).signOut()}const Ql="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ql,"1"),this.storage.removeItem(Ql),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC=1e3,KC=10;class rw extends nw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=G0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);hC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,KC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},qC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rw.type="LOCAL";const GC=rw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw extends nw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}iw.type="SESSION";const sw=iw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ru(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await QC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ru.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Pf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(){return window}function JC(t){wn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(){return typeof wn().WorkerGlobalScope<"u"&&typeof wn().importScripts=="function"}async function XC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function eR(){return ow()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw="firebaseLocalStorageDb",tR=1,Yl="firebaseLocalStorage",lw="fbase_key";class sa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pu(t,e){return t.transaction([Yl],e?"readwrite":"readonly").objectStore(Yl)}function nR(){const t=indexedDB.deleteDatabase(aw);return new sa(t).toPromise()}function ed(){const t=indexedDB.open(aw,tR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yl,{keyPath:lw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yl)?e(r):(r.close(),await nR(),e(await ed()))})})}async function Gg(t,e,n){const r=Pu(t,!0).put({[lw]:e,value:n});return new sa(r).toPromise()}async function rR(t,e){const n=Pu(t,!1).get(e),r=await new sa(n).toPromise();return r===void 0?null:r.value}function Qg(t,e){const n=Pu(t,!0).delete(e);return new sa(n).toPromise()}const iR=800,sR=3;class uw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ed(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>sR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ow()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ru._getInstance(eR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await XC(),!this.activeServiceWorker)return;this.sender=new YC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ZC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ed();return await Gg(e,Ql,"1"),await Qg(e,Ql),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>rR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Pu(i,!1).getAll();return new sa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uw.type="LOCAL";const oR=uw;new na(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(t,e){return e?Vn(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf extends Cf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lR(t){return ew(t.auth,new Nf(t),t.bypassAuthState)}function uR(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),jC(n,new Nf(t),t.bypassAuthState)}async function cR(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),MC(n,new Nf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lR;case"linkViaPopup":case"linkViaRedirect":return cR;case"reauthViaPopup":case"reauthViaRedirect":return uR;default:hn(this.auth,"internal-error")}}resolve(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR=new na(2e3,1e4);class Ui extends cw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ui.currentPopupAction&&Ui.currentPopupAction.cancel(),Ui.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){Hn(this.filter.length===1,"Popup operations only handle one event");const e=Pf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ui.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hR.get())};e()}}Ui.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR="pendingRedirect",hl=new Map;class fR extends cw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=hl.get(this.auth._key());if(!e){try{const r=await pR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}hl.set(this.auth._key(),e)}return this.bypassAuthState||hl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pR(t,e){const n=yR(e),r=gR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function mR(t,e){hl.set(t._key(),e)}function gR(t){return Vn(t._redirectPersistence)}function yR(t){return cl(dR,t.config.apiKey,t.name)}async function vR(t,e,n=!1){if(gn(t.app))return Promise.reject(jn(t));const r=yi(t),i=aR(r,e),o=await new fR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=10*60*1e3;class wR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ER(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!hw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(_n(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_R&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yg(e))}saveEventToCache(e){this.cachedEventUids.add(Yg(e)),this.lastProcessedEventTime=Date.now()}}function Yg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ER(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TR(t,e={}){return Vr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,SR=/^https?/;async function kR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await TR(t);for(const n of e)try{if(AR(n))return}catch{}hn(t,"unauthorized-domain")}function AR(t){const e=Jh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!SR.test(n))return!1;if(IR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=new na(3e4,6e4);function Jg(){const t=wn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function RR(t){return new Promise((e,n)=>{var r,i,s;function o(){Jg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jg(),n(_n(t,"network-request-failed"))},timeout:CR.get()})}if(!((i=(r=wn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=wn().gapi)===null||s===void 0)&&s.load)o();else{const l=wC("iframefcb");return wn()[l]=()=>{gapi.load?o():n(_n(t,"network-request-failed"))},Y0(`${_C()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw dl=null,e})}let dl=null;function PR(t){return dl=dl||RR(t),dl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR=new na(5e3,15e3),xR="__/auth/iframe",DR="emulator/auth/iframe",OR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function LR(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Sf(e,DR):`https://${t.config.authDomain}/${xR}`,r={apiKey:e.apiKey,appName:t.name,v:ms},i=bR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ta(r).slice(1)}`}async function VR(t){const e=await PR(t),n=wn().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:LR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=_n(t,"network-request-failed"),l=wn().setTimeout(()=>{s(o)},NR.get());function u(){wn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jR=500,FR=600,UR="_blank",$R="http://localhost";class Xg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BR(t,e,n,r=jR,i=FR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},MR),{width:r.toString(),height:i.toString(),top:s,left:o}),c=vt().toLowerCase();n&&(l=z0(c)?UR:n),$0(c)&&(e=e||$R,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[I,R])=>`${g}${I}=${R},`,"");if(cC(c)&&l!=="_self")return zR(e||"",l),new Xg(null);const p=window.open(e||"",l,f);re(p,t,"popup-blocked");try{p.focus()}catch{}return new Xg(p)}function zR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR="__/auth/handler",HR="emulator/auth/handler",qR=encodeURIComponent("fac");async function Zg(t,e,n,r,i,s){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ms,eventId:i};if(e instanceof X0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",xk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries(s||{}))o[f]=p}if(e instanceof ia){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${qR}=${encodeURIComponent(u)}`:"";return`${KR(t)}?${ta(l).slice(1)}${c}`}function KR({config:t}){return t.emulator?Sf(t,HR):`https://${t.authDomain}/${WR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc="webStorageSupport";class GR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sw,this._completeRedirectFn=vR,this._overrideRedirectResult=mR}async _openPopup(e,n,r,i){var s;Hn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Zg(e,n,r,Jh(),i);return BR(e,o,Pf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Zg(e,n,r,Jh(),i);return JC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Hn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await VR(e),r=new wR(e);return n.register("authEvent",i=>(re(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zc,{type:zc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[zc];o!==void 0&&n(!!o),hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return G0()||B0()||Af()}}const QR=GR;var ey="@firebase/auth",ty="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XR(t){In(new cn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Q0(t)},c=new gC(r,i,s,u);return kC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),In(new cn("auth-internal",e=>{const n=yi(e.getProvider("auth").getImmediate());return(r=>new YR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kt(ey,ty,JR(t)),Kt(ey,ty,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR=5*60,eP=S0("authIdTokenMaxAge")||ZR;let ny=null;const tP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>eP)return;const i=n==null?void 0:n.token;ny!==i&&(ny=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function nP(t=Ef()){const e=gi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=SC(t,{popupRedirectResolver:QR,persistence:[oR,GC,sw]}),r=S0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=tP(s.toString());zC(n,o,()=>o(n.currentUser)),BC(n,l=>o(l))}}const i=T0("auth");return i&&AC(n,`http://${i}`),n}function rP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}yC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=_n("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",rP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XR("Browser");var iP="firebase",sP="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kt(iP,sP,"app");var ry=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xr,dw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function T(){}T.prototype=y.prototype,E.D=y.prototype,E.prototype=new T,E.prototype.constructor=E,E.C=function(k,C,x){for(var S=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)S[Q-2]=arguments[Q];return y.prototype[C].apply(k,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,y,T){T||(T=0);var k=Array(16);if(typeof y=="string")for(var C=0;16>C;++C)k[C]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(C=0;16>C;++C)k[C]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=E.g[0],T=E.g[1],C=E.g[2];var x=E.g[3],S=y+(x^T&(C^x))+k[0]+3614090360&4294967295;y=T+(S<<7&4294967295|S>>>25),S=x+(C^y&(T^C))+k[1]+3905402710&4294967295,x=y+(S<<12&4294967295|S>>>20),S=C+(T^x&(y^T))+k[2]+606105819&4294967295,C=x+(S<<17&4294967295|S>>>15),S=T+(y^C&(x^y))+k[3]+3250441966&4294967295,T=C+(S<<22&4294967295|S>>>10),S=y+(x^T&(C^x))+k[4]+4118548399&4294967295,y=T+(S<<7&4294967295|S>>>25),S=x+(C^y&(T^C))+k[5]+1200080426&4294967295,x=y+(S<<12&4294967295|S>>>20),S=C+(T^x&(y^T))+k[6]+2821735955&4294967295,C=x+(S<<17&4294967295|S>>>15),S=T+(y^C&(x^y))+k[7]+4249261313&4294967295,T=C+(S<<22&4294967295|S>>>10),S=y+(x^T&(C^x))+k[8]+1770035416&4294967295,y=T+(S<<7&4294967295|S>>>25),S=x+(C^y&(T^C))+k[9]+2336552879&4294967295,x=y+(S<<12&4294967295|S>>>20),S=C+(T^x&(y^T))+k[10]+4294925233&4294967295,C=x+(S<<17&4294967295|S>>>15),S=T+(y^C&(x^y))+k[11]+2304563134&4294967295,T=C+(S<<22&4294967295|S>>>10),S=y+(x^T&(C^x))+k[12]+1804603682&4294967295,y=T+(S<<7&4294967295|S>>>25),S=x+(C^y&(T^C))+k[13]+4254626195&4294967295,x=y+(S<<12&4294967295|S>>>20),S=C+(T^x&(y^T))+k[14]+2792965006&4294967295,C=x+(S<<17&4294967295|S>>>15),S=T+(y^C&(x^y))+k[15]+1236535329&4294967295,T=C+(S<<22&4294967295|S>>>10),S=y+(C^x&(T^C))+k[1]+4129170786&4294967295,y=T+(S<<5&4294967295|S>>>27),S=x+(T^C&(y^T))+k[6]+3225465664&4294967295,x=y+(S<<9&4294967295|S>>>23),S=C+(y^T&(x^y))+k[11]+643717713&4294967295,C=x+(S<<14&4294967295|S>>>18),S=T+(x^y&(C^x))+k[0]+3921069994&4294967295,T=C+(S<<20&4294967295|S>>>12),S=y+(C^x&(T^C))+k[5]+3593408605&4294967295,y=T+(S<<5&4294967295|S>>>27),S=x+(T^C&(y^T))+k[10]+38016083&4294967295,x=y+(S<<9&4294967295|S>>>23),S=C+(y^T&(x^y))+k[15]+3634488961&4294967295,C=x+(S<<14&4294967295|S>>>18),S=T+(x^y&(C^x))+k[4]+3889429448&4294967295,T=C+(S<<20&4294967295|S>>>12),S=y+(C^x&(T^C))+k[9]+568446438&4294967295,y=T+(S<<5&4294967295|S>>>27),S=x+(T^C&(y^T))+k[14]+3275163606&4294967295,x=y+(S<<9&4294967295|S>>>23),S=C+(y^T&(x^y))+k[3]+4107603335&4294967295,C=x+(S<<14&4294967295|S>>>18),S=T+(x^y&(C^x))+k[8]+1163531501&4294967295,T=C+(S<<20&4294967295|S>>>12),S=y+(C^x&(T^C))+k[13]+2850285829&4294967295,y=T+(S<<5&4294967295|S>>>27),S=x+(T^C&(y^T))+k[2]+4243563512&4294967295,x=y+(S<<9&4294967295|S>>>23),S=C+(y^T&(x^y))+k[7]+1735328473&4294967295,C=x+(S<<14&4294967295|S>>>18),S=T+(x^y&(C^x))+k[12]+2368359562&4294967295,T=C+(S<<20&4294967295|S>>>12),S=y+(T^C^x)+k[5]+4294588738&4294967295,y=T+(S<<4&4294967295|S>>>28),S=x+(y^T^C)+k[8]+2272392833&4294967295,x=y+(S<<11&4294967295|S>>>21),S=C+(x^y^T)+k[11]+1839030562&4294967295,C=x+(S<<16&4294967295|S>>>16),S=T+(C^x^y)+k[14]+4259657740&4294967295,T=C+(S<<23&4294967295|S>>>9),S=y+(T^C^x)+k[1]+2763975236&4294967295,y=T+(S<<4&4294967295|S>>>28),S=x+(y^T^C)+k[4]+1272893353&4294967295,x=y+(S<<11&4294967295|S>>>21),S=C+(x^y^T)+k[7]+4139469664&4294967295,C=x+(S<<16&4294967295|S>>>16),S=T+(C^x^y)+k[10]+3200236656&4294967295,T=C+(S<<23&4294967295|S>>>9),S=y+(T^C^x)+k[13]+681279174&4294967295,y=T+(S<<4&4294967295|S>>>28),S=x+(y^T^C)+k[0]+3936430074&4294967295,x=y+(S<<11&4294967295|S>>>21),S=C+(x^y^T)+k[3]+3572445317&4294967295,C=x+(S<<16&4294967295|S>>>16),S=T+(C^x^y)+k[6]+76029189&4294967295,T=C+(S<<23&4294967295|S>>>9),S=y+(T^C^x)+k[9]+3654602809&4294967295,y=T+(S<<4&4294967295|S>>>28),S=x+(y^T^C)+k[12]+3873151461&4294967295,x=y+(S<<11&4294967295|S>>>21),S=C+(x^y^T)+k[15]+530742520&4294967295,C=x+(S<<16&4294967295|S>>>16),S=T+(C^x^y)+k[2]+3299628645&4294967295,T=C+(S<<23&4294967295|S>>>9),S=y+(C^(T|~x))+k[0]+4096336452&4294967295,y=T+(S<<6&4294967295|S>>>26),S=x+(T^(y|~C))+k[7]+1126891415&4294967295,x=y+(S<<10&4294967295|S>>>22),S=C+(y^(x|~T))+k[14]+2878612391&4294967295,C=x+(S<<15&4294967295|S>>>17),S=T+(x^(C|~y))+k[5]+4237533241&4294967295,T=C+(S<<21&4294967295|S>>>11),S=y+(C^(T|~x))+k[12]+1700485571&4294967295,y=T+(S<<6&4294967295|S>>>26),S=x+(T^(y|~C))+k[3]+2399980690&4294967295,x=y+(S<<10&4294967295|S>>>22),S=C+(y^(x|~T))+k[10]+4293915773&4294967295,C=x+(S<<15&4294967295|S>>>17),S=T+(x^(C|~y))+k[1]+2240044497&4294967295,T=C+(S<<21&4294967295|S>>>11),S=y+(C^(T|~x))+k[8]+1873313359&4294967295,y=T+(S<<6&4294967295|S>>>26),S=x+(T^(y|~C))+k[15]+4264355552&4294967295,x=y+(S<<10&4294967295|S>>>22),S=C+(y^(x|~T))+k[6]+2734768916&4294967295,C=x+(S<<15&4294967295|S>>>17),S=T+(x^(C|~y))+k[13]+1309151649&4294967295,T=C+(S<<21&4294967295|S>>>11),S=y+(C^(T|~x))+k[4]+4149444226&4294967295,y=T+(S<<6&4294967295|S>>>26),S=x+(T^(y|~C))+k[11]+3174756917&4294967295,x=y+(S<<10&4294967295|S>>>22),S=C+(y^(x|~T))+k[2]+718787259&4294967295,C=x+(S<<15&4294967295|S>>>17),S=T+(x^(C|~y))+k[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(C+(S<<21&4294967295|S>>>11))&4294967295,E.g[2]=E.g[2]+C&4294967295,E.g[3]=E.g[3]+x&4294967295}r.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var T=y-this.blockSize,k=this.B,C=this.h,x=0;x<y;){if(C==0)for(;x<=T;)i(this,E,x),x+=this.blockSize;if(typeof E=="string"){for(;x<y;)if(k[C++]=E.charCodeAt(x++),C==this.blockSize){i(this,k),C=0;break}}else for(;x<y;)if(k[C++]=E[x++],C==this.blockSize){i(this,k),C=0;break}}this.h=C,this.o+=y},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var T=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=T&255,T/=256;for(this.u(E),E=Array(16),y=T=0;4>y;++y)for(var k=0;32>k;k+=8)E[T++]=this.g[y]>>>k&255;return E};function s(E,y){var T=l;return Object.prototype.hasOwnProperty.call(T,E)?T[E]:T[E]=y(E)}function o(E,y){this.h=y;for(var T=[],k=!0,C=E.length-1;0<=C;C--){var x=E[C]|0;k&&x==y||(T[C]=x,k=!1)}this.g=T}var l={};function u(E){return-128<=E&&128>E?s(E,function(y){return new o([y|0],0>y?-1:0)}):new o([E|0],0>E?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return O(c(-E));for(var y=[],T=1,k=0;E>=T;k++)y[k]=E/T|0,T*=4294967296;return new o(y,0)}function f(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return O(f(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(y,8)),k=p,C=0;C<E.length;C+=8){var x=Math.min(8,E.length-C),S=parseInt(E.substring(C,C+x),y);8>x?(x=c(Math.pow(y,x)),k=k.j(x).add(c(S))):(k=k.j(T),k=k.add(c(S)))}return k}var p=u(0),g=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-O(this).m();for(var E=0,y=1,T=0;T<this.g.length;T++){var k=this.i(T);E+=(0<=k?k:4294967296+k)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(R(this))return"0";if(P(this))return"-"+O(this).toString(E);for(var y=c(Math.pow(E,6)),T=this,k="";;){var C=N(T,y).g;T=w(T,C.j(y));var x=((0<T.g.length?T.g[0]:T.h)>>>0).toString(E);if(T=C,R(T))return x+k;for(;6>x.length;)x="0"+x;k=x+k}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function R(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function P(E){return E.h==-1}t.l=function(E){return E=w(this,E),P(E)?-1:R(E)?0:1};function O(E){for(var y=E.g.length,T=[],k=0;k<y;k++)T[k]=~E.g[k];return new o(T,~E.h).add(g)}t.abs=function(){return P(this)?O(this):this},t.add=function(E){for(var y=Math.max(this.g.length,E.g.length),T=[],k=0,C=0;C<=y;C++){var x=k+(this.i(C)&65535)+(E.i(C)&65535),S=(x>>>16)+(this.i(C)>>>16)+(E.i(C)>>>16);k=S>>>16,x&=65535,S&=65535,T[C]=S<<16|x}return new o(T,T[T.length-1]&-2147483648?-1:0)};function w(E,y){return E.add(O(y))}t.j=function(E){if(R(this)||R(E))return p;if(P(this))return P(E)?O(this).j(O(E)):O(O(this).j(E));if(P(E))return O(this.j(O(E)));if(0>this.l(I)&&0>E.l(I))return c(this.m()*E.m());for(var y=this.g.length+E.g.length,T=[],k=0;k<2*y;k++)T[k]=0;for(k=0;k<this.g.length;k++)for(var C=0;C<E.g.length;C++){var x=this.i(k)>>>16,S=this.i(k)&65535,Q=E.i(C)>>>16,ce=E.i(C)&65535;T[2*k+2*C]+=S*ce,_(T,2*k+2*C),T[2*k+2*C+1]+=x*ce,_(T,2*k+2*C+1),T[2*k+2*C+1]+=S*Q,_(T,2*k+2*C+1),T[2*k+2*C+2]+=x*Q,_(T,2*k+2*C+2)}for(k=0;k<y;k++)T[k]=T[2*k+1]<<16|T[2*k];for(k=y;k<2*y;k++)T[k]=0;return new o(T,0)};function _(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function A(E,y){this.g=E,this.h=y}function N(E,y){if(R(y))throw Error("division by zero");if(R(E))return new A(p,p);if(P(E))return y=N(O(E),y),new A(O(y.g),O(y.h));if(P(y))return y=N(E,O(y)),new A(O(y.g),y.h);if(30<E.g.length){if(P(E)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var T=g,k=y;0>=k.l(E);)T=M(T),k=M(k);var C=$(T,1),x=$(k,1);for(k=$(k,2),T=$(T,2);!R(k);){var S=x.add(k);0>=S.l(E)&&(C=C.add(T),x=S),k=$(k,1),T=$(T,1)}return y=w(E,C.j(y)),new A(C,y)}for(C=p;0<=E.l(y);){for(T=Math.max(1,Math.floor(E.m()/y.m())),k=Math.ceil(Math.log(T)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),x=c(T),S=x.j(y);P(S)||0<S.l(E);)T-=k,x=c(T),S=x.j(y);R(x)&&(x=g),C=C.add(x),E=w(E,S)}return new A(C,E)}t.A=function(E){return N(this,E).h},t.and=function(E){for(var y=Math.max(this.g.length,E.g.length),T=[],k=0;k<y;k++)T[k]=this.i(k)&E.i(k);return new o(T,this.h&E.h)},t.or=function(E){for(var y=Math.max(this.g.length,E.g.length),T=[],k=0;k<y;k++)T[k]=this.i(k)|E.i(k);return new o(T,this.h|E.h)},t.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),T=[],k=0;k<y;k++)T[k]=this.i(k)^E.i(k);return new o(T,this.h^E.h)};function M(E){for(var y=E.g.length+1,T=[],k=0;k<y;k++)T[k]=E.i(k)<<1|E.i(k-1)>>>31;return new o(T,E.h)}function $(E,y){var T=y>>5;y%=32;for(var k=E.g.length-T,C=[],x=0;x<k;x++)C[x]=0<y?E.i(x+T)>>>y|E.i(x+T+1)<<32-y:E.i(x+T);return new o(C,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,dw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Xr=o}).apply(typeof ry<"u"?ry:typeof self<"u"?self:typeof window<"u"?window:{});var qa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fw,Xs,pw,fl,td,mw,gw,yw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof qa=="object"&&qa];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var D=a[m];if(!(D in d))break e;d=d[D]}a=a[a.length-1],m=d[a],h=h(m),h!=m&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var d=0,m=!1,D={next:function(){if(!m&&d<a.length){var b=d++;return{value:h(b,a[b]),done:!1}}return m=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,m),a.apply(h,D)}}return function(){return a.apply(h,arguments)}}function g(a,h,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function I(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function R(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,D,b){for(var q=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)q[Te-2]=arguments[Te];return h.prototype[D].apply(m,q)}}function P(a){const h=a.length;if(0<h){const d=Array(h);for(let m=0;m<h;m++)d[m]=a[m];return d}return[]}function O(a,h){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const D=a.length||0,b=m.length||0;a.length=D+b;for(let q=0;q<b;q++)a[D+q]=m[q]}else a.push(m)}}class w{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function _(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function N(a){return N[" "](a),a}N[" "]=function(){};var M=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function $(a,h,d){for(const m in a)h.call(d,a[m],m,a)}function E(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function y(a){const h={};for(const d in a)h[d]=a[d];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(a,h){let d,m;for(let D=1;D<arguments.length;D++){m=arguments[D];for(d in m)a[d]=m[d];for(let b=0;b<T.length;b++)d=T[b],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function C(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function x(a){l.setTimeout(()=>{throw a},0)}function S(){var a=te;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Q{constructor(){this.h=this.g=null}add(h,d){const m=ce.get();m.set(h,d),this.h?this.h.next=m:this.g=m,this.h=m}}var ce=new w(()=>new Ie,a=>a.reset());class Ie{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ke,K=!1,te=new Q,ne=()=>{const a=l.Promise.resolve(void 0);ke=()=>{a.then(ve)}};var ve=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(d){x(d)}var h=ce;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}K=!1};function fe(){this.s=this.s,this.C=this.C}fe.prototype.s=!1,fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function De(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}De.prototype.h=function(){this.defaultPrevented=!0};var Yt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a}();function Jt(a,h){if(De.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(M){e:{try{N(h.nodeName);var D=!0;break e}catch{}D=!1}D||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Xt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Jt.aa.h.call(this)}}R(Jt,De);var Xt={2:"touch",3:"pen",4:"mouse"};Jt.prototype.h=function(){Jt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var $t="closure_listenable_"+(1e6*Math.random()|0),L=0;function W(a,h,d,m,D){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!m,this.ha=D,this.key=++L,this.da=this.fa=!1}function j(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function H(a){this.src=a,this.g={},this.h=0}H.prototype.add=function(a,h,d,m,D){var b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);var q=Y(a,h,m,D);return-1<q?(h=a[q],d||(h.fa=!1)):(h=new W(h,this.src,b,!!m,D),h.fa=d,a.push(h)),h};function z(a,h){var d=h.type;if(d in a.g){var m=a.g[d],D=Array.prototype.indexOf.call(m,h,void 0),b;(b=0<=D)&&Array.prototype.splice.call(m,D,1),b&&(j(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Y(a,h,d,m){for(var D=0;D<a.length;++D){var b=a[D];if(!b.da&&b.listener==h&&b.capture==!!d&&b.ha==m)return D}return-1}var X="closure_lm_"+(1e6*Math.random()|0),ae={};function Ee(a,h,d,m,D){if(m&&m.once)return le(a,h,d,m,D);if(Array.isArray(h)){for(var b=0;b<h.length;b++)Ee(a,h[b],d,m,D);return null}return d=Ku(d),a&&a[$t]?a.K(h,d,c(m)?!!m.capture:!!m,D):Ae(a,h,d,!1,m,D)}function Ae(a,h,d,m,D,b){if(!h)throw Error("Invalid event type");var q=c(D)?!!D.capture:!!D,Te=Cn(a);if(Te||(a[X]=Te=new H(a)),d=Te.add(h,d,m,q,b),d.proxy)return d;if(m=Ze(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)Yt||(D=q),D===void 0&&(D=!1),a.addEventListener(h.toString(),m,D);else if(a.attachEvent)a.attachEvent(An(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Ze(){function a(d){return h.call(a.src,a.listener,d)}const h=Mr;return a}function le(a,h,d,m,D){if(Array.isArray(h)){for(var b=0;b<h.length;b++)le(a,h[b],d,m,D);return null}return d=Ku(d),a&&a[$t]?a.L(h,d,c(m)?!!m.capture:!!m,D):Ae(a,h,d,!0,m,D)}function Fe(a,h,d,m,D){if(Array.isArray(h))for(var b=0;b<h.length;b++)Fe(a,h[b],d,m,D);else m=c(m)?!!m.capture:!!m,d=Ku(d),a&&a[$t]?(a=a.i,h=String(h).toString(),h in a.g&&(b=a.g[h],d=Y(b,d,m,D),-1<d&&(j(b[d]),Array.prototype.splice.call(b,d,1),b.length==0&&(delete a.g[h],a.h--)))):a&&(a=Cn(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Y(h,d,m,D)),(d=-1<a?h[a]:null)&&Ue(d))}function Ue(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[$t])z(h.i,a);else{var d=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(d,m,a.capture):h.detachEvent?h.detachEvent(An(d),m):h.addListener&&h.removeListener&&h.removeListener(m),(d=Cn(h))?(z(d,a),d.h==0&&(d.src=null,h[X]=null)):j(a)}}}function An(a){return a in ae?ae[a]:ae[a]="on"+a}function Mr(a,h){if(a.da)a=!0;else{h=new Jt(h,this);var d=a.listener,m=a.ha||a.src;a.fa&&Ue(a),a=d.call(m,h)}return a}function Cn(a){return a=a[X],a instanceof H?a:null}var qu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ku(a){return typeof a=="function"?a:(a[qu]||(a[qu]=function(h){return a.handleEvent(h)}),a[qu])}function lt(){fe.call(this),this.i=new H(this),this.M=this,this.F=null}R(lt,fe),lt.prototype[$t]=!0,lt.prototype.removeEventListener=function(a,h,d,m){Fe(this,a,h,d,m)};function wt(a,h){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new De(h,a);else if(h instanceof De)h.target=h.target||a;else{var D=h;h=new De(m,a),k(h,D)}if(D=!0,d)for(var b=d.length-1;0<=b;b--){var q=h.g=d[b];D=da(q,m,!0,h)&&D}if(q=h.g=a,D=da(q,m,!0,h)&&D,D=da(q,m,!1,h)&&D,d)for(b=0;b<d.length;b++)q=h.g=d[b],D=da(q,m,!1,h)&&D}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],m=0;m<d.length;m++)j(d[m]);delete a.g[h],a.h--}}this.F=null},lt.prototype.K=function(a,h,d,m){return this.i.add(String(a),h,!1,d,m)},lt.prototype.L=function(a,h,d,m){return this.i.add(String(a),h,!0,d,m)};function da(a,h,d,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var D=!0,b=0;b<h.length;++b){var q=h[b];if(q&&!q.da&&q.capture==d){var Te=q.listener,et=q.ha||q.src;q.fa&&z(a.i,q),D=Te.call(et,m)!==!1&&D}}return D&&!m.defaultPrevented}function mp(a,h,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function gp(a){a.g=mp(()=>{a.g=null,a.i&&(a.i=!1,gp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class uT extends fe{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:gp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Is(a){fe.call(this),this.h=a,this.g={}}R(Is,fe);var yp=[];function vp(a){$(a.g,function(h,d){this.g.hasOwnProperty(d)&&Ue(h)},a),a.g={}}Is.prototype.N=function(){Is.aa.N.call(this),vp(this)},Is.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gu=l.JSON.stringify,cT=l.JSON.parse,hT=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Qu(){}Qu.prototype.h=null;function _p(a){return a.h||(a.h=a.i())}function wp(){}var Ss={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Yu(){De.call(this,"d")}R(Yu,De);function Ju(){De.call(this,"c")}R(Ju,De);var jr={},Ep=null;function fa(){return Ep=Ep||new lt}jr.La="serverreachability";function Tp(a){De.call(this,jr.La,a)}R(Tp,De);function ks(a){const h=fa();wt(h,new Tp(h))}jr.STAT_EVENT="statevent";function Ip(a,h){De.call(this,jr.STAT_EVENT,a),this.stat=h}R(Ip,De);function Et(a){const h=fa();wt(h,new Ip(h,a))}jr.Ma="timingevent";function Sp(a,h){De.call(this,jr.Ma,a),this.size=h}R(Sp,De);function As(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Cs(){this.g=!0}Cs.prototype.xa=function(){this.g=!1};function dT(a,h,d,m,D,b){a.info(function(){if(a.g)if(b)for(var q="",Te=b.split("&"),et=0;et<Te.length;et++){var ge=Te[et].split("=");if(1<ge.length){var ut=ge[0];ge=ge[1];var ct=ut.split("_");q=2<=ct.length&&ct[1]=="type"?q+(ut+"="+ge+"&"):q+(ut+"=redacted&")}}else q=null;else q=b;return"XMLHTTP REQ ("+m+") [attempt "+D+"]: "+h+`
`+d+`
`+q})}function fT(a,h,d,m,D,b,q){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+D+"]: "+h+`
`+d+`
`+b+" "+q})}function wi(a,h,d,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+mT(a,d)+(m?" "+m:"")})}function pT(a,h){a.info(function(){return"TIMEOUT: "+h})}Cs.prototype.info=function(){};function mT(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var D=m[1];if(Array.isArray(D)&&!(1>D.length)){var b=D[0];if(b!="noop"&&b!="stop"&&b!="close")for(var q=1;q<D.length;q++)D[q]=""}}}}return Gu(d)}catch{return h}}var pa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},kp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xu;function ma(){}R(ma,Qu),ma.prototype.g=function(){return new XMLHttpRequest},ma.prototype.i=function(){return{}},Xu=new ma;function Yn(a,h,d,m){this.j=a,this.i=h,this.l=d,this.R=m||1,this.U=new Is(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ap}function Ap(){this.i=null,this.g="",this.h=!1}var Cp={},Zu={};function ec(a,h,d){a.L=1,a.v=_a(Rn(h)),a.m=d,a.P=!0,Rp(a,null)}function Rp(a,h){a.F=Date.now(),ga(a),a.A=Rn(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Bp(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Ap,a.g=om(a.j,d?h:null,!a.m),0<a.O&&(a.M=new uT(g(a.Y,a,a.g),a.O)),h=a.U,d=a.g,m=a.ca;var D="readystatechange";Array.isArray(D)||(D&&(yp[0]=D.toString()),D=yp);for(var b=0;b<D.length;b++){var q=Ee(d,D[b],m||h.handleEvent,!1,h.h||h);if(!q)break;h.g[q.key]=q}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ks(),dT(a.i,a.u,a.A,a.l,a.R,a.m)}Yn.prototype.ca=function(a){a=a.target;const h=this.M;h&&Pn(a)==3?h.j():this.Y(a)},Yn.prototype.Y=function(a){try{if(a==this.g)e:{const ct=Pn(this.g);var h=this.g.Ba();const Ii=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||Qp(this.g)))){this.J||ct!=4||h==7||(h==8||0>=Ii?ks(3):ks(2)),tc(this);var d=this.g.Z();this.X=d;t:if(Pp(this)){var m=Qp(this.g);a="";var D=m.length,b=Pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fr(this),Rs(this);var q="";break t}this.h.i=new l.TextDecoder}for(h=0;h<D;h++)this.h.h=!0,a+=this.h.i.decode(m[h],{stream:!(b&&h==D-1)});m.length=0,this.h.g+=a,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=d==200,fT(this.i,this.u,this.A,this.l,this.R,ct,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Te,et=this.g;if((Te=et.g?et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(Te)){var ge=Te;break t}}ge=null}if(d=ge)wi(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,nc(this,d);else{this.o=!1,this.s=3,Et(12),Fr(this),Rs(this);break e}}if(this.P){d=!0;let Zt;for(;!this.J&&this.C<q.length;)if(Zt=gT(this,q),Zt==Zu){ct==4&&(this.s=4,Et(14),d=!1),wi(this.i,this.l,null,"[Incomplete Response]");break}else if(Zt==Cp){this.s=4,Et(15),wi(this.i,this.l,q,"[Invalid Chunk]"),d=!1;break}else wi(this.i,this.l,Zt,null),nc(this,Zt);if(Pp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||q.length!=0||this.h.h||(this.s=1,Et(16),d=!1),this.o=this.o&&d,!d)wi(this.i,this.l,q,"[Invalid Chunked Response]"),Fr(this),Rs(this);else if(0<q.length&&!this.W){this.W=!0;var ut=this.j;ut.g==this&&ut.ba&&!ut.M&&(ut.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),lc(ut),ut.M=!0,Et(11))}}else wi(this.i,this.l,q,null),nc(this,q);ct==4&&Fr(this),this.o&&!this.J&&(ct==4?nm(this.j,this):(this.o=!1,ga(this)))}else OT(this.g),d==400&&0<q.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),Fr(this),Rs(this)}}}catch{}finally{}};function Pp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function gT(a,h){var d=a.C,m=h.indexOf(`
`,d);return m==-1?Zu:(d=Number(h.substring(d,m)),isNaN(d)?Cp:(m+=1,m+d>h.length?Zu:(h=h.slice(m,m+d),a.C=m+d,h)))}Yn.prototype.cancel=function(){this.J=!0,Fr(this)};function ga(a){a.S=Date.now()+a.I,Np(a,a.I)}function Np(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=As(g(a.ba,a),h)}function tc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Yn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(pT(this.i,this.A),this.L!=2&&(ks(),Et(17)),Fr(this),this.s=2,Rs(this)):Np(this,this.S-a)};function Rs(a){a.j.G==0||a.J||nm(a.j,a)}function Fr(a){tc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,vp(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function nc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||rc(d.h,a))){if(!a.K&&rc(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var D=m;if(D[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)ka(d),Ia(d);else break e;ac(d),Et(18)}}else d.za=D[1],0<d.za-d.T&&37500>D[2]&&d.F&&d.v==0&&!d.C&&(d.C=As(g(d.Za,d),6e3));if(1>=Op(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else $r(d,11)}else if((a.K||d.g==a)&&ka(d),!_(h))for(D=d.Da.g.parse(h),h=0;h<D.length;h++){let ge=D[h];if(d.T=ge[0],ge=ge[1],d.G==2)if(ge[0]=="c"){d.K=ge[1],d.ia=ge[2];const ut=ge[3];ut!=null&&(d.la=ut,d.j.info("VER="+d.la));const ct=ge[4];ct!=null&&(d.Aa=ct,d.j.info("SVER="+d.Aa));const Ii=ge[5];Ii!=null&&typeof Ii=="number"&&0<Ii&&(m=1.5*Ii,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Zt=a.g;if(Zt){const Ca=Zt.g?Zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ca){var b=m.h;b.g||Ca.indexOf("spdy")==-1&&Ca.indexOf("quic")==-1&&Ca.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(ic(b,b.h),b.h=null))}if(m.D){const uc=Zt.g?Zt.g.getResponseHeader("X-HTTP-Session-Id"):null;uc&&(m.ya=uc,Ce(m.I,m.D,uc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var q=a;if(m.qa=sm(m,m.J?m.ia:null,m.W),q.K){bp(m.h,q);var Te=q,et=m.L;et&&(Te.I=et),Te.B&&(tc(Te),ga(Te)),m.g=q}else em(m);0<d.i.length&&Sa(d)}else ge[0]!="stop"&&ge[0]!="close"||$r(d,7);else d.G==3&&(ge[0]=="stop"||ge[0]=="close"?ge[0]=="stop"?$r(d,7):oc(d):ge[0]!="noop"&&d.l&&d.l.ta(ge),d.v=0)}}ks(4)}catch{}}var yT=class{constructor(a,h){this.g=a,this.map=h}};function xp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Dp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Op(a){return a.h?1:a.g?a.g.size:0}function rc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ic(a,h){a.g?a.g.add(h):a.h=h}function bp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}xp.prototype.cancel=function(){if(this.i=Lp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Lp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return P(a.i)}function vT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],d=a.length,m=0;m<d;m++)h.push(a[m]);return h}h=[],d=0;for(m in a)h[d++]=a[m];return h}function _T(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const m in a)h[d++]=m;return h}}}function Vp(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=_T(a),m=vT(a),D=m.length,b=0;b<D;b++)h.call(void 0,m[b],d&&d[b],a)}var Mp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wT(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),D=null;if(0<=m){var b=a[d].substring(0,m);D=a[d].substring(m+1)}else b=a[d];h(b,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Ur(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Ur){this.h=a.h,ya(this,a.j),this.o=a.o,this.g=a.g,va(this,a.s),this.l=a.l;var h=a.i,d=new xs;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),jp(this,d),this.m=a.m}else a&&(h=String(a).match(Mp))?(this.h=!1,ya(this,h[1]||"",!0),this.o=Ps(h[2]||""),this.g=Ps(h[3]||"",!0),va(this,h[4]),this.l=Ps(h[5]||"",!0),jp(this,h[6]||"",!0),this.m=Ps(h[7]||"")):(this.h=!1,this.i=new xs(null,this.h))}Ur.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ns(h,Fp,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ns(h,Fp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ns(d,d.charAt(0)=="/"?IT:TT,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ns(d,kT)),a.join("")};function Rn(a){return new Ur(a)}function ya(a,h,d){a.j=d?Ps(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function va(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function jp(a,h,d){h instanceof xs?(a.i=h,AT(a.i,a.h)):(d||(h=Ns(h,ST)),a.i=new xs(h,a.h))}function Ce(a,h,d){a.i.set(h,d)}function _a(a){return Ce(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ps(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ns(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,ET),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ET(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Fp=/[#\/\?@]/g,TT=/[#\?:]/g,IT=/[#\?]/g,ST=/[#\?@]/g,kT=/#/g;function xs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Jn(a){a.g||(a.g=new Map,a.h=0,a.i&&wT(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=xs.prototype,t.add=function(a,h){Jn(this),this.i=null,a=Ei(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Up(a,h){Jn(a),h=Ei(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function $p(a,h){return Jn(a),h=Ei(a,h),a.g.has(h)}t.forEach=function(a,h){Jn(this),this.g.forEach(function(d,m){d.forEach(function(D){a.call(h,D,m,this)},this)},this)},t.na=function(){Jn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let m=0;m<h.length;m++){const D=a[m];for(let b=0;b<D.length;b++)d.push(h[m])}return d},t.V=function(a){Jn(this);let h=[];if(typeof a=="string")$p(this,a)&&(h=h.concat(this.g.get(Ei(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return Jn(this),this.i=null,a=Ei(this,a),$p(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Bp(a,h,d){Up(a,h),0<d.length&&(a.i=null,a.g.set(Ei(a,h),P(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var m=h[d];const b=encodeURIComponent(String(m)),q=this.V(m);for(m=0;m<q.length;m++){var D=b;q[m]!==""&&(D+="="+encodeURIComponent(String(q[m]))),a.push(D)}}return this.i=a.join("&")};function Ei(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function AT(a,h){h&&!a.j&&(Jn(a),a.i=null,a.g.forEach(function(d,m){var D=m.toLowerCase();m!=D&&(Up(this,m),Bp(this,D,d))},a)),a.j=h}function CT(a,h){const d=new Cs;if(l.Image){const m=new Image;m.onload=I(Xn,d,"TestLoadImage: loaded",!0,h,m),m.onerror=I(Xn,d,"TestLoadImage: error",!1,h,m),m.onabort=I(Xn,d,"TestLoadImage: abort",!1,h,m),m.ontimeout=I(Xn,d,"TestLoadImage: timeout",!1,h,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function RT(a,h){const d=new Cs,m=new AbortController,D=setTimeout(()=>{m.abort(),Xn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(b=>{clearTimeout(D),b.ok?Xn(d,"TestPingServer: ok",!0,h):Xn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),Xn(d,"TestPingServer: error",!1,h)})}function Xn(a,h,d,m,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),m(d)}catch{}}function PT(){this.g=new hT}function NT(a,h,d){const m=d||"";try{Vp(a,function(D,b){let q=D;c(D)&&(q=Gu(D)),h.push(m+b+"="+encodeURIComponent(q))})}catch(D){throw h.push(m+"type="+encodeURIComponent("_badmap")),D}}function wa(a){this.l=a.Ub||null,this.j=a.eb||!1}R(wa,Qu),wa.prototype.g=function(){return new Ea(this.l,this.j)},wa.prototype.i=function(a){return function(){return a}}({});function Ea(a,h){lt.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Ea,lt),t=Ea.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Os(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ds(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Os(this)),this.g&&(this.readyState=3,Os(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;zp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function zp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ds(this):Os(this),this.readyState==3&&zp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ds(this))},t.Qa=function(a){this.g&&(this.response=a,Ds(this))},t.ga=function(){this.g&&Ds(this)};function Ds(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Os(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Os(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ea.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Wp(a){let h="";return $(a,function(d,m){h+=m,h+=":",h+=d,h+=`\r
`}),h}function sc(a,h,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Wp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Ce(a,h,d))}function Me(a){lt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Me,lt);var xT=/^https?$/i,DT=["POST","PUT"];t=Me.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xu.g(),this.v=this.o?_p(this.o):_p(Xu),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(b){Hp(this,b);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var D in m)d.set(D,m[D]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const b of m.keys())d.set(b,m.get(b));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(b=>b.toLowerCase()=="content-type"),D=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(DT,h,void 0))||m||D||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,q]of d)this.g.setRequestHeader(b,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gp(this),this.u=!0,this.g.send(a),this.u=!1}catch(b){Hp(this,b)}};function Hp(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,qp(a),Ta(a)}function qp(a){a.A||(a.A=!0,wt(a,"complete"),wt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,wt(this,"complete"),wt(this,"abort"),Ta(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ta(this,!0)),Me.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Kp(this):this.bb())},t.bb=function(){Kp(this)};function Kp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Pn(a)!=4||a.Z()!=2)){if(a.u&&Pn(a)==4)mp(a.Ea,0,a);else if(wt(a,"readystatechange"),Pn(a)==4){a.h=!1;try{const q=a.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var m;if(m=q===0){var D=String(a.D).match(Mp)[1]||null;!D&&l.self&&l.self.location&&(D=l.self.location.protocol.slice(0,-1)),m=!xT.test(D?D.toLowerCase():"")}d=m}if(d)wt(a,"complete"),wt(a,"success");else{a.m=6;try{var b=2<Pn(a)?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.Z()+"]",qp(a)}}finally{Ta(a)}}}}function Ta(a,h){if(a.g){Gp(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||wt(a,"ready");try{d.onreadystatechange=m}catch{}}}function Gp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Pn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Pn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),cT(h)}};function Qp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function OT(a){const h={};a=(a.g&&2<=Pn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(_(a[m]))continue;var d=C(a[m]);const D=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const b=h[D]||[];h[D]=b,b.push(d)}E(h,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function bs(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Yp(a){this.Aa=0,this.i=[],this.j=new Cs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=bs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=bs("baseRetryDelayMs",5e3,a),this.cb=bs("retryDelaySeedMs",1e4,a),this.Wa=bs("forwardChannelMaxRetries",2,a),this.wa=bs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new xp(a&&a.concurrentRequestLimit),this.Da=new PT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Yp.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,m){Et(0),this.W=a,this.H=h||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=sm(this,null,this.W),Sa(this)};function oc(a){if(Jp(a),a.G==3){var h=a.U++,d=Rn(a.I);if(Ce(d,"SID",a.K),Ce(d,"RID",h),Ce(d,"TYPE","terminate"),Ls(a,d),h=new Yn(a,a.j,h),h.L=2,h.v=_a(Rn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=om(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ga(h)}im(a)}function Ia(a){a.g&&(lc(a),a.g.cancel(),a.g=null)}function Jp(a){Ia(a),a.u&&(l.clearTimeout(a.u),a.u=null),ka(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Sa(a){if(!Dp(a.h)&&!a.s){a.s=!0;var h=a.Ga;ke||ne(),K||(ke(),K=!0),te.add(h,a),a.B=0}}function bT(a,h){return Op(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=As(g(a.Ga,a,h),rm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new Yn(this,this.j,a);let b=this.o;if(this.S&&(b?(b=y(b),k(b,this.S)):b=this.S),this.m!==null||this.O||(D.H=b,b=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Zp(this,D,h),d=Rn(this.I),Ce(d,"RID",a),Ce(d,"CVER",22),this.D&&Ce(d,"X-HTTP-Session-Id",this.D),Ls(this,d),b&&(this.O?h="headers="+encodeURIComponent(String(Wp(b)))+"&"+h:this.m&&sc(d,this.m,b)),ic(this.h,D),this.Ua&&Ce(d,"TYPE","init"),this.P?(Ce(d,"$req",h),Ce(d,"SID","null"),D.T=!0,ec(D,d,null)):ec(D,d,h),this.G=2}}else this.G==3&&(a?Xp(this,a):this.i.length==0||Dp(this.h)||Xp(this))};function Xp(a,h){var d;h?d=h.l:d=a.U++;const m=Rn(a.I);Ce(m,"SID",a.K),Ce(m,"RID",d),Ce(m,"AID",a.T),Ls(a,m),a.m&&a.o&&sc(m,a.m,a.o),d=new Yn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Zp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ic(a.h,d),ec(d,m,h)}function Ls(a,h){a.H&&$(a.H,function(d,m){Ce(h,m,d)}),a.l&&Vp({},function(d,m){Ce(h,m,d)})}function Zp(a,h,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var D=a.i;let b=-1;for(;;){const q=["count="+d];b==-1?0<d?(b=D[0].g,q.push("ofs="+b)):b=0:q.push("ofs="+b);let Te=!0;for(let et=0;et<d;et++){let ge=D[et].g;const ut=D[et].map;if(ge-=b,0>ge)b=Math.max(0,D[et].g-100),Te=!1;else try{NT(ut,q,"req"+ge+"_")}catch{m&&m(ut)}}if(Te){m=q.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,m}function em(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ke||ne(),K||(ke(),K=!0),te.add(h,a),a.v=0}}function ac(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=As(g(a.Fa,a),rm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,tm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=As(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),Ia(this),tm(this))};function lc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function tm(a){a.g=new Yn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Rn(a.qa);Ce(h,"RID","rpc"),Ce(h,"SID",a.K),Ce(h,"AID",a.T),Ce(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ce(h,"TO",a.ja),Ce(h,"TYPE","xmlhttp"),Ls(a,h),a.m&&a.o&&sc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=_a(Rn(h)),d.m=null,d.P=!0,Rp(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Ia(this),ac(this),Et(19))};function ka(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function nm(a,h){var d=null;if(a.g==h){ka(a),lc(a),a.g=null;var m=2}else if(rc(a.h,h))d=h.D,bp(a.h,h),m=1;else return;if(a.G!=0){if(h.o)if(m==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var D=a.B;m=fa(),wt(m,new Sp(m,d)),Sa(a)}else em(a);else if(D=h.s,D==3||D==0&&0<h.X||!(m==1&&bT(a,h)||m==2&&ac(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),D){case 1:$r(a,5);break;case 4:$r(a,10);break;case 3:$r(a,6);break;default:$r(a,2)}}}function rm(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function $r(a,h){if(a.j.info("Error code "+h),h==2){var d=g(a.fb,a),m=a.Xa;const D=!m;m=new Ur(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ya(m,"https"),_a(m),D?CT(m.toString(),d):RT(m.toString(),d)}else Et(2);a.G=0,a.l&&a.l.sa(h),im(a),Jp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function im(a){if(a.G=0,a.ka=[],a.l){const h=Lp(a.h);(h.length!=0||a.i.length!=0)&&(O(a.ka,h),O(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function sm(a,h,d){var m=d instanceof Ur?Rn(d):new Ur(d);if(m.g!="")h&&(m.g=h+"."+m.g),va(m,m.s);else{var D=l.location;m=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;var b=new Ur(null);m&&ya(b,m),h&&(b.g=h),D&&va(b,D),d&&(b.l=d),m=b}return d=a.D,h=a.ya,d&&h&&Ce(m,d,h),Ce(m,"VER",a.la),Ls(a,m),m}function om(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Me(new wa({eb:d})):new Me(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function am(){}t=am.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Aa(){}Aa.prototype.g=function(a,h){return new Dt(a,h)};function Dt(a,h){lt.call(this),this.g=new Yp(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!_(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ti(this)}R(Dt,lt),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){oc(this.g)},Dt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Gu(a),a=d);h.i.push(new yT(h.Ya++,a)),h.G==3&&Sa(h)},Dt.prototype.N=function(){this.g.l=null,delete this.j,oc(this.g),delete this.g,Dt.aa.N.call(this)};function lm(a){Yu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(lm,Yu);function um(){Ju.call(this),this.status=1}R(um,Ju);function Ti(a){this.g=a}R(Ti,am),Ti.prototype.ua=function(){wt(this.g,"a")},Ti.prototype.ta=function(a){wt(this.g,new lm(a))},Ti.prototype.sa=function(a){wt(this.g,new um)},Ti.prototype.ra=function(){wt(this.g,"b")},Aa.prototype.createWebChannel=Aa.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,yw=function(){return new Aa},gw=function(){return fa()},mw=jr,td={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},pa.NO_ERROR=0,pa.TIMEOUT=8,pa.HTTP_ERROR=6,fl=pa,kp.COMPLETE="complete",pw=kp,wp.EventType=Ss,Ss.OPEN="a",Ss.CLOSE="b",Ss.ERROR="c",Ss.MESSAGE="d",lt.prototype.listen=lt.prototype.K,Xs=wp,Me.prototype.listenOnce=Me.prototype.L,Me.prototype.getLastError=Me.prototype.Ka,Me.prototype.getLastErrorCode=Me.prototype.Ba,Me.prototype.getStatus=Me.prototype.Z,Me.prototype.getResponseJson=Me.prototype.Oa,Me.prototype.getResponseText=Me.prototype.oa,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Ha,fw=Me}).apply(typeof qa<"u"?qa:typeof self<"u"?self:typeof window<"u"?window:{});const iy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ys="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=new Au("@firebase/firestore");function Ws(){return oi.logLevel}function J(t,...e){if(oi.logLevel<=de.DEBUG){const n=e.map(xf);oi.debug(`Firestore (${ys}): ${t}`,...n)}}function qn(t,...e){if(oi.logLevel<=de.ERROR){const n=e.map(xf);oi.error(`Firestore (${ys}): ${t}`,...n)}}function is(t,...e){if(oi.logLevel<=de.WARN){const n=e.map(xf);oi.warn(`Firestore (${ys}): ${t}`,...n)}}function xf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t="Unexpected state"){const e=`FIRESTORE (${ys}) INTERNAL ASSERTION FAILED: `+t;throw qn(e),new Error(e)}function we(t,e){t||ie()}function oe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class aP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class lP{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){we(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Fn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Fn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Fn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string"),new vw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string"),new pt(e)}}class uP{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class cP{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new uP(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){we(this.o===void 0);const r=s=>{s.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(we(typeof n.token=="string"),this.R=n.token,new hP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=fP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function ss(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Z(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Z(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new se(e)}static min(){return new se(new Qe(0,0))}static max(){return new se(new Qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,n,r){n===void 0?n=0:n>e.length&&ie(),r===void 0?r=e.length-n:r>e.length-n&&ie(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Bo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Bo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class xe extends Bo{construct(e,n,r){return new xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const pP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends Bo{construct(e,n,r){return new rt(e,n,r)}static isValidIdentifier(e){return pP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new rt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Z(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new Z(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Z(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new Z(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rt(n)}static emptyPath(){return new rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(xe.fromString(e))}static fromName(e){return new ee(xe.fromString(e).popFirst(5))}static empty(){return new ee(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new xe(e.slice()))}}function mP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=se.fromTimestamp(r===1e9?new Qe(n+1,0):new Qe(n,r));return new Cr(i,ee.empty(),e)}function gP(t){return new Cr(t.readTime,t.key,-1)}class Cr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Cr(se.min(),ee.empty(),-1)}static max(){return new Cr(se.max(),ee.empty(),-1)}}function yP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ee.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _P{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oa(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==vP)throw t;J("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(i=>i?U.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new U((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new U((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function wP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function aa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Df.oe=-1;function Nu(t){return t==null}function Jl(t){return t===0&&1/t==-1/0}function EP(t){return typeof t=="number"&&Number.isInteger(t)&&!Jl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ww(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n){this.comparator=e,this.root=n||nt.EMPTY}insert(e,n){return new Ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ka(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ka(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ka(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ka(this.root,e,this.comparator,!0)}}class Ka{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??nt.RED,this.left=i??nt.EMPTY,this.right=s??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new nt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return nt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ie();const e=this.left.check();if(e!==this.right.check())throw ie();return e+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw ie()}get value(){throw ie()}get color(){throw ie()}get left(){throw ie()}get right(){throw ie()}copy(e,n,r,i,s){return this}insert(e,n,r){return new nt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new oy(this.data.getIterator())}getIteratorFrom(e){return new oy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new st(this.comparator);return n.data=e,n}}class oy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.fields=e,e.sort(rt.comparator)}static empty(){return new sn([])}unionWith(e){let n=new st(rt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new sn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ss(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Ew("Invalid base64 string: "+s):s}}(e);return new at(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const TP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rr(t){if(we(!!t),typeof t=="string"){let e=0;const n=TP.exec(t);if(we(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:$e(t.seconds),nanos:$e(t.nanos)}}function $e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ai(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function bf(t){const e=t.mapValue.fields.__previous_value__;return Of(e)?bf(e):e}function zo(t){const e=Rr(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Wo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Wo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Wo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function li(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Of(t)?4:kP(t)?9007199254740991:SP(t)?10:11:ie()}function Sn(t,e){if(t===e)return!0;const n=li(t);if(n!==li(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return zo(t).isEqual(zo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Rr(i.timestampValue),l=Rr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ai(i.bytesValue).isEqual(ai(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return $e(i.geoPointValue.latitude)===$e(s.geoPointValue.latitude)&&$e(i.geoPointValue.longitude)===$e(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return $e(i.integerValue)===$e(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=$e(i.doubleValue),l=$e(s.doubleValue);return o===l?Jl(o)===Jl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ss(t.arrayValue.values||[],e.arrayValue.values||[],Sn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(sy(o)!==sy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Sn(o[u],l[u])))return!1;return!0}(t,e);default:return ie()}}function Ho(t,e){return(t.values||[]).find(n=>Sn(n,e))!==void 0}function os(t,e){if(t===e)return 0;const n=li(t),r=li(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=$e(s.integerValue||s.doubleValue),u=$e(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return ay(t.timestampValue,e.timestampValue);case 4:return ay(zo(t),zo(e));case 5:return ye(t.stringValue,e.stringValue);case 6:return function(s,o){const l=ai(s),u=ai(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=ye(l[c],u[c]);if(f!==0)return f}return ye(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ye($e(s.latitude),$e(o.latitude));return l!==0?l:ye($e(s.longitude),$e(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ly(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,f;const p=s.fields||{},g=o.fields||{},I=(l=p.value)===null||l===void 0?void 0:l.arrayValue,R=(u=g.value)===null||u===void 0?void 0:u.arrayValue,P=ye(((c=I==null?void 0:I.values)===null||c===void 0?void 0:c.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return P!==0?P:ly(I,R)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ga.mapValue&&o===Ga.mapValue)return 0;if(s===Ga.mapValue)return 1;if(o===Ga.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=ye(u[p],f[p]);if(g!==0)return g;const I=os(l[u[p]],c[f[p]]);if(I!==0)return I}return ye(u.length,f.length)}(t.mapValue,e.mapValue);default:throw ie()}}function ay(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=Rr(t),r=Rr(e),i=ye(n.seconds,r.seconds);return i!==0?i:ye(n.nanos,r.nanos)}function ly(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=os(n[i],r[i]);if(s)return s}return ye(n.length,r.length)}function as(t){return nd(t)}function nd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Rr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ai(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ee.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=nd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${nd(n.fields[o])}`;return i+"}"}(t.mapValue):ie()}function rd(t){return!!t&&"integerValue"in t}function Lf(t){return!!t&&"arrayValue"in t}function uy(t){return!!t&&"nullValue"in t}function cy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function pl(t){return!!t&&"mapValue"in t}function SP(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function po(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=po(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=po(t.arrayValue.values[n]);return e}return Object.assign({},t)}function kP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.value=e}static empty(){return new Wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!pl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=po(n)}setAll(e){let n=rt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=po(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());pl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];pl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){vs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Wt(po(this.value))}}function Tw(t){const e=[];return vs(t.fields,(n,r)=>{const i=new rt([n]);if(pl(r)){const s=Tw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new sn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new gt(e,0,se.min(),se.min(),se.min(),Wt.empty(),0)}static newFoundDocument(e,n,r,i){return new gt(e,1,n,se.min(),r,i,0)}static newNoDocument(e,n){return new gt(e,2,n,se.min(),se.min(),Wt.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,se.min(),se.min(),Wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n){this.position=e,this.inclusive=n}}function hy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ee.comparator(ee.fromName(o.referenceValue),n.key):r=os(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function dy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Sn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,n="asc"){this.field=e,this.dir=n}}function AP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{}class Ke extends Iw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new RP(e,n,r):n==="array-contains"?new xP(e,r):n==="in"?new DP(e,r):n==="not-in"?new OP(e,r):n==="array-contains-any"?new bP(e,r):new Ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new PP(e,r):new NP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(os(n,this.value)):n!==null&&li(this.value)===li(n)&&this.matchesComparison(os(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class kn extends Iw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new kn(e,n)}matches(e){return Sw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Sw(t){return t.op==="and"}function kw(t){return CP(t)&&Sw(t)}function CP(t){for(const e of t.filters)if(e instanceof kn)return!1;return!0}function id(t){if(t instanceof Ke)return t.field.canonicalString()+t.op.toString()+as(t.value);if(kw(t))return t.filters.map(e=>id(e)).join(",");{const e=t.filters.map(n=>id(n)).join(",");return`${t.op}(${e})`}}function Aw(t,e){return t instanceof Ke?function(r,i){return i instanceof Ke&&r.op===i.op&&r.field.isEqual(i.field)&&Sn(r.value,i.value)}(t,e):t instanceof kn?function(r,i){return i instanceof kn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Aw(o,i.filters[l]),!0):!1}(t,e):void ie()}function Cw(t){return t instanceof Ke?function(n){return`${n.field.canonicalString()} ${n.op} ${as(n.value)}`}(t):t instanceof kn?function(n){return n.op.toString()+" {"+n.getFilters().map(Cw).join(" ,")+"}"}(t):"Filter"}class RP extends Ke{constructor(e,n,r){super(e,n,r),this.key=ee.fromName(r.referenceValue)}matches(e){const n=ee.comparator(e.key,this.key);return this.matchesComparison(n)}}class PP extends Ke{constructor(e,n){super(e,"in",n),this.keys=Rw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class NP extends Ke{constructor(e,n){super(e,"not-in",n),this.keys=Rw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Rw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ee.fromName(r.referenceValue))}class xP extends Ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Lf(n)&&Ho(n.arrayValue,this.value)}}class DP extends Ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ho(this.value.arrayValue,n)}}class OP extends Ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ho(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ho(this.value.arrayValue,n)}}class bP extends Ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Lf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ho(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function fy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new LP(t,e,n,r,i,s,o)}function Vf(t){const e=oe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>id(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Nu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>as(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>as(r)).join(",")),e.ue=n}return e.ue}function Mf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!AP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Aw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!dy(t.startAt,e.startAt)&&dy(t.endAt,e.endAt)}function sd(t){return ee.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function VP(t,e,n,r,i,s,o,l){return new xu(t,e,n,r,i,s,o,l)}function jf(t){return new xu(t)}function py(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function MP(t){return t.collectionGroup!==null}function mo(t){const e=oe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new st(rt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Zl(s,r))}),n.has(rt.keyField().canonicalString())||e.ce.push(new Zl(rt.keyField(),r))}return e.ce}function En(t){const e=oe(t);return e.le||(e.le=jP(e,mo(t))),e.le}function jP(t,e){if(t.limitType==="F")return fy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Zl(i.field,s)});const n=t.endAt?new Xl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Xl(t.startAt.position,t.startAt.inclusive):null;return fy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function od(t,e,n){return new xu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Du(t,e){return Mf(En(t),En(e))&&t.limitType===e.limitType}function Pw(t){return`${Vf(En(t))}|lt:${t.limitType}`}function ki(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Cw(i)).join(", ")}]`),Nu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>as(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>as(i)).join(",")),`Target(${r})`}(En(t))}; limitType=${t.limitType})`}function Ou(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ee.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of mo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=hy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,mo(r),i)||r.endAt&&!function(o,l,u){const c=hy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,mo(r),i))}(t,e)}function FP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Nw(t){return(e,n)=>{let r=!1;for(const i of mo(t)){const s=UP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function UP(t,e,n){const r=t.field.isKeyField()?ee.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?os(u,c):ie()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ie()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){vs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return ww(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P=new Ve(ee.comparator);function Kn(){return $P}const xw=new Ve(ee.comparator);function Zs(...t){let e=xw;for(const n of t)e=e.insert(n.key,n);return e}function Dw(t){let e=xw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Gr(){return go()}function Ow(){return go()}function go(){return new _s(t=>t.toString(),(t,e)=>t.isEqual(e))}const BP=new Ve(ee.comparator),zP=new st(ee.comparator);function he(...t){let e=zP;for(const n of t)e=e.add(n);return e}const WP=new st(ye);function HP(){return WP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jl(e)?"-0":e}}function bw(t){return{integerValue:""+t}}function qP(t,e){return EP(e)?bw(e):Ff(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(){this._=void 0}}function KP(t,e,n){return t instanceof eu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Of(s)&&(s=bf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof qo?Vw(t,e):t instanceof Ko?Mw(t,e):function(i,s){const o=Lw(i,s),l=my(o)+my(i.Pe);return rd(o)&&rd(i.Pe)?bw(l):Ff(i.serializer,l)}(t,e)}function GP(t,e,n){return t instanceof qo?Vw(t,e):t instanceof Ko?Mw(t,e):n}function Lw(t,e){return t instanceof tu?function(r){return rd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class eu extends bu{}class qo extends bu{constructor(e){super(),this.elements=e}}function Vw(t,e){const n=jw(e);for(const r of t.elements)n.some(i=>Sn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ko extends bu{constructor(e){super(),this.elements=e}}function Mw(t,e){let n=jw(e);for(const r of t.elements)n=n.filter(i=>!Sn(i,r));return{arrayValue:{values:n}}}class tu extends bu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function my(t){return $e(t.integerValue||t.doubleValue)}function jw(t){return Lf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function QP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof qo&&i instanceof qo||r instanceof Ko&&i instanceof Ko?ss(r.elements,i.elements,Sn):r instanceof tu&&i instanceof tu?Sn(r.Pe,i.Pe):r instanceof eu&&i instanceof eu}(t.transform,e.transform)}class YP{constructor(e,n){this.version=e,this.transformResults=n}}class ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ln}static exists(e){return new ln(void 0,e)}static updateTime(e){return new ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ml(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Lu{}function Fw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Uf(t.key,ln.none()):new la(t.key,t.data,ln.none());{const n=t.data,r=Wt.empty();let i=new st(rt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new vi(t.key,r,new sn(i.toArray()),ln.none())}}function JP(t,e,n){t instanceof la?function(i,s,o){const l=i.value.clone(),u=yy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof vi?function(i,s,o){if(!ml(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=yy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Uw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function yo(t,e,n,r){return t instanceof la?function(s,o,l,u){if(!ml(s.precondition,o))return l;const c=s.value.clone(),f=vy(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof vi?function(s,o,l,u){if(!ml(s.precondition,o))return l;const c=vy(s.fieldTransforms,u,o),f=o.data;return f.setAll(Uw(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return ml(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function XP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Lw(r.transform,i||null);s!=null&&(n===null&&(n=Wt.empty()),n.set(r.field,s))}return n||null}function gy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ss(r,i,(s,o)=>QP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class la extends Lu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class vi extends Lu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Uw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function yy(t,e,n){const r=new Map;we(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,GP(o,l,n[i]))}return r}function vy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,KP(s,o,e))}return r}class Uf extends Lu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ZP extends Lu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&JP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=yo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=yo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ow();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=Fw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&ss(this.mutations,e.mutations,(n,r)=>gy(n,r))&&ss(this.baseMutations,e.baseMutations,(n,r)=>gy(n,r))}}class $f{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){we(e.mutations.length===r.length);let i=function(){return BP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new $f(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,pe;function rN(t){switch(t){default:return ie();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function $w(t){if(t===void 0)return qn("GRPC error has no .code"),F.UNKNOWN;switch(t){case We.OK:return F.OK;case We.CANCELLED:return F.CANCELLED;case We.UNKNOWN:return F.UNKNOWN;case We.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case We.INTERNAL:return F.INTERNAL;case We.UNAVAILABLE:return F.UNAVAILABLE;case We.UNAUTHENTICATED:return F.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case We.NOT_FOUND:return F.NOT_FOUND;case We.ALREADY_EXISTS:return F.ALREADY_EXISTS;case We.PERMISSION_DENIED:return F.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case We.ABORTED:return F.ABORTED;case We.OUT_OF_RANGE:return F.OUT_OF_RANGE;case We.UNIMPLEMENTED:return F.UNIMPLEMENTED;case We.DATA_LOSS:return F.DATA_LOSS;default:return ie()}}(pe=We||(We={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN=new Xr([4294967295,4294967295],0);function _y(t){const e=iN().encode(t),n=new dw;return n.update(e),new Uint8Array(n.digest())}function wy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Xr([n,r],0),new Xr([i,s],0)]}class Bf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new eo(`Invalid padding: ${n}`);if(r<0)throw new eo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new eo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new eo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Xr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Xr.fromNumber(r)));return i.compare(sN)===1&&(i=new Xr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=_y(e),[r,i]=wy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Bf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=_y(e),[r,i]=wy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class eo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ua.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Vu(se.min(),i,new Ve(ye),Kn(),he())}}class ua{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ua(r,n,he(),he(),he())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class Bw{constructor(e,n){this.targetId=e,this.me=n}}class zw{constructor(e,n,r=at.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ey{constructor(){this.fe=0,this.ge=Iy(),this.pe=at.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=he(),n=he(),r=he();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ie()}}),new ua(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Iy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,we(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class oN{constructor(e){this.Le=e,this.Be=new Map,this.ke=Kn(),this.qe=Ty(),this.Qe=new Ve(ye)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ie()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(sd(s))if(r===0){const o=new ee(s.path);this.Ue(n,o,gt.newNoDocument(o,se.min()))}else we(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=ai(r).toUint8Array()}catch(u){if(u instanceof Ew)return is("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Bf(o,i,s)}catch(u){return is(u instanceof eo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&sd(l.target)){const u=new ee(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,gt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=he();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Vu(e,n,this.Qe,this.ke,r);return this.ke=Kn(),this.qe=Ty(),this.Qe=new Ve(ye),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Ey,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new st(ye),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||J("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ey),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Ty(){return new Ve(ee.comparator)}function Iy(){return new Ve(ee.comparator)}const aN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),lN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),uN=(()=>({and:"AND",or:"OR"}))();class cN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ad(t,e){return t.useProto3Json||Nu(e)?e:{value:e}}function nu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ww(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function hN(t,e){return nu(t,e.toTimestamp())}function Tn(t){return we(!!t),se.fromTimestamp(function(n){const r=Rr(n);return new Qe(r.seconds,r.nanos)}(t))}function zf(t,e){return ld(t,e).canonicalString()}function ld(t,e){const n=function(i){return new xe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Hw(t){const e=xe.fromString(t);return we(Yw(e)),e}function ud(t,e){return zf(t.databaseId,e.path)}function Wc(t,e){const n=Hw(e);if(n.get(1)!==t.databaseId.projectId)throw new Z(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Z(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ee(Kw(n))}function qw(t,e){return zf(t.databaseId,e)}function dN(t){const e=Hw(t);return e.length===4?xe.emptyPath():Kw(e)}function cd(t){return new xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Kw(t){return we(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Sy(t,e,n){return{name:ud(t,e),fields:n.value.mapValue.fields}}function fN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(we(f===void 0||typeof f=="string"),at.fromBase64String(f||"")):(we(f===void 0||f instanceof Buffer||f instanceof Uint8Array),at.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?F.UNKNOWN:$w(c.code);return new Z(f,c.message||"")}(o);n=new zw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Wc(t,r.document.name),s=Tn(r.document.updateTime),o=r.document.createTime?Tn(r.document.createTime):se.min(),l=new Wt({mapValue:{fields:r.document.fields}}),u=gt.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new gl(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Wc(t,r.document),s=r.readTime?Tn(r.readTime):se.min(),o=gt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new gl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Wc(t,r.document),s=r.removedTargetIds||[];n=new gl([],s,i,null)}else{if(!("filter"in e))return ie();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new nN(i,s),l=r.targetId;n=new Bw(l,o)}}return n}function pN(t,e){let n;if(e instanceof la)n={update:Sy(t,e.key,e.value)};else if(e instanceof Uf)n={delete:ud(t,e.key)};else if(e instanceof vi)n={update:Sy(t,e.key,e.data),updateMask:IN(e.fieldMask)};else{if(!(e instanceof ZP))return ie();n={verify:ud(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof eu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof qo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ko)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof tu)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ie()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:hN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ie()}(t,e.precondition)),n}function mN(t,e){return t&&t.length>0?(we(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Tn(i.updateTime):Tn(s);return o.isEqual(se.min())&&(o=Tn(s)),new YP(o,i.transformResults||[])}(n,e))):[]}function gN(t,e){return{documents:[qw(t,e.path)]}}function yN(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=qw(t,i);const s=function(c){if(c.length!==0)return Qw(kn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(g){return{field:Ai(g.field),direction:wN(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=ad(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function vN(t){let e=dN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){we(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const g=Gw(p);return g instanceof kn&&kw(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(R){return new Zl(Ci(R.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Nu(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,I=p.values||[];return new Xl(I,g)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const g=!p.before,I=p.values||[];return new Xl(I,g)}(n.endAt)),VP(e,i,o,s,l,"F",u,c)}function _N(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Gw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ci(n.unaryFilter.field);return Ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ci(n.unaryFilter.field);return Ke.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ci(n.unaryFilter.field);return Ke.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ci(n.unaryFilter.field);return Ke.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ie()}}(t):t.fieldFilter!==void 0?function(n){return Ke.create(Ci(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ie()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return kn.create(n.compositeFilter.filters.map(r=>Gw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ie()}}(n.compositeFilter.op))}(t):ie()}function wN(t){return aN[t]}function EN(t){return lN[t]}function TN(t){return uN[t]}function Ai(t){return{fieldPath:t.canonicalString()}}function Ci(t){return rt.fromServerFormat(t.fieldPath)}function Qw(t){return t instanceof Ke?function(n){if(n.op==="=="){if(cy(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NAN"}};if(uy(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(cy(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NOT_NAN"}};if(uy(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ai(n.field),op:EN(n.op),value:n.value}}}(t):t instanceof kn?function(n){const r=n.getFilters().map(i=>Qw(i));return r.length===1?r[0]:{compositeFilter:{op:TN(n.op),filters:r}}}(t):ie()}function IN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Yw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,n,r,i,s=se.min(),o=se.min(),l=at.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(e){this.ct=e}}function kN(t){const e=vN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?od(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(){this.un=new CN}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Cr.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Cr.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class CN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new st(xe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new st(xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ls(0)}static kn(){return new ls(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(){this.changes=new _s(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&yo(r.mutation,i,sn.empty(),Qe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,n,r=he()){const i=Gr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Zs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Gr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,he()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Kn();const o=go(),l=function(){return go()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof vi)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),yo(f.mutation,c,f.mutation.getFieldMask(),Qe.now())):o.set(c.key,sn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>{var p;return l.set(c,new PN(f,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=go();let i=new Ve((o,l)=>o-l),s=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||sn.empty();f=l.applyToLocalView(c,f),r.set(u,f);const p=(i.get(l.batchId)||he()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,p=Ow();f.forEach(g=>{if(!s.has(g)){const I=Fw(n.get(g),r.get(g));I!==null&&p.set(g,I),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ee.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):MP(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):U.resolve(Gr());let l=-1,u=s;return o.next(c=>U.forEach(c,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?U.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,he())).next(f=>({batchId:l,changes:Dw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ee(n)).next(r=>{let i=Zs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Zs();return this.indexManager.getCollectionParents(e,s).next(l=>U.forEach(l,u=>{const c=function(p,g){return new xu(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,gt.newInvalidDocument(f)))});let l=Zs();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&yo(f.mutation,c,sn.empty(),Qe.now()),Ou(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Tn(i.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:kN(i.bundledQuery),readTime:Tn(i.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(){this.overlays=new Ve(ee.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Gr();return U.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const i=Gr(),s=n.length+1,o=new ee(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return U.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ve((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=Gr(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=Gr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return U.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new tN(n,r));let s=this.Ir.get(n);s===void 0&&(s=he(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(){this.sessionToken=at.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(){this.Tr=new st(Ye.Er),this.dr=new st(Ye.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ye(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ee(new xe([])),r=new Ye(n,e),i=new Ye(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ee(new xe([])),r=new Ye(n,e),i=new Ye(n,e+1);let s=he();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ye(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ee.comparator(e.key,n.key)||ye(e.wr,n.wr)}static Ar(e,n){return ye(e.wr,n.wr)||ee.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new st(Ye.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new eN(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ye(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return U.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),i=new Ye(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),U.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new st(ye);return n.forEach(i=>{const s=new Ye(i,0),o=new Ye(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ee.isDocumentKey(s)||(s=s.child(""));const o=new Ye(new ee(s),0);let l=new st(ye);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),U.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){we(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,i=>{const s=new Ye(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ye(n,0),i=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(e){this.Mr=e,this.docs=function(){return new Ve(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let r=Kn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():gt.newInvalidDocument(i))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Kn();const o=n.path,l=new ee(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||yP(gP(f),r)<=0||(i.has(f.key)||Ou(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return U.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ie()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new VN(this)}getSize(e){return U.resolve(this.size)}}class VN extends RN{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(e){this.persistence=e,this.Nr=new _s(n=>Vf(n),Mf),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Wf,this.targetCount=0,this.kr=ls.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ls(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),U.waitFor(s).next(()=>i)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),U.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Df(0),this.Kr=!1,this.Kr=!0,this.$r=new ON,this.referenceDelegate=e(this),this.Ur=new MN(this),this.indexManager=new AN,this.remoteDocumentCache=function(i){return new LN(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new SN(n),this.Gr=new xN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new DN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new bN(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){J("MemoryPersistence","Starting transaction:",e);const i=new FN(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class FN extends _P{constructor(e){super(),this.currentSequenceNumber=e}}class Hf{constructor(e){this.persistence=e,this.Jr=new Wf,this.Yr=null}static Zr(e){return new Hf(e)}get Xr(){if(this.Yr)return this.Yr;throw ie()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const i=ee.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,se.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=he(),i=he();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new qf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Ck()?8:wP(vt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new UN;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ws()<=de.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",ki(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(Ws()<=de.DEBUG&&J("QueryEngine","Query:",ki(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ws()<=de.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",ki(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,En(n))):U.resolve())}Yi(e,n){if(py(n))return U.resolve(null);let r=En(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=od(n,null,"F"),r=En(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=he(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,od(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return py(n)||i.isEqual(se.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?U.resolve(null):(Ws()<=de.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ki(n)),this.rs(e,o,n,mP(i,-1)).next(l=>l))})}ts(e,n){let r=new st(Nw(e));return n.forEach((i,s)=>{Ou(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Ws()<=de.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",ki(n)),this.Ji.getDocumentsMatchingQuery(e,n,Cr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ve(ye),this._s=new _s(s=>Vf(s),Mf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new NN(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function zN(t,e,n,r){return new BN(t,e,n,r)}async function Jw(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=he();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function WN(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const p=c.batch,g=p.keys();let I=U.resolve();return g.forEach(R=>{I=I.next(()=>f.getEntry(u,R)).next(P=>{const O=c.docVersions.get(R);we(O!==null),P.version.compareTo(O)<0&&(p.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),f.addEntry(P)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=he();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Xw(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function HN(t,e){const n=oe(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,p)=>{const g=i.get(p);if(!g)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,p)));let I=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(at.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),i=i.insert(p,I),function(P,O,w){return P.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(g,I,f)&&l.push(n.Ur.updateTargetData(s,I))});let u=Kn(),c=he();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(qN(s,o,e.documentUpdates).next(f=>{u=f.Ps,c=f.Is})),!r.isEqual(se.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return U.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function qN(t,e,n){let r=he(),i=he();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Kn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(se.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):J("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function KN(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function GN(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,U.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new dr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function hd(t,e,n){const r=oe(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!aa(o))throw o;J("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function ky(t,e,n){const r=oe(t);let i=se.min(),s=he();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const p=oe(u),g=p._s.get(f);return g!==void 0?U.resolve(p.os.get(g)):p.Ur.getTargetData(c,f)}(r,o,En(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:se.min(),n?s:he())).next(l=>(QN(r,FP(e),l),{documents:l,Ts:s})))}function QN(t,e,n){let r=t.us.get(e)||se.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Ay{constructor(){this.activeTargetIds=HP()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class YN{constructor(){this.so=new Ay,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ay,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){J("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){J("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qa=null;function Hc(){return Qa===null?Qa=function(){return 268435456+Math.round(2147483648*Math.random())}():Qa++,"0x"+Qa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="WebChannelConnection";class ex extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Hc(),u=this.xo(n,r.toUriEncodedString());J("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(f=>(J("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw is("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ys}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=XN[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Hc();return new Promise((o,l)=>{const u=new fw;u.setWithCredentials(!0),u.listenOnce(pw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case fl.NO_ERROR:const f=u.getResponseJson();J(ft,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case fl.TIMEOUT:J(ft,`RPC '${e}' ${s} timed out`),l(new Z(F.DEADLINE_EXCEEDED,"Request time out"));break;case fl.HTTP_ERROR:const p=u.getStatus();if(J(ft,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const I=g==null?void 0:g.error;if(I&&I.status&&I.message){const R=function(O){const w=O.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(w)>=0?w:F.UNKNOWN}(I.status);l(new Z(R,I.message))}else l(new Z(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new Z(F.UNAVAILABLE,"Connection failed."));break;default:ie()}}finally{J(ft,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);J(ft,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Hc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=yw(),l=gw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");J(ft,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);let g=!1,I=!1;const R=new ZN({Io:O=>{I?J(ft,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(g||(J(ft,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),J(ft,`RPC '${e}' stream ${i} sending:`,O),p.send(O))},To:()=>p.close()}),P=(O,w,_)=>{O.listen(w,A=>{try{_(A)}catch(N){setTimeout(()=>{throw N},0)}})};return P(p,Xs.EventType.OPEN,()=>{I||(J(ft,`RPC '${e}' stream ${i} transport opened.`),R.yo())}),P(p,Xs.EventType.CLOSE,()=>{I||(I=!0,J(ft,`RPC '${e}' stream ${i} transport closed`),R.So())}),P(p,Xs.EventType.ERROR,O=>{I||(I=!0,is(ft,`RPC '${e}' stream ${i} transport errored:`,O),R.So(new Z(F.UNAVAILABLE,"The operation could not be completed")))}),P(p,Xs.EventType.MESSAGE,O=>{var w;if(!I){const _=O.data[0];we(!!_);const A=_,N=A.error||((w=A[0])===null||w===void 0?void 0:w.error);if(N){J(ft,`RPC '${e}' stream ${i} received error:`,N);const M=N.status;let $=function(T){const k=We[T];if(k!==void 0)return $w(k)}(M),E=N.message;$===void 0&&($=F.INTERNAL,E="Unknown error status: "+M+" with message "+N.message),I=!0,R.So(new Z($,E)),p.close()}else J(ft,`RPC '${e}' stream ${i} received:`,_),R.bo(_)}}),P(l,mw.STAT_EVENT,O=>{O.stat===td.PROXY?J(ft,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===td.NOPROXY&&J(ft,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function qc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(t){return new cN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&J("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Zw(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(qn(n.toString()),qn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new Z(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return J("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(J("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tx extends eE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=fN(this.serializer,e),r=function(s){if(!("targetChange"in s))return se.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?Tn(o.readTime):se.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=cd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=sd(u)?{documents:gN(s,u)}:{query:yN(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Ww(s,o.resumeToken);const c=ad(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(se.min())>0){l.readTime=nu(s,o.snapshotVersion.toTimestamp());const c=ad(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=_N(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=cd(this.serializer),n.removeTarget=e,this.a_(n)}}class nx extends eE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return we(!!e.streamToken),this.lastStreamToken=e.streamToken,we(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){we(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=mN(e.writeResults,e.commitTime),r=Tn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=cd(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>pN(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new Z(F.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,ld(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Z(F.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,ld(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z(F.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class ix{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(qn(n),this.D_=!1):J("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{_i(this)&&(J("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=oe(u);c.L_.add(4),await ca(c),c.q_.set("Unknown"),c.L_.delete(4),await ju(c)}(this))})}),this.q_=new ix(r,i)}}async function ju(t){if(_i(t))for(const e of t.B_)await e(!0)}async function ca(t){for(const e of t.B_)await e(!1)}function tE(t,e){const n=oe(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Yf(n)?Qf(n):ws(n).r_()&&Gf(n,e))}function Kf(t,e){const n=oe(t),r=ws(n);n.N_.delete(e),r.r_()&&nE(n,e),n.N_.size===0&&(r.r_()?r.o_():_i(n)&&n.q_.set("Unknown"))}function Gf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ws(t).A_(e)}function nE(t,e){t.Q_.xe(e),ws(t).R_(e)}function Qf(t){t.Q_=new oN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ws(t).start(),t.q_.v_()}function Yf(t){return _i(t)&&!ws(t).n_()&&t.N_.size>0}function _i(t){return oe(t).L_.size===0}function rE(t){t.Q_=void 0}async function ox(t){t.q_.set("Online")}async function ax(t){t.N_.forEach((e,n)=>{Gf(t,e)})}async function lx(t,e){rE(t),Yf(t)?(t.q_.M_(e),Qf(t)):t.q_.set("Unknown")}async function ux(t,e,n){if(t.q_.set("Online"),e instanceof zw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){J("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ru(t,r)}else if(e instanceof gl?t.Q_.Ke(e):e instanceof Bw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(se.min()))try{const r=await Xw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(c);f&&s.N_.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(at.EMPTY_BYTE_STRING,f.snapshotVersion)),nE(s,u);const p=new dr(f.target,u,c,f.sequenceNumber);Gf(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){J("RemoteStore","Failed to raise snapshot:",r),await ru(t,r)}}async function ru(t,e,n){if(!aa(e))throw e;t.L_.add(1),await ca(t),t.q_.set("Offline"),n||(n=()=>Xw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{J("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await ju(t)})}function iE(t,e){return e().catch(n=>ru(t,n,e))}async function Fu(t){const e=oe(t),n=Pr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;cx(e);)try{const i=await KN(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,hx(e,i)}catch(i){await ru(e,i)}sE(e)&&oE(e)}function cx(t){return _i(t)&&t.O_.length<10}function hx(t,e){t.O_.push(e);const n=Pr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function sE(t){return _i(t)&&!Pr(t).n_()&&t.O_.length>0}function oE(t){Pr(t).start()}async function dx(t){Pr(t).p_()}async function fx(t){const e=Pr(t);for(const n of t.O_)e.m_(n.mutations)}async function px(t,e,n){const r=t.O_.shift(),i=$f.from(r,e,n);await iE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Fu(t)}async function mx(t,e){e&&Pr(t).V_&&await async function(r,i){if(function(o){return rN(o)&&o!==F.ABORTED}(i.code)){const s=r.O_.shift();Pr(r).s_(),await iE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Fu(r)}}(t,e),sE(t)&&oE(t)}async function Ry(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),J("RemoteStore","RemoteStore received new credentials");const r=_i(n);n.L_.add(3),await ca(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await ju(n)}async function gx(t,e){const n=oe(t);e?(n.L_.delete(2),await ju(n)):e||(n.L_.add(2),await ca(n),n.q_.set("Unknown"))}function ws(t){return t.K_||(t.K_=function(n,r,i){const s=oe(n);return s.w_(),new tx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:ox.bind(null,t),Ro:ax.bind(null,t),mo:lx.bind(null,t),d_:ux.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Yf(t)?Qf(t):t.q_.set("Unknown")):(await t.K_.stop(),rE(t))})),t.K_}function Pr(t){return t.U_||(t.U_=function(n,r,i){const s=oe(n);return s.w_(),new nx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:dx.bind(null,t),mo:mx.bind(null,t),f_:fx.bind(null,t),g_:px.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Fu(t)):(await t.U_.stop(),t.O_.length>0&&(J("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Jf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xf(t,e){if(qn("AsyncQueue",`${e}: ${t}`),aa(t))return new Z(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ee.comparator(n.key,r.key):(n,r)=>ee.comparator(n.key,r.key),this.keyedMap=Zs(),this.sortedSet=new Ve(this.comparator)}static emptySet(e){return new Yi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Yi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Yi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(){this.W_=new Ve(ee.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ie():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class us{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new us(e,n,Yi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Du(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class vx{constructor(){this.queries=Ny(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=oe(n),s=i.queries;i.queries=Ny(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new Z(F.ABORTED,"Firestore shutting down"))}}function Ny(){return new _s(t=>Pw(t),Du)}async function aE(t,e){const n=oe(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new yx,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Xf(o,`Initialization of query '${ki(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Zf(n)}async function lE(t,e){const n=oe(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function _x(t,e){const n=oe(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Zf(n)}function wx(t,e,n){const r=oe(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Zf(t){t.Y_.forEach(e=>{e.next()})}var dd,xy;(xy=dd||(dd={})).ea="default",xy.Cache="cache";class uE{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new us(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=us.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==dd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e){this.key=e}}class hE{constructor(e){this.key=e}}class Ex{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=he(),this.mutatedKeys=he(),this.Aa=Nw(e),this.Ra=new Yi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Py,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const g=i.get(f),I=Ou(this.query,p)?p:null,R=!!g&&this.mutatedKeys.has(g.key),P=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let O=!1;g&&I?g.data.isEqual(I.data)?R!==P&&(r.track({type:3,doc:I}),O=!0):this.ga(g,I)||(r.track({type:2,doc:I}),O=!0,(u&&this.Aa(I,u)>0||c&&this.Aa(I,c)<0)&&(l=!0)):!g&&I?(r.track({type:0,doc:I}),O=!0):g&&!I&&(r.track({type:1,doc:g}),O=!0,(u||c)&&(l=!0)),O&&(I?(o=o.add(I),s=P?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(I,R){const P=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie()}};return P(I)-P(R)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new us(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Py,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=he(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new hE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new cE(r))}),n}ba(e){this.Ta=e.Ts,this.da=he();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return us.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Tx{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Ix{constructor(e){this.key=e,this.va=!1}}class Sx{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new _s(l=>Pw(l),Du),this.Ma=new Map,this.xa=new Set,this.Oa=new Ve(ee.comparator),this.Na=new Map,this.La=new Wf,this.Ba={},this.ka=new Map,this.qa=ls.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function kx(t,e,n=!0){const r=yE(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await dE(r,e,n,!0),i}async function Ax(t,e){const n=yE(t);await dE(n,e,!0,!1)}async function dE(t,e,n,r){const i=await GN(t.localStore,En(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await Cx(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&tE(t.remoteStore,i),l}async function Cx(t,e,n,r,i){t.Ka=(p,g,I)=>async function(P,O,w,_){let A=O.view.ma(w);A.ns&&(A=await ky(P.localStore,O.query,!1).then(({documents:E})=>O.view.ma(E,A)));const N=_&&_.targetChanges.get(O.targetId),M=_&&_.targetMismatches.get(O.targetId)!=null,$=O.view.applyChanges(A,P.isPrimaryClient,N,M);return Oy(P,O.targetId,$.wa),$.snapshot}(t,p,g,I);const s=await ky(t.localStore,e,!0),o=new Ex(e,s.Ts),l=o.ma(s.documents),u=ua.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Oy(t,n,c.wa);const f=new Tx(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function Rx(t,e,n){const r=oe(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Du(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await hd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Kf(r.remoteStore,i.targetId),fd(r,i.targetId)}).catch(oa)):(fd(r,i.targetId),await hd(r.localStore,i.targetId,!0))}async function Px(t,e){const n=oe(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Kf(n.remoteStore,r.targetId))}async function Nx(t,e,n){const r=Mx(t);try{const i=await function(o,l){const u=oe(o),c=Qe.now(),f=l.reduce((I,R)=>I.add(R.key),he());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let R=Kn(),P=he();return u.cs.getEntries(I,f).next(O=>{R=O,R.forEach((w,_)=>{_.isValidDocument()||(P=P.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,R)).next(O=>{p=O;const w=[];for(const _ of l){const A=XP(_,p.get(_.key).overlayedDocument);A!=null&&w.push(new vi(_.key,A,Tw(A.value.mapValue),ln.exists(!0)))}return u.mutationQueue.addMutationBatch(I,c,w,l)}).next(O=>{g=O;const w=O.applyToLocalDocumentSet(p,P);return u.documentOverlayCache.saveOverlays(I,O.batchId,w)})}).then(()=>({batchId:g.batchId,changes:Dw(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ve(ye)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await ha(r,i.changes),await Fu(r.remoteStore)}catch(i){const s=Xf(i,"Failed to persist write");n.reject(s)}}async function fE(t,e){const n=oe(t);try{const r=await HN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(we(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?we(o.va):i.removedDocuments.size>0&&(we(o.va),o.va=!1))}),await ha(n,r,e)}catch(r){await oa(r)}}function Dy(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=oe(o);u.onlineState=l;let c=!1;u.queries.forEach((f,p)=>{for(const g of p.j_)g.Z_(l)&&(c=!0)}),c&&Zf(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function xx(t,e,n){const r=oe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ve(ee.comparator);o=o.insert(s,gt.newNoDocument(s,se.min()));const l=he().add(s),u=new Vu(se.min(),new Map,new Ve(ye),o,l);await fE(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),ep(r)}else await hd(r.localStore,e,!1).then(()=>fd(r,e,n)).catch(oa)}async function Dx(t,e){const n=oe(t),r=e.batch.batchId;try{const i=await WN(n.localStore,e);mE(n,r,null),pE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ha(n,i)}catch(i){await oa(i)}}async function Ox(t,e,n){const r=oe(t);try{const i=await function(o,l){const u=oe(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(we(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);mE(r,e,n),pE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ha(r,i)}catch(i){await oa(i)}}function pE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function mE(t,e,n){const r=oe(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function fd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||gE(t,r)})}function gE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Kf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),ep(t))}function Oy(t,e,n){for(const r of n)r instanceof cE?(t.La.addReference(r.key,e),bx(t,r)):r instanceof hE?(J("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||gE(t,r.key)):ie()}function bx(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(J("SyncEngine","New document in limbo: "+n),t.xa.add(r),ep(t))}function ep(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ee(xe.fromString(e)),r=t.qa.next();t.Na.set(r,new Ix(n)),t.Oa=t.Oa.insert(n,r),tE(t.remoteStore,new dr(En(jf(n.path)),r,"TargetPurposeLimboResolution",Df.oe))}}async function ha(t,e,n){const r=oe(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=qf.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const f=oe(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(c,g=>U.forEach(g.$i,I=>f.persistence.referenceDelegate.addReference(p,g.targetId,I)).next(()=>U.forEach(g.Ui,I=>f.persistence.referenceDelegate.removeReference(p,g.targetId,I)))))}catch(p){if(!aa(p))throw p;J("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const g=p.targetId;if(!p.fromCache){const I=f.os.get(g),R=I.snapshotVersion,P=I.withLastLimboFreeSnapshotVersion(R);f.os=f.os.insert(g,P)}}}(r.localStore,s))}async function Lx(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){J("SyncEngine","User change. New user:",e.toKey());const r=await Jw(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new Z(F.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ha(n,r.hs)}}function Vx(t,e){const n=oe(t),r=n.Na.get(e);if(r&&r.va)return he().add(r.key);{let i=he();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function yE(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xx.bind(null,e),e.Ca.d_=_x.bind(null,e.eventManager),e.Ca.$a=wx.bind(null,e.eventManager),e}function Mx(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Dx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ox.bind(null,e),e}class iu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Mu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return zN(this.persistence,new $N,e.initialUser,this.serializer)}Ga(e){return new jN(Hf.Zr,this.serializer)}Wa(e){return new YN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}iu.provider={build:()=>new iu};class pd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Dy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Lx.bind(null,this.syncEngine),await gx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new vx}()}createDatastore(e){const n=Mu(e.databaseInfo.databaseId),r=function(s){return new ex(s)}(e.databaseInfo);return function(s,o,l,u){return new rx(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new sx(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Dy(this.syncEngine,n,0),function(){return Cy.D()?new Cy:new JN}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const p=new Sx(i,s,o,l,u,c);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=oe(i);J("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ca(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}pd.provider={build:()=>new pd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):qn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=_w.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{J("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(J("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Xf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Kc(t,e){t.asyncQueue.verifyOperationInProgress(),J("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Jw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function by(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Fx(t);J("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ry(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Ry(e.remoteStore,i)),t._onlineComponents=e}async function Fx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){J("FirestoreClient","Using user provided OfflineComponentProvider");try{await Kc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;is("Error using user provided cache. Falling back to memory cache: "+n),await Kc(t,new iu)}}else J("FirestoreClient","Using default OfflineComponentProvider"),await Kc(t,new iu);return t._offlineComponents}async function _E(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(J("FirestoreClient","Using user provided OnlineComponentProvider"),await by(t,t._uninitializedComponentsProvider._online)):(J("FirestoreClient","Using default OnlineComponentProvider"),await by(t,new pd))),t._onlineComponents}function Ux(t){return _E(t).then(e=>e.syncEngine)}async function wE(t){const e=await _E(t),n=e.eventManager;return n.onListen=kx.bind(null,e.syncEngine),n.onUnlisten=Rx.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Ax.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Px.bind(null,e.syncEngine),n}function $x(t,e,n={}){const r=new Fn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new vE({next:g=>{f.Za(),o.enqueueAndForget(()=>lE(s,p));const I=g.docs.has(l);!I&&g.fromCache?c.reject(new Z(F.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&g.fromCache&&u&&u.source==="server"?c.reject(new Z(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new uE(jf(l.path),f,{includeMetadataChanges:!0,_a:!0});return aE(s,p)}(await wE(t),t.asyncQueue,e,n,r)),r.promise}function Bx(t,e,n={}){const r=new Fn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new vE({next:g=>{f.Za(),o.enqueueAndForget(()=>lE(s,p)),g.fromCache&&u.source==="server"?c.reject(new Z(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new uE(l,f,{includeMetadataChanges:!0,_a:!0});return aE(s,p)}(await wE(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(t,e,n){if(!n)throw new Z(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zx(t,e,n,r){if(e===!0&&r===!0)throw new Z(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Vy(t){if(!ee.isDocumentKey(t))throw new Z(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function My(t){if(ee.isDocumentKey(t))throw new Z(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function tp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie()}function Gn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Z(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=tp(t);throw new Z(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Z(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}zx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=EE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Z(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Z(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Z(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Uu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new oP;switch(r.type){case"firstParty":return new cP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ly.get(n);r&&(J("ComponentProvider","Removing Datastore"),Ly.delete(n),r.terminate())}(this),Promise.resolve()}}function Wx(t,e,n,r={}){var i;const s=(t=Gn(t,Uu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&is("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=pt.MOCK_USER;else{l=Ek(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new Z(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new pt(c)}t._authCredentials=new aP(new vw(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new $u(this.firestore,e,this._query)}}class Vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Sr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vt(this.firestore,e,this._key)}}class Sr extends $u{constructor(e,n,r){super(e,n,jf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Vt(this.firestore,null,new ee(e))}withConverter(e){return new Sr(this.firestore,e,this._path)}}function Bu(t,e,...n){if(t=_t(t),TE("collection","path",e),t instanceof Uu){const r=xe.fromString(e,...n);return My(r),new Sr(t,null,r)}{if(!(t instanceof Vt||t instanceof Sr))throw new Z(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return My(r),new Sr(t.firestore,null,r)}}function zu(t,e,...n){if(t=_t(t),arguments.length===1&&(e=_w.newId()),TE("doc","path",e),t instanceof Uu){const r=xe.fromString(e,...n);return Vy(r),new Vt(t,null,new ee(r))}{if(!(t instanceof Vt||t instanceof Sr))throw new Z(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return Vy(r),new Vt(t.firestore,t instanceof Sr?t.converter:null,new ee(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Zw(this,"async_queue_retry"),this.Vu=()=>{const r=qc();r&&J("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=qc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=qc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Fn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!aa(e))throw e;J("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw qn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Jf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&ie()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Es extends Uu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Fy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Fy(e),this._firestoreClient=void 0,await e}}}function Hx(t,e){const n=typeof t=="object"?t:Ef(),r=typeof t=="string"?t:e||"(default)",i=gi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=_k("firestore");s&&Wx(i,...s)}return i}function np(t){if(t._terminated)throw new Z(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||qx(t),t._firestoreClient}function qx(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,f){return new IP(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,EE(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new jx(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cs(at.fromBase64String(e))}catch(n){throw new Z(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new cs(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Z(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Z(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Z(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kx=/^__.*__$/;class Gx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new vi(e,this.data,this.fieldMask,n,this.fieldTransforms):new la(e,this.data,n,this.fieldTransforms)}}function SE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie()}}class op{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new op(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return su(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(SE(this.Cu)&&Kx.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Qx{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Mu(e)}Qu(e,n,r,i=!1){return new op({Cu:e,methodName:n,qu:r,path:rt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kE(t){const e=t._freezeSettings(),n=Mu(t._databaseId);return new Qx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function AE(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);NE("Data must be an object, but it was:",o,r);const l=RE(r,o);let u,c;if(s.merge)u=new sn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const g=Yx(e,p,n);if(!o.contains(g))throw new Z(F.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Xx(f,g)||f.push(g)}u=new sn(f),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new Gx(new Wt(l),u,c)}function CE(t,e){if(PE(t=_t(t)))return NE("Unsupported field value:",e,t),RE(t,e);if(t instanceof IE)return function(r,i){if(!SE(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=CE(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=_t(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Qe.fromDate(r);return{timestampValue:nu(i.serializer,s)}}if(r instanceof Qe){const s=new Qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:nu(i.serializer,s)}}if(r instanceof ip)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cs)return{bytesValue:Ww(i.serializer,r._byteString)};if(r instanceof Vt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:zf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof sp)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Ff(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${tp(r)}`)}(t,e)}function RE(t,e){const n={};return ww(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vs(t,(r,i)=>{const s=CE(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function PE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof ip||t instanceof cs||t instanceof Vt||t instanceof IE||t instanceof sp)}function NE(t,e,n){if(!PE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=tp(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Yx(t,e,n){if((e=_t(e))instanceof rp)return e._internalPath;if(typeof e=="string")return xE(t,e);throw su("Field path arguments must be of type string or ",t,!1,void 0,n)}const Jx=new RegExp("[~\\*/\\[\\]]");function xE(t,e,n){if(e.search(Jx)>=0)throw su(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new rp(...e.split("."))._internalPath}catch{throw su(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function su(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new Z(F.INVALID_ARGUMENT,l+t+u)}function Xx(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Zx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(OE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Zx extends DE{data(){return super.data()}}function OE(t,e){return typeof e=="string"?xE(t,e):e instanceof rp?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Z(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class tD{convertValue(e,n="none"){switch(li(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ai(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ie()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return vs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>$e(o.doubleValue));return new sp(s)}convertGeoPoint(e){return new ip($e(e.latitude),$e(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=bf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(zo(e));default:return null}}convertTimestamp(e){const n=Rr(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=xe.fromString(e);we(Yw(r));const i=new Wo(r.get(1),r.get(3)),s=new ee(r.popFirst(5));return i.isEqual(n)||qn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class LE extends DE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new yl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(OE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class yl extends LE{data(e={}){return super.data(e)}}class nD{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new to(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new yl(this._firestore,this._userDataWriter,r.key,r,new to(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new yl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new to(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new yl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new to(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:rD(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function rD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iD(t){t=Gn(t,Vt);const e=Gn(t.firestore,Es);return $x(np(e),t._key).then(n=>oD(e,t,n))}class VE extends tD{constructor(e){super(),this.firestore=e}convertBytes(e){return new cs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Vt(this.firestore,null,n)}}function ME(t){t=Gn(t,$u);const e=Gn(t.firestore,Es),n=np(e),r=new VE(e);return eD(t._query),Bx(n,t._query).then(i=>new nD(e,r,t,i))}function jE(t,e,n){t=Gn(t,Vt);const r=Gn(t.firestore,Es),i=bE(t.converter,e,n);return ap(r,[AE(kE(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,ln.none())])}function sD(t){return ap(Gn(t.firestore,Es),[new Uf(t._key,ln.none())])}function FE(t,e){const n=Gn(t.firestore,Es),r=zu(t),i=bE(t.converter,e);return ap(n,[AE(kE(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,ln.exists(!1))]).then(()=>r)}function ap(t,e){return function(r,i){const s=new Fn;return r.asyncQueue.enqueueAndForget(async()=>Nx(await Ux(r),i,s)),s.promise}(np(t),e)}function oD(t,e,n){const r=n.docs.get(e._key),i=new VE(t);return new LE(t,i,e._key,r,new to(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ys=i})(ms),In(new cn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Es(new lP(r.getProvider("auth-internal")),new dP(r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new Z(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wo(c.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Kt(iy,"4.7.3",e),Kt(iy,"4.7.3","esm2017")})();const UE="@firebase/installations",lp="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E=1e4,BE=`w:${lp}`,zE="FIS_v2",aD="https://firebaseinstallations.googleapis.com/v1",lD=60*60*1e3,uD="installations",cD="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ui=new mi(uD,cD,hD);function WE(t){return t instanceof dn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE({projectId:t}){return`${aD}/projects/${t}/installations`}function qE(t){return{token:t.token,requestStatus:2,expiresIn:fD(t.expiresIn),creationTime:Date.now()}}async function KE(t,e){const r=(await e.json()).error;return ui.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function GE({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function dD(t,{refreshToken:e}){const n=GE(t);return n.append("Authorization",pD(e)),n}async function QE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function fD(t){return Number(t.replace("s","000"))}function pD(t){return`${zE} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mD({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=HE(t),i=GE(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:zE,appId:t.appId,sdkVersion:BE},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await QE(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:qE(c.authToken)}}else throw await KE("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gD(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yD=/^[cdef][\w-]{21}$/,md="";function vD(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=_D(t);return yD.test(n)?n:md}catch{return md}}function _D(t){return gD(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE=new Map;function XE(t,e){const n=Wu(t);ZE(n,e),wD(n,e)}function ZE(t,e){const n=JE.get(t);if(n)for(const r of n)r(e)}function wD(t,e){const n=ED();n&&n.postMessage({key:t,fid:e}),TD()}let Qr=null;function ED(){return!Qr&&"BroadcastChannel"in self&&(Qr=new BroadcastChannel("[Firebase] FID Change"),Qr.onmessage=t=>{ZE(t.data.key,t.data.fid)}),Qr}function TD(){JE.size===0&&Qr&&(Qr.close(),Qr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ID="firebase-installations-database",SD=1,ci="firebase-installations-store";let Gc=null;function up(){return Gc||(Gc=R0(ID,SD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ci)}}})),Gc}async function ou(t,e){const n=Wu(t),i=(await up()).transaction(ci,"readwrite"),s=i.objectStore(ci),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&XE(t,e.fid),e}async function eT(t){const e=Wu(t),r=(await up()).transaction(ci,"readwrite");await r.objectStore(ci).delete(e),await r.done}async function Hu(t,e){const n=Wu(t),i=(await up()).transaction(ci,"readwrite"),s=i.objectStore(ci),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&XE(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cp(t){let e;const n=await Hu(t.appConfig,r=>{const i=kD(r),s=AD(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===md?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function kD(t){const e=t||{fid:vD(),registrationStatus:0};return tT(e)}function AD(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ui.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=CD(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:RD(t)}:{installationEntry:e}}async function CD(t,e){try{const n=await mD(t,e);return ou(t.appConfig,n)}catch(n){throw WE(n)&&n.customData.serverCode===409?await eT(t.appConfig):await ou(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function RD(t){let e=await Uy(t.appConfig);for(;e.registrationStatus===1;)await YE(100),e=await Uy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await cp(t);return r||n}return e}function Uy(t){return Hu(t,e=>{if(!e)throw ui.create("installation-not-found");return tT(e)})}function tT(t){return PD(t)?{fid:t.fid,registrationStatus:0}:t}function PD(t){return t.registrationStatus===1&&t.registrationTime+$E<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ND({appConfig:t,heartbeatServiceProvider:e},n){const r=xD(t,n),i=dD(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:BE,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await QE(()=>fetch(r,l));if(u.ok){const c=await u.json();return qE(c)}else throw await KE("Generate Auth Token",u)}function xD(t,{fid:e}){return`${HE(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hp(t,e=!1){let n;const r=await Hu(t.appConfig,s=>{if(!nT(s))throw ui.create("not-registered");const o=s.authToken;if(!e&&bD(o))return s;if(o.requestStatus===1)return n=DD(t,e),s;{if(!navigator.onLine)throw ui.create("app-offline");const l=VD(s);return n=OD(t,l),l}});return n?await n:r.authToken}async function DD(t,e){let n=await $y(t.appConfig);for(;n.authToken.requestStatus===1;)await YE(100),n=await $y(t.appConfig);const r=n.authToken;return r.requestStatus===0?hp(t,e):r}function $y(t){return Hu(t,e=>{if(!nT(e))throw ui.create("not-registered");const n=e.authToken;return MD(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function OD(t,e){try{const n=await ND(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await ou(t.appConfig,r),n}catch(n){if(WE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await eT(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ou(t.appConfig,r)}throw n}}function nT(t){return t!==void 0&&t.registrationStatus===2}function bD(t){return t.requestStatus===2&&!LD(t)}function LD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+lD}function VD(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function MD(t){return t.requestStatus===1&&t.requestTime+$E<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jD(t){const e=t,{installationEntry:n,registrationPromise:r}=await cp(e);return r?r.catch(console.error):hp(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FD(t,e=!1){const n=t;return await UD(n),(await hp(n,e)).token}async function UD(t){const{registrationPromise:e}=await cp(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $D(t){if(!t||!t.options)throw Qc("App Configuration");if(!t.name)throw Qc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Qc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Qc(t){return ui.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT="installations",BD="installations-internal",zD=t=>{const e=t.getProvider("app").getImmediate(),n=$D(e),r=gi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},WD=t=>{const e=t.getProvider("app").getImmediate(),n=gi(e,rT).getImmediate();return{getId:()=>jD(n),getToken:i=>FD(n,i)}};function HD(){In(new cn(rT,zD,"PUBLIC")),In(new cn(BD,WD,"PRIVATE"))}HD();Kt(UE,lp);Kt(UE,lp,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au="analytics",qD="firebase_id",KD="origin",GD=60*1e3,QD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",dp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt=new Au("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YD={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Mt=new mi("analytics","Analytics",YD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JD(t){if(!t.startsWith(dp)){const e=Mt.create("invalid-gtag-resource",{gtagURL:t});return xt.warn(e.message),""}return t}function iT(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function XD(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function ZD(t,e){const n=XD("firebase-js-sdk-policy",{createScriptURL:JD}),r=document.createElement("script"),i=`${dp}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function e2(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function t2(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await iT(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){xt.error(l)}t("config",i,s)}async function n2(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await iT(n);for(const u of o){const c=l.find(p=>p.measurementId===u),f=c&&e[c.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){xt.error(s)}}function r2(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await n2(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await t2(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){xt.error(l)}}return i}function i2(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=r2(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function s2(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(dp)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2=30,a2=1e3;class l2{constructor(e={},n=a2){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const sT=new l2;function u2(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function c2(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:u2(r)},s=QD.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw Mt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function h2(t,e=sT,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Mt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Mt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new p2;return setTimeout(async()=>{l.abort()},n!==void 0?n:GD),oT({appId:r,apiKey:i,measurementId:s},o,l,e)}async function oT(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=sT){var s;const{appId:o,measurementId:l}=t;try{await d2(r,e)}catch(u){if(l)return xt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await c2(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!f2(c)){if(i.deleteThrottleMetadata(o),l)return xt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw u}const f=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?Pg(n,i.intervalMillis,o2):Pg(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(o,p),xt.debug(`Calling attemptFetch again in ${f} millis`),oT(t,p,r,i)}}function d2(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Mt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function f2(t){if(!(t instanceof dn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class p2{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function m2(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g2(){if(vf())try{await _f()}catch(t){return xt.warn(Mt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return xt.warn(Mt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function y2(t,e,n,r,i,s,o){var l;const u=h2(t);u.then(I=>{n[I.measurementId]=I.appId,t.options.measurementId&&I.measurementId!==t.options.measurementId&&xt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>xt.error(I)),e.push(u);const c=g2().then(I=>{if(I)return r.getId()}),[f,p]=await Promise.all([u,c]);s2(s)||ZD(s,f.measurementId),i("js",new Date);const g=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return g[KD]="firebase",g.update=!0,p!=null&&(g[qD]=p),i("config",f.measurementId,g),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(e){this.app=e}_delete(){return delete vo[this.app.options.appId],Promise.resolve()}}let vo={},By=[];const zy={};let Yc="dataLayer",_2="gtag",Wy,aT,Hy=!1;function w2(){const t=[];if(yf()&&t.push("This is a browser extension environment."),k0()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Mt.create("invalid-analytics-context",{errorInfo:e});xt.warn(n.message)}}function E2(t,e,n){w2();const r=t.options.appId;if(!r)throw Mt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)xt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Mt.create("no-api-key");if(vo[r]!=null)throw Mt.create("already-exists",{id:r});if(!Hy){e2(Yc);const{wrappedGtag:s,gtagCore:o}=i2(vo,By,zy,Yc,_2);aT=s,Wy=o,Hy=!0}return vo[r]=y2(t,By,zy,e,Wy,Yc,n),new v2(t)}function T2(t=Ef()){t=_t(t);const e=gi(t,au);return e.isInitialized()?e.getImmediate():I2(t)}function I2(t,e={}){const n=gi(t,au);if(n.isInitialized()){const i=n.getImmediate();if(jo(e,n.getOptions()))return i;throw Mt.create("already-initialized")}return n.initialize({options:e})}async function S2(){if(yf()||!k0()||!vf())return!1;try{return await _f()}catch{return!1}}function k2(t,e,n,r){t=_t(t),m2(aT,vo[t.app.options.appId],e,n,r).catch(i=>xt.error(i))}const qy="@firebase/analytics",Ky="0.10.8";function A2(){In(new cn(au,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return E2(r,i,n)},"PUBLIC")),In(new cn("analytics-internal",t,"PRIVATE")),Kt(qy,Ky),Kt(qy,Ky,"esm2017");function t(e){try{const n=e.getProvider(au).getImmediate();return{logEvent:(r,i,s)=>k2(n,r,i,s)}}catch(n){throw Mt.create("interop-component-reg-failed",{reason:n})}}}A2();const C2={apiKey:"AIzaSyBgY1-NA5rfmWvoK9O2x8cLzHTfywBDLDE",authDomain:"schedule-creator-pb.firebaseapp.com",projectId:"schedule-creator-pb",storageBucket:"schedule-creator-pb.appspot.com",messagingSenderId:"38849789881",appId:"1:38849789881:web:d7ddc695d18bfa25a54068",measurementId:"G-X1B9XKD2LN"},fp=P0(C2),Ya=nP(fp),hi=Hx(fp);S2().then(t=>{t&&T2(fp)}).catch(t=>console.error("Analytics error:",t));const lT=V.createContext(),Ts=()=>V.useContext(lT),R2=({children:t})=>{const[e,n]=V.useState(null),[r,i]=V.useState(!0),s=(c,f)=>UC(Ya,c,f),o=(c,f)=>$C(Ya,c,f),l=()=>HC(Ya);V.useEffect(()=>WC(Ya,f=>{n(f),i(!1)}),[]);const u={currentUser:e,signup:s,login:o,logout:l};return v.jsx(lT.Provider,{value:u,children:!r&&t})},pp="/PB-schedule-creator/assets/logo-280142c0.png";function P2(){const[t,e]=V.useState(""),{currentUser:n,logout:r}=Ts(),i=ea();async function s(){e("");try{await r(),i("/login")}catch{e("Failed to log out")}}return v.jsx("header",{style:{width:"100%",position:"sticky",top:0,zIndex:100},children:v.jsxs("nav",{className:"navbar",children:[v.jsxs("div",{className:"nav-left",children:[v.jsx(ho,{to:"/",children:v.jsx("img",{src:pp,alt:"Logo",className:"nav-logo"})}),v.jsxs("div",{className:"nav-links",children:[v.jsx(ho,{to:"/",className:"nav-link",children:"Home"}),v.jsx(ho,{to:"/custom",className:"nav-link",children:"Custom"})]})]}),v.jsxs("div",{className:"nav-right",children:[n&&v.jsxs(v.Fragment,{children:[v.jsx("span",{className:"user-email",children:n.email}),v.jsx("button",{className:"logout-button",onClick:s,children:"Log Out"})]}),t&&v.jsx("div",{className:"error-text",children:t})]})]})})}function N2({children:t}){return v.jsxs("div",{className:"app",children:[v.jsx(P2,{}),t]})}function x2(){const[t,e]=V.useState(null),[n,r]=V.useState([]);V.useEffect(()=>{let c=!0;return fetch("http://worldtimeapi.org/api/timezone/America/Toronto").then(f=>f.json()).then(f=>{c&&(e(f),i(new Date(f.datetime)))}).catch(()=>{i(new Date)}),()=>{c=!1}},[]);const i=c=>{const f=c.getDay(),p=[],g=new Date(c);g.setDate(c.getDate()-f);for(let I=0;I<7;I++){const R=new Date(g);R.setDate(g.getDate()+I),p.push(R)}r(p)},s=c=>`${["January","February","March","April","May","June","July","August","September","October","November","December"][c.getMonth()]} ${c.getFullYear()}`,o=c=>{const f=c<12?"AM":"PM";return`${c%12===0?12:c%12} ${f}`},l=Array.from({length:18},(c,f)=>f+5),u=["SUN","MON","TUE","WED","THU","FRI","SAT"];return v.jsxs("div",{className:"cal-schedule-container",children:[v.jsxs("div",{className:"cal-schedule-header",children:[v.jsx("div",{className:"cal-month-year",children:n.length>0?s(n[0]):"Loading..."}),v.jsx("div",{className:"cal-time-range",children:"5 a.m. - 10 p.m."})]}),v.jsxs("div",{className:"cal-schedule-grid",children:[v.jsxs("div",{className:"cal-column cal-time-column",children:[v.jsx("div",{className:"cal-day-header",children:v.jsx("span",{className:"cal-day-name",children:"EST"})}),v.jsx("div",{className:"cal-cell-container",children:l.map(c=>v.jsx("div",{className:"cal-time-cell",children:v.jsx("span",{className:"cal-time-label",children:o(c)})},`hour-${c}`))})]}),n.map((c,f)=>v.jsxs("div",{className:"cal-column",children:[v.jsxs("div",{className:"cal-day-header",children:[v.jsx("span",{className:"cal-day-name",children:u[c.getDay()]}),v.jsx("span",{className:"cal-day-number",children:c.getDate()})]}),v.jsx("div",{className:"cal-cell-container",children:l.map(p=>v.jsx("div",{className:"cal-calendar-cell"},`cell-${f}-${p}`))})]},`day-${f}`))]})]})}const Gy=async(t,e)=>{let r=0,i=null;if(!t)throw new Error("User ID is required");if(!e)throw new Error("Person data is required");const s={...e};for(s.createdAt||(s.createdAt=new Date().toISOString()),s.updatedAt=new Date().toISOString();r<3;)try{if(console.log(`Attempt ${r+1} to save person:`,s.name),s.id){const o=zu(hi,"users",t,"people",s.id),l=new Promise((u,c)=>setTimeout(()=>c(new Error("Database operation timed out (10s)")),1e4));return await Promise.race([jE(o,s),l]),console.log(`Successfully updated person: ${s.name}`),s.id}else{const o=Bu(hi,"users",t,"people"),l=new Promise((c,f)=>setTimeout(()=>f(new Error("Database operation timed out (10s)")),1e4)),u=await Promise.race([FE(o,s),l]);return console.log(`Successfully created new person: ${s.name} with ID: ${u.id}`),u.id}}catch(o){if(i=o,console.error(`Error saving person (attempt ${r+1}): `,o),o.code==="unavailable"||o.message.includes("timeout")||o.code==="resource-exhausted"||o.code==="network-request-failed"){r++;const l=1e3*Math.pow(2,r);console.log(`Retrying in ${l/1e3} seconds...`),await new Promise(u=>setTimeout(u,l));continue}throw o}throw i||new Error("Failed to save after multiple attempts")},gd=async t=>{try{const e=Bu(hi,"users",t,"people"),n=await ME(e),r=[];return n.forEach(i=>{r.push({id:i.id,...i.data()})}),r}catch(e){throw console.error("Error getting people: ",e),e}},D2=async(t,e)=>{try{await sD(zu(hi,"users",t,"people",e))}catch(n){throw console.error("Error deleting person: ",n),n}},O2=async(t,e)=>{if(!t)throw new Error("User ID is required");if(!e)throw new Error("Availability data is required");const n=JSON.parse(JSON.stringify(e));n.createdAt||(n.createdAt=new Date().toISOString()),n.updatedAt=new Date().toISOString();const r=3;let i=0,s=null;for(;i<r;)try{if(console.log(`Attempt ${i+1} to save availability for ID: ${n.id}`),n.id){const o=zu(hi,"users",t,"availability",n.id),l=await iD(o),u=new Promise((c,f)=>setTimeout(()=>f(new Error("Database operation timed out (10s)")),1e4));return await Promise.race([jE(o,n),u]),console.log(`Successfully saved availability with ID: ${n.id}`),n.id}else{const o=Bu(hi,"users",t,"availability"),l=new Promise((c,f)=>setTimeout(()=>f(new Error("Database operation timed out (10s)")),1e4)),u=await Promise.race([FE(o,n),l]);return console.log(`Successfully created new availability with ID: ${u.id}`),u.id}}catch(o){if(s=o,console.error(`Error saving availability (attempt ${i+1}): `,o),o.code==="unavailable"||o.message.includes("timeout")||o.code==="resource-exhausted"||o.code==="network-request-failed"){i++;const l=1e3*Math.pow(2,i);console.log(`Retrying in ${l/1e3} seconds...`),await new Promise(u=>setTimeout(u,l));continue}throw o}throw s||new Error("Failed to save availability after multiple attempts")},Qy=async t=>{try{const e=Bu(hi,"users",t,"availability"),n=await ME(e),r=[];return n.forEach(i=>{r.push({id:i.id,...i.data()})}),r}catch(e){throw console.error("Error getting all availability: ",e),e}};const Yy=({worker:t,onSave:e,onCancel:n,onRemove:r,modalTitle:i="Edit Availability"})=>{const[s,o]=V.useState(t),[l,u]=V.useState(0);V.useEffect(()=>{o(t)},[t]);const f=(()=>Object.values(s.availability).filter(N=>N.available).length)();V.useEffect(()=>{s.maxDays>f&&f>0&&o({...s,maxDays:f})},[f]);const p=N=>{o({...s,availability:{...s.availability,[N]:{...s.availability[N],available:!s.availability[N].available,hours:s.availability[N].available?s.availability[N].hours:[],allDay:!1}}})},g=()=>{const N=[];for(let M=5;M<=22;M++)N.push(M);return N},I=N=>{const M=g();o({...s,availability:{...s.availability,[N]:{...s.availability[N],allDay:!s.availability[N].allDay,hours:s.availability[N].allDay?[]:M}}})},R=(N,M)=>{if(s.availability[N].allDay)return;const $=[...s.availability[N].hours],E=$.indexOf(M);E===-1?$.push(M):$.splice(E,1);const y=$.length===18;o({...s,availability:{...s.availability,[N]:{...s.availability[N],hours:$,allDay:y}}})},P=N=>["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][N],O=N=>{const M=N<12?"AM":"PM";return`${N%12===0?12:N%12} ${M}`},w=[{name:"Morning",hours:[5,6,7,8,9,10,11]},{name:"Afternoon",hours:[12,13,14,15,16]},{name:"Evening",hours:[17,18,19,20,21,22]}],_=()=>{if(!Object.values(s.availability).some(M=>M.available)){alert("Please select at least one available day");return}e(s)},A="rgb(0, 35, 92)";return v.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6 w-full max-w-5xl mx-auto relative",children:[v.jsx("button",{className:"popup-close-button",onClick:n,"aria-label":"Close",children:"×"}),v.jsx("div",{className:"text-2xl font-semibold mb-6 text-center",children:i}),v.jsxs("div",{className:"mb-6 p-4 border rounded-lg bg-gray-50",children:[v.jsx("div",{className:"text-lg font-medium mb-3",children:"Maximum Days per Week"}),v.jsxs("div",{className:"flex items-center",children:[v.jsx("input",{type:"number",min:"1",max:f,value:s.maxDays,onChange:N=>o({...s,maxDays:Math.min(f,Math.max(1,parseInt(N.target.value)||1))}),className:"w-16 p-2 border rounded-md text-center",disabled:f===0}),v.jsx("span",{className:"ml-3 text-gray-600",children:"days"})]}),v.jsx("p",{className:"text-sm text-gray-500 mt-2",children:f>0?v.jsxs(v.Fragment,{children:["This worker will be scheduled for at most ",s.maxDays," day",s.maxDays!==1?"s":""," per week"]}):v.jsx("span",{className:"text-amber-600",children:"Please select at least one available day"})}),v.jsxs("p",{className:"text-xs text-blue-600 mt-1",children:["Maximum allowed: ",f," day",f!==1?"s":""," (based on availability)"]})]}),v.jsx("div",{className:"flex mb-8 justify-center",children:[0,1,2,3,4,5,6].map(N=>{const M=l===N,$=s.availability[N].available,E=s.availability[N].allDay;return v.jsx("button",{onClick:()=>u(N),className:`flex-shrink-0 py-3 px-6 mr-3 rounded-t-lg border-b-3 focus:outline-none text-lg ${M?"bg-blue-50 day-tab-active":"border-transparent hover:text-gray-700 hover:border-gray-300"} ${$?E?"bg-blue-100":"bg-blue-50":""}`,style:{fontWeight:700,color:M?A:"#374151",borderColor:M?A:"transparent"},children:P(N)},N)})}),v.jsxs("div",{className:"flex justify-between items-center mb-8 border-b pb-6",children:[v.jsxs("div",{className:"flex items-center",children:[v.jsx("input",{id:`day-${l}`,type:"checkbox",className:"w-6 h-6 text-blue-600 rounded focus:ring-blue-500",checked:s.availability[l].available,onChange:()=>p(l)}),v.jsxs("label",{htmlFor:`day-${l}`,className:"ml-3 text-xl font-semibold",style:{color:"#333333"},children:["Available on ",P(l)]})]}),s.availability[l].available&&v.jsxs("div",{className:"flex items-center",children:[v.jsx("input",{id:`allday-${l}`,type:"checkbox",className:"w-6 h-6 text-green-600 rounded focus:ring-green-500",checked:s.availability[l].allDay,onChange:()=>I(l)}),v.jsx("label",{htmlFor:`allday-${l}`,className:"ml-3 text-xl font-semibold",style:{color:"#333333"},children:"Available All Day"})]})]}),s.availability[l].available&&v.jsx("div",{className:"space-y-6",children:w.map((N,M)=>v.jsxs("div",{className:"border rounded-lg p-5",children:[v.jsx("div",{className:"text-lg font-medium mb-4",children:N.name}),v.jsx("div",{className:"grid grid-cols-6 gap-3",children:N.hours.map($=>v.jsx("div",{onClick:()=>R(l,$),className:`px-3 py-4 rounded-md text-center transition-colors duration-200 text-lg ${s.availability[l].allDay||s.availability[l].hours.includes($)?"bg-blue-500 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"} ${s.availability[l].allDay?"cursor-default":"cursor-pointer"}`,children:O($)},$))})]},M))}),v.jsxs("div",{className:"flex justify-between mt-10 pt-6 border-t",children:[r&&v.jsx("button",{onClick:()=>r(s),className:"bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 text-lg rounded transition-colors duration-200",children:"Remove Worker"}),v.jsxs("div",{className:`${r?"":"ml-auto"} space-x-4`,children:[v.jsx("button",{onClick:n,className:"navy-button font-medium py-3 px-6 text-lg rounded transition-colors duration-200",children:"Cancel"}),v.jsx("button",{onClick:_,className:"navy-button font-medium py-3 px-6 text-lg rounded transition-colors duration-200",children:"Save Changes"})]})]})]})};function b2(){const[t,e]=V.useState([]),[n,r]=V.useState(!1),[i,s]=V.useState(!1),[o,l]=V.useState(!1),[u,c]=V.useState(!1),[f,p]=V.useState(!0),[g,I]=V.useState(!1),{currentUser:R}=Ts(),[P,O]=V.useState({minWorkersPerShift:1,maxWorkersTotal:10,minHoursPerWorker:4,maxHoursPerWorker:8,customWorkersByDay:{0:{min:1,max:5},1:{min:1,max:5},2:{min:1,max:5},3:{min:1,max:5},4:{min:1,max:5},5:{min:1,max:5},6:{min:1,max:5}}}),[w,_]=V.useState({name:"",maxDays:5,availability:{0:{available:!1,allDay:!1,hours:[]},1:{available:!1,allDay:!1,hours:[]},2:{available:!1,allDay:!1,hours:[]},3:{available:!1,allDay:!1,hours:[]},4:{available:!1,allDay:!1,hours:[]},5:{available:!1,allDay:!1,hours:[]},6:{available:!1,allDay:!1,hours:[]}}});V.useEffect(()=>{async function Q(){if(R)try{p(!0),console.log("Loading people data for user:",R.uid);const ce=await gd(R.uid);console.log("Data loaded successfully:",ce),e(ce)}catch(ce){console.error("Error loading data:",ce),alert(`Error loading data: ${ce.message||"Unknown error"}`)}finally{p(!1)}else console.warn("No current user found - authentication may be required"),p(!1)}Q()},[R]);const A=()=>{s(!0)},N=()=>{c(!u)},M=(Q,ce,Ie)=>{O({...P,customWorkersByDay:{...P.customWorkersByDay,[Q]:{...P.customWorkersByDay[Q],[ce]:parseInt(Ie)||0}}})},$=()=>{console.log("Saved settings:",P),s(!1)},E=Q=>{_({...Q}),l(!0)},y=()=>{console.log("Generating schedule for:",t)},T=()=>{_({name:"",maxDays:5,availability:{0:{available:!1,allDay:!1,hours:[]},1:{available:!1,allDay:!1,hours:[]},2:{available:!1,allDay:!1,hours:[]},3:{available:!1,allDay:!1,hours:[]},4:{available:!1,allDay:!1,hours:[]},5:{available:!1,allDay:!1,hours:[]},6:{available:!1,allDay:!1,hours:[]}}}),r(!0)},k=async Q=>{if(!Q.name.trim()){alert("Please enter a worker name");return}if(!Object.values(Q.availability).some(Ie=>Ie.available)){alert("Please select at least one available day");return}if(!R){alert("You need to be logged in to save workers.");return}I(!0);try{console.log("Creating new worker object");const Ie=Q.id||Date.now().toString(),ke={...Q,id:Ie,createdAt:Q.createdAt||new Date().toISOString(),updatedAt:new Date().toISOString()};console.log("Worker to save:",ke),console.log("User ID:",R.uid),console.log("Attempting to save to Firebase...");const K=new Promise((ne,ve)=>{setTimeout(()=>ve(new Error("Save operation timed out. The database might be unavailable.")),1e4)}),te=await Promise.race([Gy(R.uid,ke),K]);console.log("Firebase save result:",te);try{const ne=await gd(R.uid);if(!ne.find(fe=>fe.id===Ie))throw new Error("Worker was saved but couldn't be verified in the database. Refresh the page to check if it was saved.");e(ne)}catch(ne){console.error("Error verifying save:",ne),e(ve=>[...ve,ke])}r(!1),alert("Worker saved successfully!"),console.log("Saved worker to database:",ke.name)}catch(Ie){console.error("Error saving worker:",Ie);let ke="Failed to save worker. ";Ie.code==="permission-denied"?ke+="You don't have permission to save data. Please check your account permissions.":Ie.message&&Ie.message.includes("timeout")?ke+="The operation timed out. Please check your internet connection and try again.":Ie.message&&Ie.message.includes("network")?ke+="Network error. Please check your internet connection and try again.":ke+="Error: "+(Ie.message||"Unknown error"),alert(ke)}finally{I(!1)}},C=async Q=>{try{const ce={...Q,updatedAt:new Date().toISOString()};await Gy(R.uid,ce),e(Ie=>Ie.map(ke=>ke.id===ce.id?ce:ke)),l(!1),console.log("Updated availability for:",ce.name)}catch(ce){console.error("Error updating worker:",ce),alert("Failed to update worker. Please try again. Error: "+ce.message)}},x=async Q=>{if(confirm(`Are you sure you want to remove ${Q.name}?`))try{await D2(R.uid,Q.id),e(ce=>ce.filter(Ie=>Ie.id!==Q.id)),l(!1),console.log("Removed worker:",Q.name)}catch(ce){console.error("Error removing worker:",ce),alert("Failed to remove worker. Please try again. Error: "+ce.message)}},S=Q=>["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][Q];return f?v.jsx("div",{className:"loading",children:"Loading..."}):v.jsxs("div",{className:"creator-container",children:[v.jsxs("div",{className:"creator-header",children:[v.jsx("button",{className:"settings-button",onClick:A,children:v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("circle",{cx:"12",cy:"12",r:"3"}),v.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]})}),v.jsx("button",{className:"add-button",onClick:T,children:v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),v.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})})]}),g&&v.jsx("div",{className:"status-message saving",children:"Saving... Please wait."}),v.jsx("div",{className:"staff-list",children:t.length>0?t.map(Q=>v.jsxs("div",{className:"staff-item",children:[v.jsx("div",{className:"staff-name",children:Q.name}),v.jsx("button",{className:"availability-button",onClick:()=>E(Q),children:"Availability"})]},Q.id)):v.jsx("div",{className:"no-staff-message",children:"No workers added yet. Click the + button to add a worker."})}),v.jsx("div",{className:"creator-footer",children:v.jsx("button",{className:"generate-button",onClick:y,disabled:t.length===0,children:"Generate Schedule"})}),n&&v.jsxs("div",{className:"modal-overlay",children:[v.jsxs("div",{className:"worker-name-input-wrapper relative",children:[v.jsx("button",{className:"popup-close-button",onClick:()=>r(!1),"aria-label":"Close",children:"×"}),v.jsx("input",{type:"text",placeholder:"Enter worker name",value:w.name,onChange:Q=>_({...w,name:Q.target.value}),className:"worker-name-input"})]}),v.jsx(Yy,{worker:w,onSave:k,onCancel:()=>r(!1),modalTitle:"Add New Worker"})]}),o&&v.jsx("div",{className:"modal-overlay",children:v.jsx(Yy,{worker:w,onSave:C,onCancel:()=>l(!1),onRemove:x,modalTitle:`Edit ${w.name}'s Availability`})}),i&&v.jsx("div",{className:"modal-overlay",children:v.jsxs("div",{className:"modal-content",children:[v.jsxs("div",{className:"modal-header",children:[v.jsx("h2",{children:"Schedule Settings"}),v.jsx("button",{className:"close-button",onClick:()=>s(!1),children:"×"})]}),v.jsxs("div",{className:"modal-body",children:[v.jsxs("div",{className:"form-group",children:[v.jsx("label",{htmlFor:"minWorkersPerShift",children:"Minimum Workers Per Shift:"}),v.jsx("input",{type:"number",id:"minWorkersPerShift",min:"1",value:P.minWorkersPerShift,onChange:Q=>O({...P,minWorkersPerShift:parseInt(Q.target.value)||1})})]}),v.jsxs("div",{className:"form-group",children:[v.jsx("label",{htmlFor:"maxWorkersTotal",children:"Maximum Workers Total:"}),v.jsx("input",{type:"number",id:"maxWorkersTotal",min:"1",value:P.maxWorkersTotal,onChange:Q=>O({...P,maxWorkersTotal:parseInt(Q.target.value)||1})})]}),v.jsxs("div",{className:"form-group",children:[v.jsx("label",{htmlFor:"minHoursPerWorker",children:"Minimum Hours Per Worker:"}),v.jsx("input",{type:"number",id:"minHoursPerWorker",min:"1",max:"24",value:P.minHoursPerWorker,onChange:Q=>O({...P,minHoursPerWorker:parseInt(Q.target.value)||1})})]}),v.jsxs("div",{className:"form-group",children:[v.jsx("label",{htmlFor:"maxHoursPerWorker",children:"Maximum Hours Per Worker:"}),v.jsx("input",{type:"number",id:"maxHoursPerWorker",min:"1",max:"24",value:P.maxHoursPerWorker,onChange:Q=>O({...P,maxHoursPerWorker:parseInt(Q.target.value)||1})})]}),v.jsx("div",{className:"custom-workers-toggle",children:v.jsx("button",{className:`custom-workers-button ${u?"active":""}`,onClick:N,children:u?"Hide Custom Worker Limits":"Show Custom Worker Limits"})}),u&&v.jsxs("div",{className:"custom-workers-section",children:[v.jsx("h3",{children:"Custom Worker Limits by Day"}),[0,1,2,3,4,5,6].map(Q=>v.jsxs("div",{className:"day-settings",children:[v.jsx("div",{className:"day-name",children:S(Q)}),v.jsxs("div",{className:"day-inputs",children:[v.jsxs("div",{className:"min-input",children:[v.jsx("label",{htmlFor:`min-workers-${Q}`,children:"Min:"}),v.jsx("input",{type:"number",id:`min-workers-${Q}`,min:"0",value:P.customWorkersByDay[Q].min,onChange:ce=>M(Q,"min",ce.target.value)})]}),v.jsxs("div",{className:"max-input",children:[v.jsx("label",{htmlFor:`max-workers-${Q}`,children:"Max:"}),v.jsx("input",{type:"number",id:`max-workers-${Q}`,min:"0",value:P.customWorkersByDay[Q].max,onChange:ce=>M(Q,"max",ce.target.value)})]})]})]},Q))]})]}),v.jsxs("div",{className:"modal-footer",children:[v.jsx("button",{className:"cancel-button",onClick:()=>s(!1),style:{backgroundColor:"rgb(0, 35, 92)",color:"white"},children:"Cancel"}),v.jsx("button",{className:"save-button",onClick:$,style:{backgroundColor:"rgb(0, 35, 92)",color:"white"},children:"Save Settings"})]})]})})]})}function L2(){return v.jsxs("div",{className:"main-container",children:[v.jsx("div",{className:"left-panel",children:v.jsx(x2,{})}),v.jsx("div",{className:"right-panel",children:v.jsx(b2,{})})]})}function V2(){const{currentUser:t}=Ts(),[e,n]=V.useState([]),[r,i]=V.useState(!0),[s,o]=V.useState(null),[l,u]=V.useState(!1),[c,f]=V.useState({startTime:"05:00",endTime:"13:00",requiredWorkers:1,label:"5 AM-1 PM"}),[p,g]=V.useState([]),[I,R]=V.useState({}),[P,O]=V.useState(null),[w,_]=V.useState(!1),[A,N]=V.useState([]),M=V.useRef(null),$=L=>{const W=JSON.parse(JSON.stringify(L));return Object.keys(W).forEach(j=>{W[j]&&Object.keys(W[j]).forEach(H=>{const z=W[j][H];z&&z.workers&&Array.isArray(z.workers)&&(z.workers=z.workers.map(Y=>String(Y)),console.log(`Normalized worker IDs for day ${j}, slot ${H}:`,z.workers))})}),W},E=(L,W)=>{const j=JSON.parse(JSON.stringify(L)),H=W.map(Y=>String(Y.id));let z=0;return console.log("Cleaning up schedule - Available staff IDs:",H),Object.keys(j).forEach(Y=>{j[Y]&&Object.keys(j[Y]).forEach(X=>{const ae=j[Y][X];if(ae&&ae.workers&&Array.isArray(ae.workers)){const Ee=ae.workers.length;ae.workers=ae.workers.filter(Ae=>{const Ze=String(Ae),le=H.includes(Ze);return le||(console.warn(`Removing non-existent worker ID ${Ae} from day ${Y}, slot ${X}`),z++),le}),Ee!==ae.workers.length&&console.log(`Removed ${Ee-ae.workers.length} invalid workers from day ${Y}, slot ${X}`)}})}),console.log(`Total workers removed from schedule: ${z}`),j};V.useEffect(()=>{y(new Date)},[]),V.useEffect(()=>{if(p.length>0&&A.length>0){const L=JSON.parse(JSON.stringify(I));A.forEach((W,j)=>{const H=j.toString();L[H]||(L[H]={}),p.forEach((z,Y)=>{const X=Y.toString();if(L[H][X]){const ae=L[H][X].workers||[];L[H][X]={workers:ae,required:z.requiredWorkers,start:z.startTime,end:z.endTime}}else L[H][X]={workers:[],required:z.requiredWorkers,start:z.startTime,end:z.endTime}}),Object.keys(L[H]).forEach(z=>{parseInt(z)>=p.length&&delete L[H][z]})}),R(L),console.log("Schedule structure updated:",L)}},[p,A]);const y=L=>{const W=[],j=L.getDay(),H=j===0?0:-j,z=new Date(L);z.setDate(L.getDate()+H);for(let Y=0;Y<7;Y++){const X=new Date(z);X.setDate(z.getDate()+Y),W.push(X)}N(W)};V.useEffect(()=>{async function L(){if(t)try{i(!0),console.log("Loading people data for user:",t.uid);const W=await gd(t.uid);console.log("People data loaded successfully:",W.length,"people"),console.log("People details:",W.map(H=>({id:H.id,name:H.name})));const j=W.map(H=>({...H,assigned:0,assignments:{}}));try{console.log("Attempting to load saved schedule...");const H=await Qy(t.uid);if(H&&H.length>0){const z=H.find(Y=>Y.id==="custom-schedule");if(z&&z.timeSlots&&z.schedule){console.log("Found saved schedule:",JSON.stringify(z));const Y=$(z.schedule),X=E(Y,j);let ae=!1,Ee=0;if(Object.entries(X).forEach(([Ae,Ze])=>{Ze&&Object.entries(Ze).forEach(([le,Fe])=>{Fe&&Fe.workers&&Fe.workers.length>0&&(ae=!0,Ee+=Fe.workers.length,console.log(`Found ${Fe.workers.length} workers in day ${Ae}, slot ${le}:`,Fe.workers),Fe.workers.forEach(Ue=>{const An=j.find(Mr=>String(Mr.id)===String(Ue));An?console.log(`Verified worker ${Ue} (${An.name}) exists in staff`):console.error(`Worker ${Ue} in schedule not found in staff!`)}))})}),console.log(`Total workers in cleaned schedule: ${Ee}`),ae||console.warn("WARNING: No workers found in the loaded schedule!"),console.log("Setting timeSlots with:",z.timeSlots.length,"slots"),g(z.timeSlots),console.log("Setting schedule with cleaned data"),R(X),ae){const Ae={};j.forEach(le=>{console.log(`Initializing assignments for worker: ${le.name} (${le.id})`),Ae[String(le.id)]={days:new Set,slots:{}}}),Object.entries(X).forEach(([le,Fe])=>{Fe&&Object.entries(Fe).forEach(([Ue,An])=>{!An||!An.workers||An.workers.forEach(Mr=>{const Cn=String(Mr);Ae[Cn]?(console.log(`Assigning worker ${Mr} to day ${le}, slot ${Ue}`),Ae[Cn].days.add(parseInt(le)),Ae[Cn].slots[le]||(Ae[Cn].slots[le]=[]),Ae[Cn].slots[le].push(parseInt(Ue))):console.error(`Worker ${Mr} not found in assignmentMap - this should not happen!`)})})});const Ze=j.map(le=>{const Fe=String(le.id),Ue=Ae[Fe]||{days:new Set,slots:{}};return{...le,assigned:Ue.days.size,assignments:Ue.slots}});console.log("Staff with assignments:",Ze.map(le=>({id:le.id,name:le.name,assigned:le.assigned}))),n(Ze)}else n(j)}else console.log("Saved schedule missing required data, resetting to empty schedule"),g([]),n(j)}else console.log("No saved schedule found, starting with empty schedule"),g([]),n(j)}catch(H){console.error("Error loading saved schedule:",H),g([]),n(j)}o(null)}catch(W){console.error("Error loading data:",W),o(`Error loading data: ${W.message||"Unknown error"}`)}finally{i(!1)}else console.warn("No current user found - authentication may be required"),i(!1)}L()},[t]);const T=L=>{const W=["SAT","SUN","MON","TUE","WED","THURS","FRIDAY"],j=(L+1)%7;return W[j]},k=L=>{if(!L)return"";const W=L.getMonth()+1,j=L.getDate();return`${W}/${j}`},C=L=>A&&A[L]?k(A[L]):"",x=L=>{if(!L)return"";const[W,j]=L.split(":").map(Number);let H="AM",z=W;return W>=12&&(H="PM",z=W===12?12:W-12),W===0&&(z=12),`${z}${j>0?":"+j.toString().padStart(2,"0"):""} ${H}`},S=L=>`${L.toString().padStart(2,"0")}:00`,Q=(L,W,j)=>{var Ze;if(!L||!j)return!1;const H=W,z=(Ze=L.availability)==null?void 0:Ze[H];if(!z||!z.available)return!1;if(z.allDay)return!0;const Y=j.start||j.startTime,X=j.end||j.endTime;if(!Y||!X)return console.error("Missing start or end time in timeSlot",j),!1;const ae=parseInt(Y.split(":")[0],10),Ee=parseInt(X.split(":")[0],10),Ae=z.hours.map(le=>typeof le=="string"?parseInt(le,10):le);for(let le=ae;le<Ee;le++)if(!Ae.includes(le))return!1;return!0},ce=()=>{const{startTime:L,endTime:W,requiredWorkers:j,label:H}=c,z=parseInt(L.split(":")[0],10),Y=parseInt(W.split(":")[0],10);if(z>=Y){alert("End time must be after start time");return}if(j<1){alert("At least one worker is required");return}const X={id:Date.now(),startTime:L,endTime:W,requiredWorkers:parseInt(j,10),label:H||`${x(L)}-${x(W)}`};g([...p,X]),u(!1),f({startTime:"05:00",endTime:"13:00",requiredWorkers:1,label:"5 AM-1 PM"})},Ie=L=>{if(window.confirm("Remove this time slot? This will clear any scheduled workers for this slot.")){const W=p.filter((z,Y)=>Y!==L),j={...I},H=new Set;Object.keys(j).forEach(z=>{j[z][L]&&j[z][L].workers&&j[z][L].workers.forEach(X=>{H.add(X)}),j[z][L]&&delete j[z][L];const Y={};Object.keys(j[z]).filter(X=>parseInt(X)!==L).forEach(X=>{const ae=parseInt(X)>L?(parseInt(X)-1).toString():X;Y[ae]=j[z][X]}),j[z]=Y}),g(W),R(j),fe(j),console.log("Workers freed from removed time slot:",Array.from(H))}},ke=(L,W)=>{const j=e.find(H=>H.id===W);if(j){if(j.assigned>=j.maxDays){L.preventDefault();return}O(W),M.current=L.target,L.target.classList.add("dragging"),L.dataTransfer.setData("workerId",W),L.dataTransfer.effectAllowed="move"}},K=L=>{O(null),M.current&&(M.current.classList.remove("dragging"),M.current=null)},te=(L,W,j)=>{var Ze,le,Fe;if(L.preventDefault(),!P)return;const H=e.find(Ue=>Ue.id===P),z=p[j],Y=W.toString(),X=(Ze=I[Y])==null?void 0:Ze[j];if(!H||!z||!X){L.dataTransfer.dropEffect="none",L.currentTarget.classList.add("invalid-drop-target");return}const ae=Q(H,W,{start:z.startTime,end:z.endTime}),Ee=((le=X.workers)==null?void 0:le.length)>=X.required,Ae=(Fe=X.workers)==null?void 0:Fe.includes(P);ae&&!Ee&&!Ae?(L.dataTransfer.dropEffect="move",L.currentTarget.classList.add("valid-drop-target")):(L.dataTransfer.dropEffect="none",L.currentTarget.classList.add("invalid-drop-target"))},ne=L=>{L.currentTarget.classList.remove("valid-drop-target","invalid-drop-target")},ve=(L,W,j)=>{var le,Fe;L.preventDefault(),L.currentTarget.classList.remove("valid-drop-target","invalid-drop-target");const H=L.dataTransfer.getData("workerId");if(!H)return;const z=e.find(Ue=>Ue.id===H),Y=p[j],X=W.toString();if(!z||!Y)return;I[X]||(I[X]={}),I[X][j]||(I[X][j]={workers:[],required:Y.requiredWorkers,start:Y.startTime,end:Y.endTime});const ae=I[X][j],Ee=Q(z,W,{start:Y.startTime,end:Y.endTime}),Ae=((le=ae.workers)==null?void 0:le.length)>=ae.required,Ze=(Fe=ae.workers)==null?void 0:Fe.includes(H);if(Ee&&!Ae&&!Ze){const Ue=JSON.parse(JSON.stringify(I));Ue[X][j].workers=[...ae.workers||[],H],R(Ue),fe(Ue)}},fe=L=>{const W={};e.forEach(H=>{W[String(H.id)]={days:new Set,slots:{}}}),Object.entries(L).forEach(([H,z])=>{z&&Object.entries(z).forEach(([Y,X])=>{!X||!X.workers||X.workers.forEach(ae=>{const Ee=String(ae);W[Ee]&&(W[Ee].days.add(parseInt(H)),W[Ee].slots[H]||(W[Ee].slots[H]=[]),W[Ee].slots[H].push(parseInt(Y)))})})});const j=e.map(H=>({...H,assigned:W[String(H.id)]?W[String(H.id)].days.size:0,assignments:W[String(H.id)]?W[String(H.id)].slots:{}}));n(j)},De=(L,W,j)=>{const H=JSON.parse(JSON.stringify(I));H[W]&&H[W][j]&&H[W][j].workers&&(H[W][j].workers=H[W][j].workers.filter(z=>z!==L),R(H),fe(H))},Yt=(L,W)=>{var z;const j=L.toString(),H=(z=I[j])==null?void 0:z[W];H&&console.log("Cell clicked:",j,W,H)},Jt=()=>{if(window.confirm("Are you sure you want to clear the entire schedule? This cannot be undone.")){const L=JSON.parse(JSON.stringify(I));Object.keys(L).forEach(W=>{L[W]&&Object.keys(L[W]).forEach(j=>{L[W][j]&&(L[W][j].workers=[])})}),R(L),fe(L)}},Xt=async()=>{if(!t){alert("You must be logged in to save the schedule");return}_(!0),console.log("Starting save schedule process...");try{let L=JSON.parse(JSON.stringify(I));const W=JSON.parse(JSON.stringify(p));L=$(L),console.log("Preparing schedule with the following workers assigned:"),Object.entries(L).forEach(([Y,X])=>{Object.entries(X).forEach(([ae,Ee])=>{Ee.workers&&Ee.workers.length>0&&console.log(`Day ${Y}, Slot ${ae}: Workers assigned:`,Ee.workers)})});const j={id:"custom-schedule",timeSlots:W,schedule:L,updatedAt:new Date().toISOString(),createdAt:new Date().toISOString()};await O2(t.uid,j);const z=(await Qy(t.uid)).find(Y=>Y.id==="custom-schedule");if(z){console.log("Verified saved schedule:",z);let Y=!1;z.schedule&&Object.entries(z.schedule).forEach(([X,ae])=>{Object.entries(ae).forEach(([Ee,Ae])=>{Ae.workers&&Ae.workers.length>0&&(Y=!0,console.log(`Verified Day ${X}, Slot ${Ee}: Workers present:`,Ae.workers))})}),Y?console.log("Workers successfully saved in the schedule"):console.warn("WARNING: Schedule saved, but no workers found in the saved data!"),alert("Schedule saved successfully!")}else console.error("Failed to verify saved schedule"),alert("Schedule may not have saved properly. Please check after reloading.")}catch(L){console.error("Error saving schedule:",L),alert(`Error saving schedule: ${L.message||"Unknown error"}`)}finally{_(!1)}},$t=(L,W)=>{var z;const j=L.toString(),H=(z=I[j])==null?void 0:z[W];return!H||!H.workers||H.workers.length===0?null:(console.log(`Getting worker info for day ${j}, slot ${W}, workers:`,H.workers),H.workers.map(Y=>{const X=String(Y),ae=e.find(Ee=>String(Ee.id)===X);return ae?{id:Y,name:ae.name}:(console.warn(`Worker with ID ${Y} not found in staff list`),null)}).filter(Y=>Y!==null))};return V.useEffect(()=>{console.log("Schedule updated - checking for workers:");let L=0;Object.entries(I).forEach(([W,j])=>{j&&Object.entries(j).forEach(([H,z])=>{var Y;((Y=z==null?void 0:z.workers)==null?void 0:Y.length)>0&&(L+=z.workers.length,console.log(`Found ${z.workers.length} workers in day ${W}, slot ${H}`))})}),console.log(`Total workers in schedule: ${L}`)},[I]),r?v.jsx("div",{className:"loading",children:"Loading..."}):s?v.jsx("div",{className:"error",children:s}):v.jsxs("div",{className:"custom-container",children:[v.jsx("h2",{children:"Weekly Schedule"}),e.length>0?v.jsxs("div",{className:"weekly-schedule-builder",children:[v.jsxs("div",{className:"schedule-controls",children:[v.jsx("button",{className:"add-time-slot-button",onClick:()=>u(!0),children:"Add Time Slot"}),v.jsx("button",{className:"clear-schedule-button",onClick:Jt,disabled:p.length===0,children:"Clear Schedule"}),v.jsx("button",{className:"save-schedule-button",onClick:Xt,disabled:w||p.length===0,children:w?"Saving...":"Save Schedule"})]}),v.jsxs("div",{className:"weekly-schedule-workspace",children:[v.jsx("div",{className:"weekly-schedule-grid-container",children:v.jsxs("div",{className:"weekly-schedule-grid",children:[v.jsxs("div",{className:"weekly-header-row",children:[v.jsx("div",{className:"weekly-time-column-header"}),[0,1,2,3,4,5,6].map(L=>v.jsxs("div",{className:"weekly-day-header",children:[v.jsx("div",{className:"weekly-day-name",children:T(L)}),v.jsx("div",{className:"weekly-day-date",children:C(L)})]},`day-header-${L}`))]}),p.length===0?v.jsx("div",{className:"empty-schedule-message",children:'No time slots added yet. Click "Add Time Slot" to create your schedule.'}):v.jsx("div",{className:"weekly-timeslots-container",children:p.map((L,W)=>v.jsxs("div",{className:"weekly-time-row",children:[v.jsxs("div",{className:"weekly-time-label",children:[L.label,v.jsx("div",{className:"weekly-slot-actions",children:v.jsx("button",{className:"weekly-remove-slot-button",onClick:()=>Ie(W),title:"Remove time slot",children:"×"})})]}),[0,1,2,3,4,5,6].map(j=>{const H=$t(j,W);return v.jsx("div",{className:`weekly-schedule-cell available ${H?"has-workers":"empty"}`,onClick:()=>Yt(j,W),onDragOver:z=>te(z,j,W),onDragLeave:ne,onDrop:z=>ve(z,j,W),children:H&&H.map((z,Y)=>v.jsxs("div",{className:"assigned-worker-container",children:[v.jsx("div",{className:"assigned-worker-name",children:z.name}),v.jsx("button",{className:"remove-worker-button",onClick:X=>{X.stopPropagation(),De(z.id,j.toString(),W)},title:"Remove worker",children:"×"})]},`worker-${Y}`))},`cell-${j}-${W}`)})]},`time-slot-${W}`))})]})}),v.jsxs("div",{className:"weekly-staff-container",children:[v.jsx("h3",{children:"Available Staff"}),v.jsx("div",{className:"weekly-staff-grid",children:e.map(L=>v.jsxs("div",{className:`weekly-staff-block ${L.assigned>=L.maxDays?"fully-assigned":""}`,draggable:L.assigned<L.maxDays,onDragStart:W=>ke(W,L.id),onDragEnd:K,children:[v.jsx("div",{className:"weekly-staff-name",children:L.name}),v.jsxs("div",{className:"weekly-staff-status",children:[v.jsxs("span",{className:"weekly-assignment-count",children:[L.assigned,"/",L.maxDays]})," days assigned"]})]},L.id))}),v.jsx("div",{className:"weekly-staff-help",children:v.jsx("p",{children:"Drag a worker to a time slot to assign them. Workers will only be assigned if they are available during that time."})})]})]})]}):v.jsx("div",{className:"no-data",children:v.jsx("p",{children:"No staff data available. Please add workers in the Home page first."})}),l&&v.jsx("div",{className:"modal-overlay",children:v.jsxs("div",{className:"modal-content",children:[v.jsxs("div",{className:"modal-header",children:[v.jsx("h3",{children:"Add Time Slot"}),v.jsx("button",{className:"modal-close-button",onClick:()=>u(!1),children:"×"})]}),v.jsxs("div",{className:"modal-body",children:[v.jsxs("div",{className:"form-group",children:[v.jsx("label",{htmlFor:"startTime",children:"Start Time:"}),v.jsx("select",{id:"startTime",value:c.startTime,onChange:L=>f({...c,startTime:L.target.value}),children:[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22].map(L=>v.jsx("option",{value:S(L),children:x(S(L))},L))})]}),v.jsxs("div",{className:"form-group",children:[v.jsx("label",{htmlFor:"endTime",children:"End Time:"}),v.jsx("select",{id:"endTime",value:c.endTime,onChange:L=>f({...c,endTime:L.target.value}),children:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map(L=>v.jsx("option",{value:S(L),children:x(S(L))},L))})]}),v.jsxs("div",{className:"form-group",children:[v.jsx("label",{htmlFor:"label",children:'Label (e.g. "5 AM-1 PM"):'}),v.jsx("input",{type:"text",id:"label",value:c.label,onChange:L=>f({...c,label:L.target.value}),placeholder:"Enter a label for this time slot"})]}),v.jsxs("div",{className:"form-group",children:[v.jsx("label",{htmlFor:"requiredWorkers",children:"Required Workers:"}),v.jsx("input",{type:"number",id:"requiredWorkers",min:"1",max:"10",value:c.requiredWorkers,onChange:L=>f({...c,requiredWorkers:parseInt(L.target.value)||1})})]})]}),v.jsxs("div",{className:"modal-footer",children:[v.jsx("button",{className:"modal-cancel-button",onClick:()=>u(!1),children:"Cancel"}),v.jsx("button",{className:"modal-add-button",onClick:ce,children:"Add Time Slot"})]})]})})]})}const M2=()=>{const t=V.useRef(),e=V.useRef(),{login:n}=Ts(),[r,i]=V.useState(""),[s,o]=V.useState(!1),l=ea();async function u(c){c.preventDefault();try{i(""),o(!0),await n(t.current.value,e.current.value),l("/")}catch(f){i("Failed to log in: "+f.message)}o(!1)}return v.jsx("div",{className:"login-container",children:v.jsxs("div",{className:"login-card",children:[v.jsxs("div",{className:"login-header",children:[v.jsx("img",{src:pp,alt:"Paris Baguette",className:"login-logo"}),v.jsx("h2",{children:"Welcome Back"}),v.jsx("p",{children:"Sign in to manage your schedule"})]}),r&&v.jsxs("div",{className:"error-message",children:[v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("circle",{cx:"12",cy:"12",r:"10"}),v.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),v.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),r]}),v.jsxs("form",{className:"login-form",onSubmit:u,children:[v.jsxs("div",{className:"form-group",children:[v.jsx("label",{htmlFor:"email-address",children:"Email address"}),v.jsx("input",{id:"email-address",name:"email",type:"email",ref:t,required:!0,className:"form-input",placeholder:"Enter your email"})]}),v.jsxs("div",{className:"form-group",children:[v.jsx("label",{htmlFor:"password",children:"Password"}),v.jsx("input",{id:"password",name:"password",type:"password",ref:e,required:!0,className:"form-input",placeholder:"Enter your password"})]}),v.jsx("button",{type:"submit",disabled:s,className:"login-button",children:s?v.jsxs(v.Fragment,{children:[v.jsx("span",{className:"loading-spinner"}),"Signing in..."]}):"Sign In"})]}),v.jsxs("div",{className:"signup-link",children:["Don't have an account?",v.jsx(ho,{to:"/signup",children:"Sign up"})]})]})})};const j2=()=>{const t=V.useRef(),e=V.useRef(),n=V.useRef(),{signup:r}=Ts(),[i,s]=V.useState(""),[o,l]=V.useState(!1),[u,c]=V.useState(!1),f=ea(),[p,g]=V.useState({length:!1,hasNumber:!1,hasSpecial:!1,match:!1});V.useEffect(()=>{var w,_;const P=((w=e.current)==null?void 0:w.value)||"",O=((_=n.current)==null?void 0:_.value)||"";g({length:P.length>=8,hasNumber:/\d/.test(P),hasSpecial:/[!@#$%^&*(),.?":{}|<>]/.test(P),match:P===O&&P!==""})},[o]);const I=()=>{const P=e.current.value,O=n.current.value;g({length:P.length>=8,hasNumber:/\d/.test(P),hasSpecial:/[!@#$%^&*(),.?":{}|<>]/.test(P),match:P===O&&P!==""})};async function R(P){if(P.preventDefault(),e.current.value!==n.current.value)return s("Passwords do not match");if(!u)return s("You must agree to the Terms of Service");try{s(""),l(!0),await r(t.current.value,e.current.value),f("/")}catch(O){s("Failed to create an account: "+O.message)}l(!1)}return v.jsx("div",{className:"signup-container",children:v.jsxs("div",{className:"signup-card",children:[v.jsxs("div",{className:"signup-header",children:[v.jsx("img",{src:pp,alt:"Paris Baguette",className:"signup-logo"}),v.jsx("h2",{children:"Create an Account"}),v.jsx("p",{children:"Join us to start managing your schedule"})]}),i&&v.jsxs("div",{className:"error-message",children:[v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("circle",{cx:"12",cy:"12",r:"10"}),v.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),v.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),i]}),v.jsxs("form",{className:"signup-form",onSubmit:R,children:[v.jsxs("div",{className:"form-group",children:[v.jsx("label",{htmlFor:"email-address",children:"Email address"}),v.jsx("input",{id:"email-address",name:"email",type:"email",ref:t,required:!0,className:"form-input",placeholder:"Enter your email"})]}),v.jsxs("div",{className:"form-group",children:[v.jsx("label",{htmlFor:"password",children:"Password"}),v.jsx("input",{id:"password",name:"password",type:"password",ref:e,required:!0,className:"form-input",placeholder:"Create a password",onChange:I}),v.jsxs("div",{className:"password-requirements",children:[v.jsxs("div",{className:`requirement ${p.length?"valid":""}`,children:[v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p.length?v.jsx("path",{d:"M20 6L9 17l-5-5"}):v.jsx("path",{d:"M18 6L6 18M6 6l12 12"})}),"At least 8 characters"]}),v.jsxs("div",{className:`requirement ${p.hasNumber?"valid":""}`,children:[v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p.hasNumber?v.jsx("path",{d:"M20 6L9 17l-5-5"}):v.jsx("path",{d:"M18 6L6 18M6 6l12 12"})}),"At least 1 number"]}),v.jsxs("div",{className:`requirement ${p.hasSpecial?"valid":""}`,children:[v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p.hasSpecial?v.jsx("path",{d:"M20 6L9 17l-5-5"}):v.jsx("path",{d:"M18 6L6 18M6 6l12 12"})}),"At least 1 special character"]})]})]}),v.jsxs("div",{className:"form-group",children:[v.jsx("label",{htmlFor:"password-confirm",children:"Confirm Password"}),v.jsx("input",{id:"password-confirm",name:"password-confirm",type:"password",ref:n,required:!0,className:"form-input",placeholder:"Confirm your password",onChange:I}),v.jsxs("div",{className:`requirement ${p.match?"valid":""}`,children:[v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p.match?v.jsx("path",{d:"M20 6L9 17l-5-5"}):v.jsx("path",{d:"M18 6L6 18M6 6l12 12"})}),"Passwords match"]})]}),v.jsxs("div",{className:"terms-checkbox",children:[v.jsx("input",{type:"checkbox",id:"terms",checked:u,onChange:P=>c(P.target.checked)}),v.jsxs("label",{htmlFor:"terms",children:["I agree to the ",v.jsx("a",{href:"#terms",children:"Terms of Service"})," and ",v.jsx("a",{href:"#privacy",children:"Privacy Policy"})]})]}),v.jsx("button",{type:"submit",disabled:o,className:"signup-button",children:o?v.jsxs(v.Fragment,{children:[v.jsx("span",{className:"loading-spinner"}),"Creating Account..."]}):"Create Account"})]}),v.jsxs("div",{className:"login-link",children:["Already have an account?",v.jsx(ho,{to:"/login",children:"Sign in"})]})]})})},Jy=({children:t})=>{const{currentUser:e}=Ts();return e?v.jsx(N2,{children:t}):v.jsx(ZS,{to:"/login"})};function F2(){return v.jsx(R2,{children:v.jsxs(tk,{children:[v.jsx(Qs,{path:"/login",element:v.jsx(M2,{})}),v.jsx(Qs,{path:"/signup",element:v.jsx(j2,{})}),v.jsx(Qs,{path:"/custom",element:v.jsx(Jy,{children:v.jsx(V2,{})})}),v.jsx(Qs,{path:"/",element:v.jsx(Jy,{children:v.jsx(L2,{})})})]})})}c0(document.getElementById("root")).render(v.jsx(V.StrictMode,{children:v.jsx(lk,{children:v.jsx(F2,{})})}));
