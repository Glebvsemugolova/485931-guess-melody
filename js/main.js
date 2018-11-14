'use strict';

const RIGHT_ARROW = 37;
const LEFT_ARROW = 39;
const arrowsVisual = `
    <style>
      .arrows__wrap {
        position: absolute;
        top: 135px;
        left: 50%;
        margin-left: -56px;
      }
      .arrows__btn {
        background: none;
        border: 2px solid black;
        padding: 5px 20px;
      }
    </style>
    <button class="arrows__btn arrows__btn--left"><-</button>
    <button class="arrows__btn arrows__btn--right">-></button>
`;

const mainElement = document.querySelector(`section.main`);
const appElement = document.querySelector(`.app`);
const screens = Array.from(document.querySelectorAll(`template`));

const selectSlide = (number) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(screens[number].content.cloneNode(true));
};

let current = 0;
const select = (index) => {
  index = index < 0 ? screens.length - 1 : index;
  index = index >= screens.length ? 0 : index;
  current = index;
  selectSlide(current);
};

document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case RIGHT_ARROW:
      select(current + 1);
      break;
    case LEFT_ARROW:
      select(current - 1);
      break;
  }
});

select(0);

const arrowBlock = document.createElement(`div`);
arrowBlock.innerHTML = arrowsVisual;
arrowBlock.setAttribute(`class`, `arrows__wrap`);
appElement.appendChild(arrowBlock);

const leftArrowVisual = document.querySelector(`.arrows__btn--left`);
const rightArrowVisual = document.querySelector(`.arrows__btn--right`);

document.addEventListener(`click`, (evt) => {
  switch (evt.target) {
    case leftArrowVisual:
      select(current + 1);
      break;
    case rightArrowVisual:
      select(current - 1);
      break;
  }
});
