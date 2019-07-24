const mongoose = require('mongoose');
const Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

const ListSchema = new Schema({
  typeOfList: { type: String },
  id: { type: ObjectId },
  // Embedded
  // items: [Item.Schema],
}); 

const List = mongoose.model('List', ListSchema);
module.exports = List;