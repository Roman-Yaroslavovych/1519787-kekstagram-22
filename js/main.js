const POSTS_COUNT = 25;

const NAMES = [
  'Милан',
  'Тарас',
  'Ира',
  'Кристина',
  'Саша',
  'Юлия',
  'Люба',
  'Миша',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'лагерь для отдыха',
  'добро пожаловать на пляж',
  'а вот и пляж',
  'мощный фото_аппарат',
  'пошли плавать',
  'люблю матовую краску',
  'минималистичный десерт',
  'виноградный компот',
  'подвезли свеженькое пивко',
  'также хочу такую полочку для обуви',
  'вход в рай',
  'а "мерен" все таки лучше',
  'наконец, полезная еда',
  'и еще немного полезной пищи',
  'мои скороходы',
  'пора домой',
  'местный КВН',
  'легенда',
  'чего только не придумают эти китайцы',
  'круглый год на них смотрел бы',
  'угадайте что это за блюдо',
  'такой закат солнца больше нигде не увидишь',
  'деликатес)',
  'сегодня ночью будут танцы',
  'советую всем попробовать сафари',
];

// Функция для проверки максимальной длины строки введённого комментария.
const isValidStringLength = function ( string, maxLenght ) {
  return string.length <= maxLenght;
};


//Функция, возвращающая случайное целое число из переданного диапазона включительно.
const getRandomInteger = function (min, max) {
  min = Math.round(min);
  max = Math.floor(max);
  if (min >= 0 && max >= min) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
};


// 1-st task: id
const generateIdsArray = function (length, min, max) {
  const ids = [];

  while (ids.length < length) {
    let id = getRandomInteger(min, max);

    let isContain = ids.find((item) => {
      return item === id;
    });

    if (isContain) {
      continue;
    }

    ids.push(id);
  }

  return ids;
};

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
