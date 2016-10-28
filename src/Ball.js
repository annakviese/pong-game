export default class Ball {
    constructor(boardHeight, boardWidth, color, size){
        this.boardHeight = boardHeight;
        this.boardWidth = boardWidth;
        
        this.vy = Math.floor(Math.random() * 12 - 6); // y direction
        this.vx = (7 - Math.abs(this.vy)); // x direction
        this.size = size;
        this.speed = 5;
        this.reset()
    }
    reset() {
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;
    }

        draw (context) {
        context.fillStyle = 'white';
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        context.fill();
        context.closePath();
  }

    

paddleCollision(p1, p2){
        if (this.vx > 0) {
            const inRightEnd = this.x >= p2.x;
            if (inRightEnd) {
                if (this.y >= p2.y && this.y <= (this.y + p2.height)){
                    this.vx *= -1;
                }
            }
        } else {
            const inLeftEnd = this.x <= p1.x + p1.width
            
            if (inLeftEnd) {
                if (this.y >= p1.y && this.y <= (this.y + p1.height)) {
                    this.vx *= -1;
                }
            } 
        } 
   }

   render(context, p1, p2) {
        const hitLeft = this.x >= this.boardWidth;
        const hitRight = this.x + this.size <= 0;
        const hitTop = this.y + this.size <= 0;
        const hitBottom = this.y >= this.boardHeight;

        if (hitLeft || hitRight) {
            this.vx *= -1
        }
        if (hitTop || hitBottom){
            this.vy *= -1
        }

        this.x += this.vx;
        this.y += this.vy;

        this.paddleCollision(p1, p2)
        this.draw(context)
    }
}
