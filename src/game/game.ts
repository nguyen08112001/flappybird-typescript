import Background from './component/background'
// import { cvs, ctx } from '../main'
import Bird from './component/bird'
import GameStatus from './getStatus'
import Pipe from './component/pipe'
import ForeGround from './component/foreground'

const cvs = document.getElementById('gamezone') as HTMLCanvasElement;
const ctx = cvs.getContext('2d') as CanvasRenderingContext2D; 

const game = {
  state: {
    current: 0,
    getReady: 0,
    gaming: 1,
    gameOver: 2,
    
    isGameReady() {
      return this.current === this.getReady
    },
    isGaming() {
      return this.current === this.gaming
    },
    isGameOver() {
      return this.current === this.gameOver
    },
    setGameReady() {
      this.current = this.getReady
    },
    setGaming() {
    //   SWOOSHING.play()
      this.current = this.gaming
    },
    setGameOver() {
    //   DIE.play()
      this.current = this.gameOver
    }
  },
  frame: 0,
  score: {
    best: Number.parseInt(localStorage.getItem('best') as string, 10) || 0,
    value: 0,
    draw() {
      if (game.state.current === game.state.gaming) {
        ctx.lineWidth = 2
        ctx.font = '35px Teko'
        ctx.fillText(this.value + '', cvs.width / 2, 50)
        ctx.strokeText(this.value + '', cvs.width / 2, 50)
      } else if (game.state.current === game.state.gameOver) {
        ctx.font = '25px Teko'

        ctx.fillText(this.value + '', 225, 186)
        ctx.strokeText(this.value + '', 225, 186)

        ctx.fillText(this.best + '', 225, 228)
        ctx.strokeText(this.best + '', 225, 228)
      }
    },
    updateScore() {
    //   SCORE_S.play()
      this.value += 1
      this.best = Math.max(this.value, this.best)
      localStorage.setItem('best', this.best + '')
    },

    reset() {
      this.value = 0
    }
  },
  /** 游戏状态 */
  
  background: new Background(0, 0, 275, 226, 0, cvs.height - 226, 700, 226),
  foreground: new ForeGround(276,0,224,112,0,cvs.height - 112,900,112,2),
  gameReady: new GameStatus(0, 228, 173, 152, cvs.width / 2 - 173 / 2, 80),
  gameOver: new GameStatus(175, 228, 225, 202, cvs.width / 2 - 225 / 2, 90),
  startBtn: {
    x: 120,
    y: 263,
    width: 83,
    height: 29
  },
  /** 小鸟 */
  bird: new Bird(50, 150, 34, 26),
  /** 管道 */
  pipe: new Pipe(),
  /** 绘制画面 */
  draw() {
    ctx.fillStyle = '#70c5ce'
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
  loop() {
    game.draw()
    game.frame++
    game.update()

    requestAnimationFrame(game.loop)
  }
}

export default game