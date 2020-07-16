import test from 'ava';
import {Singleton, SingletonClosure} from "../src/singleton/Singleton";
test('test', (t => {
    let instance1 = Singleton.getInstance();
    let instance2 = Singleton.getInstance();
    t.true(instance1 instanceof Singleton);
    t.true(instance2 instanceof Singleton);
    t.true(instance2 === instance1);
}));

test('test1', (t => {
    let instance1 = SingletonClosure.getInstance();
    let instance2 = SingletonClosure.getInstance();
    t.true(instance1 instanceof SingletonClosure);
    t.true(instance2 instanceof SingletonClosure);
    t.true(instance2 === instance1);
}));
