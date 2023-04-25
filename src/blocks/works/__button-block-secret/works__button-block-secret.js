import { blockWorks, blockSecret, blockFooter } from "../../../common/common";
import { getBottomWorks } from "../../secret/secret";
import {
  commonDuration,
  getRulesAnimationMoveDownSecret,
  getRulesAnimationMoveTopSecret,
  getRulesAnimationMoveDownFooter,
  getRulesAnimationMoveTopFooter,
  rulesRotateIcon180,
  rulesRotateIcon360,
  optionsMoveDown,
  optionsMoveTop,
  optionsRotate180,
  optionsRotate360
} from "./works__button-block-secret-animation-data"
import { getValueSidePosition } from "../../../utils/utils";

const buttonBlockSecret = blockWorks.querySelector('.works__button-block-secret');

let isAnimating = null;
let isSecretOpened = null;


// таймер для очередной возможности запуска анимации
function setTimerAnimation() {
  setTimeout(() => {
    isAnimating = false;
  }, commonDuration);
}


// передвинуть блоки вниз
function moveBlocksDown() {
  const rulesSecret = getRulesAnimationMoveDownSecret();
  const rulesFooter = getRulesAnimationMoveDownFooter();
  const currentBottomWorks = getBottomWorks();

  blockSecret.classList.add('secret_visible');

  blockSecret.animate(rulesSecret, optionsMoveDown).onfinish = function () {
    blockSecret.style.top = `${currentBottomWorks}px`
  };

  blockFooter.animate(rulesFooter, optionsMoveDown).onfinish = function () {
    blockFooter.style.top = `${blockSecret.clientHeight}px`
  };

  buttonBlockSecret.animate(rulesRotateIcon180, optionsRotate180);

  isSecretOpened = true;
}


// передвинуть блоки вверх
function moveBlocksTop() {
  const rulesSecret = getRulesAnimationMoveTopSecret();
  const rulesFooter = getRulesAnimationMoveTopFooter();
  const currentBottomWorks = getBottomWorks();

  blockSecret.animate(rulesSecret, optionsMoveTop).onfinish = function () {
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
function launchAnimation() {
  const currentBottomWorks = getBottomWorks();
  const currentTopSecret = getValueSidePosition(blockSecret, 'top');

  if (!isAnimating) {
    isAnimating = true;
    setTimerAnimation()

    // если top блока 'secret' выше bottom блока 'works'
    if (currentTopSecret < currentBottomWorks) {
      moveBlocksDown()
      return
    }

    // если top блока 'secret' равен bottom блока 'works'
    if (currentTopSecret === currentBottomWorks) {
      moveBlocksTop()
    }
  }
}


buttonBlockSecret.addEventListener('click', () => { launchAnimation() });

export { isSecretOpened };