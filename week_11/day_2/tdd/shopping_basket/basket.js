var Basket = function(customer){
  this.items = [];
  this.customer = customer;
};

Basket.prototype.addItem = function(item){
  this.items.push(item);
};

Basket.prototype.removeItem = function(item){
  var index = 0;
  // this.items.findIndex(item)
  this.items.splice(0, 1);
};

Basket.prototype.empty = function(){
  this.items = [];
};

Basket.prototype.total = function(){
  var total = 0;
  for(var item of this.items){
    total += item.price;
  };
  if (total > 20){
    total = total - (total/10);
  };
  if (this.customer.discount === true){
    total = total - (total/20);
  };
  return total;
};

module.exports = Basket;
