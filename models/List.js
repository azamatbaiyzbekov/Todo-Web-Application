const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Item = require('./Item');

const ListSchema = new Schema({
  typeOfList: { type: String },
  dateAdded: { type: Date, default: Date.now },
  // Embedded
  items: [Item.schema],
}); 

const List = mongoose.model('List', ListSchema);
module.exports = List;