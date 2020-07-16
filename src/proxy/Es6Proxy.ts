const testObj = {
    age: 16
}
const proxyObj = new Proxy(testObj, {
    get(target: { age: number }, p: string | number | symbol, receiver: any): any {
        console.log('通过get ---- age');
        return target[p];
    },

    set(target: { age: number }, p: string | number | symbol, value: any, receiver: any): boolean {
        console.log('通过set ---- age');
        if (value > 100) {
            console.log('年龄不能大于100');
            return false;
        }
        target[p] = value;
        console.log('通过set ---- age  success');
        return true
    }
});

console.log(proxyObj.age);


proxyObj.age = 102
console.log(proxyObj.age);


proxyObj.age = 32
console.log(proxyObj.age);
