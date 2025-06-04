import { getBgColorProjectName } from '../utils/getBgColorProjectName'

export const petWorks = [
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
