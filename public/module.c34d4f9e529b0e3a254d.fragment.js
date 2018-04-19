(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/components/smart-text-wrapper/index.js":
/*!****************************************************!*\
  !*** ./src/components/smart-text-wrapper/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _elementLite = __webpack_require__(/*! @littleq/element-lite */ \"./node_modules/@littleq/element-lite/dist/element-lite.umd.js\");\n\nvar _uiState = __webpack_require__(/*! ../../utils/ui-state.js */ \"./src/utils/ui-state.js\");\n\nconst { HTMLElement, customElements } = window;\n\nclass SmartComponent extends (0, _elementLite.ElementLite)(HTMLElement) {\n  static get is() {\n    return 'smart-text-wrapper';\n  }\n\n  static get properties() {\n    return {\n      text: {\n        type: String,\n        value: 'hello',\n        observer: '_textChanged'\n      },\n      params: {\n        type: Object,\n        value: {},\n        observer: '_paramsChanged'\n      }\n    };\n  }\n\n  constructor() {\n    super();\n    this._boundRouteChanged = this._routeChanged.bind(this);\n    this._boundRouteParamObjectChanged = this._routeParamObjectChanged.bind(this);\n    this._boundTextWrapperChanged = this._textWrapperChanged.bind(this);\n    this._boundListChanged = this._listChanged(this);\n  }\n\n  connectedCallback() {\n    if (super.connectedCallback) super.connectedCallback();\n    this._textChanged(this.text);\n    this.querySelector('text-wrapper').addEventListener('text-wrapper-event', this._boundTextWrapperChanged);\n    (0, _uiState.subscribe)('currentRoute', this._boundRouteChanged);\n    (0, _uiState.subscribe)('routeParamObject', this._boundRouteParamObjectChanged);\n    (0, _uiState.subscribe)('list', this._boundListChanged);\n  }\n\n  disconnectedCallback() {\n    if (super.disconnectedCallback) super.disconnectedCallback();\n    this.querySelector('text-wrapper').removeEventListener('text-wrapper-event', this._boundTextWrapperChanged);\n    (0, _uiState.unsubscribe)('currentRoute', this._boundRouteChanged);\n    (0, _uiState.unsubscribe)('routeParamObject', this._boundRouteParamObjectChanged);\n    (0, _uiState.unsubscribe)('list', this._boundListChanged);\n  }\n\n  render() {\n    return _elementLite.html`<slot></slot>`;\n  }\n\n  _textChanged(text) {\n    for (let i = 0; i < this.children.length; i++) {\n      this.children[i].text = text;\n    }\n  }\n\n  _paramsChanged(params) {\n    this.querySelector('text-wrapper').params = params;\n  }\n\n  _routeChanged(value) {\n    this.text = '/' === value ? 'Home' : 'Elsewhere';\n  }\n\n  _routeParamObjectChanged(params) {\n    this.params = params;\n  }\n\n  _textWrapperChanged({ detail }) {\n    (0, _uiState.updateState)('routeParamObject', { id: detail.string });\n  }\n\n  _listChanged(list) {\n    this.querySelector('text-wrapper').list = list;\n  }\n}\n\nif (!customElements.get(SmartComponent.is)) {\n  customElements.define(SmartComponent.is, SmartComponent);\n} else {\n  console.warn(`${SmartComponent.is} is already defined somewhere. Please check your code.`);\n}\n\n//# sourceURL=webpack:///./src/components/smart-text-wrapper/index.js?");

/***/ }),

/***/ "./src/components/text-wrapper/index.js":
/*!**********************************************!*\
  !*** ./src/components/text-wrapper/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _elementLite = __webpack_require__(/*! @littleq/element-lite */ \"./node_modules/@littleq/element-lite/dist/element-lite.umd.js\");\n\nvar _template = __webpack_require__(/*! ./template.js */ \"./src/components/text-wrapper/template.js\");\n\nvar _style = __webpack_require__(/*! ./style.styl */ \"./src/components/text-wrapper/style.styl\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst { HTMLElement, customElements } = window;\n\nclass Component extends (0, _elementLite.ElementLite)(HTMLElement) {\n  static get is() {\n    return 'text-wrapper';\n  }\n\n  static get properties() {\n    return {\n      text: {\n        type: String,\n        value: 'hi'\n      },\n      params: {\n        type: Object,\n        value: {}\n      },\n      list: {\n        type: Array,\n        value: []\n      }\n    };\n  }\n\n  render() {\n    return _elementLite.html`<style>${_style2.default.toString()}</style>${(0, _template.template)(this)}`;\n  }\n\n  buttonClicked({ detail, target }) {\n    this.dispatchEvent(new window.CustomEvent('text-wrapper-event', { detail: Object.assign({}, detail, { string: target.getAttribute('string') }) }));\n  }\n}\n\nif (!customElements.get(Component.is)) {\n  customElements.define(Component.is, Component);\n} else {\n  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);\n}\n\n//# sourceURL=webpack:///./src/components/text-wrapper/index.js?");

/***/ }),

/***/ "./src/components/text-wrapper/style.styl":
/*!************************************************!*\
  !*** ./src/components/text-wrapper/style.styl ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/components/text-wrapper/style.styl?");

/***/ }),

/***/ "./src/components/text-wrapper/template.js":
/*!*************************************************!*\
  !*** ./src/components/text-wrapper/template.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.template = undefined;\n\nvar _elementLite = __webpack_require__(/*! @littleq/element-lite */ \"./node_modules/@littleq/element-lite/dist/element-lite.umd.js\");\n\nvar _repeat = __webpack_require__(/*! @littleq/element-lite/lib/lit-html/lib/repeat.js */ \"./node_modules/@littleq/element-lite/lib/lit-html/lib/repeat.js\");\n\nconst template = self => _elementLite.html`\n  <span>\n    Hey! ${self.text} ${self.params.id}\n  </span>\n  \n  <ul>\n    ${(0, _repeat.repeat)(self.list, null, (i, index) => _elementLite.html`\n      <li>${index}: ${i}</li>\n    `)}\n  </ul>\n  \n  <button string=\"Gauven\" on-click=${self.buttonClicked.bind(self)}>\n    Click here\n  </button>\n`;\n\nexports.template = template;\n\n//# sourceURL=webpack:///./src/components/text-wrapper/template.js?");

/***/ }),

/***/ "./src/pages/page-home/index.js":
/*!**************************************!*\
  !*** ./src/pages/page-home/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _elementLite = __webpack_require__(/*! @littleq/element-lite */ \"./node_modules/@littleq/element-lite/dist/element-lite.umd.js\");\n\nvar _template = __webpack_require__(/*! ./template.js */ \"./src/pages/page-home/template.js\");\n\nvar _style = __webpack_require__(/*! ./style.styl */ \"./src/pages/page-home/style.styl\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst { HTMLElement, customElements } = window;\n\nclass Page extends (0, _elementLite.ElementLiteLitOnly)(HTMLElement) {\n  static get is() {\n    return 'page-home';\n  }\n\n  render() {\n    return _elementLite.html`<style>${_style2.default.toString()}</style>${(0, _template.template)(this)}`;\n  }\n}\n\nif (!customElements.get(Page.is)) {\n  customElements.define(Page.is, Page);\n} else {\n  console.warn(`${Page.is} is already defined somewhere. Please check your code.`);\n}\n\n//# sourceURL=webpack:///./src/pages/page-home/index.js?");

/***/ }),

/***/ "./src/pages/page-home/style.styl":
/*!****************************************!*\
  !*** ./src/pages/page-home/style.styl ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".red {\\n  color: #f00;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/pages/page-home/style.styl?");

/***/ }),

/***/ "./src/pages/page-home/template.js":
/*!*****************************************!*\
  !*** ./src/pages/page-home/template.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.template = undefined;\n\nvar _elementLite = __webpack_require__(/*! @littleq/element-lite */ \"./node_modules/@littleq/element-lite/dist/element-lite.umd.js\");\n\n__webpack_require__(/*! ../../components/text-wrapper/index.js */ \"./src/components/text-wrapper/index.js\");\n\n__webpack_require__(/*! ../../components/smart-text-wrapper/index.js */ \"./src/components/smart-text-wrapper/index.js\");\n\nconst template = self => _elementLite.html`\n  <div class=\"red\">\n    Hello World\n    <a href=\"/page/tj\">\n      Click\n    </a>\n    <smart-text-wrapper>\n      <text-wrapper></text-wrapper>\n    </smart-text-wrapper>\n  </div>\n`;\n\nexports.template = template;\n\n//# sourceURL=webpack:///./src/pages/page-home/template.js?");

/***/ })

}]);