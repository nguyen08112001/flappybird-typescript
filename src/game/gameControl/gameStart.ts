import gameCore from './gameCore.js';

gameCore.start();

requestAnimationFrame(loop);

let lastTime = window.performance.now();
function loop(){
    let time = window.performance.now();
    let delta = time-lastTime;

    gameCore.progressInput();
    gameCore.update(time, delta);
    gameCore.render();

    lastTime = time;
    requestAnimationFrame(loop);
}