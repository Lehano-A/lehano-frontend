import { blockWorks, blockSecret, blockFooter } from "../../../common/common";
import { getBottomWorks } from "../../secret/secret";
import {
  commonDuration,
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
import { getValueSidePosition } from "../../../utils/utils";

const buttonBlockSecret = blockWorks.querySelector('.works__button-block-secret');

let isAnimating = null;
let isSecretOpened = null;


// таймер для очередной возможности запуска анимации
function setTimerAnimation() {
  const timer = setTimeout(() => {
    isAnimating = false;
    clearTimeout(timer);
  }, commonDuration);

  return timer;
}


// передвинуть блоки вниз
function moveBlocksDown() {
  const rulesMoveDown = getRulesAnimationMoveBlockDown();


  blockSecret.classList.add('secret_visible');

  blockSecret.animate(rulesMoveDown, optionsMoveDown).onfinish = function () {
    blockSecret.style.top = `${getBottomWorks()}px`;
  };

  blockFooter.animate(rulesMoveDown, optionsMoveDown).onfinish = function () {
    blockFooter.style.top = `${blockSecret.clientHeight}px`;
  };

  buttonBlockSecret.animate(rulesRotateIcon180, optionsRotate180);

  isSecretOpened = true;
}


// передвинуть блоки вверх
function moveBlocksTop() {
  const rulesSecret = getRulesAnimationMoveTopSecret();
  const rulesFooter = getRulesAnimationMoveTopFooter();


  blockSecret.animate(rulesSecret, optionsMoveTop).onfinish = function () {
    const currentBottomWorks = getBottomWorks();

    blockSecret.style.top = `${currentBottomWorks - blockSecret.clientHeight}px`
    blockSecret.classList.remove('secret_visible');
  };

  blockFooter.animate(rulesFooter, optionsMoveTop).onfinish = function () {
    blockFooter.style.top = `${0}px`
  };

  buttonBlockSecret.animate(rulesRotateIcon360, optionsRotate360);

  isSecretOpened = false;
}


// запуск анимации
function handleLaunchAnimation() {
  const currentBottomWorks = getBottomWorks();
  const currentTopSecret = getValueSidePosition(blockSecret, 'top');

  if (!isAnimating) {
    isAnimating = true;

    setTimerAnimation();

    // если top блока 'secret' выше bottom блока 'works'
    if (currentTopSecret < currentBottomWorks) {
      moveBlocksDown();
      return
    }

    // если top блока 'secret' равен bottom блока 'works'
    if (currentTopSecret === currentBottomWorks) {
      moveBlocksTop();
    }
  }
}


buttonBlockSecret.addEventListener('click', handleLaunchAnimation);

export { isSecretOpened };