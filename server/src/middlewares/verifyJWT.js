const jwt = require('../lib/jwt');

const verifyJWT = async (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized!' });
    }

    const token = authHeader.split(' ')[1];

    console.log(token);

    try {
        const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        console.log(decoded);

        req.user = decoded.UserInfo; // req.user = { _id, username, email }

        next();

    } catch (error) {
        return res.status(403).json({ message: 'Forbidden!' });
    }
};

module.exports = verifyJWT;