const jwt = require('../lib/jwt');
const { SECRET, TOKEN_KEY } = require('../config/utilsConfig');

exports.setAuthentication = async (req, res, next) => {
    const token = req.cookies[TOKEN_KEY];

    if (token) {
        try {
            const user = await jwt.verify(token, SECRET);

            req.user = user;
            res.locals.user = user;
            res.locals.isAuthenticated = true;

            next();

        } catch (error) {
            res.clearCookie(TOKEN_KEY);

            res.redirect('/users/login');
        }

    } else {
        next();
    }
};

exports.checkAuthentication = (req, res, next) => {
    if (!req.user) {
        return res.redirect('/users/login');
    }

    next();
}