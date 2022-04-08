// CHALLENGE 8
// Construct a function union that compares input arrays and returns a new 
// array that contains all elements. If there are duplicate elements, only add 
// it once to the new array. Preserve the order of the elements starting from 
// the first element of the first input array. BONUS: Use reduce!

const union = (...arrays) => {
  
  return arrays.reduce((prev, curr) => {
    const currFiltered = curr.filter(num => !prev.includes(num));
    return [ ...prev, ...currFiltered ];
  });
  
};

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]


// CHALLENGE 9
// Construct a function objOfMatches that accepts two arrays and a callback. 
// objOfMatches will build an object and return it. To build the object, objOfMatches 
// will test each element of the first array using the callback to see if the 
// output matches the corresponding element (by index) of the second array. If 
// there is a match, the element from the first array becomes a key in an object, 
// and the element from the second array becomes the corresponding value.

const objOfMatches = (array1, array2, callback) => {
  let output = {}
  array1.forEach((str, index) => {
    if (callback(str) === array2[index]) {
      output = { ...output, [str]: array2[index] }
    }
  })
  return output;
};

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], (str) => str.toUpperCase()));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }


// CHALLENGE 10
// Construct a function multiMap that will accept two arrays: an array of values 
// and an array of callbacks. multiMap will return an object whose keys match 
// the elements in the array of values. The corresponding values that are assigned 
// to the keys will be arrays consisting of outputs from the array of callbacks, 
// where the input to each callback is the key.

const multiMap = (arrVals, arrCallbacks) => {
  let output = {};
  arrVals.forEach(str => {
    let values = []
    arrCallbacks.forEach(cb => values.push(cb(str)));
    output = { ...output, [str]: values }
  });
  return output;
};

// console.log(
//   multiMap(
//     ['catfood', 'glue', 'beer'], 
//     [
//       (str) => str.toUpperCase(), 
//       (str) => str[0].toUpperCase() + str.slice(1).toLowerCase(), 
//       (str) => str + str
//     ]
//   )
// );
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


// CHALLENGE 11
// Create a function commutative that accepts two callbacks and a value. commutative 
// will return a boolean indicating if the passing the value into the first function, 
// and then passing the resulting output into the second function, yields the same 
// output as the same operation with the order of the functions reversed (passing 
// the value into the second function, and then passing the output into the first 
// function).

const commutative = (fn1, fn2, value) => {
  const regular = fn2(fn1(value));
  const inverted = fn1(fn2(value));

  return regular === inverted;
};

// /*** Uncomment these to check your work! ***/
// const multBy3 = n => n * 3;
// const divBy4 = n => n / 4;
// const subtract5 = n => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false


// CHALLENGE 12
// Create a function objFilter that accepts an object and a callback. objFilter 
// should make a new object, and then iterate through the passed-in object, 
// using each key as input for the callback. If the output from the callback 
// is equal to the corresponding value, then that key-value pair is copied into 
// the new object. objFilter will return this new object.

const objFilter = (obj, callback) => {
  let output = {};
  for (let key in obj) {
    if (obj[key] === callback(key)) {
      output = { ...output, [key]: obj[key] }
    }
  }
  return output;
};

// /*** Uncomment these to check your work! ***/
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = n => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

// CHALLENGE 13
// Create a function rating that accepts an array (of functions) and a value. 
// All the functions in the array will return true or false. rating should 
// return the percentage of functions from the array that return true when 
// the value is used as input.

const rating = (arrOfFuncs, value) => {
  let counter = 0;
  arrOfFuncs.forEach(fn => {
    fn(value) ? counter++ : null
  })
  const percentage = (100 / arrOfFuncs.length) * counter;
  return `${percentage}%`;
};

// /*** Uncomment these to check your work! ***/
// const isEven = n => n % 2 === 0;
// const greaterThanFour = n => n > 4;
// const isSquare = n => Math.sqrt(n) % 1 === 0;
// const hasSix = n => n.toString().includes('6');
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 66)); // should log: 75

// CHALLENGE 14
// Create a function pipe that accepts an array (of functions) and a value. 
// pipe should input the value into the first function in the array, and 
// then use the output from that function as input for the second function, 
// and then use the output from that function as input for the third function, 
// and so forth, until we have an output from the last function in the array. 
// pipe should return the final output.

const pipe = (fns, value) => {
  let prev = value;
  fns.forEach(fn => {
    prev = fn(prev)
  });
  return prev;
};

// /*** Uncomment these to check your work! ***/
// const capitalize = str => str.toUpperCase();
// const addLowerCase = str => str + str.toLowerCase();
// const repeat = str => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'


// CHALLENGE 15
// Create a function highestFunc that accepts an object (which will contain functions) 
// and a subject (which is any value). highestFunc should return the key of the 
// object whose associated value (which will be a function) returns the largest number, 
// when the subject is given as input.

const highestFunc = (objOfFuncs, subject) => {
  const keys = Object.keys(objOfFuncs)
  
  return keys.reduce((prev, curr) => 
    objOfFuncs[prev](subject) > objOfFuncs[curr](subject) ? prev : curr)
};

// /*** Uncomment these to check your work! ***/
const groupOfFuncs = {};
groupOfFuncs.double = n => n * 2;
groupOfFuncs.addTen = n => n + 10;
groupOfFuncs.inverse = n => n * -1;
console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'