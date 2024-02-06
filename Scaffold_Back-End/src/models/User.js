const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required!'],
        match: [/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'Incorrect email address!'],
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        minLength: [8, 'Username must be at least 8 characters!'],
        maxLength: [15, 'Username must be less than 15 characters!'],
        unique: true,
    },    
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minLength: [8, 'Password must be at least 4 characters!'],
        maxLength: [25, 'Password must be less than 25 characters!'],
    }
});

userSchema.virtual('rePassword')
    .set(function (value) {
        if (value !== this.password) {
            throw new Error('Passwords don\'t match!');
        }
    });

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
});

const User = mongoose.model('User', userSchema);

module.exports = User;