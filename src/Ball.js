export default class Ball {
    constructor(boardHeight, boardWidth, color, size){
        this.boardHeight = boardHeight;
        this.boardWidth = boardWidth;
        this.x = this.boardHeight / 2;
        this.y = this.boardWidth / 2;
        this.vy = Math.floor(Math.random() * 12 - 6); // y direction
        this.vx = (7 - Math.abs(this.vy)); // x direction
        this.size = size;
        this.speed = 5;
    }

    draw (context) {
    context.fillStyle = 'white';
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
  }

    render(context) {
        this.x += this.vx;
        this.y += this.vy;
        this.draw(context)

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
      //...
    }
    }
