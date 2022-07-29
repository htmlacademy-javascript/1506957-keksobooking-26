/* eslint-disable no-console */
import {similarObjects, SIMILAR_OBJECT_COUNT} from './data.js';

const objectTemplate = document.querySelector('#card').content.querySelector('.popup');
const similarCards = similarObjects(SIMILAR_OBJECT_COUNT);
const TYPES_IN_RUSSIAN = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};
const toAddHiddenAndContent = (element, content) => {
  if (element){
    element.textContent = content;
  }
  else {
    element.classList.add('hidden');
  }
};
const toAddHiddenAndSrc = (element, source) => {
  if (element){
    element.src = source;
  }
  else {
    element.classList.add('hidden');
  }
};

similarCards.forEach((card) => {
  const cardElement = objectTemplate.cloneNode(true);

  const cardTitle = cardElement.querySelector('.popup__title');
  toAddHiddenAndContent(cardTitle, card.offer.title);

  const cardAddress = cardElement.querySelector('.popup__text--address');
  toAddHiddenAndContent(cardAddress, card.offer.address);

  const cardPrice = cardElement.querySelector('.popup__text--price');
  toAddHiddenAndContent(cardPrice,`${card.offer.price} ₽/ночь`);

  const cardType = cardElement.querySelector('.popup__type');
  toAddHiddenAndContent(cardType, TYPES_IN_RUSSIAN[card.offer.type]);

  const cardRoomsAndGuests = cardElement.querySelector('.popup__text--capacity');
  toAddHiddenAndContent(cardRoomsAndGuests, `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`);

  const cardTime = cardElement.querySelector('.popup__text--time');
  toAddHiddenAndContent(cardTime, `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`);

  const featuresContainer = cardElement.querySelector('.popup__features');
  const featuresList = featuresContainer.querySelectorAll('.popup__feature');
  // eslint-disable-next-line prefer-template
  const modifiers = card.offer.features.map((randomFeature) => 'popup__feature--' + randomFeature);
  featuresList.forEach((featuresListItem) => {
    const modifier = featuresListItem.classList[1];
    if (!modifiers.includes(modifier)) {
      featuresListItem.remove();
    }
    if (featuresList.length === 0) {
      featuresList.classList.add('hidden');}
  });

  const cardDescription = cardElement.querySelector('.popup__description');
  toAddHiddenAndContent(cardDescription, card.offer.description);

  const popupPhotos = cardElement.querySelector('.popup__photos');
  const templateImg = popupPhotos.querySelector('img');
  const photoFragment = document.createDocumentFragment();

  const cardOfferPhotos = card.offer.photos;
  cardOfferPhotos.forEach((cardPhoto) => {
    const randomPopupPhoto = templateImg.cloneNode(true);
    templateImg.remove();
    toAddHiddenAndSrc(randomPopupPhoto, cardPhoto);
    photoFragment.append(randomPopupPhoto);
  });

  popupPhotos.appendChild(photoFragment);
  const cardAvatarSrc = cardElement.querySelector('.popup__avatar');
  toAddHiddenAndSrc(cardAvatarSrc, card.author.avatar);
}
);

export{similarCards};
