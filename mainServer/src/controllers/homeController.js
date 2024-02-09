const asyncHandler = require('express-async-handler');

const Collection = require('../models/Collection');

// @desc Get last three added items
// @route GET /
// @access Private

const getLastThreeItems = asyncHandler(async (req, res) => {
    const homeDecorationsCollection = await Collection.findOne({ name: 'Home Decorations' }).populate('items').lean();
    const homeDecorationsItems = homeDecorationsCollection.items;

    const giftSetsCollection = await Collection.findOne({ name: 'Gift Sets' }).populate('items').lean();
    const giftSetsItems = giftSetsCollection.items;

    const customItemsCollection = await Collection.findOne({ name: 'Custom Items' }).populate('items').lean();
    const customItemsItems = customItemsCollection.items;

    const allItems = [];

    if (homeDecorationsItems) {
        allItems.push(...homeDecorationsItems);
    }

    if (giftSetsItems) {
        allItems.push(...giftSetsItems);
    }

    if (customItemsItems) {
        allItems.push(...customItemsItems);
    }

    if (allItems.length === 0) {
        return res.status(400).json({ message: 'No items found' });
    }

    const lastThreeItems = allItems.sort((a, b) => b.createdAt - a.createdAt).slice(0, 3);

    res.json(lastThreeItems);
});

module.exports = {
    getLastThreeItems,
}