var http = require('http');

var handleRequest = function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/text'});
  res.end('Welcome to Node Training and Fundamentals\n');

};

var server = http.createServer(handleRequest);

server.listen(3000, 'localhost');  //listen is the event
