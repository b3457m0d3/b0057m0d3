/*!
 * ZeroClipboard
 * The ZeroClipboard library provides an easy way to copy text to the clipboard using an invisible Adobe Flash movie and a JavaScript interface.
 * Copyright (c) 2014 Jon Rohan, James M. Greene
 * Licensed MIT
 * http://zeroclipboard.org/
 * v2.1.2
 */
!function(a,b){"use strict";var c,d=a,e=d.document,f=d.navigator,g=d.setTimeout,h=d.encodeURIComponent,i=d.ActiveXObject,j=d.Number.parseInt||d.parseInt,k=d.Number.parseFloat||d.parseFloat,l=d.Number.isNaN||d.isNaN,m=d.Math.round,n=d.Date.now,o=d.Object.keys,p=d.Object.defineProperty,q=d.Object.prototype.hasOwnProperty,r=d.Array.prototype.slice,s=function(a){return r.call(a,0)},t=function(){var a,c,d,e,f,g,h=s(arguments),i=h[0]||{};for(a=1,c=h.length;c>a;a++)if(null!=(d=h[a]))for(e in d)q.call(d,e)&&(f=i[e],g=d[e],i!==g&&g!==b&&(i[e]=g));return i},u=function(a){var b,c,d,e;if("object"!=typeof a||null==a)b=a;else if("number"==typeof a.length)for(b=[],c=0,d=a.length;d>c;c++)q.call(a,c)&&(b[c]=u(a[c]));else{b={};for(e in a)q.call(a,e)&&(b[e]=u(a[e]))}return b},v=function(a,b){for(var c={},d=0,e=b.length;e>d;d++)b[d]in a&&(c[b[d]]=a[b[d]]);return c},w=function(a,b){var c={};for(var d in a)-1===b.indexOf(d)&&(c[d]=a[d]);return c},x=function(a){if(a)for(var b in a)q.call(a,b)&&delete a[b];return a},y=function(a,b){if(a&&1===a.nodeType&&a.ownerDocument&&b&&(1===b.nodeType&&b.ownerDocument&&b.ownerDocument===a.ownerDocument||9===b.nodeType&&!b.ownerDocument&&b===a.ownerDocument))do{if(a===b)return!0;a=a.parentNode}while(a);return!1},z={bridge:null,version:"0.0.0",pluginType:"unknown",disabled:null,outdated:null,unavailable:null,deactivated:null,overdue:null,ready:null},A="11.0.0",B={},C={},D=null,E={ready:"Flash communication is established",error:{"flash-disabled":"Flash is disabled or not installed","flash-outdated":"Flash is too outdated to support ZeroClipboard","flash-unavailable":"Flash is unable to communicate bidirectionally with JavaScript","flash-deactivated":"Flash is too outdated for your browser and/or is configured as click-to-activate","flash-overdue":"Flash communication was established but NOT within the acceptable time limit"}},F=function(){var a,b,c,d,f="ZeroClipboard.swf";if(!e.currentScript||!(d=e.currentScript.src)){var g=e.getElementsByTagName("script");if("readyState"in g[0])for(a=g.length;a--&&("interactive"!==g[a].readyState||!(d=g[a].src)););else if("loading"===e.readyState)d=g[g.length-1].src;else{for(a=g.length;a--;){if(c=g[a].src,!c){b=null;break}if(c=c.split("#")[0].split("?")[0],c=c.slice(0,c.lastIndexOf("/")+1),null==b)b=c;else if(b!==c){b=null;break}}null!==b&&(d=b)}}return d&&(d=d.split("#")[0].split("?")[0],f=d.slice(0,d.lastIndexOf("/")+1)+f),f}(),G={swfPath:F,trustedDomains:a.location.host?[a.location.host]:[],cacheBust:!0,forceEnhancedClipboard:!1,flashLoadTimeout:3e4,autoActivate:!0,bubbleEvents:!0,containerId:"global-zeroclipboard-html-bridge",containerClass:"global-zeroclipboard-container",swfObjectId:"global-zeroclipboard-flash-bridge",hoverClass:"zeroclipboard-is-hover",activeClass:"zeroclipboard-is-active",forceHandCursor:!1,title:null,zIndex:999999999},H=function(a){if("object"==typeof a&&null!==a)for(var b in a)if(q.call(a,b))if(/^(?:forceHandCursor|title|zIndex|bubbleEvents)$/.test(b))G[b]=a[b];else if(null==z.bridge)if("containerId"===b||"swfObjectId"===b){if(!W(a[b]))throw new Error("The specified `"+b+"` value is not valid as an HTML4 Element ID");G[b]=a[b]}else G[b]=a[b];{if("string"!=typeof a||!a)return u(G);if(q.call(G,a))return G[a]}},I=function(){return{browser:v(f,["userAgent","platform","appName"]),flash:w(z,["bridge"]),zeroclipboard:{version:xb.version,config:xb.config()}}},J=function(){return!!(z.disabled||z.outdated||z.unavailable||z.deactivated)},K=function(a,b){var c,d,e,f={};if("string"==typeof a&&a)e=a.toLowerCase().split(/\s+/);else if("object"==typeof a&&a&&"undefined"==typeof b)for(c in a)q.call(a,c)&&"string"==typeof c&&c&&"function"==typeof a[c]&&xb.on(c,a[c]);if(e&&e.length){for(c=0,d=e.length;d>c;c++)a=e[c].replace(/^on/,""),f[a]=!0,B[a]||(B[a]=[]),B[a].push(b);if(f.ready&&z.ready&&xb.emit({type:"ready"}),f.error){var g=["disabled","outdated","unavailable","deactivated","overdue"];for(c=0,d=g.length;d>c;c++)if(z[g[c]]===!0){xb.emit({type:"error",name:"flash-"+g[c]});break}}}return xb},L=function(a,b){var c,d,e,f,g;if(0===arguments.length)f=o(B);else if("string"==typeof a&&a)f=a.split(/\s+/);else if("object"==typeof a&&a&&"undefined"==typeof b)for(c in a)q.call(a,c)&&"string"==typeof c&&c&&"function"==typeof a[c]&&xb.off(c,a[c]);if(f&&f.length)for(c=0,d=f.length;d>c;c++)if(a=f[c].toLowerCase().replace(/^on/,""),g=B[a],g&&g.length)if(b)for(e=g.indexOf(b);-1!==e;)g.splice(e,1),e=g.indexOf(b,e);else g.length=0;return xb},M=function(a){var b;return b="string"==typeof a&&a?u(B[a])||null:u(B)},N=function(a){var b,c,d;return a=X(a),a&&!bb(a)?"ready"===a.type&&z.overdue===!0?xb.emit({type:"error",name:"flash-overdue"}):(b=t({},a),ab.call(this,b),"copy"===a.type&&(d=hb(C),c=d.data,D=d.formatMap),c):void 0},O=function(){if("boolean"!=typeof z.ready&&(z.ready=!1),!xb.isFlashUnusable()&&null===z.bridge){var a=G.flashLoadTimeout;"number"==typeof a&&a>=0&&g(function(){"boolean"!=typeof z.deactivated&&(z.deactivated=!0),z.deactivated===!0&&xb.emit({type:"error",name:"flash-deactivated"})},a),z.overdue=!1,fb()}},P=function(){xb.clearData(),xb.blur(),xb.emit("destroy"),gb(),xb.off()},Q=function(a,b){var c;if("object"==typeof a&&a&&"undefined"==typeof b)c=a,xb.clearData();else{if("string"!=typeof a||!a)return;c={},c[a]=b}for(var d in c)"string"==typeof d&&d&&q.call(c,d)&&"string"==typeof c[d]&&c[d]&&(C[d]=c[d])},R=function(a){"undefined"==typeof a?(x(C),D=null):"string"==typeof a&&q.call(C,a)&&delete C[a]},S=function(a){return"undefined"==typeof a?u(C):"string"==typeof a&&q.call(C,a)?C[a]:void 0},T=function(a){if(a&&1===a.nodeType){c&&(pb(c,G.activeClass),c!==a&&pb(c,G.hoverClass)),c=a,ob(a,G.hoverClass);var b=a.getAttribute("title")||G.title;if("string"==typeof b&&b){var d=eb(z.bridge);d&&d.setAttribute("title",b)}var e=G.forceHandCursor===!0||"pointer"===qb(a,"cursor");ub(e),tb()}},U=function(){var a=eb(z.bridge);a&&(a.removeAttribute("title"),a.style.left="0px",a.style.top="-9999px",a.style.width="1px",a.style.top="1px"),c&&(pb(c,G.hoverClass),pb(c,G.activeClass),c=null)},V=function(){return c||null},W=function(a){return"string"==typeof a&&a&&/^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(a)},X=function(a){var b;if("string"==typeof a&&a?(b=a,a={}):"object"==typeof a&&a&&"string"==typeof a.type&&a.type&&(b=a.type),b){t(a,{type:b.toLowerCase(),target:a.target||c||null,relatedTarget:a.relatedTarget||null,currentTarget:z&&z.bridge||null,timeStamp:a.timeStamp||n()||null});var d=E[a.type];return"error"===a.type&&a.name&&d&&(d=d[a.name]),d&&(a.message=d),"ready"===a.type&&t(a,{target:null,version:z.version}),"error"===a.type&&(/^flash-(disabled|outdated|unavailable|deactivated|overdue)$/.test(a.name)&&t(a,{target:null,minimumVersion:A}),/^flash-(outdated|unavailable|deactivated|overdue)$/.test(a.name)&&t(a,{version:z.version})),"copy"===a.type&&(a.clipboardData={setData:xb.setData,clearData:xb.clearData}),"aftercopy"===a.type&&(a=ib(a,D)),a.target&&!a.relatedTarget&&(a.relatedTarget=Y(a.target)),a=Z(a)}},Y=function(a){var b=a&&a.getAttribute&&a.getAttribute("data-clipboard-target");return b?e.getElementById(b):null},Z=function(a){if(a&&/^_(?:click|mouse(?:over|out|down|up|move))$/.test(a.type)){var c=a.target,f="_mouseover"===a.type&&a.relatedTarget?a.relatedTarget:b,g="_mouseout"===a.type&&a.relatedTarget?a.relatedTarget:b,h=sb(c),i=d.screenLeft||d.screenX||0,j=d.screenTop||d.screenY||0,k=e.body.scrollLeft+e.documentElement.scrollLeft,l=e.body.scrollTop+e.documentElement.scrollTop,m=h.left+("number"==typeof a._stageX?a._stageX:0),n=h.top+("number"==typeof a._stageY?a._stageY:0),o=m-k,p=n-l,q=i+o,r=j+p,s="number"==typeof a.movementX?a.movementX:0,u="number"==typeof a.movementY?a.movementY:0;delete a._stageX,delete a._stageY,t(a,{srcElement:c,fromElement:f,toElement:g,screenX:q,screenY:r,pageX:m,pageY:n,clientX:o,clientY:p,x:o,y:p,movementX:s,movementY:u,offsetX:0,offsetY:0,layerX:0,layerY:0})}return a},$=function(a){var b=a&&"string"==typeof a.type&&a.type||"";return!/^(?:(?:before)?copy|destroy)$/.test(b)},_=function(a,b,c,d){d?g(function(){a.apply(b,c)},0):a.apply(b,c)},ab=function(a){if("object"==typeof a&&a&&a.type){var b=$(a),c=B["*"]||[],e=B[a.type]||[],f=c.concat(e);if(f&&f.length){var g,h,i,j,k,l=this;for(g=0,h=f.length;h>g;g++)i=f[g],j=l,"string"==typeof i&&"function"==typeof d[i]&&(i=d[i]),"object"==typeof i&&i&&"function"==typeof i.handleEvent&&(j=i,i=i.handleEvent),"function"==typeof i&&(k=t({},a),_(i,j,[k],b))}return this}},bb=function(a){var b=a.target||c||null,d="swf"===a._source;delete a._source;var e=["flash-disabled","flash-outdated","flash-unavailable","flash-deactivated","flash-overdue"];switch(a.type){case"error":-1!==e.indexOf(a.name)&&t(z,{disabled:"flash-disabled"===a.name,outdated:"flash-outdated"===a.name,unavailable:"flash-unavailable"===a.name,deactivated:"flash-deactivated"===a.name,overdue:"flash-overdue"===a.name,ready:!1});break;case"ready":var f=z.deactivated===!0;t(z,{disabled:!1,outdated:!1,unavailable:!1,deactivated:!1,overdue:f,ready:!f});break;case"copy":var g,h,i=a.relatedTarget;!C["text/html"]&&!C["text/plain"]&&i&&(h=i.value||i.outerHTML||i.innerHTML)&&(g=i.value||i.textContent||i.innerText)?(a.clipboardData.clearData(),a.clipboardData.setData("text/plain",g),h!==g&&a.clipboardData.setData("text/html",h)):!C["text/plain"]&&a.target&&(g=a.target.getAttribute("data-clipboard-text"))&&(a.clipboardData.clearData(),a.clipboardData.setData("text/plain",g));break;case"aftercopy":xb.clearData(),b&&b!==nb()&&b.focus&&b.focus();break;case"_mouseover":xb.focus(b),G.bubbleEvents===!0&&d&&(b&&b!==a.relatedTarget&&!y(a.relatedTarget,b)&&cb(t({},a,{type:"mouseenter",bubbles:!1,cancelable:!1})),cb(t({},a,{type:"mouseover"})));break;case"_mouseout":xb.blur(),G.bubbleEvents===!0&&d&&(b&&b!==a.relatedTarget&&!y(a.relatedTarget,b)&&cb(t({},a,{type:"mouseleave",bubbles:!1,cancelable:!1})),cb(t({},a,{type:"mouseout"})));break;case"_mousedown":ob(b,G.activeClass),G.bubbleEvents===!0&&d&&cb(t({},a,{type:a.type.slice(1)}));break;case"_mouseup":pb(b,G.activeClass),G.bubbleEvents===!0&&d&&cb(t({},a,{type:a.type.slice(1)}));break;case"_click":case"_mousemove":G.bubbleEvents===!0&&d&&cb(t({},a,{type:a.type.slice(1)}))}return/^_(?:click|mouse(?:over|out|down|up|move))$/.test(a.type)?!0:void 0},cb=function(a){if(a&&"string"==typeof a.type&&a){var b,c=a.target||null,f=c&&c.ownerDocument||e,g={view:f.defaultView||d,canBubble:!0,cancelable:!0,detail:"click"===a.type?1:0,button:"number"==typeof a.which?a.which-1:"number"==typeof a.button?a.button:f.createEvent?0:1},h=t(g,a);c&&f.createEvent&&c.dispatchEvent&&(h=[h.type,h.canBubble,h.cancelable,h.view,h.detail,h.screenX,h.screenY,h.clientX,h.clientY,h.ctrlKey,h.altKey,h.shiftKey,h.metaKey,h.button,h.relatedTarget],b=f.createEvent("MouseEvents"),b.initMouseEvent&&(b.initMouseEvent.apply(b,h),b._source="js",c.dispatchEvent(b)))}},db=function(){var a=e.createElement("div");return a.id=G.containerId,a.className=G.containerClass,a.style.position="absolute",a.style.left="0px",a.style.top="-9999px",a.style.width="1px",a.style.height="1px",a.style.zIndex=""+vb(G.zIndex),a},eb=function(a){for(var b=a&&a.parentNode;b&&"OBJECT"===b.nodeName&&b.parentNode;)b=b.parentNode;return b||null},fb=function(){var a,b=z.bridge,c=eb(b);if(!b){var f=mb(d.location.host,G),g="never"===f?"none":"all",h=kb(G),i=G.swfPath+jb(G.swfPath,G);c=db();var j=e.createElement("div");c.appendChild(j),e.body.appendChild(c);var k=e.createElement("div"),l="activex"===z.pluginType;k.innerHTML='<object id="'+G.swfObjectId+'" name="'+G.swfObjectId+'" width="100%" height="100%" '+(l?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"':'type="application/x-shockwave-flash" data="'+i+'"')+">"+(l?'<param name="movie" value="'+i+'"/>':"")+'<param name="allowScriptAccess" value="'+f+'"/><param name="allowNetworking" value="'+g+'"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="'+h+'"/></object>',b=k.firstChild,k=null,b.ZeroClipboard=xb,c.replaceChild(b,j)}return b||(b=e[G.swfObjectId],b&&(a=b.length)&&(b=b[a-1]),!b&&c&&(b=c.firstChild)),z.bridge=b||null,b},gb=function(){var a=z.bridge;if(a){var b=eb(a);b&&("activex"===z.pluginType&&"readyState"in a?(a.style.display="none",function c(){if(4===a.readyState){for(var d in a)"function"==typeof a[d]&&(a[d]=null);a.parentNode&&a.parentNode.removeChild(a),b.parentNode&&b.parentNode.removeChild(b)}else g(c,10)}()):(a.parentNode&&a.parentNode.removeChild(a),b.parentNode&&b.parentNode.removeChild(b))),z.ready=null,z.bridge=null,z.deactivated=null}},hb=function(a){var b={},c={};if("object"==typeof a&&a){for(var d in a)if(d&&q.call(a,d)&&"string"==typeof a[d]&&a[d])switch(d.toLowerCase()){case"text/plain":case"text":case"air:text":case"flash:text":b.text=a[d],c.text=d;break;case"text/html":case"html":case"air:html":case"flash:html":b.html=a[d],c.html=d;break;case"application/rtf":case"text/rtf":case"rtf":case"richtext":case"air:rtf":case"flash:rtf":b.rtf=a[d],c.rtf=d}return{data:b,formatMap:c}}},ib=function(a,b){if("object"!=typeof a||!a||"object"!=typeof b||!b)return a;var c={};for(var d in a)if(q.call(a,d)){if("success"!==d&&"data"!==d){c[d]=a[d];continue}c[d]={};var e=a[d];for(var f in e)f&&q.call(e,f)&&q.call(b,f)&&(c[d][b[f]]=e[f])}return c},jb=function(a,b){var c=null==b||b&&b.cacheBust===!0;return c?(-1===a.indexOf("?")?"?":"&")+"noCache="+n():""},kb=function(a){var b,c,e,f,g="",i=[];if(a.trustedDomains&&("string"==typeof a.trustedDomains?f=[a.trustedDomains]:"object"==typeof a.trustedDomains&&"length"in a.trustedDomains&&(f=a.trustedDomains)),f&&f.length)for(b=0,c=f.length;c>b;b++)if(q.call(f,b)&&f[b]&&"string"==typeof f[b]){if(e=lb(f[b]),!e)continue;if("*"===e){i.length=0,i.push(e);break}i.push.apply(i,[e,"//"+e,d.location.protocol+"//"+e])}return i.length&&(g+="trustedOrigins="+h(i.join(","))),a.forceEnhancedClipboard===!0&&(g+=(g?"&":"")+"forceEnhancedClipboard=true"),"string"==typeof a.swfObjectId&&a.swfObjectId&&(g+=(g?"&":"")+"swfObjectId="+h(a.swfObjectId)),g},lb=function(a){if(null==a||""===a)return null;if(a=a.replace(/^\s+|\s+$/g,""),""===a)return null;var b=a.indexOf("//");a=-1===b?a:a.slice(b+2);var c=a.indexOf("/");return a=-1===c?a:-1===b||0===c?null:a.slice(0,c),a&&".swf"===a.slice(-4).toLowerCase()?null:a||null},mb=function(){var a=function(a){var b,c,d,e=[];if("string"==typeof a&&(a=[a]),"object"!=typeof a||!a||"number"!=typeof a.length)return e;for(b=0,c=a.length;c>b;b++)if(q.call(a,b)&&(d=lb(a[b]))){if("*"===d){e.length=0,e.push("*");break}-1===e.indexOf(d)&&e.push(d)}return e};return function(b,c){var d=lb(c.swfPath);null===d&&(d=b);var e=a(c.trustedDomains),f=e.length;if(f>0){if(1===f&&"*"===e[0])return"always";if(-1!==e.indexOf(b))return 1===f&&b===d?"sameDomain":"always"}return"never"}}(),nb=function(){try{return e.activeElement}catch(a){return null}},ob=function(a,b){if(!a||1!==a.nodeType)return a;if(a.classList)return a.classList.contains(b)||a.classList.add(b),a;if(b&&"string"==typeof b){var c=(b||"").split(/\s+/);if(1===a.nodeType)if(a.className){for(var d=" "+a.className+" ",e=a.className,f=0,g=c.length;g>f;f++)d.indexOf(" "+c[f]+" ")<0&&(e+=" "+c[f]);a.className=e.replace(/^\s+|\s+$/g,"")}else a.className=b}return a},pb=function(a,b){if(!a||1!==a.nodeType)return a;if(a.classList)return a.classList.contains(b)&&a.classList.remove(b),a;if("string"==typeof b&&b){var c=b.split(/\s+/);if(1===a.nodeType&&a.className){for(var d=(" "+a.className+" ").replace(/[\n\t]/g," "),e=0,f=c.length;f>e;e++)d=d.replace(" "+c[e]+" "," ");a.className=d.replace(/^\s+|\s+$/g,"")}}return a},qb=function(a,b){var c=d.getComputedStyle(a,null).getPropertyValue(b);return"cursor"!==b||c&&"auto"!==c||"A"!==a.nodeName?c:"pointer"},rb=function(){var a,b,c,d=1;return"function"==typeof e.body.getBoundingClientRect&&(a=e.body.getBoundingClientRect(),b=a.right-a.left,c=e.body.offsetWidth,d=m(b/c*100)/100),d},sb=function(a){var b={left:0,top:0,width:0,height:0};if(a.getBoundingClientRect){var c,f,g,h=a.getBoundingClientRect();"pageXOffset"in d&&"pageYOffset"in d?(c=d.pageXOffset,f=d.pageYOffset):(g=rb(),c=m(e.documentElement.scrollLeft/g),f=m(e.documentElement.scrollTop/g));var i=e.documentElement.clientLeft||0,j=e.documentElement.clientTop||0;b.left=h.left+c-i,b.top=h.top+f-j,b.width="width"in h?h.width:h.right-h.left,b.height="height"in h?h.height:h.bottom-h.top}return b},tb=function(){var a;if(c&&(a=eb(z.bridge))){var b=sb(c);t(a.style,{width:b.width+"px",height:b.height+"px",top:b.top+"px",left:b.left+"px",zIndex:""+vb(G.zIndex)})}},ub=function(a){z.ready===!0&&(z.bridge&&"function"==typeof z.bridge.setHandCursor?z.bridge.setHandCursor(a):z.ready=!1)},vb=function(a){if(/^(?:auto|inherit)$/.test(a))return a;var b;return"number"!=typeof a||l(a)?"string"==typeof a&&(b=vb(j(a,10))):b=a,"number"==typeof b?b:"auto"},wb=function(a){function b(a){var b=a.match(/[\d]+/g);return b.length=3,b.join(".")}function c(a){return!!a&&(a=a.toLowerCase())&&(/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(a)||"chrome.plugin"===a.slice(-13))}function d(a){a&&(i=!0,a.version&&(m=b(a.version)),!m&&a.description&&(m=b(a.description)),a.filename&&(l=c(a.filename)))}var e,g,h,i=!1,j=!1,l=!1,m="";if(f.plugins&&f.plugins.length)e=f.plugins["Shockwave Flash"],d(e),f.plugins["Shockwave Flash 2.0"]&&(i=!0,m="2.0.0.11");else if(f.mimeTypes&&f.mimeTypes.length)h=f.mimeTypes["application/x-shockwave-flash"],e=h&&h.enabledPlugin,d(e);else if("undefined"!=typeof a){j=!0;try{g=new a("ShockwaveFlash.ShockwaveFlash.7"),i=!0,m=b(g.GetVariable("$version"))}catch(n){try{g=new a("ShockwaveFlash.ShockwaveFlash.6"),i=!0,m="6.0.21"}catch(o){try{g=new a("ShockwaveFlash.ShockwaveFlash"),i=!0,m=b(g.GetVariable("$version"))}catch(p){j=!1}}}}z.disabled=i!==!0,z.outdated=m&&k(m)<k(A),z.version=m||"0.0.0",z.pluginType=l?"pepper":j?"activex":i?"netscape":"unknown"};wb(i);var xb=function(){return this instanceof xb?void("function"==typeof xb._createClient&&xb._createClient.apply(this,s(arguments))):new xb};p(xb,"version",{value:"2.1.2",writable:!1,configurable:!0,enumerable:!0}),xb.config=function(){return H.apply(this,s(arguments))},xb.state=function(){return I.apply(this,s(arguments))},xb.isFlashUnusable=function(){return J.apply(this,s(arguments))},xb.on=function(){return K.apply(this,s(arguments))},xb.off=function(){return L.apply(this,s(arguments))},xb.handlers=function(){return M.apply(this,s(arguments))},xb.emit=function(){return N.apply(this,s(arguments))},xb.create=function(){return O.apply(this,s(arguments))},xb.destroy=function(){return P.apply(this,s(arguments))},xb.setData=function(){return Q.apply(this,s(arguments))},xb.clearData=function(){return R.apply(this,s(arguments))},xb.getData=function(){return S.apply(this,s(arguments))},xb.focus=xb.activate=function(){return T.apply(this,s(arguments))},xb.blur=xb.deactivate=function(){return U.apply(this,s(arguments))},xb.activeElement=function(){return V.apply(this,s(arguments))};var yb=0,zb={},Ab=0,Bb={},Cb={};t(G,{autoActivate:!0});var Db=function(a){var b=this;b.id=""+yb++,zb[b.id]={instance:b,elements:[],handlers:{}},a&&b.clip(a),xb.on("*",function(a){return b.emit(a)}),xb.on("destroy",function(){b.destroy()}),xb.create()},Eb=function(a,b){var c,d,e,f={},g=zb[this.id]&&zb[this.id].handlers;if("string"==typeof a&&a)e=a.toLowerCase().split(/\s+/);else if("object"==typeof a&&a&&"undefined"==typeof b)for(c in a)q.call(a,c)&&"string"==typeof c&&c&&"function"==typeof a[c]&&this.on(c,a[c]);if(e&&e.length){for(c=0,d=e.length;d>c;c++)a=e[c].replace(/^on/,""),f[a]=!0,g[a]||(g[a]=[]),g[a].push(b);if(f.ready&&z.ready&&this.emit({type:"ready",client:this}),f.error){var h=["disabled","outdated","unavailable","deactivated","overdue"];for(c=0,d=h.length;d>c;c++)if(z[h[c]]){this.emit({type:"error",name:"flash-"+h[c],client:this});break}}}return this},Fb=function(a,b){var c,d,e,f,g,h=zb[this.id]&&zb[this.id].handlers;if(0===arguments.length)f=o(h);else if("string"==typeof a&&a)f=a.split(/\s+/);else if("object"==typeof a&&a&&"undefined"==typeof b)for(c in a)q.call(a,c)&&"string"==typeof c&&c&&"function"==typeof a[c]&&this.off(c,a[c]);if(f&&f.length)for(c=0,d=f.length;d>c;c++)if(a=f[c].toLowerCase().replace(/^on/,""),g=h[a],g&&g.length)if(b)for(e=g.indexOf(b);-1!==e;)g.splice(e,1),e=g.indexOf(b,e);else g.length=0;return this},Gb=function(a){var b=null,c=zb[this.id]&&zb[this.id].handlers;return c&&(b="string"==typeof a&&a?c[a]?c[a].slice(0):[]:u(c)),b},Hb=function(a){if(Mb.call(this,a)){"object"==typeof a&&a&&"string"==typeof a.type&&a.type&&(a=t({},a));var b=t({},X(a),{client:this});Nb.call(this,b)}return this},Ib=function(a){a=Ob(a);for(var b=0;b<a.length;b++)if(q.call(a,b)&&a[b]&&1===a[b].nodeType){a[b].zcClippingId?-1===Bb[a[b].zcClippingId].indexOf(this.id)&&Bb[a[b].zcClippingId].push(this.id):(a[b].zcClippingId="zcClippingId_"+Ab++,Bb[a[b].zcClippingId]=[this.id],G.autoActivate===!0&&Pb(a[b]));var c=zb[this.id]&&zb[this.id].elements;-1===c.indexOf(a[b])&&c.push(a[b])}return this},Jb=function(a){var b=zb[this.id];if(!b)return this;var c,d=b.elements;a="undefined"==typeof a?d.slice(0):Ob(a);for(var e=a.length;e--;)if(q.call(a,e)&&a[e]&&1===a[e].nodeType){for(c=0;-1!==(c=d.indexOf(a[e],c));)d.splice(c,1);var f=Bb[a[e].zcClippingId];if(f){for(c=0;-1!==(c=f.indexOf(this.id,c));)f.splice(c,1);0===f.length&&(G.autoActivate===!0&&Qb(a[e]),delete a[e].zcClippingId)}}return this},Kb=function(){var a=zb[this.id];return a&&a.elements?a.elements.slice(0):[]},Lb=function(){this.unclip(),this.off(),delete zb[this.id]},Mb=function(a){if(!a||!a.type)return!1;if(a.client&&a.client!==this)return!1;var b=zb[this.id]&&zb[this.id].elements,c=!!b&&b.length>0,d=!a.target||c&&-1!==b.indexOf(a.target),e=a.relatedTarget&&c&&-1!==b.indexOf(a.relatedTarget),f=a.client&&a.client===this;return d||e||f?!0:!1},Nb=function(a){if("object"==typeof a&&a&&a.type){var b=$(a),c=zb[this.id]&&zb[this.id].handlers["*"]||[],e=zb[this.id]&&zb[this.id].handlers[a.type]||[],f=c.concat(e);if(f&&f.length){var g,h,i,j,k,l=this;for(g=0,h=f.length;h>g;g++)i=f[g],j=l,"string"==typeof i&&"function"==typeof d[i]&&(i=d[i]),"object"==typeof i&&i&&"function"==typeof i.handleEvent&&(j=i,i=i.handleEvent),"function"==typeof i&&(k=t({},a),_(i,j,[k],b))}return this}},Ob=function(a){return"string"==typeof a&&(a=[]),"number"!=typeof a.length?[a]:a},Pb=function(a){if(a&&1===a.nodeType){var b=function(a){(a||(a=d.event))&&("js"!==a._source&&(a.stopImmediatePropagation(),a.preventDefault()),delete a._source)},c=function(c){(c||(c=d.event))&&(b(c),xb.focus(a))};a.addEventListener("mouseover",c,!1),a.addEventListener("mouseout",b,!1),a.addEventListener("mouseenter",b,!1),a.addEventListener("mouseleave",b,!1),a.addEventListener("mousemove",b,!1),Cb[a.zcClippingId]={mouseover:c,mouseout:b,mouseenter:b,mouseleave:b,mousemove:b}}},Qb=function(a){if(a&&1===a.nodeType){var b=Cb[a.zcClippingId];if("object"==typeof b&&b){for(var c,d,e=["move","leave","enter","out","over"],f=0,g=e.length;g>f;f++)c="mouse"+e[f],d=b[c],"function"==typeof d&&a.removeEventListener(c,d,!1);delete Cb[a.zcClippingId]}}};xb._createClient=function(){Db.apply(this,s(arguments))},xb.prototype.on=function(){return Eb.apply(this,s(arguments))},xb.prototype.off=function(){return Fb.apply(this,s(arguments))},xb.prototype.handlers=function(){return Gb.apply(this,s(arguments))},xb.prototype.emit=function(){return Hb.apply(this,s(arguments))},xb.prototype.clip=function(){return Ib.apply(this,s(arguments))},xb.prototype.unclip=function(){return Jb.apply(this,s(arguments))},xb.prototype.elements=function(){return Kb.apply(this,s(arguments))},xb.prototype.destroy=function(){return Lb.apply(this,s(arguments))},xb.prototype.setText=function(a){return xb.setData("text/plain",a),this},xb.prototype.setHtml=function(a){return xb.setData("text/html",a),this},xb.prototype.setRichText=function(a){return xb.setData("application/rtf",a),this},xb.prototype.setData=function(){return xb.setData.apply(this,s(arguments)),this},xb.prototype.clearData=function(){return xb.clearData.apply(this,s(arguments)),this},xb.prototype.getData=function(){return xb.getData.apply(this,s(arguments))},"function"==typeof define&&define.amd?define(function(){return xb}):"object"==typeof module&&module&&"object"==typeof module.exports&&module.exports?module.exports=xb:a.ZeroClipboard=xb}(function(){return this||window}());
//# sourceMappingURL=ZeroClipboard.min.map
