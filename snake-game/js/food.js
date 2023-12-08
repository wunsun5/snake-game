class Food{
    constructor(ctx, grid, snake, score){
        this.ctx = ctx;
        this.grid = grid;
        this.snake = snake;
        this.score = score;
        this.food = this.random();
    }

    random(){
        let x = Math.floor(Math.random() * this.grid.x);
        let y = Math.floor(Math.random() * this.grid.y);
        return {x, y};
    }

    draw(){

        if(this.food.x === this.snake.x && this.food.y === this.snake.y){
            this.snake.length++;
            this.score.score += 1;
            this.food = this.random();
        }

        this.ctx.beginPath();
        this.ctx.fillStyle = 'green';
        this.ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
        this.ctx.shadowBlur = 20;
        this.ctx.fillRect(this.food.x * this.grid.width + 1, this.food.y * this.grid.height + 1, this.grid.width - 2, this.grid.height - 2);
        this.ctx.closePath();
        this.ctx.shadowBlur = 0;
    }
}

export default Food;