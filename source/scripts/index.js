/* в этот файл добавляет скрипты*/
import { onToggleButtonClick, toggleButton } from './burger.js';
import { showSlide } from './slider.js';

toggleButton.addEventListener('click', onToggleButtonClick);

showSlide();

// const pageNumberElements = document.querySelectorAll('.slider__pagination-link');

// pageNumberElements.forEach((pageNumber) => {
//   pageNumber.addEventListener('click', () => {
//     const index = pageNumber.dataset.index;
//     showSlide(index - 1);
//   });
// });
