import { petProjects, educationalProjects } from './listWorks'
import createCard from '../../utils/works/createCard'

function createCardsWorks(idParentBox, projects) {
  const boxWorks = document.querySelector(idParentBox)

  projects.forEach((project) => {
    const newCard = createCard(project, boxWorks)
    boxWorks.appendChild(newCard)
  })
}

createCardsWorks('#pet', petProjects)
createCardsWorks('#education', educationalProjects)
