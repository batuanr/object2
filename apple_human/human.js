class Human {
    constructor(name, weight, gender) {
        this.name = name;
        this.weight = weight;
        this.gender = gender;
    }
    getInfor(){
        return 'tên: '+ this.name +' cân nặng: '+this.weight+ ' giới tính: '+ this.gender;
    }
    checkInformation(human){
       return human.getInfor()
    }
    say(text){

    }
    checkApple(apple){
        return apple.getWeight()>0;
    }
    est(apple){
        if(this.checkApple(apple))
        apple.decrease();
        this.weight++;
    }
}
let n1 = new Human('tom',50,'Male')