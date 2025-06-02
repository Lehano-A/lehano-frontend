import { blockSecret, blockFooter } from '../../../constants'
import { isSecretOpened } from '../works/__button-block-secret/works__button-block-secret'

let prevHeightSecret = null

// получить высоту блока 'secret'
function getHeightSecret() {
  return blockSecret.clientHeight
}

// сохранить начальное значение высоты блока 'secret'
function savetInitialHeightSecret() {
  prevHeightSecret = getHeightSecret()
}

// обработчик изменения ширины окна
function handleResize() {
  const currentHeightSecret = getHeightSecret()

  // если блок 'secret' открыт,
  // и текущий height блока 'secret' !== предыдущему height блока 'secret
  if (isSecretOpened && currentHeightSecret !== prevHeightSecret) {
    blockSecret.style.bottom = `${-currentHeightSecret}px`
    blockFooter.style.top = `${currentHeightSecret}px`
  }

  prevHeightSecret = currentHeightSecret
}

window.addEventListener('load', savetInitialHeightSecret, { once: true })

window.addEventListener('resize', handleResize)

export { getHeightSecret }
