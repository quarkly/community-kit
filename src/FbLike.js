import React from 'react';
import atomize from "@quarkly/atomize";

const FbLike = props => <div {...props}>Say hello FbLike</div>

export default atomize(FbLike)({
  name: "FbLike",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "FbLike — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
