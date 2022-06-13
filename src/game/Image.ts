class SpriteImage {
    public sX: number
    public sY: number
    public width: number
    public height: number
    public rotation: number = 0
    protected image: any = null;
    constructor(sX: number, sY: number, width: number, height: number) {
        this.sX = sX
        this.sY = sY
        this.width = width
        this.height = height
    }

    public setRotation(angle: number) {
        this.rotation = angle
    }
}
export default SpriteImage