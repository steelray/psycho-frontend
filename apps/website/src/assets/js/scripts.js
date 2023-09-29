$(document).ready(function() {

    $(".specs-carousel").owlCarousel({
        items: 1,
        loop: false,
        mouseDrag: false,
        touchDrag: true,
        pullDrag: false,
        dots: false,
        navSpeed: 700,
        nav: true,
        navText: ['', ''],
    });

    $(".how-works-carousel").owlCarousel({
        items: 1,
        loop: false,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        dots: false,
        navSpeed: 700,
        nav: true,
        navText: ['', ''],
        onChanged: (e) => {
            howWorksAddActiveDesc(e.item.index);
            // this.activeSlide = e?.startPosition ? e?.startPosition + 1 : 1;
        }
    });

    $('.acc .__title').click(function(e) {
        $('.acc li').removeClass('active');
        $('.acc li .__body').slideUp('fast');

        $(e.target).parent().addClass('active');
        $(e.target).parent().find('.__body').slideToggle('fast');
    });

    $('.header-menu-toggle').click(function(e) {
        $(e.target).toggleClass('active');
        $('.header__menu').toggleClass('active');

    })

    function howWorksAddActiveDesc(index = 0) {
        $('.home-how-it-works .slides-desc').find('.__item').removeClass('active');
        $('.home-how-it-works .slides-desc').find('.__item').eq(index).addClass('active');
    }

})