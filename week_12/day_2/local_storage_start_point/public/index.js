var setDefinitionText = function (id, text) {
  var span = document.querySelector(id);
  span.innerText = text;
}

var getInputValue = function (id) {
  var input = document.querySelector(id);
  var value = input.value;
  input.value = '';
  return value;
}

var handleButtonClick = function () {
  var name = getInputValue('#name');
  var species = getInputValue('#species');

  var pet = {
    name: name,
    species: species
  };

  setDefinitionText('#name-display', pet.name);
  setDefinitionText('#species-display', pet.species);

  var jsonString = JSON.stringify(pet);           // convert js object to string
  localStorage.setItem('pet', jsonString);        // save JSON string to local storage
}

var app = function () {
  var button = document.querySelector('button');
  button.addEventListener('click', handleButtonClick);

  var jsonString = localStorage.getItem('pet');   // get JSON string out of local storage
  var savedPet = JSON.parse(jsonString);          // convert into JS object

  setDefinitionText('#name-display', savedPet.name);          // so have last saved pet...
  setDefinitionText('#species-display', savedPet.species);
}

window.addEventListener('load', app);
