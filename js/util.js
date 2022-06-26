// модуль с вспомогательными функциями;

const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// // eslint-disable-next-line no-undef
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const getRandomArrayNoRepeat = ([...someArr], maxLength) => Array.from(
  { length: Math.min(someArr.length, 1 + Math.random() * maxLength | 0) },
  () => someArr.splice(Math.random() * someArr.length | 0, 1)[0]
);

const getRandomFloat = (min, max, digits = 5) => {
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));
  const result = Math.random() * (upper - lower + 0.00001) + lower;
  return +result.toFixed(digits);
};

export {getRandomPositiveInteger, getRandomArrayElement, getRandomArrayNoRepeat, getRandomFloat};
