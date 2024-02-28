import { handleLinks } from "./handleLink"
import handleFeatures from "./handleFeatures"
import handleProjectType from "./handleProjectType"
import handleRequireNodes from "./handleRequireNodes"
import handleUsedTechs from "./handleUsedTechs"


function createCard(project) {
  const templateCard = document.querySelector('#templateCardWork')
  const cardClone = templateCard.content.cloneNode(true)
  const itemListNode = cardClone.querySelector('.works__grid-item')

  const { data, links, style } = project
  const { type, usedTechs, features } = data
  const { columns } = style

  handleRequireNodes(cardClone, project)
  handleProjectType(cardClone, type)
  handleUsedTechs(cardClone, type)
  handleFeatures(cardClone, features)
  handleLinks(cardClone, links)


  if (!type && !usedTechs && !features) {
    const mainBoxDescriptionCardNode = cardClone.querySelector('.works__card-description')
    mainBoxDescriptionCardNode.remove()
  }

  if (columns) {
    itemListNode.classList.add(columns)
  }


  return cardClone
}


export default createCard