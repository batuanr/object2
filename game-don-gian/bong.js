class Ball {
    constructor(game) {
        this.game = game;
        this.x = 500;
        this.y = 300;
        this.g = 5
        this.k=5
        this.img = null;
        this.loadImage()

    }
    loadImage(){
        this.img = new Image();
        this.img.src = 'pikachu.png';
    }
    update(){
        this.y+=this.g
        this.x+=this.k
        if(this.y + this.g > 600 || this.y + this.g  <10) {
            this.g = -this.g;
        }
        if(this.x + this.k > 900 || this.x + this.k  <10) {
            this.k = -this.k;
        }

    }
    draw(){
        this.game.context.drawImage(this.img,this.x,this.y,100,100)
    }
}