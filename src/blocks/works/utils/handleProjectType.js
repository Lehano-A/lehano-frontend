function handleProjectType(cardClone, type) {
  const projectTypeNode = cardClone.querySelector('.works__card-description-type') // text

  if (type) {
    // одностраничное приложение, одностраничный сайт...
    projectTypeNode.textContent = type
  } else {
    projectTypeNode.remove()
  }
}

export default handleProjectType
