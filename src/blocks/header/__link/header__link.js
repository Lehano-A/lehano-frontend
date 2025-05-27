import { setIconByDefault } from '../__button-menu/header__button-menu'
import { setHeaderHidden } from '../header'

const links = document.querySelectorAll('.header__link')

function handleLinkClick() {
  setIconByDefault()
  setHeaderHidden()
}

links.forEach((item) => item.addEventListener('click', handleLinkClick))
