export abstract class AbstractLogger {
    static INFO : number = 1;
    static DEBUG : number = 2;
    static ERROR : number = 3;

    protected level : number;

    //责任链中的下一个元素
    protected  nextLogger : AbstractLogger;

    public setNextLogger(nextLogger: AbstractLogger){
        this.nextLogger = nextLogger;
    }

    public logMessage(level: number, message: string){
        if(this.level <= level){
            this.write(message);
        }
        if(this.nextLogger !=null){
            this.nextLogger.logMessage(level, message);
        }
    }

    protected abstract write(message: string);

}


// 创建扩展了该记录器类的实体类。
class ConsoleLogger extends AbstractLogger {
    constructor(level : number){
        super()
        this.level = level;
    }

    write(message: string) {
        console.log("Standard Console::Logger: " + message);
    }
}


class ErrorLogger extends AbstractLogger {

    constructor(level: number){
        super()
        this.level = level;
    }

    write(message: string) {
        console.log("Error Console::Logger: " + message);
    }
}


class FileLogger extends AbstractLogger {

    constructor(level: number){
        super()
        this.level = level;
    }

    write(message: string) {
        console.log("File::Logger: " + message);
    }
}

// 创建不同类型的记录器。赋予它们不同的错误级别，并在每个记录器中设置下一个记录器。每个记录器中的下一个记录器代表的是链的一部分。

// 执行顺序： errorLogger(ERROR级别) ======>  fileLogger(DEBUG级别)  =======>  consoleLogger(INFO级别)
export class ChainPattern{
    static getChainOfLoggers() : AbstractLogger{

        let errorLogger = new ErrorLogger(AbstractLogger.ERROR);
        let fileLogger = new FileLogger(AbstractLogger.DEBUG);
        let consoleLogger = new ConsoleLogger(AbstractLogger.INFO);

        errorLogger.setNextLogger(fileLogger);
        fileLogger.setNextLogger(consoleLogger);

        return errorLogger;
    }

}
