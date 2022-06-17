import gameCore from '../game/gameControl/GameCore';
class MyObject {
    public gameCore: any
    constructor() {
        this.gameCore = gameCore;
    }
    reset(){};
}

export default MyObject;