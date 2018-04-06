// A. Create a constructor to create a Hero character
//
// A Hero has a name
// A Hero has health
// A Hero has a favourite food
// A Hero can talk saying their name
// A Hero has a collection of tasks to complete

const _ = require("lodash");

let Hero = function(name, health, faveFood){
  this.name = name;
  this.health = health;
  this.faveFood = faveFood;
  this.tasks =[];
};

Hero.prototype.talk = function () {
  return 'My name is ' + this.name;
};

Hero.prototype.eat = function (food) {
  if(food.name === this.faveFood){
    this.health += (food.value * 1.5);
  }else{
    this.health += food.value;
  }
};

Hero.prototype.addTask = function (task) {
  this.tasks.push(task);
};

Hero.prototype.sortTasksBy = function (value) {
  return _.sortBy(this.tasks, [value]);
};

Hero.prototype.completeTask = function (task) {
  task.complete = true;
};

Hero.prototype.viewTasks = function (complete) {
  return _.filter(this.tasks, ['complete', complete]);
};

module.exports = Hero;
