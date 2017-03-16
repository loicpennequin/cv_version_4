$(document).ready(function(){

var offset1 = $("#section1").offset().top-100
var offset2 = $("#section2").offset().top-100
var offset3 = $("#section3").offset().top-100
var offset4 = $("#section4").offset().top-100
var offset5 = $("#section5").offset().top-100
var offsetHome = $("h1").offset().top-150

    // Lazy load des sections
    $(".content").scroll(function(){
        for (var i = 1;  i <=5 ; i++) {
            var section = $("#section" + i);
            var content = $(".content");
            //opacité
            var x = section.offset();
            var h = window.innerHeight;
            var o = ((h-x.top)/1000)+0.2;
            if ( o > 1) {
                o = 1;
            }
            if (x.top >= h * 0.6){
                section.css('opacity', '0');
            } else {
                section.css('opacity', o)
            }
            //section.css('transform', 'scale(' + o + ',' + o + ')')
        }
    });

    // Smooth scroll
    var scroll = function(lien, cible){
        $(lien).click(function(){
            $(".content").animate({
                scrollTop: cible
            }, 800);
        })
    }
    scroll("#section-1-lien", offset1);
    scroll("#section-2-lien", offset2);
    scroll("#section-3-lien", offset3);
    scroll("#section-4-lien", offset4);
    scroll("#section-5-lien", offset5);
    scroll("#home-lien", 0);
});
