require('dotenv').config();
const mongoose = require('mongoose');

const initializeCollections = require('../utils/initializeCollections');

const uri = process.env.MONGO_URI;

async function dbConnect() {
    try {
        await mongoose.connect(uri);

        initializeCollections();

    } catch (err) {
        console.error(`DB Error: ${err}`);
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = dbConnect;