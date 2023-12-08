class Score {
    constructor(ctx) {
        this.ctx = ctx;
        this.score = 0;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = 'white';
        this.ctx.font = '3em Teko';
        this.ctx.lineWidth = 1;
        this.ctx.fillText(this.score, 400, 50);
        this.ctx.closePath();
    }
}

export default Score;