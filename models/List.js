const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Item = require('./Item');

const ListSchema = new Schema({
    id: {type: String},
    userId: {type: String},
    user: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],

    items: [Item.schema]
});

const List = mongoose.model('List', ListSchema);

module.exports = List;