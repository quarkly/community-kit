"use strict";

exports.__esModule = true;
exports.default = void 0;

var _getTranslate = _interopRequireDefault(require("./getTranslate.js"));

var _setTranslate = _interopRequireDefault(require("./setTranslate.js"));

var _minTranslate = _interopRequireDefault(require("./minTranslate.js"));

var _maxTranslate = _interopRequireDefault(require("./maxTranslate.js"));

var _translateTo = _interopRequireDefault(require("./translateTo.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  getTranslate: _getTranslate.default,
  setTranslate: _setTranslate.default,
  minTranslate: _minTranslate.default,
  maxTranslate: _maxTranslate.default,
  translateTo: _translateTo.default
};
exports.default = _default;