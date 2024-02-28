const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');

const User = require('../models/User');
const { accessTokenGenerator } = require('../utils/tokenGenerator');

// @desc Sign in existing user
// @route POST /login
// @access Public

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required!' });
    }

    if (!password) {
        return res.status(400).json({ message: 'Password is required!' });
    }

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password!' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
        return res.status(401).json({ message: 'Invalid email or password!' });
    }

    const accessToken = await accessTokenGenerator(user);
    // const refreshToken = await refreshTokenGenerator(user);

    console.log(accessToken);

    res.setHeader('Authorization', `Bearer ${accessToken}`);

    // res.cookie('jwt', refreshToken, {
    //     httpOnly: true,
    //     secure: true,
    //     sameSite: 'None',
    //     maxAge: 7 * 24 * 60 * 60 * 1000
    // });

    const userData = {
        id: user._id,
        username: user.username,
        email: user.email,
        accessToken,
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

    const accessToken = await accessTokenGenerator(createdUser);

    const userData = {
        id: createdUser._id,
        username: createdUser.username,
        email: createdUser.email,
        accessToken,
    };

    res.status(201).json(userData);
});

// @desc Logout an user
// @route POST /logout
// @access Public

const logout = (req, res) => {
    // const cookies = req.cookies;

    // if (!cookies?.jwt) {
    //     return res.sendStatus(204);
    // }

    // res.clearCookie('jwt', {
    //     httpOnly: true,
    //     sameSite: 'None',
    //     secure: true
    // });

    res.removeHeader('Authorization');

    res.json({
        // message: 'Cookie cleared',
        message: 'Successfully logged out!'
    });
};

// @desc Refresh
// @route GET /users/refresh
// @access Public

// const refresh = asyncHandler(async (req, res) => {
//     const cookies = req.cookies;

//     if (!cookies?.jwt) {
//         return res.status(401).json({ message: 'Unauthorized!' });
//     }

//     const refreshToken = cookies.jwt;

//     try {
//         const decoded = await jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

//         console.log(decoded);
//         const foundUser = await User.findOne({ username: decoded.username });

//         if (!foundUser) {
//             return res.status(401).json({message: 'Unauthorized!'});
//         }

//         const accessToken = await accessTokenGenerator(foundUser);

//         res.json({
//             id: foundUser.id,
//             username: foundUser.username,
//             email: foundUser.email,
//             accessToken: accessToken,
//         });

//     } catch (error) {
//         return res.status(403).json({ message: 'Forbidden!' });
//     }
// });

module.exports = {
    login,
    register,
    logout,
    // refresh,
};