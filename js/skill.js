$(document).ready(function(){
    $(window).scroll(function(){
        var x = $(".skills").position();
        if(x.top <= $(document).scrollTop()  + $(window).height() / 3 * 2){
            $(".photoshop-skill").css("display", "block");
            $(".html-skill").css("display", "block");
            $(".js-skill").css("display", "block");
            $(".wordpress-skill").css("display", "block");
            $(".photoshop-skill").css("animation", "photoshop 2s");
            $(".html-skill").css("animation", "html 2s");
            $(".js-skill").css("animation", "js 2s");
            $(".wordpress-skill").css("animation", "wordpress 2s");
        }
    });
});