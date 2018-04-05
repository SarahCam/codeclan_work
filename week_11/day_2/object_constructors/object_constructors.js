// var myObject = {};
//
// myObject.shape = 'circle';
// myObject.radius = 10;
//
// var myObject = new Object();
// myObject.size = 6;
// myObject.colour = 'red';
//
// var house1 = {
//   sqFeet: 2000;
//   bathrooms: 2;
//   bedrooms: 3;
// };

// Use JScript object constructor function.. to instantiate many houses



var House = function(sqFeet, bathrooms, bedrooms){
  this.sqFeet = sqFeet;
  this.bathrooms = bathrooms;
  this.bedrooms = bedrooms;
  this.numberOfRooms = function(){
    return (this.bathrooms + this.bedrooms);
  };
};

var house1 = new House(1000, 3, 4);
var house2 = new House(2000, 4, 5);

console.log(house1.sqFeet);
console.log(house2.bedrooms);

console.log(house1.numberOfRooms());

//===========================================

var Office = function(desks, meetingRooms){
  this.desks = desks;
  this.meetingRooms = meetingRooms;
  this.averageDesksPerMeetingRoom = function(){
    return this.desks/this.meetingRooms;
  }
}

var office1 = new Office(100, 10);
var office2 = new Office(2, 2);

console.log(office1);
console.log(office1.averageDesksPerMeetingRoom());

//===========================================

var Planet = function(name){
  this.name = name;
};

var SolarSystem = function(name){
  this.name = name;
  this.planets = [];
  this.addPlanet = function(planet){
    this.planets.push(planet);
  };
};

var planet1 = new Planet("Venus");
var planet2 = new Planet("Mercury");
var solarSystem1 = new SolarSystem("Milky Way");

console.log(planet1);
console.log(solarSystem1);
solarSystem1.addPlanet(planet1);
solarSystem1.addPlanet(planet2);
console.log(solarSystem1.planets);
console.log(solarSystem1);

//===========================================

































//
