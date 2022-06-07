import game from './game'
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
            // ctx.fillText('GAME SCORE: ' + this.value + '', cvs.width / 3, 50)
            ctx.strokeText('SCORE: ' + this.value + '', cvs.width / 2.5 , 50)
        } else if (game.state.current === game.state.gameOver) {
        //   var img = new Image();
        //   img.src = '../src/game/assets/images/gameOver.png';
        //   ctx.drawImage(img, 0, 0,0,0,0,0,0,0)

            ctx.font = '25px Teko'

            ctx.fillText(this.value + '', 225, 186)
            ctx.strokeText(this.value + '', 225, 186)

            ctx.fillText(this.best + '', 225, 228)
            ctx.strokeText(this.best + '', 225, 228)
        }
    }
    public updateScore() {
    //   SCORE_S.play()
        this.value += 1
        this.best = Math.max(this.value, this.best)
        localStorage.setItem('best', this.best + '')
    }

    public reset() {
        this.value = 0
    }
}

export default score;

