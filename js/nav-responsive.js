$(document).ready(function(){
    $(".navbar-toggler-icon").click(function(){
        $(".dropbtn").click(function(){
            if($(".dropdown>.dropdown-content").css("display") == "block"){
                $(".dropdown>.dropdown-content").css("display", "none");
            }
            else{
                $(".dropdown>.dropdown-content").css("display", "block");
            }
        });
        
        $(".drop-down").click(function(){
            if($(".drop-down>#third-menu").css("display") == "none"){
                $(".drop-down>#third-menu").css("display", "block");
            }
            else{
                $(".drop-down>#third-menu").css("display", "none");
            }
        });
    });

    $(window).resize(function(){
        if($(window).width() >= 1024){
            console.log("!");
            $(".dropdown-content").css("display", "none");
            
        }
      });
});