const _ = require("lodash");

const people = [
  {name: "John", age: 37, favouriteCheese: "Brie"},
  {name: "Christie", age: 30, favouriteCheese: "Jarlsberg"},
  {name: "Ellie", age: 37, favouriteCheese: "Manchego"},
  {name: "Louise", age: 29, favouriteCheese: "Brie"}
];

// console.log(_.filter(people, function(person){
//   return person.favouriteCheese === "Brie";
// }));

// console.log(_.filter(people, person => person.favouriteCheese === "Brie"));

// =================
// LODASH PREDICATE:
// =================
// console.log(_.filter(people, {favouriteCheese: "Brie"}));
//
// console.log(_.sortBy(people, ['age', 'name']));

// let whipperSnappers = _.remove(people, function(person){return person.age < 37});
// let whipperSnappers = _.remove(people, person => person.age < 37);
//
// console.log(whipperSnappers);
// console.log(people);
//
// let average = _.meanBy(people, 'age');
// console.log(average);

// console.log(_.drop(people, 2));           // drops the first 2 people from array
// // console.log(_.dropRight(people, 2));      // drops the last 2 people from array
// console.log(people);

// console.log(_.take(people, 2));             // takes the first 2 people from array
// console.log(people);

// const firstTwo = _.take(people, 2);
// const removed = _.without(people, firstTwo[0], firstTwo[1]);
// console.log(firstTwo);
// console.log(removed);

const noJohn = _.without(people, people[0]);
console.log(noJohn);

let random = _.random(1, 6);               // random number between 1 and 6, inclusive
console.log(random);

_.times(5, () => {
  console.log('hi!');
});

let arr = _.range(5);         // create array arr with values [0, 1, 2, 3, 4, 5]
console.log(arr);
