import {
  setIconByDefault,
  getCurrentIconTypeButtonMenu,
  showButtonMenu,
  hideButtonMenu,
} from '../header/__button-menu/header__button-menu'

import { setHeaderHidden } from '../header/header'

//обработать изменение позиции скролла
function handleChangeScrollPos() {
  const hero = document.querySelector('.hero')

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
      return
    }

    // если скролл ВЫШЕ секции hero
    if (heroRect.top > 0) {
      setStateScrollPosLikeOver()
      hideButtonMenu()
      setIconByDefault()
      setHeaderHidden()
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
