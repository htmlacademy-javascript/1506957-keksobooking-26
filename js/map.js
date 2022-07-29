import {activeStatus} from './status.js';
import {similarCards} from './card.js';
const DefaultLocation = {
  LAT: 35.65283,
  LNG: 139.73947,
};
const SIZE_MAIN_PIN = 52;
const SIZE_REGULAR_PIN = 40;
const DEFAULT_SCALE_MAP = 10;
const address = document.querySelector('#address');

//Иконка лавного пина
const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [SIZE_MAIN_PIN, SIZE_MAIN_PIN],
  iconAnchor: [SIZE_MAIN_PIN / 2, SIZE_MAIN_PIN],
});

//Иконка остальных пинов
const pinIcon = L.icon ({
  iconUrl: './img/pin.svg',
  iconSize: [SIZE_REGULAR_PIN, SIZE_REGULAR_PIN],
  iconAnchor: [SIZE_REGULAR_PIN / 2, SIZE_REGULAR_PIN]
});

//Загрузка карты,
const map = L.map('map-canvas')
  .on('load', () => {
    activeStatus();
  })
  .setView({
    lat: DefaultLocation.LAT,
    lng: DefaultLocation.LNG,
  }, DEFAULT_SCALE_MAP
  );

//Добавляем опенстрит карту
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

//Создание основной иконки
const mainPinMarker = L.marker(
  {
    lat: DefaultLocation.LAT,
    lng: DefaultLocation.LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  }
);
mainPinMarker.addTo(map);

//Запись в поле адрес выбранных координат
mainPinMarker.on('moveend', (evt) => {
  const {lat, lng} = evt.target.getLatLng();
  address.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
});

//Новый слой для всех пинов
const markerGroup = L.layerGroup().addTo(map);
//Создраю 1 пин
const createMarker= (point) => {
  const marker = L.marker(
    point.location,
    {
      icon: pinIcon,
    },
  );
  marker
    .addTo(markerGroup)
    .bindPopup(similarCards(point));
};
//Создаю 10 пинов
similarCards.forEach((point) => {
  createMarker(point);
}
);
