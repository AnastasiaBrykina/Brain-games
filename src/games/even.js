import { getRandomNum } from '../random-functions.js';
import gameStarter from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = () => {
  const randomNumber = getRandomNum(1, 30);
  const isEvenNum = randomNumber % 2 === 0 ? 'yes' : 'no';

  return [randomNumber, isEvenNum];
};

const startEvenGame = () => gameStarter(gameDescription, evenGame);

export default startEvenGame;
