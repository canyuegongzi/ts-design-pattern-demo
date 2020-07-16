"use strict";
exports.__esModule = true;
// 策略模式测试
var ava_1 = require("ava");
var Strategy_1 = require("../src/strategy/Strategy");
ava_1["default"]('memberSettlementMoney', (function (t) {
    // 会员
    var context = new Strategy_1.Context(new Strategy_1.memberSettlementMoney());
    t.is(context.getMoney(125.36), 112.824);
}));
ava_1["default"]('svipSettlementMoney', (function (t) {
    // 超级会员
    var context = new Strategy_1.Context(new Strategy_1.svipSettlementMoney());
    t.is(context.getMoney(2145), 1716);
}));
ava_1["default"]('normalSettlementMoney', (function (t) {
    // 默认价格
    var context = new Strategy_1.Context(new Strategy_1.normalSettlementMoney());
    t.is(context.getMoney(899), 899);
}));
