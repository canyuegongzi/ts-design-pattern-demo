import * as events from "events";
const EventEmitter = events.EventEmitter;

class BaseEmit  extends EventEmitter{
    public name: string = '';
    constructor(name: string){
        super();
        this.name = name;
    }

    public setValue(name: string) {
        this.name = name;
    }
}
const testEmit = new BaseEmit('initValue');

testEmit.on('valueChange', () => {
    console.log(testEmit.name)
});

setTimeout(() => {
    testEmit.setValue('firstChangeValue')
    testEmit.emit('valueChange', () => {})
}, 3000)

setTimeout(() => {
    testEmit.setValue('secondChangeValue')
    testEmit.emit('valueChange', () => {})
}, 6000)
