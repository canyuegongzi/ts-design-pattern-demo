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
