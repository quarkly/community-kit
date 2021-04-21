import React from 'react';
import atomize from "@quarkly/atomize";

const Formspree = props => <div {...props}>Say hello Formspree</div>

export default atomize(Formspree)({
  name: "Formspree",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "Formspree — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
