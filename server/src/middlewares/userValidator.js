const { body } = require('express-validator');

const loginValidation = [
    body('email')
        .notEmpty()
        .withMessage('Email is required!')
        .toLowerCase()
        .trim()
        .isEmail()
        .withMessage('Incorrect email address!'),
    body('password')
        .notEmpty()
        .withMessage('Password is required!')
        .trim(),
];

const registerValidation = [
    body('username')
        .notEmpty()
        .withMessage('Username is required!')
        .toLowerCase()
        .trim()
        .isLength({min: 8})
        .withMessage('Username must be at least 8 characters!')
        .isLength({max: 15})
        .withMessage('Username must be less than 15 characters!'),
    body('email')
        .notEmpty()
        .withMessage('Email is required!')
        .toLowerCase()
        .trim()
        .isEmail()
        .withMessage('Incorrect email address!'),
    body('password')
        .notEmpty()
        .withMessage('Password is required!')
        .trim()
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters!')
        .matches(/^(?=.*\d)(?=.*[A-Z]).+$/)
        .withMessage('Password must contain at least 1 Capital letter and 1 digit!'),
];

module.exports = {
    loginValidation,
    registerValidation,
}