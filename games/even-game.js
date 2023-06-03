import getRandomNum from "../src/random-number.js";
import startGame from "../src/index.js";

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const randomNumbers = [];

const randomNumber = () => {
  return getRandomNum(1, 20, randomNumbers);
};

const isEvenNumber = (number) => {
  const isEvenNum = number % 2 === 0;
  const correctAnswer = isEvenNum ? "yes" : "no";
  return correctAnswer;
};

const startEvenGame = () => {
  return startGame(rules, randomNumber, isEvenNumber);
};

export default startEvenGame;
