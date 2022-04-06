const Right = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(f(${x}))`
});

const Left = x => ({
  map: f => Left(f(x)),
  fold: (f, g) => f(x),
  inspect: () => `Left(f(${x}))`
});

const fn = x => Math.random()*10 >= 5 ? Left(x) : Right(x);

const result = fn(3).map(x => x + 1).fold(r => r**2, r => Math.sqrt(r));
console.log({result});