// JavaScript para manejar la apertura y cierre del menú de navegación

const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
const navLinkMenu = document.querySelector('.nav__link--menu');

// Mostrar el menú de navegación y el icono de cerrar al hacer clic en el icono de menú
navMenu.addEventListener('click', () => {
    navLinkMenu.classList.add('nav__link--show');
    navClose.classList.add('show');
});

// Ocultar el menú de navegación y el icono de cerrar al hacer clic en el icono de cerrar
navClose.addEventListener('click', () => {
    navLinkMenu.classList.remove('nav__link--show');
    navClose.classList.remove('show');
});
