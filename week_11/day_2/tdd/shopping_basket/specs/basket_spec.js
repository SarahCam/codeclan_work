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

// basket should be empty to begin with
// can add one item to basket
// can add multiple items to basket
// can remove one item from basket
// can empty basket
// can sum total of basket
// if total is greater than £20, can give 10% discount
// if customer has discount card, can give 5% discount
// if customer has discount and total is greater than £20, can give 15% discount
// if customer has multiple items that are eligible for BOGOF, customer gets some free


var assert = require('assert');
var Basket = require('../basket.js');
var Item = require('../item.js');
var Customer = require('../customer.js');

describe('Basket', function(){

  var basket1, item1;

  beforeEach(function(){
    customer1 = new Customer("Max", true);
    basket1 = new Basket(customer1);
    item1 = new Item("soap", 2, false);
    item2 = new Item("cake", 10, false);
    item3 = new Item("bread", 1, true);
    basket2 = new Basket(customer1);
    basket2.addItem(item1);
    basket2.addItem(item2);
    basket2.addItem(item3);
    basket3 = new Basket(customer1);
    basket3.addItem(item1);
    basket3.addItem(item2);
    basket3.addItem(item2);
    basket3.addItem(item3);
  });

  it('basket should be empty to begin with', function(){
    assert.deepStrictEqual(basket1.items.length, 0);
  });

  it('can add one item to basket', function(){
    assert.strictEqual(item1.name, "soap");
    basket1.addItem(item1);
    assert.deepStrictEqual(basket1.items.length, 1);
    assert.deepStrictEqual(basket1.items[0].name, "soap");
  });

  it('can add multiple items to basket', function(){
    basket1.addItem(item1);
    basket1.addItem(item2);
    basket1.addItem(item3);
    assert.deepStrictEqual(basket1.items.length, 3);
  });

  it('can remove one item from basket - first item', function(){
    basket2.removeItem(item1);
    assert.deepStrictEqual(basket2.items.length, 2);
    assert.deepStrictEqual(basket2.items[0].name, "cake");
    assert.deepStrictEqual(basket2.items[1].name, "bread");
  });

  it('can remove one item from basket - a chosen item');

  it('can empty basket', function(){
    basket2.empty();
    assert.deepStrictEqual(basket1.items.length, 0);
  });

  it('can sum total of basket', function(){
    assert.strictEqual(basket2.total(), 13);
  });

  it('if total is greater than £20, can give 10% discount', function(){
    assert.strictEqual(basket3.total(), 20.7);

  });

  it('if customer has discount card, can give 5% discount', function(){
    assert.strictEqual(basket2.total(), 12.35);
  });

  it('if customer has discount and total is greater than £20, can give 15% discount', function(){

  });

  it('if customer has multiple items that are eligible for BOGOF, customer gets some free', function(){

  });

});
