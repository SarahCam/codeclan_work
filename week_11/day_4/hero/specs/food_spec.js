////////////////////////////////////////////////////////////////////////////////
// D. Extend your hero.
//
// A hero should be able to eat food, and health should go up by the replenishment value
// If the food is their favourite food, their health should go up by 1.5 * value.
// A hero should be able to sort their tasks by difficulty, urgency or reward.
// A hero should be able to view tasks that are marked as completed or incomplete.
// Extension
// Create a constructor to create Rat objects.
// Rats should be able to touch food, if they do the food becomes poisonous.
// Heroes that eat poisonous food should lose health.
// Further
// Be creative. Extend the game! Give the hero super powers.
//
// Create a super-villain who wants to take over the world!
//
// let assert = require('assert');
// let Hero = require('../hero.js');
////////////////////////////////////////////////////////////////////////////////

// C. Create a constructor to create Food objects.
//
// Food should have a name
// Food should have a replenishment value

let assert = require('assert');
let Food = require('../food.js');

describe('Food', function(){

  let food1;

  beforeEach(function(){
    food1 = new Food('meat', 20);
  });

  it('should have a name', function(){
    assert.strictEqual(food1.name, 'meat');
  });

  it('should have a replenishment value', function(){
    assert.strictEqual(food1.value, 20);
  });

});
