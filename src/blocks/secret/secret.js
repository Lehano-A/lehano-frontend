import { blockWorks, blockSecret, blockFooter } from "../../common/common";
import { getValueSidePosition } from "../../utils/utils";
import { isSecretOpened } from "../works/__button-block-secret/works__button-block-secret";

let prevBottomWorks = null;
let prevHeightSecret = null;


// получение начального top блока 'secret'
function getInitialTopSecret() {

  const bottomBlockWorks = getBottomWorks()
  prevBottomWorks = bottomBlockWorks

  const heightSecret = blockSecret.clientHeight;

  return bottomBlockWorks - heightSecret
}


// установить начальный top блока 'secret'
function setInitialTopSecret() {
  blockSecret.style.top = `${getInitialTopSecret()}px`;
}


// получить высоту блока 'secret'
function getHeightSecret() {
  return blockSecret.clientHeight;
}


// сохранить начальное значение высоты блока 'secret'
function savetInitialHeightSecret() {
  prevHeightSecret = getHeightSecret();
}


// получение текущего bottom блока 'works'
function getBottomWorks() {
  const styleBlockWorks = getComputedStyle(blockWorks);
  const marginBottomWorks = parseInt(styleBlockWorks.marginBottom)

  return blockWorks.offsetTop + blockWorks.clientHeight + marginBottomWorks;
}


// обновление top блока 'secret'
function updateTopSecret(topFooter) {
  if (topFooter === 0) {
    blockSecret.style.top = `${getBottomWorks() - blockSecret.clientHeight}px`;
  } else {
    blockSecret.style.top = `${getBottomWorks()}px`;
  }
}


// обработчик изменения ширины окна
function handleResize() {
  const currentBottomWorks = getBottomWorks();
  const currentHeightSecret = getHeightSecret();
  const topFooter = getValueSidePosition(blockFooter, 'top')

  // если блок 'secret' открыт,
  // и текущий height блока 'secret' !== предыдущему height блока 'secret
  if (isSecretOpened && currentHeightSecret !== prevHeightSecret) {
    blockFooter.style.top = `${currentHeightSecret}px`;

    prevHeightSecret = currentHeightSecret
  }

  updateTopSecret(topFooter)
  prevBottomWorks = currentBottomWorks
}


window.addEventListener('load', () => {
  setInitialTopSecret();
  savetInitialHeightSecret();
}, { once: true })

window.addEventListener('resize', handleResize)


export { getBottomWorks };
