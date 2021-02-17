import {getRandomInteger, generateIdsArray} from './util.js'
import {POSTS_COUNT, NAMES, COMMENTS, DESCRIPTIONS} from './constans.js'

//создание коментария
const getComments = function () {
  let comments = [];

  const commentsCount = getRandomInteger(1, 6);
  const ids = generateIdsArray(commentsCount, 10, 99);

  for (let i = 0; i < commentsCount; i++) {
    let comment = {
      id: ids[i],
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: COMMENTS[getRandomInteger(0, 5)],
      name: NAMES[getRandomInteger(0, NAMES.length)],
    }

    comments.push(comment);
  }

  return comments;
}

//функции для создания массива из 25 сгенерированных объектов.
//Каждый объект массива — описание фотографии, опубликованной пользователем.
const posts = [];

for (let i = 1; i < POSTS_COUNT + 1; i++) {
  let post = {
    id: i,
    url: `photos/${i}.jpg`,
    description: DESCRIPTIONS[i-1],
    likes: getRandomInteger(15, 200),
    comments: getComments(),
  };

  posts.push(post);
}

export {getComments}
