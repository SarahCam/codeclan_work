// CONST in this scenario - We can't change the definition...
// but we can change the object property values and add extra properties...

const myPerson = {
  name: "Guybrush",
  age: 32,
  weapon: "cutlass",
  talk: function(){
    console.log('shiver me timbers, my name is ' + this.name);
  }
};

// console.log("my person", myPerson);

// console.log(myPerson.weapon);
// myPerson.name = "Guybrush Threepwood";
// myPerson.age += 1;
// console.log("my person", myPerson);
//
// myPerson.occupation = "Mighty Pirate";
// console.log("my person", myPerson);

// myPerson.freeze();   //  NOT IN NODE YET!!!
// myPerson.occupation = "Janitor";

// myPerson.talk();
//
// const object = {};
// const anotherObject = Object.create(null);
// const yetAnotherObject = new Object();
//
// console.log(object, anotherObject, yetAnotherObject);

console.log(myPerson['name']);

const keyToAccess = 'age';
console.log(myPerson[keyToAccess]);

const keys = Object.keys(myPerson);

for(let key of keys){
  console.log('key:', key, 'value:', myPerson[key]);
}

// Create a bear object that has a type, a name, a belly and an eat method.
// The eat method should add something to the bear's belly.



const bear = {
  type: 'grisly',
  name: 'bigbear',
  belly: [],
  eat: function(fish){
    this.belly.push(fish);        // remember to use this. to access properties in object
  }
};

bear.eat("salmon");

console.log("bear", bear);











//
