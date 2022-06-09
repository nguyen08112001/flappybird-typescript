import gameCore from './GameCore';

requestAnimationFrame(loop);

let lastTime = window.performance.now();
function loop(){
    let time = window.performance.now();
    let delta = time-lastTime;
    console.log(delta)
    gameCore.processInput();
    gameCore.update(time, delta);
    gameCore.draw();

    lastTime = time;
    requestAnimationFrame(loop);
}