function handleRequireNodes(cardClone, project) {

  const { data, style } = project
  const { name } = data
  const { cardColor, projectNameColor } = style

  const projectNameNode = cardClone.querySelector('.works__card-title') // text, color
  const cardNode = cardClone.querySelector('.works__card') // color


  projectNameNode.textContent = name

  cardNode.classList.add(`works__card_color_${cardColor}`)
  projectNameNode.classList.add(`works__card-title_color_${projectNameColor}`)
}


export default handleRequireNodes