
var canvas, ctx;
var mainAudio = new Audio('./audio/arcade_funk.mp3');
mainAudio.loop = 'true';

document.addEventListener("DOMContentLoaded", function(){
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  const fps = 32;
  setInterval(updateAll, 1000/fps);

  setupKey();
  loadCar();
  carStart();
  mainAudio.play();
});

//options for multiple tracks
//options for multiple cars
