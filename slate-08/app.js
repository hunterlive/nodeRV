var app = require('express')(),
    port = process.env.PORT || 3000;

app.get('/hello1', function(req, res) {
  res.send('<h1>Ah yes helloo</h1>');             // automatic -> text/html
});

app.get('/hello2', function(req, res) {
  res.header('Content-Type', 'text/plain');
  res.send('Ah yes helloo\n');                    // explicit -> text/plain
});

app.get('/hello3', function(req, res) {
  res.send(new Buffer('Ah yes helloo\n'));        // automatic -> application/octet-stream
});

app.get('/hello4', function(req, res) {
  res.send({message: 'Ah yes helloo'});         // automatic -> application/json
});

app.get('/hello5', function(req, res) {
  res.send(['Ah yes helloo']);                  // automatic -> application/json
});

app.get('/hello6', function(req, res) {
  res.header('Content-Type', 'text/xml');
  res.send('<message>Ah yes helloo</message>')    // explicit -> text/xml;
});

app.listen(port);
