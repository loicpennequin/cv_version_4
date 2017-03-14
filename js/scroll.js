$(document).ready(function(){

    // Lazy load des sections
    $(".content").scroll(function(){
        for (var i = 1;  i <=5 ; i++) {
            var section = $("#section" + i);
            var content = $(".content");
            //opacité
            var x = section.offset();
            var h = content.innerHeight();
            var o = ((h-x.top)/1000) + 0.6;
            if ( o > 1) {
                o = 1;
            }
            section.css('opacity', o);
            section.css('transform', 'scale(' + o + ',' + o + ')')
        }
    });

    // Smooth scroll

    $("#section-1-lien").click(function(){
     $(".content").animate({
         scrollTop: ($("#section1").offset().top)-150
     }, 800);
    });

    $("#section-2-lien").click(function(){
     $(".content").animate({
         scrollTop: ($("#section2").offset().top)-150
     }, 1200);
    });

    $("#section-3-lien").click(function(){
     $(".content").animate({
         scrollTop: ($("#section3").offset().top)-150
     }, 1600);
    });

    $("#section-4-lien").click(function(){
     $(".content").animate({
         scrollTop: ($("#section4").offset().top)-150
     }, 2000);
    });

    $("#section-5-lien").click(function(){
     $(".content").animate({
         scrollTop: ($("#section5").offset().top)-150
     }, 2400);
    });


});
