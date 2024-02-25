const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
    {
        fromCollection: {
            type: mongoose.Types.ObjectId,
            ref: 'Collection',
        },
        name: {
            type: String,
            required: [true, 'Name is required!'],
            minLength: [3, 'Name must be at least 3 characters!'],
            maxLength: [40, 'Name must be less than 40 characters!'],
        },
        imageUrl: {
            type: String,
            required: [true, 'Image URL is required!'],
            match: [/^((http:\/\/)|(https:\/\/))[\w]+/, 'Image URL must be reffering to actual picture!'],
        },
        description: {
            type: String,
            required: [true, 'Description is required!'],
            minLength: [10, 'Description must be at least 10 characters!'],
            maxLength: [100, 'Description must not be more than 100 characters!'],
        },
        likesList: [
            {
                user: {
                    type: mongoose.Types.ObjectId,
                    ref: 'User',
                }
            },
        ],
        owner: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        },
    },
    {
        timestamps: true,
    }
);

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;