window.addEventListener('load', handlerOnload, { once: true })

function handlerOnload() {
  document.querySelector('.page').style.overflow = 'visible'
  document.querySelector('.preloader').remove()
}

import './index.html'
import './index.css'
import '../constants.js'
import './blocks/page/page.js'

import './blocks/header/__button-menu/header__button-menu.js'
import './blocks/header/__link/header__link.js'

import './blocks/hero/__welcome-button/hero__welcome-button.js'

import './blocks/tech/tech.js'

import './blocks/works/works.js'
import './blocks/works/__button-block-secret/works__button-block-secret.js'

import './blocks/secret/secret.js'
import './blocks/secret/__button-refresh/secret__button-refresh.js'
import './blocks/secret/__button-slider/secret__button-slider.js'
