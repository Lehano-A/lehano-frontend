const langs = [
  {
    name: 'HTML',
    link: 'https://developer.mozilla.org/ru/docs/Web/HTML',
    textAlt: 'Логотип языка разметки "HTML"',
    fileNameLogo: 'html5'
  },

  {
    name: 'CSS',
    link: 'https://developer.mozilla.org/ru/docs/Web/CSS',
    textAlt: 'Логотип языка стилей "CSS"',
    fileNameLogo: 'css3'
  },

  {
    name: 'JavaScript',
    link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript',
    textAlt: 'Логотип языка программирования "JavaScript"',
    fileNameLogo: 'javaScript'
  },

  {
    name: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
    textAlt: 'Логотип языка программирования "TypeScript"',
    fileNameLogo: 'typeScript'
  }
]



const ui = [
  {
    name: 'React',
    link: 'https://react.dev',
    textAlt: 'Логотип frontend-фреймворка "React"',
    fileNameLogo: 'react'
  },
  {
    name: 'mui',
    link: 'https://mui.com',
    textAlt: 'Логотип библиотеки пользовательского интерфейса - Material UI',
    fileNameLogo: 'mui',
  },
  {
    name: 'SCSS',
    link: 'https://sass-lang.com/',
    textAlt: 'Логотип препроцессора "scss"',
    fileNameLogo: 'scss'
  },
]


const frameworks = [
  {
    name: 'express',
    link: 'https://expressjs.com',
    textAlt: 'Логотип backend-фреймворка "express"',
    fileNameLogo: 'express',
  },
]


const dataBases = [
  {
    name: 'mongoDB',
    link: 'https://www.mongodb.com',
    textAlt: 'Логотип базы данных "mongoDB"',
    fileNameLogo: 'mongodb'
  }
]


const instruments = [
  {
    name: 'Node.js',
    link: 'https://nodejs.org/en/docs',
    textAlt: 'Логотип среды выполнения "Node.js" для языка программирования JavaScript на стороне backend',
    fileNameLogo: 'nodejs'
  },

  {
    name: 'GitBash',
    link: 'https://gitforwindows.org',
    textAlt: 'Логотип терминала "GitBash" для операционной системы Windows',
    fileNameLogo: 'gitbash'
  },

  {
    name: 'GitHub',
    link: 'https://github.com/Lehano-A',
    textAlt: 'Логотип сервиса контроля версий кода "GitHub"',
    fileNameLogo: 'github'
  },

  {
    name: 'styled components',
    link: 'https://styled-components.com',
    textAlt: 'Логотип CSS-библиотеки "styled elements" для React',
    fileNameLogo: 'styledComponents'
  },

  {
    name: 'npm',
    link: 'https://www.npmjs.com',
    textAlt: 'Логотип менеджера пакетов "NPM" для Node.js',
    fileNameLogo: 'npm'
  },

  {
    name: 'Postman',
    link: 'https://www.postman.com',
    textAlt: 'Логотип инструмента разработки API - Postman',
    fileNameLogo: 'postman'
  },

  {
    name: 'Figma',
    link: 'https://www.figma.com',
    textAlt: 'Логотип графического инструмента Figma',
    fileNameLogo: 'figma'
  },

  {
    name: 'mongoose',
    link: 'https://mongoosejs.com',
    textAlt: 'Логотип библиотеки "Mongoose" для работы с базой данных mongoDB',
    fileNameLogo: 'mongoose'
  },

  {
    name: 'nginx',
    link: 'https://nginx.org',
    textAlt: 'Логотип прокси-сервера "nginx"',
    fileNameLogo: 'nginx'
  },

  {
    name: 'Visual Studio Code',
    link: 'https://code.visualstudio.com',
    textAlt: 'Логотип редактора программного обеспечения "Visual Studio Code"',
    fileNameLogo: 'vscode'
  },

  {
    name: 'БЭМ',
    link: 'https://ru.bem.info',
    textAlt: 'Логотип методологии "БЭМ"',
    fileNameLogo: 'bem'
  },

  {
    name: 'Webpack',
    link: 'https://webpack.js.org',
    textAlt: 'Логотип инструмента сборки проектов - "webpack"',
    fileNameLogo: 'webpack'
  },

  {
    name: 'Vite',
    link: 'https://vite.dev/',
    textAlt: 'Логотип инструмента сборки проектов - "vite"',
    fileNameLogo: 'vite'
  },

  {
    name: 'Redux',
    link: 'https://redux.js.org',
    textAlt: 'Логотип библиотеки для управления состоянием приложения - "Redux"',
    fileNameLogo: 'redux'
  },

  {
    name: 'React Router',
    link: 'https://reactrouter.com/en/main',
    textAlt: 'Логотип библиотеки для создания навигации приложения - "React Router"',
    fileNameLogo: 'reactRouter'
  },

  {
    name: 'JWT',
    link: 'https://jwt.io/',
    textAlt: 'Логотип библиотеки для генерации токена - "JWT"',
    fileNameLogo: 'jwt'
  },

  {
    name: 'Husky',
    link: 'https://typicode.github.io/husky',
    textAlt: 'Логотип библиотеки для более гибкого использования git - "Husky"',
    fileNameLogo: 'husky'
  },
]


const graphics = [
  {
    name: 'Photoshop',
    link: 'https://www.adobe.com/ru/products/photoshop.html',
    textAlt: 'Логотип многофункционального графического редактора - "Photoshop"',
    fileNameLogo: 'photoshop'
  },

  {
    name: 'Illustrator',
    link: 'https://www.adobe.com/ru/products/illustrator.html',
    textAlt: 'Логотип программы "Illustrator" для создания векторной графики',
    fileNameLogo: 'illustrator'
  },

  {
    name: 'After Effects',
    link: 'https://www.adobe.com/ru/products/aftereffects.html',
    textAlt: 'Логотип программы "After Effects" для создания анимационной графики и визуальных эффектов',
    fileNameLogo: 'afterEffects'
  },
]


const listUsedTechs = [
  { blockName: 'langs', data: langs },
  { blockName: 'ui', data: ui },
  { blockName: 'frameworks', data: frameworks },
  { blockName: 'dataBases', data: dataBases },
  { blockName: 'instruments', data: instruments },
  { blockName: 'graphics', data: graphics },
]



export default listUsedTechs