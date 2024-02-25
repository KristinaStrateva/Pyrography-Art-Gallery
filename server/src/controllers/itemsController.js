const asyncHandler = require('express-async-handler');

const Collection = require('../models/Collection');
const Item = require('../models/Item');

// @desc Get all items from collection
// @route GET /:collectionName
// @access Public

const getAllItemsFromCollection = asyncHandler(async (req, res) => {
    const { collectionName } = req.params;

    const collection = await Collection
        .findOne({ pathName: collectionName })
        .populate({
            path: 'items',
            model: 'Item',
            populate: {
                path: 'fromCollection',
                model: 'Collection'
            }
        })
        .lean();

    const items = collection?.items;

    if (!items) {
        return res.status(400).json({ message: 'This collection is not found!' });
    }

    res.status(200).json(items);
});

// @desc Get item by id
// @route GET /:collectionName/:itemId/details
// @access Private

const getItemById = asyncHandler(async (req, res) => {
    const { itemId } = req.params;

    const item = await Item.findById({ _id: itemId }).populate('fromCollection').lean();

    if (!item) {
        return res.status(400).json({ message: 'This item is not found!' });
    }

    res.status(200).json(item);
});

// @desc Get my items
// @route GET /my-items
// @access Private

const getMyItems = asyncHandler(async (req, res) => {
    const userId = req.user._id;

    const allItems = await Item.find({ owner: userId }).populate('fromCollection').lean();

    if (!allItems) {
        return res.status(400).json({ message: 'There are no items yet!' });
    }

    res.status(200).json(allItems);
});

// @desc Create new item
// @route POST /add-item
// @access Private

const createItem = asyncHandler(async (req, res) => {
    const { fromCollection, name, imageUrl, description } = req.body;
    const userId = req.user._id;

    const collection = await Collection.findOne({ name: fromCollection });

    if (!collection) {
        return res.status(404).json({ message: "Collection not found" });
    }

    const newItem = await Item.create({
        fromCollection: collection._id,
        name,
        imageUrl,
        description,
        owner: userId,
    });

    collection.items.push(newItem._id);
    await collection.save();

    res.status(201).json(newItem);
});

// @desc Edit an item
// @route PUT /:collectionName/:itemId/edit-item
// @access Private

const editItem = asyncHandler(async (req, res) => {
    const { fromCollection, name, imageUrl, description } = req.body;
    const { collectionName, itemId } = req.params;
    const userId = req.user._id;

    const item = await Item.findById({ _id: itemId }).lean();

    if (!item) {
        return res.status(404).json({ message: 'This item not found!' });
    }

    if (item?.owner.toString() !== userId) {
        return res.status(403).json({ message: 'Forbidden!' });
    }

    const collection = await Collection.findOne({ pathName: fromCollection }).populate('items');

    if (!collection) {
        return res.status(404).json({ message: "Collection not found" });
    }

    const updatedItem = await Item.findByIdAndUpdate({ _id: itemId }, {
        fromCollection: collection._id,
        name,
        imageUrl,
        description,
        owner: userId,
    });

    if (collection.pathName === collectionName) {
        await Collection.findOneAndUpdate({ name: fromCollection, 'items._id': itemId }, { $set: { 'items.$.fieldToUpdate': updatedItem } });

    } else {
        await Collection.findOneAndUpdate({ pathName: collectionName }, { $pull: { items: itemId } });

        collection.items.push(updatedItem._id);
        await collection.save();
    }

    res.status(200).json(updatedItem);
});

// @desc Delete an item
// @route DELETE /:collectionName/:itemId
// @access Private

const deleteItem = asyncHandler(async (req, res) => {
    const { collectionName, itemId } = req.params;

    const itemToBeDeleted = await Item.findByIdAndDelete({ _id: itemId });

    if (!itemToBeDeleted) {
        return res.status(400).json({ message: 'This item is not found!' });
    }

    await Collection.findOneAndUpdate({ pathName: collectionName }, { $pull: { items: itemId } });

    res.status(204).json({ message: 'Successfully deleted item!' });
});

// @desc Like an item
// @route POST /:collectionName/:itemId/likes
// @access Private

const likeItem = asyncHandler(async (req, res) => {
    const { itemId } = req.params;
    const userId = req.user._id;

    const item = await Item
        .findById({ _id: itemId })
        .populate({
            path: 'likesList',
            model: 'Item',
            populate: {
                path: 'user',
                model: 'User'
            }
        });

    if (!item) {
        return res.status(400).json({ message: 'This item is not found!' });
    }

    if (item.likesList.length > 0 && item.likesList.find(like => like.user._id === userId)) {
        return res.status(403).json({ message: 'Forbidden!' }); // Cannot like an item twice
    }

    if (item.owner === userId) {
        return res.status(403).json({ message: 'Cannot like own items!' });
    }

    item.likesList.push({ user: userId });
    await item.save();

    res.status(200).json(item.likesList);
});

module.exports = {
    getAllItemsFromCollection,
    getItemById,
    getMyItems,
    createItem,
    editItem,
    deleteItem,
    likeItem,
}