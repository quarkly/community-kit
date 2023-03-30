"use strict";

exports.__esModule = true;
exports.Swiper = void 0;

var _react = _interopRequireWildcard(require("react"));

var _swiper = _interopRequireDefault(require("swiper"));

var _getParams = require("../components-shared/get-params.js");

var _mountSwiper = require("../components-shared/mount-swiper.js");

var _utils = require("../components-shared/utils.js");

var _loop = require("./loop.js");

var _getChangedParams = require("../components-shared/get-changed-params.js");

var _getChildren = require("./get-children.js");

var _updateSwiper = require("../components-shared/update-swiper.js");

var _virtual = require("./virtual.js");

var _updateOnVirtualData = require("../components-shared/update-on-virtual-data.js");

var _useIsomorphicLayoutEffect = require("./use-isomorphic-layout-effect.js");

var _context = require("./context.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Swiper = /*#__PURE__*/(0, _react.forwardRef)(function (_temp, externalElRef) {
  let {
    className,
    tag: Tag = 'div',
    wrapperTag: WrapperTag = 'div',
    children,
    onSwiper,
    ...rest
  } = _temp === void 0 ? {} : _temp;
  let eventsAssigned = false;
  const [containerClasses, setContainerClasses] = (0, _react.useState)('swiper');
  const [virtualData, setVirtualData] = (0, _react.useState)(null);
  const [breakpointChanged, setBreakpointChanged] = (0, _react.useState)(false);
  const initializedRef = (0, _react.useRef)(false);
  const swiperElRef = (0, _react.useRef)(null);
  const swiperRef = (0, _react.useRef)(null);
  const oldPassedParamsRef = (0, _react.useRef)(null);
  const oldSlides = (0, _react.useRef)(null);
  const nextElRef = (0, _react.useRef)(null);
  const prevElRef = (0, _react.useRef)(null);
  const paginationElRef = (0, _react.useRef)(null);
  const scrollbarElRef = (0, _react.useRef)(null);
  const {
    params: swiperParams,
    passedParams,
    rest: restProps,
    events
  } = (0, _getParams.getParams)(rest);
  const {
    slides,
    slots
  } = (0, _getChildren.getChildren)(children);

  const onBeforeBreakpoint = () => {
    setBreakpointChanged(!breakpointChanged);
  };

  Object.assign(swiperParams.on, {
    _containerClasses(swiper, classes) {
      setContainerClasses(classes);
    }

  });

  const initSwiper = () => {
    // init swiper
    Object.assign(swiperParams.on, events);
    eventsAssigned = true;
    swiperRef.current = new _swiper.default(swiperParams);

    swiperRef.current.loopCreate = () => {};

    swiperRef.current.loopDestroy = () => {};

    if (swiperParams.loop) {
      swiperRef.current.loopedSlides = (0, _loop.calcLoopedSlides)(slides, swiperParams);
    }

    if (swiperRef.current.virtual && swiperRef.current.params.virtual.enabled) {
      swiperRef.current.virtual.slides = slides;
      const extendWith = {
        cache: false,
        slides,
        renderExternal: setVirtualData,
        renderExternalUpdate: false
      };
      (0, _utils.extend)(swiperRef.current.params.virtual, extendWith);
      (0, _utils.extend)(swiperRef.current.originalParams.virtual, extendWith);
    }
  };

  if (!swiperElRef.current) {
    initSwiper();
  } // Listen for breakpoints change


  if (swiperRef.current) {
    swiperRef.current.on('_beforeBreakpoint', onBeforeBreakpoint);
  }

  const attachEvents = () => {
    if (eventsAssigned || !events || !swiperRef.current) return;
    Object.keys(events).forEach(eventName => {
      swiperRef.current.on(eventName, events[eventName]);
    });
  };

  const detachEvents = () => {
    if (!events || !swiperRef.current) return;
    Object.keys(events).forEach(eventName => {
      swiperRef.current.off(eventName, events[eventName]);
    });
  };

  (0, _react.useEffect)(() => {
    return () => {
      if (swiperRef.current) swiperRef.current.off('_beforeBreakpoint', onBeforeBreakpoint);
    };
  }); // set initialized flag

  (0, _react.useEffect)(() => {
    if (!initializedRef.current && swiperRef.current) {
      swiperRef.current.emitSlidesClasses();
      initializedRef.current = true;
    }
  }); // mount swiper

  (0, _useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(() => {
    if (externalElRef) {
      externalElRef.current = swiperElRef.current;
    }

    if (!swiperElRef.current) return;

    if (swiperRef.current.destroyed) {
      initSwiper();
    }

    (0, _mountSwiper.mountSwiper)({
      el: swiperElRef.current,
      nextEl: nextElRef.current,
      prevEl: prevElRef.current,
      paginationEl: paginationElRef.current,
      scrollbarEl: scrollbarElRef.current,
      swiper: swiperRef.current
    }, swiperParams);
    if (onSwiper) onSwiper(swiperRef.current); // eslint-disable-next-line

    return () => {
      if (swiperRef.current && !swiperRef.current.destroyed) {
        swiperRef.current.destroy(true, false);
      }
    };
  }, []); // watch for params change

  (0, _useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(() => {
    attachEvents();
    const changedParams = (0, _getChangedParams.getChangedParams)(passedParams, oldPassedParamsRef.current, slides, oldSlides.current, c => c.key);
    oldPassedParamsRef.current = passedParams;
    oldSlides.current = slides;

    if (changedParams.length && swiperRef.current && !swiperRef.current.destroyed) {
      (0, _updateSwiper.updateSwiper)({
        swiper: swiperRef.current,
        slides,
        passedParams,
        changedParams,
        nextEl: nextElRef.current,
        prevEl: prevElRef.current,
        scrollbarEl: scrollbarElRef.current,
        paginationEl: paginationElRef.current
      });
    }

    return () => {
      detachEvents();
    };
  }); // update on virtual update

  (0, _useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(() => {
    (0, _updateOnVirtualData.updateOnVirtualData)(swiperRef.current);
  }, [virtualData]); // bypass swiper instance to slides

  function renderSlides() {
    if (swiperParams.virtual) {
      return (0, _virtual.renderVirtual)(swiperRef.current, slides, virtualData);
    }

    if (!swiperParams.loop || swiperRef.current && swiperRef.current.destroyed) {
      return slides.map(child => {
        return /*#__PURE__*/_react.default.cloneElement(child, {
          swiper: swiperRef.current
        });
      });
    }

    return (0, _loop.renderLoop)(swiperRef.current, slides, swiperParams);
  }

  return /*#__PURE__*/_react.default.createElement(Tag, _extends({
    ref: swiperElRef,
    className: (0, _utils.uniqueClasses)(`${containerClasses}${className ? ` ${className}` : ''}`)
  }, restProps), /*#__PURE__*/_react.default.createElement(_context.SwiperContext.Provider, {
    value: swiperRef.current
  }, slots['container-start'], /*#__PURE__*/_react.default.createElement(WrapperTag, {
    className: "swiper-wrapper"
  }, slots['wrapper-start'], renderSlides(), slots['wrapper-end']), (0, _utils.needsNavigation)(swiperParams) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    ref: prevElRef,
    className: "swiper-button-prev"
  }), /*#__PURE__*/_react.default.createElement("div", {
    ref: nextElRef,
    className: "swiper-button-next"
  })), (0, _utils.needsScrollbar)(swiperParams) && /*#__PURE__*/_react.default.createElement("div", {
    ref: scrollbarElRef,
    className: "swiper-scrollbar"
  }), (0, _utils.needsPagination)(swiperParams) && /*#__PURE__*/_react.default.createElement("div", {
    ref: paginationElRef,
    className: "swiper-pagination"
  }), slots['container-end']));
});
exports.Swiper = Swiper;
Swiper.displayName = 'Swiper';