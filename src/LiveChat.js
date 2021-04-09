import React from 'react';
import atomize from "@quarkly/atomize";

const LiveChat = props => <div {...props}>Say hello LiveChat</div>

export default atomize(LiveChat)({
  name: "LiveChat",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "LiveChat — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
