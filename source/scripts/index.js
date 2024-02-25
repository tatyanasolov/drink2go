/* в этот файл добавляет скрипты*/
const navigation = document.querySelector('.header__navigation');
const toggleButton = document.querySelector('.header__burger--closed');

toggleButton.addEventListener('click', () => {
  if (navigation.classList.contains('header__navigation--closed')) {
    navigation.classList.remove('header__navigation--closed');
    navigation.classList.add('header__navigation--opened');
    toggleButton.classList.remove('header__burger--closed');
  } else {
    navigation.classList.remove('header__navigation--opened');
    navigation.classList.add('header__navigation--closed');
    toggleButton.classList.add('header__burger--closed');
  }
});
