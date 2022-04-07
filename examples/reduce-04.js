const intersection = (...arrays) => {
  return arrays.reduce((prev, curr) => {
    return curr.filter(num => prev.includes(num));
  })
};

console.log(
  intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
)