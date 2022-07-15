/* eslint-disable no-console */

// НЕАКТИВНОЕ
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
// АКТИВНОЕ
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
