import MyComponent from "../libs/MyComponent.js";
import MyGameObject from "../libs/MyGameObject.js";

import SpriteImage from "./Image.js";
export default class GameManager {
    
    public objects: Array<{gameObject: SpriteImage, priority: number}> = [];
    public addObject(...objects: {gameObject: SpriteImage, priority: number}[]) {
        this.objects.push(...objects);
        this.objects.sort((a, b) => (a.priority < b.priority ? -1 : 1));
    }
    public getObjects(): Array<{gameObject: SpriteImage, priority: number}> {
        return this.objects;
    }

}
