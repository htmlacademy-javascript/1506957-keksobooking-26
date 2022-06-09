// Источники:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

// Функция, возвращающая случайное целое число из переданного диапазона включительно.

function getRandomInt (from, to) {
  const min = Math.ceil(Math.min(Math.abs(from), Math.abs(to)));
  const max = Math.floor(Math.max(Math.abs(from), Math.abs(to)));

  return Math.floor(Math.random () * (max - min +1)) + min;
}
getRandomInt(1, 6);

// Кексобукинг. Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

function getRandomIntWithDot(from, to, digitsAfterDot) {
  const fromValue = from * 10 ** digitsAfterDot;
  const toValue = to * 10 ** digitsAfterDot;

  const min = Math.ceil(Math.min((fromValue), (toValue)));
  const max = Math.floor(Math.max((fromValue), (toValue)));
  const randomNumber = Math.ceil(Math.random() * (max - min + 1) + min);
  const number = randomNumber / 10 ** digitsAfterDot;
  return number;

}

getRandomIntWithDot(0, -10, 4);
