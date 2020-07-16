### 模板方法模式
#### 专业描述
模板方法模式（Template Pattern）中，一个抽象类公开定义了执行它的方法的方式/模板。它的子类可以按需要重写方法实现，但调用将以抽象类中定义的方式进行。这种类型的设计模式属于行为型模式。
#### 普通描述（个人理解）
将不同的处理策略分开，抽离成独立的类， 避免出现过于复杂的if else。
### UML
![Proxy-UML.png](./strategy_pattern_uml.jpg "my-logo")

### 经典场景
1. 表单验证
2. 系统登录根据不同角色显示不同功能
### 优缺点
#### 优点
1. 可以有效的避免多重条件选择语句。
2. 策略算法可以自由切换。
2. 扩展性良好。
#### 缺点
1. 策略类会增多。
2. 所有策略类都需要对外暴露
### 代码实现
案例以超市购物结算按会员等级打折为例
1. 普通：无优惠
2. 会员： 9折
3. 超级会会员： 8折
```
interface SettlementStrategy {
    settlementMoney(number: number) : number;
}
// 会员 结算
export class memberSettlementMoney implements SettlementStrategy{
    settlementMoney(num: number) {
        return num * 0.9;
    }
}
// 超级会员 结算
export class svipSettlementMoney implements SettlementStrategy{
    settlementMoney(num: number) {
        return num * 0.8;
    }
}
// 普通结算
export class normalSettlementMoney implements SettlementStrategy{
    settlementMoney(num: number) {
        return num ;
    }
}
export class Context {
    private strategy: SettlementStrategy;
    constructor(strategy: SettlementStrategy){
        this.strategy = strategy;
    }
    getMoney(num1: number): number{
        return this.strategy.settlementMoney(num1);
    }
}

```
### 代码测试
#### 测试用例
```
test('memberSettlementMoney', (t => {
    // 会员
    let context = new Context(new memberSettlementMoney());
    t.is(context.getMoney(125.36), 112.824);
}));

test('svipSettlementMoney', (t => {
    // 超级会员
    const context = new Context(new svipSettlementMoney());
    t.is(context.getMoney(2145.32), 1716.256);
}));

test('normalSettlementMoney', (t => {
    // 默认价格
    const context = new Context(new normalSettlementMoney());
    t.is(context.getMoney(899), 899);
}));


```
#### 测试结果
```
> tsc test/Strategy.test.ts && ava -v test/Strategy.test.js

  √ memberSettlementMoney
  √ svipSettlementMoney
  √ normalSettlementMoney
  ─
  3 tests passed

Process finished with exit code 0
```

