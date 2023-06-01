import readlineSync from 'readline-sync';

const greeatingUser = () => {
  const name = readlineSync.question('May I have your name? ');
  const greeating = `Hello, ${name}!`;

  console.log(greeating);
};

export default greeatingUser;
