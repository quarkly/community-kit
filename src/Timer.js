import React from 'react';
import atomize from "@quarkly/atomize";

const Timer = props => <div {...props}>Say hello Timer</div>

export default atomize(Timer)({
  name: "Timer",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "Timer — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
