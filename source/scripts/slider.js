const slides = document.querySelectorAll('.slider__slide');
const buttonPrev = document.querySelector('.slider-button-prev');
const buttonNext = document.querySelector('.slider-button-next');

let currentSlide = 0;

// Disable buttons in initial position
buttonPrev.disabled = true;

// Function to show slide
const showSlide = () => {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.add('slider__slide--active');
    } else {
      slide.classList.remove('slider__slide--active');
    }
  });

  // Check if it's first slide to disable prev button
  if (currentSlide === 0) {
    buttonPrev.disabled = true;
  } else {
    buttonPrev.disabled = false;
  }

  // Check if it's last slide to disable next button
  if (currentSlide === slides.length - 1) {
    buttonNext.disabled = true;
  } else {
    buttonNext.disabled = false;
  }
};

// Function to show next slide
const onNextButtonClick = () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide();
  }
};

// Function to show previous slide
const onPrevButtonClick = () => {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide();
  }
};

// Event listener for next button click
buttonNext.addEventListener('click', onNextButtonClick);

// Event listener for previous button click
buttonPrev.addEventListener('click', onPrevButtonClick);

// Show initial slide
// showSlide();s

export { showSlide };
