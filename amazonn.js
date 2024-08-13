

const slides = document.querySelectorAll(".img-bck");
const slider = document.querySelector('.slider');
let currentSlide = 0; // Track the current slide index

const goPrev = () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
    slideImage();
};

const goNext = () => {
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    slideImage();
};

const slideImage = () => {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
};

// Initialize the slider to show the first image
slideImage();


