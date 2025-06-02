import { setAttrsLinkNode } from '../common/common'
import handleIcon from './handleIcon'

// обработать ссылки
function handleLinks(cardClone, links) {
  Object.keys(links).forEach((keyElementHandledLink) => {
    handleLink(cardClone, links, keyElementHandledLink)
  })
}

// обработать ссылку
function handleLink(cardClone, links, keyElementHandledLink) {
  const uri = links[keyElementHandledLink]

  if (uri === null) {
    // если ссылки не существует (не нужна иконка)
    handleDeleteIcon(cardClone, keyElementHandledLink)
    return
  }

  const linkNode = cardClone.querySelector(`#${keyElementHandledLink}Link`) // title, href, target
  const iconNode = cardClone.querySelector(`#${keyElementHandledLink}Icon`) // alt, class: _active/_inactive

  if (uri) {
    // если ссылка существует
    setAttrsLinkNode(linkNode, uri)
    handleIcon(iconNode, 'active', keyElementHandledLink)
  } else if (uri === '') {
    // если у ссылки пустое значение  (нужна неактивная иконка)
    handleEmptyLink(linkNode, iconNode)
    handleIcon(iconNode, 'inactive', keyElementHandledLink)
  }
}

// обработать пустую ссылку
function handleEmptyLink(linkNode, iconNode) {
  linkNode.parentNode.insertBefore(iconNode, linkNode)
  linkNode.remove()
}

// обработать удаление иконки
function handleDeleteIcon(cardClone, keyElementHandledLink) {
  const githubRepoLinkNode = cardClone.querySelector('#githubRepoLink')

  if (keyElementHandledLink === 'project') {
    const projectLinkNode = cardClone.querySelector(`#${keyElementHandledLink}Link`)
    projectLinkNode.remove()
  } else if (keyElementHandledLink === 'githubRepo') {
    githubRepoLinkNode.remove()
  }
}

export { handleLinks }
