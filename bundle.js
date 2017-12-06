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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__track_map__ = __webpack_require__(1);


document.addEventListener("DOMContentLoaded", function(){
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  const GRID_W = 40;
  const GRID_H = 40;
  const GRID_GAP = 2;
  const GRID_COLS = 20;
  const GRID_ROWS = 15;
  const map = __WEBPACK_IMPORTED_MODULE_0__track_map__["a" /* default */];

  const fps = 32;
  var car1 = new Image();
  var car2 = new Image();

  var car1x, car1y, car2x, car2y;
  var car1Angle = 0;
  var car2Angle = 0;
  var car1Speed = 0;
  var car2Speed = 0;


  var gasHeld = false;
  var reverseHeld = false;
  var leftTurn = false;
  var rightTurn = false;

  document.addEventListener('keydown', handleKeyDown, false);
  document.addEventListener('keyup', handleKeyUp, false);

  function handleKeyDown(e) {
    e.preventDefault();

    if (e.keyCode === 37) {
      leftTurn = true;
    }
    if (e.keyCode === 39) {
      rightTurn = true;
    }
    if (e.keyCode === 38) {
      gasHeld = true;
    }
    if (e.keyCode === 40) {
      reverseHeld = true;
    }
  }

  function handleKeyUp(e) {
    if (e.keyCode === 37) {
      leftTurn = false;
    }
    if (e.keyCode === 39) {
      rightTurn = false;
    }
    if (e.keyCode === 38) {
      gasHeld = false;
    }
    if (e.keyCode === 40) {
      reverseHeld = false;
    }
  }

  function carManeuver(e) {
    car1Speed *= 0.96;

    if (gasHeld) {
      car1Speed += 0.25;
    }
    else if (reverseHeld) {
      car1Speed -= 0.2;
    }
    else if (leftTurn) {
      car1Angle -= 0.04;
    }
    else if (rightTurn) {
      car1Angle += 0.04;
    }

    car1x += Math.cos(car1Angle) * car1Speed;
    car1y += Math.sin(car1Angle) + car1Speed;
  }

  function carStart() {
    for (let row = 0; row < GRID_ROWS; row++) {
      for (let col = 0; col < GRID_COLS; col++) {
        let index = rowColToIndex(row, col);

        if (map[index] === 21) {
          map[index] = 0;
          car1x = col * GRID_W + GRID_W/2; //centerX of car
          car1y = row * GRID_H + GRID_H/2; //centerY of car
        }
        else if (map[index] === 22) {
          map[index] = 0;
          car2x = col * GRID_W + GRID_W/2;
          car2y = row * GRID_H + GRID_H/2;
        }
      }
    }
  }


  function rowColToIndex(row, col) {
    return col + GRID_COLS * row;
  }

  function drawTracks() {
    for (let row = 0; row < GRID_ROWS; row++) {
      for (let col = 0; col < GRID_COLS; col++) {
        let index = rowColToIndex(row, col);

        if ( map[index] === 1 ) {
          ctx.fillStyle ="teal";
          ctx.fillRect(
            GRID_W * col, GRID_H * row,
            GRID_W - GRID_GAP, GRID_W - GRID_GAP
          );
        }
      }
    }
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

  function centerRotation(car, x, y, angle) {
    ctx.save();
    ctx.translate(x,y);
    ctx.rotate(angle);
    ctx.drawImage(car, -car.width/2, -car.height/2);
    ctx.restore();
  }

  function drawAll() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillStyle ="black";
    ctx.fillRect(0,0, canvas.width, canvas.height);

    car1.onload = () => {
      centerRotation(car1, car1x, car1y, car1Angle);
    };
    car1.src = "./assets/car1.png";

    car2.onload = () => {
      centerRotation(car2, car2x, car2y, car2Angle);
    };
    car2.src = "./assets/car2.png";

    carManeuver();
    drawTracks();
  }

  function moveAll() {
    carManeuver();
  }

  function updateAll() {
    drawAll();
    moveAll();
  }

  carStart();

  setInterval(updateAll(), 1000/fps);
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const trackMap = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
  1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
  1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
  1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
  1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

/* harmony default export */ __webpack_exports__["a"] = (trackMap);

// 1 - basic tile
// 2 - car starting pos


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map