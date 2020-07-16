"use strict";
exports.__esModule = true;
exports.SingletonClosure = exports.Singleton = void 0;
// 构造器内部保存
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    ;
    Singleton.getInstance = function () {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new Singleton();
        return this._instance;
    };
    return Singleton;
}());
exports.Singleton = Singleton;
var closure = (function () {
    var _instance;
    return function (instance) {
        if (instance === void 0) { instance = null; }
        if (_instance)
            return _instance;
        if (instance)
            _instance = instance;
        return _instance;
    };
})();
// 闭包模式保存
var SingletonClosure = /** @class */ (function () {
    function SingletonClosure() {
    }
    ;
    SingletonClosure.getInstance = function () {
        if (!closure()) {
            return closure(new SingletonClosure());
        }
        return closure();
    };
    return SingletonClosure;
}());
exports.SingletonClosure = SingletonClosure;
var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();
console.log(instance1 instanceof Singleton);
console.log(instance2 instanceof Singleton);
console.log(instance2 === instance1);
