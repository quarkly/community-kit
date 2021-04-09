import React from 'react';
import atomize from "@quarkly/atomize";

const BgImageParallax = props => <div {...props}>Say hello BgImageParallax</div>

export default atomize(BgImageParallax)({
  name: "BgImageParallax",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "BgImageParallax — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
