var pg = require('pg');
var express = require('express');

var app = express.createServer(express.logger());

var conString = "postgres://cslbrviesfgsub:PUxL6311IxYvOYveJad-UQabj8@ec2-23-21-85-197.compute-1.amazonaws.com:5432/d8cdt1ga62ttei";

app.get('/', function(request, response) {
  response.send('Hello World!');

  pg.connect(conString, function(err, client) {
  var query = client.query('SELECT * FROM question');

  query.on('row', function(row) {
    response.send(JSON.stringify(row));
  });
});

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

