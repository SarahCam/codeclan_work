//////////////////////////////////// FUNCTION:
// 'this' refers to environment, i.e. window/node
//==================================================

// function add(a, b){
//   console.log(this);        // tethered to the environment, i.e. node, or browser window
//   // this.myNumber = 20;       // adds property called myNumber to node environment
//   return a + b;
// }
//
// add(5, 3);
// // console.log(process.myNumber);

///////////////////////////////////// OBJECT:
// 'this' refers to object
//==================================================

// var car = {
//   speed: 0,
//   accelerate: function(){
//     console.log(this);        // tethered to the car object
//     this.speed += 10;
//   },
//   decelerate: function(){
//     this.speed -= 10;
//   }
// };
//
// car.accelerate();
// console.log(car.speed);
// console.log(car);
// console.log(this);            // {}  ???NOT TETHERED TO ANYTHING??? This is a node issue - because we are not module.export'ing

///////////////////////////////////// CONSTRUCTOR:
// 'this' refers to instance created by constructor
//==================================================

function Animal(type, legs){
  this.type = type;
  this.legs = legs;
  this.loginfo = function(){
    console.log(this === myCat);      // will output 'true'
    console.log('The ' + this.type + ' has ' + this.legs + ' legs');
  }
}

var myCat = new Animal('Cat', 4);
myCat.loginfo();

///////////////////////////////////// CALLBACK:
// 'this' refers to function calling the callback
//==================================================

setTimeout(myCat.loginfo, 1000);                // 'this' no longer refers to instance created by constructor! it refers to setTimeout
setTimeout(myCat.loginfo.bind(myCat), 1000);    // 'this' works again, as we have told it what to bind to!!!
