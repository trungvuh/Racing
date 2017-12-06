
var canvas, ctx;

document.addEventListener("DOMContentLoaded", function(){
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  const fps = 32;
  setInterval(updateAll, 1000/fps);

  setupKey();
  loadCar();
  carStart();

});

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



  // function drawCar() {
  //
  //   car1.onload = () => {
  //     ctx.drawImage(car1,
  //       (car1x - car1.width/2),
  //       (car1y - car1.height/2));
  //   };
  //   car1.src = "./assets/car1.png";
  //
  //   car2.onload = () => {
  //     ctx.drawImage(car2,
  //       (car1x - car2.width/2),
  //       (car2y - car2.height/2));
  //   };
  //
  //   car2.src = "./assets/car2.png";
  // }
