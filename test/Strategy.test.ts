import test from 'ava';
import {Context, memberSettlementMoney, normalSettlementMoney, svipSettlementMoney} from "../src/strategy/Strategy";

test('memberSettlementMoney', (t => {
    // 会员
    let context = new Context(new memberSettlementMoney());
    t.is(context.getMoney(125.36), 112.824);
}));

test('svipSettlementMoney', (t => {
    // 超级会员
    const context = new Context(new svipSettlementMoney());
    t.is(context.getMoney(2145), 1716);
}));

test('normalSettlementMoney', (t => {
    // 默认价格
    const context = new Context(new normalSettlementMoney());
    t.is(context.getMoney(899), 899);
}));

