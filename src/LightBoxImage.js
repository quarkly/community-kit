import React from 'react';
import atomize from "@quarkly/atomize";

const LightBoxImage = props => <div {...props}>Say hello LightBoxImage</div>

export default atomize(LightBoxImage)({
  name: "LightBoxImage",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "LightBoxImage — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
