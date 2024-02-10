const asyncHandler = require('express-async-handler');

const Collection = require('../models/Collection');

// @desc Get last three added items
// @route GET /
// @access Private

const getLastThreeItems = asyncHandler(async (req, res) => {
    const homeDecorationsCollection = await Collection
        .findOne({ name: 'Home Decorations' })
        .populate({
            path: 'items',
            model: 'Item',
            populate: {
                path: 'fromCollection',
                model: 'Collection'
            }
        })
        .lean();
    const homeDecorationsArray = homeDecorationsCollection.items;

    const giftSetsCollection = await Collection
        .findOne({ name: 'Gift Sets' })
        .populate({
            path: 'items',
            model: 'Item',
            populate: {
                path: 'fromCollection',
                model: 'Collection'
            }
        })
        .lean();
    const giftSetsArray = giftSetsCollection.items;

    const customItemsCollection = await Collection
        .findOne({ name: 'Custom Items' })
        .populate({
            path: 'items',
            model: 'Item',
            populate: {
                path: 'fromCollection',
                model: 'Collection'
            }
        })
        .lean();
    const customItemsArray = customItemsCollection.items;

    const allItems = [];

    if (homeDecorationsArray) {
        allItems.push(...homeDecorationsArray);
    }

    if (giftSetsArray) {
        allItems.push(...giftSetsArray);
    }

    if (customItemsArray) {
        allItems.push(...customItemsArray);
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