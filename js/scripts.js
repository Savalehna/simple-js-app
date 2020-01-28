// Create variable and assign array for different pokemon-types

var repositoryArray = [
  {
    name: 'Nidoqueen',
    height: 1.3,
    types: ['ground', 'poison']
  },
  {
    name: 'Beedrill',
    height: 1.2,
    types: ['bug', 'poison']
  },
  {
    name: 'Dewgong',
    height: 1.7,
    types: ['ice', 'water']
  }
]

// Create loop to iterate each item in repositoryArray

for (var i = 0; i <= 2; i++) {
  if (repositoryArray[i].height >= 1.7) {
    document.write('<p>name: ' + repositoryArray[i].name + ' (height: ' + repositoryArray[i].height + ') Wow, that\'s big!</p>')
  } else {
    document.write('<p>name: ' + repositoryArray[i].name + ' (height: ' + repositoryArray[i].height + ')</p>')
  }
}
