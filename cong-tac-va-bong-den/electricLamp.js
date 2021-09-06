class ElectricLamp {
    constructor() {
        this.status = false;
    }
    electricLamp(){
        if(this.status==true){
            console.log('shining');
        }
        else{
            console.log('dark')
        }
    }
    turnOn(){
        this.status = true;
    }
    turnOFF(){
        this.status = false;
    }
}
