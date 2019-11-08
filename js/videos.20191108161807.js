(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

function em1(){var c="uifdjsdvjutcboeAjdmpve/dpn";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}

$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js-28').attr('src', (dpi>1) ? 'images/asset-2-276.png' : 'images/asset-2-138.png');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
plyr.setup(document.querySelectorAll('.player video'));
if($('.js-30 video')[0].plyr.volume){$('.js-30 video')[0].plyr.setVolume(8);}
if($('.js-31 video')[0].plyr.volume){$('.js-31 video')[0].plyr.setVolume(8);}
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-27')[0], "2.00s", "0.00s", 1, 0);
wl.addAnimation($('.js-29')[0], "2.00s", "0.00s", 1, 0);
wl.start();

});