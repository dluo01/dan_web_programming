$(document).ready(function(){
    $("#graphic-design").hover(slideShow);

    function slideShow() {
        $(".graphic-design").css("opacity","1");
        $(".animation").css("opacity","0");
        $(".post-digital").css("opacity","0");
        $(".installation").css("opacity","0");
    }

    $("#animation").hover(slideShow2);

    function slideShow2() {
        $(".graphic-design").css("opacity","0");
        $(".animation").css("opacity","1");
        $(".post-digital").css("opacity","0");
        $(".installation").css("opacity","0");
    }

    $("#post-digital").hover(slideShow3);

    function slideShow3() {
        $(".graphic-design").css("opacity","0");
        $(".animation").css("opacity","0");
        $(".post-digital").css("opacity","1");
        $(".installation").css("opacity","0");
    }

    $("#installation").hover(slideShow4);

    function slideShow4() {
        $(".graphic-design").css("opacity","0");
        $(".animation").css("opacity","0");
        $(".post-digital").css("opacity","0");
        $(".installation").css("opacity","1");
        
    }

});