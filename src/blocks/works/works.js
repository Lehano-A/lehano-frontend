import { educationalWorks } from './dataWorks/educationalWorks'
import { petWorks } from './dataWorks/petWorks'
import { testWorks } from './dataWorks/testWorks'
import createCard from './utils/createCard'

function createCardsWorks(idParentBox, projects) {
  const boxWorks = document.querySelector(idParentBox)

  projects.forEach((project) => {
    const newCard = createCard(project, boxWorks)
    boxWorks.appendChild(newCard)
  })
}

createCardsWorks('#test', testWorks)
createCardsWorks('#pet', petWorks)
createCardsWorks('#education', educationalWorks)
