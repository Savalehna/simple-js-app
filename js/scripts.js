// Create a variable and assign array for different pokemon-types.
// Wrap repository array in an IIFE () () to avoid accidentally accessing the global state:
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

// Function to add new pokemon data (The parameter pokemon represents a single pokemon):
  function add(pokemon) {
    repository.push(pokemon);
  }

// Function to pull all pokemon data:
  function getAll() {
    return repository;
  }

// Function for adding new listItem:
  function addListItem(pokemon){
// Create a new li-element that contains a button for each pokemon:
    var listItem = document.createElement('li');
    var button = document.createElement('button');
// Appends the button to the list item as its child:
      listItem.appendChild(button);
// Appends the list item to the unordered list as its child:
    $pokemonList.appendChild(listItem);
// The button shows the name from the current pokemon:
    button.innerText = pokemon.name;
// Give the button a custom button style from styles.css to overwrite default styling:
    button.classList.add('button');
// Add a function to the button which is executed when the button is clicked:
    button.addEventListener('click', function (){
      showDetails(pokemon)
      })
    }
// Function which will be executed when the button is clicked in function addListItem.
// Log the details of the current pokemon in the console:
    function showDetails(pokemon){
      console.log(pokemon)
    }
// Returns the values wich can be accessed to outside the IIFE:
  return{
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

// Creates a variable above the forEach loop block and assigns it to the ul element:
var $pokemonList = document.querySelector('ul');

// The forEach block, calls the function addListItem inside the IIFE
// and passes the pokemon returned in the forEach block to the addListItem function call.
// It returns a pokemon in each iteration:
pokemonRepository.getAll().forEach(function(currentItem){
  pokemonRepository.addListItem(currentItem);
})
