const sliderPlace = document.querySelector('.ad-form__slider');
const priceForm = document.querySelector('#price');
priceForm.value = 1000;
noUiSlider.create(sliderPlace, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 1000,
});
sliderPlace.noUiSlider.on('update', () => {
  priceForm.value = sliderPlace.noUiSlider.get();
}
);
