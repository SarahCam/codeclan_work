var pets = ["dog", "cat", "snek", "parrot"];

// TRADITIONAL FOR LOOP

for(var i = 0; i < pets.length; i++){
  console.log(pets[i]);
}

// ES6 - NEW WAY - FOR..OF
// =======================

for(var pet of pets){
  console.log(pet);
}


// ES6 - FOR..IN - loop over index number - hashes
// ===============================================

// Will return the index, i.e. 0, 1, 2, 3
for(var thing in pets){
  console.log(thing);
}

var person = {
  "name": "John",
  "age": 37
};

// Will return the key, i.e. name and age:
for(var key in person) {
  console.log(key);         // Key
  console.log(person[key]); // Value
}

// WHILE LOOP
// ==========
var x = 0;

while(x < 10) {
  console.log("loop " + x);
  x++;
}









//
