/**
 * class装饰器案例
 * 给ES7DecoratorUserClass扩展一个国籍属性， 默认为China
 */
@checkNationality1
export class ES7DecoratorUserClass1 {

}
// 装饰器
function checkNationality1(constructor: Function) {
    constructor.prototype.nationality = 'China';
}

/**
 * class装饰器(传参数)案例
 * 给ES7DecoratorUserClass扩展一个国籍属性， 默认为China
 */
@checkNationality2('Japan')
export class ES7DecoratorUserClass2 {

}
// 装饰器
function checkNationality2(nationality: string) {
    return function (target: Function) {
        target.prototype.nationality = nationality;
    };
}

/**
 * function装饰器
 */
export function recordLogger1(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('======================================================================');
    console.log('function 装饰器默认初始化');
    console.log('start request userListIds');
    console.log(target);
    console.log("prop " + propertyKey);
    console.log("desc " + JSON.stringify(descriptor) + "\n\n");
    console.log('======================================================================');
}

let requestNum = 0;
/**
 * 实现一个请求日志记录器
 * @param target
 * @param propertyKey
 * @param descriptor
 */
export function recordLogger2(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const oldFunValue = descriptor.value;
    const consoleLogger = () => {
        console.log('======================================================================');
        console.log('function 日志记录器');
        requestNum++;
        console.log('start request userRoleList');
        console.log('======================================================================');
    }
    descriptor.value = function() {
        consoleLogger();
        return oldFunValue.apply(this, arguments);
    }
    return descriptor
}
// 类装饰器
export function userController(target) {
    console.log('userController already init success')
}

@userController
export class UserController {
    public num: number;
    constructor() {

    }
    // 定义一个获取用户ids的方法
    @recordLogger1
    public getUserIdsList(): Array<number> {
        return [1,2,3]
    }

    // 定义一个获取用户角色的方法
    @recordLogger2
    public getUserRoleList(): Array<string> {
        return ['member', 'vip']
    }


    @recordLogger1
    static getControllerConfig(): any {
        return {
            ISROOT: true
        }
    }

    getRequestNUm(): number {
        return requestNum;
    }

}
