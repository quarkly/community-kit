import React from 'react';
import atomize from "@quarkly/atomize";

const Animation = props => <div {...props}>Say hello Animation</div>

export default atomize(Animation)({
  name: "Animation",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "Animation — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
