
import React from 'react';
import atomize from '@quarkly/atomize';

const RootParent = atomize.div();
const RootChild = atomize.div();

const Wrapper = ({ children }) => (
    <RootParent margin="16px 8px" display="flex">
        <RootChild
            width="100%"
            color="#000000"
            background-color="#FFFFFF"
            box-shadow="0 0 48px 0 rgba(0,0,0,.2)"
            font-family="sans-serif"
            user-select="none"
            position="relative"
            display="block"
        >
            {children}
        </RootChild>
    </RootParent>
);

export default atomize(Wrapper)({
    name: 'Wrapper',
});
