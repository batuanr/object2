class SwitchButton {
    constructor() {
        this.status = false
        this.lamp = new ElectricLamp()

    }
    switchButton(){
        if(this.status==true){
            this.turnOff();
        }
        else{
            this.turnOn()
        }
        this.connectToLamp();
    }
    connectToLamp(){
        if(this.status==true){
            this.lamp.turnOn();
        }
        else{
            this.lamp.turnOFF();
        }

    }
    turnOn(){
        this.status = true;
    }
    turnOff(){
        this.status = false;
    }
}
let nut = new SwitchButton()