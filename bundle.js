/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {


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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map