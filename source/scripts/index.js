/* в этот файл добавляет скрипты*/
import { onToggleButtonClick, toggleButton } from './burger.js';
import { showSlide } from './slider.js';

toggleButton.addEventListener('click', onToggleButtonClick);

showSlide();
