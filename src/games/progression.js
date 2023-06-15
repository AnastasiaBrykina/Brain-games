import { getRandomNum } from '../random-functions.js';
import gameStarter from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const createProgression = (progressionLength, startNumber, stepProgression) => {
  const progression = [];
  let start = startNumber;

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(start);
    start += stepProgression;
  }

  return progression;
};

const progressionGame = () => {
  const progressionLength = getRandomNum(5, 10);
  const startNumber = getRandomNum(1, 100);
  const stepProgression = getRandomNum(1, 10);

  const progression = createProgression(
    progressionLength,
    startNumber,
    stepProgression,
  );
  const closedIndex = getRandomNum(0, progressionLength - 1);
  const correctAnswer = progression[closedIndex];
  progression[closedIndex] = '..';

  return [progression.join(' '), String(correctAnswer)];
};

const startProgressionGame = () => gameStarter(gameDescription, progressionGame);

export default startProgressionGame;
