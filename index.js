var express = require('express');

module.exports = app = express();

app.get('/', function(req, res) {
  res.status(200).send('Howdy doodee').end();
});

var port = 3000;
app.listen(port);
console.log('app listening on port: ', port);
