import { blockHeader, getUniqueRandomNum } from "../../../common/common";
import { getRulesAnimationSmiles, optionsTranslateSmile } from '../__welcome-button-smile/header__welcome-button-smile-animation-data';

const buttonBox = blockHeader.querySelector('.header__welcome-button-box');

const smiles = ['😜', '🤗', '🥳', '👻', '🖖', '✌', '🤝', '🚀', '🌞', '🔥', '✨', '🎉', '🎊', '🧡', '😸', '😊', '😉'];

let listSaveRandomNum = {};


function createSmiles(event) {
  const x = event.offsetX;
  const y = event.offsetY;

  const span = document.createElement('span');
  let randomNum = getUniqueRandomNum(smiles.length, listSaveRandomNum);

  listSaveRandomNum[randomNum] = true;

  span.classList.add('header__welcome-button-smile');
  span.style.top = `${y}px`;
  span.style.left = `${x}px`;
  span.textContent = smiles[randomNum];
  buttonBox.appendChild(span);

  return span
}


/* слушатель стоит на контейнере, а не на самой кнопке, поскольку
   если клик происходит на краю кнопки, то событие не фиксируется
   из-за анимации scale() у кнопки, которая изменяет кнопки => и границы события
*/
buttonBox.addEventListener('click', (event) => {

  for (let i = 0; i <= 4; i++) {
    const smile = createSmiles(event)
    const rulesAnimation = getRulesAnimationSmiles();

    smile.animate(rulesAnimation, optionsTranslateSmile).onfinish = function () {
      smile.remove();
    }
  }

  listSaveRandomNum = {};
})


