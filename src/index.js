import readlineSync from 'readline-sync';
import greeatingUser from './greeting.js';

const gameStarter = (description, game) => {
  console.log('Welcome to the Brain Games!');
  const userName = greeatingUser();
  console.log(`Hello, ${userName}!`);
  console.log(description);

  const iterations = 3;

  for (let i = 0; i < iterations; i += 1) {
    const [question, correctAnswer] = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`;
    }
  }

  return `Congratulations, ${userName}!`;
};

export default gameStarter;
