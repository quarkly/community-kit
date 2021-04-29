import React from 'react';
import { Box, Icon } from '@quarkly/widgets';

const Point = ({ numb, active, clickFunc, override }) => {
    const clickEvent = () => clickFunc(numb);

    return (
        <Box
            {...override(
                'Point',
                `Point ${numb}`,
                numb === active && 'Point :active'
            )}
            onClick={clickEvent}
        >
            <Icon
                {...override(
                    'Point Icon',
                    `Point Icon ${numb}`,
                    numb === active && 'Point Icon :active'
                )}
            />
        </Box>
    );
};

export default Point;
