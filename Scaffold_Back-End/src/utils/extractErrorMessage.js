const { MongooseError, Error } = require('mongoose');

module.exports = (error) => {
    if (error instanceof MongooseError || error instanceof Error.ValidatorError) {
        return Object.values(error.errors).at(0).message;
    } else {
        return error.message;
    }
};