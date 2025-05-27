import { toggleDisplayHeader } from '../header'
const TYPE_DEFAULT = 'default'
const TYPE_CLOSED = 'closed'

const buttonMenu = document.querySelector('.header__button-menu')

// спрятать кнопку меню
export function hideButtonMenu() {
  buttonMenu.classList.remove('header__button-menu_visible')
}

// показать кнопку меню
export function showButtonMenu() {
  buttonMenu.classList.add('header__button-menu_visible')
}

// поменять иконку
function changeIcon(iconType = TYPE_DEFAULT) {
  const iconMenu = document.querySelector('#icon-menu')
  const iconClose = document.querySelector('#icon-close')

  if (iconType === TYPE_DEFAULT) {
    iconMenu.classList.add('header__icon-menu_opened')
    iconClose.classList.remove('header__icon-menu_opened')
    return
  }

  if (iconType === TYPE_CLOSED) {
    iconMenu.classList.remove('header__icon-menu_opened')
    iconClose.classList.add('header__icon-menu_opened')
  }
}

// обработать клик кнопки меню
export function handleClickButtonMenu() {
  let currentIcon = null

  // установить иконку по дефолту
  function setIconByDefault() {
    currentIcon = TYPE_DEFAULT
    changeIcon(TYPE_DEFAULT, currentIcon)
  }

  // установить иконку на "закрыть"
  function setIconLikeClosed() {
    currentIcon = TYPE_CLOSED
    changeIcon(TYPE_CLOSED, currentIcon)
  }

  // получить текущий тип иконки
  function getCurrentIconTypeButtonMenu() {
    return currentIcon
  }

  function handleClick() {
    toggleDisplayHeader()
    currentIcon === TYPE_DEFAULT ? setIconLikeClosed() : setIconByDefault()
  }

  return {
    setIconByDefault,
    setIconLikeClosed,
    getCurrentIconTypeButtonMenu,
    handleClick,
  }
}

export const { handleClick, getCurrentIconTypeButtonMenu, setIconByDefault, setIconLikeClosed } =
  handleClickButtonMenu()

buttonMenu.addEventListener('click', handleClick)
