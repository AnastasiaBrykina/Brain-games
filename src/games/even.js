import { getRandomNum } from '../random-functions.js';
import gameStarter from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNum = (num) => num % 2 === 0;

const evenGame = () => {
  const randomNumber = getRandomNum(1, 30);
  const evenNum = isEvenNum(randomNumber) ? 'yes' : 'no';

  return [randomNumber, evenNum];
};

const startEvenGame = () => gameStarter(gameDescription, evenGame);

export default startEvenGame;
