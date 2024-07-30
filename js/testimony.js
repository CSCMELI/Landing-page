const testimonies = document.querySelectorAll('.testimony__body');
const nextButton = document.getElementById('next');
const beforeButton = document.getElementById('before');
let currentIndex = 0;

function showTestimony(index) {
    testimonies.forEach((testimony, idx) => {
        testimony.classList.toggle('testimony__body--show', idx === index);
    });
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonies.length;
    showTestimony(currentIndex);
});

beforeButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonies.length) % testimonies.length;
    showTestimony(currentIndex);
});

showTestimony(currentIndex);