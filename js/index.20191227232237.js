(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
function em1(){var c="uifdjsdvjutcboeAjdmpve/dpn";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js-2').attr('src', (dpi>1) ? 'images/asset-2-276-2.png' : 'images/asset-2-138-2.png');
$('.js-4').attr('src', (dpi>1) ? 'images/single-cover-680.jpg' : 'images/single-cover-340.jpg');
$('.js-5').attr('src', (dpi>1) ? 'images/pasted-image-78.png' : 'images/pasted-image-39.png');
$('.js-6').attr('src', (dpi>1) ? 'images/pasted-image-82.png' : 'images/pasted-image-41.png');}else{$('.js-2').attr('src', (dpi>1) ? 'images/asset-2-116.png' : 'images/asset-2-58.png');
$('.js-4').attr('src', (dpi>1) ? 'images/single-cover-232.jpg' : 'images/single-cover-116.jpg');
$('.js-5').attr('src', (dpi>1) ? 'images/pasted-image-44.png' : 'images/pasted-image-22.png');
$('.js-6').attr('src', (dpi>1) ? 'images/pasted-image-42.png' : 'images/pasted-image-21.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
var wl = new woolite();
wl.init();
wl.addAnimation($('.js')[0], "2.00s", "0.00s", 1, 0);
wl.addAnimation($('.js-3')[0], "2.00s", "0.00s", 1, 0);
wl.start();

});