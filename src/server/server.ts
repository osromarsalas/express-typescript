/* 
    npm install @types/express --save-dev
*/
import express = require('express');

export default class Server {
    public app: express.Application;

    constructor(private port: number) {
        this.app = express();
    };

    static init(port: number): Server {
        return new Server(port);
    }

    // inicializara el servidor
    start(callback: Function) {
        this.app.listen(this.port, callback);
    }
};
