class Hero {
    constructor(image,top,left,size) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
    }
    getHeroElement(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }
    moveRight(){
        this.left+=20;
        this.top+=20
    }
    moveDown(){
        this.top -=20;
        this.left+=20;
    }

}
let hero = new Hero('ball.jpeg',30,30,100);
function run() {
    if(hero.left < window.innerWidth - hero.size&& hero.top < window.innerHeight - hero.size){
        return 1;
    }
    else{
        if (hero.left < window.innerWidth - hero.size&& hero.top - hero.size>=0){
            return  2;
        }
        else{

        }
    }
}
function start(){
    // if(hero.left < window.innerWidth - hero.size&& hero.top < window.innerHeight - hero.size){
    //     hero.moveRight();
    // }
    // else{
    //     if (hero.left < window.innerWidth - hero.size&& hero.top - hero.size>=0){
    //         hero.moveDown()
    //     }
    // }
    switch (run()) {
        case 1: hero.moveRight();
        break;
        case 2: hero.moveDown();
        break;
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();