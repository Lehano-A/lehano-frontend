function getRulesAnimationMoveBlockDown(heightSecret) {
  return [{ transform: 'translateY(0)' }, { transform: `translateY(${heightSecret}px)` }]
}

function getRulesAnimationMoveTopSecret(heightSecret) {
  return [{ transform: 'translateY(0)' }, { transform: `translateY(${-heightSecret}px)` }]
}

function getRulesAnimationMoveTopFooter(heightSecret) {
  return [{ top: `${heightSecret}px` }, { top: 0 }]
}

const rulesRotateIcon180 = [{ transform: 'rotate(0deg)' }, { transform: 'rotate(180deg)' }]

const rulesRotateIcon360 = [{ transform: 'rotate(180deg)' }, { transform: 'rotate(360deg)' }]

const COMMON_DURATION = 700

const optionsMoveDown = {
  duration: COMMON_DURATION,
  easing: 'ease-in',
}

const optionsMoveTop = {
  duration: COMMON_DURATION,
  easing: 'ease-out',
}

const optionsRotate180 = {
  duration: COMMON_DURATION,
  easing: 'ease-in',
  fill: 'forwards',
}

const optionsRotate360 = {
  duration: COMMON_DURATION,
  easing: 'ease-out',
  fill: 'forwards',
}

export {
  COMMON_DURATION,
  getRulesAnimationMoveBlockDown,
  getRulesAnimationMoveTopSecret,
  getRulesAnimationMoveTopFooter,
  rulesRotateIcon180,
  rulesRotateIcon360,
  optionsMoveDown,
  optionsMoveTop,
  optionsRotate180,
  optionsRotate360,
}
