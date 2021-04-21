import React from 'react';
import atomize from "@quarkly/atomize";

const GoogleMap = props => <div {...props}>Say hello GoogleMap</div>

export default atomize(GoogleMap)({
  name: "GoogleMap",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "GoogleMap — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
