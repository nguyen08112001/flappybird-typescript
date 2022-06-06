// import Canvas from '../canvas/MyCanvas.js';
import inputManager from '../InputManager';
// import Scene from '../game/Scene/Scene.js';
console.log("gamecore")
class GameCore{
    static instance: GameCore;
    public canvas: any;
    public components: any[] | undefined;
    public inputManager: any | undefined;
    public scene: any;

    static getInstance(){
        if (GameCore.instance == null){
            GameCore.instance = new GameCore();
        }
        return GameCore.instance;
    }

    constructor(){
        if(GameCore.instance != null) {
            return GameCore.instance
        }
        // this.canvas = new Canvas()
        this.components = [];
        this.inputManager = inputManager;

        GameCore.instance = this;
    }
    start(){
        // this.canvas.start(h,w);
        // this.scene = new Scene();
        this.inputManager!.start();
    }
    progressInput(){
        //remove loop key down (up) of basic event system
        console.log("keydown");
        document.addEventListener("keydown", ()=>{
            document.addEventListener("keydown", ()=>{
                console.log("keydown");
            })
        });
    }
    update(time: any, delta: any){

        for (var component of this.components!){
            if (component.enabled) component.update(time, delta);
        }
 
    }
        
        // console.log(1000/delta)
    
    render(){
        for (let component of this.components!) {
            if (component.enabled) component.render();
        }
    }
    
}
// let gameCore = new GameCore(960,540);
let instance = GameCore.getInstance();
export default instance;