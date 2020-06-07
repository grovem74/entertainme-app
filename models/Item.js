const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    text: {
        type: String,
        trim: true,
        required: 'String is required'
    }
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;