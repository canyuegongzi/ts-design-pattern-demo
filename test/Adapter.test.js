"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = require("ava");
var Adapter_1 = require("../src/adapter/Adapter");
ava_1.default('test', (function (t) {
    var player = new Adapter_1.AudioPlayer();
    t.is(player.play('mp3', 'aa.mp3'), 'g播放器内置支持mp3，aa.mp3已开始播放！');
    t.is(player.play('vlc', 'bb.vlc'), 'playing vlc file.....bb.vlc');
    t.is(player.play('mp4', 'cc.mp4'), 'playing mp4 file.....cc.mp4');
}));
