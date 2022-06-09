import SpriteImage from '../Image'
import sprite from '../sprite'
import game from '../gameControl/GameCore'

const cvs = document.getElementById('gamezone') as HTMLCanvasElement;
const ctx = cvs.getContext('2d') as CanvasRenderingContext2D; 

const DEGREE = Math.PI / 180;

import { ICoor } from '../../utils/vector';

class Bird extends SpriteImage {
    public width: number = 35;
    public height: number = 25;
    public sX: number = 276;
    public sY: number = 500;

    public animation: ICoor[]
    public radius: number
    public frame: number
    public gravity: number
    public jump: number
    public speed: number
    public rotation: number
    public period: number
    constructor(sX: number, sY: number, width: number, height: number) {
    
        super(sX, sY, width, height)
        this.animation = [
            { sX: 276, sY: 112 },
            { sX: 276, sY: 139 },
            { sX: 276, sY: 164 },
            { sX: 276, sY: 139 }
        ]

        this.radius = 10
        this.frame = 0
        this.gravity = 0.25
        this.jump = 4.6
        this.speed = 0
        this.rotation = 0
        this.period = 0
    }
    public draw() {
        const bird = this.animation[this.frame]
        ctx.save()
        ctx.translate(this.sX, this.sY)
        ctx.rotate(this.rotation)
        ctx.drawImage(sprite,bird.sX,bird.sY,this.width,this.height,-this.width / 2,
                        -this.height / 2,this.width,this.height)
        ctx.restore()
    }
    public update(time: any, delta: any) {
        /** bird's speed */
        this.period = 10

        /** skip frame*/
        this.frame += game.frame % this.period === 0 ? 1 : 0

        /** loop to frame 0 when overloaded */
        this.frame = this.frame % this.animation.length

        if (game.state.isInit()) {
            this.sY = 150
            this.rotation = 0 * DEGREE
        } else {
            this.speed += this.gravity 
            this.sY += this.speed

            if (this.sY + this.height / 2 >= cvs.height - game.foreground.height) {
                this.sY = cvs.height - game.foreground.height - this.height / 2
                if (game.state.isGaming()) {
                game.state.setGameOver()
                }
            }
            if (this.speed >= this.jump) {
                this.rotation = Math.min(90 * DEGREE, this.speed * DEGREE * 10)
                this.frame = 1
            }
            else {
                this.rotation = Math.max(-25 * DEGREE, this.speed * DEGREE * 10)
            }
        }
    }
    public flap() {
        // FLAP.play()
        this.speed = -this.jump
    }
    public reset(){
        this.speed = 0
        game.bird.sY = 150
    }
}

export default Bird