import React from 'react';
import atomize from "@quarkly/atomize";

const SimpleTabsList = props => <div {...props}>Say hello SimpleTabsList</div>

export default atomize(SimpleTabsList)({
  name: "SimpleTabsList",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "SimpleTabsList — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
