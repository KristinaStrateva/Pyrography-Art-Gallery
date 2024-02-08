const mongoose = require('mongoose');
const Item = require('./Item');

const homeDecorationsCollectionSchema = new mongoose.Schema({
    name: 'Home Decorations',
    pathName: 'home-decorations',
    items: [
        {
            item: {
                type: mongoose.Types.ObjectId,
                ref: Item,
            }
        }
    ]
});

const HomeDecorationsCollection = mongoose.model('HomeDecorationsCollection', homeDecorationsCollectionSchema);

module.exports = HomeDecorationsCollection;