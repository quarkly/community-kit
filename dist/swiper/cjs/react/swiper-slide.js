"use strict";

exports.__esModule = true;
exports.SwiperSlide = void 0;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../components-shared/utils.js");

var _useIsomorphicLayoutEffect = require("./use-isomorphic-layout-effect.js");

var _context = require("./context.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SwiperSlide = /*#__PURE__*/(0, _react.forwardRef)(function (_temp, externalRef) {
  let {
    tag: Tag = 'div',
    children,
    className = '',
    swiper,
    zoom,
    virtualIndex,
    ...rest
  } = _temp === void 0 ? {} : _temp;
  const slideElRef = (0, _react.useRef)(null);
  const [slideClasses, setSlideClasses] = (0, _react.useState)('swiper-slide');

  function updateClasses(_s, el, classNames) {
    if (el === slideElRef.current) {
      setSlideClasses(classNames);
    }
  }

  (0, _useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(() => {
    if (externalRef) {
      externalRef.current = slideElRef.current;
    }

    if (!slideElRef.current || !swiper) {
      return;
    }

    if (swiper.destroyed) {
      if (slideClasses !== 'swiper-slide') {
        setSlideClasses('swiper-slide');
      }

      return;
    }

    swiper.on('_slideClass', updateClasses); // eslint-disable-next-line

    return () => {
      if (!swiper) return;
      swiper.off('_slideClass', updateClasses);
    };
  });
  (0, _useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(() => {
    if (swiper && slideElRef.current && !swiper.destroyed) {
      setSlideClasses(swiper.getSlideClasses(slideElRef.current));
    }
  }, [swiper]);
  const slideData = {
    isActive: slideClasses.indexOf('swiper-slide-active') >= 0 || slideClasses.indexOf('swiper-slide-duplicate-active') >= 0,
    isVisible: slideClasses.indexOf('swiper-slide-visible') >= 0,
    isDuplicate: slideClasses.indexOf('swiper-slide-duplicate') >= 0,
    isPrev: slideClasses.indexOf('swiper-slide-prev') >= 0 || slideClasses.indexOf('swiper-slide-duplicate-prev') >= 0,
    isNext: slideClasses.indexOf('swiper-slide-next') >= 0 || slideClasses.indexOf('swiper-slide-duplicate-next') >= 0
  };

  const renderChildren = () => {
    return typeof children === 'function' ? children(slideData) : children;
  };

  return /*#__PURE__*/_react.default.createElement(Tag, _extends({
    ref: slideElRef,
    className: (0, _utils.uniqueClasses)(`${slideClasses}${className ? ` ${className}` : ''}`),
    "data-swiper-slide-index": virtualIndex
  }, rest), /*#__PURE__*/_react.default.createElement(_context.SwiperSlideContext.Provider, {
    value: slideData
  }, zoom ? /*#__PURE__*/_react.default.createElement("div", {
    className: "swiper-zoom-container",
    "data-swiper-zoom": typeof zoom === 'number' ? zoom : undefined
  }, renderChildren()) : renderChildren()));
});
exports.SwiperSlide = SwiperSlide;
SwiperSlide.displayName = 'SwiperSlide';