export const nav = document.querySelector('.navigation')

// переключить отображение navigation
export function toggleDisplayNav() {
  const isNavVisible = nav.classList.contains('navigation_pos_sticky')

  if (isNavVisible) {
    setNavHidden()
  } else {
    setNavVisible()
  }
}

// показать navigation
export function setNavVisible() {
  nav.classList.add('navigation_visible')
}

// скрыть navigation
export function setNavHidden() {
  nav.classList.remove('navigation_visible')
}

// установить фиксированное позиционирование для navigation
export function setNavPosFixed() {
  nav.classList.add('navigation_pos_fixed')
}

// убрать фиксированное позиционирование у navigation
export function removeNavPosFixed() {
  nav.classList.remove('navigation_pos_fixed')
}
