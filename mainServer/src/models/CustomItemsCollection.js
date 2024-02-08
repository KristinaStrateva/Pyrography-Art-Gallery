const mongoose = require('mongoose');
const Item = require('./Item');

const customItemsCollectionSchema = new mongoose.Schema({
    name: 'Custom Items',
    items: [
        {
            item: {
                type: mongoose.Types.ObjectId,
                ref: Item,
            }
        }
    ]
});

const CustomItemsCollection = mongoose.model('CustomItemsCollection', customItemsCollectionSchema);

module.exports = CustomItemsCollection;