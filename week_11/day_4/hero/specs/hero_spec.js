////////////////////////////////////////////////////////////////////////////////
// B. Create a constructor to create Task objects
// A task has a difficulty level
// A task has an urgency level
// A task has a reward
// A task should be able to be marked as completed
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

// A. Create a constructor to create a Hero character
//
// A Hero has a name
// A Hero has health
// A Hero has a favourite food
// A Hero can talk saying their name
// A Hero has a collection of tasks to complete



let assert = require('assert');
let Hero = require('../hero.js');
let Food = require('../food.js');
let Task = require('../task.js');

describe('Hero', function(){

  let hero1, meat, oats, task1, task2, task3;

  beforeEach(function(){
    hero1 = new Hero('Hercules', 10, 'meat');
    meat = new Food('meat', 20);
    oats = new Food('oats', 5);
    task1 = new Task(4, 4, 'gold');
    task2 = new Task(5, 2, 'axe');
    task3 = new Task(1, 1, 'oats');
  });

  it('has a name', function(){
    assert.strictEqual(hero1.name, 'Hercules');
  });

  it('has health', function(){
    assert.strictEqual(hero1.health, 10);
  });

  it('has a favourite food', function(){
    assert.strictEqual(hero1.faveFood, 'meat');
  });

  it('can talk saying their name', function(){
    assert.strictEqual(hero1.talk(), 'My name is Hercules');
  });

  it('has a collection of tasks to complete', function(){
    assert.strictEqual(hero1.tasks.length, 0);
    assert.deepStrictEqual(hero1.tasks, []);
  });

  // D. Extend your hero.
  //
  // A hero should be able to eat food, and health should go up by the replenishment value
  // If the food is their favourite food, their health should go up by 1.5 * value.
  // A hero should be able to sort their tasks by difficulty, urgency or reward.
  // A hero should be able to view tasks that are marked as completed or incomplete.

  it('should be able to eat food, and health should go up by the replenishment value', function(){
    hero1.eat(oats);
    assert.strictEqual(hero1.health, 15);
  });

  it('if the food is their favourite food, their health should go up by 1.5 * value', function(){
    hero1.eat(meat);
    assert.strictEqual(hero1.health, 40);
  });

  it('should be able to add tasks', function(){
    hero1.addTask(task1);
    hero1.addTask(task2);
    hero1.addTask(task3);
    assert.strictEqual(hero1.tasks.length, 3);
  });

  it('should be able to sort their tasks by difficulty, urgency or reward', function(){
    hero1.addTask(task1);
    hero1.addTask(task2);
    hero1.addTask(task3);
    assert.deepStrictEqual(hero1.sortTasksBy('difficulty'), [task3, task1, task2]);
    assert.deepStrictEqual(hero1.sortTasksBy('urgency'), [task3, task2, task1]);
    assert.deepStrictEqual(hero1.sortTasksBy('reward'), [task2, task1, task3]);
  });

  it('should be able to complete task', function(){
    hero1.addTask(task1);
    hero1.completeTask(hero1.tasks[0]);
    assert.strictEqual(hero1.tasks[0].complete, true);
  });

  it('should be able to view tasks that are marked as completed or incomplete', function(){
    hero1.addTask(task1);
    hero1.addTask(task2);
    hero1.addTask(task3);
    hero1.completeTask(hero1.tasks[0]);
    assert.deepStrictEqual(hero1.viewTasks(true), [task1]);
    assert.deepStrictEqual(hero1.viewTasks(false), [task2, task3]);
  });

});
