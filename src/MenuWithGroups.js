import React from 'react';
import atomize from "@quarkly/atomize";

const MenuWithGroups = props => <div {...props}>Say hello MenuWithGroups</div>

export default atomize(MenuWithGroups)({
  name: "MenuWithGroups",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "MenuWithGroups — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
