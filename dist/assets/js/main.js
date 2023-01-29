(function (factory) {
    typeof define === 'function' && define.amd ? define('main', factory) :
    factory();
}((function () { 'use strict';

    const swiper = new Swiper('.swiper', {
      loop: true,
      spaceBetween: 20,
      slidesPerView: 1.5,
      centeredSlides: true,
      navigation: {
        nextEl: '.gallery__button-next',
        prevEl: '.gallery__button-prev'
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 40
        },
        600: {
          slidesPerView: 1.5,
          spaceBetween: 20
        }
      }
    });

    function accordion() {
      const questionsList = document.querySelectorAll(".questions__question");
      questionsList.forEach(question => {
        question.addEventListener("click", () => handleClick(question));
      });
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
        });
      }
    }

    function mobileNav() {
      const menuOpenBtn = document.querySelector(".mobile-nav__btn");
      const menuCloseBtn = document.querySelector(".mobile-nav__close-btn");
      const overlay = document.querySelector(".mobile-nav__overlay");
      const mainPage = document.querySelector(".page");
      const menu = document.querySelectorAll(".mobile-nav__list-item");
      const menuSubnav = document.querySelector(".mobile-nav__subnav");
      menuOpenBtn.addEventListener("click", () => {
        overlay.classList.add("mobile-nav__overlay_opened");
        mainPage.classList.add("page_mobile-menu-opened");
      });
      menuCloseBtn.addEventListener("click", () => {
        overlay.classList.remove("mobile-nav__overlay_opened");
        mainPage.classList.remove("page_mobile-menu-opened");
      });
      menu.forEach(item => {
        const subnavMenu = item.nextElementSibling;
        if (subnavMenu !== null) {
          item.addEventListener("click", () => {
            console.log(subnavMenu);
            if (subnavMenu.classList.contains("mobile-nav__subnav_opened")) {
              subnavMenu.classList.remove("mobile-nav__subnav_opened");
            } else {
              subnavMenu.classList.add("mobile-nav__subnav_opened");
            }
          });
        }
      });
    }

    function telephoneInputMask() {
      const telInput = document.querySelector("#tel");
      const prefixNumber = str => {
        if (str === "7") {
          return "7 (";
        }
        if (str === "8") {
          return "8 (";
        }
        if (str === "9") {
          return "7 (9";
        }
        return "7 (";
      };
      telInput.addEventListener("input", e => {
        const value = telInput.value.replace(/\D+/g, "");
        const numberLength = 11;
        let result;
        if (telInput.value.includes("+8") || telInput.value[0] === "8") {
          result = "";
        } else {
          result = "+";
        }
        for (let i = 0; i < value.length && i < numberLength; i++) {
          switch (i) {
            case 0:
              result += prefixNumber(value[i]);
              continue;
            case 4:
              result += ") ";
              break;
            case 7:
              result += "-";
              break;
            case 9:
              result += "-";
              break;
          }
          result += value[i];
        }
        telInput.value = result;
      });
    }

    accordion();
    mobileNav();
    telephoneInputMask();

})));