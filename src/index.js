import './game.css';

class Game {
	constructor() {
		const canvas = document.getElementById('game');
		this.width = canvas.width;
      this.height = canvas.height;
      this.context = canvas.getContext('2d');
      this.context.fillStyle = 'white';
	}
}

// game instance
var game = new Game();
const ms = 30;
// self invoking function
(function gameLoop() {
	console.log('hi!')
   setTimeout(gameLoop, ms);
}());