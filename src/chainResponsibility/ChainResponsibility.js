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
exports.ChainPattern = exports.AbstractLogger = void 0;
var AbstractLogger = /** @class */ (function () {
    function AbstractLogger() {
    }
    AbstractLogger.prototype.setNextLogger = function (nextLogger) {
        this.nextLogger = nextLogger;
    };
    AbstractLogger.prototype.logMessage = function (level, message) {
        if (this.level <= level) {
            this.write(message);
        }
        if (this.nextLogger != null) {
            this.nextLogger.logMessage(level, message);
        }
    };
    AbstractLogger.INFO = 1;
    AbstractLogger.DEBUG = 2;
    AbstractLogger.ERROR = 3;
    return AbstractLogger;
}());
exports.AbstractLogger = AbstractLogger;
// 创建扩展了该记录器类的实体类。
var ConsoleLogger = /** @class */ (function (_super) {
    __extends(ConsoleLogger, _super);
    function ConsoleLogger(level) {
        var _this = _super.call(this) || this;
        _this.level = level;
        return _this;
    }
    ConsoleLogger.prototype.write = function (message) {
        console.log("Standard Console::Logger: " + message);
    };
    return ConsoleLogger;
}(AbstractLogger));
var ErrorLogger = /** @class */ (function (_super) {
    __extends(ErrorLogger, _super);
    function ErrorLogger(level) {
        var _this = _super.call(this) || this;
        _this.level = level;
        return _this;
    }
    ErrorLogger.prototype.write = function (message) {
        console.log("Error Console::Logger: " + message);
    };
    return ErrorLogger;
}(AbstractLogger));
var FileLogger = /** @class */ (function (_super) {
    __extends(FileLogger, _super);
    function FileLogger(level) {
        var _this = _super.call(this) || this;
        _this.level = level;
        return _this;
    }
    FileLogger.prototype.write = function (message) {
        console.log("File::Logger: " + message);
    };
    return FileLogger;
}(AbstractLogger));
// 创建不同类型的记录器。赋予它们不同的错误级别，并在每个记录器中设置下一个记录器。每个记录器中的下一个记录器代表的是链的一部分。
// 执行顺序： errorLogger(ERROR级别) ======>  fileLogger(DEBUG级别)  =======>  consoleLogger(INFO级别)
var ChainPattern = /** @class */ (function () {
    function ChainPattern() {
    }
    ChainPattern.getChainOfLoggers = function () {
        var errorLogger = new ErrorLogger(AbstractLogger.ERROR);
        var fileLogger = new FileLogger(AbstractLogger.DEBUG);
        var consoleLogger = new ConsoleLogger(AbstractLogger.INFO);
        errorLogger.setNextLogger(fileLogger);
        fileLogger.setNextLogger(consoleLogger);
        return errorLogger;
    };
    return ChainPattern;
}());
exports.ChainPattern = ChainPattern;
