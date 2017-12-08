var car1 = new Image();
var car2 = new Image();
var logo = new Image();

var car1Loaded = false;
var car2Loaded = false;
var logoLoaded = false;

var car1x, car1y, car2x, car2y;
var car1Angle = 0;
var car2Angle = 0;
var car1Speed = 0;
var car2Speed = 0;

const POWER = 0.96;
const SPEED_UP = 0.5;
const SLOW_DOWN = 0.2;
const TURN_ANGLE = 0.08;



function loadCar() {
  car1.onload = () => {
    car1Loaded = true;
  };
  car1.src = "./assets/car1.png";

  car2.onload = () => {
    car2Loaded = true;
  };
  car2.src = "./assets/car2.png";

  logo.onload = () => {
    logoLoaded = true;
  };
  logo.src = './assets/logo.png';
}


function car1Maneuver(e) {
  car1Speed *= POWER;

  if (gasHeld1) {
    car1Speed += SPEED_UP;

  }
  if (reverseHeld1) {
    car1Speed -= SLOW_DOWN;
  }
  if (leftTurn1) {
    car1Angle -= TURN_ANGLE;
  }
  if (rightTurn1) {
    car1Angle += TURN_ANGLE;
  }

  car1x += Math.cos(car1Angle) * car1Speed;
  car1y += Math.sin(car1Angle) * car1Speed;
}

function car2Maneuver(e) {
  car2Speed *= POWER;

  if (gasHeld2) {
    car2Speed += SPEED_UP;
  }
  if (reverseHeld2) {
    car2Speed -= SLOW_DOWN;
  }
  if (leftTurn2) {
    car2Angle -= TURN_ANGLE;
  }
  if (rightTurn2) {
    car2Angle += TURN_ANGLE;
  }

  car2x += Math.cos(car2Angle) * car2Speed;
  car2y += Math.sin(car2Angle) * car2Speed;
}

function carStart() {
  for (let row = 0; row < GRID_ROWS; row++) {
    for (let col = 0; col < GRID_COLS; col++) {
      let index = rowColToIndex(col, row);

      if (trackMap[index] === 21) {
        trackMap[index] = 0;
        car1x = col * GRID_W + GRID_W/2; //centerX of car
        car1y = row * GRID_H + GRID_H/2; //centerY of car
      }
      if (trackMap[index] === 22) {
        trackMap[index] = 0;
        car2x = col * GRID_W + GRID_W/2;
        car2y = row * GRID_H + GRID_H/2;
      }
    }
  }
}

function drawCars() {
  if (car1Loaded) {
    drawWithRotation(car1, car1x, car1y, car1Angle);
  }
  if (car2Loaded) {
    drawWithRotation(car2, car2x, car2y, car2Angle);
  }
}

function drawWithRotation(car, x, y, angle) {
  ctx.save();
  ctx.translate(x,y);
  ctx.rotate(angle);
  ctx.drawImage(car, -car.width/2, -car.height/2);
  ctx.restore();
}
