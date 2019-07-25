const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Task = require('./Task');

const ListSchema = new Schema({
  toDo: { type: String },
  description: { type: Date, default: Date.now },
  // Embedded
  tasks: [Task.schema],
}); 

const List = mongoose.model('List', ListSchema);
module.exports = List;
