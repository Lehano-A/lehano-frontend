// установить атрибуты для ссылки
function setAttrsLinkNode(linkNode, link) {
  linkNode.setAttribute('href', link)
  linkNode.setAttribute('target', '_blank')
}

// получить рандомное число в пределах аргумента
function getRandomNum(num) {
  return Math.floor(Math.random() * num)
}

// получить уникальное рандомное число в пределах аргумента, которого ещё нет в списке сохранённых чисел
function getUniqueRandomNum(num, listSaveRandomNum) {
  let randomNum = getRandomNum(num)

  if (listSaveRandomNum !== undefined && listSaveRandomNum[randomNum]) {
    while (listSaveRandomNum[randomNum]) {
      randomNum = getRandomNum(num)
    }
  }

  return randomNum
}

export { setAttrsLinkNode, getRandomNum, getUniqueRandomNum }
