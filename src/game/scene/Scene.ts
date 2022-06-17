import { GameOver } from ".";
import Background from "../component/background";
import Bird from "../component/bird";
import Cloud from "../component/cloud";
import ForeGround from "../component/foreground";
import Pipe from "../component/pipe";
import gamecore from "../gameControl/GameCore";
// import GameManager from "../GameManager";
import GameStart from "./gameReady";
import State from "../gameControl/stateManager"
import Score from "../Score/scoreManager"
import GameManager from "../GameManager";
const cvs = document.getElementById('gamezone') as HTMLCanvasElement;
const ctx = cvs.getContext('2d') as CanvasRenderingContext2D; 

class Scene extends GameManager {

    public gameManager: any
    public background: Background;
    public foreground: ForeGround;
    public cloud: Cloud;
    public state: State;
    public frame: number;
    public gameOver: GameOver;
    public gameStart: GameStart;
    public bird: Bird;
    public pipe: Pipe;
    public score: Score;

    constructor() {
        super();
        this.background = new Background(0, 0, 275, 226, 0, cvs.height - 226, 700, 226);
        this.foreground= new ForeGround(276,0,224,112,0,cvs.height - 112,900,200,2),
        this.cloud= new Cloud(),
        this.state = new State();
        this.frame = 0;
        this.gameOver = new GameOver();
        this.gameStart = new GameStart();
        this.bird = new Bird(50, 150, 34, 26);
        this.pipe =  new Pipe(53, 400);
        this.score = new Score();
        super.addObject(
            {
                gameObject: this.background,
                priority: 0
            },
            {
                gameObject: this.cloud,
                priority: 1
            }, 
            {
                gameObject: this.pipe,
                priority: 2
            },
            {
                gameObject: this.foreground,
                priority: 3
            },
            {
                gameObject: this.bird,
                priority: 4
            },
            {
                gameObject: this.gameOver,
                priority: 5
            },
            {
                gameObject: this.gameStart,
                priority: 5
            },
            {
                gameObject: this.score,
                priority: 6
            },
        )
    }
    public startGame() {
        if (this.state.current === this.state.gaming){
            this.checkCollision()
        }
    }

    public checkCollision(){
        
        this.pipe.position.forEach(p => {
            const bottomPipeYPosition = p.sY + this.pipe.height + this.pipe.gap
            if (
                this.bird.sX + this.bird.radius > p.sX &&
                this.bird.sX - this.bird.radius < p.sX + this.pipe.width &&
                this.bird.sY + this.bird.radius > p.sY &&
                this.bird.sY - this.bird.radius < p.sY + this.pipe.height
            ) {
                this.state.setGameOver()
            }
            if (
                this.bird.sX + this.bird.radius > p.sX &&
                this.bird.sX - this.bird.radius < p.sX + this.pipe.width &&
                this.bird.sY + this.bird.radius > bottomPipeYPosition &&
                this.bird.sY - this.bird.radius < bottomPipeYPosition + this.pipe.height
            ) {
                this.state.setGameOver()
            }

            if (p.sX === this.bird.sX ) {
                this.score.updateScore()
            }
        })
    }

}


export default Scene;