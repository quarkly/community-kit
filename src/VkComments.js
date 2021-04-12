import React from 'react';
import atomize from "@quarkly/atomize";

const VkComments = props => <div {...props}>Say hello VkComments</div>

export default atomize(VkComments)({
  name: "VkComments",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "VkComments — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
