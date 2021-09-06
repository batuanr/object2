class Tv {
    constructor() {
        this.channel = 6;
        this.volume = 50;
        this.status = false;
    }
    setOnOff(){
        this.status = !this.status
    }
    setVolume(volume){
        this.volume = volume;
    }
    setChannel(channel){
        this.channel = channel;
    }
}
let tv1 = new Tv();
