// TODO: Transform abilities into this shape:
// {
//   name: football,
//   level: 5,
// }

const MOCK = [
  {
    name: 'Mike',
    age: 25,
    sport: {
      name: 'football',
      level: 5,
    },
  },
  {
    name: 'Jessica',
    age: 23,
    sport: {
      name: 'volleyball',
      level: 4,
    },
  },
]

const newMock = MOCK.reduce((prev, { sport, ...rest }) => {
  const newCurr = { ...rest, abilities: [{ name: sport.name, level: sport.level }] };
  return [ ...prev, newCurr ];
}, [])

const newMock2 = MOCK.map(({ sport, ...rest }) => ({ ...rest, abilities: [{ name: sport.name, level: sport.level }] }));

console.log(newMock)
console.log(newMock2)

