const blockWorks = document.querySelector('.works');
const blockCoffee = document.querySelector('.coffee');
const blockFooter = document.querySelector('.footer');
const buttonBlockCoffee = blockWorks.querySelector('.works__button-block-coffee');

let isAnimating = false;

buttonBlockCoffee.addEventListener('click', () => {

  if (!isAnimating && !blockFooter.classList.contains('footer_animation_off') &&
    !blockFooter.classList.contains('footer_animation_on')) {
    isAnimating = true;

    blockFooter.classList.add('footer_animation_on')
    blockCoffee.classList.add('coffee_animation_on')
    buttonBlockCoffee.classList.add('works__button-block-coffee_rotate-icon_180')
    setTimerAnimating()
    return
  }


  if (!isAnimating && blockFooter.classList.contains('footer_animation_off')) {
    isAnimating = true;

    blockFooter.classList.replace('footer_animation_off', 'footer_animation_on')
    blockCoffee.classList.replace('coffee_animation_off', 'coffee_animation_on')
    buttonBlockCoffee.classList.replace('works__button-block-coffee_rotate-icon_360', 'works__button-block-coffee_rotate-icon_180')

    setTimerAnimating()
    return
  }


  if (!isAnimating && blockFooter.classList.contains('footer_animation_on')) {
    isAnimating = true;

    blockFooter.classList.replace('footer_animation_on', 'footer_animation_off')
    blockCoffee.classList.replace('coffee_animation_on', 'coffee_animation_off')
    buttonBlockCoffee.classList.replace('works__button-block-coffee_rotate-icon_180', 'works__button-block-coffee_rotate-icon_360')

    setTimerAnimating()
    return
  }

})

function setTimerAnimating() {
  setTimeout(() => {
    isAnimating = false;
  }, 700);
}