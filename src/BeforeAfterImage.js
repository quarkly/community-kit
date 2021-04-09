import React from 'react';
import atomize from "@quarkly/atomize";

const BeforeAfterImage = props => <div {...props}>Say hello BeforeAfterImage</div>

export default atomize(BeforeAfterImage)({
  name: "BeforeAfterImage",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "BeforeAfterImage — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
