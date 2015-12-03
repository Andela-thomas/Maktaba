// Require all the dependencies we need
var env = process.env.NODE_ENV || 'development';
if (env === 'development') {
  require('dotenv').load();
}

var config = require('./server/config')[env],
  express = require('express'),
  mongoose = require('mongoose'),
  path = require('path'),
  favicon = require('serve-favicon'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  routes = require('./server/routes'),
  app = express(),
  session = require('express-session');

//connect to mongodb
mongoose.connect(config.db, function(err) {
  if (err) {
    console.log('connection failed: ' + err);
    process.exit(1);
  } else {
    console.log('connection established....');
  }
});

// view engine setup
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.static(path.join(__dirname, './public')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(session({
  secret: config.secretKey,
  // store: sessionStore, // connect-mongo session store
  proxy: true,
  resave: true,
  saveUninitialized: true
}));

/*=============================================
  All our routes will go here
===============================================*/

routes(app, express, config);

//create server

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (env === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
    next();
  });
}

// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
  next();
});

var server = app.listen(process.env.PORT || 3000, function() {
  console.log('Express server listening on %d, in %s' +
    'mode', server.address().port, app.get('env'));
});

module.exports = app;
