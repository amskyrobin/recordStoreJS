var assert = require('assert');
var Record = require('../record');
var RecordStore = require('../recordStore');
var Customer = require('../customer');

describe('Record Store', function(){

  it('must be able to add records to its inventory', function(){
    var record = new Record ('Grimes', 'Art Angels', '9.99');
    var recordStore = new RecordStore('Stereo Rose', 'LA');
    recordStore.addRecord(record);
    assert.equal(1, recordStore.inventory.length);
  });


  it('must be able to list all the records in its inventory', function(){
    var record = new Record ('Grimes', 'Art Angels', '9.99');
    var record2 = new Record ('Incubus', 'Morning View', '9.99');
    var recordStore = new RecordStore('Stereo Rose', 'LA');
    recordStore.addRecord(record);
    recordStore.addRecord(record2);
    recordStore.listInventory();
    assert.equal("Art Angels,Morning View", recordStore.listInventory());
  });

  it('must be able to sell a record and adjust balance to show the sale', function(){
    var record = new Record ('Incubus', 'Morning View', 10);
    var recordStore = new RecordStore('Stereo Rose', 'LA');
    recordStore.addRecord(record);
    recordStore.sell(record);
    assert.equal(310, recordStore.balance);
    assert.equal(0, recordStore.inventory.length);
  });

  it('must be able to report financial status of balance and value of inventory', function(){
    var record = new Record ('Incubus', 'Morning View', 10);
    var record = new Record ('Incubus', 'Morning View', 10);
    var recordStore = new RecordStore('Stereo Rose', 'LA');
    recordStore.addRecord(record);
    recordStore.addRecord(record);
    recordStore.financialStatus();
    assert.equal(320, recordStore.balance);
  });
});