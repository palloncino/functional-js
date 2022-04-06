// Composition
function outer(fn) {
  return function inner(x) {
    return fn(x);
  }
}

const toUpperCase = str => str.toUpperCase();

const toCapitalLetters = outer(toUpperCase);

// console.log(toCapitalLetters('hello'));

