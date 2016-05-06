var express = require('express'),
  app = express(),
  port = 80;

app.use(express.static(__dirname)); // Serve files

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

app.listen(port);
console.log('===== App started at port ' + port + ' =====');