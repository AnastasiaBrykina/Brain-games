import readlineSync from 'readline-sync';

const greeatingUser = () => {
  const name = readlineSync.question('May I have your name? ');

  return name;
};

export default greeatingUser;
