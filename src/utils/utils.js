import { regexSearchNums } from "../common/common";

function getValueSidePosition(element, side) {
  return parseInt(getComputedStyle(element).getPropertyValue(side).match(regexSearchNums).join(''));
}

export { getValueSidePosition };