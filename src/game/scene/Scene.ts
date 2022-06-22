import { GameOver } from ".";
import Background from "../component/background";
import Bird from "../component/bird";
import Cloud from "../component/cloud";
import ForeGround from "../component/foreground";
// import Pipe from "../component/pipe";
import PipeUp from "../component/PipeUp";
import PipeDown from "../component/PipeDown";
import game from "../gameControl/GameCore";
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
    // public pipe: Pipe;
    public score: Score;
    public pipes: Array<[PipeUp, PipeDown]>;
    public timer!: NodeJS.Timeout;
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
        // this.pipe =  new Pipe(53, 400);
        this.pipes = [];
        this.score = new Score();
        
        this.addObject(
            {
                gameObject: this.background,
                priority: 0
            },
            {
                gameObject: this.cloud,
                priority: 1
            }, 
            // {
            //     gameObject: this.pipe,
            //     priority: 2
            // },
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
    public addPipes(): void {
        let randomheight = -150 * (Math.random() + 1)
        let pipeUp: PipeUp = new PipeUp(randomheight);
        let pipeDown: PipeDown = new PipeDown(randomheight);
        this.pipes.push([pipeUp, pipeDown]);
        this.addObject(
            {gameObject: pipeUp, priority: 2}, 
            {gameObject: pipeDown, priority: 2}
        );
        // this.timer = setTimeout(() => this.addPipes(), 1500);
    }
    public startGame() {
        this.cloud.generate()
    }

    public checkCollision() {

        if (game.frame %100 === 0) {
                this.addPipes()
            }

        for (let p of this.pipes) {
            const bottomPipeYPosition = p[0].position.sY + 500
            if (
                this.bird.position.sX + this.bird.radius > p[0].position.sX &&
                this.bird.position.sX - this.bird.radius < p[0].position.sX + p[0].width &&
                this.bird.position.sY + this.bird.radius > p[0].position.sY &&
                this.bird.position.sY - this.bird.radius < p[0].position.sY + p[0].height
            ) {
                this.state.setGameOver()
            }
            if (
                this.bird.position.sX + this.bird.radius > p[0].position.sX &&
                this.bird.position.sX - this.bird.radius < p[0].position.sX + p[0].width &&
                this.bird.position.sY + this.bird.radius > bottomPipeYPosition &&
                this.bird.position.sY - this.bird.radius < bottomPipeYPosition + p[0].height
            ) {
                this.state.setGameOver()
            }

            if (p[0].position.sX <= this.bird.position.sX && p[0].position.sX + 5 >= this.bird.position.sX ) {
                this.score.updateScore()
            }

            if(p[0].position.sX + p[0].width < 0) {
                this.removePipe(p);
            }
            

        }
    }
    public reset(){
        for (let p of this.pipes) {
            this.removeObject(p[0]);
            this.removeObject(p[1]);
        }
        this.pipes = []
        this.bird.reset()
        this.score.reset()
    }
    private removePipe(pipe: [PipeUp, PipeDown]) {
        this.removeObject(pipe[0]);
        this.removeObject(pipe[1]);
        this.pipes.splice(this.pipes.indexOf(pipe), 1);
    }
}


export default Scene;