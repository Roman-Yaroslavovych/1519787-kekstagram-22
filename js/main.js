import './data.js';
import './constans.js';
import './create_photo.js';
import './createSlider.js';
import './uploud_photo.js';
import './photo_edition_mode.js';

// Функция для проверки максимальной длины строки введённого комментария.
const isValidStringLength = function (string, maxLenght) {
  return string.length <= maxLenght;
};

// Функция, возвращающая случайное целое число из переданного диапазона включительно.
const getRandomInteger = function (min, max) {
  min = Math.round(min);
  max = Math.floor(max);
  if (min >= 0 && max >= min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

// //  редактир масштаба изображения
// const resizeSlider = document.querySelector('.img-upload__scale');
// const buttonUp = resizeSlider.querySelector('.scale__control--bigger');
// const buttonDown = resizeSlider.querySelector('.scale__control--smaller');
// const valueSize = resizeSlider.querySelector('.scale__control--value');
// const previewImage = document.querySelector('.img-upload__preview');

// buttonUp.addEventListener('click', () => {
//   const step = 25;
//   const currentSize = parseInt(valueSize.value);
//   const currentScale = currentSize + step;
//   valueSize.value = currentScale;

//   if (currentSize < 100) {
//     previewImage.style.cssText = `transform: scale(${currentScale / 100})`;
//     valueSize.value = `${currentScale}%`;
//   } else { return valueSize.value = `${100}%`; }
// });

// buttonDown.addEventListener('click', () => {
//   const step = 25;
//   const currentSize = parseInt(valueSize.value);
//   const currentScale = currentSize - step;
//   valueSize.value = `${currentScale}%`;

//   if (currentSize > 25) {
//     previewImage.style.cssText = `transform: scale(${currentScale / 100})`;
//     valueSize.value = `${currentScale}%`;
//   } else { return valueSize.value = `${25}%`; }
// });

// let currentFilter = '';

// const effectsStyleParamName = {
//   chrome: 'grayscale',
//   sepia: 'sepia',
//   marvin: 'invert',
//   phobos: 'blur',
//   heat: 'brightness',
// };

// const setEffectLevel = (effectName, value) => {
//   previewImage.style.filter = `${effectName}(${value})`;
// };

// const onEffectLevelChange = (values) => {
//   switch (currentFilter) {
//     case 'chrome':
//       efectLevelSlider.noUiSlider.updateOptions({
//         range: {
//           min: 0,
//           max: 1,
//         },
//         step: 0.1,
//       });
//       setEffectLevel(effectsStyleParamName.chrome, values[0]);
//       break;
//     case 'sepia':
//       efectLevelSlider.noUiSlider.updateOptions({
//         range: {
//           min: 0,
//           max: 1,
//         },
//         step: 0.1,
//       }, true);
//       setEffectLevel(effectsStyleParamName.sepia, values[0]);
//       break;
//     case 'marvin':
//       efectLevelSlider.noUiSlider.updateOptions({
//         range: {
//           min: 0,
//           max: 100,
//         },
//         step: 1,
//       }, true);
//       setEffectLevel(effectsStyleParamName.marvin, `${values[0]}%`);
//       break;
//     case 'phobos':
//       efectLevelSlider.noUiSlider.updateOptions({
//         range: {
//           min: 0,
//           max: 3,
//         },
//         step: 0.1,
//       }, true);
//       setEffectLevel(effectsStyleParamName.phobos, `${values[0]}px`);
//       break;
//     case 'heat':
//       efectLevelSlider.noUiSlider.updateOptions({
//         range: {
//           min: 1,
//           max: 3,
//         },
//         step: 0.1,
//       }, true);
//       setEffectLevel(effectsStyleParamName.heat, values[0]);
//       break;
//     default:
//       break;
//   }
// };

// const setDefaultMaxSliderValue = (value) => {
//   efectLevelSlider.noUiSlider.updateOptions({
//     start: value,
//   }, true);
// };

// // создаем слайдер глубины эффекта
// const allEfects = document.querySelector('.effects__list');
// allEfects.addEventListener('click', (evt) => {
//   const { target } = evt;
//   let filterName;

//   if (target.name) {
//     filterName = target.value;
//   } else {
//     const filterParent = target.closest('.effects__item');
//     const filterChildren = filterParent.querySelector('input.effects__radio');
//     filterName = filterChildren.value;
//   }

//   switch (filterName) {
//     case 'none':
//       previewImage.className = 'img-upload__preview';
//       previewImage.classList.toggle('effects__preview--none');
//       previewImage.style.cssText = 'filter: none';
//       currentFilter = 'none';
//       break;
//     default:
//     case 'chrome':
//       previewImage.className = 'img-upload__preview effects__preview--chrome';
//       previewImage.style.filter = '';
//       setDefaultMaxSliderValue(1);
//       currentFilter = 'chrome';
//       break;
//     case 'sepia':
//       previewImage.className = 'img-upload__preview effects__preview--sepia';
//       previewImage.style.filter = '';
//       setDefaultMaxSliderValue(1);
//       currentFilter = 'sepia';
//       break;
//     case 'marvin':
//       previewImage.className = 'img-upload__preview effects__preview--marvin';
//       previewImage.style.filter = '';
//       setDefaultMaxSliderValue(100);
//       currentFilter = 'marvin';
//       break;
//     case 'phobos':
//       previewImage.className = 'img-upload__preview effects__preview--phobos';
//       previewImage.style.filter = '';
//       setDefaultMaxSliderValue(3);
//       currentFilter = 'phobos';
//       break;
//     case 'heat':
//       previewImage.className = 'img-upload__preview effects__preview--heat';
//       previewImage.style.filter = '';
//       setDefaultMaxSliderValue(3);
//       currentFilter = 'heat';
//       break;
//   }
// });
