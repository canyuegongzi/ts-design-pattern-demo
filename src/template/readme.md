## 模板方法模式
### 专业描述
模板方法模式（Template Pattern）中，一个抽象类公开定义了执行它的方法的方式/模板。它的子类可以按需要重写方法实现，但调用将以抽象类中定义的方式进行。这种类型的设计模式属于行为型模式。
#### 普通描述
模板方法模式由抽象父类和具体实现的子类构成。抽象父类中封装了子类的算法框架，子类通过继承这个抽象类，也继承了整个算法结构，并且可以选择重写父类的方法
## UML(来源网络)
![Proxy-UML.png](./template_pattern_uml_diagram.jpg "my-logo")

## 经典场景
前端领域暂未找到合理的案例
1. 代码重构时可以将公共代码抽离成独立的父类。
## 优缺点
### 优点
1. 父类统一了基本的结构和算法。
2. 能够最大限度的实现代码的复用。
2. 子类可以在父类的基础上进行扩展。
### 缺点
1. 增加了代码的复杂程度（增加了的抽象类和类间联系）。
## 代码实现
前端领域暂时未找到适合的案例。
以下案例来演网络（（来源JAVA案例））

我们将创建一个定义操作的 Game 抽象类，其中，模板方法设置为 final，这样它就不会被重写。Cricket 和 Football 是扩展了 Game 的实体类，它们重写了抽象类的方法。
```
// 定义抽象类（规定基本的方法和执行顺序）
abstract class Game {
    abstract initialize();
    abstract startPlay();
    abstract endPlay();
    // 模板
    play(){
        this.initialize();
        this.startPlay();
        this.endPlay();
    }
}
// 子类按照抽象类的规定实现方法
class Cricket extends Game {

    endPlay() {
        console.log("Cricket Game Finished!");
    }

    initialize() {
        console.log("Cricket Game Initialized! Start playing.");
    }

    startPlay() {
        console.log("Cricket Game Started. Enjoy the game!");
    }
}


class Football extends Game {

    endPlay() {
        console.log("Football Game Finished!");
    }

    initialize() {
        console.log("Football Game Initialized! Start playing.");
    }

    startPlay() {
        console.log("Football Game Started. Enjoy the game!");
    }
}

```
## 代码测试
### 测试用例
```
let game = new Cricket();
game.play();
console.log("========\n");
game = new Football();
game.play();

```
### 测试结果
```
Cricket Game Initialized! Start playing.
Cricket Game Started. Enjoy the game!
Cricket Game Finished!
========

Football Game Initialized! Start playing.
Football Game Started. Enjoy the game!
Football Game Finished!

Process finished with exit code 0
```

