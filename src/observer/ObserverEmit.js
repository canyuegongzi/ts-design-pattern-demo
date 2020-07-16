"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var events = require("events");
var EventEmitter = events.EventEmitter;
var BaseEmit = /** @class */ (function (_super) {
    __extends(BaseEmit, _super);
    function BaseEmit(name) {
        var _this = _super.call(this) || this;
        _this.name = '';
        _this.name = name;
        return _this;
    }
    BaseEmit.prototype.setValue = function (name) {
        this.name = name;
    };
    return BaseEmit;
}(EventEmitter));
var testEmit = new BaseEmit('initValue');
testEmit.on('valueChange', function () {
    console.log(testEmit.name);
});
setTimeout(function () {
    testEmit.setValue('firstChangeValue');
    testEmit.emit('valueChange', function () { });
}, 3000);
setTimeout(function () {
    testEmit.setValue('secondChangeValue');
    testEmit.emit('valueChange', function () { });
}, 6000);
