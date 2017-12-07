var score = 0;

function drawAll() {
  drawTracks();
  drawCars();
  drawScore();
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

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Lap: "+score+"/3", canvas.width - 100, 20);
}
