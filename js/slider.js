const images = document.querySelectorAll('.gallery__image');
let currentImage = 0;

function showNextImage() {
    images[currentImage].classList.remove('active');
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].classList.add('active');
}

setInterval(showNextImage, 2000);  // Cambia de imagen cada 2 segundos
