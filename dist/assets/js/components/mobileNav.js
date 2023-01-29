(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('mobileNav', ['exports'], factory) :
    (global = global || self, factory(global.mobileNav = {}));
}(this, (function (exports) { 'use strict';

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

    exports.mobileNav = mobileNav;

    Object.defineProperty(exports, '__esModule', { value: true });

})));