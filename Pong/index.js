import { DrawUtils } from "./draw-utils.js";
import { MovePaddle } from "./move-paddle.js";

let width = 50, heigth = 50;
let ballX = 200, ballY = 222;
let radius = 10;
let canvas;
let context;
let movePaddle;
let drawUtils;
let once = false;

function initialization()
{
    if(once == false)
    {
        once = true;
        canvas = document.getElementById('canvas');
        context = canvas.getContext('2d');
        movePaddle = new MovePaddle(context);
        drawUtils = new DrawUtils(context);
    }
}

function Main()
{
    initialization();
    drawUtils.clearRect();

    drawUtils.drawRectangle(movePaddle.paddleX, movePaddle.paddleY, width, heigth);
    drawUtils.drawRectangle(movePaddle.paddleX + 200, movePaddle.paddleY, width, heigth);
    drawUtils.drawCircle(ballX, ballY, radius, 'blue');
    window.requestAnimationFrame(Main);
}

Main(); 