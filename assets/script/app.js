const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('ul');



menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


$('.carousel').owlCarousel({
margin: 10,
loop: true,
autoplay: true,
autoplayTimeout: 5000,
autoplayHoverPause: true,
responsive: {
    0:{
        items: 1,
        nav: false
    },
    600:{
        items: 2,
        nav: false
    },
    1000:{
        items: 3,
        nav: false
    }
}
});


$('.carousel2').owlCarousel({
    margin: 5,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        900:{
            items:2,
            nav: false
        },
        1000:{
            items: 2,
            nav: false
        }
    }
    });