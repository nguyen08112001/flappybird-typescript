import { CONSTANT } from "../../utils/contants";
import SpriteImage from "../Image";
import ImageLoading from "../ImageLoading";
import game from "../gameControl/GameCore";
const cvs = document.getElementById('gamezone') as HTMLCanvasElement;
const ctx = cvs.getContext('2d') as CanvasRenderingContext2D; 

class GameStart extends SpriteImage{
    public draw() {
        if (game.scene.state.current === game.scene.state.init){
            ctx.drawImage(ImageLoading.getInstance().getByName(CONSTANT.GAMEREADY).image, cvs.width / 2 - 100,cvs.height/8+50,300,100)

            ctx.drawImage(ImageLoading.getInstance().getByName(CONSTANT.STARTBUTTON).image, cvs.width / 2 -150,cvs.height/2,250,150)
        }
    }
    constructor() {
        super(0,0,0,0)
    }
}

export default GameStart