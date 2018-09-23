"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
    npm install @types/express --save-dev
*/
const express = require("express");
class Server {
    constructor(port) {
        this.port = port;
        this.app = express();
    }
    ;
    static init(port) {
        return new Server(port);
    }
    // inicializara el servidor
    start(callback) {
        this.app.listen(this.port, callback);
    }
}
exports.default = Server;
;
