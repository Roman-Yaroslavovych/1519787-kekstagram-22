import {posts} from './data.js';

// Ищем нужные элементы
const mainContainer = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();
const newPicture = document.querySelector('#picture').content;

// На основе временных данных для разработки и шаблона создайем DOM-элементы, соответствующие фотографиям, и заполняем их данными:
posts.forEach(function (currentValue) {
 const newFragment = newPicture.cloneNode(true);

const newPhoto = newFragment.querySelector('.picture__img');
newPhoto.src = currentValue.url;

const photoLikes = newFragment.querySelector('.picture__likes');
photoLikes.textContent = currentValue.likes;

const photoComments = newFragment.querySelector('.picture__comments');
photoComments.textContent = currentValue.comments;

fragment.appendChild(newFragment);
});

mainContainer.appendChild(fragment);

export {mainContainer};
