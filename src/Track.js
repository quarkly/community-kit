import React from 'react';
import atomize from "@quarkly/atomize";

const Track = props => <div {...props}>Say hello Track</div>

export default atomize(Track)({
  name: "Track",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "Track — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
