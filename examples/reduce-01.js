const reduce = (array, callback, initialValue) => {
  array.forEach(num => {
    initialValue += callback(num);
  });
  return initialValue;
};

const result = reduce([1, 2, 3], value => value * 2, 0);
console.log(result);

console.log(
  [1, 2, 3].reduce((prev, curr) => prev += curr * 2, 0)
);

