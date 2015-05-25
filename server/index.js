var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash'); //dash is a variable name

// Create the application.
//App defined.
var app = express();

// Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// CORS Support (Public API) any server can access your 
//api 
//Opening up accessibility.
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

//path to hello.
//After the app has been defined, you can use this anywhere after it.
app.use('/hello', function(req, res, next) {
  res.send('<h1>Roomy Test!</h1>');
  next();
});

//port to listen 
var port = process.env.PORT || 2015;

// Connect to MongoDB
mongoose.connect('mongodb://roommates:roommates@ds035702.mongolab.com:35702/roommates');
mongoose.connection.once('open', function() {
  
  // Load the models.
  //Dependency injection injects it to the app
  app.models = require('./models/index');
  
  // Load the routes.
var routes = require('./routes');
_.each(routes, function(controller, route) {
  app.use(route, controller(app, route));
});
								
  app.listen(port, function () {
	console.log("Listening at port: " + port);
    });
});