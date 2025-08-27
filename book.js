const slider = document.querySelectorAll(".imageslide");
let counter = 0;

// Position all slides side by side
slider.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

// Function to move slides based on counter
const slideImage = () => {
    slider.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

// Next button
const next = () => {
    if (counter < slider.length - 1) {
        counter++;
    } else {
        counter = 0;
    }
    slideImage();
    resetAutoplay();
};

// Prev button
const prev = () => {
    if (counter > 0) {
        counter--;
    } else {
        counter = slider.length - 1;
    }
    slideImage();
    resetAutoplay();
};

// Autoplay every 3 seconds
let autoSlide = setInterval(() => {
    counter = (counter + 1) % slider.length;
    slideImage();
}, 3000);

// Restart autoplay on manual button press
function resetAutoplay() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
        counter = (counter + 1) % slider.length;
        slideImage();
    }, 3000);
}
