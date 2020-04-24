(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
function em1(){var c="uifdjsdvjutcboeAjdmpve/dpn";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js-2').attr('src', (dpi>1) ? 'images/asset-2-276.png' : 'images/asset-2-138.png');
$('.js-4').attr('src', (dpi>1) ? 'images/single-cover-546.jpg' : 'images/single-cover-273.jpg');
$('.js-5').attr('src', (dpi>1) ? 'images/pasted-image-184.png' : 'images/pasted-image-92.png');
$('.js-6').attr('src', (dpi>1) ? 'images/pasted-image-78.png' : 'images/pasted-image-39.png');
$('.js-7').attr('src', (dpi>1) ? 'images/pasted-image-82.png' : 'images/pasted-image-41.png');
$('.js-8').attr('src', (dpi>1) ? 'images/spotify_icon_rgb_black-92.png' : 'images/spotify_icon_rgb_black-46.png');
$('.js-9').attr('src', (dpi>1) ? 'images/circuits-1-536.jpg' : 'images/circuits-1-268.jpg');
$('.js-10').attr('src', (dpi>1) ? 'images/circuits-vision-536.jpg' : 'images/circuits-vision-268.jpg');
$('.js-11').attr('src', (dpi>1) ? 'images/7th-13-536.jpg' : 'images/7th-13-268.jpg');}else{$('.js-2').attr('src', (dpi>1) ? 'images/asset-2-160.png' : 'images/asset-2-80.png');
$('.js-4').attr('src', (dpi>1) ? 'images/single-cover-260.jpg' : 'images/single-cover-130.jpg');
$('.js-5').attr('src', (dpi>1) ? 'images/pasted-image-108.png' : 'images/pasted-image-54.png');
$('.js-6').attr('src', (dpi>1) ? 'images/pasted-image-26.png' : 'images/pasted-image-13.png');
$('.js-7').attr('src', (dpi>1) ? 'images/pasted-image-28.png' : 'images/pasted-image-14.png');
$('.js-8').attr('src', (dpi>1) ? 'images/spotify_icon_rgb_black-30.png' : 'images/spotify_icon_rgb_black-15.png');
$('.js-9').attr('src', (dpi>1) ? 'images/circuits-1-202.jpg' : 'images/circuits-1-101.jpg');
$('.js-10').attr('src', (dpi>1) ? 'images/circuits-vision-202.jpg' : 'images/circuits-vision-101.jpg');
$('.js-11').attr('src', (dpi>1) ? 'images/7th-13-202.jpg' : 'images/7th-13-101.jpg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
if(! document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
$('.js-23').attr('src', 'images/us-uk_apple_music_badge_rgb-118.png');
$('.js-24').attr('src', 'images/apple_music_icon_blk-43.png');

}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
var wl = new woolite();
wl.init();
wl.addAnimation($('.js')[0], "2.00s", "0.00s", 1, 0);
wl.addAnimation($('.js-3')[0], "2.00s", "0.00s", 1, 0);
wl.start();

});