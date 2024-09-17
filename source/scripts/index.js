/* в этот файл добавляет скрипты*/
import { onToggleButtonClick, toggleButton } from './burger.js';
import { showSlide } from './slider.js';
import './range.js';

toggleButton.addEventListener('click', onToggleButtonClick);

showSlide();
