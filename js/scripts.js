
// Create variable and assign array for different pokemon-types.
// Wrap repository array in an IIFE () () to avoid accidentally accessing the global state.
var pokemonRepository = (function () {
  var repository = [{
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
  }];

// Function to add new Pokemon data
  function add(pokemon) {
    repository.push(pokemon);
  }

// Function to pull all Pokemon data
  function getAll() {
    return repository;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

// Adds a single item (Pokemon)
pokemonRepository.add({ name: 'Pikachu' });

//Creates list of Pokemon:
pokemonRepository.getAll().forEach(function(pokemon) {
document.write('<b>Name: </b>' + pokemon.name + '<div></div>');
});
