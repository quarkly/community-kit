"use strict";

exports.__esModule = true;
exports.default = classesToSelector;

function classesToSelector(classes) {
  if (classes === void 0) {
    classes = '';
  }

  return `.${classes.trim().replace(/([\.:!\/])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.')}`;
}