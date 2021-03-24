import { onEffectLevelChange, efectLevelSlider } from './photo_edition_mode.js';

// окно загрузки изображения

const body = document.querySelector('body');
const buttonDownloadPhoto = document.querySelector('.img-upload__input');
const selectedPhoto = document.querySelector('#upload-file');
const photoEditor = document.querySelector('.img-upload__overlay');
const closeEditirForm = document.querySelector('.img-upload__cancel');
const elementEfectLevel = document.querySelector('.effect-level__value');

const closeEditorModal = () => {
  photoEditor.classList.add('hidden');
  body.classList.remove('modal-open');
  closeEditirForm.removeEventListener('keydown', onEditorModal());
};

const isEventEscape = (evt) => evt.key === ('Escape' || 'esc');

const onEditorModal = (evt) => {
  if (isEventEscape(evt)) {
    evt.preventDefault();
    closeEditorModal();
  }
};

const openEditorModal = () => {
  buttonDownloadPhoto.classList.remove('.visually-hidden');
  photoEditor.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', (evt) => {
    if (isEventEscape(evt)) {
      evt.preventDefault();
      photoEditor.classList.add('hidden');
      body.classList.remove('modal-open');
    }
  });
  noUiSlider.create(efectLevelSlider, {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
  });

  efectLevelSlider.noUiSlider.on('slide', onEffectLevelChange);
};

selectedPhoto.addEventListener('change', () => {
  openEditorModal();
});

closeEditirForm.addEventListener('click', () => {
  closeEditorModal();
  efectLevelSlider.noUiSlider.destroy();
});

export { closeEditorModal, openEditorModal, elementEfectLevel };
