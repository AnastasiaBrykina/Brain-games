import getRandomNum from "./random-number.js";

const getRandomOperator = () => {
  const operators = ["+", "-", "*"];
  const index = getRandomNum(0, operators.length - 1, []);

  return operators[index];
};

export default getRandomOperator;
