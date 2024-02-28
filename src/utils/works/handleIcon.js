import { textAltIconCardWork, textTitleIconCardWork } from "../constants"


function handleIcon(iconNode, activity, keyElementHandledLink) {

  const textTitle = textTitleIconCardWork[activity][keyElementHandledLink]
  const textAlt = textAltIconCardWork[activity][keyElementHandledLink]


  if (activity === 'inactive') {
    iconNode.classList.add('works__icon-link_inactive')
  }

  iconNode.setAttribute('title', textTitle)
  iconNode.setAttribute('alt', textAlt)
}


export default handleIcon