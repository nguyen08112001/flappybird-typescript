import game from './gameControl/GameCore'
import { GameStart } from './scene';

class InputManager {

    static instance : any;
    static getInstance() {
        if (InputManager.instance) return InputManager.instance;
        return new InputManager();
    }
    constructor() {
        InputManager.instance = this;
    }
    start() {
        document.addEventListener("keydown", event => {
            switch (game.state.current) {
                case game.state.init:
                    game.state.setGameReady()
                    break
                case game.state.getReady:
                    game.state.setGaming()
                    break
                case game.state.gaming:
                    game.bird.flap()
                    break
                case game.state.gameOver:
                    game.pipe.reset()
                    game.bird.reset()
                    game.score.reset()
                    game.state.setInit()
                    break
            }
        })
    }


}
let inputManager = new InputManager();
export default inputManager;