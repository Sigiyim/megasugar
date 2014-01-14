
/**
 * Module dependencies.
 */

var Db = require('mongodb').Db;
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var connectionString = process.env.CUSTOMCONNSTR_MEGASUGAR || 'mongodb://127.0.0.1/megasugar';

app.all('*', function(req, res, next) {
//    req.db = db;
    req.env = process.env;

    next();
});
app.get('/', routes.index);
app.get('/users', user.list);
//Db.connect(connectionString, function(err, db) {
//});

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});





