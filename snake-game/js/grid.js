class Grid{
    constructor(canvas, ctx){
        this.ctx = ctx;
        this.x = 40;
        this.y = 30;
        this.width = canvas.width / this.x;
        this.height = canvas.height / this.y;
    }

    draw(){
        for (let i = 0; i <= this.y; i++) {
            for (let j = 0; j <= this.x; j++) {
              // Menggambar garis vertikal
              this.ctx.beginPath();
              this.ctx.strokeStyle = '#09141d';
              this.ctx.moveTo(j * this.width, 0);
              this.ctx.lineTo(j * this.width, this.x * this.width);
              this.ctx.stroke();
      
              // Menggambar garis horizontal
              this.ctx.beginPath();
              this.ctx.moveTo(0, i * this.width);
              this.ctx.lineTo(this.x * this.width, i * this.width);
              this.ctx.stroke();
              this.ctx.closePath();
            }
        }
    }
}

export default Grid;