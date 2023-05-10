$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

// typing animation

    var typed = new Typed(".typing", {
        strings: ["Web developer","App developer","Freelancer"],
        typespeed: 0.1,
        backspeed: 0.01,
        loop: true 
    });
    var typed = new Typed(".typing2", {
        strings: ["Web developer","App developer","Freelancer"],
        typespeed: 100,
        backspeed: 10,
        loop: true 
    });

    // menubar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});