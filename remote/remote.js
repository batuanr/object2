class Remote {
    constructor() {
        this.code = null;
        this.tivi = tivi;

    }
    setTivi(tivi){
        this.tivi = tivi;
    }
    changeChannel(channel){
        this.tivi.setChannel(channel);
    }
    setVolumeUp(volume){
        this.tivi.setVolume(volume)
    }
    turnOnOff(){
        this.tivi.setOnOff();
    }
}