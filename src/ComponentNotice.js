import React from 'react';
import atomize from '@quarkly/atomize';

const Message = atomize.div();

const ComponentNotice = ({ message, ...props }) => (
    <Message
        padding="16px"
        width="100%"
        font="--font-base"
        font-style="italic"
        color="--color-grey"
        background-color="--color-light"
        border="1px dashed --color-lightD2"
        box-sizing="border-box"
        {...props}
    >
        {message || 'Some Text'}
    </Message>
);

export default atomize(ComponentNotice)({
    name: 'Component Notice',
    propInfo: {
        message: {
            title: 'Message',
            control: 'input',
            type: 'text',
            weight: 1,
        },
    },
});
