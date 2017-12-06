const GRID_W = 40;
const GRID_H = 40;
const GRID_GAP = 1;
const GRID_COLS = 20;
const GRID_ROWS = 15;

const trackMap = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
  1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
  1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
  1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

const ROAD = 0;
const WALL = 1;

function rowColToIndex(col, row) {
  return col + GRID_COLS * row;
}

function drawTracks() {
  for (let row = 0; row < GRID_ROWS; row++) {
    for (let col = 0; col < GRID_COLS; col++) {
      let index = rowColToIndex(col, row);

      if (trackMap[index] === WALL) {
        ctx.fillStyle ="teal";
        ctx.fillRect(
          GRID_W * col, GRID_H * row,
          GRID_W - GRID_GAP, GRID_W - GRID_GAP
        );
      }
    }
  }
}

function isWall(col, row) {
  if (col >= 0 && col < GRID_COLS &&
      row >= 0 && row < GRID_ROWS) {
    let trackIndex = rowColToIndex(col, row);
    return (trackMap[trackIndex] === WALL);
  }
  else {
    return false;
  }
}

function handleCollision() {
  let car1Col = Math.floor(car1x / GRID_W);
  let car1Row = Math.floor(car1y / GRID_H);

  if (car1Col >= 0 && car1Col < GRID_COLS &&
      car1Row >= 0 && car1Row < GRID_ROWS) {
    if (isWall(car1Col, car1Row)) {
      car1x -= Math.cos(car1Angle) * car1Speed;
      car1y -= Math.cos(car1Angle) * car1Speed;

      car1Speed *= -0.5;
    }
  }
}
