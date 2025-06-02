import { handleLinkClick } from './__link/navigation__link'

const body = document.querySelector('body')
export const nav = document.querySelector('.navigation')
export const cloneNav = nav.cloneNode(true)
const linksCloneNav = cloneNav.querySelectorAll('.navigation__link')

linksCloneNav.forEach((item) => item.addEventListener('click', handleLinkClick))
body.appendChild(cloneNav)

// показать клон navigation
export function setVisibleCloneNav() {
  cloneNav.classList.remove('navigation_hidden')
}

// скрыть клон navigation
export function hiddenCloneNav() {
  cloneNav.classList.add('navigation_hidden')
}

// установить фиксированное позиционирование для клона navigation
export function setCloneNavPosFixed() {
  cloneNav.classList.add('navigation_pos_fixed')
}

// убрать фиксированное позиционирование у клона navigation
export function removeCloneNavPosFixed() {
  cloneNav.classList.remove('navigation_pos_fixed')
}
