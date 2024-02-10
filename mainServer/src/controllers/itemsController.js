const asyncHandler = require('express-async-handler');

const Collection = require('../models/Collection');
const Item = require('../models/Item');

// @desc Get all items from collection
// @route GET /:collectionName
// @access Public

const getAllItemsFromCollection = asyncHandler(async (req, res) => {
    const { collectionName } = req.params;

    const collection = await Collection.findOne({ pathName: collectionName }).populate('items').lean();

    const items = collection.items;

    if (items.length === 0) {
        return res.status(400).json({ message: 'This collection is empty!' });
    }

    res.status(200).json(items);
});

// @desc Get item by id
// @route GET /:collectionName/:itemId/details
// @access Public

const getItemById = asyncHandler(async (req, res) => {
    const { itemId } = req.params;

    const item = await Item.findById({ _id: itemId }).lean();

    if (!item) {
        return res.status(400).json({ message: 'This item is not found!' });
    }

    res.status(200).json(item);
});

// @desc Create new item
// @route POST /add-item
// @access Private

const createItem = asyncHandler(async (req, res) => {
    const { collectionName, name, imageUrl, description } = req.body;

    const collection = await Collection.findOne({ name: collectionName });

    if (!collection) {
        return res.status(404).json({ message: "Collection not found" });
    }

    const newItem = await Item.create({
        fromCollection: collection._id,
        name,
        imageUrl,
        description,
        // owner: req.user._id
    });

    collection.items.push(newItem._id);
    await collection.save();

    res.status(201).json(newItem);
});

// @desc Like an item
// @route POST /:collectionName/:itemId/likes
// @access Private

const likeItem = asyncHandler(async (req, res) => {
    const { itemId } = req.params;

    const item = await Item.findById({ _id: itemId });

    if (!item) {
        return res.status(400).json({ message: 'This item is not found!' });
    }

    let userId = '65c6aa50ec333934a557e6ea';

    item.likesList.push({user: userId});
    await item.save();

    res.status(200).json(item.likesList);
});

module.exports = {
    getAllItemsFromCollection,
    getItemById,
    createItem,
    likeItem,
}