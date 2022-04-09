// <---- ✅ CHALLENGE 1 ---->
// Create a function createFunction that creates and returns a function.
// When that created function is called, it should print "hello".
const createFunction = () => {
  return function () {
    console.log('hello');
  };
};

// UNCOMMENT THESE TO TEST YOUR WORK!
// const function1 = createFunction();
// function1();

// <---- ✅ CHALLENGE 2 ---->
// Create a function createFunctionPrinter that accepts one input and returns a function.
// When that created function is called, it should print out the input that was used when the function was created.

const createFunctionPrinter = (input) => {
  return function () {
    console.log(input);
  };
};

// UNCOMMENT THESE TO TEST YOUR WORK!
// const printSample = createFunctionPrinter('sample');
// printSample();
// const printHello = createFunctionPrinter('hello');
// printHello();

// <---- ✅ CHALLENGE 3 ---->
// Examine the code for the outer function.
// Notice that we are returning a function and that function is using variables that are outside of its scope.
// Uncomment those lines of code. Try to deduce the output before executing.

const outer = () => {
  let counter = 0;
  const incrementCounter = () => {
    counter++;
    console.log('counter', counter);
  };
  return incrementCounter;
};

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// willCounter(); // counter, 1
// willCounter(); // counter, 2
// willCounter(); // counter, 3

// jasCounter(); // counter, 1
// willCounter(); // counter, 4

// <---- ✅ CHALLENGE 4 ---->
// Now we are going to create a function addByX that returns a function that will add an input by x.

const addByX = (x) => {
  return function (y) {
    return x + y;
  };
};

const addByTwo = addByX(2);

// console.log(addByTwo(1)); // 3

// <---- ✅ CHALLENGE 5 ---->
// Write a function once that accepts a callback as input and returns a function.
// When the returned function is called the first time, it should call the callback and return that output.
// If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.
const once = (func) => {
  let primeCall = undefined;
  return function (x) {
    if (!primeCall) {
      primeCall = func(x);
    }
    return primeCall;
  };
};

const onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
// console.log(onceFunc(4));  //should log 6
// console.log(onceFunc(10));  //should log 6
// console.log(onceFunc(9001));  //should log 6

// <---- ✅ CHALLENGE 6 ---->
// Write a function after that takes the number of times the callback needs to be called before being executed
// as the first parameter and the callback as the second parameter.
const after = (count, func) => {
  let counter = 0;
  return function () {
    ++counter;
    if (counter === count) {
      return func();
    } else {
      return console.log('run again ..');
    }
  };
};

const called = () => console.log('success');
const afterCalled = after(3, called);

// afterCalled(); // -> nothing is printed
// afterCalled(); // -> nothing is printed
// afterCalled(); // -> 'hello' is printed

// <---- CHALLENGE 7 ---->
// Write a function delay that accepts
// a callback as the first parameter and
// the wait in milliseconds before allowing the callback to be invoked as the second parameter.
// Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();
const delay = (func, wait) => {
  return setTimeout(func, wait);
};

// delay(() => console.log('go!'), 1500);

// <---- ✅ CHALLENGE 8 ---->
// Create a function russianRoulette that accepts a number (let us call it n), and returns a function.
// The returned function will take no arguments, and will return the string 'click' the first n - 1 number of times it is invoked.
// On the very next invocation (the nth invocation), the returned function will return the string 'bang'.
// On every invocation after that, the returned function returns the string 'reload to play again'.
const russianRoulette = (num) => {
  let counter = 0;
  return function () {
    ++counter;
    if (counter === num) {
      return 'bang!';
    } else if (counter > num) {
      return 'reload to play again';
    } else {
      return 'click';
    }
  };
};

// /*** Uncomment these to check your work! ***/
const play = russianRoulette(3);
// console.log(play()); // should log: 'click'
// console.log(play()); // should log: 'click'
// console.log(play()); // should log: 'bang'
// console.log(play()); // should log: 'reload to play again'
// console.log(play()); // should log: 'reload to play again'

// <---- ✅ CHALLENGE 9 ---->
// Create a function average that accepts no arguments,
// and returns a function (that will accept either a number as its lone argument, or no arguments at all).
// When the returned function is invoked with a number, the output should be average of all the numbers
// have ever been passed into that function (duplicate numbers count just like any other number).
// When the returned function is invoked with no arguments, the current average is outputted.
// If the returned function is invoked with no arguments before any numbers are passed in, then it should return 0.
const average = () => {
  const nums = [];
  let currentAverage = 0;
  return function (x) {
    if (!x) {
      return currentAverage;
    }
    nums.push(x);
    const total = nums.reduce((prev, curr) => prev + curr);
    currentAverage = total / nums.length;
    return currentAverage;
  };
};

// /*** Uncomment these to check your work! ***/
const avgSoFar = average();
// console.log(avgSoFar()); // should log: 0
// console.log(avgSoFar(4)); // should log: 4
// console.log(avgSoFar(8)); // should log: 6
// console.log(avgSoFar()); // should log: 6
// console.log(avgSoFar(12)); // should log: 8
// console.log(avgSoFar()); // should log: 8

// <---- CHALLENGE 10 ---->
// Create a function makeFuncTester that accepts an array (of two-element sub-arrays),
// and returns a function (that will accept a callback).
// The returned function should return true if the first elements (of each sub-array)
// being passed into the callback all yield the corresponding second elements (of the same sub-array).
// Otherwise, the returned function should return false.
const makeFuncTester = (arrOfTests) => {
  return function(cb) {
    let result = true;
    arrOfTests.forEach((subArr) => {
      if (cb(subArr[0]) !== subArr[1]) {
        result = false;
      }
    });
    return result;
  };
};

// /*** Uncomment these to check your work! ***/
const capLastTestCases = [];
capLastTestCases.push(['hello', 'hellO']);
capLastTestCases.push(['goodbye', 'goodbyE']);
capLastTestCases.push(['howdy', 'howdY']);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = str => str.toUpperCase();
const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(shouldCapitalizeLast(capLastAttempt1)); // should log: false
console.log(shouldCapitalizeLast(capLastAttempt2)); // should log: true

// <---- CHALLENGE 11 ---->
const makeHistory = (limit) => {};

// /*** Uncomment these to check your work! ***/
// const myActions = makeHistory(2);
// console.log(myActions('jump')); // should log: 'jump done'
// console.log(myActions('undo')); // should log: 'jump undone'
// console.log(myActions('walk')); // should log: 'walk done'
// console.log(myActions('code')); // should log: 'code done'
// console.log(myActions('pose')); // should log: 'pose done'
// console.log(myActions('undo')); // should log: 'pose undone'
// console.log(myActions('undo')); // should log: 'code undone'
// console.log(myActions('undo')); // should log: 'nothing to undo'

// <---- CHALLENGE 12 ---->
const blackjack = (array) => {};

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
// const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// /*** PLAYER 1 ***/
// const i_like_to_live_dangerously = deal(4, 5);
// console.log(i_like_to_live_dangerously()); // should log: 9
// console.log(i_like_to_live_dangerously()); // should log: 11
// console.log(i_like_to_live_dangerously()); // should log: 17
// console.log(i_like_to_live_dangerously()); // should log: 18
// console.log(i_like_to_live_dangerously()); // should log: 'bust'
// console.log(i_like_to_live_dangerously()); // should log: 'you are done!'
// console.log(i_like_to_live_dangerously()); // should log: 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // should log: 4
// console.log(i_TOO_like_to_live_dangerously()); // should log: 15
// console.log(i_TOO_like_to_live_dangerously()); // should log: 19
// console.log(i_TOO_like_to_live_dangerously()); // should log: 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // should log: 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // should log: 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 10
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 13
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 'you are done!
