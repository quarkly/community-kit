import React from 'react';
import atomize from "@quarkly/atomize";

const CardFlip = props => <div {...props}>Say hello CardFlip</div>

export default atomize(CardFlip)({
  name: "CardFlip",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "CardFlip — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
