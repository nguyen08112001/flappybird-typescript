import { CONSTANT } from '../../utils/contants';
import game from '../gameControl/GameCore'
import SpriteImage from '../Image';
import ImageLoading from '../ImageLoading';
const cvs = document.getElementById('gamezone') as HTMLCanvasElement;
const ctx = cvs.getContext('2d') as CanvasRenderingContext2D; 
class gameOver extends SpriteImage{
    constructor() {
        super(0,0,0,0)
    }
    public draw() {
        //gameOver
        if (game.scene.state.current === game.scene.state.gameOver){
            ctx.drawImage(ImageLoading.getInstance().getByName(CONSTANT.GAMEOVER).image, cvs.width / 4-50,cvs.height/50-150,500,500)
            
            ctx.drawImage(ImageLoading.getInstance().getByName(CONSTANT.SCOREBOARD).image, cvs.width / 2 -150,cvs.height/2-110,250,150)

            ctx.drawImage(ImageLoading.getInstance().getByName(CONSTANT.RESTARTBUTTON).image, cvs.width / 2 -130,cvs.height/2+50,200,70)

            if (game.scene.score.value <= 10) {
                ctx.drawImage(ImageLoading.getInstance().getByName(CONSTANT.SILVER).image, cvs.width / 2 -125,cvs.height/2-50,50,50)
            } else {
                ctx.drawImage(ImageLoading.getInstance().getByName(CONSTANT.GOLD).image, cvs.width / 2 -125,cvs.height/2-50,50,50)
            }
        }
    }
    public update(){}
    
}

export default gameOver