const slides = document.querySelectorAll('.slider__slide');
const buttonPrev = document.querySelector('.slider-button-prev');
const buttonNext = document.querySelector('.slider-button-next');
const paginationButtons = document.querySelectorAll('.slider__pagination-link');

let currentSlide = 0;

// Отключает кнопки в начальной позиции
buttonPrev.disabled = true;

// показать слайд
const showSlide = () => {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.add('slider__slide--active');
      paginationButtons[index].classList.add('slider__pagination-link--active');
    } else {
      slide.classList.remove('slider__slide--active');
      paginationButtons[index].classList.remove('slider__pagination-link--active');
    }
  });

  // активировать или дезактивировать кнопки в зависимости от текущего слайда
  if (currentSlide === 0) {
    buttonPrev.disabled = true;
  } else {
    buttonPrev.disabled = false;
  }

  if (currentSlide === slides.length - 1) {
    buttonNext.disabled = true;
  } else {
    buttonNext.disabled = false;
  }
};

const onNextButtonClick = () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide();
  }
};

const onPrevButtonClick = () => {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide();
  }
};

const onPaginationButtonClick = (index) => {
  currentSlide = index;
  showSlide();
};

buttonNext.addEventListener('click', onNextButtonClick);
buttonPrev.addEventListener('click', onPrevButtonClick);

paginationButtons.forEach((button, index) => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    onPaginationButtonClick(index);
  });
});

export { showSlide };
