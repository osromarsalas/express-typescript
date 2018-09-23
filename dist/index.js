"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const router_1 = require("./router/router");
const http = require("http");
const socketIO = require("socket.io");
const express = require("express");
const path = require("path");
const expressServer = server_1.default.init(3000);
const server = http.createServer(expressServer.app);
const io = socketIO.listen(server);
expressServer.app.use(router_1.default);
expressServer.app.use(express.static(path.join(__dirname, 'frontend')));
io.on('connection', (socket) => {
    console.log('New socket connected...');
    socket.on('message', (message) => {
        io.emit('messageFromServer', { message });
    });
});
server.listen(3000);
