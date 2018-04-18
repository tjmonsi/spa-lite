(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-home"],{

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