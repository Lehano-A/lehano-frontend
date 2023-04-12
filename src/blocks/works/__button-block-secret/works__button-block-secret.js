const blockWorks = document.querySelector('.works');
const blockSecret = document.querySelector('.secret');
const blockFooter = document.querySelector('.footer');
const buttonBlockSecret = blockWorks.querySelector('.works__button-block-secret');

let isAnimating = false;

buttonBlockSecret.addEventListener('click', () => {

  if (!isAnimating && !blockFooter.classList.contains('footer_animation_off') &&
    !blockFooter.classList.contains('footer_animation_on')) {
    isAnimating = true;

    blockFooter.classList.add('footer_animation_on')
    blockSecret.classList.add('secret_animation_on')
    buttonBlockSecret.classList.add('works__button-block-secret_rotate-icon_180')
    setTimerAnimating()
    return
  }


  if (!isAnimating && blockFooter.classList.contains('footer_animation_off')) {
    isAnimating = true;

    blockFooter.classList.replace('footer_animation_off', 'footer_animation_on')
    blockSecret.classList.replace('secret_animation_off', 'secret_animation_on')
    buttonBlockSecret.classList.replace('works__button-block-secret_rotate-icon_360', 'works__button-block-secret_rotate-icon_180')

    setTimerAnimating()
    return
  }


  if (!isAnimating && blockFooter.classList.contains('footer_animation_on')) {
    isAnimating = true;

    blockFooter.classList.replace('footer_animation_on', 'footer_animation_off')
    blockSecret.classList.replace('secret_animation_on', 'secret_animation_off')
    buttonBlockSecret.classList.replace('works__button-block-secret_rotate-icon_180', 'works__button-block-secret_rotate-icon_360')

    setTimerAnimating()
    return
  }

})

function setTimerAnimating() {
  setTimeout(() => {
    isAnimating = false;
  }, 700);
}

export { blockSecret };