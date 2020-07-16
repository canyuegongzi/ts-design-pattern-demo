"use strict";
exports.__esModule = true;
var ava_1 = require("ava");
var Observer_1 = require("../src/observer/Observer");
ava_1["default"]('observer', (function (t) {
    var subject = new Observer_1.Subject();
    new Observer_1.Observer1(subject);
    new Observer_1.Observer2(subject);
    subject.setState(1);
    t.is(subject.getState(), 1);
    subject.setState(2);
    t.is(subject.getState(), 2);
}));
