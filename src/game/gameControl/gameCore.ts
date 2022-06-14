import Background from '../component/background'
import Bird from '../component/bird'
import Pipe from '../component/pipe'
import ForeGround from '../component/foreground'
import inputManager from '../InputHandler/InputManager'
import Score from '../Score/scoreManager'
import State from './stateManager'
const cvs = document.getElementById('gamezone') as HTMLCanvasElement;
const ctx = cvs.getContext('2d') as CanvasRenderingContext2D; 
import { GameOver, GameStart } from '../scene'
import Cloud from '../component/cloud'


class gameCore {

    public background: Background;
    public foreground: ForeGround;
    public state: State ;
    public frame: number;
    public gameOver:  GameOver ;
    public gameStart:  GameStart ;
    public bird: Bird;
    public pipe: Pipe;
    public score: Score;
    public cloud: Cloud;
    
   
    constructor(){

        this.background = new Background(0, 0, 275, 226, 0, cvs.height - 226, 700, 226);
        this.foreground= new ForeGround(276,0,224,112,0,cvs.height - 112,900,200,2),
        this.cloud= new Cloud(),
        this.state = new State();
        this.frame = 0;
        this.gameOver = new GameOver;
        this.gameStart = new GameStart;
        this.bird = new Bird(50, 150, 34, 26);
        this.pipe =  new Pipe(53, 400);
        this.score = new Score();
        
    }

    ///render()
    draw() {
        //clear canvas
        ctx.clearRect(0, 0, cvs.width, cvs.height);
         //blue skye
        ctx.fillStyle = '#70c5ce' //blue skye
        ctx.fillRect(0, 0, cvs.width, cvs.height)
        this.background.draw()
        this.cloud.draw()
        this.pipe.draw()
        this.foreground.draw()
        
        this.bird.draw()
        if (this.state.current === this.state.gameOver){
            GameOver.draw()
        }
        if (this.state.current === this.state.init) {
            GameStart.draw()
        }
        
        this.score.draw()
        
    }

    update(time: any, delta: any) {
        this.frame++
        this.foreground.update(time, delta)
        this.bird.update(time, delta)
        this.pipe.update(time, delta)
        this.cloud.update(time, delta)
    }

    processInput() {
        inputManager.start()
    }
}

let gamecore = new gameCore();
export default gamecore;
