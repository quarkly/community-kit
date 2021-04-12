import React from 'react';
import atomize from "@quarkly/atomize";

const VkPage = props => <div {...props}>Say hello VkPage</div>

export default atomize(VkPage)({
  name: "VkPage",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "VkPage — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
