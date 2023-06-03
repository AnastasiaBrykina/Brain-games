import greeatingUser from "./greeting.js";
import readlineSync from "readline-sync";

const startGame = (rules, func1, func2) => {
  console.log("Welcome to the Brain Games!");
  const userName = greeatingUser();
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  const iterations = 3;
  for (let i = 0; i < iterations; i += 1) {
    const question = func1();
    const correctAnswer = String(func2(question));
    console.log(`Question: ${question}`);
    const answer = readlineSync.question("Your answer: ");

    if (answer === correctAnswer) {
      console.log("Correct!");
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`;
    }
  }

  return `Congratulations, ${userName}!`;
};

export default startGame;
