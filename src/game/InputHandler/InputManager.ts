import game from '../gameControl/GameCore'
import { GameStart } from '../scene';

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
            switch (game.scene.state.current) {
                case game.scene.state.init:
                    game.scene.state.setGameReady()
                    break
                case game.scene.state.getReady:
                    game.scene.state.setGaming()
                    break
                case game.scene.state.gaming:
                    game.scene.bird.flap()
                    break
                case game.scene.state.gameOver:
                    game.scene.state.setInit()
                    break
            }
        })
    }


}
let inputManager = new InputManager();
export default inputManager;