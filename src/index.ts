// var canvas = document.getElementById('gamezone') as HTMLCanvasElement;
// var context = canvas.getContext('2d') as CanvasRenderingContext2D;
// var scoreshow = document.getElementById('score') as HTMLElement;

// var birdimg = new Image();
// var background = new Image();
// var pipeNorth = new Image();
// var pipeSouth = new Image();

// birdimg.src = "../src/images/bird.png";
// background.src = "../src/images/bg.png";
// pipeNorth.src = "../src/images/pipeNorth.png";
// pipeSouth.src = "../src/images/pipeSouth.png";

// var score = 0;

// var gap = 140;
// var constant;

// var bird = {
//     x: background.width/5,
//     y: background.width/5
// }

// // let pipe: { x: number, y: number }[] = [
// // ];

// // pipe[0]={
// //     x:canvas.width,
// //     y:0
// // }

// function run() {
//     context.drawImage(background, 0, 0);
//     context.drawImage(birdimg, bird.x, bird.y);

//     for (var i = 0; i <pipe.length; i++) {
//         constant = pipeNorth.height + gap;
//         context.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
//         context.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant);
//         pipe[i].x -= 5;

//         if (pipe[i].x == canvas.width/2) {
//             pipe.push({
//                 x : canvas.width,
//                 y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
//             }); 
//         }

//         if (pipe[i].x == 0) pipe.slice(0,1);
//         if (pipe[i].x == bird.x) score++;

//         //lose
//         if(bird.y + birdimg.height == canvas.height
//         || bird.x + birdimg.width >= pipe[i].x && bird.x <= pipe[i].x + pipeNorth.width && (bird.y<=pipe[i].y + pipeNorth.height
//         || bird.y + birdimg.height >=  pipe[i].y + constant)
//          ) {
//             return;
//             location.reload(); // reload the page
//         }
//     }

//     scoreshow.innerHTML = "score: " +score;
//     bird.y += 3;



//     requestAnimationFrame(run);
// }

// document.addEventListener("keydown", function() {
//     bird.y -= 60;
// })

// window.onload = () => {
//     run()
// }