import React from 'react';
import atomize from "@quarkly/atomize";

const ThunkComponent = props => <div {...props}>Say hello ThunkComponent</div>

export default atomize(ThunkComponent)({
  name: "ThunkComponent",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "ThunkComponent — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
