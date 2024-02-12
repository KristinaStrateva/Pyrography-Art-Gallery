const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');

const User = require('../models/User');
const tokenGenerator = require('../utils/tokenGenerator');
// const { validationResult } = require('express-validator');

// @desc Sign in existing user
// @route POST /login
// @access Private

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    // const { errors } = validationResult(req);

    // if (errors.length) {
    //     res.status(400);
    //     throw new Error(errors.map(err => err.msg));
    // }

    if (!email) {
        return res.status(400).json({ message: 'Email is required!' });
    }

    if (!password) {
        return res.status(400).json({ message: 'Password is required!' });
    }

    const user = await User.findOne({ email }).populate('items');

    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password!' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
        return res.status(401).json({ message: 'Invalid email or password!' });
    }

    const token = await tokenGenerator(user);

    const userData = {
        id: user._id,
        username: user.username,
        email: user.email,
        token,
    };

    res.status(200).json(userData);
});

// @desc Register new user
// @route POST users/register
// @access Private

const register = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    if (!username) {
        return res.status(400).json({ message: 'Username is required!' });
    }

    if (!email) {
        return res.status(400).json({ message: 'Email is required!' });
    }

    if (!password) {
        return res.status(400).json({ message: 'Password is required!' });
    }

    const usernameExists = await User.findOne({ username }).lean();

    if (usernameExists) {
        return res.status(409).json({ message: 'Username already exists!' });
    }

    const createdUser = await User.create({ username, email, password });

    if (!createdUser) {
        return res.status(400).json({ message: 'Inavlid user data received!' });
    }

    const token = await tokenGenerator(createdUser);

    const userData = {
        id: createdUser._id,
        username: createdUser.username,
        email: createdUser.email,
        token
    };

    res.status(201).json(userData);
});

// @desc Logout an user
// @route POST /logout
// @access Private

const logout = (req, res) => {
    res.status(200).json({ success: 'Successfully logged out!' });
};

module.exports = {
    login,
    register,
    logout,
};