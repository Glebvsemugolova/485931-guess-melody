import {changeScreen, render} from './util';
import {welcomeScreen} from "./welcome";

const failTriesTemplate = `
  <section class="result">
    <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">Какая жалость!</h2>
    <p class="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
    <button class="result__replay" type="button">Попробовать ещё раз</button>
  </section>
`;

export const failTriesScreen = render(failTriesTemplate);

const resultReplayBtn = failTriesScreen.querySelector(`.result__replay`);

resultReplayBtn.addEventListener(`click`, () => {
  changeScreen(welcomeScreen);
});
