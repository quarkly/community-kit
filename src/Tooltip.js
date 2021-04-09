import React from 'react';
import atomize from "@quarkly/atomize";

const Tooltip = props => <div {...props}>Say hello Tooltip</div>

export default atomize(Tooltip)({
  name: "Tooltip",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "Tooltip — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
