class TsProxy {
    private _age: number = 0;

    public set age (value: number) {
        console.log('start set value')
        if (value > 100) {
            console.log('age 不能大于100')
            this._age = 100;
        }else {
            this._age = value;
        }

    }

    public get age () {
        console.log('start get value')
        return this._age;
    }
}
const s: TsProxy = new TsProxy();
s.age = 1205;
console.log(s.age);

s.age = 12;
console.log(s.age);
