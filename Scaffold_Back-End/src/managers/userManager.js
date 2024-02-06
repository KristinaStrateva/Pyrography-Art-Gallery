const bcrypt = require('bcrypt');

const User = require('../models/User');
const tokenGenerator = require('../utils/tokenGenerator');

const { SECRET } = require('../config/utilsConfig');

exports.login = async (email, password) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Invalid email or password!');
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Invalid email or password!');
    }

    const token = await tokenGenerator(user, SECRET);

    return token;
};

exports.register = async (userData) => {
    const user = await User.findOne({ username: userData.username });

    if (user) {
        throw new Error('This username already exists!');
    }

    const createdUser = await User.create(userData);

    const token = await tokenGenerator(createdUser, SECRET);

    return token;
};