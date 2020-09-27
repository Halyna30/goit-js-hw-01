// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку
// (в строке будут только слова и пробелы)
// и возвращает самое длинное слово в этой строке.

function findLongestWord(string = '') {
  const words = string.split(' ');
  let longestWord = words[0];

  for (const word of words) {
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
