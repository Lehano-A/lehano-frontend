import { setIconByDefault } from '../../button-menu/button-menu-handler-click'
import { setNavHidden } from '../navigation'

const navLinks = document.querySelectorAll('.navigation__link')

function handleLinkClick() {
  setIconByDefault()
  setNavHidden()
}

navLinks.forEach((item) => item.addEventListener('click', handleLinkClick))
