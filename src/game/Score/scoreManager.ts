import game from '../gameControl/GameCore'
const cvs = document.getElementById('gamezone') as HTMLCanvasElement;
const ctx = cvs.getContext('2d') as CanvasRenderingContext2D; 


class score {
    public best: number = Number.parseInt(localStorage.getItem('best') as string, 10) || 0;
    public value: number;
    constructor() {
        this.value = 0;
    }
    public draw() {
        if (game.state.current === game.state.gaming) {
            ctx.lineWidth = 2
            ctx.font = '35px Teko'
            ctx.strokeText('SCORE: ' + this.value + '', cvs.width / 2.5 , 50)
        } else if (game.state.current === game.state.gameOver) {

            ctx.font = '25px Teko'

            ctx.fillText(this.value + '', 500 -10, 205)
            ctx.strokeText(this.value + '', 500 -10, 205)

            ctx.fillText('' +this.best , 500-10, 260)
            ctx.strokeText(''+ this.best , 500-10, 260)
        }
    }
    public updateScore() {
    //   SCORE_S.play()
        this.value += 1
        this.best = Math.max(this.value, this.best)
        localStorage.setItem('best', this.best + '')
        // localStorage.clear();
        // sessionStorage.clear()
    }

    public reset() {
        this.value = 0
    }
}

export default score;

