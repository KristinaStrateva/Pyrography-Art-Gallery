const mongoose = require('mongoose');

const electronicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [10, 'Name must be at least 10 characters!'],
    },
    type: {
        type: String,
        required: [true, 'Type is required!'],
        minLength: [2, 'Type must be at least 2 characters!'],
    },
    damages: {
        type: String,
        required: [true, 'Damages is required!'],
        minLength: [10, 'Damages must be at least 10 characters!'],
    },
    image: {
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
    production: {
        type: Number,
        required: [true, 'Production is required!'],
        min: [1900, 'Production year should be after 1900'],
        max: [2023, 'Production year should not be after 2023'],
    },
    exploitation: {
        type: Number,
        required: [true, 'Exploitation is required!'],
        min: [0, 'Years of exploitation should be positive number'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required!'],
        min: [1, 'Price should be positive number'],
    },
    buyingList: [
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
    }
});

const Electronic = mongoose.model('Electronic', electronicSchema);

module.exports = Electronic;