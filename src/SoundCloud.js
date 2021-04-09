import React from 'react';
import atomize from "@quarkly/atomize";

const SoundCloud = props => <div {...props}>Say hello SoundCloud</div>

export default atomize(SoundCloud)({
  name: "SoundCloud",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "SoundCloud — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
