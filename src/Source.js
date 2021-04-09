import React from 'react';
import atomize from "@quarkly/atomize";

const Source = props => <div {...props}>Say hello Source</div>

export default atomize(Source)({
  name: "Source",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "Source — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
