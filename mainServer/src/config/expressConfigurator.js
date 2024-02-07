require('dotenv').config();

const express = require('express');
// const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const corsOptions = require('./corsOptions');
const { logger } = require('../middlewares/logger');
// const { setAuthentication } = require('../middlewares/authMiddleware');

function expressConfigurator(app) {
    console.log(process.env.NODE_ENV);
    
    app.use(logger);
    app.use(cors(corsOptions));
    // app.use(express.static(path.resolve(__dirname, '../public')));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cookieParser());
    // app.use(setAuthentication);
}

module.exports = expressConfigurator;