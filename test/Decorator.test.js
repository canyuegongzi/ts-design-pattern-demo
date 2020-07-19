"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = require("ava");
var ES7Decorator_1 = require("../src/decorator/ES7Decorator");
// class装饰器(无参数)
ava_1.default('normalClassNoParams', function (t) {
    var normalClassNoParams = new ES7Decorator_1.ES7DecoratorUserClass1();
    // @ts-ignore
    t.is(normalClassNoParams.nationality, 'China');
});
// class装饰器(有参数)
ava_1.default('normalClassHaveParams', function (t) {
    var normalClassHaveParams = new ES7Decorator_1.ES7DecoratorUserClass2();
    // @ts-ignore
    t.is(normalClassHaveParams.nationality, 'Japan');
});
// function 装饰器 初始化
ava_1.default('normalFunction', function (t) {
    var normalFunction = new ES7Decorator_1.UserController();
    t.deepEqual(normalFunction.getUserIdsList(), [1, 2, 3]);
    t.pass();
});
// function 装饰器  日志记录器
ava_1.default('normalFunctionLogger', function (t) {
    var normalFunction = new ES7Decorator_1.UserController();
    // 请求次数   1
    t.deepEqual(normalFunction.getUserRoleList(), ['member', 'vip']);
    t.is(normalFunction.getRequestNUm(), 1);
    // 请求次数   2
    normalFunction.getUserRoleList();
    t.is(normalFunction.getRequestNUm(), 2);
    console.log(normalFunction.getRequestNUm());
    t.pass();
});
