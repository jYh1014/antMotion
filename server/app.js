var express = require('express');
var path = require('path')
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// var index = require('./routes/index');
var app = express();


// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// // app.engine('.html',ejs.__express)
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../dist')));

// app.use('/', index);


// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
app.listen(5000)
module.exports = app;
