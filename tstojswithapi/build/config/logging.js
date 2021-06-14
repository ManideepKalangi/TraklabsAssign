"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getTimeStamp = function () {
    return new Date().toISOString();
};
var infolog = function (namespace, message, object) {
    if (object) {
        console.log("[" + getTimeStamp + "] [INFO] [" + namespace + "] " + message, object);
    }
    else {
        console.log("[" + getTimeStamp() + "] [INFO] [" + namespace + "] " + message);
    }
};
var errorlog = function (namespace, message, object) {
    if (object) {
        console.log("[" + getTimeStamp() + "] [ERROR] [" + namespace + "] " + message, object);
    }
    else {
        console.log("[" + getTimeStamp() + "] [ERROR] [" + namespace + "] " + message);
    }
};
var warnlog = function (namespace, message, object) {
    if (object) {
        console.log("[" + getTimeStamp() + "] [WARN] [" + namespace + "] " + message, object);
    }
    else {
        console.log("[" + getTimeStamp() + "] [WARN] [" + namespace + "] " + message);
    }
};
var debuglog = function (namespace, message, object) {
    if (object) {
        console.log("[" + getTimeStamp() + "] [DEBUG] [" + namespace + "] " + message, object);
    }
    else {
        console.log("[" + getTimeStamp() + "] [DEBUG] [" + namespace + "] " + message);
    }
};
exports.default = {
    infolog: infolog,
    errorlog: errorlog,
    warnlog: warnlog,
    debuglog: debuglog
};
