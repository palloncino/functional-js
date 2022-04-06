const totalNumbers = 
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  .reduce((prev, curr) => {
    return prev + curr;
  }, 0);

const onlyConsonants = 
  "The brown fox"
  .split('').reduce((prev, curr) => {
    !['a', 'e', 'i', 'o', 'u'].includes(curr) ? prev += curr : null;
    return prev;
  }, '');

const oddNumbers = () => {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(n => (n % 2) == 0 ? null : n);
}

console.log(totalNumbers);
console.log(onlyConsonants);
console.log(oddNumbers());
