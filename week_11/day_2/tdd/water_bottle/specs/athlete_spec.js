// Create and test a constructor for athlete objects.
//
// Athlete should have a hydration attribute that starts at 100.
// Athlete should have a distance covered attribute starts at 0.
// Athlete should be able to run: increasing distance, decreasing hydration.
// Athlete should not move when running dehydrated: hydration at 0;
// Athlete should be able to increase hydration by drinking from water bottle
// Use Mocha's beforeEach() to create a new instance of WaterBottle and Athlete before each test.

var assert = require('assert');
var Athlete = require('../athlete.js');
var WaterBottle = require('../water_bottle.js');



describe('Athlete', function(){

  var athlete;

  beforeEach(function(){
    athlete = new Athlete();
  });

  it('Athlete should have a hydration attribute that starts at 100', function(){
    assert.strictEqual(athlete.hydration, 100);
  });

  it('Athlete should have a distance covered attribute starts at 0', function(){
    assert.strictEqual(athlete.distance, 0);
  });

  it('Athlete should be able to run: increasing distance, decreasing hydration.', function(){
    athlete.run();
    assert.strictEqual(athlete.distance, 10);
    assert.strictEqual(athlete.hydration, 90);
  });

  it('Athlete should not move when running dehydrated: hydration at 0', function(){
    athlete.hydration = 0;
    assert.strictEqual(athlete.hydration, 0);
    athlete.run();
    assert.strictEqual(athlete.distance, 0);
  });

  it('Athlete should be able to increase hydration by drinking from water bottle', function(){
    var bottle = new WaterBottle();
    bottle.fill();
    athlete.drink(bottle);
    assert.strictEqual(athlete.hydration, 110);
    assert.strictEqual(bottle.volume, 90);
  });

});
