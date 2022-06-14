import BoxCollider from "../libs/Objects/BoxCollider"
// import GameObject from "../libs/GameObject"
class SpriteImage {
    public sX: number
    public sY: number
    public width: number
    public height: number
    public rotation: number = 0
    // public collider: any
    protected image: any = null;
    constructor(sX: number, sY: number, width: number, height: number) {
        this.sX = sX
        this.sY = sY
        this.width = width
        this.height = height
        // this.collider = new BoxCollider(this)
    }

    public setRotation(angle: number) {
        this.rotation = angle
    }
}
export default SpriteImage