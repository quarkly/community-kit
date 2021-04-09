import React from 'react';
import atomize from "@quarkly/atomize";

const Collapse = props => <div {...props}>Say hello Collapse</div>

export default atomize(Collapse)({
  name: "Collapse",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "Collapse — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
