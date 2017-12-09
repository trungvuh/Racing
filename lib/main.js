var canvas, ctx;
var startPlay = false;
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


  document.addEventListener('keydown', handleMusic, false);

  function handleMusic(e) {
    if (e.keyCode === 80) {
      if (startPlay === false) {
        mainAudio.play();
        startPlay = true;
      }
      else {
        mainAudio.pause();
        startPlay = false;
      }
    }
  }

});



//options for multiple tracks
//options for multiple cars
