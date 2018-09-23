import Server from './server/server';
import router from './router/router';

import http = require('http');
import socketIO = require('socket.io');
import express = require('express');
import path = require('path');


const expressServer = Server.init(3000);
const server = http.createServer(expressServer.app);
const io = socketIO.listen(server);

expressServer.app.use(router);

expressServer.app.use(express.static(path.join(__dirname, 'frontend')));

io.on('connection', (socket: socketIO.Socket) => {
    console.log('New socket connected...');
    socket.on('message', (message: string) => {
        io.emit('messageFromServer', {message});
    });
});

server.listen(3000);

