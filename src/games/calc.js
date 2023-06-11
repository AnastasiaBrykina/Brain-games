import {
  getRandomNum,
  plus,
  minus,
  multi,
  getRandomOperator,
} from '../random-functions.js';
import gameStarter from '../index.js';

const gameDescription = 'What is the result of the expression?';

const calcGame = () => {
  const firstOperand = getRandomNum(1, 20);
  const secondOperand = getRandomNum(1, 20);
  const operator = getRandomOperator();
  const expression = `${firstOperand} ${operator} ${secondOperand}`;
  let result;

  switch (operator) {
    case plus:
      result = firstOperand + secondOperand;
      break;
    case minus:
      result = firstOperand - secondOperand;
      break;
    case multi:
      result = firstOperand * secondOperand;
      break;
    default:
      result = 'Unknown operation';
  }

  return [expression, String(result)];
};

const startCalcGame = () => gameStarter(gameDescription, calcGame);

export default startCalcGame;
