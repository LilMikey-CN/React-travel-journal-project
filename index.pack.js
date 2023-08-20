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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jxk/Developments/Scrimba/React-travel-journal-project/node_modules/react/index.js'");

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jxk/Developments/Scrimba/React-travel-journal-project/node_modules/react-dom/index.js'");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(15);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById("root"));

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Nav = __webpack_require__(17);

var _Nav2 = _interopRequireDefault(_Nav);

var _MainContent = __webpack_require__(19);

var _MainContent2 = _interopRequireDefault(_MainContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(_Nav2.default, null),
    _react2.default.createElement(_MainContent2.default, null)
  );
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Card;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Card(props) {
  return _react2.default.createElement(
    "div",
    { className: "card" },
    _react2.default.createElement(
      "div",
      { className: "card--image--container" },
      _react2.default.createElement("img", { src: props.imageUrl })
    ),
    _react2.default.createElement(
      "div",
      { className: "card--content" },
      _react2.default.createElement(
        "div",
        { className: "location" },
        _react2.default.createElement("img", { src: "../images/pin-icon.svg" }),
        _react2.default.createElement(
          "span",
          { className: "location--text" },
          props.location.toUpperCase()
        ),
        _react2.default.createElement(
          "a",
          {
            className: "location--link",
            href: props.googleMapsUrl,
            target: "_blank"
          },
          "View on Google Maps"
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "card--title" },
        props.title
      ),
      _react2.default.createElement(
        "div",
        { className: "card--duration" },
        props.startDate,
        " - ",
        props.endDate
      ),
      _react2.default.createElement(
        "div",
        { className: "card--description" },
        props.description
      )
    )
  );
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Nav;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Nav() {
  return _react2.default.createElement(
    "nav",
    { className: "nav" },
    _react2.default.createElement("img", {
      className: "nav--logo",
      src: "../images/earth-logo.svg",
      alt: "logo" }),
    _react2.default.createElement(
      "div",
      { className: "nav--title" },
      "my travel journal."
    )
  );
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = [{
    title: "Mount Fuji",
    location: "Japan",
    googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
    startDate: "12 Jan, 2021",
    endDate: "24 Jan, 2021",
    description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    imageUrl: "https://source.unsplash.com/WLxQvbMyfas"
}, {
    title: "Sydney Opera House",
    location: "Australia",
    googleMapsUrl: "https://goo.gl/maps/mvK1YCC92SDUUPwC6",
    startDate: "27 May, 2021",
    endDate: "8 Jun, 2021",
    description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
    imageUrl: "https://source.unsplash.com/JmuyB_LibRo"
}, {
    title: "Geirangerfjord",
    location: "Norway",
    googleMapsUrl: "https://goo.gl/maps/GnrM24hjc97FQwXu8",
    startDate: "01 Oct, 2021",
    endDate: "18 Nov, 2021",
    description: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
    imageUrl: "https://source.unsplash.com/3PeSjpLVtLg"
}];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MainContent;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Card = __webpack_require__(16);

var _Card2 = _interopRequireDefault(_Card);

var _data = __webpack_require__(18);

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MainContent() {
  var datalist = _data2.default;
  console.log(datalist);
  var cards = datalist.map(function (item) {
    return _react2.default.createElement(_Card2.default, item);
  });
  return _react2.default.createElement(
    "div",
    { className: "main-content" },
    cards
  );
}

/***/ })
/******/ ]);