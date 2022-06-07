import SpriteImage from '../Image'
import sprite from '../sprite'

const cvs = document.getElementById('gamezone') as HTMLCanvasElement;
const ctx = cvs.getContext('2d') as CanvasRenderingContext2D; 

import game from '../game'
const DEGREE = Math.PI / 180;

interface ICoor {
  sX: number
  sY: number
}

class Bird extends SpriteImage {
    public width: number = 35;
    public height: number = 25;
    public sX: number = 276;
    public sY: number = 150;
    public birdimg = new Image();

    public animation: ICoor[]
    public radius: number
    public frame: number
    public gravity: number
    public jump: number
    public speed: number
    public rotation: number
    public period: number
    constructor(sX: number, sY: number, width: number, height: number) {
    
    super(sX, sY, width, height)
    this.animation = [
      { sX: 276, sY: 112 },
      { sX: 276, sY: 139 },
      { sX: 276, sY: 164 },
      { sX: 276, sY: 139 }
    ]
    
    this.birdimg.src = '../src/game/assets/images/bird.png';
    this.radius = 10
    this.frame = 0
    this.gravity = 0.25
    this.jump = 4.6
    this.speed = 0
    this.rotation = 0
    this.period = 0
  }
  public draw() {
    const bird = this.animation[this.frame]
    ctx.save()
    ctx.translate(this.sX, this.sY)
    ctx.rotate(this.rotation)
    ctx.drawImage(
      sprite,
      bird.sX,
      bird.sY,
      this.width,
      this.height,
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    )
    // ctx.drawImage(this.birdimg, 0, 0)
    ctx.restore()
  }
  public update() {
    /** bird's speed */
    this.period = game.state.isGameReady() ? 10 : 5
    /** skip frame*/
    this.frame += game.frame % this.period === 0 ? 1 : 0
    /** loop to frame 0 when overloaded */
    this.frame = this.frame % this.animation.length

    if (game.state.isGameReady()) {
      this.sY = 150
      this.rotation = 0 * DEGREE
    } else {
      this.speed += this.gravity
      this.sY += this.speed

      if (this.sY + this.height / 2 >= cvs.height - game.foreground.height) {
        this.sY = cvs.height - game.foreground.height - this.height / 2
        if (game.state.isGaming()) {
          game.state.setGameOver()
        }
      }
      console.log(this.speed)
      if (this.speed >= this.jump) {
        this.rotation = Math.min(90 * DEGREE, this.speed * DEGREE * 10)
        this.frame = 1
      }
      else {
        // this.rotation = -25 * DEGREE
        this.rotation = Math.max(-25 * DEGREE, this.speed * DEGREE * 10)
      }
    }
  }
  public flap() {
    // FLAP.play()
    this.speed = -this.jump
  }
  public speedReset() {
    this.speed = 0
  }
}

export default Bird