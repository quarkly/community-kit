import React from 'react';
import atomize from "@quarkly/atomize";

const BackToTop = props => <div {...props}>Say hello BackToTop</div>

export default atomize(BackToTop)({
  name: "BackToTop",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "BackToTop — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
