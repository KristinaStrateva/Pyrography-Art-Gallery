const asyncHandler = require('express-async-handler');
const HomeDecorationsCollection = require('../models/HomeDecorationsCollection');
const GiftSetsCollection = require('../models/GiftSetsCollection');
const CustomItemsCollection = require('../models/CustomItemsCollection');

// @desc Get last three added items
// @route GET /
// @access Private

const getLastThreeItems = asyncHandler(async (req, res) => {
    const homeDecorationsItems = await Collection.find().select('items').populate('item').lean();
    const giftSetsItems = await Collection.find().select('items').populate('item').lean();
    const customItemsItems = await Collection.find().select('items').populate('item').lean();

    const allItems = [...homeDecorationsItems, ...giftSetsItems, ...customItemsItems];

    if (!allItems) {
        return res.status(400).json({message: 'No items found'});
    }

    const lastThreeItems = allItems.sort((a, b) => b.createdAt - a.createdAt).slice(0, 3);

    res.json(lastThreeItems);
});

module.exports = {
    getLastThreeItems,
}