(function(){var g,aa=aa||{},m=this;function p(a){return void 0!==a}
function q(a,b,c){a=a.split(".");c=c||m;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&p(b)?c[d]=b:c[d]?c=c[d]:c=c[d]={}}
function r(a,b){for(var c=a.split("."),d=b||m,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function t(){}
function ba(a){a.getInstance=function(){return a.V?a.V:a.V=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function ea(a){return"array"==da(a)}
function fa(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function u(a){return"string"==typeof a}
function ga(a){return"number"==typeof a}
function ha(a){return"function"==da(a)}
function ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ka(a){return a[la]||(a[la]=++ma)}
var la="closure_uid_"+(1E9*Math.random()>>>0),ma=0;function na(a,b,c){return a.call.apply(a.bind,arguments)}
function oa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function v(a,b,c){v=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?na:oa;return v.apply(null,arguments)}
function pa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var w=Date.now||function(){return+new Date};
function x(a,b){function c(){}
c.prototype=b.prototype;a.I=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(a,c,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}}
;function qa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,qa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
x(qa,Error);qa.prototype.name="CustomError";var ra;var ta=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function ua(a){return decodeURIComponent(a.replace(/\+/g," "))}
var va=/&/g,wa=/</g,xa=/>/g,ya=/"/g,za=/'/g,Aa=/\x00/g,Ba=/[\x00&<>"']/;function Ca(a){return-1!=a.indexOf("&")?"document"in m?Da(a):Ea(a):a}
function Da(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},c;c=m.document.createElement("div");return a.replace(Fa,function(a,e){var f=b[a];if(f)return f;if("#"==e.charAt(0)){var h=+("0"+e.substr(1));isNaN(h)||(f=String.fromCharCode(h))}f||(c.innerHTML=a+" ",f=c.firstChild.nodeValue.slice(0,-1));return b[a]=f})}
function Ea(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=+("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return a}})}
var Fa=/&([^;\s<&]+);?/g,Ga={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},Ha={"'":"\\'"};
function Ia(a,b){for(var c=0,d=ta(String(a)).split("."),e=ta(String(b)).split("."),f=Math.max(d.length,e.length),h=0;0==c&&h<f;h++){var k=d[h]||"",l=e[h]||"",n=RegExp("(\\d*)(\\D*)","g"),H=RegExp("(\\d*)(\\D*)","g");do{var ca=n.exec(k)||["","",""],sa=H.exec(l)||["","",""];if(0==ca[0].length&&0==sa[0].length)break;c=Ja(0==ca[1].length?0:parseInt(ca[1],10),0==sa[1].length?0:parseInt(sa[1],10))||Ja(0==ca[2].length,0==sa[2].length)||Ja(ca[2],sa[2])}while(0==c)}return c}
function Ja(a,b){return a<b?-1:a>b?1:0}
function Ka(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;function La(){}
;var Ma=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(u(a))return u(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},y=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Na=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=u(a)?a.split(""):a,k=0;k<d;k++)if(k in h){var l=h[k];
b.call(c,l,k,a)&&(e[f++]=l)}return e},z=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=u(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));
return e},Oa=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1},Pa=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};
function Qa(a,b,c){b=Ra(a,b,c);return 0>b?null:u(a)?a.charAt(b):a[b]}
function Ra(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}
function A(a,b){return 0<=Ma(a,b)}
function Sa(){var a=Ta;if(!ea(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0}
function Ua(a,b){A(a,b)||a.push(b)}
function Va(a,b){var c=Ma(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function Wa(a,b){var c=Ra(a,b,void 0);0<=c&&Array.prototype.splice.call(a,c,1)}
function Xa(a){return Array.prototype.concat.apply(Array.prototype,arguments)}
function Ya(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Za(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(fa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}}
function $a(a,b,c,d){return Array.prototype.splice.apply(a,ab(arguments,1))}
function ab(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function bb(a,b,c){if(!fa(a)||!fa(b)||a.length!=b.length)return!1;var d=a.length;c=c||cb;for(var e=0;e<d;e++)if(!c(a[e],b[e]))return!1;return!0}
function db(a,b){return a>b?1:a<b?-1:0}
function cb(a,b){return a===b}
;function eb(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function fb(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d}
function gb(a){var b=0,c;for(c in a)b++;return b}
function ib(a,b){return jb(a,b)}
function kb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function lb(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function nb(a){return null!==a&&"withCredentials"in a}
function jb(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function ob(a){var b=pb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function rb(a){for(var b in a)return!1;return!0}
function sb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function tb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function ub(a){var b=da(a);if("object"==b||"array"==b){if(ha(a.clone))return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=ub(a[c]);return b}return a}
var vb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<vb.length;f++)c=vb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var xb;a:{var yb=m.navigator;if(yb){var zb=yb.userAgent;if(zb){xb=zb;break a}}xb=""}function B(a){return-1!=xb.indexOf(a)}
;function Ab(){return B("Opera")||B("OPR")}
function Bb(){return(B("Chrome")||B("CriOS"))&&!Ab()&&!B("Edge")}
;function Cb(){this.f=""}
Cb.prototype.Tb=!0;Cb.prototype.Ob=function(){return this.f};
Cb.prototype.toString=function(){return"Const{"+this.f+"}"};
function Db(a){var b=new Cb;b.f=a;return b}
;function Eb(){this.f="";this.h=Fb}
Eb.prototype.Tb=!0;Eb.prototype.Ob=function(){return this.f};
function Gb(a){if(a instanceof Eb&&a.constructor===Eb&&a.h===Fb)return a.f;da(a);return"type_error:SafeUrl"}
var Hb=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function Ib(a){if(a instanceof Eb)return a;a=a.Tb?a.Ob():String(a);Hb.test(a)||(a="about:invalid#zClosurez");return Jb(a)}
var Fb={};function Jb(a){var b=new Eb;b.f=a;return b}
Jb("about:blank");function Kb(){this.f="";this.h=Lb;this.j=null}
Kb.prototype.Tb=!0;Kb.prototype.Ob=function(){return this.f};
function Mb(a){if(a instanceof Kb&&a.constructor===Kb&&a.h===Lb)return a.f;da(a);return"type_error:SafeHtml"}
var Lb={};function Nb(a,b){var c=new Kb;c.f=a;c.j=b;return c}
Nb("<!DOCTYPE html>",0);Nb("",0);Nb("<br>",0);function Ob(a,b){var c;c=b instanceof Eb?b:Ib(b);a.href=Gb(c)}
;function Pb(a,b,c){a&&(a.dataset?a.dataset[Qb(b)]=c:a.setAttribute("data-"+b,c))}
function C(a,b){return a?a.dataset?a.dataset[Qb(b)]:a.getAttribute("data-"+b):null}
function Rb(a,b){a&&(a.dataset?delete a.dataset[Qb(b)]:a.removeAttribute("data-"+b))}
var Sb={};function Qb(a){return Sb[a]||(Sb[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function Tb(a){m.setTimeout(function(){throw a;},0)}
var Ub;
function Vb(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!B("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=v(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!B("Trident")&&!B("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.jc;c.jc=null;a()}};
return function(a){d.next={jc:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}}
;function Wb(a,b,c){this.l=c;this.j=a;this.o=b;this.h=0;this.f=null}
Wb.prototype.get=function(){var a;0<this.h?(this.h--,a=this.f,this.f=a.next,a.next=null):a=this.j();return a};
function Xb(a,b){a.o(b);a.h<a.l&&(a.h++,b.next=a.f,a.f=b)}
;function Yb(){this.h=this.f=null}
var $b=new Wb(function(){return new Zb},function(a){a.reset()},100);
Yb.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.h=null),a.next=null);return a};
function Zb(){this.next=this.scope=this.f=null}
Zb.prototype.reset=function(){this.next=this.scope=this.f=null};function ac(a,b){bc||cc();dc||(bc(),dc=!0);var c=ec,d=$b.get();d.f=a;d.scope=b;d.next=null;c.h?c.h.next=d:c.f=d;c.h=d}
var bc;function cc(){if(m.Promise&&m.Promise.resolve){var a=m.Promise.resolve(void 0);bc=function(){a.then(fc)}}else bc=function(){var a=fc;
!ha(m.setImmediate)||m.Window&&m.Window.prototype&&!B("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(Ub||(Ub=Vb()),Ub(a)):m.setImmediate(a)}}
var dc=!1,ec=new Yb;function fc(){for(var a=null;a=ec.remove();){try{a.f.call(a.scope)}catch(b){Tb(b)}Xb($b,a)}dc=!1}
;function D(){this.La=this.La;this.Y=this.Y}
D.prototype.La=!1;D.prototype.isDisposed=function(){return this.La};
D.prototype.dispose=function(){this.La||(this.La=!0,this.G())};
function gc(a,b){a.La?b.call(void 0):(a.Y||(a.Y=[]),a.Y.push(p(void 0)?v(b,void 0):b))}
D.prototype.G=function(){if(this.Y)for(;this.Y.length;)this.Y.shift()()};
function E(a){a&&"function"==typeof a.dispose&&a.dispose()}
function hc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];fa(d)?hc.apply(null,d):E(d)}}
;function F(a){D.call(this);this.l=1;this.h=[];this.j=0;this.f=[];this.ga={};this.o=!!a}
x(F,D);g=F.prototype;g.subscribe=function(a,b,c){var d=this.ga[a];d||(d=this.ga[a]=[]);var e=this.l;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.l=e+3;d.push(e);return e};
g.unsubscribe=function(a,b,c){if(a=this.ga[a]){var d=this.f;if(a=Qa(a,function(a){return d[a+1]==b&&d[a+2]==c}))return this.qa(a)}return!1};
g.qa=function(a){var b=this.f[a];if(b){var c=this.ga[b];0!=this.j?(this.h.push(a),this.f[a+1]=t):(c&&Va(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
g.D=function(a,b){var c=this.ga[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.o)for(e=0;e<c.length;e++){var h=c[e];ic(this.f[h+1],this.f[h+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)h=c[e],this.f[h+1].apply(this.f[h+2],d)}finally{if(this.j--,0<this.h.length&&0==this.j)for(;c=this.h.pop();)this.qa(c)}}return 0!=e}return!1};
function ic(a,b,c){ac(function(){a.apply(b,c)})}
g.clear=function(a){if(a){var b=this.ga[a];b&&(y(b,this.qa,this),delete this.ga[a])}else this.f.length=0,this.ga={}};
g.X=function(a){if(a){var b=this.ga[a];return b?b.length:0}a=0;for(b in this.ga)a+=this.X(b);return a};
g.G=function(){F.I.G.call(this);this.clear();this.h.length=0};var jc=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};q("yt.config_",jc,void 0);q("yt.tokens_",window.yt&&window.yt.tokens_||{},void 0);var kc=window.yt&&window.yt.msgs_||r("window.ytcfg.msgs")||{};q("yt.msgs_",kc,void 0);function lc(a){mc(jc,arguments)}
function G(a,b){return a in jc?jc[a]:b}
function I(a,b){ha(a)&&(a=nc(a));return window.setTimeout(a,b)}
function oc(a,b){ha(a)&&(a=nc(a));window.setInterval(a,b)}
function J(a){window.clearTimeout(a)}
function nc(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){throw pc(b),b;}}:a}
function pc(a,b){var c=r("yt.logging.errors.log");c?c(a,b):(c=G("ERRORS",[]),c.push([a,b]),lc("ERRORS",c))}
function qc(){var a={},b="FLASH_UPGRADE"in kc?kc.FLASH_UPGRADE:'You need to upgrade your Adobe Flash Player to watchthis video. <br> <a href="http://get.adobe.com/flashplayer/">Download it from Adobe.</a>';if(b)for(var c in a)b=b.replace(new RegExp("\\$"+c,"gi"),function(){return a[c]});
return b}
function mc(a,b){if(1<b.length){var c=b[0];a[c]=b[1]}else{var d=b[0];for(c in d)a[c]=d[c]}}
var rc="Microsoft Internet Explorer"==navigator.appName;var sc=r("yt.pubsub.instance_")||new F;F.prototype.subscribe=F.prototype.subscribe;F.prototype.unsubscribeByKey=F.prototype.qa;F.prototype.publish=F.prototype.D;F.prototype.clear=F.prototype.clear;q("yt.pubsub.instance_",sc,void 0);var tc=r("yt.pubsub.subscribedKeys_")||{};q("yt.pubsub.subscribedKeys_",tc,void 0);var uc=r("yt.pubsub.topicToKeys_")||{};q("yt.pubsub.topicToKeys_",uc,void 0);var vc=r("yt.pubsub.isSynchronous_")||{};q("yt.pubsub.isSynchronous_",vc,void 0);
var wc=r("yt.pubsub.skipSubId_")||null;q("yt.pubsub.skipSubId_",wc,void 0);function xc(a,b,c){var d=yc();if(d){var e=d.subscribe(a,function(){if(!wc||wc!=e){var d=arguments,h=function(){tc[e]&&b.apply(c||window,d)};
try{vc[a]?h():I(h,0)}catch(k){pc(k)}}},c);
tc[e]=!0;uc[a]||(uc[a]=[]);uc[a].push(e);return e}return 0}
function zc(a){var b=yc();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),y(a,function(a){b.unsubscribeByKey(a);delete tc[a]}))}
function K(a,b){var c=yc();return c?c.publish.apply(c,arguments):!1}
function Ac(a,b){vc[a]=!0;var c=yc();c&&c.publish.apply(c,arguments);vc[a]=!1}
function Bc(a){uc[a]&&(a=uc[a],y(a,function(a){tc[a]&&delete tc[a]}),a.length=0)}
function Cc(a){var b=yc();if(b)if(b.clear(a),a)Bc(a);else for(var c in uc)Bc(c)}
function yc(){return r("yt.pubsub.instance_")}
;function Dc(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Ec,""),c=c.replace(Fc,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Gc(a,b)}
function Gc(a,b){var c=Hc(a),d=document.getElementById(c),e=d&&C(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){var e=xc(c,b),h=""+ka(b);Ic[h]=e}f||(d=Jc(a,c,function(){C(d,"loaded")||(Pb(d,"loaded","true"),K(c),I(pa(Cc,c),0))}))}}
function Jc(a,b,c){var d=document.createElement("script");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
d.src=a;a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function Kc(a,b){if(a&&b){var c=""+ka(b);(c=Ic[c])&&zc(c)}}
function Hc(a){var b=document.createElement("a");Ob(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ka(a)}
var Ec=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Fc=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/,Ic={};var Lc=null;function Mc(){var a=G("BG_I",null),b=G("BG_IU",null),c=G("BG_P",void 0);b?Dc(b,function(){Lc=new botguard.bg(c)}):a&&(eval(a),Lc=new botguard.bg(c))}
function Nc(){return null!=Lc}
function Oc(){return Lc?Lc.invoke():null}
;function Pc(a,b){return Nb(b,null)}
;var Qc="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""};function Rc(){}
Rc.prototype.next=function(){throw Qc;};
Rc.prototype.va=function(){return this};
function Sc(a){if(a instanceof Rc)return a;if("function"==typeof a.va)return a.va(!1);if(fa(a)){var b=0,c=new Rc;c.next=function(){for(;;){if(b>=a.length)throw Qc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Tc(a,b,c){if(fa(a))try{y(a,b,c)}catch(d){if(d!==Qc)throw d;}else{a=Sc(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==Qc)throw d;}}}
function Uc(a){if(fa(a))return Ya(a);a=Sc(a);var b=[];Tc(a,function(a){b.push(a)});
return b}
;function Vc(a,b){this.h={};this.f=[];this.Ea=this.j=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)Wc(this,arguments[d],arguments[d+1])}else if(a){a instanceof Vc?(c=a.ra(),d=a.U()):(c=lb(a),d=kb(a));for(var e=0;e<c.length;e++)Wc(this,c[e],d[e])}}
g=Vc.prototype;g.X=function(){return this.j};
g.U=function(){Xc(this);for(var a=[],b=0;b<this.f.length;b++)a.push(this.h[this.f[b]]);return a};
g.ra=function(){Xc(this);return this.f.concat()};
g.Ya=function(a){for(var b=0;b<this.f.length;b++){var c=this.f[b];if(Yc(this.h,c)&&this.h[c]==a)return!0}return!1};
g.equals=function(a,b){if(this===a)return!0;if(this.j!=a.X())return!1;var c=b||Zc;Xc(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Zc(a,b){return a===b}
g.isEmpty=function(){return 0==this.j};
g.clear=function(){this.h={};this.Ea=this.j=this.f.length=0};
g.remove=function(a){return Yc(this.h,a)?(delete this.h[a],this.j--,this.Ea++,this.f.length>2*this.j&&Xc(this),!0):!1};
function Xc(a){if(a.j!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Yc(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.j!=a.f.length){for(var e={},c=b=0;b<a.f.length;)d=a.f[b],Yc(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
g.get=function(a,b){return Yc(this.h,a)?this.h[a]:b};
function Wc(a,b,c){Yc(a.h,b)||(a.j++,a.f.push(b),a.Ea++);a.h[b]=c}
g.forEach=function(a,b){for(var c=this.ra(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.clone=function(){return new Vc(this)};
g.va=function(a){Xc(this);var b=0,c=this.Ea,d=this,e=new Rc;e.next=function(){if(c!=d.Ea)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw Qc;var e=d.f[b++];return a?e:d.h[e]};
return e};
function Yc(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function $c(a){return a.X&&"function"==typeof a.X?a.X():fa(a)||u(a)?a.length:gb(a)}
function ad(a){if(a.U&&"function"==typeof a.U)return a.U();if(u(a))return a.split("");if(fa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return kb(a)}
function bd(a){if(a.ra&&"function"==typeof a.ra)return a.ra();if(!a.U||"function"!=typeof a.U){if(fa(a)||u(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return lb(a)}}
function cd(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(fa(a)||u(a))y(a,b,void 0);else for(var c=bd(a),d=ad(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}
function dd(a,b){if("function"==typeof a.every)return a.every(b,void 0);if(fa(a)||u(a))return Pa(a,b,void 0);for(var c=bd(a),d=ad(a),e=d.length,f=0;f<e;f++)if(!b.call(void 0,d[f],c&&c[f],a))return!1;return!0}
;function ed(a){this.f=new Vc;if(a){a=ad(a);for(var b=a.length,c=0;c<b;c++){var d=a[c];Wc(this.f,fd(d),d)}}}
function fd(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+ka(a):b.substr(0,1)+a}
g=ed.prototype;g.X=function(){return this.f.X()};
g.removeAll=function(a){a=ad(a);for(var b=a.length,c=0;c<b;c++)this.remove(a[c])};
g.remove=function(a){return this.f.remove(fd(a))};
g.clear=function(){this.f.clear()};
g.isEmpty=function(){return this.f.isEmpty()};
g.contains=function(a){a=fd(a);return Yc(this.f.h,a)};
g.U=function(){return this.f.U()};
g.clone=function(){return new ed(this)};
g.equals=function(a){return this.X()==$c(a)&&gd(this,a)};
function gd(a,b){var c=$c(b);if(a.X()>c)return!1;!(b instanceof ed)&&5<c&&(b=new ed(b));return dd(a,function(a){var c=b;return c.contains&&"function"==typeof c.contains?c.contains(a):c.Ya&&"function"==typeof c.Ya?c.Ya(a):fa(c)||u(c)?A(c,a):jb(c,a)})}
g.va=function(){return this.f.va(!1)};function hd(){return B("iPhone")&&!B("iPod")&&!B("iPad")}
;var id=Ab(),L=B("Trident")||B("MSIE"),jd=B("Edge"),kd=B("Gecko")&&!(-1!=xb.toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),ld=-1!=xb.toLowerCase().indexOf("webkit")&&!B("Edge"),md=B("Macintosh"),nd=B("Windows");function od(){var a=xb;if(kd)return/rv\:([^\);]+)(\)|;)/.exec(a);if(jd)return/Edge\/([\d\.]+)/.exec(a);if(L)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ld)return/WebKit\/(\S+)/.exec(a)}
function pd(){var a=m.document;return a?a.documentMode:void 0}
var qd=function(){if(id&&m.opera){var a;var b=m.opera.version;try{a=b()}catch(c){a=b}return a}a="";(b=od())&&(a=b?b[1]:"");return L&&(b=pd(),b>parseFloat(a))?String(b):a}(),rd={};
function sd(a){return rd[a]||(rd[a]=0<=Ia(qd,a))}
var td=m.document,ud=td&&L?pd()||("CSS1Compat"==td.compatMode?parseInt(qd,10):5):void 0;function vd(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function wd(a){return eval("("+a+")")}
function M(a){return xd(new yd(void 0),a)}
function yd(a){this.f=a}
function xd(a,b){var c=[];zd(a,b,c);return c.join("")}
function zd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(ea(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],zd(a,a.f?a.f.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),Ad(d,c),c.push(":"),zd(a,a.f?a.f.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":Ad(b,
c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Bd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Cd=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function Ad(a,b){b.push('"',a.replace(Cd,function(a){var b=Bd[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Bd[a]=b);return b}),'"')}
;var Dd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function Ed(a){return(a=a.match(Dd)[3]||null)?decodeURI(a):a}
function Fd(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null,h=null;0<=e?(f=c[d].substring(0,e),h=c[d].substring(e+1)):f=c[d];b(f,h?ua(h):"")}}
function Gd(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function Hd(a,b,c){if(ea(b))for(var d=0;d<b.length;d++)Hd(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function Id(a,b,c){for(c=c||0;c<b.length;c+=2)Hd(b[c],b[c+1],a);return a}
function Jd(a,b){for(var c in b)Hd(c,b[c],a);return a}
function Kd(a){a=Jd([],a);a[0]="";return a.join("")}
function Ld(a,b){return Gd(2==arguments.length?Id([a],arguments[1],0):Id([a],arguments,1))}
function Md(a,b){return Gd(Jd([a],b))}
;function Nd(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=ua(e[0]||""),e=ua(e[1]||"");f in b?ea(b[f])?Za(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Od(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=Nd(d[1]||""),e;for(e in b)d[e]=b[e];return Md(a,d)+c}
function Pd(a){a=Ed(a);a=null===a?null:a.split(".").reverse();return(null===a?!1:"com"==a[0]&&a[1].match(/^youtube(?:-nocookie)?$/)?!0:!1)||(null===a?!1:"google"==a[1]?!0:"google"==a[2]?"au"==a[0]&&"com"==a[1]?!0:"uk"==a[0]&&"co"==a[1]?!0:!1:!1)}
;var Qd=null;"undefined"!=typeof XMLHttpRequest?Qd=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(Qd=function(){return new ActiveXObject("Microsoft.XMLHTTP")});
function Rd(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Sd(a,b,c,d,e,f,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&nc(b)(l)}
var l=Qd&&Qd();if(!("open"in l))return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;c=(c||"GET").toUpperCase();d=d||"";l.open(c,a,!0);f&&(l.responseType=f);h&&(l.withCredentials=!0);f="POST"==c;if(e=Td(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(f=!1);f&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
function Td(a,b){b=b||{};for(var c in Ud){var d=G(Ud[c]),e;if(e=d){e=a;var f=void 0;f=window.location.href;var h=e.match(Dd)[1]||null,k=Ed(e);h&&k?(e=e.match(Dd),f=f.match(Dd),e=e[3]==f[3]&&e[1]==f[1]&&e[4]==f[4]):e=k?Ed(f)==k&&(+(f.match(Dd)[4]||0)||null)==(+(e.match(Dd)[4]||0)||null):!0;e||(e=c,f=G("CORS_HEADER_WHITELIST")||{},e=(h=Ed(a))?(f=f[h])?A(f,e):!1:!0)}e&&(b[c]=d)}return b}
function Vd(a,b){var c=G("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.ef&&(!Ed(a)||b.withCredentials||Ed(a)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.S&&b.S[c])}
function Wd(a,b){var c=b.format||"JSON";b.ff&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=G("XSRF_FIELD_NAME",void 0),e=G("XSRF_TOKEN",void 0),f=b.ac;f&&(f[d]&&delete f[d],a=Od(a,f||{}));var h=b.postBody||"",f=b.S;Vd(a,b)&&(f||(f={}),f[d]=e);f&&u(h)&&(d=Nd(h),wb(d,f),h=Kd(d));var k=!1,l,n=Sd(a,function(a){if(!k){k=!0;l&&J(l);var d=Rd(a),e=null;if(d||400<=a.status&&500>a.status)e=Xd(c,a,b.df);if(d)a:{switch(c){case "XML":d=
0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||m;d?b.ca&&b.ca.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.Xb&&b.Xb.call(f,a,e)}},b.method,h,b.headers,b.responseType,b.withCredentials);
b.ub&&0<b.timeout&&(l=I(function(){k||(k=!0,n.abort(),J(l),b.ub.call(b.context||m,n))},b.timeout));
return n}
function Xd(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=wd(a));break;case "XML":if(b=(b=b.responseXML)?Yd(b):null)d={},y(b.getElementsByTagName("*"),function(a){d[a.tagName]=Zd(a)})}c&&$d(d);
return d}
function $d(a){if(ia(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=Pc(Db("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):$d(a[b])}}
function Yd(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Zd(a){var b="";y(a.childNodes,function(a){b+=a.nodeValue});
return b}
var Ud={"X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};var ae={},be=0;function ce(a,b){isNaN(b)&&(b=void 0);var c=r("yt.scheduler.instance.addJob");return c?c(a,0,b):void 0===b?(a(),NaN):I(a,b||0)}
function de(a){return ce(a,5E3)}
;var ee=[],fe=!1;function ge(){function a(){fe=!0;"google_ad_status"in window?lc("DCLKSTAT",1):lc("DCLKSTAT",2)}
Dc("//static.doubleclick.net/instream/ad_status.js",a);ee.push(de(function(){fe||"google_ad_status"in window||(Kc("//static.doubleclick.net/instream/ad_status.js",a),lc("DCLKSTAT",3))}))}
function he(){return parseInt(G("DCLKSTAT",0),10)}
;function ie(a){if(a.classList)return a.classList;a=a.className;return u(a)&&a.match(/\S+/g)||[]}
function je(a,b){return a.classList?a.classList.contains(b):A(ie(a),b)}
function ke(a,b){a.classList?a.classList.add(b):je(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function le(a,b){a.classList?a.classList.remove(b):je(a,b)&&(a.className=Na(ie(a),function(a){return a!=b}).join(" "))}
function me(a,b,c){c?ke(a,b):le(a,b)}
;function ne(a,b){this.x=p(a)?a:0;this.y=p(b)?b:0}
ne.prototype.clone=function(){return new ne(this.x,this.y)};
ne.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
ne.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function oe(a,b){this.width=a;this.height=b}
oe.prototype.clone=function(){return new oe(this.width,this.height)};
oe.prototype.isEmpty=function(){return!(this.width*this.height)};
oe.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
oe.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};!kd&&!L||L&&9<=+ud||kd&&sd("1.9.1");var pe=L&&!sd("9");function qe(a){return a?new re(se(a)):ra||(ra=new re)}
function te(a){return u(a)?document.getElementById(a):a}
function ue(a){var b=document;return u(a)?b.getElementById(a):a}
function ve(a){var b=document;return b.querySelectorAll&&b.querySelector?b.querySelectorAll("."+a):we(a,void 0)}
function we(a,b){var c,d,e,f;c=document;c=b||c;if(c.querySelectorAll&&c.querySelector&&a)return c.querySelectorAll(""+(a?"."+a:""));if(a&&c.getElementsByClassName){var h=c.getElementsByClassName(a);return h}h=c.getElementsByTagName("*");if(a){f={};for(d=e=0;c=h[d];d++){var k=c.className;"function"==typeof k.split&&A(k.split(/\s+/),a)&&(f[e++]=c)}f.length=e;return f}return h}
function xe(a){var b=a.scrollingElement?a.scrollingElement:!ld&&ye(a)?a.documentElement:a.body||a.documentElement;a=a.parentWindow||a.defaultView;return L&&sd("10")&&a.pageYOffset!=b.scrollTop?new ne(b.scrollLeft,b.scrollTop):new ne(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function ye(a){return"CSS1Compat"==a.compatMode}
function ze(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function Ae(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function Be(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function se(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Ce(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else{ze(a);var c=se(a);a.appendChild(c.createTextNode(String(b)))}}
var De={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Ee={IMG:" ",BR:"\n"};function Fe(a){if(pe&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Ge(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");pe||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Ge(a,b,c){if(!(a.nodeName in De))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Ee)b.push(Ee[a.nodeName]);else for(a=a.firstChild;a;)Ge(a,b,c),a=a.nextSibling}
function He(a){var b=Ie.bd;return b?Je(a,function(a){return!b||u(a.className)&&A(a.className.split(/\s+/),b)},!0,void 0):null}
function Je(a,b,c,d){c||(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function re(a){this.f=a||m.document||document}
re.prototype.createElement=function(a){return this.f.createElement(a)};
re.prototype.appendChild=function(a,b){a.appendChild(b)};
re.prototype.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};var Ke=ld?"webkit":kd?"moz":L?"ms":id?"o":"",Le=r("yt.dom.getNextId_");if(!Le){Le=function(){return++Me};
q("yt.dom.getNextId_",Le,void 0);var Me=0}function Ne(){var a=document,b;Oa(["fullscreenElement","fullScreenElement"],function(c){c in a?b=a[c]:(c=Ke+c.charAt(0).toUpperCase()+c.substr(1),b=c in a?a[c]:void 0);return!!b});
return b}
;function Oe(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Pe||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
Oe.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
var Pe={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};var pb=r("yt.events.listeners_")||{};q("yt.events.listeners_",pb,void 0);var Qe=r("yt.events.counter_")||{count:0};q("yt.events.counter_",Qe,void 0);function Re(a,b,c,d){return ob(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function N(a,b,c,d){if(!a||!a.addEventListener&&!a.attachEvent)return"";d=!!d;var e=Re(a,b,c,d);if(e)return e;var e=++Qe.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),h;h=f?function(d){d=new Oe(d);if(!Je(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Oe(b);
b.currentTarget=a;return c.call(a,b)};
h=nc(h);pb[e]=[a,b,c,h,d];a.addEventListener?"mouseenter"==b&&f?a.addEventListener("mouseover",h,d):"mouseleave"==b&&f?a.addEventListener("mouseout",h,d):"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style?a.addEventListener("MozMousePixelScroll",h,d):a.addEventListener(b,h,d):a.attachEvent("on"+b,h);return e}
function Se(a){a&&("string"==typeof a&&(a=[a]),y(a,function(a){if(a in pb){var c=pb[a],d=c[0],e=c[1],f=c[3],c=c[4];d.removeEventListener?d.removeEventListener(e,f,c):d.detachEvent&&d.detachEvent("on"+e,f);delete pb[a]}}))}
;function Te(){if(null==r("_lact",window)){var a=parseInt(G("LACT"),10),a=isFinite(a)?w()-Math.max(a,0):-1;q("_lact",a,window);-1==a&&Ue();N(document,"keydown",Ue);N(document,"keyup",Ue);N(document,"mousedown",Ue);N(document,"mouseup",Ue);xc("page-mouse",Ue);xc("page-scroll",Ue);xc("page-resize",Ue)}}
function Ue(){null==r("_lact",window)&&(Te(),r("_lact",window));var a=w();q("_lact",a,window);K("USER_ACTIVE")}
function Ve(){var a=r("_lact",window);return null==a?-1:Math.max(w()-a,0)}
;function We(){}
;function Xe(a){this.f=a}
var Ye=/\s*;\s*/;g=Xe.prototype;g.isEnabled=function(){return navigator.cookieEnabled};
function Ze(a,b,c,d,e,f){if(/[;=\s]/.test(b))throw Error('Invalid cookie name "'+b+'"');if(/[;\r\n]/.test(c))throw Error('Invalid cookie value "'+c+'"');p(d)||(d=-1);f=f?";domain="+f:"";e=e?";path="+e:"";d=0>d?"":0==d?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(w()+1E3*d)).toUTCString();a.f.cookie=b+"="+c+f+e+d+""}
g.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(Ye),e=0,f;f=d[e];e++){if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.remove=function(a,b,c){var d=p(this.get(a));Ze(this,a,"",0,b,c);return d};
g.ra=function(){return $e(this).keys};
g.U=function(){return $e(this).values};
g.isEmpty=function(){return!this.f.cookie};
g.X=function(){return this.f.cookie?(this.f.cookie||"").split(Ye).length:0};
g.Ya=function(a){for(var b=$e(this).values,c=0;c<b.length;c++)if(b[c]==a)return!0;return!1};
g.clear=function(){for(var a=$e(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function $e(a){a=(a.f.cookie||"").split(Ye);for(var b=[],c=[],d,e,f=0;e=a[f];f++)d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var af=new Xe(document);af.h=3950;function bf(a,b,c){Ze(af,""+a,b,c,"/","youtube.com")}
;function cf(a,b,c){var d=G("EVENT_ID");d&&(b||(b={}),b.ei||(b.ei=d));if(b){var d=G("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=Ed(window.location.href);e&&d.push(e);e=Ed(a);if(A(d,e)||!e&&0==a.lastIndexOf("/",0)){var f=a.match(Dd),d=f[5],e=f[6],f=f[7],h="";d&&(h+=d);e&&(h+="?"+e);f&&(h+="#"+f);d=h;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e))d=G("SMALLER_SESSION_TEMPDATA_NAME")?"ST-"+Ka(d).toString(36):"s_tempdata-"+Ka(d),e=b?Kd(b):"",bf(d,e,5),b&&(b=b.itct||b.ved,d=r("yt.logging.screenreporter.storeParentElement"),
b&&d&&d(new We))}}if(c)return!1;(window.ytspf||{}).enabled?spf.navigate(a):(c=window.location,a=Md(a,{})+"",a=a instanceof Eb?a:Ib(a),c.href=Gb(a));return!0}
;function df(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||tb(ef);this.assets=a.assets||{};this.attrs=a.attrs||tb(ff);this.params=a.params||tb(gf);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var ef={enablejsapi:1},ff={},gf={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function hf(a){a instanceof df||(a=new df(a));return a}
df.prototype.clone=function(){var a=new df,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==da(c)?a[b]=tb(c):a[b]=c}return a};function jf(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
jf.prototype.clone=function(){return new jf(this.top,this.right,this.bottom,this.left)};
jf.prototype.contains=function(a){return this&&a?a instanceof jf?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};
jf.prototype.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
jf.prototype.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function kf(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
kf.prototype.clone=function(){return new kf(this.left,this.top,this.width,this.height)};
kf.prototype.contains=function(a){return a instanceof kf?this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height:a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height};
kf.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
kf.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function lf(a){lf[" "](a);return a}
lf[" "]=t;function mf(a,b){var c=se(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function nf(a,b){return mf(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function of(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}L&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function pf(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function qf(a){var b=rf;if("none"!=nf(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function rf(a){var b=a.offsetWidth,c=a.offsetHeight,d=ld&&!b&&!c;return p(b)&&!d||!a.getBoundingClientRect?new oe(b,c):(a=of(a),new oe(a.right-a.left,a.bottom-a.top))}
function sf(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return e}
function tf(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?sf(a,c):0}
var uf={thin:2,medium:4,thick:6};function vf(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in uf?uf[c]:sf(a,c)}
;var wf=B("Firefox"),xf=hd()||B("iPod"),yf=B("iPad"),zf=B("Android")&&!(Bb()||B("Firefox")||Ab()||B("Silk")),Af=Bb(),Bf=B("Safari")&&!(Bb()||B("Coast")||Ab()||B("Edge")||B("Silk")||B("Android"))&&!(hd()||B("iPad")||B("iPod"));function Cf(){var a;if(a=af.get("PREF",void 0)){a=unescape(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Df[d]=c.toString())}}}
ba(Cf);var Df=r("yt.prefs.UserPrefs.prefs_")||{};q("yt.prefs.UserPrefs.prefs_",Df,void 0);function Ef(a){if(/^f([1-9][0-9]*)$/.test(a))throw"ExpectedRegexMatch: "+a;}
function Ff(a){if(!/^\w+$/.test(a))throw"ExpectedRegexMismatch: "+a;}
function Gf(a){a=void 0!==Df[a]?Df[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Cf.prototype.get=function(a,b){Ff(a);Ef(a);var c=void 0!==Df[a]?Df[a].toString():null;return null!=c?c:b?b:""};
function Hf(a,b){return!!((Gf("f"+(Math.floor(b/31)+1))||0)&1<<b%31)}
Cf.prototype.remove=function(a){Ff(a);Ef(a);delete Df[a]};
Cf.prototype.clear=function(){Df={}};function If(a,b){(a=te(a))&&a.style&&(a.style.display=b?"":"none",me(a,"hid",!b))}
function Jf(a){y(arguments,function(a){!fa(a)||a instanceof Element?If(a,!0):y(a,function(a){Jf(a)})})}
function Kf(a){y(arguments,function(a){!fa(a)||a instanceof Element?If(a,!1):y(a,function(a){Kf(a)})})}
;function Lf(){this.j=this.h=this.f=0;this.l="";var a=r("window.navigator.plugins"),b=r("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=parseInt(d[0],10)||0;d=parseInt(d[1],10)||0;e=0;if("r"==a.charAt(0)||"d"==a.charAt(0))e=parseInt(a.substr(1),
10)||0;a=[c,d,e]}else a=[0,0,0];this.l=b;b=a;this.f=b[0];this.h=b[1];this.j=b[2];if(0>=this.f){var h,k,l,n;if(rc)try{h=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(H){h=null}else l=document.body,n=document.createElement("object"),n.setAttribute("type","application/x-shockwave-flash"),h=l.appendChild(n);if(h&&"GetVariable"in h)try{k=h.GetVariable("$version")}catch(H){k=""}l&&n&&l.removeChild(n);(h=k||"")?(h=h.split(" ")[1].split(","),h=[parseInt(h[0],10)||0,parseInt(h[1],10)||0,parseInt(h[2],
10)||0]):h=[0,0,0];this.f=h[0];this.h=h[1];this.j=h[2]}}
ba(Lf);function Mf(a,b,c,d){b="string"==typeof b?b.split("."):[b,c,d];b[0]=parseInt(b[0],10)||0;b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return a.f>b[0]||a.f==b[0]&&a.h>b[1]||a.f==b[0]&&a.h==b[1]&&a.j>=b[2]}
function Nf(a){return-1<a.l.indexOf("Gnash")&&-1==a.l.indexOf("AVM2")||9==a.f&&1==a.h||9==a.f&&0==a.h&&1==a.j?!1:9<=a.f}
function Of(a){return nd?!Mf(a,11,2):md?!Mf(a,11,3):!Nf(a)}
;function Pf(a,b,c){if(b){a=u(a)?ue(a):a;var d=tb(c.attrs);d.tabindex=0;var e=tb(c.params);e.flashvars=Kd(c.args);if(rc){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=b;b=document.createElement("object");for(var f in d)b.setAttribute(f,d[f]);for(f in e)d=document.createElement("param"),d.setAttribute("name",f),d.setAttribute("value",e[f]),b.appendChild(d)}else{d.type="application/x-shockwave-flash";d.src=b;b=document.createElement("embed");b.setAttribute("name",d.id);for(f in d)b.setAttribute(f,
d[f]);for(f in e)b.setAttribute(f,e[f])}e=document.createElement("div");e.appendChild(b);a.innerHTML=e.innerHTML}}
function Qf(a,b,c){if(a&&a.attrs&&a.attrs.id){a=hf(a);var d=!!b,e=te(a.attrs.id),f=e?e.parentNode:null;if(e&&f){if(window!=window.top){var h=null;if(document.referrer){var k=document.referrer.substring(0,128);Pd(k)||(h=k)}else h="unknown";h&&(d=!0,a.args.framer=h)}h=Lf.getInstance();if(Mf(h,a.minVersion)){var k=Rf(a,h),l="";-1<navigator.userAgent.indexOf("Sony/COM2")||(l=e.getAttribute("src")||e.movie);(l!=k||d)&&Pf(f,k,a);Of(h)&&Sf()}else Tf(f,a,h);c&&c()}else I(function(){Qf(a,b,c)},50)}}
function Tf(a,b,c){0==c.f&&b.fallback?b.fallback():0==c.f&&b.fallbackMessage?b.fallbackMessage():a.innerHTML='<div id="flash-upgrade">'+qc()+"</div>"}
function Rf(a,b){return Nf(b)&&a.url||(-1<navigator.userAgent.indexOf("Sony/COM2")&&!Mf(b,9,1,58)?!1:!0)&&a.urlV9As2||a.url}
function Sf(){var a=te("flash10-promo-div"),b=Hf(Cf.getInstance(),107);a&&!b&&Jf(a)}
;function Uf(a){if(window.spf){var b=a.match(Vf);spf.style.load(a,b?b[1]:"",void 0)}else Wf(a)}
function Wf(a){var b=Xf(a),c=document.getElementById(b),d=c&&C(c,"loaded");d||c&&!d||(c=Yf(a,b,function(){C(c,"loaded")||(Pb(c,"loaded","true"),K(b),I(pa(Cc,b),0))}))}
function Yf(a,b,c){var d=document.createElement("link");d.id=b;d.rel="stylesheet";d.onload=function(){c&&setTimeout(c,0)};
Ob(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Xf(a){var b=document.createElement("a");Ob(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ka(a)}
var Vf=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var Zf;var $f=xb,$f=$f.toLowerCase();if(-1!=$f.indexOf("android")){var ag=$f.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(ag)Zf=+ag[1];else{var bg={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1},cg=$f.match("("+lb(bg).join("|")+")");Zf=cg?bg[cg[0]]:0}}else Zf=void 0;var dg=xf||yf;var eg=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],fg=['audio/mp4; codecs="mp4a.40.2"'];function gg(a){D.call(this);this.f=[];this.h=a||this}
x(gg,D);function hg(a,b,c,d){d=nc(v(d,a.h));b.addEventListener(c,d);a.f.push({target:b,name:c,Ib:d})}
gg.prototype.zb=function(a){for(var b=0;b<this.f.length;b++)if(this.f[b]==a){this.f.splice(b,1);a.target.removeEventListener(a.name,a.Ib);break}};
function ig(a){for(;a.f.length;){var b=a.f.pop();b.target.removeEventListener(b.name,b.Ib)}}
gg.prototype.G=function(){ig(this);gg.I.G.call(this)};function jg(a,b){this.h=this.F=this.l="";this.B=null;this.o=this.f="";this.A=!1;var c;a instanceof jg?(this.A=p(b)?b:a.A,kg(this,a.l),this.F=a.F,lg(this,a.h),mg(this,a.B),this.f=a.f,ng(this,a.j.clone()),this.o=a.o):a&&(c=String(a).match(Dd))?(this.A=!!b,kg(this,c[1]||"",!0),this.F=og(c[2]||""),lg(this,c[3]||"",!0),mg(this,c[4]),this.f=og(c[5]||"",!0),ng(this,c[6]||"",!0),this.o=og(c[7]||"")):(this.A=!!b,this.j=new pg(null,0,this.A))}
jg.prototype.toString=function(){var a=[],b=this.l;b&&a.push(qg(b,rg,!0),":");var c=this.h;if(c||"file"==b)a.push("//"),(b=this.F)&&a.push(qg(b,rg,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.B,null!=c&&a.push(":",String(c));if(c=this.f)this.h&&"/"!=c.charAt(0)&&a.push("/"),a.push(qg(c,"/"==c.charAt(0)?sg:tg,!0));(c=this.j.toString())&&a.push("?",c);(c=this.o)&&a.push("#",qg(c,ug));return a.join("")};
jg.prototype.resolve=function(a){var b=this.clone(),c=!!a.l;c?kg(b,a.l):c=!!a.F;c?b.F=a.F:c=!!a.h;c?lg(b,a.h):c=null!=a.B;var d=a.f;if(c)mg(b,a.B);else if(c=!!a.f){if("/"!=d.charAt(0))if(this.h&&!this.f)d="/"+d;else{var e=b.f.lastIndexOf("/");-1!=e&&(d=b.f.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],h=0;h<e.length;){var k=e[h++];"."==k?d&&h==e.length&&f.push(""):".."==k?((1<f.length||1==f.length&&
""!=f[0])&&f.pop(),d&&h==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?b.f=d:c=""!==a.j.toString();c?ng(b,og(a.j.toString())):c=!!a.o;c&&(b.o=a.o);return b};
jg.prototype.clone=function(){return new jg(this)};
function kg(a,b,c){a.l=c?og(b,!0):b;a.l&&(a.l=a.l.replace(/:$/,""))}
function lg(a,b,c){a.h=c?og(b,!0):b}
function mg(a,b){if(b){b=+b;if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.B=b}else a.B=null}
function ng(a,b,c){b instanceof pg?(a.j=b,vg(a.j,a.A)):(c||(b=qg(b,wg)),a.j=new pg(b,0,a.A))}
function O(a,b,c){a=a.j;xg(a);a.j=null;b=yg(a,b);zg(a,b)&&(a.h=a.h-a.f.get(b).length);Wc(a.f,b,[c]);a.h=a.h+1}
function Ag(a,b,c){ea(c)||(c=[String(c)]);Bg(a.j,b,c)}
function Cg(a){O(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^w()).toString(36));return a}
function Dg(a){return a instanceof jg?a.clone():new jg(a,void 0)}
function Eg(a,b,c,d){var e=new jg(null,void 0);a&&kg(e,a);b&&lg(e,b);c&&mg(e,c);d&&(e.f=d);return e}
function og(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function qg(a,b,c){return u(a)?(a=encodeURI(a).replace(b,Fg),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function Fg(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var rg=/[#\/\?@]/g,tg=/[\#\?:]/g,sg=/[\#\?]/g,wg=/[\#\?@]/g,ug=/#/g;function pg(a,b,c){this.h=this.f=null;this.j=a||null;this.l=!!c}
function xg(a){a.f||(a.f=new Vc,a.h=0,a.j&&Fd(a.j,function(b,c){var d=ua(b);xg(a);a.j=null;var d=yg(a,d),e=a.f.get(d);e||Wc(a.f,d,e=[]);e.push(c);a.h=a.h+1}))}
g=pg.prototype;g.X=function(){xg(this);return this.h};
g.remove=function(a){xg(this);a=yg(this,a);return Yc(this.f.h,a)?(this.j=null,this.h=this.h-this.f.get(a).length,this.f.remove(a)):!1};
g.clear=function(){this.f=this.j=null;this.h=0};
g.isEmpty=function(){xg(this);return 0==this.h};
function zg(a,b){xg(a);b=yg(a,b);return Yc(a.f.h,b)}
g.Ya=function(a){var b=this.U();return A(b,a)};
g.ra=function(){xg(this);for(var a=this.f.U(),b=this.f.ra(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
g.U=function(a){xg(this);var b=[];if(u(a))zg(this,a)&&(b=Xa(b,this.f.get(yg(this,a))));else{a=this.f.U();for(var c=0;c<a.length;c++)b=Xa(b,a[c])}return b};
g.get=function(a,b){var c=a?this.U(a):[];return 0<c.length?String(c[0]):b};
function Bg(a,b,c){a.remove(b);0<c.length&&(a.j=null,Wc(a.f,yg(a,b),Ya(c)),a.h=a.h+c.length)}
g.toString=function(){if(this.j)return this.j;if(!this.f)return"";for(var a=[],b=this.f.ra(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.U(d),f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h)}return this.j=a.join("&")};
g.clone=function(){var a=new pg;a.j=this.j;this.f&&(a.f=this.f.clone(),a.h=this.h);return a};
function yg(a,b){var c=String(b);a.l&&(c=c.toLowerCase());return c}
function vg(a,b){b&&!a.l&&(xg(a),a.j=null,a.f.forEach(function(a,b){var e=b.toLowerCase();b!=e&&(this.remove(b),Bg(this,e,a))},a));
a.l=b}
;var Gg="corp.google.com googleplex.com youtube.com youtube-nocookie.com youtubeeducation.com borg.google.com prod.google.com sandbox.google.com books.googleusercontent.com docs.google.com drive.google.com mail.google.com photos.google.com plus.google.com lh2.google.com picasaweb.google.com play.google.com googlevideo.com talkgadget.google.com survey.g.doubleclick.net youtube.googleapis.com vevo.com".split(" "),Hg="";
function Ig(a){return a&&a==Hg?!0:(new RegExp("^(https?:)?//([a-z0-9-]{1,63}\\.)*("+Gg.join("|").replace(/\./g,".")+")(:[0-9]+)?([/?#]|$)","i")).test(a)?(Hg=a,!0):!1}
;var Jg={},Kg=0,Lg=r("yt.net.ping.workerUrl_")||null;q("yt.net.ping.workerUrl_",Lg,void 0);function Mg(a){try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||a&&Ng(a)}catch(b){a&&Ng(a)}}
function Ng(a){var b=new Image,c=""+Kg++;Jg[c]=b;b.onload=b.onerror=function(){delete Jg[c]};
b.src=a}
;function P(a,b){this.version=a;this.args=b}
function Og(a){if(!a.Ea){var b={};a.call(b);a.Ea=b.version}return a.Ea}
function Pg(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=Og(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
function Q(a,b){this.topic=a;this.f=b}
Q.prototype.toString=function(){return this.topic};var Qg=r("yt.pubsub2.instance_")||new F;F.prototype.subscribe=F.prototype.subscribe;F.prototype.unsubscribeByKey=F.prototype.qa;F.prototype.publish=F.prototype.D;F.prototype.clear=F.prototype.clear;q("yt.pubsub2.instance_",Qg,void 0);var Rg=r("yt.pubsub2.subscribedKeys_")||{};q("yt.pubsub2.subscribedKeys_",Rg,void 0);var Sg=r("yt.pubsub2.topicToKeys_")||{};q("yt.pubsub2.topicToKeys_",Sg,void 0);var Tg=r("yt.pubsub2.isAsync_")||{};q("yt.pubsub2.isAsync_",Tg,void 0);
q("yt.pubsub2.skipSubKey_",null,void 0);function R(a,b){var c=Ug();c&&c.publish.call(c,a.toString(),a,b)}
function Vg(a,b,c){var d=Ug();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,h){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=e){var k=function(){if(Rg[e])try{if(h&&a instanceof Q&&a!=d)try{h=Pg(a.f,h)}catch(k){throw k.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+k.message,k;}b.call(c||window,h)}catch(k){pc(k)}};
Tg[a.toString()]?r("yt.scheduler.instance")?ce(k,void 0):I(k,0):k()}});
Rg[e]=!0;Sg[a.toString()]||(Sg[a.toString()]=[]);Sg[a.toString()].push(e);return e}
function Wg(a){var b=Ug();b&&(ga(a)&&(a=[a]),y(a,function(a){b.unsubscribeByKey(a);delete Rg[a]}))}
function Ug(){return r("yt.pubsub2.instance_")}
;function Xg(a){P.call(this,1,arguments)}
x(Xg,P);var Yg=new Q("timing-sent",Xg);var S=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{},Zg=v(S.clearResourceTimings||S.webkitClearResourceTimings||S.mozClearResourceTimings||S.msClearResourceTimings||S.oClearResourceTimings||t,S),$g=S.mark?function(a){S.mark(a)}:t;
function ah(a){bh()[a]=w();$g(a);var b=G("TIMING_ACTION",void 0);a=bh();if(r("yt.timing.ready_")&&b&&a._start&&ch()){var b=!0,c=G("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}if(b)if(c=bh(),a=dh().span,d=dh().info,b=r("yt.timing.reportbuilder_")){if(b=b(c,a,d,void 0))eh(b),fh()}else{e=G("CSI_SERVICE_NAME","youtube");b={v:2,s:e,action:G("TIMING_ACTION",void 0)};if(S.now&&S.timing){var f=S.timing.navigationStart+S.now(),f=Math.round(w()-f);d.yt_hrd=f}var f=
G("TIMING_INFO",{}),h;for(h in f)d[h]=f[h];h=d.srt;delete d.srt;var k;h||0===h||(k=S.timing||{},h=Math.max(0,k.responseStart-k.navigationStart),isNaN(h)&&d.pt&&(h=d.pt));if(h||0===h)d.srt=h;d.h5jse&&(f=window.location.protocol+r("ytplayer.config.assets.js"),(f=S.getEntriesByName?S.getEntriesByName(f)[0]:null)?d.h5jse=Math.round(d.h5jse-f.responseEnd):delete d.h5jse);c.aft=ch();f=c._start;if("cold"==d.yt_lt){k||(k=S.timing||{});var l;a:if(l=k,l.msFirstPaint)l=Math.max(0,l.msFirstPaint);else{var n=
window.chrome;if(n&&(n=n.loadTimes,ha(n))){var n=n(),H=1E3*Math.min(n.requestTime||Infinity,n.startLoadTime||Infinity),H=Infinity===H?0:l.navigationStart-H;l=Math.max(0,Math.round(1E3*n.firstPaintTime+H)||0);break a}l=0}0<l&&l>f&&(c.fpt=l);l=a||dh().span;n=k.redirectEnd-k.redirectStart;0<n&&(l.rtime_=n);n=k.domainLookupEnd-k.domainLookupStart;0<n&&(l.dns_=n);n=k.connectEnd-k.connectStart;0<n&&(l.tcp_=n);n=k.connectEnd-k.secureConnectionStart;k.secureConnectionStart>=k.navigationStart&&0<n&&(l.stcp_=
n);n=k.responseStart-k.requestStart;0<n&&(l.req_=n);n=k.responseEnd-k.responseStart;0<n&&(l.rcv_=n);S.getEntriesByType&&gh(c)}n=bh();k=n.pbr;l=n.vc;n=n.pbs;k&&l&&n&&k<l&&l<n&&1==dh().info.yt_vis&&"youtube"==e&&(dh().info.yt_lt="hot_bg",k=c.vc,e=c.pbs,delete c.aft,a.aft=Math.round(e-k));(k=G("PREVIOUS_ACTION"))&&(d.pa=k);d.p=G("CLIENT_PROTOCOL")||"unknown";d.t=G("CLIENT_TRANSPORT")||"unknown";window.navigator&&window.navigator.sendBeacon&&(d.ba=1);for(var ca in d)"_"!=ca.charAt(0)&&(b[ca]=d[ca]);c.ps=
w();ca={};var d=[],sa;for(sa in c)"_"!=sa.charAt(0)&&(l=Math.max(Math.round(c[sa]-f),0),ca[sa]=l,d.push(sa+"."+l));b.rt=d.join(",");sa=b;var c=[],qb;for(qb in a)"_"!=qb.charAt(0)&&c.push(qb+"."+a[qb]);sa.it=c.join(",");(qb=r("ytdebug.logTiming"))&&qb(b,ca,a);fh();G("EXP_DEFER_CSI_PING")?(hh(),q("yt.timing.deferredPingArgs_",b,void 0),qb=I(hh,0),q("yt.timing.deferredPingTimer_",qb,void 0)):eh(b);R(Yg,new Xg(ca.aft+(h||0)))}}}
function fh(){ih();Zg();q("yt.timing.pingSent_",!1,void 0)}
function ch(){var a=bh();if(a.aft)return a.aft;for(var b=G("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function jh(a){return Math.round(S.timing.navigationStart+a)}
function gh(a){var b=window.location.protocol,c=S.getEntriesByType("resource"),d=c.filter(function(a){return 0==a.name.indexOf(b+"//fonts.googleapis.com/css?family=")})[0],c=c.filter(function(a){return 0==a.name.indexOf(b+"//fonts.gstatic.com/s/")}).reduce(function(a,b){return b.duration>a.duration?b:a},{duration:0});
d&&0<d.startTime&&0<d.responseEnd&&(a.wfcs=jh(d.startTime),a.wfce=jh(d.responseEnd));c&&0<c.startTime&&0<c.responseEnd&&(a.wffs=jh(c.startTime),a.wffe=jh(c.responseEnd))}
function eh(a){if(G("DEBUG_CSI_DATA")){var b=r("yt.timing.csiData");b||(b=[],q("yt.timing.csiData",b,void 0));b.push({page:location.href,time:new Date,args:a})}G("EXP_DEFER_CSI_PING")&&(J(r("yt.timing.deferredPingTimer_")),q("yt.timing.deferredPingArgs_",null,void 0));var c="https:"==window.location.protocol?"https://gg.google.com/csi":"http://csi.gstatic.com/csi",c=G("CSI_LOG_WITH_YT")?"/csi_204":c,b="",d;for(d in a)b+="&"+d+"="+a[d];a=c+"?"+b.substring(1);b=G("DOUBLE_LOG_CSI")?"/csi_204?"+b.substring(1):
null;window.navigator&&window.navigator.sendBeacon?(Mg(a),b&&Mg(b)):(a&&Ng(a),b&&b&&Ng(b));q("yt.timing.pingSent_",!0,void 0)}
function hh(a){if(G("EXP_DEFER_CSI_PING")){var b=r("yt.timing.deferredPingArgs_");b&&(a&&(b.yt_fss=a),eh(b))}}
function bh(){return dh().tick}
function dh(){return r("ytcsi.data_")||ih()}
function ih(){var a={tick:{},span:{},info:{}};q("ytcsi.data_",a,void 0);return a}
;var kh={"api.invalidparam":2,auth:150,"drm.auth":150,heartbeat:150,"html5.unsupportedads":5,"fmt.noneavailable":5,"fmt.decode":5,"fmt.unplayable":5,"html5.missingapi":5,"drm.unavailable":5};function lh(a,b){D.call(this);this.A=this.o=a;this.ha=b;this.J=!1;this.h={};this.za=this.Z=null;this.ia=new F;gc(this,pa(E,this.ia));this.l={};this.B=this.Ma=this.j=this.Gb=this.f=null;this.sa=!1;this.K=this.F=this.P=this.R=null;this.Na={};this.Zc=["onReady"];this.ta=new gg(this);gc(this,pa(E,this.ta));this.Hb=null;this.gc=0;this.ua={};mh(this);this.wa("onDetailedError",v(this.Ud,this));this.wa("onTabOrderChange",v(this.md,this));this.wa("onTabAnnounce",v(this.hc,this));this.wa("WATCH_LATER_VIDEO_ADDED",
v(this.Vd,this));this.wa("WATCH_LATER_VIDEO_REMOVED",v(this.Wd,this));wf||(this.wa("onMouseWheelCapture",v(this.Rd,this)),this.wa("onMouseWheelRelease",v(this.Sd,this)));this.wa("onAdAnnounce",v(this.hc,this));this.N=new gg(this);gc(this,pa(E,this.N));this.Fb=!1;this.Eb=null}
x(lh,D);var nh=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];g=lh.prototype;g.getId=function(){return this.ha};
g.cc=function(a,b){this.isDisposed()||(oh(this,a),b||ph(this),qh(this,b),this.J&&rh(this))};
function oh(a,b){a.Gb=b;a.f=b.clone();a.j=a.f.attrs.id||a.j;"video-player"==a.j&&(a.j=a.ha,a.f.attrs.id=a.ha);a.A.id==a.j&&(a.j+="-player",a.f.attrs.id=a.j);a.f.args.enablejsapi="1";a.f.args.playerapiid=a.ha;a.Ma||(a.Ma=sh(a,a.f.args.jsapicallback||"onYouTubePlayerReady"));a.f.args.jsapicallback=null;var c=a.f.attrs.width;c&&(a.A.style.width=pf(+c||c,!0));if(c=a.f.attrs.height)a.A.style.height=pf(+c||c,!0)}
g.wd=function(){return this.Gb};
function rh(a){a.f.loaded||(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.h.loadVideoByPlayerVars(a.f.args):a.h.cueVideoByPlayerVars(a.f.args))}
function th(a){if(!p(a.f.disable.flash)){var b=a.f.disable,c;c=Mf(Lf.getInstance(),a.f.minVersion);b.flash=!c}return!a.f.disable.flash}
function ph(a){var b;if(!(b=!a.f.html5&&th(a))){if(!p(a.f.disable.html5)){var c;b=!0;void 0!=a.f.args.deviceHasDisplay&&(b=a.f.args.deviceHasDisplay);if(2.2==Zf)c=!0;else{a:{var d=b;b=r("yt.player.utils.videoElement_");b||(b=document.createElement("video"),q("yt.player.utils.videoElement_",b,void 0));try{if(b.canPlayType)for(var d=d?eg:fg,e=0;e<d.length;e++)if(b.canPlayType(d[e])){c=null;break a}c="fmt.noneavailable"}catch(f){c="html5.missingapi"}}c=!c}c&&(c=uh(a)||a.f.assets.js);a.f.disable.html5=
!c;c||(a.f.args.html5_unavailable="1")}b=!!a.f.disable.html5}return b?th(a)?"flash":"unsupported":"html5"}
function vh(a,b){if(!b||(5!=(kh[b.errorCode]||5)?0:-1!=nh.indexOf(b.errorCode))){var c=wh(a);c&&c.stopVideo&&c.stopVideo();if(th(a)){var d=a.f;c&&c.getUpdatedConfigurationData&&(c=c.getUpdatedConfigurationData(),d=hf(c));d.args.autoplay=1;d.args.html5_unavailable="1";oh(a,d);qh(a,"flash")}}}
function qh(a,b){a.isDisposed()||(b||(b=ph(a)),("flash"==b?a.Fe:"html5"==b?a.Ge:a.He).call(a))}
function uh(a){var b=!0,c=wh(a);c&&a.f&&(a=a.f,b=C(c,"version")==a.assets.js);return b&&!!r("yt.player.Application.create")}
g.Ge=function(){if(!this.sa){var a=uh(this);a&&"html5"==xh(this)?(this.B="html5",this.J||this.Ta()):(yh(this),this.B="html5",a&&this.P?(this.o.appendChild(this.P),this.Ta()):(this.f.loaded=!0,this.R=v(function(){var a=this.o,c=this.f.clone();r("yt.player.Application.create")(a,c);this.Ta()},this),this.sa=!0,a?this.R():(Dc(this.f.assets.js,this.R),Uf(this.f.assets.css))))}};
g.Fe=function(){var a=this.f.clone();if(!this.F){var b=wh(this);b&&(this.F=document.createElement("span"),this.F.tabIndex=0,hg(this.ta,this.F,"focus",this.wc),this.K=document.createElement("span"),this.K.tabIndex=0,hg(this.ta,this.K,"focus",this.wc),b.parentNode&&b.parentNode.insertBefore(this.F,b),b.parentNode&&b.parentNode.insertBefore(this.K,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==xh(this))this.B="flash",this.J||Qf(a,!1,v(this.Ta,this));
else{yh(this);this.B="flash";this.f.loaded=!0;b=this.o;b=u(b)?ue(b):b;a=hf(a);if(window!=window.top){var c=null;document.referrer&&(c=document.referrer.substring(0,128));a.args.framer=c}c=Lf.getInstance();Mf(c,a.minVersion)?(c=Rf(a,c),Pf(b,c,a)):Tf(b,a,c);this.Ta()}};
g.wc=function(){wh(this).focus()};
function wh(a){var b=te(a.j);!b&&a.A&&a.A.querySelector&&(b=a.A.querySelector("#"+a.j));return b}
g.Ta=function(){if(!this.isDisposed()){var a=wh(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.sa=!1,a.isNotServable&&a.isNotServable(this.f.args.video_id))vh(this);else{mh(this);this.J=!0;a=wh(this);a.addEventListener&&(this.Z=zh(this,a,"addEventListener"));a.removeEventListener&&(this.za=zh(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.h[d]||(this.h[d]=zh(this,a,d))}for(var e in this.l)this.Z(e,
this.l[e]);rh(this);this.Ma&&this.Ma(this.h);this.ia.D("onReady",this.h)}else this.gc=I(v(this.Ta,this),50)}};
function zh(a,b,c){var d=b[c];return function(){try{return a.Hb=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.Hb=e,pc(e,"WARNING"))}}}
function mh(a){a.J=!1;if(a.za)for(var b in a.l)a.za(b,a.l[b]);for(var c in a.ua)J(parseInt(c,10));a.ua={};a.Z=null;a.za=null;for(var d in a.h)a.h[d]=null;a.h.addEventListener=v(a.wa,a);a.h.removeEventListener=v(a.qe,a);a.h.destroy=v(a.dispose,a);a.h.getLastError=v(a.xd,a);a.h.getPlayerType=v(a.yd,a);a.h.getCurrentVideoConfig=v(a.wd,a);a.h.loadNewVideoConfig=v(a.cc,a);a.h.isReady=v(a.Se,a)}
g.Se=function(){return this.J};
g.wa=function(a,b){if(!this.isDisposed()){var c=sh(this,b);if(c){if(!A(this.Zc,a)&&!this.l[a]){var d=Ah(this,a);this.Z&&this.Z(a,d)}this.ia.subscribe(a,c);"onReady"==a&&this.J&&I(pa(c,this.h),0)}}};
g.qe=function(a,b){if(!this.isDisposed()){var c=sh(this,b);c&&this.ia.unsubscribe(a,c)}};
function sh(a,b){var c=b;if("string"==typeof b){if(a.Na[b])return a.Na[b];c=function(){var a=r(b);a&&a.apply(m,arguments)};
a.Na[b]=c}return c?c:null}
function Ah(a,b){var c="ytPlayer"+b+a.ha;a.l[b]=c;m[c]=function(c){var e=I(function(){if(!a.isDisposed()){a.ia.D(b,c);var f=a.ua,h=String(e);h in f&&delete f[h]}},0);
sb(a.ua,String(e))};
return c}
g.md=function(a){a=a?Be:Ae;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.F||b==this.K||(b.focus(),b!=document.activeElement));)b=a(b)};
g.hc=function(a){K("a11y-announce",a)};
g.Ud=function(a){vh(this,a)};
g.Vd=function(a){K("WATCH_LATER_VIDEO_ADDED",a)};
g.Wd=function(a){K("WATCH_LATER_VIDEO_REMOVED",a)};
g.Rd=function(){this.Fb||(Af?(this.Eb=xe(document),hg(this.N,window,"scroll",this.le),hg(this.N,this.o,"touchmove",this.fe)):(hg(this.N,this.o,"mousewheel",this.zc),hg(this.N,this.o,"wheel",this.zc)),this.Fb=!0)};
g.Sd=function(){ig(this.N);this.Fb=!1};
g.zc=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
g.le=function(){window.scrollTo(this.Eb.x,this.Eb.y)};
g.fe=function(a){a.preventDefault()};
g.He=function(){yh(this);this.B="unsupported";var a='Adobe Flash Player or an HTML5 supported browser is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/">Get the latest Flash Player</a> <br> <a href="/html5">Learn more about upgrading to an HTML5 browser</a>',b=navigator.userAgent.match(/Version\/(\d).*Safari/);b&&5<=parseInt(b[1],10)&&(a='Adobe Flash Player or QuickTime is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/"> Get the latest Flash Player</a> <br> <a href="http://www.apple.com/quicktime/download/">Get the latest version of QuickTime</a>');
b=this.f.messages.player_fallback||a;a=te("player-unavailable");if(te("unavailable-submessage")&&a){te("unavailable-submessage").innerHTML=b;var b=a||document,c=null;b.getElementsByClassName?c=b.getElementsByClassName("icon")[0]:b.querySelectorAll&&b.querySelector?c=b.querySelector(".icon"):c=we("icon",a)[0];if(c=b=c||null)c=b?b.dataset?Qb("icon")in b.dataset:b.hasAttribute?!!b.hasAttribute("data-icon"):!!b.getAttribute("data-icon"):!1;c&&(b.src=C(b,"icon"));a.style.display="";ke(te("player"),"off-screen-trigger")}};
g.yd=function(){return this.B||xh(this)};
g.xd=function(){return this.Hb};
function xh(a){return(a=wh(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function yh(a){ah("dcp");a.cancel();mh(a);a.B=null;a.f&&(a.f.loaded=!1);var b=wh(a);"html5"==xh(a)?a.P=b:b&&b.destroy&&b.destroy();ze(a.o);ig(a.ta);a.F=null;a.K=null}
g.cancel=function(){this.R&&Kc(this.f.assets.js,this.R);J(this.gc);this.sa=!1};
g.G=function(){yh(this);if(this.P&&this.f)try{this.P.destroy()}catch(b){pc(b)}this.Na=null;for(var a in this.l)m[this.l[a]]=null;this.Gb=this.f=this.h=null;delete this.o;delete this.A;lh.I.G.call(this)};var Bh={},Ch="player_uid_"+(1E9*Math.random()>>>0);function Dh(a,b){a=u(a)?ue(a):a;b=hf(b);var c=Ch+"_"+ka(a),d=Bh[c];if(d)return d.cc(b),d.h;d=new lh(a,c);Bh[c]=d;K("player-added",d.h);gc(d,pa(Eh,d));I(function(){d.cc(b)},0);
return d.h}
function Eh(a){Bh[a.getId()]=null}
function Fh(a){a=te(a);if(!a)return null;var b=Ch+"_"+ka(a),c=Bh[b];c||(c=new lh(a,b),Bh[b]=c);return c.h}
;var Gh=r("yt.abuse.botguardInitialized")||Nc;q("yt.abuse.botguardInitialized",Gh,void 0);var Hh=r("yt.abuse.invokeBotguard")||Oc;q("yt.abuse.invokeBotguard",Hh,void 0);var Ih=r("yt.abuse.dclkstatus.checkDclkStatus")||he;q("yt.abuse.dclkstatus.checkDclkStatus",Ih,void 0);var Jh=r("yt.player.exports.navigate")||cf;q("yt.player.exports.navigate",Jh,void 0);var Kh=r("yt.player.embed")||Dh;q("yt.player.embed",Kh,void 0);var Lh=r("yt.player.getPlayerByElement")||Fh;q("yt.player.getPlayerByElement",Lh,void 0);
var Mh=r("yt.util.activity.init")||Te;q("yt.util.activity.init",Mh,void 0);var Nh=r("yt.util.activity.getTimeSinceActive")||Ve;q("yt.util.activity.getTimeSinceActive",Nh,void 0);var Oh=r("yt.util.activity.setTimestamp")||Ue;q("yt.util.activity.setTimestamp",Oh,void 0);function Ph(a){P.call(this,1,arguments);this.f=a}
x(Ph,P);function Qh(a){P.call(this,1,arguments);this.f=a}
x(Qh,P);function Rh(a,b){P.call(this,1,arguments);this.f=a;this.isEnabled=b}
x(Rh,P);function Sh(a,b,c,d,e){P.call(this,2,arguments);this.h=a;this.f=b;this.l=c||null;this.j=d||null;this.source=e||null}
x(Sh,P);function Th(a,b,c){P.call(this,1,arguments);this.f=a;this.subscriptionId=b}
x(Th,P);function Uh(a,b,c,d,e,f,h){P.call(this,1,arguments);this.h=a;this.subscriptionId=b;this.f=c;this.o=d||null;this.l=e||null;this.j=f||null;this.source=h||null}
x(Uh,P);
var Vh=new Q("subscription-batch-subscribe",Ph),Wh=new Q("subscription-batch-unsubscribe",Ph),Xh=new Q("subscription-pref-email",Rh),Yh=new Q("subscription-subscribe",Sh),Zh=new Q("subscription-subscribe-loading",Qh),$h=new Q("subscription-subscribe-loaded",Qh),ai=new Q("subscription-subscribe-success",Th),bi=new Q("subscription-subscribe-external",Sh),ci=new Q("subscription-unsubscribe",Uh),di=new Q("subscription-unsubscirbe-loading",Qh),ei=new Q("subscription-unsubscribe-loaded",Qh),fi=new Q("subscription-unsubscribe-success",
Qh),gi=new Q("subscription-external-unsubscribe",Uh),hi=new Q("subscription-enable-ypc",Qh),ii=new Q("subscription-disable-ypc",Qh);function ji(a,b){var c=document.location.protocol+"//"+document.domain+"/post_login";b&&(c=Ld(c,"mode",b));c=Ld("/signin?context=popup","next",c);c=Ld(c,"feature","sub_button");if(c=window.open(c,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var d=xc("LOGGED_IN",function(b){zc(G("LOGGED_IN_PUBSUB_KEY",void 0));lc("LOGGED_IN",!0);a(b)});
lc("LOGGED_IN_PUBSUB_KEY",d);c.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
q("yt.pubsub.publish",K,void 0);function ki(){var a=G("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!G("SESSION_INDEX")&&!G("LOGGED_IN"))}
;var li={},mi="ontouchstart"in document;function ni(a,b,c){var d;switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return Je(c,function(a){return je(a,b)},!0,d)}
function oi(a){var b="mouseover"==a.type&&"mouseenter"in li||"mouseout"==a.type&&"mouseleave"in li,c=a.type in li||b;if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=li[b],d;for(d in c.ga){var e=ni(b,d,a.target);e&&!Je(a.relatedTarget,function(a){return a==e},!0)&&c.D(d,e,b,a)}}if(b=li[a.type])for(d in b.ga)(e=ni(a.type,d,a.target))&&b.D(d,e,a.type,a)}}
N(document,"blur",oi,!0);N(document,"change",oi,!0);N(document,"click",oi);N(document,"focus",oi,!0);N(document,"mouseover",oi);N(document,"mouseout",oi);N(document,"mousedown",oi);N(document,"keydown",oi);N(document,"keyup",oi);N(document,"keypress",oi);N(document,"cut",oi);N(document,"paste",oi);mi&&(N(document,"touchstart",oi),N(document,"touchend",oi),N(document,"touchcancel",oi));function pi(a){this.j=a;this.l={};this.Jc=[];this.o=[]}
function qi(a,b){return"yt-uix"+(a.j?"-"+a.j:"")+(b?"-"+b:"")}
pi.prototype.init=t;pi.prototype.dispose=t;function ri(a,b,c){a.o.push(Vg(b,c,a))}
function si(a,b,c){var d=qi(a,void 0),e=v(c,a);b in li||(li[b]=new F);li[b].subscribe(d,e);a.l[c]=e}
function ti(a,b){Pb(a,"tooltip-text",b)}
;function ui(){pi.call(this,"tooltip");this.f=0;this.h={}}
x(ui,pi);ba(ui);g=ui.prototype;g.register=function(){si(this,"mouseover",this.Wb);si(this,"mouseout",this.eb);si(this,"focus",this.vd);si(this,"blur",this.ld);si(this,"click",this.eb);si(this,"touchstart",this.De);si(this,"touchend",this.Rc);si(this,"touchcancel",this.Rc)};
g.dispose=function(){for(var a in this.h)this.eb(this.h[a]);this.h={}};
g.Wb=function(a){if(!(this.f&&1E3>w()-this.f)){var b=parseInt(C(a,"tooltip-hide-timer"),10);b&&(Rb(a,"tooltip-hide-timer"),J(b));var b=v(function(){vi(this,a);Rb(a,"tooltip-show-timer")},this),c=parseInt(C(a,"tooltip-show-delay"),10)||0,b=I(b,c);
Pb(a,"tooltip-show-timer",b.toString());a.title&&(ti(a,wi(a)),a.title="");b=ka(a).toString();this.h[b]=a}};
g.eb=function(a){var b=parseInt(C(a,"tooltip-show-timer"),10);b&&(J(b),Rb(a,"tooltip-show-timer"));b=v(function(){if(a){var b=te(xi(this,a));b&&(yi(b),b&&b.parentNode&&b.parentNode.removeChild(b),Rb(a,"content-id"));(b=te(xi(this,a,"arialabel")))&&b.parentNode&&b.parentNode.removeChild(b)}Rb(a,"tooltip-hide-timer")},this);
b=I(b,50);Pb(a,"tooltip-hide-timer",b.toString());if(b=C(a,"tooltip-text"))a.title=b;b=ka(a).toString();delete this.h[b]};
g.vd=function(a){this.f=0;this.Wb(a)};
g.ld=function(a){this.f=0;this.eb(a)};
g.De=function(a,b,c){c.changedTouches&&(this.f=0,a=ni(b,qi(this),c.changedTouches[0].target),this.Wb(a))};
g.Rc=function(a,b,c){c.changedTouches&&(this.f=w(),a=ni(b,qi(this),c.changedTouches[0].target),this.eb(a))};
function zi(a,b){ti(a,b);var c=C(a,"content-id");(c=te(c))&&Ce(c,b)}
function wi(a){return C(a,"tooltip-text")||a.title}
function vi(a,b){if(b){var c=wi(b);if(c){var d=te(xi(a,b));if(!d){d=document.createElement("div");d.id=xi(a,b);d.className=qi(a,"tip");var e=document.createElement("div");e.className=qi(a,"tip-body");var f=document.createElement("div");f.className=qi(a,"tip-arrow");var h=document.createElement("div");h.setAttribute("aria-hidden","true");h.className=qi(a,"tip-content");var k=Ai(a,b),l=xi(a,b,"content");h.id=l;Pb(b,"content-id",l);e.appendChild(h);k&&d.appendChild(k);d.appendChild(e);d.appendChild(f);
var l=Fe(b),n=xi(a,b,"arialabel"),f=document.createElement("div");ke(f,qi(a,"arialabel"));f.id=n;"rtl"==document.body.getAttribute("dir")?Ce(f,c+" "+l):Ce(f,l+" "+c);b.setAttribute("aria-labelledby",n);l=Ne()||document.body;l.appendChild(f);l.appendChild(d);zi(b,c);(c=parseInt(C(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",ke(h,qi(a,"normal-wrap")));h=je(b,qi(a,"reverse"));Bi(a,b,d,e,k,h)||Bi(a,b,d,e,k,!h);var H=qi(a,"tip-visible");I(function(){ke(d,H)},0)}}}}
function Bi(a,b,c,d,e,f){me(c,qi(a,"tip-reverse"),f);var h=0;f&&(h=1);a=qf(b);f=new ne((a.width-10)/2,f?a.height:0);var k=se(b),l=new ne(0,0),n;n=k?se(k):document;var H;(H=!L||9<=+ud)||(H=qe(n),H=ye(H.f));b!=(H?n.documentElement:n.body)&&(n=of(b),k=qe(k),k=xe(k.f),l.x=n.left+k.x,l.y=n.top+k.y);f=new ne(l.x+f.x,l.y+f.y);f=f.clone();l=(h&8&&"rtl"==nf(c,"direction")?h^4:h)&-9;h=qf(c);k=h.clone();n=f.clone();k=k.clone();0!=l&&(l&4?n.x-=k.width+0:l&2&&(n.x-=k.width/2),l&1&&(n.y-=k.height+0));f=new kf(0,
0,0,0);f.left=n.x;f.top=n.y;f.width=k.width;f.height=k.height;k=new ne(f.left,f.top);k instanceof ne?(l=k.x,k=k.y):(l=k,k=void 0);c.style.left=pf(l,!1);c.style.top=pf(k,!1);k=new oe(f.width,f.height);if(!(h==k||h&&k&&h.width==k.width&&h.height==k.height))if(h=k,f=se(c),f=qe(f),l=ye(f.f),!L||sd("10")||l&&sd("8"))f=c.style,kd?f.MozBoxSizing="border-box":ld?f.WebkitBoxSizing="border-box":f.boxSizing="border-box",f.width=Math.max(h.width,0)+"px",f.height=Math.max(h.height,0)+"px";else if(f=c.style,l){L?
(l=tf(c,"paddingLeft"),k=tf(c,"paddingRight"),n=tf(c,"paddingTop"),H=tf(c,"paddingBottom"),l=new jf(n,k,H,l)):(l=mf(c,"paddingLeft"),k=mf(c,"paddingRight"),n=mf(c,"paddingTop"),H=mf(c,"paddingBottom"),l=new jf(parseFloat(n),parseFloat(k),parseFloat(H),parseFloat(l)));if(!L||9<=+ud)k=mf(c,"borderLeftWidth"),n=mf(c,"borderRightWidth"),H=mf(c,"borderTopWidth"),ca=mf(c,"borderBottomWidth"),k=new jf(parseFloat(H),parseFloat(n),parseFloat(ca),parseFloat(k));else{k=vf(c,"borderLeft");n=vf(c,"borderRight");
H=vf(c,"borderTop");var ca=vf(c,"borderBottom"),k=new jf(H,n,ca,k)}f.pixelWidth=h.width-k.left-l.left-l.right-k.right;f.pixelHeight=h.height-k.top-l.top-l.bottom-k.bottom}else f.pixelWidth=h.width,f.pixelHeight=h.height;h=window.document;h=ye(h)?h.documentElement:h.body;f=new oe(h.clientWidth,h.clientHeight);1==c.nodeType?(c=of(c),k=new ne(c.left,c.top)):(c=c.changedTouches?c.changedTouches[0]:c,k=new ne(c.clientX,c.clientY));c=qf(d);n=Math.floor(c.width/2);h=!!(f.height<k.y+a.height);a=!!(k.y<a.height);
l=!!(k.x<n);f=!!(f.width<k.x+n);k=(c.width+3)/-2- -5;b=C(b,"force-tooltip-direction");if("left"==b||l)k=-5;else if("right"==b||f)k=20-c.width-3;b=Math.floor(k)+"px";d.style.left=b;e&&(e.style.left=b,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(h||a)}
function xi(a,b,c){a=qi(a);var d=b.__yt_uid_key;d||(d=Le(),b.__yt_uid_key=d);b=a+d;c&&(b+="-"+c);return b}
function Ai(a,b){var c=null;nd&&je(b,qi(a,"masked"))&&((c=te("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),Jf(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=qi(a,"tip-mask")));return c}
function yi(a){var b=te("yt-uix-tooltip-shared-mask"),c=b&&Je(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),Kf(b),document.body.appendChild(b))}
;function Ci(){pi.call(this,"subscription-button")}
x(Ci,pi);ba(Ci);Ci.prototype.register=function(){si(this,"click",this.nc);ri(this,Zh,this.yc);ri(this,$h,this.xc);ri(this,ai,this.de);ri(this,di,this.yc);ri(this,ei,this.xc);ri(this,fi,this.je);ri(this,hi,this.Qd);ri(this,ii,this.Pd)};
var Ie={dc:"hover-enabled",$c:"yt-uix-button-subscribe",ad:"yt-uix-button-subscribed",Ue:"ypc-enabled",bd:"yt-uix-button-subscription-container",cd:"yt-subscription-button-disabled-mask-container"},Di={Ve:"channel-external-id",ed:"subscriber-count-show-when-subscribed",fd:"subscriber-count-tooltip",gd:"subscriber-count-title",We:"href",ec:"is-subscribed",Ye:"parent-url",$e:"clicktracking",hd:"style-type",fc:"subscription-id",cf:"target",jd:"ypc-enabled"};g=Ci.prototype;
g.nc=function(a){var b=C(a,"href"),c=ki();if(b)a=C(a,"target")||"_self",window.open(b,a);else if(c){var b=C(a,"channel-external-id"),c=C(a,"clicktracking"),d;if(C(a,"ypc-enabled")){d=C(a,"ypc-item-type");var e=C(a,"ypc-item-id");d={itemType:d,itemId:e,subscriptionElement:a}}else d=null;e=C(a,"parent-url");if(C(a,"is-subscribed")){var f=C(a,"subscription-id");R(ci,new Uh(b,f,d,a,c,e))}else R(Yh,new Sh(b,d,c,e))}else Ei(this,a)};
g.yc=function(a){this.Oa(a.f,this.Oc,!0)};
g.xc=function(a){this.Oa(a.f,this.Oc,!1)};
g.de=function(a){this.Oa(a.f,this.Pc,!0,a.subscriptionId)};
g.je=function(a){this.Oa(a.f,this.Pc,!1)};
g.Qd=function(a){this.Oa(a.f,this.pd)};
g.Pd=function(a){this.Oa(a.f,this.od)};
g.Pc=function(a,b,c){b?(Pb(a,Di.ec,"true"),c&&Pb(a,Di.fc,c)):(Rb(a,Di.ec),Rb(a,Di.fc));Fi(a)};
g.Oc=function(a,b){var c;c=He(a);me(c,Ie.cd,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function Fi(a){var b=C(a,Di.hd),c=!!C(a,"is-subscribed"),b="-"+b,d=Ie.ad+b;me(a,Ie.$c+b,!c);me(a,d,c);C(a,Di.fd)&&!C(a,Di.ed)&&(b=qi(ui.getInstance()),me(a,b,!c),a.title=c?"":C(a,Di.gd));c?I(function(){ke(a,Ie.dc)},1E3):le(a,Ie.dc)}
g.pd=function(a){var b=!!C(a,"ypc-item-type"),c=!!C(a,"ypc-item-id");!C(a,"ypc-enabled")&&b&&c&&(ke(a,"ypc-enabled"),Pb(a,Di.jd,"true"))};
g.od=function(a){C(a,"ypc-enabled")&&(le(a,"ypc-enabled"),Rb(a,"ypc-enabled"))};
function Gi(a,b){var c=ve(qi(a));return Na(c,function(a){return b==C(a,"channel-external-id")},a)}
g.kd=function(a,b,c){var d=ab(arguments,2);y(a,function(a){b.apply(this,Xa(a,d))},this)};
g.Oa=function(a,b,c){var d=Gi(this,a),d=Xa([d],ab(arguments,1));this.kd.apply(this,d)};
function Ei(a,b){var c=v(function(a){a.discoverable_subscriptions&&lc("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.nc(b)},a);
ji(c,"subscribe")}
;var Hi=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};q("yt.uix.widgets_",Hi,void 0);function Ii(a,b){this.source=null;this.l=a||null;this.origin="*";this.B=window.document.location.protocol+"//"+window.document.location.hostname;this.o=b;this.j=this.f=this.h=this.sourceId=null;N(window,"message",v(this.A,this))}
Ii.prototype.A=function(a){var b=this.o||G("POST_MESSAGE_ORIGIN",void 0)||this.B;if("*"!=b&&a.origin!=b)window.console&&window.console.warn("Untrusted origin: "+a.origin);else if(!this.l||a.source==this.l)if(this.source=a.source,this.origin="null"==a.origin?this.origin:a.origin,a=a.data,u(a)){try{a=vd(a)}catch(c){return}this.sourceId=a.id;switch(a.event){case "listening":this.f&&(this.f(),this.f=null);break;case "command":this.h&&(this.j&&!A(this.j,a.func)||this.h(a.func,a.args))}}};
Ii.prototype.sendMessage=function(a){this.source&&(a.id=this.sourceId,a=M(a),this.source.postMessage(a,this.origin))};function Ji(){}
;function Ki(){}
x(Ki,Ji);Ki.prototype.X=function(){var a=0;Tc(this.va(!0),function(){a++});
return a};
Ki.prototype.clear=function(){var a=Uc(this.va(!0)),b=this;y(a,function(a){b.remove(a)})};function Li(a){this.f=a}
x(Li,Ki);g=Li.prototype;g.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
g.zd=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.get=function(a){a=this.f.getItem(a);if(!u(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.remove=function(a){this.f.removeItem(a)};
g.X=function(){return this.f.length};
g.va=function(a){var b=0,c=this.f,d=new Rc;d.next=function(){if(b>=c.length)throw Qc;var d;d=c.key(b++);if(a)return d;d=c.getItem(d);if(!u(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.clear=function(){this.f.clear()};
g.key=function(a){return this.f.key(a)};function Mi(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
x(Mi,Li);function Ni(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.f=a}
x(Ni,Li);function Oi(a){this.f=a}
Oi.prototype.h=function(a,b){p(b)?this.f.zd(a,M(b)):this.f.remove(a)};
Oi.prototype.get=function(a){var b;try{b=this.f.get(a)}catch(c){return}if(null!==b)try{return vd(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Oi.prototype.remove=function(a){this.f.remove(a)};function Pi(a){this.f=a}
x(Pi,Oi);function Qi(a){this.data=a}
function Ri(a){return!p(a)||a instanceof Qi?a:new Qi(a)}
Pi.prototype.h=function(a,b){Pi.I.h.call(this,a,Ri(b))};
Pi.prototype.j=function(a){a=Pi.I.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Pi.prototype.get=function(a){if(a=this.j(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Si(a){this.f=a}
x(Si,Pi);function Ti(a){var b=a.creation;a=a.expiration;return!!a&&a<w()||!!b&&b>w()}
Si.prototype.h=function(a,b,c){if(b=Ri(b)){if(c){if(c<w()){Si.prototype.remove.call(this,a);return}b.expiration=c}b.creation=w()}Si.I.h.call(this,a,b)};
Si.prototype.j=function(a,b){var c=Si.I.j.call(this,a);if(c)if(!b&&Ti(c))Si.prototype.remove.call(this,a);else return c};function Ui(a){this.f=a}
x(Ui,Si);function Vi(a,b){var c=[];Tc(b,function(a){var b;try{b=Ui.prototype.j.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}p(b)?Ti(b)&&c.push(a):c.push(a)},a);
return c}
function Wi(a,b){var c=Vi(a,b);y(c,function(a){Ui.prototype.remove.call(this,a)},a)}
function Xi(){var a=Yi;Wi(a,a.f.va(!0))}
;function T(a,b,c){var d=c&&0<c?c:0;c=d?w()+1E3*d:0;if((d=d?Yi:Zi)&&window.JSON){u(b)||(b=JSON.stringify(b,void 0));try{d.h(a,b,c)}catch(e){d.remove(a)}}}
function U(a){if(!Zi&&!Yi||!window.JSON)return null;var b;try{b=Zi.get(a)}catch(c){}if(!u(b))try{b=Yi.get(a)}catch(c){}if(!u(b))return null;try{b=JSON.parse(b,void 0)}catch(c){}return b}
function $i(a){Zi&&Zi.remove(a);Yi&&Yi.remove(a)}
var Yi,aj=new Mi;Yi=aj.isAvailable()?new Ui(aj):null;var Zi,bj=new Ni;Zi=bj.isAvailable()?new Ui(bj):null;function cj(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function dj(a,b,c){u(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=a;c=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);b.videoId=c&&c[2]?c[2]:null;return ej(a)}
function ej(a,b,c){if(ia(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function fj(a,b,c,d){if(ia(a)&&!ea(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}c={index:b,startSeconds:c,suggestedQuality:d};u(a)&&16==a.length?c.list="PL"+a:c.playlist=a;return c}
function gj(a){var b=a.video_id||a.videoId;if(u(b)){var c=U("yt-player-two-stage-token")||{},d=U("yt-player-two-stage-token")||{};p(void 0)?d[b]=void 0:delete d[b];T("yt-player-two-stage-token",d,300);(b=c[b])&&(a.two_stage_token=b)}}
;var hj=document.currentScript&&-1!=document.currentScript.src.indexOf("?loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",ij=0<window.location.hash.indexOf("__CastInternalExtensionIds__"),jj=["boadgeojelhgndaghljhdicfkmllpafd","dliochdbjfkdbacpmhlcpmleaejidimm"],kj=["hfaagokkkhdbgiakmmlclaapfelnkoah","fmfcbgogabcbclcofgocippekhfcmgfj","enhhojjnijigcajfphajepfemndkmdlo","eojlgccfgnjlphjnlopmadngcgmmdgpk"],lj=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","fjhoaacokmgbjemoflkofnenfaiekifl"],mj=["ekpaaapppgpmolpcldedioblbkmijaca",
"lhkfccafpkdlaodkicmokbmfapjadkij","ibiljbkambkbohapfhoonkcpcikdglop","enhhojjnijigcajfphajepfemndkmdlo"],nj=ij?jj.concat(kj):jj,oj=ij?mj.concat(lj):lj,pj=window.navigator.presentation?nj.concat(oj):nj;function qj(a){window.chrome?rj(0,a):a(null)}
function rj(a,b){a==pj.length?b(null):sj(pj[a],function(c){c?b(pj[a]):rj(a+1,b)})}
function sj(a,b){var c=new XMLHttpRequest;c.onreadystatechange=function(){4==c.readyState&&200==c.status&&b(!0)};
c.onerror=function(){b(!1)};
try{c.open("GET","chrome-extension://"+a+hj,!0),c.send()}catch(d){b(!1)}}
function tj(a){var b=document.createElement("script");b.src=a;(document.head||document.documentElement).appendChild(b)}
function uj(){var a=window.navigator.userAgent;return 0<=a.indexOf("Android")&&0<=a.indexOf("Chrome/")}
function vj(){if(window.navigator.presentation&&uj())tj("//www.gstatic.com/eureka/clank"+hj);else{if(0<=window.navigator.userAgent.indexOf("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;if(a){a({command:"cast.sender.init"});return}}qj(function(a){a?(window.chrome=window.chrome||{},window.chrome.cast=window.chrome.cast||{},window.chrome.cast.extensionId=a,tj("chrome-extension://"+a+hj)):(a=window.__onGCastApiAvailable)&&"function"==typeof a&&a(!1,"No cast extension found")})}}
;var wj=w(),xj=null,yj=Array(50),zj=-1,Aj=!1;function Bj(a){Cj();xj.push(a);Dj(xj)}
function Ej(a){var b=r("yt.mdx.remote.debug.handlers_");Va(b||[],a)}
function Fj(a,b){Cj();var c=xj,d=Gj(a,String(b));0==c.length?Hj(d):(Dj(c),y(c,function(a){a(d)}))}
function Cj(){xj||(xj=r("yt.mdx.remote.debug.handlers_")||[],q("yt.mdx.remote.debug.handlers_",xj,void 0))}
function Hj(a){var b=(zj+1)%50;zj=b;yj[b]=a;Aj||(Aj=49==b)}
function Dj(a){var b=yj;if(b[0]){var c=zj,d=Aj?c:-1;do{var d=(d+1)%50,e=b[d];y(a,function(a){a(e)})}while(d!=c);
yj=Array(50);zj=-1;Aj=!1}}
function Gj(a,b){var c=(w()-wj)/1E3;c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")}
;function Ij(a){a=a||{};this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.f=a.uuid||a.dialId||""}
function Jj(a,b){return!!b&&(a.id==b||a.f==b)}
function Kj(a,b){return a||b?!a!=!b?!1:a.id==b.id:!0}
function Lj(a,b){return a||b?!a!=!b?!1:a.id==b.id&&a.token==b.token&&a.name==b.name&&a.f==b.f:!0}
function Mj(a){return{name:a.name,screenId:a.id,loungeToken:a.token,dialId:a.f}}
function Nj(a){return new Ij(a)}
function Oj(a){return ea(a)?z(a,Nj):[]}
function Pj(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.f?".."+a.f.slice(-6):"-")+"}":"null"}
function Qj(a){return ea(a)?"["+z(a,Pj).join(",")+"]":"null"}
;var Rj={Te:"atp",bf:"ska",Ze:"que",Xe:"mus",af:"sus"};function Sj(a){this.l=this.j="";this.f="/api/lounge";this.h=!0;a=a||document.location.href;var b=+(a.match(Dd)[4]||0)||null||"";b&&(this.l=":"+b);this.j=Ed(a)||"";a=xb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>Ia(a,"10.0")&&(this.h=!1))}
function Tj(a,b,c,d){var e=a.f;if(p(d)?d:a.h)e="https://"+a.j+a.l+a.f;return Md(e+b,c||{})}
function Uj(a,b,c,d,e){a={format:"JSON",method:"POST",context:a,timeout:5E3,withCredentials:!1,ca:pa(a.A,d,!0),onError:pa(a.o,e),ub:pa(a.B,e)};c&&(a.S=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return Wd(b,a)}
Sj.prototype.A=function(a,b,c,d){b?a(d):a({text:c.responseText})};
Sj.prototype.o=function(a,b){a(Error("Request error: "+b.status))};
Sj.prototype.B=function(a){a(Error("request timed out"))};function Vj(a){this.f=this.name=this.id="";this.status="UNKNOWN";a&&(this.id=a.id||"",this.name=a.name||"",this.f=a.activityId||"",this.status=a.status||"UNKNOWN")}
function Wj(a){return{id:a.id,name:a.name,activityId:a.f,status:a.status}}
Vj.prototype.toString=function(){return"{id:"+this.id+",name:"+this.name+",activityId:"+this.f+",status:"+this.status+"}"};
function Xj(a){a=a||[];return"["+z(a,function(a){return a?a.toString():"null"}).join(",")+"]"}
;function Yj(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})}
function Zj(a,b){return Qa(a,function(a){return a.key==b})}
function ak(a){return z(a,function(a){return{key:a.id,name:a.name}})}
function bk(a){return z(a,function(a){return Wj(a)})}
function ck(a){return z(a,function(a){return new Vj(a)})}
function dk(a,b){return a||b?a&&b?a.id==b.id&&a.name==b.name:!1:!0}
function ek(a,b){return Qa(a,function(a){return a.id==b})}
function fk(a,b){return Qa(a,function(a){return Kj(a,b)})}
function gk(a,b){return Qa(a,function(a){return Jj(a,b)})}
;function V(){D.call(this);this.l=new F;gc(this,pa(E,this.l))}
x(V,D);V.prototype.subscribe=function(a,b,c){return this.isDisposed()?0:this.l.subscribe(a,b,c)};
V.prototype.unsubscribe=function(a,b,c){return this.isDisposed()?!1:this.l.unsubscribe(a,b,c)};
V.prototype.qa=function(a){return this.isDisposed()?!1:this.l.qa(a)};
V.prototype.D=function(a,b){return this.isDisposed()?!1:this.l.D.apply(this.l,arguments)};function hk(a){V.call(this);this.B=a;this.screens=[]}
x(hk,V);hk.prototype.$=function(){return this.screens};
hk.prototype.contains=function(a){return!!fk(this.screens,a)};
hk.prototype.get=function(a){return a?gk(this.screens,a):null};
function ik(a,b){var c=a.get(b.f)||a.get(b.id);if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.f=b.f||c.f;return c.name!=d}a.screens.push(b);return!0}
function jk(a,b){var c=a.screens.length!=b.length;a.screens=Na(a.screens,function(a){return!!fk(b,a)});
for(var d=0,e=b.length;d<e;d++)c=ik(a,b[d])||c;return c}
function kk(a,b){var c=a.screens.length;a.screens=Na(a.screens,function(a){return!Kj(a,b)});
return a.screens.length<c}
hk.prototype.info=function(a){Fj(this.B,a)};function lk(a,b,c,d){V.call(this);this.F=a;this.B=b;this.o=c;this.A=d;this.j=0;this.f=null;this.h=NaN}
x(lk,V);var mk=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g=lk.prototype;g.start=function(){!this.f&&isNaN(this.h)&&this.Ic()};
g.stop=function(){this.f&&(this.f.abort(),this.f=null);isNaN(this.h)||(J(this.h),this.h=NaN)};
g.G=function(){this.stop();lk.I.G.call(this)};
g.Ic=function(){this.h=NaN;this.f=Wd(Tj(this.F,"/pairing/get_screen"),{method:"POST",S:{pairing_code:this.B},timeout:5E3,ca:v(this.Ke,this),onError:v(this.Je,this),ub:v(this.Le,this)})};
g.Ke=function(a,b){this.f=null;var c=b.screen||{};c.dialId=this.o;c.name=this.A;this.D("pairingComplete",new Ij(c))};
g.Je=function(a){this.f=null;a.status&&404==a.status?this.j>=mk.length?this.D("pairingFailed",Error("DIAL polling timed out")):(a=mk[this.j],this.h=I(v(this.Ic,this),a),this.j++):this.D("pairingFailed",Error("Server error "+a.status))};
g.Le=function(){this.f=null;this.D("pairingFailed",Error("Server not responding"))};function nk(a){this.app=this.name=this.id="";this.type="REMOTE_CONTROL";this.avatar=this.username="";this.capabilities=new ed;this.theme="u";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.theme=a.theme||"u",this.capabilities=new ed(Na((a.capabilities||"").split(","),pa(ib,Rj))))}
nk.prototype.equals=function(a){return a?this.id==a.id:!1};var ok;function pk(){var a=qk(),b=rk();A(a,b);if(sk()){var c=a,d;d=0;for(var e=c.length,f;d<e;){var h=d+e>>1,k;k=db(b,c[h]);0<k?d=h+1:(e=h,f=!k)}d=f?d:~d;0>d&&$a(c,-(d+1),0,b)}a=tk(a);if(0==a.length)try{a="remote_sid",af.remove(""+a,"/","youtube.com")}catch(l){}else try{bf("remote_sid",a.join(","),-1)}catch(l){}}
function qk(){var a=U("yt-remote-connected-devices")||[];a.sort(db);return a}
function tk(a){if(0==a.length)return[];var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return z(a,function(a,b){return 0==b?a:a.substring(c.length)})}
function uk(a){T("yt-remote-connected-devices",a,86400)}
function rk(){if(vk)return vk;var a=U("yt-remote-device-id");a||(a=Yj(),T("yt-remote-device-id",a,31536E3));for(var b=qk(),c=1,d=a;A(b,d);)c++,d=a+"#"+c;return vk=d}
function wk(){return U("yt-remote-session-browser-channel")}
function sk(){return U("yt-remote-session-screen-id")}
function xk(a){5<a.length&&(a=a.slice(a.length-5));var b=z(yk(),function(a){return a.loungeToken}),c=z(a,function(a){return a.loungeToken});
Pa(c,function(a){return!A(b,a)})&&zk();
T("yt-remote-local-screens",a,31536E3)}
function yk(){return U("yt-remote-local-screens")||[]}
function zk(){T("yt-remote-lounge-token-expiration",!0,86400)}
function Ak(){return!U("yt-remote-lounge-token-expiration")}
function Bk(a){T("yt-remote-online-screens",a,60)}
function Ck(){return U("yt-remote-online-screens")||[]}
function Dk(a){T("yt-remote-online-dial-devices",a,30)}
function Ek(){return U("yt-remote-online-dial-devices")||[]}
function Fk(a,b){T("yt-remote-session-browser-channel",a);T("yt-remote-session-screen-id",b);var c=qk(),d=rk();A(c,d)||c.push(d);uk(c);pk()}
function Gk(a){a||($i("yt-remote-session-screen-id"),$i("yt-remote-session-video-id"));pk();a=qk();Va(a,rk());uk(a)}
function Hk(){if(!ok){var a;a=new Mi;(a=a.isAvailable()?a:null)&&(ok=new Oi(a))}return ok?!!ok.get("yt-remote-use-staging-server"):!1}
var vk="";function Ik(a){hk.call(this,"LocalScreenService");this.h=a;this.f=NaN;Jk(this);this.info("Initializing with "+Qj(this.screens))}
x(Ik,hk);g=Ik.prototype;g.start=function(){Jk(this)&&this.D("screenChange");Ak()&&Kk(this);J(this.f);this.f=I(v(this.start,this),1E4)};
g.Db=function(a,b){Jk(this);ik(this,a);Lk(this,!1);this.D("screenChange");b(a);a.token||Kk(this)};
g.remove=function(a,b){var c=Jk(this);kk(this,a)&&(Lk(this,!1),c=!0);b(a);c&&this.D("screenChange")};
g.Ab=function(a,b,c,d){var e=Jk(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,Lk(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.D("screenChange")};
g.G=function(){J(this.f);Ik.I.G.call(this)};
function Kk(a){if(a.screens.length){var b=z(a.screens,function(a){return a.id}),c=Tj(a.h,"/pairing/get_lounge_token_batch");
Uj(a.h,c,{screen_ids:b.join(",")},v(a.Dd,a),v(a.Cd,a))}}
g.Dd=function(a){Jk(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}Lk(this,!b);b&&Fj(this.B,"Missed "+b+" lounge tokens.")};
g.Cd=function(a){Fj(this.B,"Requesting lounge tokens failed: "+a)};
function Jk(a){var b=Oj(yk()),b=Na(b,function(a){return!a.f});
return jk(a,b)}
function Lk(a,b){xk(z(a.screens,Mj));b&&zk()}
;function Mk(a,b){V.call(this);this.A=b;for(var c=U("yt-remote-online-screen-ids")||"",c=c?c.split(","):[],d={},e=this.A(),f=0,h=e.length;f<h;++f){var k=e[f].id;d[k]=A(c,k)}this.f=d;this.B=a;this.j=this.o=NaN;this.h=null;Nk("Initialized with "+M(this.f))}
x(Mk,V);g=Mk.prototype;g.start=function(){var a=parseInt(U("yt-remote-fast-check-period")||"0",10);(this.o=w()-144E5<a?0:a)?Ok(this):(this.o=w()+3E5,T("yt-remote-fast-check-period",this.o),this.Yb())};
g.isEmpty=function(){return rb(this.f)};
g.update=function(){Nk("Updating availability on schedule.");var a=this.A(),b=fb(this.f,function(b,d){return b&&!!gk(a,d)},this);
Pk(this,b)};
function Qk(a,b,c){var d=Tj(a.B,"/pairing/get_screen_availability");Uj(a.B,d,{lounge_token:b.token},v(function(a){a=a.screens||[];for(var d=0,h=a.length;d<h;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),v(function(){c(!1)},a))}
g.G=function(){J(this.j);this.j=NaN;this.h&&(this.h.abort(),this.h=null);Mk.I.G.call(this)};
function Pk(a,b){var c;a:if(gb(b)!=gb(a.f))c=!1;else{c=lb(b);for(var d=0,e=c.length;d<e;++d)if(!a.f[c[d]]){c=!1;break a}c=!0}c||(Nk("Updated online screens: "+M(a.f)),a.f=b,a.D("screenChange"));Rk(a)}
function Ok(a){isNaN(a.j)||J(a.j);a.j=I(v(a.Yb,a),0<a.o&&a.o<w()?2E4:1E4)}
g.Yb=function(){J(this.j);this.j=NaN;this.h&&this.h.abort();var a=Sk(this);if(gb(a)){var b=Tj(this.B,"/pairing/get_screen_availability"),c={lounge_token:lb(a).join(",")};this.h=Uj(this.B,b,c,v(this.be,this,a),v(this.ae,this))}else Pk(this,{}),Ok(this)};
g.be=function(a,b){this.h=null;var c=lb(Sk(this));if(bb(c,lb(a))){for(var c=b.screens||[],d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;Pk(this,d);Ok(this)}else this.M("Changing Screen set during request."),this.Yb()};
g.ae=function(a){this.M("Screen availability failed: "+a);this.h=null;Ok(this)};
function Nk(a){Fj("OnlineScreenService",a)}
g.M=function(a){Fj("OnlineScreenService",a)};
function Sk(a){var b={};y(a.A(),function(a){a.token?b[a.token]=a.id:this.M("Requesting availability of screen w/o lounge token.")});
return b}
function Rk(a){var b=lb(fb(a.f,function(a){return a}));
b.sort(db);b.length?T("yt-remote-online-screen-ids",b.join(","),60):$i("yt-remote-online-screen-ids");a=Na(a.A(),function(a){return!!this.f[a.id]},a);
Bk(z(a,Mj))}
;function W(a){hk.call(this,"ScreenService");this.A=a;this.f=this.h=null;this.j=[];this.o={};Tk(this)}
x(W,hk);g=W.prototype;g.start=function(){this.h.start();this.f.start();this.screens.length&&(this.D("screenChange"),this.f.isEmpty()||this.D("onlineScreenChange"))};
g.Db=function(a,b,c){this.h.Db(a,b,c)};
g.remove=function(a,b,c){this.h.remove(a,b,c);this.f.update()};
g.Ab=function(a,b,c,d){this.h.contains(a)?this.h.Ab(a,b,c,d):(a="Updating name of unknown screen: "+a.name,Fj(this.B,a),d(Error(a)))};
g.$=function(a){return a?this.screens:Xa(this.screens,Na(this.j,function(a){return!this.contains(a)},this))};
g.Tc=function(){return Na(this.$(!0),function(a){return!!this.f.f[a.id]},this)};
function Uk(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);c||(c=a.o[b]);var h=a.$();if(h=(c?gk(h,c):null)||gk(h,b)){h.f=b;var k=Vk(a,h);Qk(a.f,k,function(a){e(a?k:null)})}else c?Wk(a,c,v(function(a){var f=Vk(this,new Ij({name:d,
screenId:c,loungeToken:a,dialId:b||""}));Qk(this.f,f,function(a){e(a?f:null)})},a),f):e(null)}
g.Uc=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new lk(this.A,a,b,c);f.subscribe("pairingComplete",v(function(a){E(f);d(Vk(this,a))},this));
f.subscribe("pairingFailed",function(a){E(f);e(a)});
f.start();return v(f.stop,f)};
function Xk(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];return null}
g.qc=function(a,b){for(var c=2,d=b(a,c);Xk(this,d);){c++;if(20<c)return a;d=b(a,c)}return d};
g.Ne=function(a,b,c,d){Wd(Tj(this.A,"/pairing/get_screen"),{method:"POST",S:{pairing_code:a},timeout:5E3,ca:v(function(a,d){var h=new Ij(d.screen||{});if(!h.name||Xk(this,h.name))h.name=this.qc(h.name,b);c(Vk(this,h))},this),
onError:v(function(a){d(Error("pairing request failed: "+a.status))},this),
ub:v(function(){d(Error("pairing request timed out."))},this)})};
g.G=function(){E(this.h);E(this.f);W.I.G.call(this)};
function Wk(a,b,c,d){a.info("requestLoungeToken_ for "+b);var e={S:{screen_ids:b},method:"POST",context:a,ca:function(a,e){var k=e&&e.screens||[];k[0]&&k[0].screenId==b?c(k[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
Wd(Tj(a.A,"/pairing/get_lounge_token_batch"),e)}
function Yk(a){a.screens=a.h.$();var b=a.o,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.f=c[e.id]||""}a.info("Updated manual screens: "+Qj(a.screens))}
g.Ed=function(){Yk(this);this.D("screenChange");this.f.update()};
function Tk(a){Zk(a);a.h=new Ik(a.A);a.h.subscribe("screenChange",v(a.Ed,a));Yk(a);a.j=Oj(U("yt-remote-automatic-screen-cache")||[]);Zk(a);a.info("Initializing automatic screens: "+Qj(a.j));a.f=new Mk(a.A,v(a.$,a,!0));a.f.subscribe("screenChange",v(function(){this.D("onlineScreenChange")},a))}
function Vk(a,b){var c=a.get(b.id);c?(c.f=b.f,b=c):((c=gk(a.j,b.f))?(c.id=b.id,c.token=b.token,b=c):a.j.push(b),T("yt-remote-automatic-screen-cache",z(a.j,Mj)));Zk(a);a.o[b.f]=b.id;T("yt-remote-device-id-map",a.o,31536E3);return b}
function Zk(a){a.o=U("yt-remote-device-id-map")||{}}
W.prototype.dispose=W.prototype.dispose;function $k(a,b,c){V.call(this);this.R=c;this.K=a;this.h=b;this.j=null}
x($k,V);g=$k.prototype;g.tb=function(a){this.j=a;this.D("sessionScreen",this.j)};
g.aa=function(a){this.isDisposed()||(a&&al(this,""+a),this.j=null,this.D("sessionScreen",null))};
g.info=function(a){Fj(this.R,a)};
function al(a,b){Fj(a.R,b)}
g.Wc=function(){return null};
g.$b=function(a){var b=this.h;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,v(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),v(function(){al(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.G=function(){this.$b("");$k.I.G.call(this)};function bl(a,b){$k.call(this,a,b,"CastSession");this.f=null;this.A=0;this.o=null;this.F=v(this.Oe,this);this.B=v(this.me,this);this.A=I(v(function(){cl(this,null)},this),12E4)}
x(bl,$k);g=bl.prototype;g.Zb=function(a){if(this.f){if(this.f==a)return;al(this,"Overriding cast sesison with new session object");this.f.removeUpdateListener(this.F);this.f.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B)}this.f=a;this.f.addUpdateListener(this.F);this.f.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.B);this.o&&dl(this);el(this,"getMdxSessionStatus")};
g.Sa=function(a){this.info("launchWithParams: "+M(a));this.o=a;this.f&&dl(this)};
g.stop=function(){this.f?this.f.stop(v(function(){this.aa()},this),v(function(){this.aa(Error("Failed to stop receiver app."))},this)):this.aa(Error("Stopping cast device witout session."))};
g.$b=t;g.G=function(){this.info("disposeInternal");J(this.A);this.A=0;this.f&&(this.f.removeUpdateListener(this.F),this.f.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B));this.f=null;bl.I.G.call(this)};
function dl(a){var b=a.o.videoId||a.o.videoIds[a.o.index];b&&el(a,"flingVideo",{videoId:b,currentTime:a.o.currentTime||0});a.o=null}
function el(a,b,c){a.info("sendYoutubeMessage_: "+b+" "+M(c));var d={};d.type=b;c&&(d.data=c);a.f?a.f.sendMessage("urn:x-cast:com.google.youtube.mdx",d,t,v(function(){al(this,"Failed to send message: "+b+".")},a)):al(a,"Sending yt message without session: "+M(d))}
g.me=function(a,b){if(!this.isDisposed())if(b){var c=wd(b);if(c){var d=""+c.type,c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+M(c));switch(d){case "mdxSessionStatus":cl(this,c.screenId);break;default:al(this,"Unknown youtube message: "+d)}}else al(this,"Unable to parse message.")}else al(this,"No data in message.")};
function cl(a,b){J(a.A);if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.j||a.j.id!=b){var c=v(a.tb,a),d=v(a.aa,a);a.pc(b,c,d,5)}}else a.aa(Error("Waiting for session status timed out."))}
g.pc=function(a,b,c,d){Uk(this.K,this.h.label,a,this.h.friendlyName,v(function(e){e?b(e):0<=d?(al(this,"Screen "+a+" appears to be offline. "+d+" retries left."),I(v(this.pc,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.Wc=function(){return this.f};
g.Oe=function(a){this.isDisposed()||a||(al(this,"Cast session died."),this.aa())};function fl(a,b){$k.call(this,a,b,"DialSession");this.A=this.J=null;this.N="";this.o=null;this.F=t;this.B=NaN;this.P=v(this.Re,this);this.f=t}
x(fl,$k);g=fl.prototype;g.Zb=function(a){this.A=a;this.A.addUpdateListener(this.P)};
g.Sa=function(a){this.o=a;this.F()};
g.stop=function(){this.f();this.f=t;J(this.B);this.A?this.A.stop(v(this.aa,this,null),v(this.aa,this,"Failed to stop DIAL device.")):this.aa()};
g.G=function(){this.f();this.f=t;J(this.B);this.A&&this.A.removeUpdateListener(this.P);this.A=null;fl.I.G.call(this)};
function gl(a){a.f=a.K.Uc(a.N,a.h.label,a.h.friendlyName,v(function(a){this.f=t;this.tb(a)},a),v(function(a){this.f=t;
this.aa(a)},a))}
g.Re=function(a){this.isDisposed()||a||(al(this,"DIAL session died."),this.f(),this.f=t,this.aa())};
function hl(a){var b={};b.pairingCode=a.N;if(a.o){var c=a.o.index||0,d=a.o.currentTime||0;b.v=a.o.videoId||a.o.videoIds[c];b.t=d}Hk()&&(b.env_useStageMdx=1);return Kd(b)}
g.Ub=function(a){this.N=Yj();if(this.o){var b=new chrome.cast.DialLaunchResponse(!0,hl(this));a(b);gl(this)}else this.F=v(function(){J(this.B);this.F=t;this.B=NaN;var b=new chrome.cast.DialLaunchResponse(!0,hl(this));a(b);gl(this)},this),this.B=I(v(function(){this.F()},this),100)};
g.Fd=function(a,b){Uk(this.K,this.J.receiver.label,a,this.h.friendlyName,v(function(a){a&&a.token?(this.tb(a),b(new chrome.cast.DialLaunchResponse(!1))):this.Ub(b)},this),v(function(a){al(this,"Failed to get DIAL screen: "+a);
this.Ub(b)},this))};function il(a,b){$k.call(this,a,b,"ManualSession");this.f=I(v(this.Sa,this,null),150)}
x(il,$k);il.prototype.stop=function(){this.aa()};
il.prototype.Zb=t;il.prototype.Sa=function(){J(this.f);this.f=NaN;var a=gk(this.K.$(),this.h.label);a?this.tb(a):this.aa(Error("No such screen"))};
il.prototype.G=function(){J(this.f);this.f=NaN;il.I.G.call(this)};function jl(a){V.call(this);this.h=a;this.f=null;this.A=!1;this.j=[];this.o=v(this.Zd,this)}
x(jl,V);g=jl.prototype;
g.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest("233637DE");c.dialRequest=new chrome.cast.DialRequest("YouTube");var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,c=new chrome.cast.ApiConfig(c,v(this.Cc,this),v(this.$d,this),d,e);c.customDialLaunchCallback=v(this.Od,this);chrome.cast.initialize(c,v(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.o),
Bj(kl),this.h.subscribe("onlineScreenChange",v(this.Vc,this)),this.j=ll(this),chrome.cast.setCustomReceivers(this.j,t,v(function(a){this.M("Failed to set initial custom receivers: "+M(a))},this)),this.D("yt-remote-cast2-availability-change",ml(this)),b(!0))},this),v(function(a){this.M("Failed to initialize API: "+M(a));
b(!1)},this))};
g.ze=function(a,b){nl("Setting connected screen ID: "+a+" -> "+b);if(this.f){var c=this.f.j;if(!a||c&&c.id!=a)nl("Unsetting old screen status: "+this.f.h.friendlyName),E(this.f),this.f=null}if(a&&b){if(!this.f){c=gk(this.h.$(),a);if(!c){nl("setConnectedScreenStatus: Unknown screen.");return}var d=ol(this,c);d||(nl("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.f?c.f:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.j.push(d),chrome.cast.setCustomReceivers(this.j,
t,v(function(a){this.M("Failed to set initial custom receivers: "+M(a))},this)));
nl("setConnectedScreenStatus: new active receiver: "+d.friendlyName);pl(this,new il(this.h,d),!0)}this.f.$b(b)}else nl("setConnectedScreenStatus: no screen.")};
function ol(a,b){return b?Qa(a.j,function(a){return Jj(b,a.label)},a):null}
g.Ae=function(a){this.isDisposed()?this.M("Setting connection data on disposed cast v2"):this.f?this.f.Sa(a):this.M("Setting connection data without a session")};
g.Qe=function(){this.isDisposed()?this.M("Stopping session on disposed cast v2"):this.f?(this.f.stop(),E(this.f),this.f=null):nl("Stopping non-existing session")};
g.requestSession=function(){chrome.cast.requestSession(v(this.Cc,this),v(this.ce,this))};
g.G=function(){this.h.unsubscribe("onlineScreenChange",v(this.Vc,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.o);Ej(kl);E(this.f);jl.I.G.call(this)};
function nl(a){Fj("Controller",a)}
g.M=function(a){Fj("Controller",a)};
function kl(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)}
function ml(a){return a.A||!!a.j.length||!!a.f}
function pl(a,b,c){E(a.f);(a.f=b)?(c?a.D("yt-remote-cast2-receiver-resumed",b.h):a.D("yt-remote-cast2-receiver-selected",b.h),b.subscribe("sessionScreen",v(a.Dc,a,b)),b.j?a.D("yt-remote-cast2-session-change",b.j):c&&a.f.Sa(null)):a.D("yt-remote-cast2-session-change",null)}
g.Dc=function(a,b){this.f==a&&(b||pl(this,null),this.D("yt-remote-cast2-session-change",b))};
g.Zd=function(a,b){if(!this.isDisposed())if(a)switch(nl("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.f)if(this.f.h.label!=a.label)nl("onReceiverAction_: Stopping active receiver: "+this.f.h.friendlyName),this.f.stop();else{nl("onReceiverAction_: Casting to active receiver.");this.f.j&&this.D("yt-remote-cast2-session-change",this.f.j);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:pl(this,new il(this.h,a));break;case chrome.cast.ReceiverType.DIAL:pl(this,
new fl(this.h,a));break;case chrome.cast.ReceiverType.CAST:pl(this,new bl(this.h,a));break;default:this.M("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.f&&this.f.h.label==a.label?this.f.stop():this.M("Stopping receiver w/o session: "+a.friendlyName)}else this.M("onReceiverAction_ called without receiver.")};
g.Od=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.M("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.f?this.f.h:null;if(!c||c.label!=b.label)return this.M("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.f.j)return nl("Reselecting dial screen."),
this.D("yt-remote-cast2-session-change",this.f.j),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.M('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);pl(this,new fl(this.h,b))}b=this.f;b.J=a;return b.J.appState==chrome.cast.DialAppState.RUNNING?new Promise(v(b.Fd,b,(b.J.extraData||{}).screenId||null)):new Promise(v(b.Ub,b))};
g.Cc=function(a){if(!this.isDisposed()){nl("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.f)if(b.receiverType==chrome.cast.ReceiverType.CAST)nl("Got resumed cast session before resumed mdx connection."),pl(this,new bl(this.h,b),!0);else{this.M("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.f.h,d=gk(this.h.$(),c.label);d&&Jj(d,b.label)&&c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==
chrome.cast.ReceiverType.CAST&&(nl("onSessionEstablished_: manual to cast session change "+b.friendlyName),E(this.f),this.f=new bl(this.h,b),this.f.subscribe("sessionScreen",v(this.Dc,this,this.f)),this.f.Sa(null));this.f.Zb(a)}}};
g.Pe=function(){return this.f?this.f.Wc():null};
g.ce=function(a){this.isDisposed()||(this.M("Failed to estabilish a session: "+M(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&pl(this,null))};
g.$d=function(a){nl("Receiver availability updated: "+a);if(!this.isDisposed()){var b=ml(this);this.A=a==chrome.cast.ReceiverAvailability.AVAILABLE;ml(this)!=b&&this.D("yt-remote-cast2-availability-change",ml(this))}};
function ll(a){var b=a.h.Tc(),c=a.f&&a.f.h;a=z(b,function(a){c&&Jj(a,c.label)&&(c=null);var b=a.f?a.f:a.id,f=ol(this,a);f?(f.label=b,f.friendlyName=a.name):(f=new chrome.cast.Receiver(b,a.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a}
g.Vc=function(){if(!this.isDisposed()){var a=ml(this);this.j=ll(this);nl("Updating custom receivers: "+M(this.j));chrome.cast.setCustomReceivers(this.j,t,v(function(){this.M("Failed to set custom receivers.")},this));
var b=ml(this);b!=a&&this.D("yt-remote-cast2-availability-change",b)}};
jl.prototype.setLaunchParams=jl.prototype.Ae;jl.prototype.setConnectedScreenStatus=jl.prototype.ze;jl.prototype.stopSession=jl.prototype.Qe;jl.prototype.getCastSession=jl.prototype.Pe;jl.prototype.requestSession=jl.prototype.requestSession;jl.prototype.init=jl.prototype.init;jl.prototype.dispose=jl.prototype.dispose;function ql(a,b,c){rl()?tl(a)&&(ul(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?vl(b):(window.__onGCastApiAvailable=function(a,c){a?vl(b):(wl("Failed to load cast API: "+c),xl(!1),ul(!1),$i("yt-remote-cast-available"),$i("yt-remote-cast-receiver"),yl(),b(!1))},c?Dc("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):vj())):sl("Cannot initialize because not running Chrome")}
function yl(){sl("dispose");var a=zl();a&&a.dispose();Al=null;q("yt.mdx.remote.cloudview.instance_",null,void 0);Bl(!1);zc(Cl);Cl.length=0}
function Dl(){return!!U("yt-remote-cast-installed")}
function El(){var a=U("yt-remote-cast-receiver");return a?Ca(a.friendlyName):null}
function Fl(){sl("clearCurrentReciever");$i("yt-remote-cast-receiver")}
function Gl(){Dl()?zl()?Hl()?(sl("Requesting cast selector."),Al.requestSession()):(sl("Wait for cast API to be ready to request the session."),Cl.push(xc("yt-remote-cast2-api-ready",Gl))):wl("requestCastSelector: Cast is not initialized."):wl("requestCastSelector: Cast API is not installed!")}
function Il(a){Hl()?zl().setLaunchParams(a):wl("setLaunchParams called before ready.")}
function Jl(a,b){Hl()?zl().setConnectedScreenStatus(a,b):wl("setConnectedScreenStatus called before ready.")}
var Al=null;function rl(){var a;a=0<=xb.search(/\ (CrMo|Chrome|CriOS)\//);return Af||a}
function Kl(a){Al.init(!0,a)}
function tl(a){var b=!1;if(!Al){var c=r("yt.mdx.remote.cloudview.instance_");c||(c=new jl(a),c.subscribe("yt-remote-cast2-availability-change",function(a){T("yt-remote-cast-available",a);K("yt-remote-cast2-availability-change",a)}),c.subscribe("yt-remote-cast2-receiver-selected",function(a){sl("onReceiverSelected: "+a.friendlyName);
T("yt-remote-cast-receiver",a);K("yt-remote-cast2-receiver-selected",a)}),c.subscribe("yt-remote-cast2-receiver-resumed",function(a){sl("onReceiverResumed: "+a.friendlyName);
T("yt-remote-cast-receiver",a)}),c.subscribe("yt-remote-cast2-session-change",function(a){sl("onSessionChange: "+Pj(a));
a||$i("yt-remote-cast-receiver");K("yt-remote-cast2-session-change",a)}),q("yt.mdx.remote.cloudview.instance_",c,void 0),b=!0);
Al=c}sl("cloudview.createSingleton_: "+b);return b}
function zl(){Al||(Al=r("yt.mdx.remote.cloudview.instance_"));return Al}
function vl(a){xl(!0);ul(!1);Kl(function(b){b?(Bl(!0),K("yt-remote-cast2-api-ready")):(wl("Failed to initialize cast API."),xl(!1),$i("yt-remote-cast-available"),$i("yt-remote-cast-receiver"),yl());a(b)})}
function sl(a){Fj("cloudview",a)}
function wl(a){Fj("cloudview",a)}
function xl(a){sl("setCastInstalled_ "+a);T("yt-remote-cast-installed",a)}
function Hl(){return!!r("yt.mdx.remote.cloudview.apiReady_")}
function Bl(a){sl("setApiReady_ "+a);q("yt.mdx.remote.cloudview.apiReady_",a,void 0)}
function ul(a){q("yt.mdx.remote.cloudview.initializing_",a,void 0)}
var Cl=[];function Ll(){if(!("cast"in window))return!1;var a=window.cast||{};return"ActivityStatus"in a&&"Api"in a&&"LaunchRequest"in a&&"Receiver"in a}
function Ml(a){Fj("CAST",a)}
function Nl(a){var b=Ol();b&&b.logMessage&&b.logMessage(a)}
function Pl(a){if(a.event.source==window&&a.event.data&&"CastApi"==a.event.data.source&&"Hello"==a.event.data.event)for(;Ql.length;)Ql.shift()()}
function Rl(){if(!r("yt.mdx.remote.castv2_")&&!Sl&&(0==Ta.length&&Za(Ta,Ek()),Ll())){var a=Ol();a?(a.removeReceiverListener("YouTube",Tl),a.addReceiverListener("YouTube",Tl),Ml("API initialized in the other binary")):(a=new cast.Api,Ul(a),a.addReceiverListener("YouTube",Tl),a.setReloadTabRequestHandler&&a.setReloadTabRequestHandler(function(){I(function(){window.location.reload(!0)},1E3)}),Bj(Nl),Ml("API initialized"));
Sl=!0}}
function Vl(){var a=Ol();a&&(Ml("API disposed"),Ej(Nl),a.setReloadTabRequestHandler&&a.setReloadTabRequestHandler(t),a.removeReceiverListener("YouTube",Tl),Ul(null));Sl=!1;Ql=null;(a=Re(window,"message",Pl,!1))&&Se(a)}
function Wl(a){var b=Ra(Ta,function(b){return b.id==a.id});
0<=b&&(Ta[b]=Wj(a))}
function Tl(a){a.length&&Ml("Updating receivers: "+M(a));Xl(a);K("yt-remote-cast-device-list-update");y(Yl(),function(a){Zl(a.id)});
y(a,function(a){if(a.isTabProjected){var c=$l(a.id);Ml("Detected device: "+c.id+" is tab projected. Firing DEVICE_TAB_PROJECTED event.");I(function(){K("yt-remote-cast-device-tab-projected",c.id)},1E3)}})}
function am(a,b){Ml("Updating "+a+" activity status: "+M(b));var c=$l(a);c?(b.activityId&&(c.f=b.activityId),c.status="running"==b.status?"RUNNING":"stopped"==b.status?"STOPPED":"error"==b.status?"ERROR":"UNKNOWN","RUNNING"!=c.status&&(c.f=""),Wl(c),K("yt-remote-cast-device-status-update",c)):Ml("Device not found")}
function Yl(){Rl();return ck(Ta)}
function Xl(a){a=z(a,function(a){var c={id:a.id,name:Ca(a.name)};if(a=$l(a.id))c.activityId=a.f,c.status=a.status;return c});
Sa();Za(Ta,a)}
function $l(a){var b=Yl();return Qa(b,function(b){return b.id==a})||null}
function Zl(a){var b=$l(a),c=Ol();c&&b&&b.f&&c.getActivityStatus(b.f,function(b){"error"==b.status&&(b.status="stopped");am(a,b)})}
function bm(a){Rl();var b=$l(a),c=Ol();c&&b&&b.f?(Ml("Stopping cast activity"),c.stopActivity(b.f,pa(am,a))):Ml("Dropping cast activity stop")}
function Ol(){return r("yt.mdx.remote.castapi.api_")}
function Ul(a){q("yt.mdx.remote.castapi.api_",a,void 0)}
var Sl=!1,Ql=null,Ta=r("yt.mdx.remote.castapi.devices_")||[];q("yt.mdx.remote.castapi.devices_",Ta,void 0);function cm(a,b){this.action=a;this.params=b||null}
;function dm(){}
;function em(){this.f=w()}
new em;em.prototype.reset=function(){this.f=w()};
em.prototype.get=function(){return this.f};function fm(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=!1;this.Mc=!0}
fm.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Mc=!1};var gm=!L||9<=+ud,hm=L&&!sd("9");!ld||sd("528");kd&&sd("1.9b")||L&&sd("8")||id&&sd("9.5")||ld&&sd("528");kd&&!sd("8")||L&&sd("9");function im(a,b){fm.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.f=this.state=null;a&&this.init(a,b)}
x(im,fm);
im.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;if(e){if(kd){var f;a:{try{lf(e.nodeName);f=!0;break a}catch(h){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||
0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.f=a;a.defaultPrevented&&this.preventDefault()};
im.prototype.preventDefault=function(){im.I.preventDefault.call(this);var a=this.f;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,hm)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var jm="closure_listenable_"+(1E6*Math.random()|0),km=0;function lm(a,b,c,d,e){this.listener=a;this.f=null;this.src=b;this.type=c;this.lb=!!d;this.qb=e;this.key=++km;this.Ua=this.kb=!1}
function mm(a){a.Ua=!0;a.listener=null;a.f=null;a.src=null;a.qb=null}
;function nm(a){this.src=a;this.f={};this.h=0}
function om(a,b,c,d,e){var f=b.toString();b=a.f[f];b||(b=a.f[f]=[],a.h++);var h=pm(b,c,d,e);-1<h?(a=b[h],a.kb=!1):(a=new lm(c,a.src,f,!!d,e),a.kb=!1,b.push(a));return a}
nm.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.f))return!1;var e=this.f[a];b=pm(e,b,c,d);return-1<b?(mm(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.f[a],this.h--),!0):!1};
function qm(a,b){var c=b.type;c in a.f&&Va(a.f[c],b)&&(mm(b),0==a.f[c].length&&(delete a.f[c],a.h--))}
nm.prototype.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.f)if(!a||c==a){for(var d=this.f[c],e=0;e<d.length;e++)++b,mm(d[e]);delete this.f[c];this.h--}return b};
function rm(a,b,c,d,e){a=a.f[b.toString()];b=-1;a&&(b=pm(a,c,d,e));return-1<b?a[b]:null}
function pm(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Ua&&f.listener==b&&f.lb==!!c&&f.qb==d)return e}return-1}
;var sm="closure_lm_"+(1E6*Math.random()|0),tm={},um=0;
function vm(a,b,c,d,e){if(ea(b)){for(var f=0;f<b.length;f++)vm(a,b[f],c,d,e);return null}c=wm(c);if(a&&a[jm])a=a.rb(b,c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,h=xm(a);h||(a[sm]=h=new nm(a));c=om(h,b,c,d,e);if(!c.f){d=ym();c.f=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,f);else if(a.attachEvent)a.attachEvent(zm(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");um++}a=c}return a}
function ym(){var a=Am,b=gm?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function Bm(a,b,c,d,e){if(ea(b))for(var f=0;f<b.length;f++)Bm(a,b[f],c,d,e);else c=wm(c),a&&a[jm]?a.zb(b,c,d,e):a&&(a=xm(a))&&(b=rm(a,b,c,!!d,e))&&Cm(b)}
function Cm(a){if(!ga(a)&&a&&!a.Ua){var b=a.src;if(b&&b[jm])qm(b.j,a);else{var c=a.type,d=a.f;b.removeEventListener?b.removeEventListener(c,d,a.lb):b.detachEvent&&b.detachEvent(zm(c),d);um--;(c=xm(b))?(qm(c,a),0==c.h&&(c.src=null,b[sm]=null)):mm(a)}}}
function zm(a){return a in tm?tm[a]:tm[a]="on"+a}
function Dm(a,b,c,d){var e=!0;if(a=xm(a))if(b=a.f[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.lb==c&&!f.Ua&&(f=Em(f,d),e=e&&!1!==f)}return e}
function Em(a,b){var c=a.listener,d=a.qb||a.src;a.kb&&Cm(a);return c.call(d,b)}
function Am(a,b){if(a.Ua)return!0;if(!gm){var c=b||r("window.event"),d=new im(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(l){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);for(var f=a.type,h=c.length-1;0<=h;h--){d.currentTarget=c[h];var k=Dm(c[h],f,!0,d),e=e&&k}for(h=0;h<c.length;h++)d.currentTarget=c[h],k=Dm(c[h],f,!1,d),e=e&&k}return e}return Em(a,new im(b,this))}
function xm(a){a=a[sm];return a instanceof nm?a:null}
var Fm="__closure_events_fn_"+(1E9*Math.random()>>>0);function wm(a){if(ha(a))return a;a[Fm]||(a[Fm]=function(b){return a.handleEvent(b)});
return a[Fm]}
;function Gm(){D.call(this);this.j=new nm(this);this.za=this;this.ia=null}
x(Gm,D);Gm.prototype[jm]=!0;g=Gm.prototype;g.addEventListener=function(a,b,c,d){vm(this,a,b,c,d)};
g.removeEventListener=function(a,b,c,d){Bm(this,a,b,c,d)};
function Hm(a,b){var c,d=a.ia;if(d){c=[];for(var e=1;d;d=d.ia)c.push(d),++e}var d=a.za,e=b,f=e.type||e;if(u(e))e=new fm(e,d);else if(e instanceof fm)e.target=e.target||d;else{var h=e,e=new fm(f,d);wb(e,h)}var h=!0,k;if(c)for(var l=c.length-1;0<=l;l--)k=e.currentTarget=c[l],h=Im(k,f,!0,e)&&h;k=e.currentTarget=d;h=Im(k,f,!0,e)&&h;h=Im(k,f,!1,e)&&h;if(c)for(l=0;l<c.length;l++)k=e.currentTarget=c[l],h=Im(k,f,!1,e)&&h}
g.G=function(){Gm.I.G.call(this);this.removeAllListeners();this.ia=null};
g.rb=function(a,b,c,d){return om(this.j,String(a),b,c,d)};
g.zb=function(a,b,c,d){return this.j.remove(String(a),b,c,d)};
g.removeAllListeners=function(a){return this.j?this.j.removeAll(a):0};
function Im(a,b,c,d){b=a.j.f[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.Ua&&h.lb==c){var k=h.listener,l=h.qb||h.src;h.kb&&qm(a.j,h);e=!1!==k.call(l,d)&&e}}return e&&0!=d.Mc}
;function Jm(a,b){this.h=new yd(a);this.f=b?wd:vd}
Jm.prototype.stringify=function(a){return xd(this.h,a)};
Jm.prototype.parse=function(a){return this.f(a)};function Km(a,b){this.f=0;this.B=void 0;this.l=this.h=this.j=null;this.o=this.A=!1;if(a!=t)try{var c=this;a.call(b,function(a){Lm(c,2,a)},function(a){Lm(c,3,a)})}catch(d){Lm(this,3,d)}}
function Mm(){this.next=this.context=this.h=this.l=this.f=null;this.j=!1}
Mm.prototype.reset=function(){this.context=this.h=this.l=this.f=null;this.j=!1};
var Nm=new Wb(function(){return new Mm},function(a){a.reset()},100);
function Om(a,b,c){var d=Nm.get();d.l=a;d.h=b;d.context=c;return d}
Km.prototype.then=function(a,b,c){return Pm(this,ha(a)?a:null,ha(b)?b:null,c)};
Km.prototype.then=Km.prototype.then;Km.prototype.$goog_Thenable=!0;Km.prototype.cancel=function(a){0==this.f&&ac(function(){var b=new Qm(a);Rm(this,b)},this)};
function Rm(a,b){if(0==a.f)if(a.j){var c=a.j;if(c.h){for(var d=0,e=null,f=null,h=c.h;h&&(h.j||(d++,h.f==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(0==c.f&&1==d?Rm(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Sm(c),Tm(c,e,3,b)))}a.j=null}else Lm(a,3,b)}
function Um(a,b){a.h||2!=a.f&&3!=a.f||Vm(a);a.l?a.l.next=b:a.h=b;a.l=b}
function Pm(a,b,c,d){var e=Om(null,null,null);e.f=new Km(function(a,h){e.l=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){h(n)}}:a;
e.h=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof Qm?h(b):a(e)}catch(n){h(n)}}:h});
e.f.j=a;Um(a,e);return e.f}
Km.prototype.J=function(a){this.f=0;Lm(this,2,a)};
Km.prototype.Y=function(a){this.f=0;Lm(this,3,a)};
function Lm(a,b,c){if(0==a.f){a==c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;var d;a:{var e=c,f=a.J,h=a.Y;if(e instanceof Km)Um(e,Om(f||t,h||null,a)),d=!0;else{var k;if(e)try{k=!!e.$goog_Thenable}catch(n){k=!1}else k=!1;if(k)e.then(f,h,a),d=!0;else{if(ia(e))try{var l=e.then;if(ha(l)){Wm(e,l,f,h,a);d=!0;break a}}catch(n){h.call(a,n);d=!0;break a}d=!1}}}d||(a.B=c,a.f=b,a.j=null,Vm(a),3!=b||c instanceof Qm||Xm(a,c))}}
function Wm(a,b,c,d,e){function f(a){k||(k=!0,d.call(e,a))}
function h(a){k||(k=!0,c.call(e,a))}
var k=!1;try{b.call(a,h,f)}catch(l){f(l)}}
function Vm(a){a.A||(a.A=!0,ac(a.F,a))}
function Sm(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.l=null);return b}
Km.prototype.F=function(){for(var a=null;a=Sm(this);)Tm(this,a,this.f,this.B);this.A=!1};
function Tm(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.o;a=a.j)a.o=!1;if(b.f)b.f.j=null,Ym(b,c,d);else try{b.j?b.l.call(b.context):Ym(b,c,d)}catch(e){Zm.call(null,e)}Xb(Nm,b)}
function Ym(a,b,c){2==b?a.l.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Xm(a,b){a.o=!0;ac(function(){a.o&&Zm.call(null,b)})}
var Zm=Tb;function Qm(a){qa.call(this,a)}
x(Qm,qa);Qm.prototype.name="cancel";function $m(a,b){Gm.call(this);this.f=a||1;this.h=b||m;this.l=v(this.Ce,this);this.o=w()}
x($m,Gm);g=$m.prototype;g.enabled=!1;g.ea=null;function an(a,b){a.f=b;a.ea&&a.enabled?(a.stop(),a.start()):a.ea&&a.stop()}
g.Ce=function(){if(this.enabled){var a=w()-this.o;0<a&&a<.8*this.f?this.ea=this.h.setTimeout(this.l,this.f-a):(this.ea&&(this.h.clearTimeout(this.ea),this.ea=null),Hm(this,"tick"),this.enabled&&(this.ea=this.h.setTimeout(this.l,this.f),this.o=w()))}};
g.start=function(){this.enabled=!0;this.ea||(this.ea=this.h.setTimeout(this.l,this.f),this.o=w())};
g.stop=function(){this.enabled=!1;this.ea&&(this.h.clearTimeout(this.ea),this.ea=null)};
g.G=function(){$m.I.G.call(this);this.stop();delete this.h};
function bn(a,b,c){if(ha(a))c&&(a=v(a,c));else if(a&&"function"==typeof a.handleEvent)a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<+b?-1:m.setTimeout(a,b||0)}
;function cn(a,b,c){D.call(this);this.l=null!=c?v(a,c):a;this.j=b;this.h=v(this.ee,this);this.f=[]}
x(cn,D);g=cn.prototype;g.yb=!1;g.Qa=null;g.sd=function(a){this.f=arguments;this.Qa?this.yb=!0:dn(this)};
g.stop=function(){this.Qa&&(m.clearTimeout(this.Qa),this.Qa=null,this.yb=!1,this.f=[])};
g.G=function(){cn.I.G.call(this);this.stop()};
g.ee=function(){this.Qa=null;this.yb&&(this.yb=!1,dn(this))};
function dn(a){a.Qa=bn(a.h,a.j);a.l.apply(null,a.f)}
;function en(a){D.call(this);this.h=a;this.f={}}
x(en,D);var fn=[];g=en.prototype;g.rb=function(a,b,c,d){ea(b)||(b&&(fn[0]=b.toString()),b=fn);for(var e=0;e<b.length;e++){var f=vm(a,b[e],c||this.handleEvent,d||!1,this.h||this);if(!f)break;this.f[f.key]=f}return this};
g.zb=function(a,b,c,d,e){if(ea(b))for(var f=0;f<b.length;f++)this.zb(a,b[f],c,d,e);else c=c||this.handleEvent,e=e||this.h||this,c=wm(c),d=!!d,b=a&&a[jm]?rm(a.j,String(b),c,d,e):a?(a=xm(a))?rm(a,b,c,d,e):null:null,b&&(Cm(b),delete this.f[b.key]);return this};
g.removeAll=function(){eb(this.f,function(a,b){this.f.hasOwnProperty(b)&&Cm(a)},this);
this.f={}};
g.G=function(){en.I.G.call(this);this.removeAll()};
g.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function gn(){}
gn.prototype.f=null;function hn(a){var b;(b=a.f)||(b={},jn(a)&&(b[0]=!0,b[1]=!0),b=a.f=b);return b}
;var kn;function ln(){}
x(ln,gn);function mn(a){return(a=jn(a))?new ActiveXObject(a):new XMLHttpRequest}
function jn(a){if(!a.h&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.h=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.h}
kn=new ln;function nn(a,b,c,d,e){this.f=a;this.j=c;this.F=d;this.B=e||1;this.o=45E3;this.l=new en(this);this.h=new $m;an(this.h,250)}
g=nn.prototype;g.Ia=null;g.na=!1;g.Wa=null;g.bc=null;g.gb=null;g.Va=null;g.Aa=null;g.Da=null;g.Ka=null;g.O=null;g.jb=0;g.oa=null;g.Cb=null;g.Ja=null;g.cb=-1;g.Nc=!0;g.Fa=!1;g.Sb=0;g.wb=null;var on={},pn={};function qn(){return!L||10<=+ud}
g=nn.prototype;g.setTimeout=function(a){this.o=a};
function rn(a,b,c){a.Va=1;a.Aa=Cg(b.clone());a.Ka=c;a.A=!0;sn(a,null)}
function tn(a,b,c,d,e){a.Va=1;a.Aa=Cg(b.clone());a.Ka=null;a.A=c;e&&(a.Nc=!1);sn(a,d)}
function sn(a,b){a.gb=w();un(a);a.Da=a.Aa.clone();Ag(a.Da,"t",a.B);a.jb=0;a.O=a.f.Lb(a.f.ib()?b:null);0<a.Sb&&(a.wb=new cn(v(a.Sc,a,a.O),a.Sb));a.l.rb(a.O,"readystatechange",a.oe);var c=a.Ia?tb(a.Ia):{};a.Ka?(a.Cb="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.O.send(a.Da,a.Cb,a.Ka,c)):(a.Cb="GET",a.Nc&&!ld&&(c.Connection="close"),a.O.send(a.Da,a.Cb,null,c));a.f.ma(1)}
g.oe=function(a){a=a.target;var b=this.wb;b&&3==vn(a)?b.sd():this.Sc(a)};
g.Sc=function(a){try{if(a==this.O)a:{var b=vn(this.O),c=this.O.o,d=this.O.getStatus();if(!qn()||ld&&!sd("420+")){if(4>b)break a}else if(3>b||3==b&&!id&&!wn(this.O))break a;this.Fa||4!=b||7==c||(8==c||0>=d?this.f.ma(3):this.f.ma(2));xn(this);var e=this.O.getStatus();this.cb=e;var f=wn(this.O);(this.na=200==e)?(4==b&&yn(this),this.A?(zn(this,b,f),id&&this.na&&3==b&&(this.l.rb(this.h,"tick",this.ne),this.h.start())):An(this,f),this.na&&!this.Fa&&(4==b?this.f.sb(this):(this.na=!1,un(this)))):(this.Ja=
400==e&&0<f.indexOf("Unknown SID")?3:0,X(),yn(this),Bn(this))}}catch(h){this.O&&wn(this.O)}finally{}};
function zn(a,b,c){for(var d=!0;!a.Fa&&a.jb<c.length;){var e=Cn(a,c);if(e==pn){4==b&&(a.Ja=4,X(),d=!1);break}else if(e==on){a.Ja=4;X();d=!1;break}else An(a,e)}4==b&&0==c.length&&(a.Ja=1,X(),d=!1);a.na=a.na&&d;d||(yn(a),Bn(a))}
g.ne=function(){var a=vn(this.O),b=wn(this.O);this.jb<b.length&&(xn(this),zn(this,a,b),this.na&&4!=a&&un(this))};
function Cn(a,b){var c=a.jb,d=b.indexOf("\n",c);if(-1==d)return pn;c=+b.substring(c,d);if(isNaN(c))return on;d+=1;if(d+c>b.length)return pn;var e=b.substr(d,c);a.jb=d+c;return e}
function Dn(a,b){a.gb=w();un(a);var c=b?window.location.hostname:"";a.Da=a.Aa.clone();O(a.Da,"DOMAIN",c);O(a.Da,"t",a.B);try{a.oa=new ActiveXObject("htmlfile")}catch(n){yn(a);a.Ja=7;X();Bn(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var h=c.charAt(f);if("<"==h)e=e+"\\x3c";else if(">"==h)e=e+"\\x3e";else{if(h in Ha)h=Ha[h];else if(h in Ga)h=Ha[h]=Ga[h];else{var k=h,l=h.charCodeAt(0);if(31<l&&127>l)k=h;else{if(256>l){if(k="\\x",16>l||256<l)k+="0"}else k="\\u",4096>l&&(k+="0");
k+=l.toString(16).toUpperCase()}h=Ha[h]=k}e+=h}}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=Pc(Db("b/12014412"),d);a.oa.open();a.oa.write(Mb(c));a.oa.close();a.oa.parentWindow.m=v(a.ie,a);a.oa.parentWindow.d=v(a.Gc,a,!0);a.oa.parentWindow.rpcClose=v(a.Gc,a,!1);c=a.oa.createElement("DIV");a.oa.parentWindow.document.body.appendChild(c);d=Ib(a.Da.toString());d=Gb(d);Ba.test(d)&&(-1!=d.indexOf("&")&&(d=d.replace(va,"&amp;")),-1!=d.indexOf("<")&&(d=d.replace(wa,"&lt;")),-1!=
d.indexOf(">")&&(d=d.replace(xa,"&gt;")),-1!=d.indexOf('"')&&(d=d.replace(ya,"&quot;")),-1!=d.indexOf("'")&&(d=d.replace(za,"&#39;")),-1!=d.indexOf("\x00")&&(d=d.replace(Aa,"&#0;")));d=Pc(Db("b/12014412"),'<iframe src="'+d+'"></iframe>');c.innerHTML=Mb(d);a.f.ma(1)}
g.ie=function(a){En(v(this.he,this,a),0)};
g.he=function(a){this.Fa||(xn(this),An(this,a),un(this))};
g.Gc=function(a){En(v(this.ge,this,a),0)};
g.ge=function(a){this.Fa||(yn(this),this.na=a,this.f.sb(this),this.f.ma(4))};
g.cancel=function(){this.Fa=!0;yn(this)};
function un(a){a.bc=w()+a.o;Fn(a,a.o)}
function Fn(a,b){if(null!=a.Wa)throw Error("WatchDog timer not null");a.Wa=En(v(a.ke,a),b)}
function xn(a){a.Wa&&(m.clearTimeout(a.Wa),a.Wa=null)}
g.ke=function(){this.Wa=null;var a=w();0<=a-this.bc?(2!=this.Va&&this.f.ma(3),yn(this),this.Ja=2,X(),Bn(this)):Fn(this,this.bc-a)};
function Bn(a){a.f.tc()||a.Fa||a.f.sb(a)}
function yn(a){xn(a);E(a.wb);a.wb=null;a.h.stop();a.l.removeAll();if(a.O){var b=a.O;a.O=null;Gn(b);b.dispose()}a.oa&&(a.oa=null)}
function An(a,b){try{a.f.Bc(a,b),a.f.ma(4)}catch(c){}}
;function Hn(a,b,c,d,e){if(0==d)c(!1);else{var f=e||0;d--;In(a,b,function(e){e?c(!0):m.setTimeout(function(){Hn(a,b,c,d,f)},f)})}}
function In(a,b,c){var d=new Image;d.onload=function(){try{Jn(d),c(!0)}catch(a){}};
d.onerror=function(){try{Jn(d),c(!1)}catch(a){}};
d.onabort=function(){try{Jn(d),c(!1)}catch(a){}};
d.ontimeout=function(){try{Jn(d),c(!1)}catch(a){}};
m.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a}
function Jn(a){a.onload=null;a.onerror=null;a.onabort=null;a.ontimeout=null}
;function Kn(a){this.f=a;this.h=new Jm(null,!0)}
g=Kn.prototype;g.Qb=null;g.da=null;g.xb=!1;g.Qc=null;g.nb=null;g.Vb=null;g.Rb=null;g.fa=null;g.ya=-1;g.bb=null;g.Xa=null;g.connect=function(a){this.Rb=a;a=Ln(this.f,null,this.Rb);X();this.Qc=w();var b=this.f.F;null!=b?(this.bb=b[0],(this.Xa=b[1])?(this.fa=1,Mn(this)):(this.fa=2,Nn(this))):(Ag(a,"MODE","init"),this.da=new nn(this,0,void 0,void 0,void 0),this.da.Ia=this.Qb,tn(this.da,a,!1,null,!0),this.fa=0)};
function Mn(a){var b=Ln(a.f,a.Xa,"/mail/images/cleardot.gif");Cg(b);Hn(b.toString(),5E3,v(a.nd,a),3,2E3);a.ma(1)}
g.nd=function(a){if(a)this.fa=2,Nn(this);else{X();var b=this.f;b.ka=b.Ba.ya;On(b,9)}a&&this.ma(2)};
function Nn(a){var b=a.f.J;if(null!=b)X(),b?(X(),Pn(a.f,a,!1)):(X(),Pn(a.f,a,!0));else if(a.da=new nn(a,0,void 0,void 0,void 0),a.da.Ia=a.Qb,b=a.f,b=Ln(b,b.ib()?a.bb:null,a.Rb),X(),qn())Ag(b,"TYPE","xmlhttp"),tn(a.da,b,!1,a.bb,!1);else{Ag(b,"TYPE","html");var c=a.da;a=!!a.bb;c.Va=3;c.Aa=Cg(b.clone());Dn(c,a)}}
g.Lb=function(a){return this.f.Lb(a)};
g.tc=function(){return!1};
g.Bc=function(a,b){this.ya=a.cb;if(0==this.fa)if(b){try{var c=this.h.parse(b)}catch(d){c=this.f;c.ka=this.ya;On(c,2);return}this.bb=c[0];this.Xa=c[1]}else c=this.f,c.ka=this.ya,On(c,2);else if(2==this.fa)if(this.xb)X(),this.Vb=w();else if("11111"==b){if(X(),this.xb=!0,this.nb=w(),c=this.nb-this.Qc,qn()||500>c)this.ya=200,this.da.cancel(),X(),Pn(this.f,this,!0)}else X(),this.nb=this.Vb=w(),this.xb=!1};
g.sb=function(){this.ya=this.da.cb;if(this.da.na)0==this.fa?this.Xa?(this.fa=1,Mn(this)):(this.fa=2,Nn(this)):2==this.fa&&(a=!1,(a=qn()?this.xb:200>this.Vb-this.nb?!1:!0)?(X(),Pn(this.f,this,!0)):(X(),Pn(this.f,this,!1)));else{0==this.fa?X():2==this.fa&&X();var a=this.f;a.ka=this.ya;On(a,2)}};
g.ib=function(){return this.f.ib()};
g.isActive=function(){return this.f.isActive()};
g.ma=function(a){this.f.ma(a)};function Qn(a){Gm.call(this);this.headers=new Vc;this.R=a||null;this.h=!1;this.P=this.f=null;this.sa=this.J="";this.o=0;this.A="";this.l=this.ha=this.F=this.Z=!1;this.B=0;this.K=null;this.ta="";this.N=this.ua=!1}
x(Qn,Gm);var Rn=/^https?$/i,Sn=["POST","PUT"];g=Qn.prototype;
g.send=function(a,b,c,d){if(this.f)throw Error("[goog.net.XhrIo] Object is active with another request="+this.J+"; newUri="+a);b=b?b.toUpperCase():"GET";this.J=a;this.A="";this.o=0;this.sa=b;this.Z=!1;this.h=!0;this.f=this.R?mn(this.R):mn(kn);this.P=this.R?hn(this.R):hn(kn);this.f.onreadystatechange=v(this.Ac,this);try{dm(Tn(this,"Opening Xhr")),this.ha=!0,this.f.open(b,String(a),!0),this.ha=!1}catch(f){dm(Tn(this,"Error opening Xhr: "+f.message));Un(this,f);return}a=c||"";var e=this.headers.clone();
d&&cd(d,function(a,b){Wc(e,b,a)});
d=Qa(e.ra(),Vn);c=m.FormData&&a instanceof m.FormData;!A(Sn,b)||d||c||Wc(e,"Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.f.setRequestHeader(b,a)},this);
this.ta&&(this.f.responseType=this.ta);nb(this.f)&&(this.f.withCredentials=this.ua);try{Wn(this),0<this.B&&(this.N=Xn(this.f),dm(Tn(this,"Will abort after "+this.B+"ms if incomplete, xhr2 "+this.N)),this.N?(this.f.timeout=this.B,this.f.ontimeout=v(this.sc,this)):this.K=bn(this.sc,this.B,this)),dm(Tn(this,"Sending request")),this.F=!0,this.f.send(a),this.F=!1}catch(f){dm(Tn(this,"Send error: "+f.message)),Un(this,f)}};
function Xn(a){return L&&sd(9)&&ga(a.timeout)&&p(a.ontimeout)}
function Vn(a){return"content-type"==a.toLowerCase()}
g.sc=function(){"undefined"!=typeof aa&&this.f&&(this.A="Timed out after "+this.B+"ms, aborting",this.o=8,Tn(this,this.A),Hm(this,"timeout"),Gn(this,8))};
function Un(a,b){a.h=!1;a.f&&(a.l=!0,a.f.abort(),a.l=!1);a.A=b;a.o=5;Yn(a);Zn(a)}
function Yn(a){a.Z||(a.Z=!0,Hm(a,"complete"),Hm(a,"error"))}
function Gn(a,b){a.f&&a.h&&(Tn(a,"Aborting"),a.h=!1,a.l=!0,a.f.abort(),a.l=!1,a.o=b||7,Hm(a,"complete"),Hm(a,"abort"),Zn(a))}
g.G=function(){this.f&&(this.h&&(this.h=!1,this.l=!0,this.f.abort(),this.l=!1),Zn(this,!0));Qn.I.G.call(this)};
g.Ac=function(){this.isDisposed()||(this.ha||this.F||this.l?$n(this):this.Xd())};
g.Xd=function(){$n(this)};
function $n(a){if(a.h&&"undefined"!=typeof aa)if(a.P[1]&&4==vn(a)&&2==a.getStatus())Tn(a,"Local request error detected and ignored");else if(a.F&&4==vn(a))bn(a.Ac,0,a);else if(Hm(a,"readystatechange"),4==vn(a)){Tn(a,"Request complete");a.h=!1;try{var b=a.getStatus(),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.J).match(Dd)[1]||null;if(!f&&m.self&&m.self.location)var h=m.self.location.protocol,
f=h.substr(0,h.length-1);e=!Rn.test(f?f.toLowerCase():"")}d=e}if(d)Hm(a,"complete"),Hm(a,"success");else{a.o=6;var k;try{k=2<vn(a)?a.f.statusText:""}catch(l){k=""}a.A=k+" ["+a.getStatus()+"]";Yn(a)}}finally{Zn(a)}}}
function Zn(a,b){if(a.f){Wn(a);var c=a.f,d=a.P[0]?t:null;a.f=null;a.P=null;b||Hm(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Wn(a){a.f&&a.N&&(a.f.ontimeout=null);ga(a.K)&&(m.clearTimeout(a.K),a.K=null)}
g.isActive=function(){return!!this.f};
function vn(a){return a.f?a.f.readyState:0}
g.getStatus=function(){try{return 2<vn(this)?this.f.status:-1}catch(a){return-1}};
function wn(a){try{return a.f?a.f.responseText:""}catch(b){return""}}
function Tn(a,b){return b+" ["+a.sa+" "+a.J+" "+a.getStatus()+"]"}
;function ao(a,b,c){this.B=a||null;this.f=1;this.h=[];this.l=[];this.o=new Jm(null,!0);this.F=b||null;this.J=null!=c?c:null}
function bo(a,b){this.f=a;this.map=b;this.context=null}
g=ao.prototype;g.$a=null;g.W=null;g.L=null;g.Pb=null;g.ob=null;g.ic=null;g.pb=null;g.fb=0;g.Hd=0;g.T=null;g.Ca=null;g.xa=null;g.Ha=null;g.Ba=null;g.Bb=null;g.Ra=-1;g.uc=-1;g.ka=-1;g.ab=0;g.Pa=0;g.Ga=8;var co=new Gm;function eo(a){fm.call(this,"statevent",a)}
x(eo,fm);function fo(a,b){fm.call(this,"timingevent",a);this.size=b}
x(fo,fm);function go(a){fm.call(this,"serverreachability",a)}
x(go,fm);g=ao.prototype;g.connect=function(a,b,c,d,e){X();this.Pb=b;this.$a=c||{};d&&p(e)&&(this.$a.OSID=d,this.$a.OAID=e);this.Ba=new Kn(this);this.Ba.Qb=null;this.Ba.h=this.o;this.Ba.connect(a)};
function ho(a){io(a);if(3==a.f){var b=a.fb++,c=a.ob.clone();O(c,"SID",a.j);O(c,"RID",b);O(c,"TYPE","terminate");jo(a,c);b=new nn(a,0,a.j,b,void 0);b.Va=2;b.Aa=Cg(c.clone());(new Image).src=b.Aa;b.gb=w();un(b)}ko(a)}
function io(a){if(a.Ba){var b=a.Ba;b.da&&(b.da.cancel(),b.da=null);b.ya=-1;a.Ba=null}a.L&&(a.L.cancel(),a.L=null);a.xa&&(m.clearTimeout(a.xa),a.xa=null);lo(a);a.W&&(a.W.cancel(),a.W=null);a.Ca&&(m.clearTimeout(a.Ca),a.Ca=null)}
function mo(a,b){if(0==a.f)throw Error("Invalid operation: sending map when state is closed");a.h.push(new bo(a.Hd++,b));2!=a.f&&3!=a.f||no(a)}
g.tc=function(){return 0==this.f};
function no(a){a.W||a.Ca||(a.Ca=En(v(a.Fc,a),0),a.ab=0)}
g.Fc=function(a){this.Ca=null;oo(this,a)};
function oo(a,b){if(1==a.f){if(!b){a.fb=Math.floor(1E5*Math.random());var c=a.fb++,d=new nn(a,0,"",c,void 0);d.Ia=null;var e=po(a),f=a.ob.clone();O(f,"RID",c);a.B&&O(f,"CVER",a.B);jo(a,f);rn(d,f,e);a.W=d;a.f=2}}else 3==a.f&&(b?qo(a,b):0!=a.h.length&&(a.W||qo(a)))}
function qo(a,b){var c,d;b?6<a.Ga?(a.h=a.l.concat(a.h),a.l.length=0,c=a.fb-1,d=po(a)):(c=b.F,d=b.Ka):(c=a.fb++,d=po(a));var e=a.ob.clone();O(e,"SID",a.j);O(e,"RID",c);O(e,"AID",a.Ra);jo(a,e);c=new nn(a,0,a.j,c,a.ab+1);c.Ia=null;c.setTimeout(Math.round(1E4)+Math.round(1E4*Math.random()));a.W=c;rn(c,e,d)}
function jo(a,b){if(a.T){var c=a.T.oc(a);c&&eb(c,function(a,c){O(b,c,a)})}}
function po(a){var b=Math.min(a.h.length,1E3),c=["count="+b],d;6<a.Ga&&0<b?(d=a.h[0].f,c.push("ofs="+d)):d=0;for(var e=0;e<b;e++){var f=a.h[e].f,h=a.h[e].map,f=6>=a.Ga?e:f-d;try{cd(h,function(a,b){c.push("req"+f+"_"+b+"="+encodeURIComponent(a))})}catch(k){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.l=a.l.concat(a.h.splice(0,b));
return c.join("&")}
function ro(a){a.L||a.xa||(a.A=1,a.xa=En(v(a.Ec,a),0),a.Pa=0)}
function so(a){if(a.L||a.xa||3<=a.Pa)return!1;a.A++;a.xa=En(v(a.Ec,a),to(a,a.Pa));a.Pa++;return!0}
g.Ec=function(){this.xa=null;this.L=new nn(this,0,this.j,"rpc",this.A);this.L.Ia=null;this.L.Sb=0;var a=this.ic.clone();O(a,"RID","rpc");O(a,"SID",this.j);O(a,"CI",this.Bb?"0":"1");O(a,"AID",this.Ra);jo(this,a);if(qn())O(a,"TYPE","xmlhttp"),tn(this.L,a,!0,this.pb,!1);else{O(a,"TYPE","html");var b=this.L,c=!!this.pb;b.Va=3;b.Aa=Cg(a.clone());Dn(b,c)}};
function Pn(a,b,c){a.Bb=c;a.ka=b.ya;a.qd(1,0);a.ob=Ln(a,null,a.Pb);no(a)}
g.Bc=function(a,b){if(0!=this.f&&(this.L==a||this.W==a))if(this.ka=a.cb,this.W==a&&3==this.f)if(7<this.Ga){var c;try{c=this.o.parse(b)}catch(f){c=null}if(ea(c)&&3==c.length)if(0==c[0])a:{if(!this.xa){if(this.L)if(this.L.gb+3E3<this.W.gb)lo(this),this.L.cancel(),this.L=null;else break a;so(this);X()}}else this.uc=c[1],0<this.uc-this.Ra&&37500>c[2]&&this.Bb&&0==this.Pa&&!this.Ha&&(this.Ha=En(v(this.Id,this),6E3));else On(this,11)}else"y2f%"!=b&&On(this,11);else if(this.L==a&&lo(this),!/^[\s\xa0]*$/.test(b)){c=
this.o.parse(b);ea(c);for(var d=0;d<c.length;d++){var e=c[d];this.Ra=e[0];e=e[1];2==this.f?"c"==e[0]?(this.j=e[1],this.pb=e[2],e=e[3],null!=e?this.Ga=e:this.Ga=6,this.f=3,this.T&&this.T.mc(this),this.ic=Ln(this,this.ib()?this.pb:null,this.Pb),ro(this)):"stop"==e[0]&&On(this,7):3==this.f&&("stop"==e[0]?On(this,7):"noop"!=e[0]&&this.T&&this.T.lc(this,e),this.Pa=0)}}};
g.Id=function(){null!=this.Ha&&(this.Ha=null,this.L.cancel(),this.L=null,so(this),X())};
function lo(a){null!=a.Ha&&(m.clearTimeout(a.Ha),a.Ha=null)}
g.sb=function(a){var b;if(this.L==a)lo(this),this.L=null,b=2;else if(this.W==a)this.W=null,b=1;else return;this.ka=a.cb;if(0!=this.f)if(a.na)1==b?(w(),Hm(co,new fo(co,a.Ka?a.Ka.length:0)),no(this),this.l.length=0):ro(this);else{var c=a.Ja,d;if(!(d=3==c||7==c||0==c&&0<this.ka)){if(d=1==b)this.W||this.Ca||1==this.f||2<=this.ab?d=!1:(this.Ca=En(v(this.Fc,this,a),to(this,this.ab)),this.ab++,d=!0);d=!(d||2==b&&so(this))}if(d)switch(c){case 1:On(this,5);break;case 4:On(this,10);break;case 3:On(this,6);
break;case 7:On(this,12);break;default:On(this,2)}}};
function to(a,b){var c=5E3+Math.floor(1E4*Math.random());a.isActive()||(c*=2);return c*b}
g.qd=function(a){if(!A(arguments,this.f))throw Error("Unexpected channel state: "+this.f);};
function On(a,b){if(2==b||9==b){var c=null;a.T&&(c=null);var d=v(a.Be,a);c||(c=new jg("//www.google.com/images/cleardot.gif"),Cg(c));In(c.toString(),1E4,d)}else X();uo(a,b)}
g.Be=function(a){a?X():(X(),uo(this,8))};
function uo(a,b){a.f=0;a.T&&a.T.kc(a,b);ko(a);io(a)}
function ko(a){a.f=0;a.ka=-1;if(a.T)if(0==a.l.length&&0==a.h.length)a.T.Jb(a);else{var b=Ya(a.l),c=Ya(a.h);a.l.length=0;a.h.length=0;a.T.Jb(a,b,c)}}
function Ln(a,b,c){var d=Dg(c);if(""!=d.h)b&&lg(d,b+"."+d.h),mg(d,d.B);else var e=window.location,d=Eg(e.protocol,b?b+"."+e.hostname:e.hostname,e.port,c);a.$a&&eb(a.$a,function(a,b){O(d,b,a)});
O(d,"VER",a.Ga);jo(a,d);return d}
g.Lb=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new Qn;a.ua=!1;return a};
g.isActive=function(){return!!this.T&&this.T.isActive(this)};
function En(a,b){if(!ha(a))throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){a()},b)}
g.ma=function(){Hm(co,new go(co))};
function X(){Hm(co,new eo(co))}
g.ib=function(){return!qn()};
function vo(){}
g=vo.prototype;g.mc=function(){};
g.lc=function(){};
g.kc=function(){};
g.Jb=function(){};
g.oc=function(){return{}};
g.isActive=function(){return!0};function wo(a,b){$m.call(this);this.A=0;if(ha(a))b&&(a=v(a,b));else if(a&&ha(a.handleEvent))a=v(a.handleEvent,a);else throw Error("Invalid listener argument");this.F=a;vm(this,"tick",v(this.B,this));this.stop();an(this,5E3+2E4*Math.random())}
x(wo,$m);wo.prototype.B=function(){if(500<this.f){var a=this.f;24E4>2*a&&(a*=2);an(this,a)}this.F()};
wo.prototype.start=function(){wo.I.start.call(this);this.A=w()+this.f};
wo.prototype.stop=function(){this.A=0;wo.I.stop.call(this)};function xo(a,b){this.K=a;this.l=b;this.j=new F;this.h=new wo(this.Ie,this);this.f=null;this.Y=!1;this.A=null;this.J="";this.F=this.o=0;this.B=[]}
x(xo,vo);g=xo.prototype;g.subscribe=function(a,b,c){return this.j.subscribe(a,b,c)};
g.unsubscribe=function(a,b,c){return this.j.unsubscribe(a,b,c)};
g.qa=function(a){return this.j.qa(a)};
g.D=function(a,b){return this.j.D.apply(this.j,arguments)};
g.dispose=function(){this.Y||(this.Y=!0,this.j.clear(),yo(this),E(this.j))};
g.isDisposed=function(){return this.Y};
function zo(a){return{firstTestResults:[""],secondTestResults:!a.f.Bb,sessionId:a.f.j,arrayId:a.f.Ra}}
g.connect=function(a,b,c){if(!this.f||2!=this.f.f){this.J="";this.h.stop();this.A=a||null;this.o=b||0;a=this.K+"/test";b=this.K+"/bind";var d=new ao("1",c?c.firstTestResults:null,c?c.secondTestResults:null),e=this.f;e&&(e.T=null);d.T=this;this.f=d;e?this.f.connect(a,b,this.l,e.j,e.Ra):c?this.f.connect(a,b,this.l,c.sessionId,c.arrayId):this.f.connect(a,b,this.l)}};
function yo(a,b){a.F=b||0;a.h.stop();a.f&&(3==a.f.f&&oo(a.f),ho(a.f));a.F=0}
g.sendMessage=function(a,b){var c={_sc:a};b&&wb(c,b);this.h.enabled||2==(this.f?this.f.f:0)?this.B.push(c):this.f&&3==this.f.f&&mo(this.f,c)};
g.mc=function(){var a=this.h;a.stop();an(a,5E3+2E4*Math.random());this.A=null;this.o=0;if(this.B.length){a=this.B;this.B=[];for(var b=0,c=a.length;b<c;++b)mo(this.f,a[b])}this.D("handlerOpened")};
g.kc=function(a,b){var c=2==b&&401==this.f.ka;if(4!=b&&!c){if(6==b||410==this.f.ka)c=this.h,c.stop(),an(c,500);this.h.start()}this.D("handlerError",b)};
g.Jb=function(a,b,c){if(!this.h.enabled)this.D("handlerClosed");else if(c)for(a=0,b=c.length;a<b;++a){var d=c[a].map;d&&this.B.push(d)}};
g.oc=function(){var a={v:2};this.J&&(a.gsessionid=this.J);0!=this.o&&(a.ui=""+this.o);0!=this.F&&(a.ui=""+this.F);this.A&&wb(a,this.A);return a};
g.lc=function(a,b){if("S"==b[0])this.J=b[1];else if("gracefulReconnect"==b[0]){var c=this.h;c.stop();an(c,500);this.h.start();ho(this.f)}else this.D("handlerMessage",new cm(b[0],b[1]))};
function Ao(a,b){(a.l.loungeIdToken=b)||a.h.stop()}
g.Ie=function(){this.h.stop();var a=this.f,b=0;a.L&&b++;a.W&&b++;0!=b?this.h.start():this.connect(this.A,this.o)};function Bo(a){this.videoIds=null;this.index=-1;this.videoId=this.f="";this.volume=this.h=-1;this.o=!1;this.audioTrackId=null;this.A=this.l=0;this.j=null;this.reset(a)}
function Co(a,b){if(a.f)throw Error(b+" is not allowed in V3.");}
function Do(a){a.audioTrackId=null;a.j=null;a.h=-1;a.l=0;a.A=w()}
Bo.prototype.reset=function(a){this.videoIds=[];this.f="";this.index=-1;this.videoId="";Do(this);this.volume=-1;this.o=!1;a&&(this.videoIds=a.videoIds,this.index=a.index,this.f=a.listId,this.videoId=a.videoId,this.h=a.playerState,this.volume=a.volume,this.o=a.muted,this.audioTrackId=a.audioTrackId,this.j=a.trackData,this.l=a.playerTime,this.A=a.playerTimeAt)};
function Eo(a){return a.f?a.videoId:a.videoIds[a.index]}
function Fo(a){switch(a.h){case 1:return(w()-a.A)/1E3+a.l;case -1E3:return 0}return a.l}
Bo.prototype.setVideoId=function(a){Co(this,"setVideoId");var b=this.index;this.index=Ma(this.videoIds,a);b!=this.index&&Do(this);return-1!=b};
function Go(a,b,c){Co(a,"setPlaylist");c=c||Eo(a);bb(a.videoIds,b)&&c==Eo(a)||(a.videoIds=Ya(b),a.setVideoId(c))}
Bo.prototype.remove=function(a){Co(this,"remove");var b=Eo(this);return Va(this.videoIds,a)?(this.index=Ma(this.videoIds,b),!0):!1};
function Ho(a){var b={};b.videoIds=Ya(a.videoIds);b.index=a.index;b.listId=a.f;b.videoId=a.videoId;b.playerState=a.h;b.volume=a.volume;b.muted=a.o;b.audioTrackId=a.audioTrackId;b.trackData=ub(a.j);b.playerTime=a.l;b.playerTimeAt=a.A;return b}
Bo.prototype.clone=function(){return new Bo(Ho(this))};function Y(a,b,c){V.call(this);this.A=NaN;this.R=!1;this.J=this.F=this.P=this.K=NaN;this.Z=[];this.j=this.C=this.f=null;this.Ma=a;this.Z.push(N(window,"beforeunload",v(this.Bd,this)));this.h=[];this.C=new Bo;3==c["mdx-version"]&&(this.C.f="RQ"+b.token);this.ha=b.id;this.f=Io(this,c);this.f.subscribe("handlerOpened",this.Nd,this);this.f.subscribe("handlerClosed",this.Jd,this);this.f.subscribe("handlerError",this.Kd,this);this.C.f?this.f.subscribe("handlerMessage",this.Ld,this):this.f.subscribe("handlerMessage",
this.Md,this);Ao(this.f,b.token);this.subscribe("remoteQueueChange",function(){var a=this.C.videoId;sk()&&T("yt-remote-session-video-id",a)},this)}
x(Y,V);g=Y.prototype;
g.connect=function(a,b){if(b){if(this.C.f){var c=b.listId,d=b.videoId,e=b.index,f=b.currentTime||0;5>=f&&(f=0);h={videoId:d,currentTime:f};c&&(h.listId=c);p(e)&&(h.currentIndex=e);c&&(this.C.f=c);this.C.videoId=d;this.C.index=e||0}else{var d=b.videoIds[b.index],f=b.currentTime||0;5>=f&&(f=0);var h={videoIds:d,videoId:d,currentTime:f};this.C.videoIds=[d];this.C.index=0}this.C.state=3;c=this.C;c.l=f;c.A=w();this.H("Connecting with setPlaylist and params: "+M(h));this.f.connect({method:"setPlaylist",params:M(h)},
a,wk())}else this.H("Connecting without params"),this.f.connect({},a,wk());Jo(this)};
g.dispose=function(){this.isDisposed()||(this.D("beforeDispose"),Ko(this,3));Y.I.dispose.call(this)};
g.G=function(){Lo(this);Mo(this);No(this);J(this.F);this.F=NaN;J(this.J);this.J=NaN;this.j=null;Se(this.Z);this.Z.length=0;this.f.dispose();Y.I.G.call(this);this.h=this.C=this.f=null};
g.H=function(a){Fj("conn",a)};
g.Bd=function(){this.o(2)};
function Io(a,b){return new xo(Tj(a.Ma,"/bc",void 0,!1),b)}
function Ko(a,b){a.D("proxyStateChange",b)}
function Jo(a){a.A=I(v(function(){this.H("Connecting timeout");this.o(1)},a),2E4)}
function Lo(a){J(a.A);a.A=NaN}
function No(a){J(a.K);a.K=NaN}
function Oo(a){Mo(a);a.P=I(v(function(){Po(this,"getNowPlaying")},a),2E4)}
function Mo(a){J(a.P);a.P=NaN}
function Qo(a){var b=a.f;return!!b.f&&3==b.f.f&&isNaN(a.A)}
g.Nd=function(){this.H("Channel opened");this.R&&(this.R=!1,No(this),this.K=I(v(function(){this.H("Timing out waiting for a screen.");this.o(1)},this),15E3));
Fk(zo(this.f),this.ha)};
g.Jd=function(){this.H("Channel closed");isNaN(this.A)?Gk(!0):Gk();this.dispose()};
g.Kd=function(a){Gk();isNaN(this.B())?(this.H("Channel error: "+a+" without reconnection"),this.dispose()):(this.R=!0,this.H("Channel error: "+a+" with reconnection in "+this.B()+" ms"),Ko(this,2))};
function Ro(a,b){b&&(Lo(a),No(a));b==Qo(a)?b&&(Ko(a,1),Po(a,"getSubtitlesTrack")):b?(a.N()&&a.C.reset(),Ko(a,1),Po(a,"getNowPlaying"),So(a)):a.o(1)}
function To(a,b){var c=b.params.videoId;delete b.params.videoId;c==a.C.videoId&&(rb(b.params)?a.C.j=null:a.C.j=b.params,a.D("remotePlayerChange"))}
function Uo(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);a.C.f=b.params.listId||a.C.f;var e=a.C,f=e.videoId;e.videoId=c;e.index=d;c!=f&&Do(e);a.D("remoteQueueChange")}
function Vo(a,b){b.params=b.params||{};Uo(a,b);Wo(a,b)}
function Wo(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10),d=a.C;d.l=isNaN(c)?0:c;d.A=w();c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.C.h&&(c=-1E3);a.C.h=c;1==a.C.h?Oo(a):Mo(a);a.D("remotePlayerChange")}
function Xo(a,b){var c="true"==b.params.muted;a.C.volume=parseInt(b.params.volume,10);a.C.o=c;a.D("remotePlayerChange")}
g.Ld=function(a){a.params?this.H("Received: action="+a.action+", params="+M(a.params)):this.H("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=vd(a.params.devices);this.h=z(a,function(a){return new nk(a)});
a=!!Qa(this.h,function(a){return"LOUNGE_SCREEN"==a.type});
Ro(this,a);break;case "loungeScreenConnected":Ro(this,!0);break;case "loungeScreenDisconnected":Wa(this.h,function(a){return"LOUNGE_SCREEN"==a.type});
Ro(this,!1);break;case "remoteConnected":var b=new nk(vd(a.params.device));Qa(this.h,function(a){return a.equals(b)})||Ua(this.h,b);
break;case "remoteDisconnected":b=new nk(vd(a.params.device));Wa(this.h,function(a){return a.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":Uo(this,a);break;case "nowPlaying":Vo(this,a);break;case "onStateChange":Wo(this,a);break;case "onVolumeChanged":Xo(this,a);break;case "onSubtitlesTrackChanged":To(this,a);break;default:this.H("Unrecognized action: "+a.action)}};
g.Md=function(a){a.params?this.H("Received: action="+a.action+", params="+M(a.params)):this.H("Received: action="+a.action);Yo(this,a);Zo(this,a);if(Qo(this)){var b=this.C.clone(),c=!1,d,e,f,h,k,l;a.params&&(d=a.params.videoId||a.params.video_id,e=a.params.videoIds||a.params.video_ids,f=a.params.state,h=a.params.currentTime||a.params.current_time,k=a.params.volume,l=a.params.muted,p(a.params.currentError)&&vd(a.params.currentError));if("onSubtitlesTrackChanged"==a.action)d==Eo(this.C)&&(delete a.params.videoId,
rb(a.params)?this.C.j=null:this.C.j=a.params,this.D("remotePlayerChange"));else if(Eo(this.C)||"onStateChange"!=a.action){"playlistModified"!=a.action&&"nowPlayingPlaylist"!=a.action||e?(d||"nowPlaying"!=a.action&&"nowPlayingPlaylist"!=a.action?d||(d=Eo(this.C)):this.C.setVideoId(""),e&&(e=e.split(","),Go(this.C,e,d))):Go(this.C,[]);e=this.C;var n=d;Co(e,"add");n&&!A(e.videoIds,n)?(e.videoIds.push(n),e=!0):e=!1;e&&Po(this,"getPlaylist");d&&this.C.setVideoId(d);b.index==this.C.index&&bb(b.videoIds,
this.C.videoIds)?"playlistModified"!=a.action&&"nowPlayingPlaylist"!=a.action||this.D("remoteQueueChange"):this.D("remoteQueueChange");p(f)&&(a=parseInt(f,10),a=isNaN(a)?-1:a,-1==a&&-1E3==this.C.h&&(a=-1E3),0==a&&"0"==h&&(a=-1),c=c||a!=this.C.h,this.C.h=a,1==this.C.h?Oo(this):Mo(this));h&&(a=parseInt(h,10),c=this.C,c.l=isNaN(a)?0:a,c.A=w(),c=!0);p(k)&&(a=parseInt(k,10),isNaN(a)||(c=c||this.C.volume!=a,this.C.volume=a),p(l)&&(l="true"==l,c=c||this.C.o!=l,this.C.o=l));c&&this.D("remotePlayerChange")}}};
function Yo(a,b){switch(b.action){case "loungeStatus":var c=vd(b.params.devices);a.h=z(c,function(a){return new nk(a)});
break;case "loungeScreenDisconnected":Wa(a.h,function(a){return"LOUNGE_SCREEN"==a.type});
break;case "remoteConnected":var d=new nk(vd(b.params.device));Qa(a.h,function(a){return a.equals(d)})||Ua(a.h,d);
break;case "remoteDisconnected":d=new nk(vd(b.params.device)),Wa(a.h,function(a){return a.equals(d)})}}
function Zo(a,b){var c=!1;if("loungeStatus"==b.action)c=!!Qa(a.h,function(a){return"LOUNGE_SCREEN"==a.type});
else if("loungeScreenConnected"==b.action)c=!0;else if("loungeScreenDisconnected"==b.action)c=!1;else return;if(!isNaN(a.K))if(c)No(a);else return;c==Qo(a)?c&&Ko(a,1):c?(Lo(a),a.N()&&a.C.reset(),Ko(a,1),Po(a,"getNowPlaying"),So(a)):a.o(1)}
g.re=function(){if(this.j){var a=this.j;this.j=null;this.C.videoId!=a&&Po(this,"getNowPlaying")}};
Y.prototype.subscribe=Y.prototype.subscribe;Y.prototype.unsubscribeByKey=Y.prototype.qa;Y.prototype.ta=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.B())?Qo(this)&&(a=1):a=2);return a};
Y.prototype.getProxyState=Y.prototype.ta;Y.prototype.o=function(a){this.H("Disconnecting with "+a);Lo(this);this.D("beforeDisconnect",a);1==a&&Gk();yo(this.f,a);this.dispose()};
Y.prototype.disconnect=Y.prototype.o;Y.prototype.sa=function(){var a=this.C;if(this.j){var b=a=this.C.clone(),c=this.j,d=a.index,e=b.videoId;b.videoId=c;b.index=d;c!=e&&Do(b)}return Ho(a)};
Y.prototype.getPlayerContextData=Y.prototype.sa;Y.prototype.za=function(a){var b=new Bo(a);b.videoId&&b.videoId!=this.C.videoId&&(this.j=b.videoId,J(this.F),this.F=I(v(this.re,this),5E3));var c=[];this.C.f==b.f&&this.C.videoId==b.videoId&&this.C.index==b.index&&bb(this.C.videoIds,b.videoIds)||c.push("remoteQueueChange");this.C.h==b.h&&this.C.volume==b.volume&&this.C.o==b.o&&Fo(this.C)==Fo(b)&&M(this.C.j)==M(b.j)||c.push("remotePlayerChange");this.C.reset(a);y(c,function(a){this.D(a)},this)};
Y.prototype.setPlayerContextData=Y.prototype.za;Y.prototype.ia=function(){return this.f.l.loungeIdToken};
Y.prototype.getLoungeToken=Y.prototype.ia;Y.prototype.N=function(){var a=this.f.l.id,b=Qa(this.h,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
Y.prototype.getOtherConnectedRemoteId=Y.prototype.N;Y.prototype.B=function(){var a=this.f;return a.h.enabled?a.h.A-w():NaN};
Y.prototype.getReconnectTimeout=Y.prototype.B;Y.prototype.Na=function(){if(!isNaN(this.B())){var a=this.f.h;a.enabled&&(a.stop(),a.start(),a.B())}};
Y.prototype.reconnect=Y.prototype.Na;function So(a){J(a.J);a.J=I(v(a.o,a,1),864E5)}
function Po(a,b,c){c?a.H("Sending: action="+b+", params="+M(c)):a.H("Sending: action="+b);a.f.sendMessage(b,c)}
Y.prototype.ua=function(a,b){Po(this,a,b);So(this)};
Y.prototype.sendMessage=Y.prototype.ua;function $o(a){V.call(this);this.o=0;this.la=ap();this.Za=NaN;this.vb="";this.A=a;this.H("Initializing local screens: "+Qj(this.la));this.j=bp();this.H("Initializing account screens: "+Qj(this.j));this.Kb=null;this.f=[];this.h=[];cp(this,Yl()||[]);this.H("Initializing DIAL devices: "+Xj(this.h));a=Oj(Ck());dp(this,a);this.H("Initializing online screens: "+Qj(this.f));this.o=w()+3E5;ep(this)}
x($o,V);var fp=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g=$o.prototype;g.H=function(a){Fj("RM",a)};
g.M=function(a){Fj("RM",a)};
function bp(){var a=ap(),b=Oj(Ck());return Na(b,function(b){return!fk(a,b)})}
function ap(){var a=Oj(yk());return Na(a,function(a){return!a.f})}
function ep(a){xc("yt-remote-cast-device-list-update",function(){var a=Yl();cp(this,a||[])},a);
xc("yt-remote-cast-device-status-update",a.Ee,a);a.Lc();var b=w()>a.o?2E4:1E4;oc(v(a.Lc,a),b)}
g.D=function(a,b){if(this.isDisposed())return!1;this.H("Firing "+a);return this.l.D.apply(this.l,arguments)};
g.Lc=function(){var a=Yl()||[];0==a.length||cp(this,a);a=gp(this);0==a.length||(Oa(a,function(a){return!fk(this.j,a)},this)&&Ak()?hp(this):ip(this,a))};
function kp(a,b){var c=gp(a);return Na(b,function(a){return a.f?(a=ek(this.h,a.f),!!a&&"RUNNING"==a.status):!!fk(c,a)},a)}
function cp(a,b){var c=!1;y(b,function(a){var b=gk(this.la,a.id);b&&b.name!=a.name&&(this.H("Renaming screen id "+b.id+" from "+b.name+" to "+a.name),b.name=a.name,c=!0)},a);
c&&(a.H("Renaming due to DIAL."),lp(a));Dk(bk(b));var d=!bb(a.h,b,dk);d&&a.H("Updating DIAL devices: "+Xj(a.h)+" to "+Xj(b));a.h=b;dp(a,a.f);d&&a.D("onlineReceiverChange")}
g.Ee=function(a){var b=ek(this.h,a.id);b&&(this.H("Updating DIAL device: "+b.id+"("+b.name+") from status: "+b.status+" to status: "+a.status+" and from activityId: "+b.f+" to activityId: "+a.f),b.f=a.f,b.status=a.status,Dk(bk(this.h)));dp(this,this.f)};
function dp(a,b,c){var d=kp(a,b),e=!bb(a.f,d,Lj);if(e||c)0==b.length||Bk(z(d,Mj));e&&(a.H("Updating online screens: "+Qj(a.f)+" -> "+Qj(d)),a.f=d,a.D("onlineReceiverChange"))}
function ip(a,b){var c=[],d={};y(b,function(a){a.token&&(d[a.token]=a,c.push(a.token))});
var e={method:"POST",S:{lounge_token:c.join(",")},context:a,ca:function(a,b){var c=[];y(b.screens||[],function(a){"online"==a.status&&c.push(d[a.loungeToken])});
var e=this.Kb?mp(this,this.Kb):null;e&&!fk(c,e)&&c.push(e);dp(this,c,!0)}};
Wd(Tj(a.A,"/pairing/get_screen_availability"),e)}
function hp(a){var b=gp(a),c=z(b,function(a){return a.id});
0!=c.length&&(a.H("Updating lounge tokens for: "+M(c)),Wd(Tj(a.A,"/pairing/get_lounge_token_batch"),{S:{screen_ids:c.join(",")},method:"POST",context:a,ca:function(a,c){np(this,c.screens||[]);this.la=Na(this.la,function(a){return!!a.token});
lp(this);ip(this,b)}}))}
function np(a,b){y(Xa(a.la,a.j),function(a){var d=Qa(b,function(b){return a.id==b.screenId});
d&&(a.token=d.loungeToken)})}
function lp(a){var b=ap();bb(a.la,b,Lj)||(a.H("Saving local screens: "+Qj(b)+" to "+Qj(a.la)),xk(z(a.la,Mj)),dp(a,a.f,!0),cp(a,Yl()||[]),a.D("managedScreenChange",gp(a)))}
function op(a,b,c){var d=Ra(b,function(a){return Kj(c,a)}),e=0>d;
0>d?b.push(c):b[d]=c;fk(a.f,c)||a.f.push(c);return e}
g.qc=function(a,b){for(var c=gp(this),c=z(c,function(a){return a.name}),d=a,e=2;A(c,d);)d=b.call(m,e),e++;
return d};
g.Hc=function(a,b,c){var d=!1;b>=fp.length&&(this.H("Pairing DIAL device "+a+" with "+c+" timed out."),d=!0);var e=ek(this.h,a);if(!e)this.H("Pairing DIAL device "+a+" with "+c+" failed: no device for "+a),d=!0;else if("ERROR"==e.status||"STOPPED"==e.status)this.H("Pairing DIAL device "+a+" with "+c+" failed: launch error on "+a),d=!0;d?(pp(this),this.D("screenPair",null)):Wd(Tj(this.A,"/pairing/get_screen"),{method:"POST",S:{pairing_code:c},context:this,ca:function(a,b){if(c==this.vb){pp(this);var d=
new Ij(b.screen);d.name=e.name;d.f=e.id;this.H("Pairing "+c+" succeeded.");var l=op(this,this.la,d);this.H("Paired with "+(l?"a new":"an old")+" local screen:"+Pj(d));lp(this);this.D("screenPair",d)}},
onError:function(){c==this.vb&&(this.H("Polling pairing code: "+c),J(this.Za),this.Za=I(v(this.Hc,this,a,b+1,c),fp[b]))}})};
function qp(a,b,c){var d=Z,e="";pp(d);if(ek(d.h,a)){if(!e){var f=e=Yj();Rl();var h=$l(a),k=Ol();if(k&&h){var l=new cast.Receiver(h.id,h.name),l=new cast.LaunchRequest("YouTube",l);l.parameters="pairingCode="+f;l.description=new cast.LaunchDescription;l.description.text=document.title;b&&(l.parameters+="&v="+b,c&&(l.parameters+="&t="+Math.round(c)),l.description.url="http://i.ytimg.com/vi/"+b+"/default.jpg");"UNKNOWN"!=h.status&&(h.status="UNKNOWN",Wl(h),K("yt-remote-cast-device-status-update",h));
Ml("Sending a cast launch request with params: "+l.parameters);k.launch(l,pa(am,a))}else Ml("No cast API or no cast device. Dropping cast launch.")}d.vb=e;d.Za=I(v(d.Hc,d,a,0,e),fp[0])}else d.H("No DIAL device with id: "+a)}
function pp(a){J(a.Za);a.Za=NaN;a.vb=""}
function mp(a,b){var c=gk(gp(a),b);a.H("Found screen: "+Pj(c)+" with key: "+b);return c}
function rp(a){var b=Z,c=gk(b.f,a);b.H("Found online screen: "+Pj(c)+" with key: "+a);return c}
function sp(a){var b=Z,c=ek(b.h,a);if(!c){var d=gk(b.la,a);d&&(c=ek(b.h,d.f))}b.H("Found DIAL: "+(c?c.toString():"null")+" with key: "+a);return c}
function gp(a){return Xa(a.j,Na(a.la,function(a){return!fk(this.j,a)},a))}
;function tp(a){hk.call(this,"ScreenServiceProxy");this.V=a;this.f=[];this.f.push(this.V.$_s("screenChange",v(this.Me,this)));this.f.push(this.V.$_s("onlineScreenChange",v(this.Td,this)))}
x(tp,hk);g=tp.prototype;g.$=function(a){return this.V.$_gs(a)};
g.contains=function(a){return!!this.V.$_c(a)};
g.get=function(a){return this.V.$_g(a)};
g.start=function(){this.V.$_st()};
g.Db=function(a,b,c){this.V.$_a(a,b,c)};
g.remove=function(a,b,c){this.V.$_r(a,b,c)};
g.Ab=function(a,b,c,d){this.V.$_un(a,b,c,d)};
g.G=function(){for(var a=0,b=this.f.length;a<b;++a)this.V.$_ubk(this.f[a]);this.f.length=0;this.V=null;tp.I.G.call(this)};
g.Me=function(){this.D("screenChange")};
g.Td=function(){this.D("onlineScreenChange")};
W.prototype.$_st=W.prototype.start;W.prototype.$_gspc=W.prototype.Ne;W.prototype.$_gsppc=W.prototype.Uc;W.prototype.$_c=W.prototype.contains;W.prototype.$_g=W.prototype.get;W.prototype.$_a=W.prototype.Db;W.prototype.$_un=W.prototype.Ab;W.prototype.$_r=W.prototype.remove;W.prototype.$_gs=W.prototype.$;W.prototype.$_gos=W.prototype.Tc;W.prototype.$_s=W.prototype.subscribe;W.prototype.$_ubk=W.prototype.qa;function up(){var a=!!G("MDX_ENABLE_CASTV2"),b=!!G("MDX_ENABLE_QUEUE"),c={device:"Desktop",app:"youtube-desktop"};a?q("yt.mdx.remote.castv2_",!0,void 0):Rl();Yi&&Xi();pk();vp||(vp=new Sj,Hk()&&(vp.f="/api/loungedev"));Z||a||(Z=new $o(vp),Z.subscribe("screenPair",wp),Z.subscribe("managedScreenChange",xp),Z.subscribe("onlineReceiverChange",function(){K("yt-remote-receiver-availability-change")}));
yp||(yp=r("yt.mdx.remote.deferredProxies_")||[],q("yt.mdx.remote.deferredProxies_",yp,void 0));zp(b);b=Ap();if(a&&!b){var d=new W(vp);q("yt.mdx.remote.screenService_",d,void 0);b=Ap();ql(d,function(a){a?Bp()&&Jl(Bp(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){K("yt-remote-receiver-availability-change")})},!(!c||!c.loadCastApiSetupScript))}if(c&&!r("yt.mdx.remote.initialized_")){q("yt.mdx.remote.initialized_",!0,void 0);
Cp("Initializing: "+M(c));Dp.push(xc("yt-remote-cast2-availability-change",function(){K("yt-remote-receiver-availability-change")}));
Dp.push(xc("yt-remote-cast2-receiver-selected",function(){Ep(null);K("yt-remote-auto-connect","cast-selector-receiver")}));
Dp.push(xc("yt-remote-cast2-session-change",Fp));Dp.push(xc("yt-remote-connection-change",function(a){a?Jl(Bp(),"YouTube TV"):Gp()||(Jl(null,null),Fl())}));
var e=Hp();c.isAuto&&(e.id+="#dial");e.name=c.device;e.app=c.app;Cp(" -- with channel params: "+M(e));Ip(e);a&&b.start();Bp()||Jp()}}
function Kp(){zc(Dp);Dp.length=0;E(Lp);Lp=null;yp&&(y(yp,function(a){a(null)}),yp.length=0,yp=null,q("yt.mdx.remote.deferredProxies_",null,void 0));
Z&&(E(Z),Z=null);vp=null;Vl()}
function Mp(){if(Np()&&Dl()){var a=[];if(U("yt-remote-cast-available")||r("yt.mdx.remote.cloudview.castButtonShown_")||Op())a.push({key:"cast-selector-receiver",name:Pp()}),q("yt.mdx.remote.cloudview.castButtonShown_",!0,void 0);return a}return r("yt.mdx.remote.cloudview.initializing_")?[]:Qp()}
function Qp(){var a=[],a=Rp()?Ap().V.$_gos():Oj(Ck()),b=Sp();b&&Op()&&(fk(a,b)||a.push(b));Rp()||(b=ck(Ek()),b=Na(b,function(b){return!gk(a,b.id)}),a=Xa(a,b));
return ak(a)}
function Tp(){if(Np()&&Dl()){var a=El();return a?{key:"cast-selector-receiver",name:a}:null}return Up()}
function Up(){var a=Qp(),b=Vp(),c=Sp();c||(c=Gp());return Qa(a,function(a){return c&&Jj(c,a.key)||b&&(a=sp(a.key))&&a.id==b?!0:!1})}
function Pp(){if(Np()&&Dl())return El();var a=Sp();return a?a.name:null}
function Sp(){var a=Bp();if(!a)return null;if(!Z){var b=Ap().$();return gk(b,a)}return mp(Z,a)}
function Fp(a){Cp("remote.onCastSessionChange_: "+Pj(a));if(a){var b=Sp();b&&b.id==a.id?Jl(b.id,"YouTube TV"):(b&&Wp(),Xp(a,1))}else Wp()}
function Yp(a,b){Cp("Connecting to: "+M(a));if("cast-selector-receiver"==a.key)Ep(b||null),Il(b||null);else{Wp();Ep(b||null);var c=null;Z?c=rp(a.key):(c=Ap().$(),c=gk(c,a.key));if(c)Xp(c,1);else{if(Z&&(c=sp(a.key))){Zp(c);return}I(function(){$p(null)},0)}}}
function Wp(){Z&&pp(Z);a:{var a=Op();if(a&&(a=a.getOtherConnectedRemoteId())){Cp("Do not stop DIAL due to "+a);aq("");break a}(a=Vp())?(Cp("Stopping DIAL: "+a),bm(a),aq("")):(a=Sp())&&a.f&&(Cp("Stopping DIAL: "+a.f),bm(a.f))}Hl()?zl().stopSession():wl("stopSession called before API ready.");(a=Op())?a.disconnect(1):(Ac("yt-remote-before-disconnect",1),Ac("yt-remote-connection-change",!1));$p(null)}
function Cp(a){Fj("remote",a)}
function Np(){return!!r("yt.mdx.remote.castv2_")}
function Rp(){return r("yt.mdx.remote.screenService_")}
function Ap(){if(!Lp){var a=Rp();Lp=a?new tp(a):null}return Lp}
function Bp(){return r("yt.mdx.remote.currentScreenId_")}
function bq(a){q("yt.mdx.remote.currentScreenId_",a,void 0);if(Z){var b=Z;b.o=w()+3E5;if((b.Kb=a)&&(a=mp(b,a))&&!fk(b.f,a)){var c=Ya(b.f);c.push(a);dp(b,c,!0)}}}
function Vp(){return r("yt.mdx.remote.currentDialId_")}
function aq(a){q("yt.mdx.remote.currentDialId_",a,void 0)}
function cq(){return r("yt.mdx.remote.connectData_")}
function Ep(a){q("yt.mdx.remote.connectData_",a,void 0)}
function Op(){return r("yt.mdx.remote.connection_")}
function $p(a){var b=Op();Ep(null);a?La(!Op()):(bq(""),aq(""));q("yt.mdx.remote.connection_",a,void 0);yp&&(y(yp,function(b){b(a)}),yp.length=0);
b&&!a?Ac("yt-remote-connection-change",!1):!b&&a&&K("yt-remote-connection-change",!0)}
function Gp(){var a=sk();if(!a)return null;if(Rp()){var b=Ap().$();return gk(b,a)}return Z?mp(Z,a):null}
function Xp(a,b){La(!Bp());bq(a.id);var c=new Y(vp,a,Hp());c.connect(b,cq());c.subscribe("beforeDisconnect",function(a){Ac("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){Op()&&(Op(),$p(null))});
$p(c)}
function Zp(a){Vp();Cp("Connecting to: "+(a?a.toString():"null"));aq(a.id);var b=cq();b?qp(a.id,b.videoIds[b.index],b.currentTime):qp(a.id)}
function Jp(){var a=Gp();a?(Cp("Resume connection to: "+Pj(a)),Xp(a,0)):(Gk(),Fl(),Cp("Skipping connecting because no session screen found."))}
function wp(a){Cp("Paired with: "+Pj(a));a?Xp(a,1):$p(null)}
function xp(){var a=Bp();a&&!Sp()&&(Cp("Dropping current screen with id: "+a),Wp());Gp()||Gk()}
var vp=null,yp=null,Lp=null,Z=null;function zp(a){var b=Hp();if(rb(b)){var b=rk(),c=U("yt-remote-session-name")||"",d=U("yt-remote-session-app")||"",b={device:"REMOTE_CONTROL",id:b,name:c,app:d};a&&(b["mdx-version"]=3);q("yt.mdx.remote.channelParams_",b,void 0)}}
function Hp(){return r("yt.mdx.remote.channelParams_")||{}}
function Ip(a){a?(T("yt-remote-session-app",a.app),T("yt-remote-session-name",a.name)):($i("yt-remote-session-app"),$i("yt-remote-session-name"));q("yt.mdx.remote.channelParams_",a,void 0)}
var Dp=[];var dq=null,eq=[];function fq(){gq();if(Tp()){var a=dq;"html5"!=a.getPlayerType()&&a.loadNewVideoConfig(a.getCurrentVideoConfig(),"html5")}}
function hq(a){"cast-selector-receiver"==a?Gl():iq(a)}
function iq(a){var b=Mp();if(a=Zj(b,a)){var c=dq,d=c.getVideoData().video_id,e=c.getVideoData().list,f=c.getCurrentTime();Yp(a,{videoIds:[d],listId:e,videoId:d,index:0,currentTime:f});"html5"!=c.getPlayerType()?c.loadNewVideoConfig(c.getCurrentVideoConfig(),"html5"):c.updateRemoteReceivers&&c.updateRemoteReceivers(b,a)}}
function gq(){var a=dq;a&&a.updateRemoteReceivers&&a.updateRemoteReceivers(Mp(),Tp())}
;var jq=null,kq=[];function lq(a){return{externalChannelId:a.externalChannelId,Gd:!!a.isChannelPaid,source:a.source,subscriptionId:a.subscriptionId}}
function mq(a){nq(lq(a))}
function nq(a){ki()?(R(Yh,new Sh(a.externalChannelId,a.Gd?{itemType:"U",itemId:a.externalChannelId}:null)),(a="/gen_204?"+Kd({event:"subscribe",source:a.source}))&&Ng(a)):oq(a)}
function oq(a){ji(function(b){b.subscription_ajax&&nq(a)},null)}
function pq(a){a=lq(a);R(ci,new Uh(a.externalChannelId,a.subscriptionId,null));(a="/gen_204?"+Kd({event:"unsubscribe",source:a.source}))&&Ng(a)}
function qq(a){jq&&jq.channelSubscribed(a.f,a.subscriptionId)}
function rq(a){jq&&jq.channelUnsubscribed(a.f)}
;function sq(a){D.call(this);this.h=a;this.h.subscribe("command",this.Kc,this);this.j={};this.l=!1}
x(sq,D);g=sq.prototype;g.start=function(){this.l||this.isDisposed()||(this.l=!0,tq(this.h,"RECEIVING"))};
g.Kc=function(a,b){if(this.l&&!this.isDisposed()){var c=b||{};switch(a){case "addEventListener":if(u(c.event)&&(c=c.event,!(c in this.j))){var d=v(this.te,this,c);this.j[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":u(c.event)&&uq(this,c.event);break;default:this.f.isReady()&&this.f[a]&&(c=vq(a,b||{}),c=this.f[a].apply(this.f,c),(c=wq(a,c))&&this.l&&!this.isDisposed()&&tq(this.h,a,c))}}};
g.te=function(a,b){this.l&&!this.isDisposed()&&tq(this.h,a,this.Mb(a,b))};
g.Mb=function(a,b){if(null!=b)return{value:b}};
function uq(a,b){b in a.j&&(a.removeEventListener(b,a.j[b]),delete a.j[b])}
g.G=function(){this.h.unsubscribe("command",this.Kc,this);this.h=null;for(var a in this.j)uq(this,a);sq.I.G.call(this)};function xq(a,b){sq.call(this,b);this.f=a;this.start()}
x(xq,sq);xq.prototype.addEventListener=function(a,b){this.f.addEventListener(a,b)};
xq.prototype.removeEventListener=function(a,b){this.f.removeEventListener(a,b)};
function vq(a,b){switch(a){case "loadVideoById":return b=ej(b),gj(b),[b];case "cueVideoById":return b=ej(b),gj(b),[b];case "loadVideoByPlayerVars":return gj(b),[b];case "cueVideoByPlayerVars":return gj(b),[b];case "loadPlaylist":return b=fj(b),gj(b),[b];case "cuePlaylist":return b=fj(b),gj(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function wq(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
xq.prototype.Mb=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return xq.I.Mb.call(this,a,b)};
xq.prototype.G=function(){xq.I.G.call(this);delete this.f};function yq(){var a=this.h=new Ii,b=v(this.pe,this);a.h=b;a.j=null;this.l=[];this.B=!1;this.o=(a=G("POST_MESSAGE_ORIGIN",void 0))&&Ig(a)?a:null;this.A={}}
g=yq.prototype;g.pe=function(a,b){if(this.o&&this.o!=this.h.origin)this.dispose();else if("addEventListener"==a&&b){var c=b[0];this.A[c]||"onReady"==c||(this.addEventListener(c,zq(this,c)),this.A[c]=!0)}else this.Xc(a,b)};
g.Xc=function(){};
function zq(a,b){return v(function(a){this.sendMessage(b,a)},a)}
g.addEventListener=function(){};
g.ud=function(){this.B=!0;this.sendMessage("initialDelivery",this.Nb());this.sendMessage("onReady");y(this.l,this.Yc,this);this.l=[]};
g.Nb=function(){return null};
function Aq(a,b){a.sendMessage("infoDelivery",b)}
g.Yc=function(a){this.B?this.h.sendMessage(a):this.l.push(a)};
g.sendMessage=function(a,b){this.Yc({event:a,info:void 0==b?null:b})};
g.dispose=function(){this.h=null};function Bq(a){yq.call(this);this.f=a;this.j=[];this.addEventListener("onReady",v(this.Yd,this));this.addEventListener("onVideoProgress",v(this.xe,this));this.addEventListener("onVolumeChange",v(this.ye,this));this.addEventListener("onApiChange",v(this.se,this));this.addEventListener("onPlaybackQualityChange",v(this.ue,this));this.addEventListener("onPlaybackRateChange",v(this.ve,this));this.addEventListener("onStateChange",v(this.we,this))}
x(Bq,yq);g=Bq.prototype;g.Xc=function(a,b){if(this.f[a]){b=b||[];if(0<b.length&&cj(a)){var c;c=b;if(ia(c[0])&&!ea(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=ej.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=dj.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=fj.apply(window,c)}c=d}gj(c);b.length=1;b[0]=c}this.f[a].apply(this.f,b);cj(a)&&Aq(this,this.Nb())}};
g.Yd=function(){var a=v(this.ud,this);this.h.f=a};
g.addEventListener=function(a,b){this.j.push({rd:a,listener:b});this.f.addEventListener(a,b)};
g.Nb=function(){if(!this.f)return null;var a=this.f.getApiInterface();Va(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){var f=e,h=0;0==f.search("get")?h=3:0==f.search("is")&&(h=2);f=f.charAt(h).toLowerCase()+f.substr(h+1);try{var k=this.f[e]();b[f]=k}catch(l){}}}b.videoData=this.f.getVideoData();return b};
g.we=function(a){a={playerState:a,currentTime:this.f.getCurrentTime(),duration:this.f.getDuration(),videoData:this.f.getVideoData(),videoStartBytes:0,videoBytesTotal:this.f.getVideoBytesTotal(),videoLoadedFraction:this.f.getVideoLoadedFraction(),playbackQuality:this.f.getPlaybackQuality(),availableQualityLevels:this.f.getAvailableQualityLevels(),videoUrl:this.f.getVideoUrl(),playlist:this.f.getPlaylist(),playlistIndex:this.f.getPlaylistIndex()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());
this.f.getStoryboardFormat&&(a.storyboardFormat=this.f.getStoryboardFormat());Aq(this,a)};
g.ue=function(a){Aq(this,{playbackQuality:a})};
g.ve=function(a){Aq(this,{playbackRate:a})};
g.se=function(){for(var a=this.f.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.f.getOptions(e);b[e]={options:f};for(var h=0,k=f.length;h<k;h++){var l=f[h],n=this.f.getOption(e,l);b[e][l]=n}}this.sendMessage("apiInfoDelivery",b)};
g.ye=function(){Aq(this,{muted:this.f.isMuted(),volume:this.f.getVolume()})};
g.xe=function(a){a={currentTime:a,videoBytesLoaded:this.f.getVideoBytesLoaded(),videoLoadedFraction:this.f.getVideoLoadedFraction()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());Aq(this,a)};
g.dispose=function(){Bq.I.dispose.call(this);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.f.removeEventListener(b.rd,b.listener)}this.j=[]};function Cq(a,b,c){V.call(this);this.f=a;this.h=b;this.j=c}
x(Cq,V);function tq(a,b,c){if(!a.isDisposed()){var d=a.f,e=a.h;a=a.j;d.isDisposed()||e!=d.f||(b={id:a,command:b},c&&(b.data=c),d.f.postMessage(M(b),d.j))}}
Cq.prototype.G=function(){this.h=this.f=null;Cq.I.G.call(this)};function Dq(a,b,c){D.call(this);this.f=a;this.j=c;this.l=N(window,"message",v(this.o,this));this.h=new Cq(this,a,b);gc(this,pa(E,this.h))}
x(Dq,D);Dq.prototype.o=function(a){var b;if(b=!this.isDisposed())if(b=a.origin==this.j)a:{b=this.f;do{var c;b:{c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(c=a.data,u(c))){try{c=vd(c)}catch(d){return}c.command&&(a=this.h,b=c.command,c=c.data,a.isDisposed()||a.D("command",b,c))}};
Dq.prototype.G=function(){Se(this.l);this.f=null;Dq.I.G.call(this)};var Eq=!1;function Fq(a){if(a=a.match(/[\d]+/g))a.length=3,a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(Eq=!0,a.description)){Fq(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){Eq=!0;return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],Eq=!!a&&a.enabledPlugin)){Fq(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");Eq=!0;Fq(b.GetVariable("$version"));return}catch(c){}try{b=
new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");Eq=!0;return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),Eq=!0,Fq(b.GetVariable("$version"))}catch(c){}})();function Gq(a){return(a=a.exec(xb))?a[1]:""}
(function(){if(wf)return Gq(/Firefox\/([0-9.]+)/);if(L||jd||id)return qd;if(Af)return Gq(/Chrome\/([0-9.]+)/);if(Bf&&!(hd()||B("iPad")||B("iPod")))return Gq(/Version\/([0-9.]+)/);if(xf||yf){var a;if(a=/Version\/(\S+).*Mobile\/(\S+)/.exec(xb))return a[1]+"."+a[2]}else if(zf)return(a=Gq(/Android\s+([0-9.]+)/))?a:Gq(/Version\/([0-9.]+)/);return""})();function Hq(){var a={format:"RAW",method:"GET",withCredentials:!0};return new Km(function(b,c){a.ca=function(a){Rd(a)?b(a):c(a)};
a.onError=c;Wd("//googleads.g.doubleclick.net/pagead/id",a)})}
;var Iq=null;function Jq(){if(!Iq){var a=Hq().then(Kq),b=Lq,b=Om(b,b,void 0);b.j=!0;Um(a,b);Iq=a}return Iq}
function Kq(a){a=a.responseText;return 0==a.lastIndexOf(")]}'",0)?JSON.parse(a.substr(4)).id:""}
function Lq(){I(function(){Iq=null},3E5)}
;function Mq(a){Nq=a;q("yt.www.ads.data.encryptedBiscottiId",Nq,void 0)}
var Nq="";function Oq(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&(c=c.data.follow_on_url)&&Ng(c)}}
;function Pq(a){P.call(this,1,arguments);this.Ib=a}
x(Pq,P);function Qq(a,b){P.call(this,2,arguments);this.h=a;this.f=b}
x(Qq,P);function Rq(a,b,c,d){P.call(this,1,arguments);this.f=b;this.j=c||null;this.h=d||null}
x(Rq,P);function Sq(a,b){P.call(this,1,arguments);this.h=a;this.f=b||null}
x(Sq,P);function Tq(a){P.call(this,1,arguments)}
x(Tq,P);var Uq=new Q("ypc-core-load",Pq),Vq=new Q("ypc-guide-sync-success",Qq),Wq=new Q("ypc-purchase-success",Rq),Xq=new Q("ypc-subscription-cancel",Tq),Yq=new Q("ypc-subscription-cancel-success",Sq),Zq=new Q("ypc-init-subscription",Tq);var $q=!1,ar=[],br=[];function cr(a){a.f?$q?R(bi,a):R(Uq,new Pq(function(){R(Zq,new Tq(a.f))})):dr(a.h,a.l,a.j,a.source)}
function er(a){a.f?$q?R(gi,a):R(Uq,new Pq(function(){R(Xq,new Tq(a.f))})):fr(a.h,a.subscriptionId,a.l,a.j,a.source)}
function gr(a){hr(Ya(a.f))}
function ir(a){jr(Ya(a.f))}
function kr(a){lr(a.f,a.isEnabled,null)}
function mr(a,b,c,d){lr(a,b,c,d)}
function nr(a){var b=a.h,c=a.f.subscriptionId;b&&c&&R(ai,new Th(b,c,a.f.channelInfo))}
function or(a){var b=a.f;eb(a.h,function(a,d){R(ai,new Th(d,a,b[d]))})}
function pr(a){R(fi,new Qh(a.h.itemId));a.f&&a.f.length&&(qr(a.f,fi),qr(a.f,hi))}
function dr(a,b,c,d){var e=new Qh(a);R(Zh,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=G("PLAYBACK_ID"))&&(c.plid=d);(d=G("EVENT_ID"))&&(c.ei=d);b&&rr(b,c);Wd("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",ac:f,S:c,ca:function(b,c){var d=c.response;R(ai,new Th(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&K("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&Oq(d.actions)},
Xb:function(){R($h,e)}})}
function fr(a,b,c,d,e){var f=new Qh(a);R(di,f);var h={};d&&(h.eurl=d);e&&(h.source=e);d={};d.c=a;d.s=b;(a=G("PLAYBACK_ID"))&&(d.plid=a);(a=G("EVENT_ID"))&&(d.ei=a);c&&rr(c,d);Wd("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",ac:h,S:d,ca:function(a,b){var c=b.response;R(fi,f);c.actions&&Oq(c.actions)},
Xb:function(){R(ei,f)}})}
function lr(a,b,c,d){if(null!==b||null!==c){var e={};a&&(e.channel_id=a);null===b||(e.email_on_upload=b);null===c||(e.receive_no_updates=c);Wd("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",S:e,onError:function(){d&&d()}})}}
function hr(a){if(a.length){var b=$a(a,0,40);R("subscription-batch-subscribe-loading");qr(b,Zh);var c={};c.a=b.join(",");var d=function(){R("subscription-batch-subscribe-loaded");qr(b,$h)};
Wd("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",S:c,ca:function(c,f){d();var h=f.response,k=h.id;if(ea(k)&&k.length==b.length){var l=h.channel_info_map;y(k,function(a,c){var d=b[c];R(ai,new Th(d,a,l[d]))});
a.length?hr(a):R("subscription-batch-subscribe-finished")}},
onError:function(){d();R("subscription-batch-subscribe-failure")}})}}
function jr(a){if(a.length){var b=$a(a,0,40);R("subscription-batch-unsubscribe-loading");qr(b,di);var c={};c.c=b.join(",");var d=function(){R("subscription-batch-unsubscribe-loaded");qr(b,ei)};
Wd("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",S:c,ca:function(){d();qr(b,fi);a.length&&jr(a)},
onError:function(){d()}})}}
function qr(a,b){y(a,function(a){R(b,new Qh(a))})}
function rr(a,b){var c=Nd(a),d;for(d in c)b[d]=c[d]}
;var sr,tr=null,ur=null,vr=null,wr=!1;
function xr(){var a=G("PLAYER_CONFIG",void 0),b=G("REVERSE_MOBIUS_PERCENT",void 0);if(dg&&100*Math.random()<b)try{var c=r("yt.www.ads.biscotti");(c?c.getId():Jq()).then(Mq)}catch(e){pc(e)}if(G("REQUEST_POST_MESSAGE_ORIGIN")){if(!sr){sr=new Ii;sr.f=xr;return}sr.origin&&"*"!=sr.origin&&(a.args.post_message_origin=sr.origin)}var d=document.referrer,b=G("POST_MESSAGE_ORIGIN"),c=!1;u(d)&&u(b)&&-1<d.indexOf(b)&&Ig(b)&&Ig(d)&&(c=!0);window!=window.top&&d&&d!=document.URL&&(a.args.loaderUrl=d);G("LIGHTWEIGHT_AUTOPLAY")&&
(a.args.autoplay="1");a.args.autoplay&&gj(a.args);tr=Dh("player",a);d=G("POST_MESSAGE_ID","player");G("ENABLE_JS_API")?vr=new Bq(tr):G("ENABLE_POST_API")&&u(d)&&u(b)&&(ur=new Dq(window.parent,d,b),vr=new xq(tr,ur.h));(wr=c&&!G("ENABLE_CAST_API"))?a.args.disableCast="1":(a=tr,up(),dq=a,dq.addEventListener("onReady",fq),dq.addEventListener("onRemoteReceiverSelected",hq),eq.push(xc("yt-remote-receiver-availability-change",gq)),eq.push(xc("yt-remote-auto-connect",iq)));G("BG_P")&&(G("BG_I")||G("BG_IU"))&&
Mc();ge();jq=tr;jq.addEventListener("SUBSCRIBE",mq);jq.addEventListener("UNSUBSCRIBE",pq);kq.push(Vg(ai,qq),Vg(fi,rq))}
;q("yt.setConfig",lc,void 0);q("yt.setMsg",function(a){mc(kc,arguments)},void 0);
q("yt.logging.errors.log",function(a,b,c,d){if(a&&window&&window.yterr&&!(5<=be)){var e=a.stacktrace,f=a.columnNumber;var h=r("window.location.href");if(u(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:h,stack:"Not available"};else{var k,l,n=!1;try{k=a.lineNumber||a.line||"Not available"}catch(H){k="Not available",n=!0}try{l=a.fileName||a.filename||a.sourceURL||m.$googDebugFname||h}catch(H){l="Not available",n=!0}a=!n&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?
a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:k,fileName:l,stack:a.stack||"Not available"}}e=e||a.stack;d=d||G("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);k=a.lineNumber.toString();isNaN(k)||isNaN(f)||(k=k+":"+f);ae[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js")||(b={ac:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:k,level:b||"ERROR"},S:{url:G("PAGE_NAME",window.location.href),file:a.fileName,"client.name":c||"WEB"},
method:"POST"},e&&(b.S.stack=e),d&&(b.S["client.version"]=d),Wd("/error_204",b),ae[a.message]=!0,be++)}},void 0);
q("writeEmbed",xr,void 0);q("yt.www.watch.ads.restrictioncookie.spr",function(a){(a=a+"mac_204?action_fcts=1")&&Ng(a);return!0},void 0);
var yr=nc(function(){ah("ol");$q=!0;br.push(Vg(Yh,cr),Vg(ci,er));$q||(br.push(Vg(bi,cr),Vg(gi,er),Vg(Vh,gr),Vg(Wh,ir),Vg(Xh,kr)),ar.push(xc("subscription-prefs",mr)),br.push(Vg(Wq,nr),Vg(Yq,pr),Vg(Vq,or)));Cf.getInstance();var a=1<window.devicePixelRatio;if(Hf(0,119)!=a){var b="f"+(Math.floor(119/31)+1),c=Gf(b)||0,c=a?c|67108864:c&-67108865;0==c?delete Df[b]:(a=c.toString(16),Df[b]=a.toString());var d,b=[];for(d in Df)b.push(d+"="+escape(Df[d]));d=b.join("&");bf("PREF",d,63072E3)}}),zr=nc(function(){var a=
tr;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();G("PL_ATT")&&(Lc=null);for(var a=0,b=ee.length;a<b;a++){var c=ee[a],d=r("yt.scheduler.instance.cancelJob");d?d(c):J(c)}ee.length=0;a=Hc("//static.doubleclick.net/instream/ad_status.js");if(b=document.getElementById(a))Cc(a),b.parentNode.removeChild(b);fe=!1;lc("DCLKSTAT",0);zc(ar);ar.length=0;Wg(br);br.length=0;$q=!1;jq&&(jq.removeEventListener("SUBSCRIBE",nq),jq.removeEventListener("UNSUBSCRIBE",pq));jq=null;Wg(kq);kq.length=0;wr||(zc(eq),eq.length=
0,dq&&(dq.removeEventListener("onRemoteReceiverSelected",hq),dq.removeEventListener("onReady",fq),dq=null),Kp());hc(vr,ur);tr&&tr.destroy()});
window.addEventListener?(window.addEventListener("load",yr),window.addEventListener("unload",zr)):window.attachEvent&&(window.attachEvent("onload",yr),window.attachEvent("onunload",zr));var Ar=Ci.getInstance(),Br=qi(Ar);Br in Hi||(Ar.register(),Ar.Jc.push(xc("yt-uix-init-"+Br,Ar.init,Ar)),Ar.Jc.push(xc("yt-uix-dispose-"+Br,Ar.dispose,Ar)),Hi[Br]=Ar);})();
