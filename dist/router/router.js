"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path = require("path");
const router = express_1.Router();
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'www', 'index.html'));
});
exports.default = router;
