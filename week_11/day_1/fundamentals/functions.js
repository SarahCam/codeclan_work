// function hello(){
//   return "hello everyone";
// }
//
// console.log("The return value is", hello());

// function mood(name, mood){
//   console.log(`${name} you are: ${mood}`);
// }
//
// mood("Sarah", "happy");
// mood("happy");            // Will replace name with undefined
// mood();
//
// function mood2(name, mood, weather){
//   console.log(`${name} it is ${weather} and you are: ${mood}`);
// }
//
// mood2("Sarah", "Awesome", "Sunny");

// function add(a, b){
//   return a + b;
// }
//
// console.log("The return value is", add(1, 2));

// function sum(){
//   let total = 0;
//   for (let argument of arguments){      // arguments keyword takes whatever args you supply
//     total += argument;
//   }
//   return total;
// }
//
// console.log(sum(1,2,3,4));        // 10
// console.log(sum(1,2,3,"hi"));     // 6hi
// console.log(sum("hi",2,3,4));     // 0hi234

// INVOCATION OF A FUNCTION
// ========================

// const hello = function(){             // no name needed for function... as assigned to hello
//   console.log("hiya");
// }
//
// hello();
//
// const mood = function(name, mood, weather){
//   console.log(`${name} it is ${weather} and you are: ${mood}`);
// }
//
// mood("Sarah", "Happy", "ICY");
//
// const sum = new Function('a', 'b', 'return a + b');
// console.log(sum(2, 6));

// ANONYMOUS FUNCTION
// ==================

// PASS FUNCTIONS AS ARG TO OTHER FUNCTIONS
// ========================================

// const add = function(a, b){
//   return a + b;
// };
//
// const wow = function(functionToInvoke){
//   console.log(functionToInvoke(2,1));
// };
//
// wow(add);
//
// const wow2 = function(functionToInvoke){
//   console.log(functionToInvoke);
// };
//
// wow2(add(2,1));


// Create a function that takes in the first name and surname, and speaks eg "Howdy, I am Rick Henry"

const speak = function(name, surname){
  console.log(`Howdy, I am ${name} ${surname}`);
};

speak("Sarah", "Campbell");

// Create a multiply function, returning the result.

const multiply = function(a, b){
  return a * b;
};

console.log(multiply(2,2));

// Create a function that takes in an array and returns the first element.

const firstElement = function(array){
  // return array.shift();
  return array[0];
};

var numbers = [1,2,4];
console.log(numbers);
console.log(firstElement(numbers));

// Create a function that takes in a list of names of any length, and prints them all to screen.

const printNames = function(){
  for(let argument of arguments){
    console.log(argument);
  }
};

printNames("Sarah", "Jean", "Christie");

// Create an array of animal names and a function that adds the animals to a farm array and prints the names to the console.

const animalNames = ["Dog", "Cat", "Duck"];

farmArray = [];

// const addAnimals = function(){
//   for(let name of arguments){
//     farmArray.push(name);
//     console.log(name);
//   }
// };

function addAnimals(){
  for(let name of arguments){
    farmArray.push(name);
    console.log(name);
  }
};

addAnimals(animalNames);

console.log(animalNames);
console.log(farmArray);

function addAnimals2(animals){
  let farm = [];
  for(let name of animals){
    farm.push(name);
    console.log(name);
  }
}

addAnimals2(animalNames);




//
