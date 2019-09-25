var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();

var server = app.listen(4000, () => {
    console.log("Listening to requests on port 4000");
});


// Static files
app.use(express.static('public'));

// Socket setup
var io = socket(server);

io.on('connection', (socket) => {
    console.log("Socket connection successful", socket.id);

    socket.on('chat', function(data) {
        io.sockets.emit('chat', data);
    })
});