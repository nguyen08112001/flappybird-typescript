import './game/gameControl/GameStart'
import ImageLoading from './game/ImageLoading';
import { CONSTANT } from './utils/contants';

function preloadingimage() {
	let imageLoading = ImageLoading.getInstance();

	imageLoading.push(CONSTANT.BACKGROUND, 'images/img_background.png');
	imageLoading.push(CONSTANT.GROUND, 'images/fg.png');
	imageLoading.push(CONSTANT.BLUEBIRD, 'images/bird_0.png');
	imageLoading.push(CONSTANT.BLUEBIRDFRAME + '0', 'images/bird_0.png');
	imageLoading.push(CONSTANT.BLUEBIRDFRAME + '1', 'images/bird_1.png');
	imageLoading.push(CONSTANT.BLUEBIRDFRAME + '2', 'images/bird_2.png');
	imageLoading.push(CONSTANT.BLUEBIRDFRAME + '3', 'images/bird_3.png');
	imageLoading.push(CONSTANT.BLUEBIRDFRAME + '4', 'images/bird_4.png');
	imageLoading.push(CONSTANT.BLUEBIRDFRAME + '5', 'images/bird_5.png');
	imageLoading.push(CONSTANT.BLUEBIRDFRAME + '6', 'images/bird_6.png');
	imageLoading.push(CONSTANT.BLUEBIRDFRAME + '7', 'images/bird_7.png');
	
	imageLoading.push(CONSTANT.SPRITE, 'images/sprite.png');

	imageLoading.push(CONSTANT.GREENPIPEDOWN, 'images/pipeNorth.png');
	imageLoading.push(CONSTANT.GREENPIPEUP, 'images/pipeSouth.png');

	imageLoading.push(CONSTANT.CLOUD, 'images/cloud.png');
	imageLoading.push(CONSTANT.GAMEOVER, 'images/gameOver.png');
	imageLoading.push(CONSTANT.GAMEREADY, 'images/getReady.png');
	imageLoading.push(CONSTANT.SCOREBOARD, 'images/img_score_board.png');
	imageLoading.push(CONSTANT.STARTBUTTON, 'images/startbutton.png');
	imageLoading.push(CONSTANT.RESTARTBUTTON, 'images/restart-button.png');
	imageLoading.push(CONSTANT.SILVER, 'images/img_silver.png');
	imageLoading.push(CONSTANT.GOLD, 'images/img_gold.png');
}

preloadingimage();

import './game/gameControl/GameStart'