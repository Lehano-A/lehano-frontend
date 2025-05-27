export const blockHero = document.querySelector('.hero')
export const blockWorks = document.querySelector('.works')
export const blockSecret = document.querySelector('.secret')
export const blockFooter = document.querySelector('.footer')

export const regexSearchNums = /[\d]/g
export const regexAlphaRgba = /[^,]+(?=\))/

export const textTitleIconCardWork = {
  active: {
    project: 'Перейти на страницу проекта',
    githubRepo: 'Перейти в репозиторий проекта',
  },

  inactive: {
    project: 'Нет возможности перейти на страницу проекта',
    githubRepo: 'Нет возможности перейти в репозиторий',
  },
}

export const textAltIconCardWork = {
  active: {
    project: 'Иконка перехода на внешнюю страницу',
    githubRepo: 'Иконка с логотипом GitHub',
  },

  inactive: {
    project: 'Неактивная иконка перехода на внешнюю страницу',
    githubRepo: 'Неактивная иконка с логотипом GitHub',
  },
}
