require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const corsOptions = require('./corsOptions');
const { logger } = require('../middlewares/logger');

function expressConfigurator(app) {
    console.log(`Node.js execution mode: ${process.env.NODE_ENV}`);

    app.use(logger);
    app.use(cors(corsOptions));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cookieParser());
}

module.exports = expressConfigurator;