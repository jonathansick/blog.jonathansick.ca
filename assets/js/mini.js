/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
;window.matchMedia||(window.matchMedia=function(){var styleMedia=(window.styleMedia||window.media);if(!styleMedia){var style=document.createElement("style"),script=document.getElementsByTagName("script")[0],info=null;style.type="text/css";style.id="matchmediajs-test";script.parentNode.insertBefore(style,script);info=("getComputedStyle" in window)&&window.getComputedStyle(style,null)||style.currentStyle;styleMedia={matchMedium:function(media){var text="@media "+media+"{ #matchmediajs-test { width: 1px; } }";if(style.styleSheet){style.styleSheet.cssText=text}else{style.textContent=text}return info.width==="1px"}}}return function(media){return{matches:styleMedia.matchMedium(media||"all"),media:media||"all"}}}());
/*! Picturefill - Responsive Images that work today. (and mimic the proposed Picture element with span elements). Author: Scott Jehl, Filament Group, 2012 | License: MIT/GPLv2 */
(function(w){w.picturefill=function(){var ps=w.document.getElementsByTagName("span");for(var i=0,il=ps.length;i<il;i++){if(ps[i].getAttribute("data-picture")!==null){var sources=ps[i].getElementsByTagName("span"),matches=[];for(var j=0,jl=sources.length;j<jl;j++){var media=sources[j].getAttribute("data-media");if(!media||(w.matchMedia&&w.matchMedia(media).matches)){matches.push(sources[j])}}var picImg=ps[i].getElementsByTagName("img")[0];if(matches.length){var matchedEl=matches.pop();if(!picImg||picImg.parentNode.nodeName==="NOSCRIPT"){picImg=w.document.createElement("img");picImg.alt=ps[i].getAttribute("data-alt")}else{if(matchedEl===picImg.parentNode){continue}}picImg.src=matchedEl.getAttribute("data-src");matchedEl.appendChild(picImg);picImg.removeAttribute("width");picImg.removeAttribute("height")}else{if(picImg){picImg.parentNode.removeChild(picImg)}}}}};if(w.addEventListener){w.addEventListener("resize",w.picturefill,false);w.addEventListener("DOMContentLoaded",function(){w.picturefill();w.removeEventListener("load",w.picturefill,false)},false);w.addEventListener("load",w.picturefill,false)}else{if(w.attachEvent){w.attachEvent("onload",w.picturefill)}}}(this));
/*!
 * * Baseline.js 1.0
 * *
 * * Copyright 2013, Daniel Eden http://daneden.me
 * * Released under the WTFPL license
 * * http://sam.zoy.org/wtfpl/
 * *
 * * Date: Sat August 04 23:47:00 2013 GMT
 * */
(function(window,$){var baseline=(function(){var _base=0,_breakpoints={};function _setBase(element){var height=element.offsetHeight,current,old;for(var key in _breakpoints){current=key;if(document.body.clientWidth>current&&current>=old){_base=_breakpoints[key];old=current}}element.style.marginBottom=Math.ceil(height/_base)*_base-height+_base+"px"}function _init(element){_setBase(element);if("addEventListener" in window){window.addEventListener("resize",function(){_setBase(element)},false)}else{if("attachEvent" in window){window.attachEvent("resize",function(){_setBase(element)})}}}return function baseline(elements,options){var targets=typeof elements==="string"?document.querySelectorAll(elements):elements,len=targets.length;if(typeof options==="number"){_base=parseInt(options,10)}else{if(typeof options==="object"){var em=parseInt(getComputedStyle(document.body,null).getPropertyValue("font-size"),10);for(var point in breakpoints){var unitless=/\d+em/.test(point)?parseInt(point,10)*em:/\d+px/.test(point)?parseInt(point,10):point;_breakpoints[unitless]=parseInt(breakpoints[point],10)}}}if(len>1){while(len--){_init(targets[len])}}else{_init(targets[0])}}}());if(typeof $!=="undefined"){$.extend($.fn,{baseline:function(options){return baseline(this,options)}})}else{window.baseline=baseline}}(window,window.jQuery||window.Zepto||undefined));
/* Implementation of baseline.js for 30px lineheight */
baseline('img', 30px);