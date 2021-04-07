import React from 'react';
import atomize from "@quarkly/atomize";

const Audio = props => <div {...props}>Say hello Audio</div>

export default atomize(Audio)({
  name: "Audio",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "Audio — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
