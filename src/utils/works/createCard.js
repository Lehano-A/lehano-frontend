import { handleLinks } from "./handleLink"
import handleFeatures from "./handleFeatures"
import handleProjectType from "./handleProjectType"
import handleRequireNodes from "./handleRequireNodes"
import handleUsedTechs from "./handleUsedTechs"
import handleGridColumn from "./handleGridColumn"


function createCard(project) {
  const templateCard = document.querySelector('#templateCardWork')
  const cardClone = templateCard.content.cloneNode(true)
  const boxDescription = cardClone.querySelector('.works__card-description')

  const { data, links, style } = project
  const { type, usedTechs, features } = data

  handleRequireNodes(cardClone, project)
  handleGridColumn(cardClone, style)
  handleProjectType(cardClone, type)
  handleUsedTechs(cardClone, usedTechs)
  handleFeatures(cardClone, features)
  handleLinks(cardClone, links)

  if (!type) {

    if (!usedTechs && !features) {
      boxDescription.remove()
      return cardClone
    }

    boxDescription.classList.remove('jc_space-between')
    boxDescription.classList.add('jc_flex-end')
  }

  return cardClone
}

export default createCard