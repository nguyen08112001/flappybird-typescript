const cvs = document.getElementById('gamezone') as HTMLCanvasElement;
const ctx = cvs.getContext('2d') as CanvasRenderingContext2D; 

class GameStart{
    static draw() {
        var img = new Image()
        img.src = 'images/getReady.png'
        ctx.drawImage(img, cvs.width / 2 - 100,cvs.height/8+50,300,100)
        var img = new Image()
        img.src = 'images/startbutton.png'
        ctx.drawImage(img, cvs.width / 2 -150,cvs.height/2,250,150)
    }
    constructor() {

    }
    public draw() {
        var img = new Image()
        img.src = 'images/getReady.png'
        ctx.drawImage(img, cvs.width / 2 - 100,cvs.height/8+50,300,100)
        var img = new Image()
        img.src = 'images/startbutton.png'
        ctx.drawImage(img, cvs.width / 2 -150,cvs.height/2,250,150)
    
    }
}

export default GameStart