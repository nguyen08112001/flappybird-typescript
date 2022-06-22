import { Physic } from "../../libs/Objects/Physic";
import SpriteImage from "../Image";
import sprite from "../sprite";
const cvs = document.getElementById('gamezone') as HTMLCanvasElement;
const ctx = cvs.getContext('2d') as CanvasRenderingContext2D; 
export default class PipeUp extends SpriteImage {
    // physic: any;
    width: number = 53
    height: number = 400
    public constructor(randomheight: number) {
        super(553,0,50,400)
        // this.physic = new Physic(this)
        this.physic.setVelocity(200, 0)
        this.position.sX = cvs.width
        // this.position.sY = -110 * Math.min(Math.random() + 1, 1.5)-100
        this.position.sY = randomheight
    }
    
    public update(time: number, delta: number): void {
        this.physic?.update(time, -delta);
    }
    public draw() {
        ctx.drawImage(
            sprite,
            this.sX,
            this.sY,
            this.width,
            this.height,
            this.position.sX,
            this.position.sY,
            this.width,
            this.height
        )
    }

  }