
// 基础版观察者模式
export class Subject {
    private observers : Observer[] = new Array<Observer>();
    private state: number;

    public getState(): number {
        return this.state;
    }

    public setState(state: number) {
        this.state = state;
        this.notifyAllObservers();
    }

    attach(observer: Observer){
        this.observers.push(observer);
    }

    notifyAllObservers(){
        for (let observer of this.observers) {
            observer.update();
        }
    }
}


export abstract class Observer {
    protected subject: Subject;
    public abstract update();
}

export class Observer1 extends Observer{

    constructor(subject: Subject){
        super();
        this.subject = subject;
        this.subject.attach(this);
    }

    update() {
        console.log( "Observer1: "
            + this.subject.getState() );
    }
}

export class Observer2 extends Observer{

    constructor(subject: Subject){
        super();
        this.subject = subject;
        this.subject.attach(this);
    }

    update() {
        console.log( "Observer2: "
            + this.subject.getState() );
    }
}


