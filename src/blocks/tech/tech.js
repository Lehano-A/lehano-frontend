import setAttrsLinkNode from "../../utils/common/setAttrsLinkNode";
import listUsedTechs from "./listUsedTechs";
import logos from './logosUsedTechs'


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
    techNameNode.textContent = name

    const logoSource = logos[`${fileNameLogo}Logo`]

    // если нет пути к логотипу, значит логотоип - не файл
    if (logoSource.path === null) {
      linkNode.textContent = logoSource.icon
    } else { // иначе, создаём узел изображения

      const logoNode = createLogoNode(logoSource)
      setAttrsLogoNode(logoNode, textAlt)
      addLogoToLink(linkNode, logoNode)
    }

    setAttrsLinkNode(linkNode, link)
    blockNode.appendChild(cloneCard)
  })
}


// создать узел для логотипа
function createLogoNode(logoPath) {
  const image = new Image()
  image.src = logoPath
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
