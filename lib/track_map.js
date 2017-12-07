const GRID_W = 40;
const GRID_H = 40;
const GRID_GAP = 1;
const GRID_COLS = 30;
const GRID_ROWS = 18;
var sandTile = new Image();
var finishLine = new Image();
var roadTile = new Image();

const trackMap = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1,
  1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1,
  1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1,
  1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1,
  1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
];

const ROAD = 0;
const WALL = 1;
const FINISH = 3;

function rowColToIndex(col, row) {
  return col + GRID_COLS * row;
}

function drawTracks() {
  for (let row = 0; row < GRID_ROWS; row++) {
    for (let col = 0; col < GRID_COLS; col++) {
      let index = rowColToIndex(col, row);
      let num = Math.floor(Math.random() * 8);

      if (trackMap[index] === ROAD) {
        drawTile(roadTile, col, row, `./assets/road_tile_2.png`);
      }
      if (trackMap[index] === FINISH) {
        drawTile(finishLine, col, row, "./assets/finish_line_tile.png");
      }
      if (trackMap[index] === WALL) {
        drawTile(sandTile, col, row, "./assets/grass_tile.png");
      }
    }
  }
}

function drawTile(imageName, col, row, filePath) {
  ctx.drawImage(imageName, GRID_W * col, GRID_H * row);
  imageName.src = filePath;
}

function gridType(col, row) {
  if (col >= 0 && col < GRID_COLS &&
      row >= 0 && row < GRID_ROWS) {
    let trackIndex = rowColToIndex(col, row);
    return (trackMap[trackIndex]);
  }
  else {
    return false;
  }
}

function handleCollision() {
  let car1Col = Math.floor(car1x / GRID_W);
  let car1Row = Math.floor(car1y / GRID_H);
  let car2Col = Math.floor(car2x / GRID_W);
  let car2Row = Math.floor(car2y / GRID_H);
  let checkCarCollision = (car1Col === car2Col && car1Row === car2Row);


  if (car1Col >= 0 && car1Col < GRID_COLS &&
      car1Row >= 0 && car1Row < GRID_ROWS) {
    if (gridType(car1Col, car1Row) === WALL || checkCarCollision) {
      car1x -= Math.cos(car1Angle) * car1Speed;
      car1y -= Math.cos(car1Angle) * car1Speed;

      car1Speed *= -0.5;
    }
  }

  if (car2Col >= 0 && car2Col < GRID_COLS &&
      car2Row >= 0 && car2Row < GRID_ROWS) {
    if (gridType(car2Col, car2Row) === WALL || checkCarCollision) {
      car2x -= Math.cos(car2Angle) * car2Speed;
      car2y -= Math.cos(car2Angle) * car2Speed;

      car2Speed *= -0.5;
    }
  }
}
