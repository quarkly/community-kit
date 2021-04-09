import React from 'react';
import atomize from "@quarkly/atomize";

const Gallery = props => <div {...props}>Say hello Gallery</div>

export default atomize(Gallery)({
  name: "Gallery",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "Gallery — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
