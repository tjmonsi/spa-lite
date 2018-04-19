/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1]
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"core": 0
/******/ 	};
/******/
/******/
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120000;
/******/
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = __webpack_require__.p + "module." + {"0":"6479feb0f4f4feed5ef9","1":"d36b43e51acf204a7426","2":"1984ce15ecf6f3aa25a9"}[chunkId] + ".fragment.js";
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				function onScriptComplete(event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@littleq/core-lite/core-lite.js":
/*!******************************************************!*\
  !*** ./node_modules/@littleq/core-lite/core-lite.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../location-lite/location-lite.js */ \"./node_modules/@littleq/location-lite/location-lite.js\");\n\n__webpack_require__(/*! ../query-lite/query-lite.js */ \"./node_modules/@littleq/query-lite/query-lite.js\");\n\n__webpack_require__(/*! ../router-lite/router-lite.js */ \"./node_modules/@littleq/router-lite/router-lite.js\");\n\n__webpack_require__(/*! ../router-lite/route-data-lite.js */ \"./node_modules/@littleq/router-lite/route-data-lite.js\");\n\n__webpack_require__(/*! ../template-loader-lite/template-loader-lite.js */ \"./node_modules/@littleq/template-loader-lite/template-loader-lite.js\");\n\n__webpack_require__(/*! ../template-viewer-lite/template-viewer-lite.js */ \"./node_modules/@littleq/template-viewer-lite/template-viewer-lite.js\");\n\n__webpack_require__(/*! ../template-viewer-lite/template-container-lite.js */ \"./node_modules/@littleq/template-viewer-lite/template-container-lite.js\");\n\n/**\n * # core-lite\n *\n * `<core-lite>`: Core element helper\n *\n * @extends {HTMLElement}\n * @customElement\n*/\n\nclass CoreLite extends window.HTMLElement {\n  static get is() {\n    return 'core-lite';\n  }\n\n  constructor() {\n    super();\n    this.__initialized = false;\n    this._location = document.createElement('location-lite');\n    this._query = document.createElement('query-lite');\n    this._viewer = document.createElement('template-viewer-lite');\n    this._router = null;\n    this._loader = null;\n    this._boundPathChanged = this._pathChanged.bind(this);\n    this._boundQueryChanged = this._queryChanged.bind(this);\n    this._boundHashChanged = this._hashChanged.bind(this);\n    this._boundQueryObjectChanged = this._queryObjectChanged.bind(this);\n    this._boundRouterParamObjectChanged = this._routerParamObjectChanged.bind(this);\n    this._boundCurrentRouteChanged = this._currentRouteChanged.bind(this);\n    this._boundTemplateChanged = this._templateChanged.bind(this);\n    this.attachShadow({ mode: 'open' });\n  }\n\n  connectedCallback() {\n    if (!this.__initialized) {\n      this._router = this.querySelector('router-lite');\n      this._loader = this.querySelector('template-loader-lite');\n\n      if (!this._router) {\n        this._router = document.createElement('router-lite');\n        this.appendChild(this._router);\n      }\n\n      if (!this._loader) {\n        this._loader = document.createElement('template-loader-lite');\n        this.appendChild(this._loader);\n      }\n\n      if (this._location) {\n        this._location.addEventListener('path-change', this._boundPathChanged);\n        this._location.addEventListener('query-change', this._boundQueryChanged);\n        this._location.addEventListener('hash-change', this._boundHashChanged);\n        this.shadowRoot.appendChild(this._location);\n      }\n\n      if (this._query) {\n        this._query.addEventListener('query-change', this._boundQueryChanged);\n        this._query.addEventListener('query-object-change', this._boundQueryObjectChanged);\n        this.shadowRoot.appendChild(this._query);\n      }\n\n      if (this._router) {\n        this._router.addEventListener('route-param-object-change', this._boundRouterParamObjectChanged);\n        this._router.addEventListener('current-route-change', this._boundCurrentRouteChanged);\n      }\n\n      if (this._loader) {\n        this._loader.addEventListener('template-change', this._boundTemplateChanged);\n      }\n\n      if (this._viewer) {\n        this.shadowRoot.appendChild(this._viewer);\n      }\n\n      this.shadowRoot.appendChild(document.createElement('slot'));\n    }\n    this.__initialized = this._location && this._query && this._router && this._loader && this._viewer && true;\n  }\n\n  disconnectedCallback() {\n    if (this._location) {\n      this._location.removeEventListener('path-change', this._boundPathChanged);\n      this._location.removeEventListener('query-change', this._boundQueryChanged);\n      this._location.removeEventListener('hash-change', this._boundHashChanged);\n    }\n    if (this._query) {\n      this._query.removeEventListener('query-change', this._boundQueryChanged);\n      this._query.removeEventListener('query-object-change', this._boundQueryObjectChanged);\n    }\n    if (this._router) {\n      this._router.removeEventListener('route-param-object-change', this._boundRouterParamObjectChanged);\n      this._router.removeEventListener('current-route-change', this._boundCurrentRouteChanged);\n    }\n    if (this._loader) {\n      this._loader.removeEventListener('template-change', this._boundTemplateChanged);\n    }\n  }\n\n  _pathChanged(event) {\n    if (this.__initialized) {\n      const { detail: path } = event;\n      this._router.path = path;\n      event.preventDefault();\n      event.stopPropagation();\n      this.path = path;\n      this._dispatchEvent('path', this.path);\n    } else {\n      console.warn('core-lite is not initialized');\n    }\n  }\n\n  _queryChanged(event) {\n    if (this.__initialized) {\n      const { detail: query } = event;\n      if (this._query.query !== query) this._query.query = query;\n      if (this._location.query !== query) this._location.query = query;\n      event.preventDefault();\n      event.stopPropagation();\n      this.query = query;\n      this._dispatchEvent('query', this.query);\n    } else {\n      console.warn('core-lite is not initialized');\n    }\n  }\n\n  _hashChanged(event) {\n    if (this.__initialized) {\n      const { detail: hash } = event;\n      event.preventDefault();\n      event.stopPropagation();\n      this.hash = hash;\n      this._dispatchEvent('hash', this.hash);\n    } else {\n      console.warn('core-lite is not initialized');\n    }\n  }\n\n  _queryObjectChanged(event) {\n    if (this.__initialized) {\n      const { detail: queryObject } = event;\n      event.preventDefault();\n      event.stopPropagation();\n      this.queryObject = queryObject;\n      this._dispatchEvent('query-object', this.queryObject);\n    } else {\n      console.warn('core-lite is not initialized');\n    }\n  }\n\n  _routerParamObjectChanged(event) {\n    if (this.__initialized) {\n      const { detail: routeParamObject } = event;\n      event.preventDefault();\n      event.stopPropagation();\n      this.routeParamObject = routeParamObject;\n      this._dispatchEvent('route-param-object', this.routeParamObject);\n    } else {\n      console.warn('core-lite is not initialized');\n    }\n  }\n\n  _currentRouteChanged(event) {\n    if (this.__initialized) {\n      const { detail: currentRoute } = event;\n      this._loader.pattern = currentRoute;\n      event.preventDefault();\n      event.stopPropagation();\n      this.currentRoute = currentRoute;\n      this._dispatchEvent('current-route', this.currentRoute);\n    } else {\n      console.warn('core-lite is not initialized');\n    }\n  }\n\n  _templateChanged(event) {\n    if (this.__initialized) {\n      const { detail: template } = event;\n      this._viewer.template = template;\n      event.preventDefault();\n      event.stopPropagation();\n      this.template = template;\n      this._dispatchEvent('template', this.template);\n    } else {\n      console.warn('core-lite is not initialized');\n    }\n  }\n\n  _dispatchEvent(name, detail) {\n    this.dispatchEvent(new window.CustomEvent(`${name}-change`, { detail }));\n  }\n}\n\nif (!window.customElements.get(CoreLite.is)) {\n  window.customElements.define(CoreLite.is, CoreLite);\n} else {\n  console.warn(`${CoreLite.is} is already defined somewhere. Please check your code.`);\n}\n\n//# sourceURL=webpack:///./node_modules/@littleq/core-lite/core-lite.js?");

/***/ }),

/***/ "./node_modules/@littleq/location-lite/lib/resolve-url.js":
/*!****************************************************************!*\
  !*** ./node_modules/@littleq/location-lite/lib/resolve-url.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nlet workingURL;\nlet urlDoc, urlBase, anchor;\n\n/**\n * @param {string} path\n * @param {string=} base\n * @return {!URL|!HTMLAnchorElement}\n */\nconst resolveUrl = exports.resolveUrl = (path, base) => {\n  if (workingURL === undefined) {\n    workingURL = false;\n    try {\n      var u = new window.URL('b', 'http://a');\n      u.pathname = 'c%20d';\n      workingURL = u.href === 'http://a/c%20d';\n      workingURL = workingURL && new window.URL('http://www.google.com/?foo bar').href === 'http://www.google.com/?foo%20bar';\n    } catch (e) {\n      console.error(e);\n    }\n  }\n  if (workingURL) {\n    return new window.URL(path, base);\n  }\n  if (!urlDoc) {\n    urlDoc = document.implementation.createHTMLDocument('url');\n    urlBase = urlDoc.createElement('base');\n    urlDoc.head.appendChild(urlBase);\n    anchor = /** @type {HTMLAnchorElement} */urlDoc.createElement('a');\n  }\n  urlBase.href = base;\n  anchor.href = path.replace(/ /g, '%20');\n  return anchor;\n};\n\n//# sourceURL=webpack:///./node_modules/@littleq/location-lite/lib/resolve-url.js?");

/***/ }),

/***/ "./node_modules/@littleq/location-lite/location-lite.js":
/*!**************************************************************!*\
  !*** ./node_modules/@littleq/location-lite/location-lite.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.LocationLite = undefined;\n\nvar _resolveUrl = __webpack_require__(/*! ./lib/resolve-url.js */ \"./node_modules/@littleq/location-lite/lib/resolve-url.js\");\n\n/**\n * # LocationLite\n * `<location-lite>` Location path getter system for making a single-page-application.\n * It hijacks the global clicking of any `<a>` tag and pushes the anchor's `href` url to `history`\n * without loading the page from the server.\n *\n * This is a copied version of without using Polymer `https://github.com/PolymerElements/iron-location/blob/__auto_generated_3.0_preview/iron-location.js`\n *\n * @customElement\n *\n */\n\nclass LocationLite extends window.HTMLElement {\n  static get is() {\n    return 'location-lite';\n  }\n\n  constructor() {\n    super();\n    this.__data = {};\n    this.__dataInvalid = false;\n\n    this._boundHashChanged = this._hashChanged.bind(this);\n    this._boundUrlChanged = this._urlChanged.bind(this);\n    this._boundGlobalOnClick = this._globalOnClick.bind(this);\n    this._urlSpaceRegExp = null;\n\n    this.dwellTime = 2000;\n  }\n\n  connectedCallback() {\n    window.addEventListener('hashchange', this._boundHashChanged);\n    window.addEventListener('location-change', this._boundUrlChanged);\n    window.addEventListener('popstate', this._boundUrlChanged);\n    document.body.addEventListener('click', this._boundGlobalOnClick, true);\n\n    if (window.performance) {\n      this._lastChangedAt = window.performance.now() - (this.dwellTime - 200);\n    }\n    this._initialized = true;\n    this._urlChanged();\n  }\n\n  disconnectedCallback() {\n    window.removeEventListener('hashchange', this._boundHashChanged);\n    window.removeEventListener('location-change', this._boundUrlChanged);\n    window.removeEventListener('popstate', this._boundUrlChanged);\n    document.body.removeEventListener('click', this._boundGlobalOnClick);\n    this._initialized = false;\n  }\n\n  set urlSpaceRegex(urlSpaceRegex) {\n    this.__data.urlSpaceRegex = urlSpaceRegex;\n    this._urlSpaceRegExp = RegExp(urlSpaceRegex);\n  }\n\n  get urlSpaceRegex() {\n    return this.__data.urlSpaceRegex;\n  }\n\n  set path(path) {\n    if (this.__data.path !== path) {\n      this.__data.path = path;\n      this._invalidateProperties();\n    }\n  }\n\n  get path() {\n    return this.__data.path;\n  }\n\n  set query(query) {\n    if (this.__data.query !== query) {\n      this.__data.query = query;\n      this._invalidateProperties();\n    }\n  }\n\n  get query() {\n    return this.__data.query;\n  }\n\n  set hash(hash) {\n    if (this.__data.hash !== hash) {\n      this.__data.hash = hash;\n      this._invalidateProperties();\n    }\n  }\n\n  get hash() {\n    return this.__data.hash;\n  }\n\n  _invalidateProperties() {\n    if (!this.__dataInvalid) {\n      this.__dataInvalid = true;\n\n      Promise.resolve().then(() => {\n        if (this.__dataInvalid) {\n          this.__dataInvalid = false;\n          this._updateUrl();\n        }\n      });\n    }\n  }\n\n  _hashChanged() {\n    this.hash = window.decodeURIComponent(window.location.hash.slice(1));\n\n    Promise.resolve().then(() => {\n      this.dispatchEvent(new window.CustomEvent('hash-change', { detail: this.hash }));\n    });\n  }\n\n  _urlChanged() {\n    // We want to extract all info out of the updated URL before we\n    // try to write anything back into it.\n    //\n    // i.e. without _dontUpdateUrl we'd overwrite the new path with the old\n    // one when we set this.hash. Likewise for query.\n    this._dontUpdateUrl = true;\n    this._hashChanged();\n    this.path = window.decodeURIComponent(window.location.pathname);\n    this.query = window.location.search.slice(1);\n\n    Promise.resolve().then(() => {\n      this.dispatchEvent(new window.CustomEvent('path-change', { detail: this.path }));\n      this.dispatchEvent(new window.CustomEvent('query-change', { detail: this.query }));\n    });\n\n    this._dontUpdateUrl = false;\n    // this._updateUrl();\n  }\n\n  _getUrl() {\n    var partiallyEncodedPath = window.encodeURI(this.path).replace(/\\#/g, '%23').replace(/\\?/g, '%3F'); // eslint-disable-line no-useless-escape\n    var partiallyEncodedQuery = '';\n    if (this.query) {\n      partiallyEncodedQuery = '?' + this.query.replace(/\\#/g, '%23'); // eslint-disable-line no-useless-escape\n    }\n    var partiallyEncodedHash = '';\n    if (this.hash) {\n      partiallyEncodedHash = '#' + window.encodeURI(this.hash);\n    }\n    return partiallyEncodedPath + partiallyEncodedQuery + partiallyEncodedHash;\n  }\n\n  _updateUrl() {\n    if (this._dontUpdateUrl || !this._initialized) {\n      return;\n    }\n\n    if (this.path === window.decodeURIComponent(window.location.pathname) && this.query === window.location.search.substring(1) && this.hash === window.decodeURIComponent(window.location.hash.substring(1))) {\n      // Nothing to do, the current URL is a representation of our properties.\n      return;\n    }\n    var newUrl = this._getUrl();\n    // Need to use a full URL in case the containing page has a base URI.\n    var fullNewUrl = (0, _resolveUrl.resolveUrl)(newUrl, window.location.protocol + '//' + window.location.host).href;\n    var now = window.performance ? window.performance.now() : null;\n    var shouldReplace = this._lastChangedAt + this.dwellTime > now;\n    this._lastChangedAt = now;\n    if (shouldReplace) {\n      window.history.replaceState({}, '', fullNewUrl);\n    } else {\n      window.history.pushState({}, '', fullNewUrl);\n    }\n    window.dispatchEvent(new window.CustomEvent('location-change'));\n  }\n\n  /**\n   * A necessary evil so that links work as expected. Does its best to\n   * bail out early if possible.\n   *\n   * @param {MouseEvent} event .\n   */\n  _globalOnClick(event) {\n    // If another event handler has stopped this event then there's nothing\n    // for us to do. This can happen e.g. when there are multiple\n    // iron-location elements in a page.\n    if (event.defaultPrevented) {\n      return;\n    }\n    var href = this._getSameOriginLinkHref(event);\n    if (!href) {\n      return;\n    }\n    event.preventDefault();\n    // If the navigation is to the current page we shouldn't add a history\n    // entry or fire a change event.\n    if (href === window.location.href) {\n      return;\n    }\n\n    window.history.pushState({}, '', href);\n    window.dispatchEvent(new window.CustomEvent('location-change'));\n  }\n\n  /**\n   * Returns the absolute URL of the link (if any) that this click event\n   * is clicking on, if we can and should override the resulting full\n   * page navigation. Returns null otherwise.\n   *\n   * @param {MouseEvent} event .\n   * @return {string?} .\n   */\n  _getSameOriginLinkHref(event) {\n    // We only care about left-clicks.\n    if (event.button !== 0) {\n      return null;\n    }\n    // We don't want modified clicks, where the intent is to open the page\n    // in a new tab.\n    if (event.metaKey || event.ctrlKey) {\n      return null;\n    }\n    const eventPath = event.composedPath();\n    let anchor = null;\n    for (var i = 0; i < eventPath.length; i++) {\n      var element = eventPath[i];\n      if (element.tagName === 'A' && element.href) {\n        anchor = element;\n        break;\n      }\n    }\n    // If there's no link there's nothing to do.\n    if (!anchor) {\n      return null;\n    }\n    // Target blank is a new tab, don't intercept.\n    if (anchor.target === '_blank') {\n      // capture link click\n      if (anchor.href && window.ga) {\n        window.ga('send', 'event', 'Link', 'Click', anchor.href, 1);\n      }\n      return null;\n    }\n    // If the link is for an existing parent frame, don't intercept.\n    if ((anchor.target === '_top' || anchor.target === '_parent') && window.top !== window) {\n      return null;\n    }\n    const href = anchor.href;\n    // It only makes sense for us to intercept same-origin navigations.\n    // pushState/replaceState don't work with cross-origin links.\n    let url;\n    if (document.baseURI != null) {\n      url = (0, _resolveUrl.resolveUrl)(href, /** @type {string} */document.baseURI);\n    } else {\n      url = (0, _resolveUrl.resolveUrl)(href);\n    }\n    let origin;\n    // IE Polyfill\n    if (window.location.origin) {\n      origin = window.location.origin;\n    } else {\n      origin = window.location.protocol + '//' + window.location.host;\n    }\n    let urlOrigin;\n    if (url.origin) {\n      urlOrigin = url.origin;\n    } else {\n      urlOrigin = url.protocol + '//' + url.host;\n    }\n    if (urlOrigin !== origin) {\n      return null;\n    }\n    var normalizedHref = url.pathname + url.search + url.hash;\n    // pathname should start with '/', but may not if `new URL` is not supported\n    if (normalizedHref[0] !== '/') {\n      normalizedHref = '/' + normalizedHref;\n    }\n    // If we've been configured not to handle this url... don't handle it!\n    if (this._urlSpaceRegExp && !this._urlSpaceRegExp.test(normalizedHref)) {\n      return null;\n    }\n    // Need to use a full URL in case the containing page has a base URI.\n    var fullNormalizedHref = (0, _resolveUrl.resolveUrl)(normalizedHref, window.location.href).href;\n    return fullNormalizedHref;\n  }\n}\n\nexports.LocationLite = LocationLite; /// <reference path=\"typings-project/global.d.ts\"/>\n\nif (!window.customElements.get(LocationLite.is)) {\n  window.customElements.define(LocationLite.is, LocationLite);\n} else {\n  console.warn(`${LocationLite.is} is already defined somewhere. Please check your code.`);\n}\n\n//# sourceURL=webpack:///./node_modules/@littleq/location-lite/location-lite.js?");

/***/ }),

/***/ "./node_modules/@littleq/query-lite/query-lite.js":
/*!********************************************************!*\
  !*** ./node_modules/@littleq/query-lite/query-lite.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/// <reference path=\"typings-project/global.d.ts\"/>\n\n/**\n * # query-lite\n * `<query-lite>` Query parameter setter and getter system. Parses query parameter into an object. Works with `@littleq/location-lite`\n *\n * This is a copied version of without using Polymer https://github.com/PolymerElements/iron-location/blob/__auto_generated_3.0_preview/iron-query-params.js\n *\n * @customElement\n *\n */\n\nclass QueryLite extends window.HTMLElement {\n  static get is() {\n    return 'query-lite';\n  }\n\n  constructor() {\n    super();\n    this.__data = {};\n  }\n\n  set query(query) {\n    this.__data.query = query;\n    this._queryChanged(query);\n  }\n\n  get query() {\n    return this.__data.query;\n  }\n\n  set queryObject(queryObject) {\n    this.__data.queryObject = queryObject;\n    this._queryObjectChanged(queryObject);\n  }\n\n  get queryObject() {\n    return this.__data.queryObject;\n  }\n\n  connectedCallback() {\n    this.queryObject = {};\n    this._dontReact = false;\n  }\n\n  _queryChanged(query) {\n    if (this._dontReactQuery) {\n      return;\n    }\n    this._dontReact = true;\n    this.queryObject = this.decodeParams(query);\n    Promise.resolve().then(() => {\n      this.dispatchEvent(new window.CustomEvent('query-object-change', { detail: this.queryObject }));\n    });\n\n    this._dontReact = false;\n  }\n\n  _queryObjectChanged(queryObject) {\n    if (this._dontReact) {\n      return;\n    }\n    this._dontReactQuery = true;\n    this.query = this.encodeParams(queryObject).replace(/%3F/g, '?').replace(/%2F/g, '/').replace(/'/g, '%27');\n\n    Promise.resolve().then(() => {\n      this.dispatchEvent(new window.CustomEvent('query-change', { detail: this.query }));\n    });\n\n    this._dontReactQuery = false;\n  }\n\n  encodeParams(params) {\n    var encodedParams = [];\n    for (var key in params) {\n      var value = params[key];\n      if (value === '') {\n        encodedParams.push(encodeURIComponent(key));\n      } else if (value) {\n        encodedParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(value.toString())}`);\n      }\n    }\n    return encodedParams.join('&');\n  }\n\n  decodeParams(paramString) {\n    const params = {};\n    // Work around a bug in decodeURIComponent where + is not\n    // converted to spaces:\n    paramString = (paramString || '').replace(/\\+/g, '%20');\n    const paramList = paramString.split('&');\n    for (let i = 0; i < paramList.length; i++) {\n      let param = paramList[i].split('=');\n      if (param[0]) {\n        params[decodeURIComponent(param[0])] = decodeURIComponent(param[1] || '');\n      }\n    }\n    return params;\n  }\n}\n\nif (!window.customElements.get(QueryLite.is)) {\n  window.customElements.define(QueryLite.is, QueryLite);\n} else {\n  console.warn(`${QueryLite.is} is already defined somewhere. Please check your code.`);\n}\n\n//# sourceURL=webpack:///./node_modules/@littleq/query-lite/query-lite.js?");

/***/ }),

/***/ "./node_modules/@littleq/router-lite/lib/path-to-regexp.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@littleq/router-lite/lib/path-to-regexp.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/**\n * Expose `pathToRegexp`.\n */\n\n/**\n * Default configs.\n */\nvar DEFAULT_DELIMITER = '/';\nvar DEFAULT_DELIMITERS = './';\n\n/**\n * The main path matching regexp utility.\n *\n * @type {RegExp}\n */\nvar PATH_REGEXP = new RegExp([\n// Match escaped characters that would otherwise appear in future matches.\n// This allows the user to escape special characters that won't transform.\n'(\\\\\\\\.)',\n// Match Express-style parameters and un-named parameters with a prefix\n// and optional suffixes. Matches appear as:\n//\n// \"/:test(\\\\d+)?\" => [\"/\", \"test\", \"\\d+\", undefined, \"?\"]\n// \"/route(\\\\d+)\"  => [undefined, undefined, undefined, \"\\d+\", undefined]\n'(?:\\\\:(\\\\w+)(?:\\\\(((?:\\\\\\\\.|[^\\\\\\\\()])+)\\\\))?|\\\\(((?:\\\\\\\\.|[^\\\\\\\\()])+)\\\\))([+*?])?'].join('|'), 'g');\n\n/**\n * Parse a string for the raw tokens.\n *\n * @param  {string}  str\n * @param  {Object=} options\n * @return {!Array}\n */\nfunction parse(str, options) {\n  var tokens = [];\n  var key = 0;\n  var index = 0;\n  var path = '';\n  var defaultDelimiter = options && options.delimiter || DEFAULT_DELIMITER;\n  var delimiters = options && options.delimiters || DEFAULT_DELIMITERS;\n  var pathEscaped = false;\n  var res;\n\n  while ((res = PATH_REGEXP.exec(str)) !== null) {\n    var m = res[0];\n    var escaped = res[1];\n    var offset = res.index;\n    path += str.slice(index, offset);\n    index = offset + m.length;\n\n    // Ignore already escaped sequences.\n    if (escaped) {\n      path += escaped[1];\n      pathEscaped = true;\n      continue;\n    }\n\n    var prev = '';\n    var next = str[index];\n    var name = res[2];\n    var capture = res[3];\n    var group = res[4];\n    var modifier = res[5];\n\n    if (!pathEscaped && path.length) {\n      var k = path.length - 1;\n\n      if (delimiters.indexOf(path[k]) > -1) {\n        prev = path[k];\n        path = path.slice(0, k);\n      }\n    }\n\n    // Push the current path onto the tokens.\n    if (path) {\n      tokens.push(path);\n      path = '';\n      pathEscaped = false;\n    }\n\n    var partial = prev !== '' && next !== undefined && next !== prev;\n    var repeat = modifier === '+' || modifier === '*';\n    var optional = modifier === '?' || modifier === '*';\n    var delimiter = prev || defaultDelimiter;\n    var pattern = capture || group;\n\n    tokens.push({\n      name: name || key++,\n      prefix: prev,\n      delimiter: delimiter,\n      optional: optional,\n      repeat: repeat,\n      partial: partial,\n      pattern: pattern ? escapeGroup(pattern) : '[^' + escapeString(delimiter) + ']+?'\n    });\n  }\n\n  // Push any remaining characters.\n  if (path || index < str.length) {\n    tokens.push(path + str.substr(index));\n  }\n\n  return tokens;\n}\n\n/**\n * Compile a string to a template function for the path.\n *\n * @param  {string}             str\n * @param  {Object=}            options\n * @return {!function(Object=, Object=)}\n */\nfunction compile(str, options) {\n  return tokensToFunction(parse(str, options));\n}\n\n/**\n * Expose a method for transforming tokens into the path function.\n */\nfunction tokensToFunction(tokens) {\n  // Compile all the tokens into regexps.\n  var matches = new Array(tokens.length);\n\n  // Compile all the patterns before compilation.\n  for (var i = 0; i < tokens.length; i++) {\n    if (typeof tokens[i] === 'object') {\n      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');\n    }\n  }\n\n  return function (data, options) {\n    var path = '';\n    var encode = options && options.encode || encodeURIComponent;\n\n    for (var i = 0; i < tokens.length; i++) {\n      var token = tokens[i];\n\n      if (typeof token === 'string') {\n        path += token;\n        continue;\n      }\n\n      var value = data ? data[token.name] : undefined;\n      var segment;\n\n      if (Array.isArray(value)) {\n        if (!token.repeat) {\n          throw new TypeError('Expected \"' + token.name + '\" to not repeat, but got array');\n        }\n\n        if (value.length === 0) {\n          if (token.optional) continue;\n\n          throw new TypeError('Expected \"' + token.name + '\" to not be empty');\n        }\n\n        for (var j = 0; j < value.length; j++) {\n          segment = encode(value[j], token);\n\n          if (!matches[i].test(segment)) {\n            throw new TypeError('Expected all \"' + token.name + '\" to match \"' + token.pattern + '\"');\n          }\n\n          path += (j === 0 ? token.prefix : token.delimiter) + segment;\n        }\n\n        continue;\n      }\n\n      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {\n        segment = encode(String(value), token);\n\n        if (!matches[i].test(segment)) {\n          throw new TypeError('Expected \"' + token.name + '\" to match \"' + token.pattern + '\", but got \"' + segment + '\"');\n        }\n\n        path += token.prefix + segment;\n        continue;\n      }\n\n      if (token.optional) {\n        // Prepend partial segment prefixes.\n        if (token.partial) path += token.prefix;\n\n        continue;\n      }\n\n      throw new TypeError('Expected \"' + token.name + '\" to be ' + (token.repeat ? 'an array' : 'a string'));\n    }\n\n    return path;\n  };\n}\n\n/**\n * Escape a regular expression string.\n *\n * @param  {string} str\n * @return {string}\n */\nfunction escapeString(str) {\n  return str.replace(/([.+*?=^!:${}()[\\]|/\\\\])/g, '\\\\$1');\n}\n\n/**\n * Escape the capturing group by escaping special characters and meaning.\n *\n * @param  {string} group\n * @return {string}\n */\nfunction escapeGroup(group) {\n  return group.replace(/([=!:$/()])/g, '\\\\$1');\n}\n\n/**\n * Get the flags for a regexp from the options.\n *\n * @param  {Object} options\n * @return {string}\n */\nfunction flags(options) {\n  return options && options.sensitive ? '' : 'i';\n}\n\n/**\n * Pull out keys from a regexp.\n *\n * @param  {!RegExp} path\n * @param  {Array=}  keys\n * @return {!RegExp}\n */\nfunction regexpToRegexp(path, keys) {\n  if (!keys) return path;\n\n  // Use a negative lookahead to match only capturing groups.\n  var groups = path.source.match(/\\((?!\\?)/g);\n\n  if (groups) {\n    for (var i = 0; i < groups.length; i++) {\n      keys.push({\n        name: i,\n        prefix: null,\n        delimiter: null,\n        optional: false,\n        repeat: false,\n        partial: false,\n        pattern: null\n      });\n    }\n  }\n\n  return path;\n}\n\n/**\n * Transform an array into a regexp.\n *\n * @param  {!Array}  path\n * @param  {Array=}  keys\n * @param  {Object=} options\n * @return {!RegExp}\n */\nfunction arrayToRegexp(path, keys, options) {\n  var parts = [];\n\n  for (var i = 0; i < path.length; i++) {\n    parts.push(pathToRegexp(path[i], keys, options).source);\n  }\n\n  return new RegExp('(?:' + parts.join('|') + ')', flags(options));\n}\n\n/**\n * Create a path regexp from string input.\n *\n * @param  {string}  path\n * @param  {Array=}  keys\n * @param  {Object=} options\n * @return {!RegExp}\n */\nfunction stringToRegexp(path, keys, options) {\n  return tokensToRegExp(parse(path, options), keys, options);\n}\n\n/**\n * Expose a function for taking tokens and returning a RegExp.\n *\n * @param  {!Array}  tokens\n * @param  {Array=}  keys\n * @param  {Object=} options\n * @return {!RegExp}\n */\nfunction tokensToRegExp(tokens, keys, options) {\n  options = options || {};\n\n  var strict = options.strict;\n  var end = options.end !== false;\n  var delimiter = escapeString(options.delimiter || DEFAULT_DELIMITER);\n  var delimiters = options.delimiters || DEFAULT_DELIMITERS;\n  var endsWith = [].concat(options.endsWith || []).map(escapeString).concat('$').join('|');\n  var route = '';\n  var isEndDelimited = false;\n\n  // Iterate over the tokens and create our regexp string.\n  for (var i = 0; i < tokens.length; i++) {\n    var token = tokens[i];\n\n    if (typeof token === 'string') {\n      route += escapeString(token);\n      isEndDelimited = i === tokens.length - 1 && delimiters.indexOf(token[token.length - 1]) > -1;\n    } else {\n      var prefix = escapeString(token.prefix);\n      var capture = token.repeat ? '(?:' + token.pattern + ')(?:' + prefix + '(?:' + token.pattern + '))*' : token.pattern;\n\n      if (keys) keys.push(token);\n\n      if (token.optional) {\n        if (token.partial) {\n          route += prefix + '(' + capture + ')?';\n        } else {\n          route += '(?:' + prefix + '(' + capture + '))?';\n        }\n      } else {\n        route += prefix + '(' + capture + ')';\n      }\n    }\n  }\n\n  if (end) {\n    if (!strict) route += '(?:' + delimiter + ')?';\n\n    route += endsWith === '$' ? '$' : '(?=' + endsWith + ')';\n  } else {\n    if (!strict) route += '(?:' + delimiter + '(?=' + endsWith + '))?';\n    if (!isEndDelimited) route += '(?=' + delimiter + '|' + endsWith + ')';\n  }\n\n  return new RegExp('^' + route, flags(options));\n}\n\n/**\n * Normalize the given path string, returning a regular expression.\n *\n * An empty array can be passed in for the keys, which will hold the\n * placeholder key descriptions. For example, using `/user/:id`, `keys` will\n * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.\n *\n * @param  {(string|RegExp|Array)} path\n * @param  {Array=}                keys\n * @param  {Object=}               options\n * @return {!RegExp}\n */\nfunction pathToRegexp(path, keys, options) {\n  if (path instanceof RegExp) {\n    return regexpToRegexp(path, keys);\n  }\n\n  if (Array.isArray(path)) {\n    return arrayToRegexp( /** @type {!Array} */path, keys, options);\n  }\n\n  return stringToRegexp( /** @type {string} */path, keys, options);\n}\n\nexports.default = pathToRegexp;\nexports.parse = parse;\nexports.compile = compile;\nexports.tokensToFunction = tokensToFunction;\nexports.tokensToRegExp = tokensToRegExp;\n\n//# sourceURL=webpack:///./node_modules/@littleq/router-lite/lib/path-to-regexp.js?");

/***/ }),

/***/ "./node_modules/@littleq/router-lite/route-data-lite.js":
/*!**************************************************************!*\
  !*** ./node_modules/@littleq/router-lite/route-data-lite.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/// <reference path=\"typings-project/global.d.ts\"/>\n\n/**\n * # router-data-lite\n *\n * `<router-data-lite>`: It's a tag that you put inside router-lite to set the routes\n *\n * @extends {HTMLElement}\n * @customElement\n*/\n\nclass RouteDataLite extends window.HTMLElement {\n  static get is() {\n    return 'route-data-lite';\n  }\n\n  set route(route) {\n    this.setAttribute('route', route);\n  }\n\n  get route() {\n    return this.getAttribute('route');\n  }\n}\n\nif (!window.customElements.get(RouteDataLite.is)) {\n  window.customElements.define(RouteDataLite.is, RouteDataLite);\n} else {\n  console.warn(`${RouteDataLite.is} is already defined somewhere. Please check your code.`);\n}\n\n//# sourceURL=webpack:///./node_modules/@littleq/router-lite/route-data-lite.js?");

/***/ }),

/***/ "./node_modules/@littleq/router-lite/router-lite.js":
/*!**********************************************************!*\
  !*** ./node_modules/@littleq/router-lite/router-lite.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _pathToRegexp = __webpack_require__(/*! ./lib/path-to-regexp.js */ \"./node_modules/@littleq/router-lite/lib/path-to-regexp.js\");\n\nvar _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * # router-lite\n *\n * `<router-lite>`: A routing system that returns the route from a list of possible routes given a path\n * also returns route parameters given route\n *\n * @extends {HTMLElement}\n * @customElement\n*/\n\nclass RouterLite extends window.HTMLElement {\n  static get is() {\n    return 'router-lite';\n  }\n\n  static get observedAttributes() {\n    return ['fallback-route'];\n  }\n\n  constructor() {\n    super();\n    this.__data = {};\n    this.__routeInitialized = false;\n    this._boundChildrenChanged = this._childrenChanged.bind(this);\n    this.routes = [];\n  }\n\n  connectedCallback() {\n    if (!this.fallbackRoute) this.fallbackRoute = 'no-page';\n\n    // Handle any children that were already parsed before this\n    // element upgraded\n    if (this.children) {\n      for (let child of Array.from(this.children)) {\n        this._getRoute(child);\n      }\n    }\n\n    // Handle any children that are added after this element is upgraded.\n    // We do this because the MutationObserver will not fire if\n    // the children were already parsed before the element was\n    // upgraded.\n    this._observer = new window.MutationObserver(this._boundChildrenChanged);\n    this._observer.observe(this, { childList: true });\n\n    if (this.hasAttribute('fallback-route')) {\n      this.__data.fallbackRoute = this.getAttribute('fallback-route');\n    }\n\n    this.__routeInitialized = true;\n    this._pathChanged(this.path);\n  }\n\n  disconnectedCallback() {\n    if (this._observer) this._observer.disconnect();\n  }\n\n  set currentRoute(currentRoute) {\n    this.__data.currentRoute = currentRoute;\n    this.setAttribute('current-route', currentRoute);\n  }\n\n  get currentRoute() {\n    return this.__data.currentRoute;\n  }\n\n  set fallbackRoute(fallbackRoute) {\n    this.__data.fallbackRoute = fallbackRoute;\n    this.setAttribute('fallback-route', fallbackRoute);\n  }\n\n  get fallbackRoute() {\n    return this.__data.fallbackRoute;\n  }\n\n  set path(path) {\n    this.__data.path = path;\n    if (this.__routeInitialized) {\n      this._pathChanged(path);\n    }\n  }\n\n  get path() {\n    return this.__data.path;\n  }\n\n  _childrenChanged(changes) {\n    for (let change of changes) {\n      if (change.type === 'childList' && change.addedNodes) {\n        for (let child of Array.from(change.addedNodes)) {\n          this._getRoute(child);\n        }\n      }\n    }\n  }\n\n  _getRoute(child) {\n    if (child.nodeName.toLowerCase() === 'route-data-lite') {\n      if (child.route && typeof child.route === 'string' && child.route.trim()) {\n        this.routes.push(child.route);\n      } else if (child.hasAttribute('route') && typeof child.getAttribute('route') === 'string' && child.getAttribute('route').trim()) {\n        this.routes.push(child.getAttribute('route'));\n      } else {\n        console.warn(`There's no route information found in route-data `, child);\n      }\n    } else {\n      console.warn(`Only route-data-lite is allowed`, child);\n    }\n  }\n\n  _pathChanged(path) {\n    if (!path) return;\n    let exec = null;\n    let re = null;\n    let keys = [];\n    for (let route of this.routes) {\n      keys = [];\n      re = (0, _pathToRegexp2.default)(route, keys);\n      exec = re.exec(path);\n      if (exec) return this._routeMatched(route, exec, keys);\n    }\n    return this._routeMatched(this.fallbackRoute, [], []);\n  }\n\n  _routeMatched(route, exec, keys) {\n    const params = {};\n    for (let i = 0, l = keys.length; i < l; i++) {\n      let key = keys[i];\n      let { name } = key;\n      params[name] = exec[i + 1] || null;\n    }\n\n    this.routeParamObject = params;\n    this.currentRoute = route;\n\n    Promise.resolve().then(() => {\n      this.dispatchEvent(new window.CustomEvent('route-param-object-change', { detail: this.routeParamObject }));\n      this.dispatchEvent(new window.CustomEvent('current-route-change', { detail: this.currentRoute }));\n    });\n  }\n\n  attributeChangedCallback(name, oldValue, newValue) {\n    if (name === 'fallback-route' && this.__data.fallbackRoute !== newValue) {\n      this.__data.fallbackRoute = newValue;\n    }\n  }\n} /// <reference path=\"typings-project/global.d.ts\"/>\n\nif (!window.customElements.get(RouterLite.is)) {\n  window.customElements.define(RouterLite.is, RouterLite);\n} else {\n  console.warn(`${RouterLite.is} is already defined somewhere. Please check your code.`);\n}\n\n//# sourceURL=webpack:///./node_modules/@littleq/router-lite/router-lite.js?");

/***/ }),

/***/ "./node_modules/@littleq/template-loader-lite/template-loader-lite.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@littleq/template-loader-lite/template-loader-lite.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * # template-loader-lite\n *\n * `<template-loader-lite>`: A template loading device\n *\n * @extends {HTMLElement}\n * @customElement\n*/\n\nclass TemplateLoaderLite extends window.HTMLElement {\n  static get is() {\n    return 'template-loader-lite';\n  }\n\n  static get observedAttributes() {\n    return ['pattern'];\n  }\n\n  constructor() {\n    super();\n    this.__data = {};\n    this.__patternInitialized = false;\n  }\n\n  connectedCallback() {\n    this.__patternInitialized = true;\n    if (this.pattern || this.getAttribute('pattern')) {\n      this._patternChanged(this.pattern || this.getAttribute('pattern'));\n    }\n  }\n\n  set pattern(pattern) {\n    this.__data.pattern = pattern;\n    if (this.__patternInitialized) {\n      this._patternChanged(pattern);\n    }\n  }\n\n  get pattern() {\n    return this.__data.pattern;\n  }\n\n  _patternChanged(pattern) {\n    if (!pattern) return;\n    const template = this.querySelector(`template[pattern=\"${pattern}\"]`);\n    if (template) {\n      this.template = template;\n      Promise.resolve().then(() => {\n        this.dispatchEvent(new window.CustomEvent('template-change', { detail: this.template }));\n      });\n    } else {\n      console.warn(`There's no template available for pattern: `, pattern);\n    }\n  }\n\n  attributeChangedCallback(name, oldValue, newValue) {\n    if (name === 'pattern' && this.__data.pattern !== newValue) {\n      this.__data.pattern = newValue;\n      this._patternChanged(newValue);\n    }\n  }\n}\n\nif (!window.customElements.get(TemplateLoaderLite.is)) {\n  window.customElements.define(TemplateLoaderLite.is, TemplateLoaderLite);\n} else {\n  console.warn(`${TemplateLoaderLite.is} is already defined somewhere. Please check your code.`);\n}\n\n//# sourceURL=webpack:///./node_modules/@littleq/template-loader-lite/template-loader-lite.js?");

/***/ }),

/***/ "./node_modules/@littleq/template-viewer-lite/template-container-lite.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@littleq/template-viewer-lite/template-container-lite.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * # template-viwer-lite\n *\n * `<template-container-lite>`: A template container device\n *\n * @extends {HTMLElement}\n * @customElement\n*/\n\nclass TemplateContainerLite extends window.HTMLElement {\n  static get is() {\n    return 'template-container-lite';\n  }\n\n  constructor() {\n    super();\n    this.__templateInitialized = false;\n    this.attachShadow({ mode: 'open' });\n  }\n\n  connectedCallback() {\n    if (!this.__templateInitialized) {\n      this.shadowRoot.appendChild(document.createElement('slot'));\n    }\n    this.__templateInitialized = true;\n  }\n\n  setContent(content) {\n    while (this.firstChild) {\n      this.removeChild(this.firstChild);\n    }\n    this.appendChild(content);\n  }\n}\n\nif (!window.customElements.get(TemplateContainerLite.is)) {\n  window.customElements.define(TemplateContainerLite.is, TemplateContainerLite);\n} else {\n  console.warn(`${TemplateContainerLite.is} is already defined somewhere. Please check your code.`);\n}\n\n//# sourceURL=webpack:///./node_modules/@littleq/template-viewer-lite/template-container-lite.js?");

/***/ }),

/***/ "./node_modules/@littleq/template-viewer-lite/template-viewer-lite.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@littleq/template-viewer-lite/template-viewer-lite.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * # template-viwer-lite\n *\n * `<template-viewer-lite>`: A template viewer device\n *\n * @extends {HTMLElement}\n * @customElement\n*/\n\nclass TemplateViewerLite extends window.HTMLElement {\n  static get is() {\n    return 'template-viewer-lite';\n  }\n\n  constructor() {\n    super();\n    this.__data = {};\n    this.__templateInitialized = false;\n    this.attachShadow({ mode: 'open' });\n  }\n\n  connectedCallback() {\n    if (!this.__templateInitialized) {\n      this.shadowRoot.appendChild(document.createElement('slot'));\n    }\n    this.__templateInitialized = true;\n    this._templateChanged(this.template || this.getAttribute('template'));\n  }\n\n  set template(template) {\n    this.__data.template = template;\n    if (this.__templateInitialized) {\n      this._templateChanged(template);\n    }\n  }\n\n  get template() {\n    return this.__data.template;\n  }\n\n  _closeTemplate(clone) {\n    const oldContainer = this.querySelector('template-container-lite[active]');\n    if (oldContainer) {\n      oldContainer.setAttribute('closing', '');\n      setTimeout(() => {\n        this.removeChild(oldContainer);\n        this._openTemplate(clone);\n      }, 200);\n    } else {\n      this._openTemplate(clone);\n    }\n  }\n\n  _openTemplate(clone) {\n    const container = document.createElement('template-container-lite');\n    container.setAttribute('active', '');\n    container.setContent(clone);\n    this.appendChild(container);\n  }\n\n  _templateChanged(template) {\n    if (!template) return;\n    const clone = document.importNode(template.content, true);\n    this._closeTemplate(clone);\n  }\n}\n\nif (!window.customElements.get(TemplateViewerLite.is)) {\n  window.customElements.define(TemplateViewerLite.is, TemplateViewerLite);\n} else {\n  console.warn(`${TemplateViewerLite.is} is already defined somewhere. Please check your code.`);\n}\n\n//# sourceURL=webpack:///./node_modules/@littleq/template-viewer-lite/template-viewer-lite.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nlet lazyLoad = (() => {\n  var _ref = _asyncToGenerator(function* (fragment) {\n    try {\n      if (fragment && typeof fragment === 'function') {\n        yield fragment();\n      } else {\n        yield Promise.reject(new Error('No fragment found'));\n      }\n    } catch (error) {\n      console.log(error);\n    }\n  });\n\n  return function lazyLoad(_x) {\n    return _ref.apply(this, arguments);\n  };\n})();\n\n__webpack_require__(/*! @littleq/core-lite */ \"./node_modules/@littleq/core-lite/core-lite.js\");\n\nvar _fragments = __webpack_require__(/*! ./utils/fragments.js */ \"./src/utils/fragments.js\");\n\nvar _uiState = __webpack_require__(/*! ./utils/ui-state.js */ \"./src/utils/ui-state.js\");\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nconst core = document.querySelector('core-lite');\ncore.addEventListener('current-route-change', currentRouteChanged);\ncore.addEventListener('route-param-object-change', routeParamObjectChanged);\n\nfunction currentRouteChanged({ detail: route }) {\n  lazyLoad(_fragments.fragments[route]);\n  (0, _uiState.updateState)('currentRoute', route);\n}\n\nfunction routeParamObjectChanged({ detail: params }) {\n  (0, _uiState.updateState)('routeParamObject', params);\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/index.worker.js":
/*!*****************************!*\
  !*** ./src/index.worker.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  return new Worker(__webpack_require__.p + \"29dac2af50ec19fde7a7.worker.js\");\n};\n\n//# sourceURL=webpack:///./src/index.worker.js?");

/***/ }),

/***/ "./src/utils/fragments.js":
/*!********************************!*\
  !*** ./src/utils/fragments.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nconst fragments = {\n  '/': () => Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(0)]).then(function() { var module = __webpack_require__(/*! ../pages/page-home/index.js */ \"./src/pages/page-home/index.js\"); return typeof module === \"object\" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === \"object\" && module, { \"default\": module }); }),\n  '/page/:id': () => Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(1)]).then(function() { var module = __webpack_require__(/*! ../pages/page-params/index.js */ \"./src/pages/page-params/index.js\"); return typeof module === \"object\" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === \"object\" && module, { \"default\": module }); })\n};\nexports.fragments = fragments;\n\n//# sourceURL=webpack:///./src/utils/fragments.js?");

/***/ }),

/***/ "./src/utils/ui-state.js":
/*!*******************************!*\
  !*** ./src/utils/ui-state.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.updateState = exports.dispatch = exports.unsubscribe = exports.subscribe = undefined;\n\nlet dispatch = (() => {\n  var _ref = _asyncToGenerator(function* (path, value) {\n    yield Promise.resolve();\n    const fns = functions[path];\n    lastValues[path] = value;\n    if (fns) {\n      for (let i = 0; i < fns.length; i++) {\n        const fn = fns[i];\n        fn(value);\n      }\n    }\n  });\n\n  return function dispatch(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n})();\n\nvar _workerConnector = __webpack_require__(/*! ./worker-connector.js */ \"./src/utils/worker-connector.js\");\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nconst functions = {};\nconst lastValues = {};\n\nconst subscribe = (path, fn) => {\n  if (!functions[path]) functions[path] = [];\n  if (functions[path].indexOf(fn) < 0) functions[path].push(fn);\n  if (lastValues[path]) fn(lastValues[path]);\n};\n\nconst unsubscribe = (path, fn) => {\n  const index = functions[path].indexOf(fn);\n  if (index >= 0) functions[path].splice(index, 1);\n};\n\nfunction updateState(path, value) {\n  _workerConnector.worker.postMessage({\n    action: 'state-change',\n    path,\n    value\n  });\n}\n\n_workerConnector.worker.addEventListener('message', ({ data }) => {\n  const { action } = data;\n  if (action === 'state-change') return dispatch(data.path, data.value);\n});\n\nexports.subscribe = subscribe;\nexports.unsubscribe = unsubscribe;\nexports.dispatch = dispatch;\nexports.updateState = updateState;\n\n//# sourceURL=webpack:///./src/utils/ui-state.js?");

/***/ }),

/***/ "./src/utils/worker-connector.js":
/*!***************************************!*\
  !*** ./src/utils/worker-connector.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.worker = undefined;\n\nvar _indexWorker = __webpack_require__(/*! ../index.worker.js */ \"./src/index.worker.js\");\n\nvar _indexWorker2 = _interopRequireDefault(_indexWorker);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst worker = new _indexWorker2.default();\nexports.worker = worker;\n\n//# sourceURL=webpack:///./src/utils/worker-connector.js?");

/***/ })

/******/ });