$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: false,
                loop: false
            }
        }
    })
})