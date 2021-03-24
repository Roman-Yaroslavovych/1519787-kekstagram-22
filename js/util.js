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

// Функция генерирует произвольный массив с числами которые не повторяются.
const generateIdsArray = function (length, min, max) {
  const ids = [];

  while (ids.length < length) {
    const id = getRandomInteger(min, max);

    const isContain = ids.find((item) => item === id);

    if (isContain) {
      continue;
    }

    ids.push(id);
  }

  return ids;
};

export { isValidStringLength, getRandomInteger, generateIdsArray };
