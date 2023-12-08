import { canvas, ctx } from './canvas.js';
import Grid from './grid.js';
import Snake from './snake.js';
import Move from './move.js';
import Food from './food.js';
import Score from './score.js';

const grid = new Grid(canvas, ctx);
const move = new Move();
const snake = new Snake(ctx, grid, move);
const score = new Score(ctx);
const food = new Food(ctx, grid, snake, score);

const play = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    grid.draw();
    snake.draw();
    food.draw();
    score.draw();

    setTimeout(() => {
        requestAnimationFrame(play);
    }, 1000 / 10);
}

play();
