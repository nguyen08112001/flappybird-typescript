const cvs = document.getElementById('gamezone') as HTMLCanvasElement;
const ctx = cvs.getContext('2d') as CanvasRenderingContext2D; 
// import './game/gameControl/gameStart';

// export const cvs = document.getElementById('cvs') as HTMLCanvasElement
// export const ctx = cvs.getContext('2d') as CanvasRenderingContext2D
import game from './game/game'
// import Background from './game/component/background'
// import sprite from './game/sprite'
// import Bird from './game/component/bird'

// cvs.addEventListener('click', event => {
//   switch (game.state.current) {
//     case game.state.getReady:
//       game.state.setGaming()
//       break
//     case game.state.gaming:
//         console.log(game.bird.sY, game.bird.radius, event);
//       if (game.bird.sY - game.bird.radius <= 0) {
//         return
//       }
//       game.bird.flap()
//     //   if (event.key)
//       break
//     case game.state.gameOver:

//         game.pipe.reset()
//         game.bird.speedReset()
//         game.score.reset()
//         game.state.setGameReady()
      
//       break
//   }
// })

document.addEventListener("keydown", event => {
    switch (game.state.current) {
      case game.state.getReady:
        game.state.setGaming()
        break
      case game.state.gaming:
        if (game.bird.sY - game.bird.radius <= 0) {
          return
        }
        game.bird.flap()
        break
      case game.state.gameOver:
        const rect = cvs.getBoundingClientRect()
          game.pipe.reset()
          game.bird.speedReset()
          game.score.reset()
          game.state.setGameReady()
        break
    }
  })




game.loop()