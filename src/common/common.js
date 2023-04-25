const blockHeader = document.querySelector('.header');
const blockWorks = document.querySelector('.works');
const blockSecret = document.querySelector('.secret');
const blockFooter = document.querySelector('.footer');

const regexSearchNums = /[\d]/g;
const regexAlphaRgba = /[^,]+(?=\))/;


// получить рандомное число в пределах аргумента
function getRandomNum(num) {
  return Math.floor(Math.random() * num)
}


// получить уникальное рандомное число в пределах аргумента, которого ещё нет в списке сохранённых чисел
function getUniqueRandomNum(num, listSaveRandomNum) {
  let randomNum = getRandomNum(num)

  if (listSaveRandomNum !== undefined && listSaveRandomNum[randomNum]) {
    while (listSaveRandomNum[randomNum]) {
      randomNum = getRandomNum(num);
    }
  }

  return randomNum
}

export {
  blockHeader,
  blockWorks,
  blockSecret,
  blockFooter,
  regexSearchNums,
  regexAlphaRgba,
  getRandomNum,
  getUniqueRandomNum
};