import test from 'ava';
import {AudioPlayer} from '../src/adapter/Adapter';
test('test', (t => {
    let player = new AudioPlayer();
    t.is(player.play('mp3', 'aa.mp3'), 'g播放器内置支持mp3，aa.mp3已开始播放！');
    t.is(player.play('vlc', 'bb.vlc'), 'playing vlc file.....bb.vlc');
    t.is(player.play('mp4', 'cc.mp4'), 'playing mp4 file.....cc.mp4');
}));
