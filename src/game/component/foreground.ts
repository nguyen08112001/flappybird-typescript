import Background from './background'
import game from '../gameControl/GameCore'

class ForeGround extends Background {
    public moveX: number
    constructor(
        sX: number,
        sY: number,
        width: number,
        height: number,
        dX: number,
        dY: number,
        dWidth: number,
        dHeigh: number,
        moveX: number
    ) {
        super(sX, sY, width, height, dX, dY, dWidth, dHeigh)
        this.moveX = moveX
    }
    public update(time: any, delta: any) {
        if (game.state.current === game.state.gaming) {
            this.dX = (this.dX - this.moveX) % (this.width / 2)
        }
    }
}

export default ForeGround