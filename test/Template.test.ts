// 模板方法单元测试
import test from 'ava';
import {Cricket, Football} from "../src/template/Template";

test('test', t => {
    let game = new Cricket();
    game.play();
    console.log("========\n");
    game = new Football();
    game.play();
    t.pass('end');
})

