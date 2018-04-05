var assert = require('assert');
var WaterBottle = require('../water_bottle.js');

// Write and pass the following tests:
//
// water bottle should be empty(X)
// should go to 100 when filled
// should go down by 10 when drank
// should go to 0 when emptied
// should not be able to go below 0
// Water Bottle Lab Extension
// Create and test a constructor for athlete objects.
//
// Athlete should have a hydration attribute that starts at 100.
// Athlete should have a distance covered attribute starts at 0.
// Athlete should be able to run: increasing distance, decreasing hydration.
// Athlete should not move when running dehydrated: hydration at 0;
// Athlete should be able to increase hydration by drinking from water bottle
// Use Mocha's beforeEach() to create a new instance of WaterBottle and Athlete before each test.

describe('Water Bottle', function(){
  it('should be empty at the start', function(){
    var bottle = new WaterBottle();
    assert.strictEqual(bottle.volume, 0);
  });

  it('should go to 100 when filled', function(){
    var bottle = new WaterBottle();
    bottle.fill();
    assert.strictEqual(bottle.volume, 100);
  });

  it('should go down by 10 when drank', function(){
    var bottle = new WaterBottle();
    bottle.fill();
    bottle.drink();
    assert.strictEqual(bottle.volume, 90);
  });

  it('should go to 0 when emptied', function(){
    var bottle = new WaterBottle();
    bottle.fill();
    bottle.empty();
    assert.strictEqual(bottle.volume, 0);
  });

  it('should not be able to go below 0', function(){
    var bottle = new WaterBottle();
    bottle.drink();
    assert.strictEqual(bottle.volume, 0);
  });

});
