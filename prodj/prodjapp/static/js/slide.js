let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveSlide(n) {
    showSlide(currentSlide + n);
}

// Auto slide (optional)
setInterval(() => {
    moveSlide(1);
}, 3000);


// script.js
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider1');
    const slides = Array.from(document.querySelectorAll('.slide1'));
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSliderPosition();
        }
    });
});