// Функция для проверки максимальной длины строки введённого комментария.

const calculateCommentLenght = function ( isResevedCommentLenght, maxCommentLenght ) {
  if (isResevedCommentLenght <= maxCommentLenght) {return true}
  return false
};


//Функция, возвращающая случайное целое число из переданного диапазона включительно.

const  getRandomInteger = function (min, max) {
  min = Math.round(min);
  max = Math.floor(max);
  if (min >= 0 && max >= min) {
    return Math.floor(Math.random() * (max - min + 1)) + min}
}

