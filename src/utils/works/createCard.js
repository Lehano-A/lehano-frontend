import { handleLinks } from "./handleLink"
import handleFeatures from "./handleFeatures"
import handleProjectType from "./handleProjectType"
import handleRequireNodes from "./handleRequireNodes"
import handleUsedTechs from "./handleUsedTechs"
import handleGridColumn from "./handleGridColumn"


function createCard(project) {
  const templateCard = document.querySelector('#templateCardWork')
  const cardClone = templateCard.content.cloneNode(true)

  const { data, links, style } = project
  const { type, usedTechs, features } = data

  handleRequireNodes(cardClone, project)
  handleGridColumn(cardClone, style)
  handleProjectType(cardClone, type)
  handleUsedTechs(cardClone, usedTechs)
  handleFeatures(cardClone, features)
  handleLinks(cardClone, links)

  if (!type && !usedTechs && !features) {
    const mainBoxDescriptionCardNode = cardClone.querySelector('.works__card-description')
    mainBoxDescriptionCardNode.remove()
  }

  return cardClone
}


export default createCard