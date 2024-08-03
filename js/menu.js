// js/menu.js
document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.querySelector('.nav__menu');
    const navLinks = document.querySelector('.nav__link');
    const navClose = document.querySelector('.nav__close');

    navMenu.addEventListener('click', () => {
        navLinks.classList.toggle('nav__link--show');
    });

    navClose.addEventListener('click', () => {
        navLinks.classList.remove('nav__link--show');
    });
});
