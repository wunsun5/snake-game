class Move{
    constructor(){
        this.up = false;
        this.left = false;
        this.right = false;
        this.down = false;

        this.DIRECTION_RIGHT = 1;
        this.DIRECTION_LEFT = 2;
        this.DIRECTION_UP = 3;
        this.DIRECTION_DOWN = 4;
        
        document.querySelectorAll('.button span').
        forEach(button => {
            button.addEventListener('click', e => this.effect(e));
        })
        
        window.addEventListener('keydown', e => this.effect(e));
    }

    effect(e){
        if(e.key === 'w' || e.key === 'ArrowUp' || e.srcElement.innerText === 'UP'){
            this.up = true;
            this.right = false;
            this.left = false;
            this.down = false;
        }else if(e.key === 's' || e.key === 'ArrowDown' || e.srcElement.innerText == 'DOWN'){
            this.up = false;
            this.right = false;
            this.left = false;
            this.down = true;
        }else if(e.key === 'a' || e.key === 'ArrowLeft' || e.srcElement.innerText == 'LEFT'){
            this.up = false;
            this.right = false;
            this.left = true;
            this.down = false;
        }else if(e.key === 'd' || e.key === 'ArrowRight' || e.srcElement.innerText == 'RIGHT'){
            this.up = false;
            this.right = true;
            this.left = false;
            this.down = false;
        }
    }
}

export default Move;