import setAttrsLinkNode from "../../utils/common/setAttrsLinkNode";
import listUsedTechs from "../../utils/techs/listUsedTechs";


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
    const logoNode = cloneCard.querySelector('.tech__logo')
    const techNameNode = cloneCard.querySelector('.tech__card-description')


    techNameNode.textContent = name
    setAttrsLinkNode(linkNode, link)
    setAttrsLogoNode(logoNode, textAlt, fileNameLogo)


    blockNode.appendChild(cloneCard)
  })
}


// установить аттрибуты для узла логотипа
function setAttrsLogoNode(logoNode, textAlt, fileNameLogo) {
  logoNode.setAttribute('alt', textAlt)
  logoNode.setAttribute('src', `src/images/tech-card-logos/${fileNameLogo}.svg`)
}



createTechCard()
