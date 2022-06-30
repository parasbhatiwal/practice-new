// header

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#navlist");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});






$(window).on("load resize", function () {
    var owl = $('.box-main.owl-carousel');
    owl.owlCarousel({
        margin: 10,
        loop: true,
        nav: true,
        dots: false,
        lazyLoad: true,
        autoplay: true,
        smartSpeed: 1000,
        autoHeight: true,
        navText: ["<i class='icon-left-arrow' title='Previous'></i>", "<i class='icon-right-arrow' title='Next'></i>"],
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            }
        }
    });
    if ($(window).width() < 1200) {
        owl.trigger('initialize.owl.carousel');
    } else {
        owl.trigger('destroy.owl.carousel');
    }


    var owl = $('.testimonial-slider.owl-carousel');
    owl.owlCarousel({
        margin: 10,
        loop: true,
        nav: true,
        dots: false,
        lazyLoad: true,
        autoplay: true,
        smartSpeed: 1000,
        animateOut: 'fadeOut',
        autoHeight: true,
        navText: ["<i class='icon-left-arrow' title='Previous'></i>", "<i class='icon-right-arrow' title='Next'></i>"],
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            }
        }
    });
});

