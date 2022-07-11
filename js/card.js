/* eslint-disable no-console */
import {similarObjects} from './data.js';

// removeChild(), из узла удалить.
// appendChild(),  вставить в узел.
// replaceChild(); заменить потомка.
// insertBefore(); inserAfter() вставить в узел
// append() более новый. его использовать.
// .innerHTML = '<a href =''></a>
// body.innerHTML = body.innerHTML + '<button>'; в конце кнопка
// body.insertAdjscentHTML('beforeend', '<button>')
// body.insertAdjscentText('beforeend', 'fghf')
// const fragment = d.createdocFragment;
// for (let i) {
//   const newELement = d.createElement(div)
//   newELement.classList.add();
//   DocumentFragment.append(newElement)
// }
// pool.append(fragment)


const similarCardsPlace =  document.querySelector('#map-canvas');
const objectTemplate = document.querySelector('#card').content.querySelector('.popup');
const similarCards = similarObjects();
const typesOnRussian = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

similarCards.forEach((card) => {
  const cardElement = objectTemplate.cloneNode(true);

  const cardTitle = cardElement.querySelector('.popup__title').textContent = card.offer.title;
  if (!cardTitle) {
    cardTitle.classList.add('hidden');
  }

  const cardAddress = cardElement.querySelector('.popup__text--address').textContent = card.offer.address;
  if (!cardAddress) {
    cardAddress.classList.add('hidden');
  }

  const cardPrice = cardElement.querySelector('.popup__text--price').textContent = `${card.offer.price} ₽/ночь`;
  if (!cardPrice) {
    cardPrice.classList.add('hidden');
  }

  const cardType = cardElement.querySelector('.popup__type').textContent = typesOnRussian[card.offer.type];
  if (!cardType) {
    cardType.classList.add('hidden');
  }
  const cardRoomsAndGuests = cardElement.querySelector('.popup__text--capacity').textContent = `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`;
  if (!cardRoomsAndGuests) {
    cardRoomsAndGuests.classList.add('hidden');
  }

  const cardTime = cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`;
  if (!cardTime) {
    cardTime.classList.add('hidden');
  }

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

  const cardDescription = cardElement.querySelector('.popup__description').textContent = card.offer.description;
  if (!cardDescription) {
    cardDescription.classList.add('hidden');
  }

  const popupPhotos = cardElement.querySelector('.popup__photos');
  const templateImg = popupPhotos.querySelector('img');
  const photoFragment = document.createDocumentFragment();
  for (let i = 0; i < card.offer.photos.length; i++) {
    const randomPopupPhoto = templateImg.cloneNode(true);
    templateImg.remove();
    randomPopupPhoto.src = card.offer.photos[i];
    photoFragment.append(randomPopupPhoto);
  }
  popupPhotos.appendChild(photoFragment);
  if (!popupPhotos) {
    popupPhotos.classList.add('hidden');
  }

  const cardAvatarSrc = cardElement.querySelector('.popup__avatar').src = card.author.avatar;
  if (!cardAvatarSrc) {
    cardAvatarSrc.classList.add('hidden');
  }

  similarCardsPlace.appendChild(cardElement);
}
);
console.log(similarCardsPlace);

