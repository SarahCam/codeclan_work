const logRed = function(message){
  console.log(message);
};

const logNotRed = function(){           // These fns are being declared as variables!
  console.log("It's NOT red!");
};

const redChecker = function(message, colour, isRed, isNotRed){      // message is passed to our fn
  if(colour === "red"){
    isRed(message);                            // Only need to add () when want to execute fn
  }else{
    isNotRed();
  }
  console.log("Finished");
}

redChecker("This will print out when the colour is red!", "red", logRed, logNotRed);   // Pass in without () as the fns ares 'variable' at this stage, not being executed


// 1. Write a function, *functionCaller*, that takes a function (myCallback) and a number as parameters.
// The *functionCaller* returns myCallback called with the number (as an argument).

const myCallback = function(num){
  return num;
};

const functionCaller = function(callback, number){
  return callback(number);
};

console.log(functionCaller(myCallback, 5));

//
// 2. **Maths Fun:** Write two functions *increment* and *square*. *increment* should take in a number
// and return the number plus 1. *square* should take in a number and return it multiplied by itself.

const increment = function(number){
  return number + 1;
};

const square = function(number) {
  return number * number;
};

//
//   Write another function called *doSomeMathsForMe* that takes in a number (*n*) and a function (a callback)
//   and executes the callback, passing in *n* as an argument.

const doSomeMathsForMe = function(n, callback){
  return callback(n);
};

//
//   Invoke *doSomeMathsForMe* by passing it a number and the *increment* and/or *square* function.

console.log(doSomeMathsForMe(10, increment));
console.log(doSomeMathsForMe(10, square));

console.log(doSomeMathsForMe(doSomeMathsForMe(10, square), increment));

console.log(doSomeMathsForMe(9, Math.sqrt));
