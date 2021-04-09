import React from 'react';
import atomize from "@quarkly/atomize";

const YouTube = props => <div {...props}>Say hello YouTube</div>

export default atomize(YouTube)({
  name: "YouTube",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "YouTube — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
