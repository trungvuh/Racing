var gasHeld1 = false;
var reverseHeld1 = false;
var leftTurn1 = false;
var rightTurn1 = false;
var gasHeld2 = false;
var reverseHeld2 = false;
var leftTurn2 = false;
var rightTurn2 = false;

const KEYCODE = {
  "left": 37,
  "right": 39,
  "up": 38,
  "down": 40,
  "a": 65,
  "d": 68,
  "w": 87,
  "s": 83
};

function setupKey() {
  document.addEventListener('keydown', handleKeyDown, false);
  document.addEventListener('keyup', handleKeyUp, false);
}

function handleKeyDown(e) {
  e.preventDefault();

  if (e.keyCode === KEYCODE["left"]) {
    leftTurn1 = true;
  }
  if (e.keyCode === KEYCODE["right"]) {
    rightTurn1 = true;
  }
  if (e.keyCode === KEYCODE["up"]) {
    gasHeld1 = true;
  }
  if (e.keyCode === KEYCODE["down"]) {
    reverseHeld1 = true;
  }
  if (e.keyCode === KEYCODE["a"]) {
    leftTurn2 = true;
  }
  if (e.keyCode === KEYCODE["d"]) {
    rightTurn2 = true;
  }
  if (e.keyCode === KEYCODE["w"]) {
    gasHeld2 = true;
  }
  if (e.keyCode === KEYCODE["s"]) {
    reverseHeld2 = true;
  }
}

function handleKeyUp(e) {
  if (e.keyCode === KEYCODE["left"]) {
    leftTurn1 = false;
  }
  if (e.keyCode === KEYCODE["right"]) {
    rightTurn1 = false;
  }
  if (e.keyCode === KEYCODE["up"]) {
    gasHeld1 = false;
  }
  if (e.keyCode === KEYCODE["down"]) {
    reverseHeld1 = false;
  }
  if (e.keyCode === KEYCODE["a"]) {
    leftTurn2 = false;
  }
  if (e.keyCode === KEYCODE["d"]) {
    rightTurn2 = false;
  }
  if (e.keyCode === KEYCODE["w"]) {
    gasHeld2 = false;
  }
  if (e.keyCode === KEYCODE["s"]) {
    reverseHeld2 = false;
  }
}
