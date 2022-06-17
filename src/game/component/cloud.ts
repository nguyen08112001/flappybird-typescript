import { ICoor } from './../../utils/vector';
import Background from './background'
import game from '../gameControl/GameCore'
import { CONSTANT } from '../../utils/contants';
import ImageLoading from '../ImageLoading';
import SpriteImage from '../Image';
import state from '../gameControl/stateManager';
const cvs = document.getElementById('gamezone') as HTMLCanvasElement;
const ctx = cvs.getContext('2d') as CanvasRenderingContext2D; 

class Cloud extends SpriteImage {
    public width: number = 200;//35
    public height: number = 150;//25
    public sX: number = 276;
    public sY: number = 500;
    public moveX: number

    public position: ICoor[]
    constructor() {
        super(276,500,200,150)
        this.moveX = 2

        this.sX=  0
        this.sY= Math.floor(Math.random() * 150)
        this.position = []
    }
    public update(time: any, delta: any) {

        this.position.forEach(p => {
            if (game.scene.state.current === game.scene.state.gaming) {
                p.sX -= this.moveX
            }
            if (p.sX + this.width <= 0) {
                this.position.shift()
            }
        })


        
        if (Math.random() < 0.05 && game.scene.state.current === state.getInstance().gaming) {
            this.position.push({
                sX: cvs.width,
                sY: 150 * (Math.random() + 1)
            })
        }
    }
    public draw() {
        this.position.forEach(p => {
            ctx.drawImage(ImageLoading.getInstance().getByName(CONSTANT.CLOUD).image,p.sX,p.sY,150,100)
        })
        
    }
}

export default Cloud