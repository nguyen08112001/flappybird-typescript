import MyObject from './MyObject.js';

class MyComponent extends MyObject{
    gameObject: any;
    constructor(MyGameObject: any, rank = 0 ){
        super();
        this.gameObject = MyGameObject;
        this.gameObject.addComponent(this);
        this.gameCore.addComponent(this,rank);
        
    }
    update(time: any,delta: any){}
    pause(time: any, delta: any){}
    render(){
        
    }
}


export default MyComponent;