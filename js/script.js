const productSlider = new Swiper('.slider__products', {
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    mousewheel: {
        sensitivity: 1,
    },

    speed: 800,
    loop: true,
});

const headerSubmenu = document.querySelector('.header__submenu');