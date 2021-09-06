class Game {
    constructor() {
        this.canvas = null;
        this.context = null;
        this.init();
        this.loop();
    }
    init(){
        this.canvas = document.getElementById("game");
        this.context = this.canvas.getContext("2d");
        this.ball = new Ball(this)

    }
    update(){
        this.ball.update()
    }
    draw(){
        this.context.clearRect(0,0,1000,700)
        this.ball.draw();
    }
    loop(){
        this.update();
        this.draw()
        setTimeout(()=>
            this.loop(), 10)
    }
}
let g = new Game()