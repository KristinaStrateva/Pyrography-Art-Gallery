const asyncHandler = require('express-async-handler');

const Collection = require('../models/Collection');

const initializeCollections = asyncHandler(async () => {
    const existingCollections = await Collection.find();

    if (existingCollections.length === 0) {
        await Collection.create([
            { name: 'Home Decorations', pathName: 'home-decorations' },
            { name: 'Gift Sets', pathName: 'gift-sets' },
            { name: 'Custom Items', pathName: 'custom-items' }
        ]);
    }
});

module.exports = initializeCollections;