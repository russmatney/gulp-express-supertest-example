var express = require('express');

module.exports = app = express();

app.get('/', function(req, res) {
  res.status(200).send('Hello').end();
});

var port = process.env.PORT || 3000;
var node_env = process.env.NODE_ENV;
app.listen(port);
console.log('app listening on port: ' + port + ' in ' + node_env + ' mode.');
