var lap = 0;
var showStarting = true;

function drawAll() {
  drawTracks();
  drawCars();
  drawLap();
  if (showStarting) {
    drawStarting();
  }
}

function moveAll() {
  car1Maneuver();
  car2Maneuver();
  handleCollision();
}

function updateAll() {
  drawAll();
  moveAll();
}

function updateLap() {

}

function drawStarting() {
  if (logoLoaded) {
    ctx.drawImage(logo, canvas.width/2 - logo.width/2, canvas.height/2 - logo.height/2);
    ctx.font = "50px Helvetica";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("PRESS ENTER TO START", canvas.width/2 - logo.width/2 - 50, canvas.height/2 + 150);
    ctx.font = "30px Helvetica";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Press P to Play/ Pause Music", canvas.width/2 - logo.width/2 + 50, canvas.height/2 + 190);
    ctx.font = "20px Arial";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Player 1: WASD / Player 2: Arrows", 10, 30);
  }
}

function drawLap() {
  ctx.font = "20px Arial";
  ctx.fillStyle = "#ffffff";
  ctx.fillText("Lap: "+lap+"/3", canvas.width - 100, 30);
}


//
