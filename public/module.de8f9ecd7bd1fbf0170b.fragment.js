(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~page-home"],{

/***/ "./node_modules/@littleq/element-lite/dist/element-lite.umd.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@littleq/element-lite/dist/element-lite.umd.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/home/ubuntu/workspace/spa-lite/node_modules/@littleq/element-lite/dist/element-lite.umd.js'\");\n\n//# sourceURL=webpack:///./node_modules/@littleq/element-lite/dist/element-lite.umd.js?");

/***/ }),

/***/ "./src/pages/page-home/index.js":
/*!**************************************!*\
  !*** ./src/pages/page-home/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _elementLite = __webpack_require__(/*! @littleq/element-lite */ \"./node_modules/@littleq/element-lite/dist/element-lite.umd.js\");\n\nconst { HTMLElement, customElements } = window;\n\nclass Page extends (0, _elementLite.ElementLiteLitOnly)(HTMLElement) {\n  static get is() {\n    return 'page-home';\n  }\n\n  render() {\n    return _elementLite.html`Hello World`;\n  }\n}\n\nif (!customElements.get(Page.is)) {\n  customElements.define(Page.is, Page);\n} else {\n  console.warn(`${Page.is} is already defined somewhere. Please check your code.`);\n}\n\n//# sourceURL=webpack:///./src/pages/page-home/index.js?");

/***/ })

}]);