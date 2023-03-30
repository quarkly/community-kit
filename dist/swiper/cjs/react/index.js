"use strict";

exports.__esModule = true;

var _swiperReact = require("./swiper-react.js");

Object.keys(_swiperReact).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _swiperReact[key]) return;
  exports[key] = _swiperReact[key];
});