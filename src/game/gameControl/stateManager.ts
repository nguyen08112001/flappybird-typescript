import game from './GameCore'
const cvs = document.getElementById('gamezone') as HTMLCanvasElement;
const ctx = cvs.getContext('2d') as CanvasRenderingContext2D; 

export default class state {
    private static _instance: state;
    public  current: number = 0
    public  init: number = 0
    public  getReady: number = 1
    public  gaming:number = 2
    public  gameOver: number = 3
    constructor(){
    }
    public static getInstance(): state{
        if (!state._instance) {
            state._instance = new state();
        }
        return this._instance;
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
        game.pipe.reset()
        game.bird.reset()
        game.score.reset()
        game.frame = 0
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