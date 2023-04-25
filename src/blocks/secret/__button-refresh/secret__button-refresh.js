import { blockSecret, getRandomNum } from "../../../common/common";
import { getRulesAnimationChangeRgba, optionsChangeRgba } from "../__secret-word/secret__secret-word-animation-data";
const titleSecret = blockSecret.querySelector('.section__title');
const subtitleSecret = blockSecret.querySelector('.section__subtitle');
const secretWord = blockSecret.querySelector('.secret__secret-word');
const iconSecret = blockSecret.querySelector('#secret-icon');
const buttonRefresh = blockSecret.querySelector('.secret__button-refresh');


const secretWords = [
  {
    title: 'Мата',
    icons: '🤬',
    bg: 'rgba(241, 151, 151, 1)',
  },
  {
    title: 'Общения с животными',
    icons: '🦕🦏🐊',
    bg: 'rgba(199, 242, 150, 1)',
  },
  {
    title: 'Злости и ярости',
    icons: '😠😤😡',
    bg: 'rgba(180, 80, 80, 1)',
  },
  {
    title: 'Коньяка',
    icons: '🥃',
    bg: 'rgba(223, 186, 130, 1)',
  },
  {
    title: 'Витаминов',
    icons: '🍑🍒🍓🍏🍊',
    bg: 'rgba(138, 223, 130, 1)',
  },
  {
    title: 'Сладкого',
    icons: '🍰🧁🍩🍦🍭',
    bg: 'rgba(185, 240, 237, 1)',
  },
  {
    title: 'Улиток в рационе',
    icons: '🐌',
    bg: 'rgba(247, 253, 196, 1)',
  },
  {
    title: 'Веселья',
    icons: '🎢🎉✨',
    bg: 'rgba(248, 196, 253, 1)',
  },
  {
    title: 'Игрулек',
    icons: '🎮',
    bg: 'rgba(250, 163, 246, 1)',

  },
  {
    title: 'Ультра хэви-металла',
    icons: '🤘🎸🤘',
    bg: 'rgba(182, 182, 182, 1)',
  },
]


// получить рандомный секрет
function getRandomSecret(currentTitle, randomNum) {

  randomNum = getRandomNum(secretWords.length)
  const randomWord = secretWords[randomNum].title

  if (randomWord !== currentTitle) {
    return secretWords[randomNum]
  }

  return getRandomSecret(currentTitle, randomNum)
}


buttonRefresh.addEventListener('click', () => {
  const { title, icons, bg } = getRandomSecret(titleSecret.textContent, null);
  const rulesSecretWord = getRulesAnimationChangeRgba(bg);

  titleSecret.textContent = title;
  subtitleSecret.style.backgroundColor = bg;
  iconSecret.textContent = icons;
  secretWord.textContent = title.toLowerCase();
  
  secretWord.animate(rulesSecretWord, optionsChangeRgba);
})
