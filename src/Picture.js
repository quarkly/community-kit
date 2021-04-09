import React from 'react';
import atomize from "@quarkly/atomize";

const Picture = props => <div {...props}>Say hello Picture</div>

export default atomize(Picture)({
  name: "Picture",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "Picture — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
