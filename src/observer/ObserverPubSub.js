"use strict";
exports.__esModule = true;
exports.PubEvent = void 0;
/**
 * 发布订阅（主要用于发布订阅的全局事件）
 */
var PubEvent = /** @class */ (function () {
    function PubEvent() {
        this.clientList = {};
    }
    PubEvent.prototype.listen = function (key, fn) {
        if (!this.clientList[key]) {
            this.clientList[key] = [];
        }
        this.clientList[key].push(fn);
    };
    PubEvent.prototype.trigger = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var fns = this.clientList[key];
        if (!fns || fns.length === 0) {
            return false;
        }
        fns.forEach(function (fn) {
            fn.apply(void 0, args);
        });
    };
    PubEvent.prototype.remove = function (key, fn) {
        var fns = this.clientList[key];
        if (!fns) {
            return false;
        }
        if (!fn) {
            fns && fns(fns.length = 0);
        }
        else {
            for (var l = fns.length - 1; l >= 0; l--) {
                var _fn = fns[l];
                if (_fn === fn) {
                    fns.splice(l, 1);
                }
            }
        }
    };
    return PubEvent;
}());
exports.PubEvent = PubEvent;
// 订阅事件回调
var testValueChange = function (val) {
    console.log(val);
};
// 实例化一个事件调度中心
var _globalEvent = new PubEvent();
// 监听testValueChange事件，回调函数为testValueChange
_globalEvent.listen('testValueChange', testValueChange);
setTimeout(function () {
    // 发布一个testValueChange的事件
    _globalEvent.trigger('testValueChange', 'firstValue');
}, 2000);
