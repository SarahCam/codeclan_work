////////////////////////////////////////////////////////////////////////////////
// C. Create a constructor to create Food objects.
//
// Food should have a name
// Food should have a replenishment value
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

// B. Create a constructor to create Task objects
// A task has a difficulty level
// A task has an urgency level
// A task has a reward
// A task should be able to be marked as completed

let assert = require('assert');
let Task = require('../task.js');

describe('Task', function(){

  let task1;

  beforeEach(function(){
    task1 = new Task(5, 4, 'gold');
  });

  it('has a difficulty level', function(){
    assert.strictEqual(task1.difficulty, 5);
  });

  it('has an urgency level', function(){
    assert.strictEqual(task1.urgency, 4);
  });

  it('has a reward', function(){
    assert.strictEqual(task1.reward, 'gold');
  });

  it('should be able to be marked as completed', function(){
    assert.strictEqual(task1.complete, false);
  });

});
