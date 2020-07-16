"use strict";
exports.__esModule = true;
var ava_1 = require("ava");
var Factory_1 = require("../src/factory/Factory");
ava_1["default"]('factor init', function (t) {
    var factor = new Factory_1.Factory();
    t["true"](factor instanceof Factory_1.Factory);
});
ava_1["default"]('reg init', function (t) {
    var factor = new Factory_1.Factory();
    // 构建邮箱校验器
    var product1 = factor.create('email', /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/);
    t["true"](product1.verifyField('yongfeide123@sina.com'));
    // 构建电话校验器
    var product2 = factor.create('phone', /^1[3|4|5|8][0-9]\d{4,8}$/);
    t["true"](product2.verifyField('18660683370'));
});
ava_1["default"]('reg instanceof', function (t) {
    var factor = new Factory_1.Factory();
    var product1 = factor.create('email', /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/);
    var product2 = factor.create('phone', /^1[3|4|5|8][0-9]\d{4,8}$/);
    t["true"](product1 instanceof Factory_1.FormField);
    t["true"](product2 instanceof Factory_1.FormField);
});
