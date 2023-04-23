const blockWorks = document.querySelector('.works');
const blockSecret = document.querySelector('.secret');
const blockFooter = document.querySelector('.footer');

const regexSearchNums = /[\d]/g;
const regexAlphaRgba = /[^,]+(?=\))/;

export { blockWorks, blockSecret, blockFooter, regexSearchNums, regexAlphaRgba };