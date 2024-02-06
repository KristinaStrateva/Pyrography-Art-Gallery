const express = require('express');

const expressConfigurator = require('./config/expressConfigurator');
// const hbsConfigurator = require('./config/hbsConfigurator');
const dbConnect = require('./config/dbConfigurator');
const { PORT } = require('./config/utilsConfig');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

expressConfigurator(app);
// hbsConfigurator(app);
dbConnect();

app.use(routes);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));