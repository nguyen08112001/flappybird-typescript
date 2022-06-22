import { Physic } from "../../libs/Objects/Physic";
import gamecore from "../gameControl/GameCore";
import SpriteImage from "../Image";
import sprite from "../sprite";
const cvs = document.getElementById('gamezone') as HTMLCanvasElement;
const ctx = cvs.getContext('2d') as CanvasRenderingContext2D; 
export default class PipeDown extends SpriteImage {
    // physic: any;
    
    public constructor(randomheight: number) {
        super(502,0,53,400)
        // this.physic = new Physic(this)
        this.physic.setVelocity(200, 0)
        this.position.sX = cvs.width
        this.position.sY = randomheight + 500
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