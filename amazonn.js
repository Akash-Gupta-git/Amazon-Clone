

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


// const phoneSale = document.querySelectorAll(".change-multi-img-div");
// const slide2 = document.querySelector('#change-choice-div');
// let counter = 0;
// const goNext2 = () => {
//     // alert()
//     counter = (counter < phoneSale.length - 1) ? counter + 1 : 0;
//     slideImage2();
// };
// const slideImage2 = () => {
   
//     for(let i = 0; i<=slide2.length; i++) {
//         let swap = slide2[i];
//         slide2[i] =slide2[i+1];
//         slide2[i+1] = swap;
//     }
//     slide2.style.transform = `translateX(-${currentSlide * 900}%)`;
// };


// for(let i = 0; i<=slide2.length; i++){
//     let swap = slide2.[i];
//         slide2.[i] =slide2.[i+1];
//         slide2.[i+1] = swap;
//     counter++
// }