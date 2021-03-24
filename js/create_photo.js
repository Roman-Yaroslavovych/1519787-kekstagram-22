import { posts } from './data.js';

// Ищем нужные элементы
const mainContainer = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();
const pictureTemplate = document.querySelector('#picture').content;

// На основе временных данных для разработки и шаблона создайем
// DOM-элементы, соответствующие фотографиям, и заполняем их данными:

posts.forEach((postItem) => {
  const newElementNode = pictureTemplate.cloneNode(true);

  newElementNode.querySelector('.picture__img').src = postItem.url;
  newElementNode.querySelector('.picture__likes').textContent = postItem.likes;

  const comment = postItem.comments;
  comment.forEach((postInfo) => {
    newElementNode.querySelector('.picture__comments').textContent = postInfo.message;
  });

  fragment.appendChild(newElementNode);
});

mainContainer.appendChild(fragment);

export { mainContainer };
