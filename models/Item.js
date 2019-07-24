const mongoose = require('mongoose');
const Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

const ItemSchema = new Schema({
  data: { type: String },
  dateAdded: { type: Date, default: Date.now },
});

const Item = mongoose.model('Item', ItemSchema);
module.exports = Item;