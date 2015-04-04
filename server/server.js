//Code by Thomas Veale 3/23/2015
//dependencies
var express     = require('express');
var http        = require('http');
var bodyParser  = require('body-parser');
var app         = express();
var server      = http.Server(app);
var io_function = require('socket.io');
var io          = io_function(server);


//configure app

app.use(bodyParser.urlencoded());
app.use(express.static(__dirname));

//launch server
//listen for connections
app.listen(3000, function(){
	console.log('listening on *:3000');
});


//A request to the root api returns a simple response
app.get('/', function (req, res) {
  res.send(__dirname + "index.html");
});




