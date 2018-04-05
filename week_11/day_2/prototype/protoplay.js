// var myPerson = Object.create(null);
//
// myPerson.walk = function(){
//   console.log("left right left right");
// };
//
// //--------------------------------------
//
// var wisePerson = {
//   wisdom: function(){
//     console.log("Commit often");
//   };
// };
//
// //--------------------------------------
//
// var myPerson = Object.create(wisePerson);
//
// myPerson.walk = function(){
//   console.log("left right left right");
// }
//
// myPerson.wisdom();
//
// //--------------------------------------

// This means all fish have the same function swim.....
// No fish can swim differently...

// var Fish = function(name, colour){
//   this.name = name;
//   this.colour = colour;
//   this.swim = function(){
//     console.log("splash");
//   };
// };
//
// var myFish = new Fish("nemo", "orange");
//
// myFish.swim();

//-----------------------------------------
// So let's define a Fish prototype...

var Fish = function(name, colour){
  this.name = name;
  this.colour = colour;
};
                              // Prototype is a bit like an abstract class...
Fish.prototype = {            // This is like a hash and key:values, so separate each by , not ;
  habitat: "Water",
  style: function(myStyle){
    console.log(myStyle);
  },
  swim: function(){
    console.log("splash");
  }                           // NO SEMI-COLON HERE!!!!
};

var myFish = new Fish("nemo", "orange");

myFish.swim();
console.log(myFish.habitat);
myFish.style("flippers");

Object.getPrototypeOf(myFish);
console.log(Object.getPrototypeOf(myFish));     // ES6 syntax
console.log(myFish.__proto__);                  // ES5 syntax

//------------------------------------------








//
