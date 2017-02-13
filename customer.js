var Customer = function(){
  this.cash = 20;
  this.collection = [];
}

Customer.prototype = {

  buy: function(record, recordStore){
    for(var item of recordStore.inventory){
      if(item === record){
        this.collection.push(item);
      }
      return this.collection;
    }
  }, 

  sell: function(record, recordStore){
    for (var item of this.collection){
      if(item === record){
        var soldItem = this.collection.splice(item, 1);
        recordStore.inventory.concat(soldItem);
      }
    }
    return this.collection;
  },

  sellGetCash: function(record){
    for(var item of this.collection){
      if(item === record){
        var newBalance = this.cash += record.price;
      }
    }
    return newBalance;
  },

  buyLoseCash: function(record){
    if(this.cash >= record.price){
      for(var item of this.collection){
        if(item === record){
          var newBalance = this.cash -= record.price;
        }
      }
    }
    else{
      return "insufficient funds";
    }
  }
}








module.exports = Customer;