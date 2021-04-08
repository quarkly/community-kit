import React from 'react';
import atomize from "@quarkly/atomize";

const DisqusComment = props => <div {...props}>Say hello DisqusComment</div>

export default atomize(DisqusComment)({
  name: "DisqusComment",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "DisqusComment — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
