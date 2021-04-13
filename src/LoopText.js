import React from 'react';
import atomize from "@quarkly/atomize";

const LoopText = props => <div {...props}>Say hello LoopText</div>

export default atomize(LoopText)({
  name: "LoopText",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "LoopText — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
