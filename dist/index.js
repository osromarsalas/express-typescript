"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const router_1 = require("./router/router");
const server = server_1.default.init(3000);
server.app.use(router_1.default);
server.start(() => {
    console.log('Server runing in port 3000');
});
