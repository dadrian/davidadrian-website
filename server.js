var util      = require('util'),
    express   = require('express'),
    http      = require('http'),
    validator = require('express-validator')
    poet      = require('poet'),
    CONF      = require('config'),
    path      = require('path');

// Import private libraries
var app    = express(),
    routes = require('./lib/routes');

// General global config of Express
app.set('port', CONF.app.port);
app.set('views', path.join(CONF.app.rootdir, 'views'));
app.set('view engine', 'jade'); // I want to change this, probably ejs
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(CONF.app.rootdir, CONF.app.staticdir)));

// Set up the routes
app.use(routes);

// Start it up
app.listen(CONF.app.port);
console.log('Express server listening on port ' + CONF.app.port);