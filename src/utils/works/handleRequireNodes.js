function handleRequireNodes(cardClone, project) {
  const { data, style } = project
  const { name } = data
  const { bgColorCard, bgColorProjectName } = style

  const projectNameNode = cardClone.querySelector('.works__card-title') // text, color
  const cardNode = cardClone.querySelector('.works__card') // color

  projectNameNode.textContent = name
  cardNode.style.backgroundColor = bgColorCard
  projectNameNode.style.backgroundColor = bgColorProjectName
}

export default handleRequireNodes
