import { getRandomNum } from '../random-functions.js';
import gameStarter from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
  const firstNumber = getRandomNum(1, 100);
  const secondNumber = getRandomNum(1, 100);
  const expression = `${firstNumber} ${secondNumber}`;
  let maxDevisor = firstNumber < secondNumber ? firstNumber : secondNumber;

  if (firstNumber % maxDevisor === 0 && secondNumber % maxDevisor === 0) {
    return [expression, String(maxDevisor)];
  }

  for (let i = Math.trunc(maxDevisor / 2); i > 0; i -= 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      maxDevisor = i;
      break;
    }
  }
  return [expression, String(maxDevisor)];
};

const startGcdGame = () => gameStarter(gameDescription, gcdGame);

export default startGcdGame;
