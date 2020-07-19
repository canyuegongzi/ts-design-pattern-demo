## 适配器模式
### 专业描述
适配器模式（Adapter Pattern）是作为两个不兼容的接口之间的桥梁。这种类型的设计模式属于结构型模式，它结合了两个独立接口的功能。

这种模式涉及到一个单一的类，该类负责加入独立的或不兼容的接口功能。
### 普通描述
根据具体的功能需求，添加一个中间层作为旧接口和新接口之间的桥梁，可以在不改变旧接口的基础上继续让旧接口提供服务。
## UML(来源网络)

<div align=center><img src="http://qiniu.canyuegongzi.xyz/adapter_pattern_uml_diagram.jpg"/></div>

## 场景案例
1. 接口适配
## 优缺点
### 优点
1. 可以让任何两个没有关联的类一起运行。
2. 提高了类的复用。
3. 最大限度的减少旧接口的改造。
### 缺点
1. 额外对象的创建，非直接调用，存在一定的资源开销。
2. 过多的适配类会对后期代码维护造成一定难度。
### 注意事项
适配器不是在详细设计时添加的，而是解决正在服役的项目的问题。
## 代码实现
案例以java设计模式中的经典案例日志中间件AbstractLogger为例，采用typeScript编码实现
```
interface MediaPlayer{
    play(type: string, filename: string)
}

interface AdvanceMediaPlayer{
    playVlc?(filename: string): string
    playMp4?(filename: string): string
}

class VlcPlayer implements AdvanceMediaPlayer{
    public playVlc(filename): string{
        return `playing vlc file.....${filename}`
    }
}

class Mp4Player implements AdvanceMediaPlayer{
    public playMp4(filename): string{
        return `playing mp4 file.....${filename}`
    }
}


class MediaAdaper implements MediaPlayer{
    public player : AdvanceMediaPlayer;
    constructor(type) {
        // 根据type 生成哪一个播放类
        if(type == "vlc"){
            this.player =  new VlcPlayer()
        }else if(type == "mp4"){
            this.player = new Mp4Player()
        }else{
            return null;
        }
    }
    public play(type: string, filename: string){
        // 因为特定的播放类有特定的播放方法，所以还需要再根据type调用特定的播放类
        if(type == "vlc"){
            return this.player.playVlc(filename);
        }else if(type == "mp4"){
            return this.player.playMp4(filename)
        }else{
            return null;
        }
    }
}


export class AudioPlayer implements MediaPlayer{
    public MediaAdaper: MediaAdaper;
    play(type, filename){
        if(type == 'mp3'){
            return `g播放器内置支持mp3，${filename}已开始播放！`;
        }else if(type == 'vlc' || type == 'mp4'){
            this.MediaAdaper = new MediaAdaper(type);
            return this.MediaAdaper.play(type, filename)
        }else{
            return '不支持当前格式';
        }
    }
}

```

## 代码测试
### 测试用例

```
test('test', (t => {
    let player = new AudioPlayer();
    t.is(player.play('mp3', 'aa.mp3'), 'g播放器内置支持mp3，aa.mp3已开始播放！');
    t.is(player.play('vlc', 'bb.vlc'), 'playing vlc file.....bb.vlc');
    t.is(player.play('mp4', 'cc.mp4'), 'playing mp4 file.....cc.mp4');
}));

```
### 测试结果
```
g播放器内置支持mp3，aa.mp3已开始播放！
playing vlc file.....bb.vlc
playing mp4 file.....cc.mp4
  √ test
  ─

  1 test passed

Process finished with exit code 0

```

