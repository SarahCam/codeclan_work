// var guitars = [];
// var guitars = new Array();    // Formal way!!!

// console.log(Boolean([]));   // true - empty handbag :)
// console.log(Boolean([].length));    // false
//
// var guitars = ["Fender", "Gibson", "Gretsch"];

// console.log(guitars);
//
// var drums = new Array();
// drums.push("Yamaha");
// drums.push("Gretsch");
//
// console.log(drums);
//
// console.log(guitars[0]);    // Fender
// console.log(guitars[-1]);   // Undefined
// console.log(guitars[100]);  // Undefined
//
// drums[1] = "Zildjian";      // replace item 1 in array
// drums[10] = "red";          // will also have 8 empty items
// drums.push("new");
// console.log(drums);
// console.log(drums.length);  // 12
//
// // Find a way to remove the first element of an array.
// drums.shift();
// console.log(drums);
// // Find how to remove the last element of an array
// drums.pop();
// console.log(drums);

// slice
// splice
// shift
// unshift
// filter

// SLICE
// =====

// var drums1 = drums.slice(0, 1);
// console.log(drums1);

// var guitars = ["Fender", "Gibson", "Gretsch", "Flying V"];

// var firstTwoGuitars = guitars.slice(0, 2);  // Fender, Gibson
// console.log(firstTwoGuitars);
//
// var firstTwoGuitars = guitars.slice(1, 0);  // []
// console.log(firstTwoGuitars);
//
// var firstTwoGuitars = guitars.slice(0);  // Fender.. FlyingV
// console.log(firstTwoGuitars);

// SPLICE - REMOVES ITEMS/INSERTS ITEMS TO ARRAY
// =============================================

// guitars.splice(0, 0, "New Item 0");
// console.log(guitars);
//
// var indexToRemove = guitars.indexOf("Gibson");
// console.log(indexToRemove);
// guitars.splice(indexToRemove, 1);
// console.log(guitars);

// drums.splice(1, 0, "TEST");
// console.log(drums);
// drums.splice(0, 1, "TEST");
// console.log(drums);

// FILTER - TAKES IN ANOTHER FUNCTION - LIKE LAMBDA IN JAVA
// ========================================================

// var numbers = [1,2,3,4,5,6,7,8,9,10];
//
// result = numbers.filter(x => x % 2 === 0);   // filters out evens
// console.log(result);
//
var guitars = ["Fender", "Gibson", "Gretsch", "Flying V"];
//
// var gGuitars = guitars.filter(guitar => guitar.startsWith("G"));
// console.log(gGuitars);

guitars[10] = "New Guitar";

var real_guitars = guitars.filter(guitar => guitar !== undefined);

console.log(guitars);




//
