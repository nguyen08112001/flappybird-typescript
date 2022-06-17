import sprite from '../sprite'
import game from '../gameControl/GameCore'
import SpriteImage from '../Image'
import { Physic } from '../../libs/Objects/Physic';
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
    public positionArray: ICoor[]
    public width: number
    public height: number
    public gap: number
    public maxYposition: -150
    public dX: number
    physic: Physic;
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

        this.positionArray = []
        this.rotation = 10
        this.width = 53
        this.height = 400
        this.gap = 100
        this.maxYposition = -150
        this.dX = 2
        this.physic = new Physic(this);
        this.physic.setVelocity(Math.round(cvs.width * 0.2), 0);
    }

    public draw() {
        this.positionArray.forEach(p => {
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
        if (!game.scene.state.isGaming()) {
            return
        }
        if (game.frame % 100 === 0) {
            this.positionArray.push({
                sX: cvs.width,
                sY: this.maxYposition * (Math.random() + 1)
            })
        }

        this.positionArray.forEach(p => {
            const bottomPipeYPosition = p.sY + this.height + this.gap
            if (
                game.scene.bird.position.sX + game.scene.bird.radius > p.sX &&
                game.scene.bird.position.sX - game.scene.bird.radius < p.sX + this.width &&
                game.scene.bird.position.sY + game.scene.bird.radius > p.sY &&
                game.scene.bird.position.sY - game.scene.bird.radius < p.sY + this.height
            ) {
                game.scene.bird.die()
            }
            if (
                game.scene.bird.position.sX + game.scene.bird.radius > p.sX &&
                game.scene.bird.position.sX - game.scene.bird.radius < p.sX + this.width &&
                game.scene.bird.position.sY + game.scene.bird.radius > bottomPipeYPosition &&
                game.scene.bird.position.sY - game.scene.bird.radius < bottomPipeYPosition + this.height
            ) {
                game.scene.bird.die()
            }

            if (p.sX === game.scene.bird.position.sX ) {
            // if (p.sX <= game.scene.bird.position.sX && game.scene.bird.position.sX <= p.sX + this.dX) {
                game.scene.score.updateScore()
                // this.position.push({
                //     sX: cvs.width+this.dX*30,
                //     sY: this.maxYposition * (Math.random() + 1)
                // })
            }

            //pipe runs
            p.sX -= this.dX
            this.physic.update(time, -delta);

            //delete pipe when it ends
            if (p.sX + this.width <= 0) {
                this.positionArray.shift()
            }
        })
    }

    public reset() {
        this.positionArray = []
        this.dX = 2
    }
}

export default Pipe