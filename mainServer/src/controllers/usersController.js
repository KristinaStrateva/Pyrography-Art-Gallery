const asyncHandler = require('express-async-handler');
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

    const user = await User.findOne({ email }).populate('items');

    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password!' });
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        return res.status(401).json({ message: 'Invalid email or password!' });
    }

    const token = tokenGenerator(user);

    const userData = {
        id: user._id,
        username: user.username,
        email: user.email,
        token,
    };

    res.status(200).json({ userData });
});

// @desc Register new user
// @route POST /register
// @access Private

const register = asyncHandler(async (req, res) => {

});

// @desc Logout an user
// @route POST /logout
// @access Private

const logout = (req, res) => {

};

module.exports = {
    login,
    register,
    logout,
};