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
