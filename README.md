⚡️ Learning functional programming concepts by practical examples. These use cases might be overengineered for the task they achieve, but in real-world scenarios, these technics are proven to be worthy.

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
console.log(total(1)(1)); // output: 2
```