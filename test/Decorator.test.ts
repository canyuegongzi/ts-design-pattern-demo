import test from 'ava';
import {ES7DecoratorUserClass1, ES7DecoratorUserClass2, UserController} from '../src/decorator/ES7Decorator';
// class装饰器(无参数)
test('normalClassNoParams', t => {
    const normalClassNoParams = new ES7DecoratorUserClass1();
    // @ts-ignore
    t.is(normalClassNoParams.nationality, 'China')
});


// class装饰器(有参数)
test('normalClassHaveParams', t => {
    const normalClassHaveParams = new ES7DecoratorUserClass2();
    // @ts-ignore
    t.is(normalClassHaveParams.nationality, 'Japan')
});

// function 装饰器 初始化
test('normalFunction', t => {
    const normalFunction = new UserController();
    t.deepEqual(normalFunction.getUserIdsList(), [1,2,3]);
    t.pass()

});

// function 装饰器  日志记录器
test('normalFunctionLogger', t => {
    const normalFunction = new UserController();
    // 请求次数   1
    t.deepEqual(normalFunction.getUserRoleList(), ['member', 'vip']);
    t.is(normalFunction.getRequestNUm(), 1);

    // 请求次数   2
    normalFunction.getUserRoleList();
    t.is(normalFunction.getRequestNUm(), 2);
    console.log(normalFunction.getRequestNUm());
    t.pass();
});
