import React, { useEffect } from 'react';
import { Box } from '@quarkly/widgets';
import { useNavigate } from './navigate';
import { propInfo, defaultProps } from './props';

const Redirect = ({ destination, ...props }) => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate(destination);
    }, [navigate, destination]);

    return <Box {...props}>Redirect to {destination}...</Box>;
};

Object.assign(Redirect, {
    propInfo,
    defaultProps,
});

export default Redirect;
