import React from 'react';
import atomize from "@quarkly/atomize";

const Menu = props => <div {...props}>Say hello Menu</div>

export default atomize(Menu)({
  name: "Menu",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "Menu — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
