import React from 'react';
import atomize from '@quarkly/atomize';

const RedirectByLanguage = (props) => (
    <div {...props}>Say hello RedirectByLanguage</div>
);

export default atomize(RedirectByLanguage)({
    name: 'RedirectByLanguage',
    effects: {
        hover: ':hover',
    },
    description: {
        // paste here description for your component
        en: 'RedirectByLanguage — my awesome component',
    },
    propInfo: {
        // paste here props description for your component
        yourCustomProps: {
            control: 'input',
        },
    },
});
