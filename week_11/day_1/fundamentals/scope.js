
let name = "Colin";

const talk = function(){
  var name = "John";
  // name = "John";          // reassigns global var to "John" -oucha!!!!
  console.log('My name is ' + name);
};

talk();


// ALL out of scope: WONT WORK - IF name is defined within talk function - so define const name outside
// ====================================================================================================
// console.log("accessing name", name);

const walk = function(){
  console.log(name + ' is walking');
};

walk();

console.log('the global name', name);


// var name = "Colin";        // HOISTING!!! JS interpreter grabs everything that is a var, and marks it as undefined until it gets assigned!!!!
                              // Only vars are hoisted, not consts, and not lets
                              // undefined is a real value in js, not defined is an error!!!!


// ==========================

// var globalVariable = 99;
//
// var separateFunction = function() {
//   // var separateA = 2;
//   separateA = 2;      // FIX - makes it global (still assumes it is a var)
// };
//
// var outerFunction = function() {
//   var outerA = 1;
//   separateFunction();  // FIX - add a call to this function to assign value to separateA
//   var innerFunction = function() {
//     console.log('outerA ', outerA);
//     console.log('globalVariable', globalVariable)
//     console.log('separateA ', separateA);
//   };
//
//   innerFunction()
// };
//
// outerFunction();

// ==========================

const globalVariable = 99;

const separateFunction = function() {
  // var separateA = 2;
  separateA = 2;      // FIX - makes it global (still assumes it is a var)
};

const outerFunction = function() {
  const outerA = 1;
  separateFunction();  // FIX - add a call to this function to assign value to separateA
  const innerFunction = function() {
    console.log('outerA ', outerA);
    console.log('globalVariable', globalVariable)
    console.log('separateA ', separateA);
  };

  innerFunction()
};

outerFunction();















//
