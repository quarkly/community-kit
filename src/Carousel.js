import React from 'react';
import atomize from "@quarkly/atomize";

const Carousel = props => <div {...props}>Say hello Carousel</div>

export default atomize(Carousel)({
  name: "Carousel",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "Carousel — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
