import { blockSecret } from "../../../common/common";
import { getBottomWorks } from "../../secret/secret";


function getRulesAnimationMoveBlockDown() {
  return [
    { transform: `translateY(0)` },
    { transform: `translateY(${blockSecret.clientHeight}px)` }
  ]
}


function getRulesAnimationMoveTopSecret() {
  return [
    { transform: `translateY(0)` },
    { transform: `translateY(${-blockSecret.clientHeight}px)` }
  ]
}


function getRulesAnimationMoveTopFooter() {
  return [
    { top: `${blockSecret.clientHeight}px` },
    { top: `${0}px` },
  ];
}


const rulesRotateIcon180 = [
  { transform: 'rotate(0deg)' },
  { transform: 'rotate(180deg)' },
];


const rulesRotateIcon360 = [
  { transform: 'rotate(180deg)' },
  { transform: 'rotate(360deg)' },
];


const commonDuration = 700;


const optionsMoveDown = {
  duration: commonDuration,
  easing: 'ease-in',
}


const optionsMoveTop = {
  duration: commonDuration,
  easing: 'ease-out',
}


const optionsRotate180 = {
  duration: commonDuration,
  easing: 'ease-in',
  fill: 'forwards'
}


const optionsRotate360 = {
  duration: commonDuration,
  easing: 'ease-out',
  fill: 'forwards'
}


export {
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
}