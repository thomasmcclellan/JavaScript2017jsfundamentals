//Map => like filter, it goes through an array, but unlike filter, it doesn't throw objects away, but transforms them

var animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' }
]

var names1 = animals.map(function(animal) {
  return animal.name
})

// var names = []
// for (var i = 0; i < animals.length; i++) {
//   names.push(animals[i].name)
// }

console.log(names1) //['Fluffykins', 'Caro', 'Hamilton', 'Harold', 'Ursula', 'Jimmy']


var names2 = animals.map(function(animal) {
  return animal.name + ' is a ' + animal.species
})

console.log(names2) //['Fluffykins is a rabbit', ...]


var names3 = animals.map((animal) => animal.name)