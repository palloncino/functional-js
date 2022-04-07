⚡️ Learning functional programming concepts by practical examples. These use cases might be overengineered for the task they achieve, but in real-world scenarios, these technics are proven to be worthy.

## HOF - Higher order function

Higher order functions or hof(s) are simply functions that takes functions as a parameter

```js
function copyArrayAndManipulate(array, instructions) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]))
  }
  return output;
}

const multyplyBy2 = num => num * 2;

const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);
console.log(result) // [2, 4, 6]
```

## Currying

Currying is the process of transforming a function to 

```js 
fn(a, b, c)
```
to:

```js
fn(a)(b)(c)
```
Let's see an example:

```js
function curry(fn) {
  return function(x) {
    return function(y) {
      return fn(x, y);
    }
  }
}

const sum = (x, y) => x + y
const total = curry(sum);
const result = total(1)(1);
console.log(result); // output: 2
```