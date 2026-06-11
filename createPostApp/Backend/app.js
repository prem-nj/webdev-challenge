require("dotenv").config(); 

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors=require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var multer=require('multer');
var uploadFile=require('./services/storage.service')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var Postmodel=require('./model/Postmodel')
var app = express();
const connectDB = require("./connection");
const e = require("express");
// Connect Database
connectDB();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(cors())

const upload=multer({storage:multer.memoryStorage()});

app.post('/create-post',upload.single("image"),async(req,res)=>{
  const result=await uploadFile(req.file.buffer)
 
const post=await  Postmodel.create({
  image:result.url,
  caption:req.body.caption
})
return res.status(201).json({
message:"Post created Sucessfully",
post
})
})


app.get('/post',async(req,res)=>{
const posts=await Postmodel.find();
res.status(201).json({
  message:"Fetched sucessfuly",
  posts
})

})





app.delete('/postdelete/:id',async(req,res)=>{
  const delpost=await Postmodel.findByIdAndDelete(req.params.id);
  res.status(201).json({
    message:"deleted",
    delpost
  })
})


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

app.listen(process.env.PORT,()=>{
  console.log("server is running");
})
module.exports = app;
