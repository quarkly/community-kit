import React from 'react';
import atomize from "@quarkly/atomize";

const LightBoxMap = props => <div {...props}>Say hello LightBoxMap</div>

export default atomize(LightBoxMap)({
  name: "LightBoxMap",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "LightBoxMap — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
