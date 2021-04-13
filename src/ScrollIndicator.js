import React from 'react';
import atomize from "@quarkly/atomize";

const ScrollIndicator = props => <div {...props}>Say hello ScrollIndicator</div>

export default atomize(ScrollIndicator)({
  name: "ScrollIndicator",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "ScrollIndicator — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
