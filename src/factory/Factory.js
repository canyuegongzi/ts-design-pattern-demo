"use strict";
exports.__esModule = true;
exports.Factory = exports.FormField = void 0;
var FormField = /** @class */ (function () {
    function FormField(name, reg) {
        this.name = name;
        this.reg = reg;
    }
    FormField.prototype.init = function () {
        console.log('字段校验初始化完成');
    };
    FormField.prototype.getReg = function () {
        return "reg:" + this.reg;
    };
    FormField.prototype.verifyField = function (val) {
        return this.reg.test(val);
    };
    return FormField;
}());
exports.FormField = FormField;
var Factory = /** @class */ (function () {
    function Factory() {
    }
    Factory.prototype.create = function (name, reg) {
        return new FormField(name, reg);
    };
    return Factory;
}());
exports.Factory = Factory;
