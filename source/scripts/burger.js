const navigation = document.querySelector('.header__navigation');
const toggleButton = document.querySelector('.header__burger--closed');

const toggleNavigationMenu = () => {
  navigation.classList.toggle('header__navigation--opened');
  toggleButton.classList.toggle('header__burger--closed');
};

function onToggleButtonClick() {
  toggleNavigationMenu();
}

export { onToggleButtonClick, toggleButton};
