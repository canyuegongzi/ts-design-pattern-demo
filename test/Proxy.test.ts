import test from 'ava';
import {ProxyImage} from "../src/proxy/Proxy";
test('test', (t => {
    let img = new ProxyImage('A.png');
    t.is(img.display(), 'Displaying A.png')
}));
