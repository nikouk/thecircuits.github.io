(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
function em1(){var c="uifdjsdvjutcboeAjdmpve/dpn";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js-115').attr('src', (dpi>1) ? 'images/asset-2-276.png' : 'images/asset-2-138.png');
$('.js-117').attr('src', (dpi>1) ? 'images/max-elliott-copy-332.png' : 'images/max-elliott-copy-166.png');
$('.js-118').attr('src', (dpi>1) ? 'images/layer-2-copy-5-1460-1.png' : 'images/layer-2-copy-5-730-1.png');
$('.js-119').attr('src', (dpi>1) ? 'images/simitri-copy-456.png' : 'images/simitri-copy-228.png');
$('.js-120').attr('src', (dpi>1) ? 'images/pasted-image-78.png' : 'images/pasted-image-39.png');
$('.js-121').attr('src', (dpi>1) ? 'images/pasted-image-82.png' : 'images/pasted-image-41.png');
$('.js-122').attr('src', (dpi>1) ? 'images/spotify_icon_rgb_black-92.png' : 'images/spotify_icon_rgb_black-46.png');}else{$('.js-115').attr('src', (dpi>1) ? 'images/asset-2-116.png' : 'images/asset-2-58.png');
$('.js-117').attr('src', (dpi>1) ? 'images/max-elliott-copy-110.png' : 'images/max-elliott-copy-55.png');
$('.js-118').attr('src', (dpi>1) ? 'images/layer-2-copy-5-488-1.png' : 'images/layer-2-copy-5-244-1.png');
$('.js-119').attr('src', (dpi>1) ? 'images/simitri-copy-152.png' : 'images/simitri-copy-76.png');
$('.js-120').attr('src', (dpi>1) ? 'images/pasted-image-26.png' : 'images/pasted-image-13.png');
$('.js-121').attr('src', (dpi>1) ? 'images/pasted-image-28.png' : 'images/pasted-image-14.png');
$('.js-122').attr('src', (dpi>1) ? 'images/spotify_icon_rgb_black-30.png' : 'images/spotify_icon_rgb_black-15.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
if(! document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
$('.js-132').attr('src', 'images/apple_music_icon_blk-43.png');

}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-114')[0], "2.00s", "0.00s", 1, 0);
wl.addAnimation($('.js-116')[0], "2.00s", "0.00s", 1, 0);
wl.addAnimation($('.js-117')[0], "1.00s", "0.30s", 1, 0);
wl.addAnimation($('.js-118')[0], "2.50s", "0.00s", 1, 0);
wl.addAnimation($('.js-119')[0], "1.00s", "0.50s", 1, 0);
wl.start();

});