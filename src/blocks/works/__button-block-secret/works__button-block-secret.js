import { blockWorks, blockSecret, blockFooter } from "../../../common/common";
import { getHeightSecret } from "../../secret/secret";
import {
  COMMON_DURATION,
  getRulesAnimationMoveBlockDown,
  getRulesAnimationMoveTopSecret,
  getRulesAnimationMoveTopFooter,
  rulesRotateIcon180,
  rulesRotateIcon360,
  optionsMoveDown,
  optionsMoveTop,
  optionsRotate180,
  optionsRotate360
} from "./works__button-block-secret-animation-data";


const buttonBlockSecret = blockWorks.querySelector('.works__button-block-secret');

let isAnimating = null;
let isSecretOpened = null;


// таймер для очередной возможности запуска анимации
function setTimerAnimation() {
  const timer = setTimeout(() => {
    isAnimating = false;
    clearTimeout(timer);
  }, COMMON_DURATION);

  return timer;
}


// передвинуть блоки вниз
function moveBlocksDown() {
  const heightSecret = getHeightSecret();
  const rulesMoveDown = getRulesAnimationMoveBlockDown(heightSecret);

  blockSecret.classList.add('secret_visible');

  blockSecret.animate(rulesMoveDown, optionsMoveDown).onfinish = function () {
    blockSecret.style.bottom = `${-blockSecret.clientHeight}px`;
  };

  blockFooter.animate(rulesMoveDown, optionsMoveDown).onfinish = function () {
    blockFooter.style.top = `${blockSecret.clientHeight}px`;
  };

  buttonBlockSecret.animate(rulesRotateIcon180, optionsRotate180).onfinish = function () {
    isSecretOpened = true;
  };


}


// передвинуть блоки вверх
function moveBlocksTop() {
  const heightSecret = getHeightSecret();
  const rulesSecret = getRulesAnimationMoveTopSecret(heightSecret);
  const rulesFooter = getRulesAnimationMoveTopFooter(heightSecret);

  blockSecret.animate(rulesSecret, optionsMoveTop).onfinish = function () {
    blockSecret.style.bottom = 0;
    blockSecret.classList.remove('secret_visible');
  };

  blockFooter.animate(rulesFooter, optionsMoveTop).onfinish = function () {
    blockFooter.style.top = 0;
  };

  buttonBlockSecret.animate(rulesRotateIcon360, optionsRotate360).onfinish = function () {
    isSecretOpened = false;
  };


}


// запуск анимации
function handleLaunchAnimation() {

  if (!isAnimating) {
    isAnimating = true;

    setTimerAnimation();

    if (!isSecretOpened) {
      moveBlocksDown();
    } else {
      moveBlocksTop();
    }
  }
}


buttonBlockSecret.addEventListener('click', handleLaunchAnimation);

export { isSecretOpened };