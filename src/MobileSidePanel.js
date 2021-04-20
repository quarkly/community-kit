import React from 'react';
import atomize from "@quarkly/atomize";

const MobileSidePanel = props => <div {...props}>Say hello MobileSidePanel</div>

export default atomize(MobileSidePanel)({
  name: "MobileSidePanel",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "MobileSidePanel — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
