var express = require('express'),
  app = express(),
  port = 2828;

app.use(express.static(__dirname + 'app'));

app.listen(port);
console.log('===== Node service started =====');

app.get('/*', function(request, response) {
  request.sendFind(__dirname + 'app/index.html');
});