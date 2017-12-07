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
  "s": 83,
  "/": 191,
};

var audio_1 = new Audio('./audio/formula+1.mp3');
audio_1.loop = 'true';
var audio_2 = new Audio('./audio/speed_1.mp3');
audio_1.loop = 'true';
var horn = new Audio('./audio/horn_2.mp3');

function setupKey() {
  document.addEventListener('keydown', handleKeyDown, false);
  document.addEventListener('keyup', handleKeyUp, false);
}

function handleKeyDown(e) {
  e.preventDefault();
  console.log(e.keyCode);
  if (e.keyCode === KEYCODE["left"]) {
    leftTurn1 = true;
  }
  if (e.keyCode === KEYCODE["right"]) {
    rightTurn1 = true;
  }
  if (e.keyCode === KEYCODE["up"]) {
    gasHeld1 = true;
    audio_1.play();
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
    audio_2.play();
  }
  if (e.keyCode === KEYCODE["s"]) {
    reverseHeld2 = true;
  }
  if (e.keyCode === KEYCODE["/"]) {
    horn.play();
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
    audio_1.pause();
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
    audio_2.pause();
  }
  if (e.keyCode === KEYCODE["s"]) {
    reverseHeld2 = false;
  }
}

function fade(){
  if(audio.volume > 0){
      audio.volume -= 0.1;
      setTimeout(fade, 2);
  }else{
      audio.pause();
  }
}
