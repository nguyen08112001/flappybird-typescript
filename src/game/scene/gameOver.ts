import { CONSTANT } from '../../utils/contants';
import game from '../gameControl/GameCore'
import ImageLoading from '../ImageLoading';
const cvs = document.getElementById('gamezone') as HTMLCanvasElement;
const ctx = cvs.getContext('2d') as CanvasRenderingContext2D; 
class gameOver {
    constructor() {}
    static draw() {
        //gameOver
        ctx.drawImage(ImageLoading.getInstance().getByName(CONSTANT.GAMEOVER).image, cvs.width / 4-50,cvs.height/50-150,500,500)
        
        ctx.drawImage(ImageLoading.getInstance().getByName(CONSTANT.SCOREBOARD).image, cvs.width / 2 -150,cvs.height/2-110,250,150)

        ctx.drawImage(ImageLoading.getInstance().getByName(CONSTANT.STARTBUTTON).image, cvs.width / 2 -150,cvs.height/2,250,150)

        if (game.score.value <= 10) {
            ctx.drawImage(ImageLoading.getInstance().getByName(CONSTANT.SILVER).image, cvs.width / 2 -125,cvs.height/2-50,50,50)
        } else {
            ctx.drawImage(ImageLoading.getInstance().getByName(CONSTANT.GOLD).image, cvs.width / 2 -125,cvs.height/2-50,50,50)
        }
    }
    
}

export default gameOver