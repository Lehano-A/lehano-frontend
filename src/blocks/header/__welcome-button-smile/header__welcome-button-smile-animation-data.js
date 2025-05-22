import { getUniqueRandomNum } from './../../../styles/common/common.js';


function getRulesAnimationSmiles() {

  const x = getUniqueRandomNum(180);
  const y = getUniqueRandomNum(90);

  return [
    {
      transform: "translate(0px, 0px) scale(0.6)",
      opacity: 1, offset: 0
    },

    {
      opacity: 0.8, offset: 0.7
    },

    {
      transform: `translate(${x % 2 ? x : -x}px, ${y % 2 ? y : -y}px) scale(1.2)`,
      opacity: 0, offset: 1
    },
  ]
}

const optionsTranslateSmile = {
  duration: 1000,
};

export { getRulesAnimationSmiles, optionsTranslateSmile }