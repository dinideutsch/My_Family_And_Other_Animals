var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');

// var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products');
var commentsRouter = require('./routes/comments');
var adminsRouter = require('./routes/admins');
var ordersRouter = require('./routes/orders');
const { delete_product } = require('./controllers/productController');

var app = express();
app.use((req,res,next)=>{console.log('on req');next()})

var mongoDb = 'mongodb+srv://dini:dinideutsch@cluster0.siwqi.mongodb.net/AnimalShop?retryWrites=true&w=majority';
mongoose.connect(mongoDb, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(cors());
app.use((req,res,next)=>{console.log('on req2');next()})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next)=>{console.log('on req');next()})

app.use('/products', productsRouter);
app.use('/comments', commentsRouter);
app.use('/admins', adminsRouter);
app.use('/orders', ordersRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
app.use(function(req, res, next) {
  next(createError(401));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err })
});

var server = app.listen(3000, function () {
  console.log("server run...")
})

module.exports = app;
