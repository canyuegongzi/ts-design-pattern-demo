abstract class Game {
    abstract initialize();
    abstract startPlay();
    abstract endPlay();
    play(){
        this.initialize();
        this.startPlay();
        this.endPlay();
    }
}

export class Cricket extends Game {

    endPlay() {
        console.log("Cricket Game Finished!");
    }

    initialize() {
        console.log("Cricket Game Initialized! Start playing.");
    }

    startPlay() {
        console.log("Cricket Game Started. Enjoy the game!");
    }
}


export class Football extends Game {

    endPlay() {
        console.log("Football Game Finished!");
    }

    initialize() {
        console.log("Football Game Initialized! Start playing.");
    }

    startPlay() {
        console.log("Football Game Started. Enjoy the game!");
    }
}


