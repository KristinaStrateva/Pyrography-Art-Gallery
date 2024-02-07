const express = require('express');

const expressConfigurator = require('./config/expressConfigurator');
const errorHandler = require('./middlewares/errorHandler');

const PORT = process.env.PORT || 3500;

const app = express();

expressConfigurator(app);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));