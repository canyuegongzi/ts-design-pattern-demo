export class FormField {
    public reg: RegExp;
    public name: string;
    constructor( name: string, reg: RegExp) {
        this.name = name;
        this.reg = reg;
    }

    public init(): void {
        console.log('字段校验初始化完成');
    }

    public getReg(): string {
        return `reg:${this.reg}`;
    }

    public verifyField(val: string): boolean {
        return this.reg.test(val);
    }
}

export class Factory {
    public create(name: string, reg: RegExp): FormField {
        return new FormField(name, reg);
    }
}
