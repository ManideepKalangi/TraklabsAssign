"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var Server_Port = process.env.PORT || 1337;
var Server_HostName = process.env.HOST || 'localhost';
var Server = {
    hostname: Server_HostName,
    port: Server_Port
};
var config = {
    server: Server
};
exports.default = config;
