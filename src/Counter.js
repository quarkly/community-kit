import React from 'react';
import atomize from "@quarkly/atomize";

const Counter = props => <div {...props}>Say hello Counter</div>

export default atomize(Counter)({
  name: "Counter",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "Counter — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
