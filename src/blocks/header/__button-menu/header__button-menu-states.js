export const buttonMenu = document.querySelector('.header__button-menu')
const iconMenu = document.querySelector('#icon-menu')
const iconClose = document.querySelector('#icon-close')

// спрятать кнопку меню
export function hideButtonMenu() {
  buttonMenu.classList.remove('header__button-menu_visible')
}

// показать кнопку меню
export function showButtonMenu() {
  buttonMenu.classList.add('header__button-menu_visible')
}

// показать иконку меню
export function showIconMenu() {
  iconMenu.classList.add('header__icon-menu_opened')
  iconClose.classList.remove('header__icon-menu_opened')
}

// показать иконку закрытия
export function showIconClose() {
  iconMenu.classList.remove('header__icon-menu_opened')
  iconClose.classList.add('header__icon-menu_opened')
}
