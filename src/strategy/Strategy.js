"use strict";
exports.__esModule = true;
exports.Context = exports.normalSettlementMoney = exports.svipSettlementMoney = exports.memberSettlementMoney = void 0;
// 会员 结算
var memberSettlementMoney = /** @class */ (function () {
    function memberSettlementMoney() {
    }
    memberSettlementMoney.prototype.settlementMoney = function (num) {
        return num * 0.9;
    };
    return memberSettlementMoney;
}());
exports.memberSettlementMoney = memberSettlementMoney;
// 超级会员 结算
var svipSettlementMoney = /** @class */ (function () {
    function svipSettlementMoney() {
    }
    svipSettlementMoney.prototype.settlementMoney = function (num) {
        return num * 0.8;
    };
    return svipSettlementMoney;
}());
exports.svipSettlementMoney = svipSettlementMoney;
// 普通结算
var normalSettlementMoney = /** @class */ (function () {
    function normalSettlementMoney() {
    }
    normalSettlementMoney.prototype.settlementMoney = function (num) {
        return num;
    };
    return normalSettlementMoney;
}());
exports.normalSettlementMoney = normalSettlementMoney;
var Context = /** @class */ (function () {
    function Context(strategy) {
        this.strategy = strategy;
    }
    Context.prototype.getMoney = function (num1) {
        return this.strategy.settlementMoney(num1);
    };
    return Context;
}());
exports.Context = Context;
