// js/menu.js
document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.querySelector('.nav__menu');
    const navLinks = document.querySelector('.nav__link');
    const navClose = document.querySelector('.nav__close');

    navMenu.addEventListener('click', function () {
        navLinks.classList.toggle('nav__link--menu--activate');
    });

    navClose.addEventListener('click', function() {
        navLinks.classList.remove('nav__link--menu--activate');
    });
});
