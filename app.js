var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon'); not required
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cloudinary = require('cloudinary');
var mongo = require('mongodb').MongoClient;
var multer = require('multer');
var routes = require('./routes/index');
var users = require('./routes/users');
var apiRoutes = require(path.join(__dirname, 'routes', 'api'));
var inputRoutes = require(path.join(__dirname, 'routes', 'input'));
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET || 'randomsecretstring', {signed: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(multer({
  dest: './public/images',
  rename: function (fieldname, filename) {
    return filename.replace(/\s+/g, "").toLowerCase();
  },
  limits: {
    files: 1
  }
}));
var mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/gravitas16';
var mongodb;
cloudinary.config(process.env.CLOUDINARY_URL);
console.log('Cloudinary set');
const onConnect = function (err, db) {
  if (!err) {
    mongodb = db;
    console.log('mongodb');
    reUseDB();
  }
};

mongo.connect(mongoURI, onConnect);
var reUseDB = function(){
  app.use(function (req, res, next) {
    req.db = mongodb;
    console.log('DB Check');
    next();
  });

};
app.use(function (req, res, next) {
  req.db = mongodb;
  console.log('DB Check');
  next();
});

app.use('/', routes);
app.use('/users', users);
app.use('/api', apiRoutes);
app.use('/input', inputRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
