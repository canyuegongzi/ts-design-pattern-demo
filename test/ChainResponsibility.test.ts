// 职责链模式测试
import test from 'ava';
import {AbstractLogger, ChainPattern} from "../src/chainResponsibility/ChainResponsibility";

test('test', t => {
    let loggerChain = ChainPattern.getChainOfLoggers();

    // 下一步为空  执行consoleLogger(INFO级别)日志记录操作
    loggerChain.logMessage(AbstractLogger.INFO, "This is an information.");

    // 一下步  fileLogger(DEBUG级别)日志记录操作 再下一步    consoleLogger(INFO级别)日志记录操作
    loggerChain.logMessage(AbstractLogger.DEBUG, "This is an debug level information.");

    // 下一步 errorLogger(ERROR级别)日志记录操作   再下一步fileLogger(DEBUG级别)日志记录操作  再下一步consoleLogger(INFO级别) 日志记录操作
    loggerChain.logMessage(AbstractLogger.ERROR, "This is an error information.");

    t.pass('end');
})
