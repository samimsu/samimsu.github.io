const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let infoMsg = "click to start";
const originalCanvasWidth = 480;
const originalCanvasHeight = 320;
const paddleHeight = (canvas.height / originalCanvasHeight) * 10;
const paddleWidth = (canvas.width / originalCanvasWidth) * 75;
const ballRadius = (canvas.height / originalCanvasHeight) * 10;
let x = canvas.width / 2;
let y = canvas.height - paddleHeight - ballRadius;
let dx = 2;
let dy = -2;
let paddleX = (canvas.width - paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;
const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;
let score = 0;
let lives = 3;
let gameStarted = false;
let gameOver = true;
const blue = "#0095DD";
const green = "green";
const red = "red";
const orange = "orange";
const yellow = "yellow";
const bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1, color: blue };
  }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);
canvas.addEventListener("click", clickHandler, false);

function keyDownHandler(e) {
  if (!gameStarted) return;
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  }
}

function mouseMoveHandler(e) {
  if (!gameStarted) return;
  const relativeX = e.clientX - canvas.offsetLeft;
  //   const relativeX = e.clientX - paddleWidth - paddleWidth / 2;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
    // paddleX = relativeX - 2 * paddleWidth;
  }
}

function clickHandler(e) {
  if (gameStarted && !gameOver) {
    const relativeX = e.clientX - canvas.offsetLeft;
    if (relativeX > 0 && relativeX < canvas.width) {
      paddleX = relativeX - paddleWidth / 2;
    }
  } else {
    resetValues();
    gameStarted = true;
    gameOver = false;
  }
}

function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const b = bricks[c][r];
      if (b.status == 1) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
          dy = -dy;
          if (b.color == blue) {
            b.color = green;
          } else if (b.color == green) {
            b.color = red;
          } else if (b.color == red) {
            b.color = orange;
          } else if (b.color == orange) {
            b.color = yellow;
          } else {
            b.status = 0;
          }
          score++;
          if (score == brickRowCount * brickColumnCount * 5) {
            infoMsg = "YOU WON!";
            dx = 0;
            dy = 0;
            gameOver = true;
          }
        }
      }
    }
  }
}

function resetValues() {
  x = canvas.width / 2;
  y = canvas.height - paddleHeight - ballRadius;
  dx = 2;
  dy = -2;
  paddleX = (canvas.width - paddleWidth) / 2;
  rightPressed = false;
  leftPressed = false;
  score = 0;
  lives = 3;
  gameStarted = false;
  for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
      bricks[c][r] = { x: 0, y: 0, status: 1, color: blue };
    }
  }
}

function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText(`Score: ${score}`, 8, 20);
}

function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Lives:", canvas.width - 110, 20);
  for (let i = 0; i < lives; i++) {
    drawHeart({ x: canvas.width - 110 + 60 + i * 20, y: 12 }, 4, "#0095DD");
  }
}

function drawHeart(startPoint, size, color) {
  const endpointX = startPoint.x - size;
  const endpointY =
    ((2.5 * size + startPoint.y) * endpointX) / (startPoint.x - size);
  const endPoint = { x: endpointX, y: endpointY };
  ctx.beginPath();
  ctx.arc(
    startPoint.x,
    startPoint.y,
    startPoint.x - endPoint.x,
    -1 * Math.PI,
    0.25 * Math.PI
  );
  ctx.lineTo(endPoint.x, endPoint.y);
  ctx.arc(
    startPoint.x - 2 * (startPoint.x - endPoint.x),
    startPoint.y,
    startPoint.x - endPoint.x,
    0,
    0.75 * Math.PI,
    true
  );
  ctx.lineTo(endPoint.x, endPoint.y);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function drawInfoMsg(msg) {
  ctx.font = "32px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText(msg, 150, 200);
}

function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status == 1) {
        const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = bricks[c][r].color;
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
  collisionDetection();
  if (!gameStarted || gameOver) {
    drawInfoMsg(infoMsg);
  } else {
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
      dx = -dx;
    }
    if (y + dy < ballRadius) {
      dy = -dy;
    } else if (y + dy > canvas.height - ballRadius) {
      if (x > paddleX && x < paddleX + paddleWidth) {
        dy = -dy;
        if (dx == 0) dx = 2;
      } else {
        lives--;
        if (!lives) {
          infoMsg = "YOU DIED!";
          dx = 0;
          dy = 0;
          gameOver = true;
        } else {
          dx = 0;
          x = canvas.width / 2;
          y = canvas.height - 100;
        }
      }
    }
    if (rightPressed) {
      paddleX += 7;
      if (paddleX + paddleWidth > canvas.width) {
        paddleX = canvas.width - paddleWidth;
      }
    } else if (leftPressed) {
      paddleX -= 7;
      if (paddleX < 0) {
        paddleX = 0;
      }
    }
    x += dx;
    y += dy;
  }

  requestAnimationFrame(draw);
}

draw();
