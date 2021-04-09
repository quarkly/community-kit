import React from 'react';
import atomize from "@quarkly/atomize";

const Notice = props => <div {...props}>Say hello Notice</div>

export default atomize(Notice)({
  name: "Notice",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "Notice — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
