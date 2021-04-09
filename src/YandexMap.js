import React from 'react';
import atomize from "@quarkly/atomize";

const YandexMap = props => <div {...props}>Say hello YandexMap</div>

export default atomize(YandexMap)({
  name: "YandexMap",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "YandexMap — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
