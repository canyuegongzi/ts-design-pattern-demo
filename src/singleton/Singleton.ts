// 构造器内部保存
export class Singleton {
    private static _instance : Singleton;
    private constructor(){};
    static getInstance(): Singleton{
        if(this._instance){
            return this._instance;
        }
        this._instance = new Singleton();
        return this._instance;
    }
}
let closure = (() => {
    let _instance;
    return (instance = null) => {
        if(_instance) return _instance;
        if(instance) _instance = instance;
        return _instance;
    }
})();

// 闭包模式保存
export class SingletonClosure{
    private constructor(){};

    static getInstance(){
        if(!closure()){
            return closure(new SingletonClosure())
        }
        return closure();
    }
}



