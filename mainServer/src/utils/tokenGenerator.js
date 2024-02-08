const jwt = require('../lib/jwt');
const SECRET = process.env.SECRET;

module.exports = async (user) => {
    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email,
    };

    const token = await jwt.sign(payload, SECRET, { expiresIn: '2d' });

    return token;
};