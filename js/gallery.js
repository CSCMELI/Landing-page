const images = document.querySelectorAll('.gallery__image');
const nextButton = document.getElementById('next');
const beforeButton = document.getElementById('before');
let currentIndex = 0;

function showImage(index) {
    images.forEach((image, idx) => {
        image.classList.toggle('gallery__image--show', idx === index);
    });
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

beforeButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

showImage(currentIndex);
