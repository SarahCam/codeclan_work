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
let Bank = require('../bank.js');
let Account = require('../account.js');


describe('Bank', function(){

  let bank;

  beforeEach(function(){
    bank = new Bank();
    account1 = new Account('Sarah', 100, 'personal');
    account2 = new Account('Jamie', 200, 'business');
    account3 = new Account('Emily', 600, 'personal');
    bank2 = new Bank();
    bank2.addAccount(account1);
    bank2.addAccount(account2);
    bank2.addAccount(account3);
  });

  it('should have an array of accounts', function(){
    assert.strictEqual(bank.accounts.length, 0);
    assert.deepStrictEqual(bank.accounts, []);
  });

  it('should be able to Add an account', function(){
    bank.addAccount(account1);
    bank.addAccount(account2);
    assert.strictEqual(bank.accounts.length, 2);
    assert.deepStrictEqual(bank.accounts, [account1, account2]);
  });

  it('should be able to Find account by account name', function(){
    assert.deepStrictEqual(bank2.findAccountByName('Sarah'), [account1]);
  });

  it('should be able to Find the largest account', function(){
    assert.deepStrictEqual(bank2.findLargestAccount(), account3)
  });

  it('should be able to Find the total value of all accounts', function(){
    assert.strictEqual(bank2.total(), 900);
  });

  it('should be able to Find the average value of all accounts', function(){
    assert.strictEqual(bank2.average(), 300);
  });

  it('should be able to Find the total value for a certain account type', function(){
    assert.strictEqual(bank2.totalForType('personal'), 700);
  });

});
