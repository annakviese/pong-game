let paddleSound = new Audio ('sounds/pong-01.wav');
let goalSound = new Audio ('sounds/game-over01.wav');
let bounceSound = new Audio ('sounds/pong-02.wav');

export default class Ball {
    constructor(boardHeight, boardWidth, color, size){
        this.boardHeight = boardHeight;
        this.boardWidth = boardWidth;
        this.size = size;
        this.speed = 4;
        this.vy = 4; // y direction
        this.vx = 4; // x direction
        this.reset();
    }

    draw (context) {
        context.fillStyle = 'white';
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        context.fill();
        context.closePath();
    }
     
    reset() {
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;
        
        // this.vx *= -1;
        // console.log(this.vx);
    }

    bounce(){
        const hitLeft = this.x >= this.boardWidth;
        const hitRight = this.x - this.size <= 0;
        const hitTop = this.y - this.size <= 0;
        const hitBottom = this.y >= this.boardHeight;
        // if (hitLeft || hitRight) {
        //     this.vx *= -1
        // }
        if (hitTop || hitBottom){
            this.vy *= -1
            bounceSound.play();
        }
    }

    score(p1Score, p2Score){
        if (this.x <= 0 + this.size){
            this.reset();
            goalSound.play();
            p1Score.score++;
            this.vx = 4;
        }else if (this.x >= game.width){
            this.reset();
            goalSound.play();
            p2Score.score++;
            this.vx = -4;
        }
    }
    
    paddleCollision(p1, p2){
        if (this.vx > 0) {
            const inRightEnd = (this.x+this.size) >= p2.x;
            if (inRightEnd) {
                if (this.y >= p2.y && this.y <= (p2.y + p2.height)){
                    this.vx *= -1;
                    paddleSound.play();
                } 
            }
        } else {     
            const inLeftEnd = (this.x-this.size)  <= p1.x + p1.width 
            if (inLeftEnd) {
                if (this.y >= p1.y && this.y <= (p1.y + p1.height)) {
                    this.vx *= -1;
                    paddleSound.play();
                } 
            } 
        } 
}


   render(context, p1, p2, p1Score, p2Score) {
        
        this.bounce();
        this.x += this.vx;
        this.y += this.vy;
        this.score(p1Score, p2Score);
        this.paddleCollision(p1, p2)
        this.draw(context)
    }
}
