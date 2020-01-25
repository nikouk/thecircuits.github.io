(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
function em1(){var c="uifdjsdvjutcboeAjdmpve/dpn";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js-56').attr('src', (dpi>1) ? 'images/asset-2-276.png' : 'images/asset-2-138.png');}else{$('.js-56').attr('src', (dpi>1) ? 'images/asset-2-116.png' : 'images/asset-2-58.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
plyr.setup(document.querySelectorAll('.player video'));
if($('.js-58 video')[0].plyr.volume){$('.js-58 video')[0].plyr.setVolume(8);}
if($('.js-59 video')[0].plyr.volume){$('.js-59 video')[0].plyr.setVolume(8);}
if($('.js-60 video')[0].plyr.volume){$('.js-60 video')[0].plyr.setVolume(8);}
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-55')[0], "2.00s", "0.00s", 1, 0);
wl.addAnimation($('.js-57')[0], "2.00s", "0.00s", 1, 0);
wl.start();

});