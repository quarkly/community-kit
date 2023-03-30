"use strict";

exports.__esModule = true;
exports.default = void 0;

var _slideTo = _interopRequireDefault(require("./slideTo.js"));

var _slideToLoop = _interopRequireDefault(require("./slideToLoop.js"));

var _slideNext = _interopRequireDefault(require("./slideNext.js"));

var _slidePrev = _interopRequireDefault(require("./slidePrev.js"));

var _slideReset = _interopRequireDefault(require("./slideReset.js"));

var _slideToClosest = _interopRequireDefault(require("./slideToClosest.js"));

var _slideToClickedSlide = _interopRequireDefault(require("./slideToClickedSlide.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  slideTo: _slideTo.default,
  slideToLoop: _slideToLoop.default,
  slideNext: _slideNext.default,
  slidePrev: _slidePrev.default,
  slideReset: _slideReset.default,
  slideToClosest: _slideToClosest.default,
  slideToClickedSlide: _slideToClickedSlide.default
};
exports.default = _default;