const homeRouter = require('../routes/homeRoutes');
const userRouter = require('../routes/userRoutes');

module.exports = (app) => {
    app.use(homeRouter);
    app.use('/users', userRouter);
}