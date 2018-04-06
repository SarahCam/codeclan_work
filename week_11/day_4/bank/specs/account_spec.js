// Let's take our joint love of TDD and lodash and mush them together to
// create a tested OO model of a Bank!
//
// The bank should have:
//
// An array of accounts
// The bank should be able to:
//
// Add an account
// Find account by account name.
// Find the largest account.
// Find the total value of all accounts.
// Find the average value of all accounts.
// Find the total value for a certain account type.
// An account should have:
//
// A name
// An amount
// An account type

let assert = require('assert');
let Account = require('../account.js');


describe('Account', function(){

  let account;

  beforeEach(function(){
    account = new Account('Sarah', 100, 'personal');
  });

  it('should have a name', function(){
    assert.strictEqual(account.name, 'Sarah');
  });

  it('should have an amount', function(){
    assert.strictEqual(account.amount, 100);
  });

  it('should have an account type', function(){
    assert.strictEqual(account.type, 'personal');
  });

});
