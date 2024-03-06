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
        typespeed: 10,
        backspeed: 10,
        backDelay:3000,
        typeDelay:3000,
        loop: true 
    });
    var typedd = new Typed(".typing2", {
        strings: ["Web developer","App developer","Freelancer"],
        typespeed: 10,
        backspeed: 10,
        backDelay:3000,
        typeDelay:3000,
        loop: true 
    });

    // menubar script
    // $('.menu-btn').click();
});
let backdrop = document.querySelector('.backdrop');
let styleOfBackdrop = getComputedStyle(backdrop);
let menu = document.querySelector('.menu');
let w = document.documentElement.clientWidth || window.innerWidth;


function hatJa(){
    if(w<=600){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        if(backdrop.classList.contains('none')){
            backdrop.classList.remove('none');
            backdrop.classList.add('block');
        }else if(backdrop.classList.contains('block')){
            backdrop.classList.remove('block');
            backdrop.classList.add('none');
        }
    }
}