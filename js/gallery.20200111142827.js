(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
function em1(){var c="uifdjsdvjutcboeAjdmpve/dpn";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js-20').attr('src', (dpi>1) ? 'images/asset-2-276.png' : 'images/asset-2-138.png');
$('.js-22').attr('src', (dpi>1) ? 'images/29-03-19-8-470.jpg' : 'images/29-03-19-8-235.jpg');
$('.js-23').attr('src', (dpi>1) ? 'images/29-03-19-4-470.jpg' : 'images/29-03-19-4-235.jpg');
$('.js-24').attr('src', (dpi>1) ? 'images/29-03-19-10-470.jpg' : 'images/29-03-19-10-235.jpg');
$('.js-25').attr('src', (dpi>1) ? 'images/9-03-19-2-3-1100.jpg' : 'images/9-03-19-2-3-550.jpg');
$('.js-26').attr('src', (dpi>1) ? 'images/29-03-19-9-472.jpg' : 'images/29-03-19-9-236.jpg');
$('.js-27').attr('src', (dpi>1) ? 'images/be8b4a70-958b-4cdf-ba8a-c6009893703f-470.jpg' : 'images/be8b4a70-958b-4cdf-ba8a-c6009893703f-235.jpg');
$('.js-28').attr('src', (dpi>1) ? 'images/29-03-19-6-472.jpg' : 'images/29-03-19-6-236.jpg');
$('.js-29').attr('src', (dpi>1) ? 'images/circuits-3-470.jpg' : 'images/circuits-3-235.jpg');
$('.js-30').attr('src', (dpi>1) ? 'images/9-03-19-2-2-470.jpg' : 'images/9-03-19-2-2-235.jpg');
$('.js-31').attr('src', (dpi>1) ? 'images/circuits-3-1100.jpg' : 'images/circuits-3-550.jpg');
$('.js-32').attr('src', (dpi>1) ? 'images/1stnov-4-1100.jpg' : 'images/1stnov-4-550.jpg');
$('.js-33').attr('src', (dpi>1) ? 'images/9-03-19-18-470.jpg' : 'images/9-03-19-18-235.jpg');
$('.js-34').attr('src', (dpi>1) ? 'images/1stnov-1-470.jpg' : 'images/1stnov-1-235.jpg');
$('.js-35').attr('src', (dpi>1) ? 'images/1stnov-2-472.jpg' : 'images/1stnov-2-236.jpg');
$('.js-36').attr('src', (dpi>1) ? 'images/1stnov-3-470.jpg' : 'images/1stnov-3-235.jpg');}else{$('.js-20').attr('src', (dpi>1) ? 'images/asset-2-116.png' : 'images/asset-2-58.png');
$('.js-22').attr('src', (dpi>1) ? 'images/29-03-19-8-156.jpg' : 'images/29-03-19-8-78.jpg');
$('.js-23').attr('src', (dpi>1) ? 'images/29-03-19-4-156.jpg' : 'images/29-03-19-4-78.jpg');
$('.js-24').attr('src', (dpi>1) ? 'images/29-03-19-10-158.jpg' : 'images/29-03-19-10-79.jpg');
$('.js-25').attr('src', (dpi>1) ? 'images/9-03-19-2-3-366.jpg' : 'images/9-03-19-2-3-183.jpg');
$('.js-26').attr('src', (dpi>1) ? 'images/29-03-19-9-158.jpg' : 'images/29-03-19-9-79.jpg');
$('.js-27').attr('src', (dpi>1) ? 'images/be8b4a70-958b-4cdf-ba8a-c6009893703f-156.jpg' : 'images/be8b4a70-958b-4cdf-ba8a-c6009893703f-78.jpg');
$('.js-28').attr('src', (dpi>1) ? 'images/29-03-19-6-158.jpg' : 'images/29-03-19-6-79.jpg');
$('.js-29').attr('src', (dpi>1) ? 'images/circuits-3-158.jpg' : 'images/circuits-3-79.jpg');
$('.js-30').attr('src', (dpi>1) ? 'images/9-03-19-2-2-156.jpg' : 'images/9-03-19-2-2-78.jpg');
$('.js-31').attr('src', (dpi>1) ? 'images/circuits-3-366.jpg' : 'images/circuits-3-183.jpg');
$('.js-32').attr('src', (dpi>1) ? 'images/1stnov-4-366.jpg' : 'images/1stnov-4-183.jpg');
$('.js-33').attr('src', (dpi>1) ? 'images/9-03-19-18-158.jpg' : 'images/9-03-19-18-79.jpg');
$('.js-34').attr('src', (dpi>1) ? 'images/1stnov-1-156.jpg' : 'images/1stnov-1-78.jpg');
$('.js-35').attr('src', (dpi>1) ? 'images/1stnov-2-158.jpg' : 'images/1stnov-2-79.jpg');
$('.js-36').attr('src', (dpi>1) ? 'images/1stnov-3-158.jpg' : 'images/1stnov-3-79.jpg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-19')[0], "2.00s", "0.00s", 1, 0);
wl.addAnimation($('.js-21')[0], "2.00s", "0.00s", 1, 0);
wl.start();

});