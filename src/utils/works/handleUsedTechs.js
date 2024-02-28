function handleUsedTechs(cardClone, usedTechs ) {

  const boxTechNode = cardClone.querySelector('.works__card-description-tech-box') // text
  const techNode = cardClone.querySelector('.works__card-description-tech') // text

  if (usedTechs) { // используемые технологии
    techNode.textContent = usedTechs
  } else {
    boxTechNode.remove()
  }
}


export default handleUsedTechs