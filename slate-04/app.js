// create an express app
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

// route handler for GET /
app.get('/', function(req, res) {
  var data = '<h1>Ah yes helloo</h1>';
  res.send(data);
});

app.listen(port);

console.log('server started on port %s', port);

