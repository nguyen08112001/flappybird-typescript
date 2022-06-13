import sprite from '../sprite'
import game from '../gameControl/GameCore'
import SpriteImage from '../Image'
const cvs = document.getElementById('gamezone') as HTMLCanvasElement;
const ctx = cvs.getContext('2d') as CanvasRenderingContext2D; 
const DEGREE = Math.PI / 180;
interface ICoor {
    sX: number
    sY: number
}

class Pipe extends SpriteImage {
    public top: ICoor
    public bottom: ICoor
    public position: ICoor[]
    public width: number
    public height: number
    public gap: number
    public maxYposition: -150
    public dX: number
    constructor(width:number, height: number) {
        super(0, 0, width, height)
        this.top = {
            sX: 553,
            sY: 0
        }
        this.bottom = {
            sX: 502,
            sY: 0
        }

        this.position = []
        this.rotation = 10
        this.width = 53
        this.height = 400
        this.gap = 100
        this.maxYposition = -150
        this.dX = 2
    }

    public draw() {
        this.position.forEach(p => {
            const topYPosition = p.sY
            const bottomYPosition = p.sY + this.height + this.gap        
            ctx.drawImage(
                sprite,
                this.top.sX,
                this.top.sY,
                this.width,
                this.height,
                p.sX,
                topYPosition,
                this.width,
                this.height
            )

            ctx.drawImage(
                sprite,
                this.bottom.sX,
                this.bottom.sY,
                this.width,
                this.height,
                p.sX,
                bottomYPosition,
                this.width,
                this.height
            )
        })
    }

    public update(time: any, delta: any) {
        if (!game.state.isGaming()) {
            return
        }
        if (game.frame % 100 === 0) {
        this.position.push({
            sX: cvs.width,
            sY: this.maxYposition * (Math.random() + 1)
        })
        }

        this.position.forEach(p => {
        const bottomPipeYPosition = p.sY + this.height + this.gap
        if (
            game.bird.sX + game.bird.radius > p.sX &&
            game.bird.sX - game.bird.radius < p.sX + this.width &&
            game.bird.sY + game.bird.radius > p.sY &&
            game.bird.sY - game.bird.radius < p.sY + this.height
        ) {
            game.state.setGameOver()
        }
        if (
            game.bird.sX + game.bird.radius > p.sX &&
            game.bird.sX - game.bird.radius < p.sX + this.width &&
            game.bird.sY + game.bird.radius > bottomPipeYPosition &&
            game.bird.sY - game.bird.radius < bottomPipeYPosition + this.height
        ) {
            game.state.setGameOver()
        }

        if (p.sX <= game.bird.sX && game.bird.sX <= p.sX + this.dX) {
            game.score.updateScore()
        }

        //pipe runs
        this.dX = this.dX + 0.005
        p.sX -= this.dX

        //delete pipe when it ends
        if (p.sX + this.width <= 0) {
            this.position.shift()
        }
        })
    }

    public reset() {
        this.position = []
        this.dX = 2
    }
}

export default Pipe