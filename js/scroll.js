$(document).ready(function(){

var offset1 = $("#section1").offset().top-150
var offset2 = $("#section2").offset().top-150
var offset3 = $("#section3").offset().top-150
var offset4 = $("#section4").offset().top-150
var offset5 = $("#section5").offset().top-150

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

    $("#section-1-lien").click(function(){
    console.log($("#section1").position().top);
     $(".content").animate({
         scrollTop: offset1
     }, 800);
     });

    $("#section-2-lien").click(function(){
     $(".content").animate({
         scrollTop: offset2
     }, 800);
    });

    $("#section-3-lien").click(function(){
     $(".content").animate({
         scrollTop: offset3
     }, 800);
    });

    $("#section-4-lien").click(function(){
     $(".content").animate({
         scrollTop: offset4
     }, 800);
    });

    $("#section-5-lien").click(function(){
     $(".content").animate({
         scrollTop: offset5
     }, 800);
    });

    // $(".content").mouseenter(function(){
    //     $("#headerbg").css("filter", "blur(10px) contrast(150%)");
    // });
    // $(".content").mouseleave(function(){
    //     $("#headerbg").css("filter", "blur(0px) contrast(150%)");
    // });
});
