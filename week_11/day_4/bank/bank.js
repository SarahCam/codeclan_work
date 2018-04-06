const _ = require("lodash");

let Bank = function(){
  this.accounts = [];
};

Bank.prototype.addAccount = function (account) {
  this.accounts = _.concat(this.accounts, account);
};

Bank.prototype.findAccountByName = function (name) {
  // let account = _.find(this.accounts, { 'name': name });
  return _.filter(this.accounts, {name: name});
};

Bank.prototype.find = function (key, value) {
  return _.filter(this.accounts, [key, value]);
};

Bank.prototype.findLargestAccount = function () {
  // return _.find(this.accounts, function(account) { return account.amount > 300; });
  return _.maxBy(this.accounts, "amount");
};

Bank.prototype.total = function () {
  return _.sumBy(this.accounts, "amount");
};

Bank.prototype.average = function () {
  return _.meanBy(this.accounts, "amount");
};

Bank.prototype.totalForType = function (type) {
  return _.sumBy(this.find("type", type), "amount");
};

module.exports = Bank;
