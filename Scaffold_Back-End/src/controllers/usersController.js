const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const { checkAuthentication } = require('../middlewares/authMiddleware');

const userManager = require('../managers/userManager');
const extractErrorMessage = require('../utils/extractErrorMessage');
const TOKEN_KEY = process.env.TOKEN_KEY;

// router.get('/login', (req, res) => {
//     res.render('users/login');
// });

router.post('/login', asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await userManager.login(email, password);

        res.cookie(TOKEN_KEY, token, { httpOnly: true });

        res.redirect('/');

    } catch (error) {
        res.render('users/login', {error: extractErrorMessage(error), email});
    }
}));

// router.get('/register', (req, res) => {
//     res.render('users/register');
// });

router.post('/register', asyncHandler(async (req, res) => {
    const { username, email, password, rePassword } = req.body;

    try {
        const token = await userManager.register({ username, email, password, rePassword });

        res.cookie(TOKEN_KEY, token, {httpOnly: true});

        res.redirect('/');

    } catch (error) {
        res.render('users/register', {error: extractErrorMessage(error), username, email});
    }
}));

router.get('/logout', checkAuthentication, (req, res) => {
    res.clearCookie(TOKEN_KEY);

    res.redirect('/');
});

module.exports = router;