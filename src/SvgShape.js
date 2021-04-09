import React from 'react';
import atomize from "@quarkly/atomize";

const SvgShape = props => <div {...props}>Say hello SvgShape</div>

export default atomize(SvgShape)({
  name: "SvgShape",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "SvgShape — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
