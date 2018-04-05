// const numbers = [1,2,3,4,5];

// for(let number of numbers){
//   console.log(number);
// }

// const thingToDoToEachNumber = function(number){
//   console.log(number);
// }
//
// numbers.forEach(thingToDoToEachNumber);

const numbers = [1,2,3,4,5];

Array.prototype.ourForEach = function(callback){
  // callback: function to call against each element
  // "this": the current array
  for(let element of this){
    callback(element);
  }
};

numbers.ourForEach(function(number){
  console.log(number);
});

// numbers.ourForEach(function(number){
//   console.log(Math.sqrt(number));
// });
