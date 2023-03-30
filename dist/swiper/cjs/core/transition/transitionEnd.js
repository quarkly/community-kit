"use strict";

exports.__esModule = true;
exports.default = transitionEnd;

var _transitionEmit = _interopRequireDefault(require("./transitionEmit.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transitionEnd(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  (0, _transitionEmit.default)({
    swiper,
    runCallbacks,
    direction,
    step: 'End'
  });
}