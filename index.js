var express = require('express'),
  app = express(),
  port = 2828;

app.use(express.static(__dirname)); // Serve files

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port);
console.log('===== App started at port ' + port + ' =====');