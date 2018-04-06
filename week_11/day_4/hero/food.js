// C. Create a constructor to create Food objects.
//
// Food should have a name
// Food should have a replenishment value

const _ = require("lodash");

let Food = function(name, value){
  this.name = name;
  this.value = value;
};

module.exports = Food;
