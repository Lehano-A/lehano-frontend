export const buttonMenu = document.querySelector('.button-menu')
const iconMenu = document.querySelector('#icon-menu')
const iconClose = document.querySelector('#icon-close')

// спрятать кнопку меню
export function hideButtonMenu() {
  buttonMenu.classList.remove('button-menu_visible')
}

// показать кнопку меню
export function showButtonMenu() {
  buttonMenu.classList.add('button-menu_visible')
}

// показать иконку меню
export function showIconMenu() {
  iconMenu.classList.add('button-menu__icon_opened')
  iconClose.classList.remove('button-menu__icon_opened')
}

// показать иконку закрытия
export function showIconClose() {
  iconMenu.classList.remove('button-menu__icon_opened')
  iconClose.classList.add('button-menu__icon_opened')
}
