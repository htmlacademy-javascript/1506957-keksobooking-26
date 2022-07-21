/* eslint-disable no-console */
// Неактивное состояние формы
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
};

// Активное состояние формы
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

//Валидация объявления
const adForm = document.querySelector('.ad-form');
const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__element__error'
}, false
);

// Валидация заголовка
function titleValidation (value) {
  return value.length >= 30 && value.length <= 100;
}
pristine.addValidator(
  adForm.querySelector('#title'),
  titleValidation,
  'Заголовок должен быть от 30 до 100 символов'
);

//Валидация цены
function priceValidation (value) {
  return value.length >= 0 && value.length <= 100000;
}
pristine.addValidator(
  adForm.querySelector('#price'),
  priceValidation,
  'Стоимость не больше 100 000'
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
