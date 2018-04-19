(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/pages/page-home/index.js":
/*!**************************************!*\
  !*** ./src/pages/page-home/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _elementLite = __webpack_require__(/*! @littleq/element-lite */ \"./node_modules/@littleq/element-lite/dist/element-lite.umd.js\");\n\nvar _template = __webpack_require__(/*! ./template.js */ \"./src/pages/page-home/template.js\");\n\nvar _style = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"style.styl\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar _style2 = _interopRequireDefault(_style);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst { HTMLElement, customElements } = window;\n\nclass Page extends (0, _elementLite.ElementLiteLitOnly)(HTMLElement) {\n  static get is() {\n    return 'page-home';\n  }\n\n  render() {\n    return _elementLite.html`<style>${_style2.default}</style>${(0, _template.template)(this)}`;\n  }\n}\n\nif (!customElements.get(Page.is)) {\n  customElements.define(Page.is, Page);\n} else {\n  console.warn(`${Page.is} is already defined somewhere. Please check your code.`);\n}\n\n//# sourceURL=webpack:///./src/pages/page-home/index.js?");

/***/ }),

/***/ "./src/pages/page-home/template.js":
/*!*****************************************!*\
  !*** ./src/pages/page-home/template.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.template = undefined;\n\nvar _elementLite = __webpack_require__(/*! @littleq/element-lite */ \"./node_modules/@littleq/element-lite/dist/element-lite.umd.js\");\n\nconst template = self => _elementLite.html`\n  <div class=\"red\">\n    Hello World\n  </div>\n`;\n\nexports.template = template;\n\n//# sourceURL=webpack:///./src/pages/page-home/template.js?");

/***/ })

}]);