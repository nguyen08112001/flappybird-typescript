
import MyObject from './MyObject.js';
import Position from '../utils/Position.js';
import GameCore from '../game/gameControl/GameCore.js';
class MyGameObject extends MyObject {
    public components: any
    constructor() {
        super();
        this.components = {};
        this.gameCore = GameCore;
        
    }
    reset() {
        super.reset();
    }

    addComponent(component: any) {
        this.components[component.constructor.name] = component;
    }

    getComponent(name: any) {
        return this.components[name] 
    }

    
}

export default MyGameObject;