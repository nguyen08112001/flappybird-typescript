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
        document.addEventListener("keydown", ()=>{
            document.addEventListener("keydown", ()=>{
                console.log("keydown");
            })
        });
    }


}
let inputManager = new InputManager();
export default inputManager;