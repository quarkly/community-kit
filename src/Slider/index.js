import React from 'react';
import atomize from "@quarkly/atomize";

const Slider = props => <div {...props}>Say hello Slider</div>

export default atomize(Slider)({
  name: "Slider",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "Slider — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
