
// Create variable and assign array for different pokemon-types
var repositoryArray = [
  {
    name: 'Nidoqueen',
    height: 1.3,
    types: ['ground', ' poison']
  },
  {
    name: 'Beedrill',
    height: 1.2,
    types: ['bug', ' poison']
  },
  {
    name: 'Dewgong',
    height: 1.7,
    types: ['ice', ' water']
  }
]

document.write('<h1>Pokemons:</h1>')

// Create loop to iterate each item in repositoryArray; Check the height and show a message if height is above 1.7 --> "Wow, that's big!""
// for (var i = 0; i <= repositoryArray.length - 1; i++) {
//  if (repositoryArray[i].height >= 1.7) {
//    document.write('<main><li><b>Name: </b>' + repositoryArray[i].name + ' (Height: ' + repositoryArray[i].height + ') Wow, that\'s big!</li></main>')
//  } else {
//    document.write('<main><li><b>Name: </b>' + repositoryArray[i].name + ' (Height: ' + repositoryArray[i].height + ')</li></main>')
//  }
// }

 // ForEach function to loop over the Pokémon in the repositoryArray in order to print the details of each one.
repositoryArray.forEach(function(item, index, array) {
document.write('<b>Name: </b>' + item.name + ', Height: ' + item.height + ', Types: ' + item.types + '<div></div>')
});
