import React from 'react';
import atomize from "@quarkly/atomize";

const Table = props => <div {...props}>Say hello Table</div>

export default atomize(Table)({
  name: "Table",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "Table — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
