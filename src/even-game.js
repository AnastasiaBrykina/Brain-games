import readlineSync from 'readline-sync';
import greeatingUser from './greeting.js';

console.log('Welcome to the Brain Games!');

const userName = greeatingUser();
console.log(`Hello, ${userName}!`);

const getRandomNum = (min, max, array) => {
  while (true) {
    const number = Math.trunc(Math.random() * (max + 1 - min) + min);
    if (!array.includes(number)) {
      array.push(number);
      break;
    }
  }
  return array.at(-1);
};

const generateNumber = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const randomNumbers = [];

  for (let i = 0; i < 3; i += 1) {
    const randomNum = getRandomNum(1, 20, randomNumbers);
    const isEvenNum = randomNum % 2 === 0;
    const correctAnswer = isEvenNum ? 'yes' : 'no';

    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);
      i = 3;
      generateNumber();
    }
  }
  return `Congratulations, ${userName}!`;
};

export default generateNumber;
