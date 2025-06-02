import {
  hiddenCloneNav,
  removeCloneNavPosFixed,
  setCloneNavPosFixed,
  setVisibleCloneNav,
} from '../navigation/navigation'
import { buttonMenu, showIconClose, showIconMenu } from './button-menu-states'

const TYPE_DEFAULT = 'default'
const TYPE_CLOSED = 'closed'

// поменять иконку
function changeIcon(iconType = TYPE_DEFAULT) {
  if (iconType === TYPE_DEFAULT) {
    showIconMenu()
    removeCloneNavPosFixed()
    hiddenCloneNav()
    return
  }

  if (iconType === TYPE_CLOSED) {
    showIconClose()
    setCloneNavPosFixed()
    setVisibleCloneNav()
  }
}

// обработать клик кнопки меню
function handleClickButtonMenu() {
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

  // переключить иконку
  function toggleIcon() {
    currentIcon === TYPE_DEFAULT ? setIconLikeClosed() : setIconByDefault()
  }

  function handleClick() {
    toggleIcon()
  }

  return {
    handleClick,
    getCurrentIconTypeButtonMenu,
    setIconByDefault,
    setIconLikeClosed,
  }
}

export const { handleClick, getCurrentIconTypeButtonMenu, setIconByDefault, setIconLikeClosed } =
  handleClickButtonMenu()

buttonMenu.addEventListener('click', handleClick)
