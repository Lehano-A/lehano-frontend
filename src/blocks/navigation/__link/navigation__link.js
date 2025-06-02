import { setIconByDefault } from '../../button-menu/button-menu-handler-click'
import { removeCloneNavPosFixed } from '../navigation'

const navLinks = document.querySelectorAll('.navigation__link')

export function handleLinkClick() {
  setIconByDefault()
  removeCloneNavPosFixed()
}

navLinks.forEach((item) => item.addEventListener('click', handleLinkClick))
