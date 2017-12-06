
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
