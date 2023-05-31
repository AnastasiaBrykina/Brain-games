import readlineSync from "readline-sync";

export const greeatingUser = () => {
  const name = readlineSync.question("May I have your name? ");
  const greeating = `Hello, ${name}!`;

  console.log(greeating);
};
