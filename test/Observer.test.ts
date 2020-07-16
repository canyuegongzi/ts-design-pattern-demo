import test from 'ava';
import {Observer1, Observer2, Subject} from "../src/observer/Observer";
test('observer', (t => {
    let subject = new Subject();

    new Observer1(subject);
    new Observer2(subject);

    subject.setState(1);
    t.is(subject.getState(), 1);
    subject.setState(2);
    t.is(subject.getState(), 2);
}));
