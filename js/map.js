import {activeStatus} from './status.js';
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
