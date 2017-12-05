import trackMap from './track_map';

document.addEventListener("DOMContentLoaded", function(){
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  const GRID_W = 40;
  const GRID_H = 40;
  const GRID_GAP = 2;
  const GRID_COLS = 20;
  const GRID_ROWS = 15;
  const fps = 32;
  const map = trackMap;
  var startingPosX1, startingPosY1;
  var startingPosX2, startingPosY2;


  function rowColToIndex(row, col) {
    return col + GRID_COLS * row;
  }

  function drawTracks() {
    for (let row = 0; row < GRID_ROWS; row++) {
      for (let col = 0; col < GRID_COLS; col++) {
        let index = rowColToIndex(row, col);

        if ( map[index] === 1 ) {
          ctx.fillStyle ="teal";
          ctx.fillRect(
            GRID_W * col, GRID_H * row,
            GRID_W - GRID_GAP, GRID_W - GRID_GAP
          );
        }
        else if (map[index] === 21) {
          startingPosX1 = col * GRID_W;
          startingPosY1 = row * GRID_H;
        }
        else if (map[index] === 22) {
          startingPosX2 = col * GRID_W;
          startingPosY2 = row * GRID_H;
        }
      }
    }
  }

  function drawCar() {
    var car1 = new Image();
    var car2 = new Image();

    car1.onload = function () {
      ctx.drawImage(car1, startingPosX1, startingPosY1);
    };
    car1.src = "./assets/car1.png";

    car2.onload = function() {
      ctx.drawImage(car2, startingPosX2, startingPosY2);
    };

    car2.src = "./assets/car2.png";
  }

  function drawAll() {
    ctx.fillStyle ="black";
    ctx.fillRect(0,0, canvas.width, canvas.height);

    drawCar();
    drawTracks();
  }

  setInterval(drawAll(), 1000/fps);
});
