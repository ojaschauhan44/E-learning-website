var http = require ('http');
var express = require('express');
var session = require('express-session');
var expressValidator = require('express-validator');
var bodyParser = require('body-parser');
var app = express();
var path= require('path');
var mongo = require('mongodb');
var mongoose = require('mongoose');
mongoose.connect('mongodb://ojaschauhan:qwerty@ds113648.mlab.com:13648/discussion');
var db = mongoose.connection;


app.use(session({ cookie: { maxAge: 60000 },
                  secret: 'woot',
                  resave: true,
                  saveUninitialized: true}));



//to support url-encoded
app.use(bodyParser.urlencoded({ extended: true }));


//including static files
app.use(express.static(__dirname + '/frontview/csss/'));
app.use(express.static(__dirname + '/frontview/images/'));
app.use(express.static(__dirname + '/frontview/fonts/'));
app.use(express.static(__dirname + '/frontview/js/'));


//view engines and convert from html to js
app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs');
app.set('views', path.join(__dirname + '/frontview/html/'));


//including routes
var routes = require('./routes/routes');
app.use('/',routes);

var PORT = process.env.PORT || 3000;

var server=app.listen(PORT,function(){
  console.log('server running on 80');
});
