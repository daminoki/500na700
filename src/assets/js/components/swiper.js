export const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1.5,
    centeredSlides: true,

    navigation: {
        nextEl: '.gallery__button-next',
        prevEl: '.gallery__button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 40
        },
        600: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        }
    }
});
