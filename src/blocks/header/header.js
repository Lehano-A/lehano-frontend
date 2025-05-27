const header = document.querySelector('.header')

// переключить отображение header
function toggleDisplayHeader() {
  const isHeaderVisible = header.classList.contains('header_pos_sticky')

  if (isHeaderVisible) {
    setHeaderHidden()
  } else {
    setHeaderVisible()
  }
}

// установить header видимым
function setHeaderVisible() {
  header.classList.add('header_pos_sticky')
}

// установить header скрытым
function setHeaderHidden() {
  header.classList.remove('header_pos_sticky')
}

export { toggleDisplayHeader, setHeaderVisible, setHeaderHidden }
