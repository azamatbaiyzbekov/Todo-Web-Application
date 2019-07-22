const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    list: {type: String},
    name: {type: String},
    id: {type: String}
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;