import './game.css';
import Game from './Game';
import Paddle from './Paddle';


var game = new Game();
const fps = 30;

// self invoking function
(function gameLoop() {
    game.render();
    setTimeout(gameLoop, fps);
}());