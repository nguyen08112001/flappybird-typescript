import SpriteImage from '../Image'
import sprite from '../sprite'
import game from '../gameControl/GameCore'

const cvs = document.getElementById('gamezone') as HTMLCanvasElement;
const ctx = cvs.getContext('2d') as CanvasRenderingContext2D; 

const DEGREE = Math.PI / 180;

import { ICoor } from '../../utils/vector';
import ImageLoading from '../ImageLoading';
import { CONSTANT } from '../../utils/contants';
import { Physic } from '../../libs/Objects/Physic';

class Bird extends SpriteImage {
    public width: number = 35;//35
    public height: number = 25;//25
    // public sX: number = 276;
    // public sY: number = 500;

    public animation: ICoor[]
    public radius: number
    public frame: number
    public gravity: number
    public jump: number
    public speed: number
    public rotation: number
    public period: number
    // physic: Physic;
    constructor(sX: number, sY: number, width: number, height: number) {
        
        super(sX, sY, width, height)
        this.animation = [
            { sX: 276, sY: 112 },
            { sX: 276, sY: 139 },
            { sX: 276, sY: 164 },
            { sX: 276, sY: 139 }
        ]

        this.radius = this.width/3
        this.frame = 0
        this.gravity = 0.25
        this.jump = 4.6
        this.speed = 0
        this.rotation = 0
        this.period = 0
        // this.physic = new Physic(this);
        this.position.sX = 300
        this.position.sY = 150
    }
    public draw() {
        // const bird = this.animation[this.frame]
        // ctx.save()
        // ctx.translate(this.sX, this.sY)
        // ctx.rotate(this.rotation)
        // ctx.drawImage(sprite,bird.sX,bird.sY,this.width,this.height,-this.width / 2,
        //                 -this.height / 2,this.width,this.height)      
        // ctx.restore()

        const bird = this.animation[this.frame]
        ctx.save()
        ctx.translate(this.position.sX, this.position.sY)
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
        // this.frame = this.frame % 7

        if (game.scene.state.isInit()) {
            this.sY = 150
            this.rotation = 0 * DEGREE
        } else {
            // this.speed += this.gravity 
            // this.sY += this.speed

            if (this.position.sY + this.height / 2 >= cvs.height - game.scene.foreground.height) {
                this.position.sY = cvs.height - game.scene.foreground.height - this.height / 2
                this.physic.setForce(0, 0);
                this.die()
            }
            if (this.physic.velocity.y >= this.jump) {
                this.rotation = Math.min(90 * DEGREE, this.physic.velocity.y * DEGREE * 0.1)
                this.frame = 1
            }
            else {
                this.rotation = Math.max(-25 * DEGREE, this.physic.velocity.y * DEGREE * 0.1)
            }

            this.physic.update(time, delta);
        }
    }
    public flap() {
        this.physic.setVelocity(0, -400);
        this.physic.setForce(0, 1.5);
        this.physic.setAngle(-25);
        // this.speed = -this.jump
    }
    public die() {
        // this.physic.setForce(0, 0);
        // this.position.sY = cvs.height - game.scene.foreground.height
        game.scene.state.setGameOver()
    }
    public reset() {
        this.physic.setVelocity(0, 0);
        this.physic.setForce(0, 0);
        game.scene.bird.position.sY = 150
    }
    public test() {
        console.log("birdtest")
    }
}

export default Bird