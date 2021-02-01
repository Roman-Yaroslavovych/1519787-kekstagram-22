// Функция для проверки максимальной длины строки введённого комментария.

let calculateCommentLenght = function ( isResevedCommentLenght, maxCommentLenght ) {
  if (isResevedCommentLenght <= maxCommentLenght) {return true}
  return false
};

calculateCommentLenght ();

//Функция, возвращающая случайное целое число из переданного диапазона включительно.

let getRandomIntInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= 0 && max >= min) { return Math.floor(Math.random() * (max - min + 1)) + min}
  return false
}

getRandomIntInclusive ();
