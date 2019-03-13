var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var test_mysqlRouter = require('./routes/test_mysql')
var addRouter = require('./routes/add')
var contactusRouter = require('./routes/contactus')
var searchRouter = require('./routes/Search')
var deleteRouter = require('./routes/delete')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/test_mysql', test_mysqlRouter);
app.use('/add', addRouter);
app.use('/contactus', contactusRouter);
app.use('/search', searchRouter);
app.use('/delete', deleteRouter);

app.post('/contactus', function (req, res) {
	  var mailOpts, smtpTrans;
	  //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
	  smtpTrans = nodemailer.createTransport('SMTP', {
		service: 'Gmail',
		auth: {
		  user: "xxxxxxxx@gmail.com",
		  pass: "xxxxxxxxxxx"
		}
	  });
	  //Mail options
	  mailOpts = {
		from: req.body.name + req.body.email,
		to: 'yyyyyyyyyy@gmail.com',
		subject: req.body.email + '  --Msg from contactus-form',
		text: "Name: " + req.body.name + "Email: "  + req.body.email + 
		      "Contact No:  " + req.body.contactNo + "QUERY: " + req.body.message
	  };
	  smtpTrans.sendMail(mailOpts, function (error, response) {
		//Alert on event of message sent succeeds or fail.
		if (error) {
		  res.render('contactus',{msg : 'Error occured, message not sent.', err : true});
		}
		else {
		  res.render('contactus',{msg : 'Message sent! Thank you.', err : false});
		}
		smtpTrans.close();
	  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
