import Background from '../component/background'
import Bird from '../component/bird'
import Pipe from '../component/pipe'
import ForeGround from '../component/foreground'
import inputManager from '../InputManager'
import score from '../scoreManager'
import state from '../stateManager'
const cvs = document.getElementById('gamezone') as HTMLCanvasElement;
const ctx = cvs.getContext('2d') as CanvasRenderingContext2D; 
import { GameOver, GameStart } from '../scene'


const gameCore = {

    state: new state(),
    frame: 0,
    background: new Background(0, 0, 275, 226, 0, cvs.height - 226, 700, 226),
    foreground: new ForeGround(276,0,224,112,0,cvs.height - 112,900,200,2),
    gameOver: new GameOver(),
    // bird: new Bird(500, 150, 100, 100),
    bird: new Bird(50, 150, 34, 26),
    pipe: new Pipe(53, 400),
    score: new score(),

    ///render()
    draw() {
        //clear canvas
        ctx.clearRect(0, 0, cvs.width, cvs.height);
    
        ctx.fillStyle = '#70c5ce' //blue skye
        ctx.fillRect(0, 0, cvs.width, cvs.height)
        this.background.draw()
        this.pipe.draw()
        this.foreground.draw()
        this.bird.draw()
        if (gameCore.state.current === gameCore.state.gameOver){
            GameOver.draw()
        }
        if (gameCore.state.current === gameCore.state.init) {
            GameStart.draw()
        }
        this.score.draw()
        
    },

    update(time: any, delta: any) {
        this.frame++
        this.foreground.update(time, delta)
        this.bird.update(time, delta)
        this.pipe.update(time, delta)
    },

    processInput() {
        inputManager.start()
    }
}

export default gameCore