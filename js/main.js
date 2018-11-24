import {changeScreen} from './util';
import {welcomeScreen} from './welcome';
import {gameGenreScreen} from './game-genre';
import {gameArtistScreen} from './game-artist';
import {resultSuccessScreen} from './result-success';

changeScreen(welcomeScreen);

const playButton = document.querySelector(`.welcome__button`);

playButton.addEventListener(`click`, () => {
  changeScreen(gameGenreScreen);
  const submitBtn = document.querySelector(`.game__submit`);
  const gameGenreForm = document.querySelectorAll(`.game__tracks`);

  submitBtn.setAttribute(`disabled`, `true`);

  gameGenreForm.addEventListener(`click`, () => {
    if (document.querySelector(`input[name='answer']:checked`)) {
      submitBtn.setAttribute(`disabled`, `false`);
    }
  });


  submitBtn.addEventListener(`click`, function (evt) {
    evt.preventDefault();
    changeScreen(gameArtistScreen);
    const gameArtistButton = document.querySelector(`.game__artist`);

    gameArtistButton.addEventListener(`click`, () => {
      changeScreen(resultSuccessScreen);
    });
  });
});


