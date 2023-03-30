"use strict";

exports.__esModule = true;
exports.default = void 0;

var _updateSize = _interopRequireDefault(require("./updateSize.js"));

var _updateSlides = _interopRequireDefault(require("./updateSlides.js"));

var _updateAutoHeight = _interopRequireDefault(require("./updateAutoHeight.js"));

var _updateSlidesOffset = _interopRequireDefault(require("./updateSlidesOffset.js"));

var _updateSlidesProgress = _interopRequireDefault(require("./updateSlidesProgress.js"));

var _updateProgress = _interopRequireDefault(require("./updateProgress.js"));

var _updateSlidesClasses = _interopRequireDefault(require("./updateSlidesClasses.js"));

var _updateActiveIndex = _interopRequireDefault(require("./updateActiveIndex.js"));

var _updateClickedSlide = _interopRequireDefault(require("./updateClickedSlide.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  updateSize: _updateSize.default,
  updateSlides: _updateSlides.default,
  updateAutoHeight: _updateAutoHeight.default,
  updateSlidesOffset: _updateSlidesOffset.default,
  updateSlidesProgress: _updateSlidesProgress.default,
  updateProgress: _updateProgress.default,
  updateSlidesClasses: _updateSlidesClasses.default,
  updateActiveIndex: _updateActiveIndex.default,
  updateClickedSlide: _updateClickedSlide.default
};
exports.default = _default;