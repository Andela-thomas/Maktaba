// Require all the dependencies we need
var env = process.env.NODE_ENV || 'development';
if (env === 'development') {
  require('dotenv').load();
}

var express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  path = require('path'),
  logger = require('morgan'),
  session = require('express-session'),
  cookieParser = require('cookie-parser'),
  config = require('./server/config'),
  routes = require('./server/routes'),
  app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(session({
  secret: config.secretKey,
  proxy: true,
  resave: true,
  saveUninitialized: true
}));
//connect to mongodb
mongoose.connect(config.db, function(err, conn) {
  if (err) {
    console.log('connection failed: ' + err);
    process.exit(1);
  } else {
    console.log('connection established....');
  }
});

app.use(express.static(path.join(__dirname, './public')));
/*=============================================
  All our routes will go here
===============================================*/

routes(app, express, config);

//create server

app.listen(config.port);
console.log("server running at port " + config.port);

module.exports = app;
