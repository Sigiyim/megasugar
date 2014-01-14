
/**
 * Module dependencies.
 */

var Db = require('mongodb').Db;
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var reading = require('./routes/reading');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.use(express.cookieParser());
app.use(express.session({ secret : 'hMrtq6nzoyELXChVqCKVGyBpudZjtmpPOE5AzVzz9zYIFe0l4YovMkdoBbz0WGwKEWzwbop0xlpjS4MYlyLkK/+b2kTukGMpuiZFqbH+0x6sMmc369Q0UPhUdiE2g5y9xVZkiX4HZXG2mHwmCcSCwzoAoZsrjQJ0YcLsj1q4ecEXNGpLyeq6TLmxMxAxFabYYAqLfV5ATOQBaYrCKSROYEpgiS/lk+FMKRBcJh5S/MTx1yhOZrSCF7YucVN8h4lc3flzI8OJdw1e5jj0uCrB4jZS/bV80GXWLLhdgdFUFaxMg34semzzXHlPk3nSDSz/IE+i7xawsRmFriDW2JH0/A==' }));
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


Db.connect(connectionString, function(err, db) {
    app.all('*', function(req, res, next) {
        req.db = db;
        req.env = process.env;

        next();
    });
    app.get('/', routes.index);

    app.get('/user/current', user.current);

    app.post('/reading/new', reading.new_post);
    app.get('/reading/list', reading.list);

    http.createServer(app).listen(app.get('port'), function(){
        console.log('Express server listening on port ' + app.get('port'));
    });
});







