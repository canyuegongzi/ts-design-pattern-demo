"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = exports.userController = exports.recordLogger2 = exports.recordLogger1 = exports.ES7DecoratorUserClass2 = exports.ES7DecoratorUserClass1 = void 0;
/**
 * class装饰器案例
 * 给ES7DecoratorUserClass扩展一个国籍属性， 默认为China
 */
var ES7DecoratorUserClass1 = /** @class */ (function () {
    function ES7DecoratorUserClass1() {
    }
    ES7DecoratorUserClass1 = __decorate([
        checkNationality1
    ], ES7DecoratorUserClass1);
    return ES7DecoratorUserClass1;
}());
exports.ES7DecoratorUserClass1 = ES7DecoratorUserClass1;
// 装饰器
function checkNationality1(constructor) {
    constructor.prototype.nationality = 'China';
}
/**
 * class装饰器(传参数)案例
 * 给ES7DecoratorUserClass扩展一个国籍属性， 默认为China
 */
var ES7DecoratorUserClass2 = /** @class */ (function () {
    function ES7DecoratorUserClass2() {
    }
    ES7DecoratorUserClass2 = __decorate([
        checkNationality2('Japan')
    ], ES7DecoratorUserClass2);
    return ES7DecoratorUserClass2;
}());
exports.ES7DecoratorUserClass2 = ES7DecoratorUserClass2;
// 装饰器
function checkNationality2(nationality) {
    return function (target) {
        target.prototype.nationality = nationality;
    };
}
/**
 * function装饰器
 */
function recordLogger1(target, propertyKey, descriptor) {
    console.log('======================================================================');
    console.log('function 装饰器默认初始化');
    console.log('start request userListIds');
    console.log(target);
    console.log("prop " + propertyKey);
    console.log("desc " + JSON.stringify(descriptor) + "\n\n");
    console.log('======================================================================');
}
exports.recordLogger1 = recordLogger1;
var requestNum = 0;
/**
 * 实现一个请求日志记录器
 * @param target
 * @param propertyKey
 * @param descriptor
 */
function recordLogger2(target, propertyKey, descriptor) {
    var oldFunValue = descriptor.value;
    var consoleLogger = function () {
        console.log('======================================================================');
        console.log('function 日志记录器');
        requestNum++;
        console.log('start request userRoleList');
        console.log('======================================================================');
    };
    descriptor.value = function () {
        consoleLogger();
        return oldFunValue.apply(this, arguments);
    };
    return descriptor;
}
exports.recordLogger2 = recordLogger2;
// 类装饰器
function userController(target) {
    console.log('userController already init success');
}
exports.userController = userController;
var UserController = /** @class */ (function () {
    function UserController() {
    }
    // 定义一个获取用户ids的方法
    UserController.prototype.getUserIdsList = function () {
        return [1, 2, 3];
    };
    // 定义一个获取用户角色的方法
    UserController.prototype.getUserRoleList = function () {
        return ['member', 'vip'];
    };
    UserController.getControllerConfig = function () {
        return {
            ISROOT: true
        };
    };
    UserController.prototype.getRequestNUm = function () {
        return requestNum;
    };
    __decorate([
        recordLogger1
    ], UserController.prototype, "getUserIdsList", null);
    __decorate([
        recordLogger2
    ], UserController.prototype, "getUserRoleList", null);
    __decorate([
        recordLogger1
    ], UserController, "getControllerConfig", null);
    UserController = __decorate([
        userController
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
