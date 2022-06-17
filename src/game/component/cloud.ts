import { ICoor } from './../../utils/vector';
import game from '../gameControl/GameCore'
import { CONSTANT } from '../../utils/contants';
import ImageLoading from '../ImageLoading';
import SpriteImage from '../Image';
import state from '../gameControl/stateManager';
import { Physic } from '../../libs/Objects/Physic';
const cvs = document.getElementById('gamezone') as HTMLCanvasElement;
const ctx = cvs.getContext('2d') as CanvasRenderingContext2D; 

class Cloud extends SpriteImage {
    public width: number = 200;//35
    public height: number = 150;//25
    public sX: number = 276;
    public sY: number = 500;
    public moveX: number

    public positionArray: ICoor[]
    physic: Physic;
    constructor() {
        super(276,500,200,150)
        this.moveX = 1

        this.sX=  0
        this.sY= Math.floor(Math.random() * 150)
        this.positionArray = []
        this.physic = new Physic(this);
    }
    public update(time: any, delta: any) {

        this.positionArray.forEach(p => {
            if (game.scene.state.current === game.scene.state.gaming) {
                p.sX -= this.moveX
            }
            if (p.sX + this.width <= 0) {
                this.positionArray.shift()
            }
        })

        this.generate()
    }
    public draw() {
        this.positionArray.forEach(p => {
            ctx.drawImage(ImageLoading.getInstance().getByName(CONSTANT.CLOUD).image,p.sX,p.sY,150,100)
        })
        
    }
    public generate(){
        if (Math.random() < 0.025 && game.scene.state.current === state.getInstance().gaming) {
            this.positionArray.push({
                sX: cvs.width,
                sY: 150 * (Math.random() + 1)-150
            })
        }
    }
}

export default Cloud