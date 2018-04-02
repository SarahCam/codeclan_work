// STRINGS
// =======

// var myString = "Hello world!";
// var hello = "Hello " + "World!";
//
// var name = "John";
// var helloJohn = `Hello ${name}`;
//
// console.log(myString);
// console.log(helloJohn);

// NUMBERS
// =======

// var age = 37;
//
// console.log(age / 3);

// WEAKLY TYPED
// ============

// console.log(3 + "hello");
//
// console.log("route" + 6 + 6);
//
// console.log("route" + (6 + 6));
//
// console.log(6 + 6 + "route");

// var wholeNumber = 1;
// var negativeNumber = -1;
// var myFloat = 2.5;
// var scientificNotation = 6.02e23;

// var b;
// console.log(b);           // undefined - default state for a var
// console.log(typeof(b));   // undefined
//
// var hash = {};
// console.log(hash.a);     // undefined
// console.log(hash);       // {}


// var x = null;
// console.log(x);             // null - does not have a value
// console.log(typeof(x));     // object


// BOOLEANS
// ========

var t = true;
var f = false;

// console.log(1 > 2);     // false
// console.log(2 == 2);    // true
// console.log(2 == "2");  // true - weakly typed
// console.log(3 != 4);    // true
// console.log(2 === "2"); // false - === checks value and type
// console.log(2 === 2);   // true
// console.log(2 !== "2"); // true
//
// console.log((1+1 === 2) && (1+1 === 4));  //false
// console.log((1+1 === 2) || (1+1 === 4));  //true - short-circuiting
//
// !true

// TRUTHINESS / FALSINESS
// ======================

console.log(Boolean(5));  // true
console.log(Boolean(0));  // false - only false if zero
console.log(Boolean(-1)); // true
console.log(Boolean(Infinity)); // true
console.log(Boolean(-Infinity)); // true

console.log(Boolean(""));        // false
console.log(Boolean("cat"));     // true - only true if it is a 'thing'

console.log(Boolean(NaN));      // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false












//
