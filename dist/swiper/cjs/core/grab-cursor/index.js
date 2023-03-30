"use strict";

exports.__esModule = true;
exports.default = void 0;

var _setGrabCursor = _interopRequireDefault(require("./setGrabCursor.js"));

var _unsetGrabCursor = _interopRequireDefault(require("./unsetGrabCursor.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  setGrabCursor: _setGrabCursor.default,
  unsetGrabCursor: _unsetGrabCursor.default
};
exports.default = _default;