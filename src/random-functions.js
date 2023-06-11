const getRandomNum = (min, max) => Math.trunc(Math.random() * (max + 1 - min) + min);

const plus = '+';
const minus = '-';
const multi = '*';

const getRandomOperator = () => {
  const operators = [plus, minus, multi];
  const index = getRandomNum(0, operators.length - 1);

  return operators[index];
};

export {
  getRandomNum, plus, minus, multi, getRandomOperator,
};
