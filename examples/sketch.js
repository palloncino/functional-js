/**
 * 
 * @GO-TO: http://csbin.io/functional
 * 
 */

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
