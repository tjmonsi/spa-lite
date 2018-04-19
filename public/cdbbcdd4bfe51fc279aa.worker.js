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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/babel-loader/lib/index.js??ref--6-1!./src/index.worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js??ref--6-1!./src/index.worker.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--6-1!./src/index.worker.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _stateManager = __webpack_require__(/*! ./workers/state-manager.js */ \"./src/workers/state-manager.js\");\n\nself.addEventListener('message', function (_ref) {\n  var data = _ref.data;\n\n  (0, _stateManager.stateManager)(self, data);\n});\n\n//# sourceURL=webpack:///./src/index.worker.js?./node_modules/babel-loader/lib??ref--6-1");

/***/ }),

/***/ "./src/workers/state-manager.js":
/*!**************************************!*\
  !*** ./src/workers/state-manager.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nlet currentState = {};\nconst stateTimeline = [];\n\nconst reducer = (path, state = {}, value) => {\n  const obj = {};\n  obj[path] = value;\n  return Object.assign({}, state, obj);\n};\n\nconst stateManager = (self, data) => {\n  const { action } = data;\n  if (action === 'state-change') {\n    const { path, value } = data;\n    currentState = reducer(path, currentState, value);\n    if (stateTimeline.length >= 1000) {\n      stateTimeline.pop();\n    }\n    stateTimeline.unshift(currentState);\n    self.postMessage({ action, path, value });\n  } else if (data.action === 'get-state') {\n    self.postMessage({ action, value: currentState });\n  }\n};\n\nexports.stateManager = stateManager;\n\n//# sourceURL=webpack:///./src/workers/state-manager.js?");

/***/ })

/******/ });