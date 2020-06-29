const express = require('express');
const socketio = require('socket.io');
const path = require('path');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, '..', 'public')));

// app.get('/',(req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
// });

io.on('connection', (socket) => {
    console.log(`User ${socket.id} connected`)
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });

server.listen(3333, () => console.log('Server running on port 3333')); 