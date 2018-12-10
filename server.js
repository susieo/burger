var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require("path");

// Open Server
var app = express();
var PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));
// app.use(express.static('public'));

// Parse application/x-www-form-urlencoded


// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var router = require('./controllers/burgers_controller.js');
app.use('/', router);



app.listen(PORT, function() 
{
  console.log("App listening on PORT " + PORT);
});