const MAX = 100;
const MIN = 1;
const ARRAY_LENGTH = 20;

const generateNumberRandom = () => {
  return Math.floor(Math.random() * (MAX + 1 - MIN) + MIN);
};

const generateArrayNumberRandom = () => {
  const arraySet = new Set();
  let number;
  while (arraySet.size < ARRAY_LENGTH) {
    number = generateNumberRandom();
    arraySet.add(number);
  }
  return [...arraySet];
};

const ARRAY_OF_NUMBER = generateArrayNumberRandom();

export const numberRandom = () => {
  return ARRAY_OF_NUMBER.pop();
};

