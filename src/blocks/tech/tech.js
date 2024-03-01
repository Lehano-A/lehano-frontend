import setAttrsLinkNode from "../../utils/common/setAttrsLinkNode";
import listUsedTechs from "../../utils/tech/listUsedTechs";
import logos from '../../utils/tech/logosUsedTechs'


// создать техно-карточку
function createTechCard() {
  const techGridNode = document.querySelector('.tech__grid-list')
  const templateCard = document.querySelector('#templateCardTech')


  listUsedTechs.forEach((tech) => {
    const { blockName, data } = tech

    const blockNode = techGridNode.querySelector(`#${blockName}`)

    handleDataCard(data, templateCard, blockNode)
  })
}


// обработать данные карточки
function handleDataCard(data, templateCard, blockNode) {

  data.forEach((dataTech) => {
    const { name, link, textAlt, fileNameLogo } = dataTech

    const cloneCard = templateCard.content.cloneNode(true)

    const linkNode = cloneCard.querySelector('.tech__link')
    const techNameNode = cloneCard.querySelector('.tech__card-description')
    const logoNode = createLogoNode(fileNameLogo)


    techNameNode.textContent = name
    setAttrsLinkNode(linkNode, link)
    setAttrsLogoNode(logoNode, textAlt)
    addLogoToLink(linkNode, logoNode)

    blockNode.appendChild(cloneCard)
  })
}



function createLogoNode(fileNameLogo) {
  const image = new Image()

  image.src = logos[`${fileNameLogo}Logo`]
  image.classList.add('tech__logo')

  return image
}


// установить аттрибуты для узла логотипа
function setAttrsLogoNode(logoNode, textAlt) {
  logoNode.setAttribute('alt', textAlt)
}


function addLogoToLink(linkNode, image) {
  linkNode.appendChild(image)
}


createTechCard()
