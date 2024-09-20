"use strict";

var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var PLAYER_SIZE = 50;
var GRAVITY = 0.5;
var JUMP_STRENGTH = 10;
var playerX = 100;
var playerY = canvas.height - PLAYER_SIZE;
var velocityY = 0;
var onGround = true;
var obstacles = [{
  x: 300,
  y: canvas.height - 70,
  width: 100,
  height: 20
}, {
  x: 600,
  y: canvas.height - 150,
  width: 100,
  height: 20
}];

function drawPlayer() {
  ctx.fillStyle = 'red';
  ctx.fillRect(playerX, playerY, PLAYER_SIZE, PLAYER_SIZE);
}

function drawObstacles() {
  ctx.fillStyle = 'black';

  for (var _i = 0, obstacles_1 = obstacles; _i < obstacles_1.length; _i++) {
    var obstacle = obstacles_1[_i];
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  }
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function update() {
  clearCanvas();
  drawPlayer();
  drawObstacles(); // Gravity effect

  if (!onGround) {
    velocityY += GRAVITY;
    playerY += velocityY;

    if (playerY + PLAYER_SIZE >= canvas.height) {
      playerY = canvas.height - PLAYER_SIZE;
      onGround = true;
      velocityY = 0;
    }
  } // Collision detection with obstacles


  for (var _i = 0, obstacles_2 = obstacles; _i < obstacles_2.length; _i++) {
    var obstacle = obstacles_2[_i];

    if (playerX < obstacle.x + obstacle.width && playerX + PLAYER_SIZE > obstacle.x && playerY < obstacle.y + obstacle.height && playerY + PLAYER_SIZE > obstacle.y) {
      playerY = obstacle.y - PLAYER_SIZE;
      onGround = true;
      velocityY = 0;
    }
  }
}

function jump() {
  if (onGround) {
    velocityY = -JUMP_STRENGTH;
    onGround = false;
  }
}

document.addEventListener('keydown', function (event) {
  if (event.key === ' ') {
    jump();
  }
});

function gameLoop() {
  update();
  requestAnimationFrame(gameLoop);
}

gameLoop();