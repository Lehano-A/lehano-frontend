function handleFeatures(cardClone, features) {
  const optionsNode = cardClone.querySelector('.works__card-description-option') // text

  if (features) {
    // frontend, backend, коллаборация, классы...
    optionsNode.textContent = features
  } else {
    optionsNode.remove()
  }
}

export default handleFeatures
