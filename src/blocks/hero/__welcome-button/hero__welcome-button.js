import { getUniqueRandomNum } from '../../../utils/common/common'
import { blockHero } from '../../../../constants'
import {
  getRulesAnimationSmiles,
  optionsTranslateSmile,
} from '../__welcome-button-smile/hero__welcome-button-smile-animation-data'

const buttonBox = blockHero.querySelector('.hero__welcome-button-box')

const smiles = ['😜', '🤗', '🥳', '👻', '🖖', '✌', '🤝', '🚀', '🌞', '🔥', '✨', '🎉', '🎊', '🧡', '😸', '😊', '😉']

let listSaveRandomNum = {}
let isAnimating = null
let DURATION_LAUNCH = 100

// таймер для очередной возможности запуска анимации
function setTimerAnimation() {
  const timer = setTimeout(() => {
    isAnimating = false
    clearTimeout(timer)
  }, DURATION_LAUNCH)

  return timer
}

function createSmiles(event) {
  const x = event.offsetX
  const y = event.offsetY

  const span = document.createElement('span')
  let randomNum = getUniqueRandomNum(smiles.length, listSaveRandomNum)

  listSaveRandomNum[randomNum] = true

  span.classList.add('hero__welcome-button-smile')
  span.style.top = `${y}px`
  span.style.left = `${x}px`
  span.textContent = smiles[randomNum]
  buttonBox.appendChild(span)

  return span
}

/* слушатель стоит на контейнере, а не на самой кнопке, поскольку
   если клик происходит на краю кнопки, то событие не фиксируется
   из-за анимации scale() у кнопки, которая изменяет кнопку => и границы события
*/
buttonBox.addEventListener('click', (event) => {
  if (!isAnimating) {
    isAnimating = true
    setTimerAnimation()

    for (let i = 0; i <= 4; i++) {
      const smile = createSmiles(event)
      const rulesAnimation = getRulesAnimationSmiles()

      smile.animate(rulesAnimation, optionsTranslateSmile).onfinish = function () {
        smile.remove()
      }
    }

    listSaveRandomNum = {}
  }
})
