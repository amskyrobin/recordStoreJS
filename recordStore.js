var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 300;
}

RecordStore.prototype = {

  addRecord: function(record){
    return this.inventory.push(record);
  },

  listInventory: function(){
    albums = [];
    for( var item of this.inventory){
      albums.push(item.title);
    }
    return albums.toString();

  },

  sell: function(record){
    for(var item of this.inventory){
      if(item.title === record.title){
        this.inventory.splice(item.title);
        this.balance += record.price;
      }
    }
    return this.balance;
  },

  financialStatus: function(){
    for(var item of this.inventory){
      stockValue = item.price;
      this.balance += stockValue;
    }
    return this.balance;
  }


}






module.exports = RecordStore;