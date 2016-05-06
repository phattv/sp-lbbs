var express = require('express'),
  app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname)); // Serve files

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

// app.listen(port);
// console.log('===== App started =====');

// app.use(express.static(__dirname + '/app/index.html');

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});