const jwt = require('../lib/jwt');

const verifyJWT = async (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (!authHeader?.startsWith('Bearer ')) {
        delete req.headers['Authorization'] || delete req.headers['authorization'];
        console.log('Token is missing!')
        return res.status(401).json({ message: 'Token is missing!' });
    }

    const token = authHeader.split(' ')[1];

    console.log(token);

    try {
        const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        console.log(decoded);

        req.user = decoded.UserInfo; // req.user = { _id, username, email }

        next();

    } catch (error) {
        // console.error(error.message)
        delete req.headers['Authorization'] || delete req.headers['authorization'];

        if (error.name === 'TokenExpiredError') {
            // console.log('Token has expired!')
            return res.status(401).json({ message: 'Token has expired!' });
        } else {
            console.log(error.name)
            console.log('Problem with token verification!')
            return res.status(403).json({ message: 'Problem with token verification!' });
        }
    }
};

module.exports = verifyJWT;