function drawAll() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.fillStyle ="black";
  ctx.fillRect(0,0, canvas.width, canvas.height);

  drawCars();
  drawTracks();
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
