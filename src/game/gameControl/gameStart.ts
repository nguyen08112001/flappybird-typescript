import gameCore from './GameCore';

requestAnimationFrame(loop);

let lastTime = window.performance.now();
function loop(){
    let time = window.performance.now();
    let delta = time-lastTime;

    gameCore.processInput();
    gameCore.update(time, delta);
    gameCore.draw();

    lastTime = time;
    requestAnimationFrame(loop);
}