// import InputManager from '../InputHandler/InputManager';
import inputManager from '../InputHandler/InputManager'
const cvs = document.getElementById('gamezone') as HTMLCanvasElement;
const ctx = cvs.getContext('2d') as CanvasRenderingContext2D; 
import { Scene } from '../scene/index'

class GameCore {

    public frame: number;
    public scene: Scene;
    public inputManager: any;
    constructor(){
        this.frame = 0;
        this.scene = new Scene();
        this.scene.startGame()
        this.inputManager = inputManager;
    }
    ///render()
    public draw() {
        this.resetCanvas();
        for (let object of this.scene.getObjects())
            object.gameObject.draw();
    }
    public resetCanvas(){
        ctx.clearRect(0, 0, cvs.width, cvs.height);
        ctx.fillStyle = '#70c5ce' //blue skye
        ctx.fillRect(0, 0, cvs.width, cvs.height)
    }

    public update(time: any, delta: any) {
        this.frame++
        for (let object of this.scene.getObjects())
            object.gameObject.update(time, delta);
        if (this.scene.state.isGaming()){
            this.scene.checkCollision()
        }
    }

    processInput() {
        this.inputManager.start()
    }
}

let gamecore = new GameCore();
export default gamecore;
