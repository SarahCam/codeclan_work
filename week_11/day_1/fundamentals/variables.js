
// CONST - USE FOR VARS THAT WE DON"T EXPECT TO CHANGE
// ===================================================

// const pi = 3.1415926;
// pi = 10;     // Will error

// ES6 - LET - USE WHEN EXPECT VARIABLE TO CHANGE, BUT DON'T LEAVE IT SET TO LAST VALUE
// ====================================================================================

const pets = ["dog", "cat", "snek"];
//
// for(var pet of pets){
//   console.log(pet);
// }
// console.log(pet);     // Still have "Snek" set to pet....

for(let pet of pets){
  console.log(pet);
}
// console.log(pet);     // will error as pet is now undefined....


// Wierd behaviour here:
for(let pet of pets){
  if(pet === "snek"){
    chosenPet = pet;
  }
}
console.log(chosenPet);
