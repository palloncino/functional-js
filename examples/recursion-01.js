function isVowel(s) {
  return ['a', 'e', 'i', 'o', 'u'].includes(s);
}

function countVowels(str) {
  console.log(str)
  if (str.length == 0) return 0;
  var first = isVowel(str[0] ? 1 : 0);
  return first + countVowels(str.slice(1))
}

console.log(countVowels('The brown fox'));


