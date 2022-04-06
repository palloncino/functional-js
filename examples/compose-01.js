const toUpper = str => str.toUpperCase();

const exclaim = str => str + '!';

const compose = (fn1, fn2) => x => fn1(fn2(x));

const shout = compose(toUpper, exclaim);

console.log(shout('hey guy'));