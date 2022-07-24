import {activeStatus} from './status.js';
import {address} from './form.js';
// Добавляем карту с координатами Токио, при загрузке карты приводим страницу в активное состояние
const map = L.map('map')
  .on('load', () => {
    activeStatus();
  })
  .setView({
    lat: 35.652832,
    lng: 139.839478,
  }, 10);

// Создаем слой с опенстрит картами
L.tileLayer (
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

// Создаем слой с метками
const mainPinMarker = L.marker(
  {
    lat: 35.652832,
    lng: 139.839478,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  }
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const latLng = evt.target.getLatLng();
  const latToFixed = (latLng.lat).toFixed(5);
  const lngToFixed = (latLng.lng).toFixed(5);
  address.value = `${latToFixed}, ${lngToFixed}`;
});
