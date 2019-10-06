(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

function em1(){var c="uifdjsdvjutcboeAjdmpve/dpn";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}

$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js-4').attr('src', (dpi>1) ? 'images/circuits-3-470.jpg' : 'images/circuits-3-235.jpg');
$('.js-5').attr('src', (dpi>1) ? 'images/29-03-19-6-472.jpg' : 'images/29-03-19-6-236.jpg');
$('.js-6').attr('src', (dpi>1) ? 'images/29-03-19-9-472.jpg' : 'images/29-03-19-9-236.jpg');
$('.js-7').attr('src', (dpi>1) ? 'images/pasted-image-78.png' : 'images/pasted-image-39.png');
$('.js-8').attr('src', (dpi>1) ? 'images/pasted-image-82.png' : 'images/pasted-image-41.png');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
var wl = new woolite();
wl.init();
wl.addAnimation($('.js')[0], "2.00s", "0.00s", 1, 0);
wl.addAnimation($('.js-2')[0], "2.00s", "0.00s", 1, 0);
wl.addAnimation($('.js-3')[0], "2.00s", "0.00s", 1, 0);
wl.addAnimation($('.js-4')[0], "1.00s", "0.50s", 1, 0);
wl.addAnimation($('.js-5')[0], "1.00s", "0.50s", 1, 0);
wl.addAnimation($('.js-6')[0], "1.00s", "0.50s", 1, 0);
wl.start();

});