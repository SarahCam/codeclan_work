var Athlete = function(){
  this.hydration = 100;
  this.distance = 0;
};

Athlete.prototype.run = function () {
  if(this.hydration >= 10){
    this.hydration -= 10;
    this.distance += 10;
  };
};

Athlete.prototype.drink = function(bottle) {
  bottle.drink();
  this.hydration += 10;
};

module.exports = Athlete;
