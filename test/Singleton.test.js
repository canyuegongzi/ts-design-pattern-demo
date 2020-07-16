"use strict";
exports.__esModule = true;
var ava_1 = require("ava");
var Singleton_1 = require("../src/singleton/Singleton");
ava_1["default"]('test', (function (t) {
    var instance1 = Singleton_1.Singleton.getInstance();
    var instance2 = Singleton_1.Singleton.getInstance();
    t["true"](instance1 instanceof Singleton_1.Singleton);
    t["true"](instance2 instanceof Singleton_1.Singleton);
    t["true"](instance2 === instance1);
}));
ava_1["default"]('test1', (function (t) {
    var instance1 = Singleton_1.SingletonClosure.getInstance();
    var instance2 = Singleton_1.SingletonClosure.getInstance();
    t["true"](instance1 instanceof Singleton_1.SingletonClosure);
    t["true"](instance2 instanceof Singleton_1.SingletonClosure);
    t["true"](instance2 === instance1);
}));
