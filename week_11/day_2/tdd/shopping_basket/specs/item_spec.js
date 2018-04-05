// We need to find the total cost of the items contained in a shopping basket.
//
// Items should have a name, price and boolean value that determines whether or not they are eligible for a buy one get one free discount.
// A shopping basket can have multiple items.
// It should be able to add and remove items.
// Discounts:
//
// 10% discount for all shopping baskets over £20
// If the customer has a valid discount card then they get an additional 5% off.
// Extension (hard!) Add the ability to have buy one get one free items.

// item should have a name
// item should have a price
// item should be identifiable as BOGOF or not BOGOF

var assert = require('assert');
var Item = require('../item.js');

describe('Item', function(){

  var item1;

  beforeEach(function(){
    item1 = new Item("soap", 2, false);
  });

  it('item should have a name', function(){
    assert.strictEqual(item1.name, "soap");
  });

  it('item should have a price', function(){
    assert.strictEqual(item1.price, 2);
  });

  it('item should be identifiable as BOGOF or not BOGOF', function(){
    assert.strictEqual(item1.bogof, false);
  });

});
