$(document).ready(function()
{
    $(window).scroll(function()
    {
        if(this.scrollY >20)
        {
            $('.navbar').addClass("sticky");
        } 
        else
        {
            $('.navbar').removeClass("sticky");
        }

        if(this.scroll > 500)
        {
            $('.scroll_up_btn').addClass("show");
        }
        else
        {
            $('.scroll_up_btn').removeClass("show");
        }
    });

    //Slide up Script
    $('.scroll_up_btn').click(function()
    {
        $('.html').animate({scrollTop: 0});
    });

    //toggle menu script
    $('.menu_btn').click(function()
    {
        $('.navbar .menu').toggleClass("active");
        $('.menu_btn i').toggleClass("active");
    })

    //typing animation script
var typed = new Typed(".typing",
{
    strings: ["Developer", "Web Developer", "Content Writer", "SEO expert"],
    typespeed: 30,
    backspeed: 30,
    loop: true
});

var typed = new Typed(".typing_2",
{
    strings: ["Developer", "Web Developer", "Content Writer", "SEO expert"],
    typespeed: 100,
    backspeed: 60,
    loop: true
});

    //owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true, 
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav:false
              },
            600:{
                items: 2,
                nav:false
              },
            1000:{
                items: 3,
                nav:false
              }
             
        }
    });
});

document.querySelector('.home_content').addEventListener('mouseover', () =>{
	console.log("hello");
	//document.querySelector('.home').classList.remove('home');
})

