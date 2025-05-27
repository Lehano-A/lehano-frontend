import { getCurrentIconTypeButtonMenu, setIconByDefault } from '../button-menu/button-menu-handler-click'
import { showButtonMenu, hideButtonMenu } from '../button-menu/button-menu-states'

import { nav, removeNavPosFixed, setNavHidden, setNavPosFixed, setNavVisible } from '../navigation/navigation'

const body = document.querySelector('body')
const header = document.querySelector('.header')
const hero = document.querySelector('.hero')

//обработать изменение позиции скролла
function handleChangeScrollPos() {
  let isScrollOverHero = null // скролл находится НАД секцией hero?

  // установить состояние позиции скролла - ПОД секцией hero
  function setStateScrollPosLikeUnder() {
    isScrollOverHero = false
  }

  // установить состояние позиции скролла - НАД секцией hero
  function setStateScrollPosLikeOver() {
    isScrollOverHero = true
  }

  // получить состояния позиции скролла - НАД секцией hero?
  function getStateScrollPosOverHero() {
    return isScrollOverHero
  }

  // изменить отображение кнопки меню
  function changeDisplayButtonMenu(heroRect, currentIconType) {
    // если инициализация
    if (currentIconType === null) {
      setIconByDefault()
    }

    // если скролл НИЖЕ/РАВЕН секции hero
    if (heroRect.top <= 0) {
      setStateScrollPosLikeUnder()
      showButtonMenu()

      body.appendChild(nav)
      setNavPosFixed()
      setNavHidden()
      return
    }

    // если скролл ВЫШЕ секции hero
    if (heroRect.top > 0) {
      setStateScrollPosLikeOver()
      hideButtonMenu()
      setIconByDefault()
      setNavHidden()

      header.appendChild(nav)
      setNavVisible()
      removeNavPosFixed()
    }
  }

  return {
    getStateScrollPosOverHero,
    handleScroll: () => {
      const heroRect = hero.getBoundingClientRect()

      // если инициализация документа
      if (isScrollOverHero === null) {
        changeDisplayButtonMenu(heroRect, getCurrentIconTypeButtonMenu())
        return
      }

      if (!isScrollOverHero && heroRect.top <= 0) {
        return
      }

      if (isScrollOverHero && heroRect.top > 0) {
        return
      }

      changeDisplayButtonMenu(heroRect)
    },
  }
}

export const { setStateLikeOver, setStateLikeUnder, handleScroll, getStatePosScrollOverHero } = handleChangeScrollPos()

document.addEventListener('DOMContentLoaded', function () {
  handleScroll()

  window.addEventListener('scroll', handleScroll)
})
