import SpriteImage from "../../game/Image";
import { ICoor, Vec2 } from "../../utils/vector";
export class Physic {
    public velocity: Vec2;
    public force: Vec2;
    public angle: number;
    public gameObject: SpriteImage;
    constructor(gameObject: SpriteImage) {
        this.gameObject = gameObject;
        this.velocity = new Vec2(0, 0);
        this.force = new Vec2(0, 0);
        this.angle = 0;
    }
    public setVelocity(x: number, y: number): void {
        this.velocity.x = x;
        this.velocity.y = y;
    }
    public setAngle(val: number): void {
        this.angle = val;
    }
    public getAngle(): number {
        return this.angle;
    }
    public setForce(x: number, y: number): void {
        this.force.x = x;
        this.force.y = y;
    }
    public getVelocity(): Vec2 {
        return this.velocity;
    }
    public update(time: number, delta: number): void {
        let position: ICoor = this.gameObject.getPosition();
        position.sX = position.sX + this.velocity.x * delta / 1000;
        position.sY = position.sY + this.velocity.y * delta / 1000;
        this.velocity.y = this.velocity.y + this.force.y * delta;
    }
}