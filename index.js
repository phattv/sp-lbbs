var express = require('express'),
  app = express(),
  port = 2828;

app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res) {
  console.log(__dirname);
  res.sendFile(__dirname + '/app/index.html');
});

app.listen(port);
console.log('===== Node service started. =====');