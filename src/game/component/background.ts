import { CONSTANT } from '../../utils/contants';
import SpriteImage from '../Image'
import ImageLoading from '../ImageLoading';

const cvs = document.getElementById('gamezone') as HTMLCanvasElement;
const ctx = cvs.getContext('2d') as CanvasRenderingContext2D; 

import sprite from '../sprite'
export default class Background extends SpriteImage {
    public dX: number
    public dY: number
    public dWidth: number
    public dHeight: number
    constructor(
        sX: number,
        sY: number,
        width: number,
        height: number,
        dX: number,
        dY: number,
        dWidth: number,
        dHeight: number
    ) {
        super(sX, sY, width, height)
        this.dX = dX
        this.dY = dY
        this.dWidth = dWidth
        this.dHeight = dHeight
    }
    public draw() {
        ctx.drawImage(
            sprite,
            this.sX,
            this.sY,
            this.width,
            this.height,
            this.dX,
            this.dY,
            this.dWidth,
            this.dHeight
        )
        ctx.drawImage(
            sprite,
            this.sX,
            this.sY,
            this.width,
            this.height,
            this.dX + this.width,
            this.dY,
            this.dWidth,
            this.dHeight
        )

        // ctx.drawImage(ImageLoading.getInstance().getByName(CONSTANT.CLOUD).image,0,0)    
        // ctx.drawImage(ImageLoading.getInstance().getByName(CONSTANT.CLOUD).image,this.height/2,this.width/2,this.width/5,this.height/5)
    }
}