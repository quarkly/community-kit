"use strict";

exports.__esModule = true;
exports.default = Manipulation;

var _appendSlide = _interopRequireDefault(require("./methods/appendSlide.js"));

var _prependSlide = _interopRequireDefault(require("./methods/prependSlide.js"));

var _addSlide = _interopRequireDefault(require("./methods/addSlide.js"));

var _removeSlide = _interopRequireDefault(require("./methods/removeSlide.js"));

var _removeAllSlides = _interopRequireDefault(require("./methods/removeAllSlides.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Manipulation(_ref) {
  let {
    swiper
  } = _ref;
  Object.assign(swiper, {
    appendSlide: _appendSlide.default.bind(swiper),
    prependSlide: _prependSlide.default.bind(swiper),
    addSlide: _addSlide.default.bind(swiper),
    removeSlide: _removeSlide.default.bind(swiper),
    removeAllSlides: _removeAllSlides.default.bind(swiper)
  });
}