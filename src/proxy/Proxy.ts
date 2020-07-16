interface Image {
    display();
}

export class RealImage implements Image {
    protected fileName: string;

    constructor(fileName: string){
        this.fileName = fileName;
        this.loadFromDisk(fileName);
    }

    public display(): string {
        return `Displaying ${this.fileName}`
    }

    public loadFromDisk(fileName: string): void{
        console.log("Loading " + fileName);
    }
}

export class ProxyImage implements Image{

    public realImage : RealImage;
    public fileName : string;

    constructor(fileName: string){
        this.fileName = fileName;
    }

    public display(): string {
        if(this.realImage == null){
            this.realImage = new RealImage(this.fileName);
        }
        return this.realImage.display();
    }
}


let img = new ProxyImage('A.png');
console.log(img.display());
