
//import modules

var express = require("express");

var app = express();

//Port to display the app
var port = process.env.PORT || 2015;

app.use(express.static(__dirname + '/public')); //Serve static state

app.get('*', function(request, response) {
	response.sendfile('./public/index.html'); //load the single view page
});

app.listen(port, function () {
	console.log("Listening at port: " + port);
});