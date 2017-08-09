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
/***/ (function(module, exports, __webpack_require__) {

const state = __webpack_require__(1)
const dieContainer = document.querySelector('.die-container')

function resetGame() {
    iPhone.style.top = '160px'
    iPhone.style.left = '10px'
    Samsung.style.top = '250px'
    Samsung.style.left = '10px'

    state.iPhone.count = 0
    state.Samsung.count = 0

    iPhone.classList.remove('winner')
    Samsung.classList.remove('winner')

    state.currentPlayer = (Math.random() > .5) ? 'iPhone' : 'Samsung'

    document.querySelector('.theWinner').textContent = ''

    roll.textContent = '?'
}


function moveWinner() {
    const winnerCirclePosition = document.querySelector('#winner-circle').getBoundingClientRect()

    state[state.currentPlayer].element.style.top = winnerCirclePosition.top + 'px'
    state[state.currentPlayer].element.style.left = winnerCirclePosition.left + 'px'

    state[state.currentPlayer].element.classList.add('winner')

    document.querySelector('.theWinner').textContent = state.currentPlayer + " is the Winner!!!"

    setTimeout(function() {
        alert(`${state.currentPlayer} is the WINNER!!!`)
        if(confirm('reset the game?') ) {
            resetGame()
        }
    }, 401)
}

function movePlayer(tileNumber) {
    state[state.currentPlayer].count += tileNumber

    if(state[state.currentPlayer].count > 10) {
        moveWinner()
        return
    }

    const tilePosition = document.querySelector('#tile' + state[state.currentPlayer].count).getBoundingClientRect()

    state[state.currentPlayer].element.style.top = tilePosition.top + 'px'
    state[state.currentPlayer].element.style.left = tilePosition.left + 'px'

    if(state.currentPlayer === 'iPhone') {
        state.currentPlayer = 'Samsung'
    } else {
        state.currentPlayer = 'iPhone'
    }
}

dieContainer.addEventListener('click', function() {
    die.setAttribute('src', 'img/Dodecahedron3.gif')

    const num = Math.floor( Math.random() * 10 ) + 1

    roll.textContent = '?'
    setTimeout(function() {
        roll.textContent = num
        movePlayer(num)
    }, 1810)

})


/***/ }),
/* 1 */
/***/ (function(module, exports) {

const state = {
    iPhone: {
        count: 0,
        element: iPhone
    },

    Samsung: {
        count: 0,
        element: Samsung
    },

    currentPlayer: (Math.random() > .5) ? 'iPhone' : 'Samsung'
}

module.exports = state


/***/ })
/******/ ]);