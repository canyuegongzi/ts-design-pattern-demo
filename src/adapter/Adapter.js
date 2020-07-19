"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioPlayer = void 0;
var VlcPlayer = /** @class */ (function () {
    function VlcPlayer() {
    }
    VlcPlayer.prototype.playVlc = function (filename) {
        return "playing vlc file....." + filename;
    };
    return VlcPlayer;
}());
var Mp4Player = /** @class */ (function () {
    function Mp4Player() {
    }
    Mp4Player.prototype.playMp4 = function (filename) {
        return "playing mp4 file....." + filename;
    };
    return Mp4Player;
}());
var MediaAdaper = /** @class */ (function () {
    function MediaAdaper(type) {
        // 根据type 生成哪一个播放类
        if (type == "vlc") {
            this.player = new VlcPlayer();
        }
        else if (type == "mp4") {
            this.player = new Mp4Player();
        }
        else {
            return null;
        }
    }
    MediaAdaper.prototype.play = function (type, filename) {
        // 因为特定的播放类有特定的播放方法，所以还需要再根据type调用特定的播放类
        if (type == "vlc") {
            return this.player.playVlc(filename);
        }
        else if (type == "mp4") {
            return this.player.playMp4(filename);
        }
        else {
            return null;
        }
    };
    return MediaAdaper;
}());
var AudioPlayer = /** @class */ (function () {
    function AudioPlayer() {
    }
    AudioPlayer.prototype.play = function (type, filename) {
        if (type == 'mp3') {
            return "g\u64AD\u653E\u5668\u5185\u7F6E\u652F\u6301mp3\uFF0C" + filename + "\u5DF2\u5F00\u59CB\u64AD\u653E\uFF01";
        }
        else if (type == 'vlc' || type == 'mp4') {
            this.MediaAdaper = new MediaAdaper(type);
            return this.MediaAdaper.play(type, filename);
        }
        else {
            return '不支持当前格式';
        }
    };
    return AudioPlayer;
}());
exports.AudioPlayer = AudioPlayer;
var player = new AudioPlayer();
console.log(player.play('mp3', 'aa.mp3'));
console.log(player.play('vlc', 'bb.vlc'));
console.log(player.play('mp4', 'cc.mp4'));
