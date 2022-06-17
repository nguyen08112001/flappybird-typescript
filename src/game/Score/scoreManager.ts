import game from '../gameControl/GameCore'
import SpriteImage from '../Image';
const cvs = document.getElementById('gamezone') as HTMLCanvasElement;
const ctx = cvs.getContext('2d') as CanvasRenderingContext2D; 


class score extends SpriteImage {
    public best: number = Number.parseInt(localStorage.getItem('best') as string, 10) || 0;
    public value: number;
    constructor() {
        super(0,0,0,0)
        this.value = 0;
    }
    public draw() {
        if (game.scene.state.current === game.scene.state.gaming) {
            ctx.lineWidth = 2
            ctx.font = '35px Teko'
            ctx.strokeText('SCORE: ' + this.value + '', cvs.width / 2.5 , 50)
        } else if (game.scene.state.current === game.scene.state.gameOver) {

            ctx.font = '25px Teko'

            ctx.fillText(this.value + '', 500 -10, 205)
            ctx.strokeText(this.value + '', 500 -10, 205)

            ctx.fillText('' +this.best , 500-10, 260)
            ctx.strokeText(''+ this.best , 500-10, 260)
        }
    }
    public updateScore() {
        this.value += 1
        this.best = Math.max(this.value, this.best)
        localStorage.setItem('best', this.best + '')
    }
    
    public reset() {
        this.value = 0
    }
}

export default score;

