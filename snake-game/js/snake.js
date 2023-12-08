class Snake {
    constructor(ctx, grid, move) {
        this.ctx = ctx;
        this.grid = grid;
        this.move = move;

        // Snake default position
        this.x = this.grid.x / 2;
        this.y = this.grid.y / 2;

        // Snake default direction
        this.dx = 1;
        this.dy = 0;
        this.direction = this.move.DIRECTION_LEFT;

        // Snake default length
        this.length = 5;
        this.body = [
            [this.x, this.y],
            [this.x - 1, this.y],
            [this.x - 2, this.y],
            [this.x - 3, this.y],
            [this.x - 4, this.y],
        ];
        this.shadow = [];
    }

    draw() {

        this.x += this.dx;
        this.y += this.dy;


        if (this.x >= this.grid.x) {
            this.x = 0;
        } else if (this.y >= this.grid.y) {
            this.y = 0;
        } else if (this.x < 0) {
            this.x = this.grid.x - 1;
        } else if (this.y < 0) {
            this.y = this.grid.y - 1;
        }

        if (this.move.up && this.direction !== this.move.DIRECTION_DOWN) {
            this.dx = 0;
            this.dy = -1;
            this.direction = this.move.DIRECTION_UP;
        } else if (this.move.down && this.direction !== this.move.DIRECTION_UP) {
            this.dx = 0;
            this.dy = 1;
            this.direction = this.move.DIRECTION_DOWN;
        } else if (this.move.left && this.direction !== this.move.DIRECTION_LEFT) {
            this.dx = -1;
            this.dy = 0;
            this.direction = this.move.DIRECTION_RIGHT;
        } else if (this.move.right && this.direction !== this.move.DIRECTION_RIGHT) {
            this.dx = 1;
            this.dy = 0;
            this.direction = this.move.DIRECTION_LEFT;
        }

        this.body.forEach(([x, y]) => {
            if (this.x === x && this.y === y) {
                location.reload();
            }
        })

        this.body.unshift([this.x, this.y]);
        this.shadow.unshift([this.x, this.y]);

        if (this.body.length > this.length) {
            this.body.pop();
        }

        if (this.shadow.length > (this.length + 10)) {
            this.shadow.pop();
        }

        this.shadow.forEach(([x, y], index) => {
            if (index > this.length - 1) {
                const opacity = 1 - ((index - this.length - 1) * 0.1);
                this.ctx.beginPath();
                this.ctx.fillStyle = `rgba(0, 0, 0, ${opacity < 0.2 ? 0.2 : opacity})`;
                this.ctx.fillRect(x * this.grid.width, y * this.grid.height, this.grid.width, this.grid.height);
                this.ctx.closePath();
            }
        })

        this.body.forEach(([x, y], index) => {
            const opacity = 1 - (index * 0.05);
            this.ctx.beginPath();
            this.ctx.strokeStyle = '#0c1c29';
            this.ctx.shadowColor = `rgba(169, 169, 169, 0.5)`;
            this.ctx.shadowBlur = 10;
            this.ctx.fillStyle = `rgba(255, 255, 255, ${opacity < 0.7 ? 0.7 : opacity})`;
            this.ctx.strokeRect(x * this.grid.width, y * this.grid.height, this.grid.width, this.grid.height);
            this.ctx.fillRect(x * this.grid.height, y * this.grid.height, this.grid.width, this.grid.height);
            this.ctx.closePath();
        })

    }
}

export default Snake;