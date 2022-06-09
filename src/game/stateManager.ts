import game from './gameControl/GameCore'
const cvs = document.getElementById('gamezone') as HTMLCanvasElement;
const ctx = cvs.getContext('2d') as CanvasRenderingContext2D; 

class state {
    public  current: number = 0
    public  init: number = 0
    public  getReady: number = 1
    public  gaming:number = 2
    public  gameOver: number = 3
    constructor(){
    }
    isInit() {
        return this.current === this.init
    }
    isGameReady() {
        return this.current === this.getReady
    }
    isGaming() {
        return this.current === this.gaming
    }
    isGameOver() {
        return this.current === this.gameOver
    }
    setInit() {
        this.current = this.init
    }
    setGameReady() {
        this.current = this.getReady
    }
    setGaming() {
        this.current = this.gaming
    }
    setGameOver() {
        this.current = this.gameOver
    }
  }

  export default state