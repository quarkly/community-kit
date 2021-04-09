import React from 'react';
import atomize from "@quarkly/atomize";

const LightBoxVideo = props => <div {...props}>Say hello LightBoxVideo</div>

export default atomize(LightBoxVideo)({
  name: "LightBoxVideo",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "LightBoxVideo — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
