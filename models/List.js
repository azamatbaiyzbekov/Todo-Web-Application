const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Task = require('./Task');

const ListSchema = new Schema({
  typeOfList: { type: String },
  dateAdded: { type: Date, default: Date.now },
  // Embedded
  tasks: [Task.schema],
}); 

const List = mongoose.model('List', ListSchema);
module.exports = List;
