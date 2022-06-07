import game from './game'

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
              case game.state.getReady:
                game.state.setGaming()
                break
              case game.state.gaming:
                if (game.bird.sY - game.bird.radius <= 0) {
                  game.state.setGameOver();
                }
                game.bird.flap()
                break
              case game.state.gameOver:
                  game.pipe.reset()
                  game.bird.speedReset()
                  game.score.reset()
                  game.state.setGameReady()
                break
            }
          })
    }


}
let inputManager = new InputManager();
export default inputManager;