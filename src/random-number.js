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

export default getRandomNum;
