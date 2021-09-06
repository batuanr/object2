class Cat {
    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
    }
    sound(){
        return 'meo meo';
    }
    catch(Mouse){
        if(this.speed> Mouse.speed){
            alert('mèo '+this.name+' đã bắt được chuột '+Mouse.name);
        }
    }
    eat(Mouse){
        alert('Mèo '+this.name+' đã ăn chuột '+Mouse.name);
        Mouse.status = false;
        this.weight+=Mouse.weight;
    }
}
let meo =new Cat('tom', 50, 60)