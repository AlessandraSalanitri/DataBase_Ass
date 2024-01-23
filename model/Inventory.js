
const mongoose = require ('mongoose')

const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    item: String,
    qty: Number,
    size: {
      h: Number,
      w: Number,
      uom: String
    },
    "status": String
});

const Inventory = mongoose.model('Inventory', inventorySchema, 'inventory');
// two paramiter required: 1. name of the collection , 2. structure of the Schema that was created. The 3rd paramiter request specifically to use that name to the collection
// as otherwise, mongodb will likely create inventories or inventorie

module.exports = Inventory;
