import React from 'react';
import atomize from "@quarkly/atomize";

const YoomoneyDonateForm = props => <div {...props}>Say hello YoomoneyDonateForm</div>

export default atomize(YoomoneyDonateForm)({
  name: "YoomoneyDonateForm",
  effects: {
    hover: ":hover"
  },
  description: {
    // paste here description for your component
    en:
      "YoomoneyDonateForm — my awesome component",
  },
  propInfo: {
    // paste here props description for your component
    yourCustomProps: {
      control: "input"
    }
  }
});
