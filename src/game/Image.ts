import { Physic } from "../libs/Objects/Physic"
import { Vec2, ICoor } from "../utils/vector"
import gamecore from "./gameControl/GameCore"
// import GameObject from "../libs/GameObject"
class SpriteImage {
    public sX: number
    public sY: number
    public width: number
    public height: number
    public rotation: number = 0
    public position:  ICoor = {sX: 0, sY:  0 } ;
    physic: any
    constructor(sX: number, sY: number, width: number, height: number) {
        this.sX = sX
        this.sY = sY
        this.width = width
        this.height = height
        // this.collider = new BoxCollider(this)
        this.physic = new Physic(this)
    }

    public setRotation(angle: number) {
        this.rotation = angle
    }
    public update(time: number, delta: number): void {
        
    }
    public draw(): void {

    }
    public pause(): void {
        this.physic.setVelocity(0, 0);
    }
    public getPosition(): ICoor {
        return this.position
    }
}
export default SpriteImage