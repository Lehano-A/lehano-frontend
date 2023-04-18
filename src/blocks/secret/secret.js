import { blockWorks, blockSecret, blockFooter, regexSearchNums } from "../../common/common";
import { getValueSidePosition } from "../../utils/utils";


let prevBottomWorks = null;


// получение начального top блока "secret"
function getInitialTopSecret() {

  const bottomBlockWorks = getBottomWorks()
  prevBottomWorks = bottomBlockWorks

  const heightSecret = blockSecret.clientHeight;

  return bottomBlockWorks - heightSecret
}


// установить начальный top блока "secret"
function setInitialTopSecret() {
  blockSecret.style.top = `${getInitialTopSecret()}px`;
}


// получение текущего bottom блока "works"
function getBottomWorks() {

  const styleBlockWorks = getComputedStyle(blockWorks);
  const marginBottomWorks = parseInt(styleBlockWorks.marginBottom)

  return blockWorks.offsetTop + blockWorks.clientHeight + marginBottomWorks;
}


// обновление top блока 'secret
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

  // если текущий bottom блока 'works' !== предыдущему bottom блока 'works'
  if (currentBottomWorks !== prevBottomWorks) {
    const topFooter = getValueSidePosition(blockFooter, 'top')

    updateTopSecret(topFooter)
    prevBottomWorks = currentBottomWorks
  }
}


window.addEventListener('load', setInitialTopSecret, { once: true })

window.addEventListener('resize', handleResize)


export { getBottomWorks };
