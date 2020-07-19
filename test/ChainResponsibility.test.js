"use strict";
exports.__esModule = true;
// 职责链模式测试
var ava_1 = require("ava");
var ChainResponsibility_1 = require("../src/chainResponsibility/ChainResponsibility");
ava_1["default"]('test', function (t) {
    var loggerChain = ChainResponsibility_1.ChainPattern.getChainOfLoggers();
    // 下一步为空  执行consoleLogger(INFO级别)日志记录操作
    loggerChain.logMessage(ChainResponsibility_1.AbstractLogger.INFO, "This is an information.");
    // 一下步  fileLogger(DEBUG级别)日志记录操作 再下一步    consoleLogger(INFO级别)日志记录操作
    loggerChain.logMessage(ChainResponsibility_1.AbstractLogger.DEBUG, "This is an debug level information.");
    // 下一步 errorLogger(ERROR级别)日志记录操作   再下一步fileLogger(DEBUG级别)日志记录操作  再下一步consoleLogger(INFO级别) 日志记录操作
    loggerChain.logMessage(ChainResponsibility_1.AbstractLogger.ERROR, "This is an error information.");
    t.pass('end');
});
