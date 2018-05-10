var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http)         // socket

// allows cross origin resource sharing
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// when server recieves chat event, it will broadcast that message to everyone connected
// at that time:
io.on('connection', socket => {
  socket.on('chat', message => {
    io.sockets.emit('chat', message);
  })
})

var server = http.listen(3001, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
