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
exports.Observer2 = exports.Observer1 = exports.Observer = exports.Subject = void 0;
// 基础版观察者模式
var Subject = /** @class */ (function () {
    function Subject() {
        this.observers = new Array();
    }
    Subject.prototype.getState = function () {
        return this.state;
    };
    Subject.prototype.setState = function (state) {
        this.state = state;
        this.notifyAllObservers();
    };
    Subject.prototype.attach = function (observer) {
        this.observers.push(observer);
    };
    Subject.prototype.notifyAllObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update();
        }
    };
    return Subject;
}());
exports.Subject = Subject;
var Observer = /** @class */ (function () {
    function Observer() {
    }
    return Observer;
}());
exports.Observer = Observer;
var Observer1 = /** @class */ (function (_super) {
    __extends(Observer1, _super);
    function Observer1(subject) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subject.attach(_this);
        return _this;
    }
    Observer1.prototype.update = function () {
        console.log("Observer1: "
            + this.subject.getState());
    };
    return Observer1;
}(Observer));
exports.Observer1 = Observer1;
var Observer2 = /** @class */ (function (_super) {
    __extends(Observer2, _super);
    function Observer2(subject) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subject.attach(_this);
        return _this;
    }
    Observer2.prototype.update = function () {
        console.log("Observer2: "
            + this.subject.getState());
    };
    return Observer2;
}(Observer));
exports.Observer2 = Observer2;
var subject = new Subject();
new Observer1(subject);
new Observer2(subject);
