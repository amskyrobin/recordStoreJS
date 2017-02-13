var assert = require('assert');
var Record = require('../record');
var RecordStore = require('../recordStore');
var Customer = require('../customer');

describe('customer', function(){

  it('must be able to buy records', function(){
    var customer = new Customer();
    var recordStore = new RecordStore('Stereo Rose', 'LA');
    var record = new Record ('Grimes', 'Art Angels', '9.99');
    recordStore.addRecord(record);
    customer.buy(record, recordStore);
    assert.equal(1, customer.collection.length);
  });

  it('must be able to sell records - sell from collection add to record store inventory', function(){
    var customer = new Customer();
    var recordStore = new RecordStore('Stereo Rose', 'LA');
    var record = new Record ('Grimes', 'Art Angels', '9.99');
    recordStore.addRecord(record);
    // console.log(recordStore);
    customer.buy(record, recordStore);
    // console.log(customer);
    customer.sell(record, recordStore);
    // console.log(recordStore);
    assert.equal(0, customer.collection.length);
    // console.log(customer);
    assert.equal(1, recordStore.inventory.length);

  });

  it('cash must increase with the sale of an item', function(){
    var customer = new Customer();
    var recordStore = new RecordStore('Stereo Rose', 'LA');
    var record = new Record ('Grimes', 'Art Angels', 10);
    recordStore.addRecord(record);
    customer.buy(record, recordStore);
    customer.buy(record, recordStore);
    // console.log(customer);
    customer.sell(record, recordStore);
    customer.sellGetCash(record);
    // console.log(customer);
    assert.equal(30, customer.cash);
  });

  it('cash must decrease with the purchase of an item', function(){
    var customer = new Customer();
    var recordStore = new RecordStore('Stereo Rose', 'LA');
    var record = new Record ('Grimes', 'Art Angels', 10);
    recordStore.addRecord(record);
    customer.buy(record, recordStore);
    customer.buyLoseCash(record);
    assert.equal(10, customer.cash);

  });

  it('should not be able to buy an album with insufficient cash', function(){
    var customer = new Customer();
    var recordStore = new RecordStore('Stereo Rose', 'LA');
    var record = new Record ('Grimes', 'Art Angels', 10);
    recordStore.addRecord(record);
    recordStore.addRecord(record);
    recordStore.addRecord(record);
    customer.buy(record, recordStore);
    customer.buy(record, recordStore);
    customer.buy(record, recordStore);
    customer.buyLoseCash(record);
    console.log(customer);
    customer.buyLoseCash(record);
    console.log(customer);
    customer.buyLoseCash(record);
    console.log(customer);
    assert.equal("insufficient funds", customer.buyLoseCash(record));
    assert.equal(-10, customer.cash);
  })

});