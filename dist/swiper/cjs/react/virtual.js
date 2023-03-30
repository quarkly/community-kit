"use strict";

exports.__esModule = true;
exports.renderVirtual = renderVirtual;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderVirtual(swiper, slides, virtualData) {
  if (!virtualData) return null;
  const style = swiper.isHorizontal() ? {
    [swiper.rtlTranslate ? 'right' : 'left']: `${virtualData.offset}px`
  } : {
    top: `${virtualData.offset}px`
  };
  return slides.filter((child, index) => index >= virtualData.from && index <= virtualData.to).map(child => {
    return /*#__PURE__*/_react.default.cloneElement(child, {
      swiper,
      style
    });
  });
}