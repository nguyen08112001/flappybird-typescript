import game from '../game'
const cvs = document.getElementById('gamezone') as HTMLCanvasElement;
const ctx = cvs.getContext('2d') as CanvasRenderingContext2D; 
class gameOver {
    static draw() {
        var img = new Image()
            img.src = 'images/gameOver.png'
            ctx.drawImage(img, cvs.width / 4-50,cvs.height/50-150,500,500)
            var img = new Image()
            img.src = 'images/img_score_board.png'
            ctx.drawImage(img, cvs.width / 2 -150,cvs.height/2-110,250,150)
            var img = new Image()
            img.src = 'images/startbutton.png'
            ctx.drawImage(img, cvs.width / 2 -150,cvs.height/2,250,150)
            if (game.score.value <= 10) {
                var img = new Image()
                img.src = 'images/img_silver.png'
                ctx.drawImage(img, cvs.width / 2 -125,cvs.height/2-50,50,50)
            } else {
                var img = new Image()
                img.src = 'images/img_gold.png'
                ctx.drawImage(img, cvs.width / 2 -125,cvs.height/2-50,50,50)
            }
            var img = new Image()
            img.src = 'images/startbutton.png'
            ctx.drawImage(img, cvs.width / 2 -150,cvs.height/2,250,150)
    }
  constructor() {
  }
   public draw() {
    var img = new Image()
            img.src = 'images/gameOver.png'
            ctx.drawImage(img, cvs.width / 4-50,cvs.height/50-150,500,500)
            var img = new Image()
            img.src = 'images/img_score_board.png'
            ctx.drawImage(img, cvs.width / 2 -150,cvs.height/2-110,250,150)
            var img = new Image()
            img.src = 'images/startbutton.png'
            ctx.drawImage(img, cvs.width / 2 -150,cvs.height/2,250,150)
            if (game.score.value <= 10) {
                var img = new Image()
                img.src = 'images/img_silver.png'
                ctx.drawImage(img, cvs.width / 2 -125,cvs.height/2-50,50,50)
            } else {
                var img = new Image()
                img.src = 'images/img_gold.png'
                ctx.drawImage(img, cvs.width / 2 -125,cvs.height/2-50,50,50)
            }
            var img = new Image()
            img.src = 'images/startbutton.png'
            ctx.drawImage(img, cvs.width / 2 -150,cvs.height/2,250,150)
  }
}

export default gameOver