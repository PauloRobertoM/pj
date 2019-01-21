(function($, window) {
    $('#owl-vitrine').owlCarousel({
        loop: true,
        autoplay: true,
        margin:0,
        nav: false,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('#owl-institucional').owlCarousel({
        loop: true,
        autoplay: true,
        margin:0,
        nav: false,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('#owl-clientes').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 30,
        nav: false,
        dots: true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 160
    });
})(jQuery, window);