const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });

    socket.on('message', (message) => {
        console.log('Message:', message);
        io.emit('message', message);
    });
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
