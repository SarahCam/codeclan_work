const Bank = function(){
  this.accounts = [250, 250, 500, 500, 500];
  this.total = 0;
};

Bank.prototype.calculateTotal = function(){
  // console.log(this);
  this.total = 0;
  // for each element in accounts array...which will be assigned to 'account' variable....
  this.accounts.forEach(function(account){      // executed in the forEach, so "this" in here is not what we think it is!
    this.total += account;                      // by default it would be JavaScript object that owns the forEach method...
  }.bind(this));                                // so we need to bind "this" to our bank object - create a copy of "this"
};

const bank = new Bank();

console.log("Total before:", bank.total);

bank.calculateTotal();

console.log("Total after:", bank.total);
