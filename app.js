var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session=require('express-session');

var page = require('./routes/page');
var signup = require('./routes/signup');
var addlab=require('./routes/addlab');
var login=require('./routes/login');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
	resave: true, // don't save session if unmodified
	saveUninitialized: false, // don't create session until something stored
	secret: 'cnk'
}));

app.use(function(req,res,next){
  if(req.session.user||req.path=="/login.html"||req.path=="/login"||req.path=="/signup"||req.path=="/signup.html"){
    //如果已经登陆或者访问的是登陆页就放行
    console.log("login or had session.user");
    next();
  }else{
    //转向登陆页面
    console.log("doesnot has session.user")
    res.redirect("/login.html");
  }
})


app.use('/', page);
app.use('/signup', signup);
app.use('/addlab',addlab);

app.use('/login',login);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("<p>sorry,we do not found what you want.</p>");
});

module.exports = app;
