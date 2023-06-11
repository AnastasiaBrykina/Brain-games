import { getRandomNum } from '../random-functions.js';
import gameStarter from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const primeGame = () => {
  const randomNumber = getRandomNum(2, 20);

  for (let i = Math.trunc(randomNumber / 2); i >= 2; i -= 1) {
    if (randomNumber % i === 0) {
      return [randomNumber, 'no'];
    }
  }

  return [randomNumber, 'yes'];
};

const startPrimeGame = () => gameStarter(gameDescription, primeGame);

export default startPrimeGame;
