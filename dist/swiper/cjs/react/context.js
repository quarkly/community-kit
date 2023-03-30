"use strict";

exports.__esModule = true;
exports.useSwiperSlide = exports.useSwiper = exports.SwiperSlideContext = exports.SwiperContext = void 0;

var _react = require("react");

const SwiperSlideContext = /*#__PURE__*/(0, _react.createContext)(null);
exports.SwiperSlideContext = SwiperSlideContext;

const useSwiperSlide = () => {
  return (0, _react.useContext)(SwiperSlideContext);
};

exports.useSwiperSlide = useSwiperSlide;
const SwiperContext = /*#__PURE__*/(0, _react.createContext)(null);
exports.SwiperContext = SwiperContext;

const useSwiper = () => {
  return (0, _react.useContext)(SwiperContext);
};

exports.useSwiper = useSwiper;