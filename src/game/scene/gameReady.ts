import { CONSTANT } from "../../utils/contants";
import ImageLoading from "../ImageLoading";

const cvs = document.getElementById('gamezone') as HTMLCanvasElement;
const ctx = cvs.getContext('2d') as CanvasRenderingContext2D; 

class GameStart{
    static draw() {
        ctx.drawImage(ImageLoading.getInstance().getByName(CONSTANT.GAMEREADY).image, cvs.width / 2 - 100,cvs.height/8+50,300,100)

        ctx.drawImage(ImageLoading.getInstance().getByName(CONSTANT.STARTBUTTON).image, cvs.width / 2 -150,cvs.height/2,250,150)
    }
    constructor() {

    }
}

export default GameStart