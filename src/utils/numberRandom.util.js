const ARRAY_OF_NUMBER = Array.from({ length: 25 }, (v, i) => i);
export const numberRandom = () => {
  return ARRAY_OF_NUMBER.pop();
};
