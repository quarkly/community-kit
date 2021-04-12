import React from 'react';
import atomize from "@quarkly/atomize";

const FbComment = props => <div {...props}>Say hello FbComment</div>

export default atomize(FbComment)({
  name: "FbComment",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "FbComment — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
