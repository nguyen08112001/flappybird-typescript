import game from './game'
const cvs = document.getElementById('gamezone') as HTMLCanvasElement;
const ctx = cvs.getContext('2d') as CanvasRenderingContext2D; 

class state {
    public  current: number = 0
    public  getReady: number = 0
    public  gaming:number = 1
    public  gameOver: number = 2
    constructor(){}
    isGameReady() {
        return this.current === this.getReady
    }
    isGaming() {
        return this.current === this.gaming
    }
    isGameOver() {
        return this.current === this.gameOver
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