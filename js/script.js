/**
 * Created by IngeGerda on 30.03.2016.
 */
jQuery(document).ready(function($) {
    $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
    });
});

$(".nav a").on("click", function(){
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
});

//******add class navbar-shrink*****//
jQuery(function($) {
    $(window).scroll(function(){
        if($(window).scrollTop() >50) {
            $('.navbar').addClass("navbar-shrink");
        }else {
            $('.navbar').removeClass("navbar-shrink");
        }
    });
});