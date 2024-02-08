const homeRouter = require('../routes/homeRoutes');

module.exports = (app) => {
    app.use(homeRouter);
    app.use('/users', );
}