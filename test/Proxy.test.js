"use strict";
exports.__esModule = true;
var ava_1 = require("ava");
var Proxy_1 = require("../src/proxy/Proxy");
ava_1["default"]('test', (function (t) {
    var img = new Proxy_1.ProxyImage('A.png');
    t.is(img.display(), 'Displaying A.png');
}));
