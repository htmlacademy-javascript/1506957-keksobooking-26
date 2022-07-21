/* eslint-disable no-console */
<<<<<<< HEAD

// НЕАКТИВНОЕ
=======
// Неактивное состояние формы
>>>>>>> module8-task1
const infoFormAd = document.querySelector('.ad-form');
const fieldsets = infoFormAd.querySelectorAll('fieldset');
const filterForm = document.querySelector('.map__filters');
const filterFormChildren = filterForm.children;
const filterFormChildrenArray = Array.from(filterFormChildren);

const notActiveStatus = function () {
  infoFormAd.classList.add('ad-form--disabled');

  fieldsets.forEach((fieldset) => {
    fieldset.setAttribute('disabled', 'true');
  });

  filterForm.classList.add('ad-form--disabled');
  filterFormChildrenArray.forEach((children) =>
    children.setAttribute('disabled', 'true'));
<<<<<<< HEAD

};
// АКТИВНОЕ
=======
};

// Активное состояние формы
>>>>>>> module8-task1
const activeStatus = function(){
  infoFormAd.classList.remove('ad-form--disabled');

  fieldsets.forEach((fieldset) => {
    fieldset.removeAttribute('disabled');
  });

  filterForm.classList.remove('ad-form--disabled');

  filterFormChildrenArray.forEach((children) =>
    children.removeAttribute('disabled'));
};

notActiveStatus();
activeStatus();
<<<<<<< HEAD
=======

//Валидация объявления
const adForm = document.querySelector('.ad-form');
const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__element__error'
},
);
const TITLE_WORDS_RANGE = {
  min: 30,
  max: 100
};
const PRICE_RANGE = {
  min: 0,
  max: 100000
};

// Валидация заголовка
function titleValidation (value) {
  return value.length >= TITLE_WORDS_RANGE.min && value.length <= TITLE_WORDS_RANGE.max;
}
pristine.addValidator(
  adForm.querySelector('#title'),
  titleValidation,
  `Заголовок должен быть от ${TITLE_WORDS_RANGE.min} до ${TITLE_WORDS_RANGE.max} символов`
);

//Валидация цены
function priceValidation (price) {
  return price.length && parseInt(price, 10) <= PRICE_RANGE.max && parseInt(price, 10) > PRICE_RANGE.min;
}
pristine.addValidator(
  adForm.querySelector('#price'),
  priceValidation,
  `Стоимость от ${PRICE_RANGE.min} до ${PRICE_RANGE.max} рублей`
);

//Валидация количество комнат\мест
const roomField = document.querySelector('[name="rooms"]');
const guestField = document.querySelector('[name="capacity"]');
const roomAndGuestQuantity = {
  '1 комната': ['для 1 гостя'],
  '2 комнаты': ['для 2 гостей', 'для 1 гостя'],
  '3 комнаты': ['для 3 гостей', 'для 2 гостей', 'для 1 гостя'],
  '100 комнат': ['не для гостей']
};

function validateRoom () {
  return roomAndGuestQuantity[roomField.value].includes(guestField.value);
}

function getRoomErrorMessage () {
  return  'Количество гостей неверное';
}

pristine.addValidator(roomField, validateRoom);
pristine.addValidator(guestField, validateRoom, getRoomErrorMessage);

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
>>>>>>> module8-task1
