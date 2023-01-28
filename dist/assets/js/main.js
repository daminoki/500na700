// swiper
const swiper = new Swiper('.swiper', {
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

// accordion
const questionsList = document.querySelectorAll(".questions__question");

questionsList.forEach(question => {
    question.addEventListener("click", () => handleClick(question))
})

function handleClick(question) {
    const answer = question.nextElementSibling;
    const wrapper = answer.parentNode;

    answer.classList.toggle("questions__answer_visible");
    question.classList.toggle("questions__question_active");
    wrapper.classList.toggle("questions__wrapper_active");

    questionsList.forEach(item => {
        if (item !== question) {
            const answerItem = item.nextElementSibling;
            const wrapperItem = answerItem.parentNode;
            answerItem.classList.remove("questions__answer_visible");
            item.classList.remove("questions__question_active");
            wrapperItem.classList.remove("questions__wrapper_active");
        }
    })
}

// mobile nav
const menuBtn = document.querySelector(".mobile-nav__btn");
const menu = document.querySelector(".mobile-nav__sidebar");

menuBtn.addEventListener("click", () => {
    menu.classList.add("mobile-nav__sidebar_opened");
})