## 职责链模式
### 专业描述
责任链模式（Chain of Responsibility Pattern）为请求创建了一个接收者对象的链。这种模式给予请求的类型，对请求的发送者和接收者进行解耦。这种类型的设计模式属于行为型模式。

在这种模式中，通常每个接收者都包含对另一个接收者的引用。如果一个对象不能处理该请求，那么它会把相同的请求传给下一个接收者，依此类推。
#### 普通描述
多个对象都有处理的机会，执行流程按照特定的链条传递该请求，直到有一个对象被处理。
## UML(来源网络)
![Proxy-UML.png](./chain_pattern_uml_diagram.jpg "my-logo")

## 经典场景
1. js原型链
2. jsDom中的事件冒泡
## 优缺点
### 优点
1. 降低耦合度。它将请求的发送者和接收者解耦。
2. 简化了对象。使得对象不需要知道链的结构。
3. 增强给对象指派职责的灵活性。通过改变链内的成员或者调动它们的次序，允许动态地新增或者删除责任。
4. 增加新的请求处理类很方便。
### 缺点
1. 不能保证请求一定被接收。
## 代码实现
案例以java设计模式中的经典案例日志中间件AbstractLogger为例，采用typeScript编码实现
1. 创建抽象的记录器类。
```
abstract class AbstractLogger {
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
```

2. 创建扩展了该记录器类的实体类。
```
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

```
3. 构建职责链
创建不同类型的记录器。赋予它们不同的错误级别，并在每个记录器中设置下一个记录器。每个记录器中的下一个记录器代表的是链的一部分。

最后构建的职责链：errorLogger(ERROR级别) ==>  fileLogger(DEBUG级别)  ==>  consoleLogger(INFO级别)
```
class ChainPattern{
    static getChainOfLoggers() : AbstractLogger{

        let errorLogger = new ErrorLogger(AbstractLogger.ERROR);
        let fileLogger = new FileLogger(AbstractLogger.DEBUG);
        let consoleLogger = new ConsoleLogger(AbstractLogger.INFO);

        errorLogger.setNextLogger(fileLogger);
        fileLogger.setNextLogger(consoleLogger);

        return errorLogger;
    }

}
```

## 代码测试
### 测试用例

```
## 实例化Logger
let loggerChain = ChainPattern.getChainOfLoggers();
```
```
## ① 下一步为空  执行consoleLogger(INFO级别)日志记录操作
loggerChain.logMessage(AbstractLogger.INFO, "This is an information.");
```
```
## ② 下一步  fileLogger(DEBUG级别)日志记录操作 再下一步    consoleLogger(INFO级别)日志记录操作
loggerChain.logMessage(AbstractLogger.DEBUG, "This is an debug level information.");
```
```
## ③ 下一步 errorLogger(ERROR级别)日志记录操作   再下一步fileLogger(DEBUG级别)日志记录操作  再下一步consoleLogger(INFO级别) 日志记录操作
loggerChain.logMessage(AbstractLogger.ERROR, "This is an error information.");

```
### 测试结果
```
## ① 操作结果
Standard Console::Logger: This is an information.

## ② 操作结果
File::Logger: This is an debug level information.
Standard Console::Logger: This is an debug level information.

## ③ 操作结果
Error Console::Logger: This is an error information.
File::Logger: This is an error information.
Standard Console::Logger: This is an error information.

Process finished with exit code 0
```

