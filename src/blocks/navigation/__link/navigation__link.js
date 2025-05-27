import { setIconByDefault } from '../../header/__button-menu/header__button-menu-handler-click'
import { setNavHidden } from '../navigation'

const navLinks = document.querySelectorAll('.navigation__link')

function handleLinkClick() {
  setIconByDefault()
  setNavHidden()
}

navLinks.forEach((item) => item.addEventListener('click', handleLinkClick))
