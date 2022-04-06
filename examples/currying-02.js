function curry(fn) {
  return function(x) {
    return function(y) {
      return fn(x, y);
    }
  }
}

const sum = (x, y) => x + y
const total = curry(sum);
console.log(total(1)(1));

