// модуль, который создаёт данные.
import {getRandomPositiveInteger, getRandomArrayElement, getRandomArrayNoRepeat, getRandomFloat} from './util.js';

const SIMILAR_OBJECT_COUNT = 10;

const TITLES = [
  'Часто просматриваемое объявление',
  'Keksbooking рекомендует',
  'Лучшее соотношение цена-качество по мнению наших экспертов',
  'Входит в топ-5 объявлений',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECK_TIME = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
  'Близко к морю',
  'Свежий ремонт',
  'Солнечная сторона',
  'Чудесный вид из окна',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const LAT = {
  min: 35.65000,
  max: 35.70000,
};
const LNG = {
  min: 139.70000,
  max: 139.80000,
};

const getCheckTime = () => getRandomArrayElement(CHECK_TIME);
const getLocationLat = () => getRandomFloat(LAT.min, LAT.max);
const getLocationLng = () => getRandomFloat(LNG.min, LNG.max);

const createObject = (index) => {
  const checkValue = getCheckTime();
  const latValue = getLocationLat();
  const lngValue = getLocationLng();
  return {
    author: {
      avatar: `${'img/avatars/user'}${index < 10 ? `${'0'}${index + 1}` : index}${'.png'}`,
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${latValue}, ${lngValue}`,
      price: getRandomPositiveInteger(1000, 15000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomPositiveInteger(1, 5),
      guests: getRandomPositiveInteger(1, 5),
      checkin: checkValue,
      checkout: checkValue,
      features: getRandomArrayNoRepeat(FEATURES, FEATURES.length),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArrayNoRepeat(PHOTOS, PHOTOS.length),
    },
    location: {
      lat: latValue,
      lng: lngValue,
    },
  };
};

function similarObjects(count) {
  return [...Array(count)].map((item, index) => createObject(index));}
export {similarObjects, SIMILAR_OBJECT_COUNT};
