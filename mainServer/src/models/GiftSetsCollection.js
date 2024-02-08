const mongoose = require('mongoose');
const Item = require('./Item');

const giftSetsCollectionSchema = new mongoose.Schema({
    name: 'Gift Sets',
    items: [
        {
            item: {
                type: mongoose.Types.ObjectId,
                ref: Item,
            }
        }
    ]
});

const GiftSetsCollection = mongoose.model('GiftSetsCollection', giftSetsCollectionSchema);

module.exports = GiftSetsCollection;