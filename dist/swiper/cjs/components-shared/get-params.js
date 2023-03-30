"use strict";

exports.__esModule = true;
exports.getParams = getParams;

var _swiper = _interopRequireDefault(require("swiper"));

var _utils = require("./utils.js");

var _paramsList = require("./params-list.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getParams(obj, splitEvents) {
  if (obj === void 0) {
    obj = {};
  }

  if (splitEvents === void 0) {
    splitEvents = true;
  }

  const params = {
    on: {}
  };
  const events = {};
  const passedParams = {};
  (0, _utils.extend)(params, _swiper.default.defaults);
  (0, _utils.extend)(params, _swiper.default.extendedDefaults);
  params._emitClasses = true;
  params.init = false;
  const rest = {};

  const allowedParams = _paramsList.paramsList.map(key => key.replace(/_/, ''));

  const plainObj = Object.assign({}, obj);
  Object.keys(plainObj).forEach(key => {
    if (typeof obj[key] === 'undefined') return;

    if (allowedParams.indexOf(key) >= 0) {
      if ((0, _utils.isObject)(obj[key])) {
        params[key] = {};
        passedParams[key] = {};
        (0, _utils.extend)(params[key], obj[key]);
        (0, _utils.extend)(passedParams[key], obj[key]);
      } else {
        params[key] = obj[key];
        passedParams[key] = obj[key];
      }
    } else if (key.search(/on[A-Z]/) === 0 && typeof obj[key] === 'function') {
      if (splitEvents) {
        events[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key];
      } else {
        params.on[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key];
      }
    } else {
      rest[key] = obj[key];
    }
  });
  ['navigation', 'pagination', 'scrollbar'].forEach(key => {
    if (params[key] === true) params[key] = {};
    if (params[key] === false) delete params[key];
  });
  return {
    params,
    passedParams,
    rest,
    events
  };
}