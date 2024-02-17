const homeRouter = require('../routes/homeRoutes');
const userRouter = require('../routes/userRoutes');
const itemRouter = require('../routes/itemRoutes');
const errorHandler = require('../middlewares/errorHandler');

module.exports = (app) => {
    app.use(homeRouter);
    app.use('/users', userRouter);
    app.use('/data', itemRouter);
    app.use(errorHandler);
}