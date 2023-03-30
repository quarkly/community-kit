"use strict";

exports.__esModule = true;
exports.default = createElementIfNotDefined;

var _ssrWindow = require("ssr-window");

function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  const document = (0, _ssrWindow.getDocument)();

  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach(key => {
      if (!params[key] && params.auto === true) {
        let element = swiper.$el.children(`.${checkProps[key]}`)[0];

        if (!element) {
          element = document.createElement('div');
          element.className = checkProps[key];
          swiper.$el.append(element);
        }

        params[key] = element;
        originalParams[key] = element;
      }
    });
  }

  return params;
}