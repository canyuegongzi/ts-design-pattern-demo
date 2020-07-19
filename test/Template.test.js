"use strict";
exports.__esModule = true;
// 模板方法单元测试
var ava_1 = require("ava");
var Template_1 = require("../src/template/Template");
ava_1["default"]('test', function (t) {
    var game = new Template_1.Cricket();
    game.play();
    console.log("========\n");
    game = new Template_1.Football();
    game.play();
    t.pass('end');
});
