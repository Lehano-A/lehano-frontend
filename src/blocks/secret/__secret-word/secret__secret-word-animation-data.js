import { regexAlphaRgba } from "../../../../constants";

function getRulesAnimationChangeRgba(numberRgba) {
  return [
    { backgroundColor: numberRgba },
    { backgroundColor: `${numberRgba.replace(regexAlphaRgba, 0)}` },
  ];
}

const optionsChangeRgba = {
  duration: 1500,
}

export { getRulesAnimationChangeRgba, optionsChangeRgba };