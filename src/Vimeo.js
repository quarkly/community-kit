import React from 'react';
import atomize from '@quarkly/atomize';

const Vimeo = (props) => <div {...props}>Say hello Vimeo</div>;

export default atomize(Vimeo)({
    name: 'Vimeo',
    effects: {
        hover: ':hover',
    },
    description: {
        // paste here description for your component
        en: 'Vimeo — my awesome component',
    },
    propInfo: {
        // paste here props description for your component
        yourCustomProps: {
            control: 'input',
        },
    },
});
