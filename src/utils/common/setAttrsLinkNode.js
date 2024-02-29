// обработать существующую ссылку
function setAttrsLinkNode(linkNode, link) {
  linkNode.setAttribute('href', link)
  linkNode.setAttribute('target', '_blank')
}


export default setAttrsLinkNode