window.addEventListener('load', handlerOnload);

function handlerOnload() {
  document.querySelector('.page').style.overflow = 'visible';
  document.querySelector('.header').style.display = 'block';
  document.querySelector('.main').style.display = 'flex';
  document.querySelector('.footer').style.display = 'flex';
  document.querySelector('.preloader').remove();
  window.removeEventListener('load', handlerOnload);
}

import './index.html';
import './pages/index.css';
import './common/common.js';
import './blocks/header/__welcome-button/header__welcome-button.js'
import './blocks/works/__button-block-secret/works__button-block-secret.js';
import './blocks/secret/secret.js';
import './blocks/secret/__button-refresh/secret__button-refresh.js';
import './blocks/secret/__button-slider/secret__button-slider.js';

