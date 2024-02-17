const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Item = require('./Item');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    username: {
        type: String,
        unique: true,
    },    
    password: {
        type: String,
    },
    items: [
        {
            item: {
                type: mongoose.Types.ObjectId,
                ref: Item,
            }
        }
    ]
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