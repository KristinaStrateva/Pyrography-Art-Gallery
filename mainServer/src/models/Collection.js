const mongoose = require('mongoose');
const Item = require('./Item');

const collectionSchema = new mongoose.Schema({
    name: {
        type: String,
        enum: ['Home Decorations', 'Gift Sets', 'Custom Items'],
        default: 'Home Decorations',
    },
    pathName: {
        type: String,
        enum: ['home-decorations', 'gift-sets', 'custom-items'],
        default: 'home-decorations',
    },
    items: [
        {
            type: mongoose.Types.ObjectId,
            ref: Item,
        }
    ]
});

const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;