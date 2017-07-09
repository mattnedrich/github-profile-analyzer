var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist'));

// Routes
app.get('/', function(req,res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port);
