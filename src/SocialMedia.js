import React from 'react';
import atomize from "@quarkly/atomize";

const SocialMedia = props => <div {...props}>Say hello SocialMedia</div>

export default atomize(SocialMedia)({
  name: "SocialMedia",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "SocialMedia — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
