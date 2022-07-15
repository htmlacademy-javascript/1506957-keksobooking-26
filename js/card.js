/* eslint-disable no-console */
import {similarObjects} from './data.js';

const SIMILARCARDSPLACE =  document.querySelector('#map-canvas');
const OBJECTTEMPLATE = document.querySelector('#card').content.querySelector('.popup');
const SIMILARCARDS = similarObjects();
const TYPESONRUSSIAN = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};
const TOADDHIDDENANDCONTENT = (element, content) => {
  if (element){
    element.textContent = content;
  }
  else {
    element.classList.add('hidden');
  }
};
const TOADDHIDDENANDSRC = (element, source) => {
  if (element){
    element.src = source;
  }
  else {
    element.classList.add('hidden');
  }
};


SIMILARCARDS.forEach((card) => {
  const CARDELEMENT = OBJECTTEMPLATE.cloneNode(true);

  const CARDTITLE = CARDELEMENT.querySelector('.popup__title');
  TOADDHIDDENANDCONTENT(CARDTITLE, card.offer.title);

  const CARDADDRESS = CARDELEMENT.querySelector('.popup__text--address');
  TOADDHIDDENANDCONTENT(CARDADDRESS, card.offer.address);

  const CARDPRICE = CARDELEMENT.querySelector('.popup__text--price');
  TOADDHIDDENANDCONTENT(CARDPRICE,`${card.offer.price} ₽/ночь`);

  const CARDTYPE = CARDELEMENT.querySelector('.popup__type');
  TOADDHIDDENANDCONTENT(CARDTYPE, TYPESONRUSSIAN[card.offer.type]);

  const CARDROOMSANDGUESTS = CARDELEMENT.querySelector('.popup__text--capacity');
  TOADDHIDDENANDCONTENT(CARDROOMSANDGUESTS, `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`);

  const CARDTIME = CARDELEMENT.querySelector('.popup__text--time');
  TOADDHIDDENANDCONTENT(CARDTIME, `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`);

  const FEATURESCONTAINER = CARDELEMENT.querySelector('.popup__features');
  const FEATURESLIST = FEATURESCONTAINER.querySelectorAll('.popup__feature');
  // eslint-disable-next-line prefer-template
  const MODIFIERS = card.offer.features.map((randomFeature) => 'popup__feature--' + randomFeature);
  FEATURESLIST.forEach((featuresListItem) => {
    const MODIFIER = featuresListItem.classList[1];
    if (!MODIFIERS.includes(MODIFIER)) {
      featuresListItem.remove();
    }
    if (FEATURESLIST.length === 0) {
      FEATURESLIST.classList.add('hidden');}
  });

  const CARDDESCRIPTION = CARDELEMENT.querySelector('.popup__description');
  TOADDHIDDENANDCONTENT(CARDDESCRIPTION, card.offer.description);

  const POPUPPHOTOS = CARDELEMENT.querySelector('.popup__photos');
  const TEMPLATEIMG = POPUPPHOTOS.querySelector('img');
  const PHOTOFRAGMENT = document.createDocumentFragment();

  const CARDOFFERPHOTOS = card.offer.photos;
  CARDOFFERPHOTOS.forEach((cardPhoto) => {
    const RANDOMPOPUPPHOTO = TEMPLATEIMG.cloneNode(true);
    TEMPLATEIMG.remove();
    TOADDHIDDENANDSRC(RANDOMPOPUPPHOTO, cardPhoto);
    PHOTOFRAGMENT.append(RANDOMPOPUPPHOTO);
  });

  POPUPPHOTOS.appendChild(PHOTOFRAGMENT);
  const CARDAVATARSRC = CARDELEMENT.querySelector('.popup__avatar');
  TOADDHIDDENANDSRC(CARDAVATARSRC, card.author.avatar);

  SIMILARCARDSPLACE.appendChild(CARDELEMENT);
}
);
console.log(SIMILARCARDSPLACE);

