"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var express_1 = __importDefault(require("express"));
var logging_1 = __importDefault(require("./config/logging"));
var config_1 = __importDefault(require("./config/config"));
var sample_1 = __importDefault(require("./routes/sample"));
var Namespace = 'Server';
var router = express_1.default();
/** Logging the request */
router.use(function (req, res, next) {
    logging_1.default.infolog(Namespace, "Method - [" + req.method + "], URL - [" + req.url + "], IP - [" + req.socket.remoteAddress + "]");
    res.on('finish', function () {
        logging_1.default.infolog(Namespace, "Method - [" + req.method + "], URL - [" + req.url + "], IP - [" + req.socket.remoteAddress + "], Status - [" + res.statusCode + "]");
    });
    next();
});
/** Rules of API */
router.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, x-Requested-With, Content-Type, Accept, Authorization');
    if (req.method == 'OPTION') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH POST DELETE PUT');
        return res.status(200).json({});
    }
    next();
});
/** Routes nothing but API Calls */
router.use('/sample', sample_1.default);
/** Error Handling */
router.use(function (req, res, next) {
    var error = new Error('Not found');
    return res.status(404).json({
        message: error.message
    });
});
/** Creating Server */
var httpServer = http_1.default.createServer(router);
httpServer.listen(config_1.default.server.port, function () {
    logging_1.default.infolog(Namespace, "Server running on " + config_1.default.server.hostname + ":" + config_1.default.server.port);
});
