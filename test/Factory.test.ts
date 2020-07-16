import test from 'ava';
import {Factory, FormField} from "../src/factory/Factory";


test('factor init', (t) => {
    const factor = new Factory();
    t.true(factor instanceof Factory);
});

test('reg init', (t) => {
    const factor = new Factory();
    // 构建邮箱校验器
    const product1 = factor.create('email', /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/);

    t.true(product1.verifyField('yongfeide123@sina.com'))

    // 构建电话校验器
    const product2 = factor.create('phone', /^1[3|4|5|8][0-9]\d{4,8}$/);

    t.true(product2.verifyField('18660683370'))
});

test('reg instanceof', (t) => {
    const factor = new Factory();
    const product1 = factor.create('email', /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/);
    const product2 = factor.create('phone', /^1[3|4|5|8][0-9]\d{4,8}$/);
    t.true(product1 instanceof FormField)
    t.true(product2 instanceof FormField)
});


