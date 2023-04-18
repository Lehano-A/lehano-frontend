import { blockSecret } from "../../../common/common";

const buttonRefresh = blockSecret.querySelector('.secret__button-refresh');

const secretWords = [
  {
    title: 'Мата',
    icons: '🤬',
    bg: '#f19797',
  },
  {
    title: 'Общения с животными',
    icons: '🦕🦏🐊',
    bg: '#c7f197',
  },
  {
    title: 'Злости и ярости',
    icons: '😠😤😡',
    bg: '#b45050',
  },
  {
    title: 'Коньяка',
    icons: '🥃',
    bg: '#dfba82',
  },
  {
    title: 'Витаминов',
    icons: '🍑🍒🍓🍏🍊',
    bg: '#8adf82',
  },
  {
    title: 'Сладкого',
    icons: '🍰🧁🍩🍦🍭',
    bg: '#b9f0ed',
  },
  {
    title: 'Улиток в рационе',
    icons: '🐌',
    bg: '#f7fdc4',
  },
  {
    title: 'Веселья',
    icons: '🎢🎉✨',
    bg: '#f8c4fd',
  },
  {
    title: 'Игрулек',
    icons: '🎮',
    bg: '#f2c4fd',

  },
  {
    title: 'Ультра хэви-металла',
    icons: '🤘🎸🤘',
    bg: '#b6b6b6',
  },
]


buttonRefresh.addEventListener('click', () => {
  const currentTitle = blockSecret.querySelector('.section__title');
  const currentSubtitle = blockSecret.querySelector('.section__subtitle');
  const secretWord = blockSecret.querySelector('#secret-word');
  const iconSecret = blockSecret.querySelector('#secret-icon');


  const { title, icons, bg } = getRandomSecret(currentTitle.textContent, null)

  currentTitle.textContent = title;
  secretWord.textContent = title.toLowerCase();
  iconSecret.textContent = icons;
  currentSubtitle.style.backgroundColor = bg;
})


// получить рандомный секрет
function getRandomSecret(currentTitle, randomNum) {

  randomNum = getRandomNum(secretWords.length - 1)
  const randomWord = secretWords[randomNum].title

  if (randomWord !== currentTitle) {
    return secretWords[randomNum]
  }

  return getRandomSecret(currentTitle, randomNum)
}



// получить рандомное число в пределах аргумента
function getRandomNum(num) {
  return Math.floor(Math.random() * num)
}