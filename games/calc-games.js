import getRandomNum from "../src/random-number.js";
import getRandomOperator from "../src/random-operator.js";
import startGame from "../src/index.js";

const rules = "What is the result of the expression?";
const randomNumbers = [];

const getExpression = () => {
  const firstOperand = getRandomNum(1, 20, randomNumbers);
  const secondOperand = getRandomNum(1, 20, randomNumbers);
  const operator = getRandomOperator();
  const expression = `${firstOperand} ${operator} ${secondOperand}`;

  return expression;
};

const getResultOfExpression = (expression) => {
  // string '3 + 2'
  const expressionArray = expression.split(" ");
  const operandA = +expressionArray[0];
  const operandB = +expressionArray[2];
  let operator = expressionArray[1];
  let result;

  if (operator === "+") {
    result = operandA + operandB;
  } else if (operator === "-") {
    result = operandA - operandB;
  } else if (operator === "*") {
    result = operandA * operandB;
  }

  return result;
};

const startCalcGame = () => {
  return startGame(rules, getExpression, getResultOfExpression);
};

export default startCalcGame;
