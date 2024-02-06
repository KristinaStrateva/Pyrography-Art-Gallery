const handlebars = require('express-handlebars');
const path = require('path');

function hbsConfigurator(app) {
    app.engine('hbs', handlebars.engine({
        extname: 'hbs',
    }));
    app.set('view engine', 'hbs');
    app.set('views', path.resolve(__dirname, '../views'));
}

module.exports = hbsConfigurator;