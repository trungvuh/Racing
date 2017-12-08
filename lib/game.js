var lap = 0;
var checkPoint = false;
var showStarting = true;
var roundLap = 0;
var endGame = false;
var winner;
var applaud = new Audio('./audio/crowd_applaud.mp3');


function drawAll() {
  drawTracks();
  drawCars();
  drawLap();
  if (showStarting) {
    drawStarting();
  }
  if (endGame) {
    declareWinner();
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

function declareWinner() {
  ctx.drawImage(logo, canvas.width/2 - logo.width/2, canvas.height/2 - logo.height/2);
  ctx.font = "50px Helvetica";
  ctx.fillStyle = "#ffffff";
  ctx.fillText(`CONGRATULATIONS ${winner}, YOU WON!`, canvas.width/2 - logo.width, canvas.height/2 + 150);

  applaud.play();

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
    ctx.fillText("Player 1: Arrows - Player 2: WASD", 10, 30);
  }
}

function drawLap() {
  ctx.font = "20px Arial";
  ctx.fillStyle = "#ffffff";
  roundLap = Math.floor(lap);
  ctx.fillText("Lap: "+roundLap+"/3", canvas.width - 100, 30);
  if (roundLap === 3) {
    if (car1Lap) {
      winner = "PLAYER 1";
    }
    else if (car2Lap) {
      winner = "PLAYER 2";
    }
    endGame = true;
  }
}


//
