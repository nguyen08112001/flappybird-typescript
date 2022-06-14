import { Vec2 } from './../utils/vector';
import gameCore from "../game/gameControl/GameCore"
import Position from '../utils/Position';
import GameCore from '../game/gameControl/GameCore';

export default class GameObject {
    public gameCore: any
    public components:any
    public gameObject:any
    constructor(MyGameObject: any) {
        this.gameCore = gameCore;
        this.components = {};
        this.gameObject = MyGameObject;
        // this.gameObject.addComponent(MyGameObject);
    }
    addComponent(component: any) {
        this.components[component.constructor.name] = component;
    }
    test(){
        console.log("test")
    }
    getComponent(name: any) {
        console.log("getcom")
        return this.components[name] 
    }
}