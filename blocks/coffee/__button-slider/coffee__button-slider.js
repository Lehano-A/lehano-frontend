const slider = document.querySelector('.coffee__button-slider')
const imageAfter = document.querySelector('.coffee__image-after')
const imageAfterBox = document.querySelector(".coffee__image-after-box");

const textEnd = document.querySelector(".coffee__slider-text-end");
const textStart = document.querySelector(".coffee__slider-text-start");

slider.addEventListener("input", () => {
  imageAfter.style.transform = `translateX(${-slider.value}%)`;
  imageAfterBox.style.transform = `translateX(${slider.value}%)`;

  textEnd.style.backgroundColor = `rgba(255, 76, 69, ${slider.value * 0.01})`;
  textStart.style.backgroundColor = `rgba(110, 238, 153, ${1 - (slider.value * 0.01)})`;
});



