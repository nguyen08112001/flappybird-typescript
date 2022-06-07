import Background from './component/background'
// import { cvs, ctx } from '../main'
import Bird from './component/bird'
import GameStatus from './getStatus'
import Pipe from './component/pipe'
import ForeGround from './component/foreground'
import inputManager from './InputManager'
import score from './scoreManager'
import state from './stateManager'
const cvs = document.getElementById('gamezone') as HTMLCanvasElement;
const ctx = cvs.getContext('2d') as CanvasRenderingContext2D; 

const game = {
    lasttime: window.performance.now(),
    state: new state(),
    frame: 0,
    background: new Background(0, 0, 275, 226, 0, cvs.height - 226, 700, 226),
    foreground: new ForeGround(276,0,224,112,0,cvs.height - 112,900,200,2),
    gameReady: new GameStatus(0, 228, 173, 152, cvs.width / 2 - 173 / 2, 80),
    gameOver: new GameStatus(175, 228, 225, 202, cvs.width / 2 - 225 / 2, 90),
    bird: new Bird(50, 150, 34, 26),
    pipe: new Pipe(),
    score: new score(),
    ///render()
    draw() {
        ctx.fillStyle = '#70c5ce' //blue skye
        ctx.fillRect(0, 0, cvs.width, cvs.height)
        this.background.draw()
        this.bird.draw()
        this.pipe.draw()
        this.foreground.draw()
        this.gameReady.draw(game.state.current === game.state.getReady)
        this.gameOver.draw(game.state.current === game.state.gameOver)
        this.score.draw()
    },
    update() {
      this.foreground.update()
      this.bird.update()
      this.pipe.update()
    },
    processInput() {
        inputManager.start()
    },
    ///main loop
    loop() {
        game.frame++

        game.processInput()
        game.update()
        game.draw()

        requestAnimationFrame(game.loop)
    }
}

export default game