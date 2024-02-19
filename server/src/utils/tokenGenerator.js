const jwt = require('../lib/jwt');
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

const accessTokenGenerator = async (user) => {
    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email,
    };

    const token = await jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: '10s' });

    return token;
};

const refreshTokenGenerator = async (user) => {
    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email,
    };

    const token = await jwt.sign(payload, REFRESH_TOKEN_SECRET, {expiresIn: '1d'})
};

module.exports = {
    accessTokenGenerator,
    refreshTokenGenerator,
}