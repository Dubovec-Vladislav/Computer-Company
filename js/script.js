// --------------- Slider --------------- //
const productSlider = new Swiper('.slider__products', {
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    // mousewheel: {
    //     sensitivity: 1,
    // },

    speed: 800,
    // loop: true,
});
// --------------- End slider --------------- //


// --------------- Validation --------------- //
const formButton = document.querySelector('.bid__link');
const nameInput = document.querySelector('.name-inp');

formButton.addEventListener('click', () => {
    const hasDigits = /\d/.test(nameInput.value);
    if (hasDigits === true) {
        alert('Произошла валидация формы, в поле - Имя найдены цифры');
    }
    else {
        alert('Произошла валидация формы, ошибки не найдены');
    }
});
// --------------- End validation --------------- //


// --------------- Burger --------------- //
const headerBurger = document.querySelector('.header__burger');
const body = document.querySelector('body');
const headerList = document.querySelector('.header__list');

headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('_active');
    body.classList.toggle('_lock');
    headerList.classList.toggle('_active');
});
// --------------- End validation --------------- //