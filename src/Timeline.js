import React from 'react';
import atomize from "@quarkly/atomize";

const Timeline = props => <div {...props}>Say hello Timeline</div>

export default atomize(Timeline)({
  name: "Timeline",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "Timeline — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
