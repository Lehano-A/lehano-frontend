function getBgColorProjectName(alpha = 0.6) {
  return `rgba(255, 255, 255, ${alpha})`
}

const petProjects = [
  {
    data: {
      name: 'В процессе разработки',
    },

    links: {
      project: '',
      githubRepo: '',
    },

    style: {
      bgColorCard: '#ececec',
      bgColorProjectName: getBgColorProjectName(0.8),
      gridColumn: '1',
    },
  },

  {
    data: {
      name: 'ФИН Контроль',
      type: 'spa',
      usedTechs: 'React / TypeScript / styled-components',
      features: 'frontend',
    },

    links: {
      project: 'https://lehano-a.github.io/financial-control-test-work/',
      githubRepo: 'https://github.com/Lehano-A/financial-control-test-work',
    },

    style: {
      bgColorCard: '#609efc',
      bgColorProjectName: getBgColorProjectName(),
      gridColumn: '1',
    },
  },

  {
    data: {
      name: 'Yamaguchi',
      type: 'sections',
      usedTechs: 'HTML / CSS / JavaScript ',
      features: 'frontend',
    },

    links: {
      project: 'https://lehano-a.github.io/yamaguchi-test-work/',
      githubRepo: 'https://github.com/Lehano-A/yamaguchi-test-work',
    },

    style: {
      bgColorCard: '#e03638',
      bgColorProjectName: getBgColorProjectName(),
      gridColumn: '1',
    },
  },

  {
    data: {
      name: 'toodoo',
      type: 'spa',
      usedTechs: 'React / TypeScript/ Redux ',
      features: 'frontend',
    },

    links: {
      project: 'https://toodoo.lehano.ru/',
      githubRepo: 'https://github.com/Lehano-A/toodoo',
    },

    style: {
      bgColorCard: '#fdddc0',
      bgColorProjectName: getBgColorProjectName(),
      gridColumn: '1',
    },
  },

  {
    data: {
      name: 'Pascal Vent',
      type: 'landing page',
      usedTechs: 'React / SCSS / TypeScript',
      features: 'frontend',
    },

    links: {
      project: 'https://pascal-vent.lehano.ru/',
      githubRepo: 'https://github.com/Lehano-A/pascal-vent',
    },

    style: {
      bgColorCard: '#bdecb6',
      bgColorProjectName: getBgColorProjectName(),
      gridColumn: '1',
    },
  },

  {
    data: {
      name: 'Сервис - trackerman',
      type: 'spa',
      usedTechs: 'React / Redux / styled-components',
      features: 'frontend',
    },

    links: {
      project: '',
      githubRepo: 'https://github.com/Lehano-A/trackerman-frontend',
    },

    style: {
      bgColorCard: '#e5aee4',
      bgColorProjectName: getBgColorProjectName(),
      gridColumn: '1',
    },
  },

  {
    data: {
      name: 'Сервис - trackerman',
      type: '',
      usedTechs: 'JavaScript / Mongoose / Express ',
      features: 'backend',
    },

    links: {
      project: '',
      githubRepo: '',
    },

    style: {
      bgColorCard: '#e5aee4',
      bgColorProjectName: getBgColorProjectName(),
      gridColumn: '2 / span 2',
    },
  },

  {
    data: {
      name: 'Калькулятор доходности',
      type: 'spa',
      usedTechs: 'React / styled-components',
      features: 'frontend',
    },

    links: {
      project: 'https://profitcalc.lehano.ru',
      githubRepo: 'https://github.com/Lehano-A/profitability_calculator',
    },

    style: {
      bgColorCard: '#fee5ac',
      bgColorProjectName: getBgColorProjectName(0.8),
      gridColumn: '1',
    },
  },

  {
    data: {
      name: 'Сервис - чтояем.рф',
      type: 'spa',
      usedTechs: 'React / styled-components / MUI',
      features: 'frontend',
    },

    links: {
      project: 'https://чтояем.рф',
      githubRepo: 'https://github.com/Lehano-A/cye-frontend',
    },

    style: {
      bgColorCard: '#a4b5e6',
      bgColorProjectName: getBgColorProjectName(0.5),
      gridColumn: '1',
    },
  },

  {
    data: {
      name: 'Сервис - чтояем.рф',
      type: '',
      usedTechs: 'JavaScript / Mongoose / Express ',
      features: 'backend',
    },

    links: {
      project: '',
      githubRepo: '',
    },

    style: {
      bgColorCard: '#a4b5e6',
      bgColorProjectName: getBgColorProjectName(0.5),
      gridColumn: '2 / span 2',
    },
  },

  {
    data: {
      name: 'Портфолио - lehano.ru',
      type: 'long page',
      usedTechs: 'HTML / CSS / JavaScript',
      features: 'frontend',
    },

    links: {
      project: null,
      githubRepo: 'https://github.com/Lehano-A/lehano-frontend',
    },

    style: {
      bgColorCard: '#afeeee',
      bgColorProjectName: getBgColorProjectName(),
      gridColumn: '1',
    },
  },
]

const educationalProjects = [
  {
    data: {
      name: 'Сервис - Movies Explorer',
      type: 'spa',
      usedTechs: 'React / CSS',
      features: 'frontend',
    },

    links: {
      project: 'https://diplom.lehano.ru',
      githubRepo: 'https://github.com/Lehano-A/movies-explorer-frontend',
    },

    style: {
      bgColorCard: '#9aceeb',
      bgColorProjectName: getBgColorProjectName(),
      gridColumn: '1',
    },
  },

  {
    data: {
      name: 'Сервис - Movies Explorer',
      type: '',
      usedTechs: 'JavaScript / Mongoose / Express',
      features: 'backend',
    },

    links: {
      project: '',
      githubRepo: 'https://github.com/Lehano-A/movies-explorer-backend',
    },

    style: {
      bgColorCard: '#9aceeb',
      bgColorProjectName: getBgColorProjectName(),
      gridColumn: '2 / span 2',
    },
  },

  {
    data: {
      name: 'Мини-соцсеть "Mesto"',
      type: 'spa',
      usedTechs: 'React / CSS',
      features: 'frontend',
    },

    links: {
      project: 'https://mesto-react.lehano.ru',
      githubRepo: 'https://github.com/Lehano-A/react-mesto-api-full',
    },

    style: {
      bgColorCard: '#c997f5',
      bgColorProjectName: getBgColorProjectName(),
      gridColumn: '1',
    },
  },

  {
    data: {
      name: 'Мини-соцсеть "Mesto"',
      type: '',
      usedTechs: 'JavaScript / Mongoose / Express',
      features: 'backend',
    },

    links: {
      project: '',
      githubRepo: 'https://github.com/Lehano-A/react-mesto-api-full',
    },

    style: {
      bgColorCard: '#c997f5',
      bgColorProjectName: getBgColorProjectName(),
    },
  },

  {
    data: {
      name: 'Мини-соцсеть "Mesto"',
      type: 'spa',
      usedTechs: 'HTML / CSS / JavaScript',
      features: 'frontend (классы)',
    },

    links: {
      project: 'https://mesto-classes.lehano.ru',
      githubRepo: 'https://github.com/Lehano-A/mesto',
    },

    style: {
      bgColorCard: '#c997f5',
      bgColorProjectName: getBgColorProjectName(),
    },
  },

  {
    data: {
      name: 'Путешествия по России',
      type: 'long page',
      usedTechs: 'HTML / CSS',
      features: 'frontend',
    },

    links: {
      project: 'https://lehano-a.github.io/russian-travel/index.html',
      githubRepo: 'https://github.com/Lehano-A/russian-travel',
    },

    style: {
      bgColorCard: '#fce883',
      bgColorProjectName: getBgColorProjectName(0.7),
    },
  },

  {
    data: {
      name: 'Как учиться',
      type: 'long page',
      usedTechs: 'HTML / CSS',
      features: 'frontend',
    },

    links: {
      project: 'https://lehano-a.github.io/how-to-learn/',
      githubRepo: 'https://github.com/Lehano-A/how-to-learn',
    },

    style: {
      bgColorCard: '#3eb489',
      bgColorProjectName: getBgColorProjectName(),
    },
  },

  {
    data: {
      name: 'Куда я поеду',
      type: 'long page',
      usedTechs: 'HTML / CSS',
      features: 'коллаборация',
    },

    links: {
      project: 'https://lehano-a.github.io/kuda-ya-poedu/',
      githubRepo: 'https://github.com/Lehano-A/kuda-ya-poedu',
    },

    style: {
      bgColorCard: '#fadadd',
      bgColorProjectName: getBgColorProjectName(0.7),
    },
  },
]

export { petProjects, educationalProjects }
