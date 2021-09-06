class Mouse {
    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.status = true;
    }
    sound(){
        return 'chit chit';
    }

}
let jerry = new Mouse('jerry',40,40);