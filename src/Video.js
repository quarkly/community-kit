import React from 'react';
import atomize from "@quarkly/atomize";

const Video = props => <div {...props}>Say hello Video</div>

export default atomize(Video)({
  name: "Video",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "Video — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
