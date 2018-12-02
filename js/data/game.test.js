import {assert} from 'chai';
import {getPointsScored, outputResult} from './game.js';

const playerScored10Points = [
  {answer: true, time: 30},
  {answer: true, time: 30},
  {answer: true, time: 30},
  {answer: true, time: 30},
  {answer: true, time: 30},
  {answer: true, time: 30},
  {answer: true, time: 30},
  {answer: true, time: 30},
  {answer: true, time: 30},
  {answer: true, time: 30}
];
const playerLost = [
  {answer: false, time: 30},
  {answer: false, time: 30},
  {answer: false, time: 30}
];
const playerScoredMore10Points = [
  {answer: true, time: 30},
  {answer: true, time: 30},
  {answer: true, time: 20},
  {answer: true, time: 10},
  {answer: true, time: 14},
  {answer: true, time: 34},
  {answer: true, time: 12},
  {answer: true, time: 30},
  {answer: true, time: 30},
  {answer: true, time: 30}
];

const timeLost = {
  scoredPoints: 10,
  notes: 2,
  timeLeft: 0
};
const notesLost = {
  scoredPoints: 10,
  notes: 0,
  timeLeft: 10
};

const normalGame = {
  scoredPoints: 13,
  notes: 2,
  timeLeft: 10
};

const resultOfAnotherPlayersLocal = [4, 5, 8, 12, 14];


describe(`Проверка функции подсчета очков`, () => {
  it(`Должна вернуть 10, если есть ответы на все вопросы и они не быстрые`, () => {
    assert.equal(getPointsScored(playerScored10Points), 10);
  });
  it(`Должна вернуть -1, если игрок не ответил на все 10 вопросов`, () => {
    assert.equal(getPointsScored(playerLost), -1);
  });
  it(`Должна вернуть больше 10, если игрок хороший меломан`, () => {
    assert(getPointsScored(playerScoredMore10Points) > 10);
  });
});

describe(`Проверка функции вывода результата игрока`, () => {
  it(`Проверка, что вышло все время`, () => {
    assert.equal(outputResult(resultOfAnotherPlayersLocal, timeLost), `Время вышло! Вы не успели отгадать все мелодии`);
  });
  it(`Проверка, что закончились все жизни`, () => {
    assert.equal(outputResult(resultOfAnotherPlayersLocal, notesLost), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });
  it(`Проверка правильного подсчета места в статистике`, () => {
    assert.equal(outputResult(resultOfAnotherPlayersLocal, normalGame), `Вы заняли 2 место из 6 игроков. Это лучше, чем у 67% игроков`);
  });
});
